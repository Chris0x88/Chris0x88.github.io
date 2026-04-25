---
name: stack-detection
description: Read-only enumeration of AI provider configuration on the user's machine. Opt-in.
---

# Stack Detection · Phase 4

Detect which AI providers and tools the user already has configured. Read-only. Presence/absence only. **Never read key values.**

## Mandatory consent gate

Before running any check, show the user the exact list below and ask:

> I'd like to check what AI tools and providers you already have configured. I will only check whether each item exists. I will never read its contents. The full list is:
>
> [show the list]
>
> Do I have permission to run these checks? (yes / no / let me see specific ones)

If they say no, write `stack.json` with `{ "consent": "declined" }` and skip the rest of this phase.

If they ask to whitelist, run only the ones they approve.

## The check list

### Provider API keys (environment variables)

Check for the presence of these env vars. **Don't print or read the values.** Just whether they exist.

| Variable | Provider |
|---|---|
| `ANTHROPIC_API_KEY` | Anthropic |
| `OPENAI_API_KEY` | OpenAI |
| `OPENROUTER_API_KEY` | OpenRouter |
| `GOOGLE_API_KEY` or `GEMINI_API_KEY` | Google Gemini |
| `DEEPSEEK_API_KEY` | DeepSeek |
| `MISTRAL_API_KEY` | Mistral |
| `GROQ_API_KEY` | Groq |
| `TOGETHER_API_KEY` | Together AI |

Use `env | grep -i "<varname>"` style checks, or check `os.environ` in Python. Boolean per variable.

### Config directories

Check for the existence of these directories. Don't list contents.

| Path | Tool |
|---|---|
| `~/.anthropic/` | Anthropic CLI |
| `~/.config/openai/` | OpenAI CLI |
| `~/.claude/` | Claude Code |
| `~/.codex/` | OpenAI Codex |
| `~/.cursor/` | Cursor |
| `~/.continue/` | Continue.dev |
| `~/.aider/` | Aider |
| `~/.ollama/` | Ollama (local LLMs) |
| `~/.config/llm/` | Simon Willison's `llm` CLI |
| `~/.openrouter/` | OpenRouter CLI |

### Installed agent harnesses (PATH check)

Check if these binaries are on PATH. Use `command -v <name>`.

- `claude` (Claude Code)
- `codex` (OpenAI Codex)
- `hermes` (Nous Hermes agent)
- `aider`
- `ollama`
- `llm` (Simon Willison's CLI)
- `cursor` (Cursor IDE CLI)

### Editor / IDE signals

Check for the existence of these to infer the user's primary editor:

| Path | Editor |
|---|---|
| `~/.vscode/` or `~/Library/Application Support/Code/` | VS Code |
| `~/.cursor/` (already above) | Cursor |
| `~/.config/nvim/` | Neovim |
| `~/Library/Application Support/JetBrains/` | JetBrains family |
| `/Applications/Antigravity.app/` | Google Antigravity |

### Operating system & package manager

Cheap, useful context. Get with `uname -a` for OS. Check for:

- `brew --version` (Homebrew)
- `port version` (MacPorts)
- `apt --version` (Debian/Ubuntu)
- `winget --version` (Windows package manager)

## What you must NOT do

- **Do not open or read any files.** Existence checks only. `os.path.exists(...)` not `open(...)`.
- **Do not list directory contents.** No `ls`, no `os.listdir`.
- **Do not read environment variable values.** `if "ANTHROPIC_API_KEY" in os.environ` is fine. Reading the value is not.
- **Do not check anything outside the list above** without asking the user first.
- **Do not check git config beyond `git config user.email` if needed for the consultant report's "from" line.**

## Output structure

Write `stack.json`:

```json
{
  "consent": "granted" | "declined" | "partial",
  "checked_at": "YYYY-MM-DDTHH:MM:SSZ",
  "providers": {
    "anthropic": { "env_key": true, "config_dir": true },
    "openai": { "env_key": false, "config_dir": false },
    "openrouter": { "env_key": true, "config_dir": false },
    "...": { ... }
  },
  "harnesses_installed": ["claude", "codex"],
  "editor": "vscode" | "cursor" | "neovim" | "jetbrains" | "antigravity" | "unknown",
  "os": "darwin" | "linux" | "windows",
  "package_manager": "brew" | "apt" | "winget" | "none"
}
```

If consent was partial, mark each item the user declined to check as `"checked": false`.

## Recommendation logic for phase 5

The report generator will use this output to recommend a provider stack. The default opinion:

- **If Anthropic key present** → recommend Claude Code as primary harness, Sonnet 4.6 as default model
- **If OpenAI key present and no Anthropic** → recommend Codex with GPT 5.5
- **If OpenRouter present** → recommend OpenRouter as the routing layer regardless of which other providers are configured
- **If nothing present** → recommend starting with an Anthropic API key, full stop. Don't paralyse the user with provider choice.

This logic lives in the report generator skill. Stack detection just produces the input.

## When you're done

Summarise to the user in one line:

> Detected: [N] providers configured, [N] harnesses installed, primary editor [editor]. Moving to report generation.

Then move to phase 5.
