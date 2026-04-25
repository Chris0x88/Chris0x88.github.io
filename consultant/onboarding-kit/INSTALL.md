# INSTALL · Onboarding Kit

The kit is a folder of markdown skill files. Any modern AI agent that can read markdown can run it. Below are the exact invocations for the four common harnesses.

---

## Claude Code

The recommended setup.

### Option A · Run in place

```bash
cd /path/to/Chris0x88.github.io/consultant/onboarding-kit
claude
```

Then in the Claude Code session:

> Read kit.skill.md and run the onboarding kit. Write all output files to the current directory.

Claude Code will pick up the skill, walk through the phases, and produce your four output files.

### Option B · Install as a permanent skill

```bash
mkdir -p ~/.claude/skills/onboarding-kit
cp -r /path/to/Chris0x88.github.io/consultant/onboarding-kit/* ~/.claude/skills/onboarding-kit/
```

Then from any project:

> /skills

> Run the onboarding-kit skill.

This makes the kit available everywhere without re-cloning.

---

## OpenAI Codex

Codex reads markdown skills out of the working directory by default.

```bash
cd /path/to/Chris0x88.github.io/consultant/onboarding-kit
codex
```

Then:

> Read kit.skill.md and follow the onboarding-kit phases. Save outputs locally.

For a permanent install across projects, drop the kit into Codex's user skills location (check your Codex version's docs for the exact path; recent versions look in `~/.codex/skills/`).

---

## Hermes

Hermes (Nous Research) accepts markdown skills via its skill loader.

```bash
hermes --skill /path/to/Chris0x88.github.io/consultant/onboarding-kit/kit.skill.md
```

Once running:

> Run the onboarding kit.

Hermes will follow the phase instructions in `kit.skill.md` and pull in the sub-skills as needed.

---

## Generic

The kit is just markdown. If your agent can read instructions from a folder, you can run the kit by:

1. Pointing the agent at `kit.skill.md` as the entry point.
2. Letting the agent read the referenced sub-skills (`skills/*.md`) and the interview script (`interview.md`) on demand.
3. Telling it to write outputs to the working directory.

Tested compatible:
- Claude Code (any version 2025.10+)
- OpenAI Codex CLI (any current version)
- Hermes (Nous Research)
- Custom agents using the standard markdown-skill convention

Not tested but should work:
- Open Interpreter (with file access)
- Aider (loaded as a context file)
- Cursor (paste `kit.skill.md` into chat as system prompt)

---

## Choosing a model

The kit uses tool calls, web research, and structured output. A capable frontier model is recommended.

| Phase | Recommended model |
|---|---|
| Interview | Claude Sonnet 4.6 or higher · GPT 5 or higher |
| Business research | Same. Web access required. |
| Brand capture | Same. Web access required. |
| Stack detection | Any. Lightweight read-only ops. |
| Report generation | Claude Opus 4.7 (best prose) or Sonnet 4.6 (cheaper, almost as good) |

If you only have one model available, use Claude Sonnet 4.6 across the whole run. It's the best generalist for this work right now.

---

## What if my agent doesn't have web access?

Skip the business-research and brand-capture phases, or feed the agent your own scraped data:

> I don't have web access. Here's our website HTML and our LinkedIn About page. Use these as the inputs for business-research and brand-capture, then continue with the rest of the kit.

The interview, stack detection, and report generation phases work fully offline.

---

## Troubleshooting

- **Agent says it can't find a sub-skill.** Make sure the working directory is `consultant/onboarding-kit/` so relative paths resolve.
- **Stack detection reports nothing.** Run the agent under a shell where your provider env vars are set. Check with `env | grep -i api` first.
- **Report HTML looks plain.** The template uses inline styles for portability. If you want it themed, edit `templates/report.html` before running phase 5.
- **Anything else.** Open an issue on the [Chris0x88.github.io repo](https://github.com/Chris0x88/Chris0x88.github.io/issues) or just email me.
