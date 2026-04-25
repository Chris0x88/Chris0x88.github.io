---
name: report-generator
description: Assemble final outputs from phases 1-4. Produces audit-report.html and consultant-brief.md.
---

# Report Generator · Phase 5

You have working memory populated from phases 1 through 4. Produce two files. Stop. Don't pitch, don't speculate, don't add fluff.

## Required inputs

- `business:` (from interview)
- `research:` (from business research)
- `brand:` (from brand capture)
- `stack:` (from stack detection)

## File 1 · audit-report.html

Open `templates/report.html`. It contains placeholder tokens like `{{COMPANY_NAME}}`, `{{PRIMARY_COLOR}}`, `{{OPPORTUNITY_1_TITLE}}`. Fill every token. Write the result to `audit-report.html` in the working directory.

### How to derive the three opportunities

Rank by **(impact / effort)**, not by what's most fashionable. Each opportunity is one of:

- **A repeatable task automation** (anchored to the answer to interview Q3 — most repetitive task)
- **A custom internal tool** (anchored to Q4 — work tools, looking for gaps where two systems don't talk to each other)
- **An onboarding/operations document generated** (anchored to Q7 — junior assistant doc, almost always missing)
- **A weekly decision automation** (anchored to Q8 — automatable decision)
- **A data product** (anchored to Q9 — proprietary data, only if there's genuine moat data and they're not extracting value from it)
- **An observability layer** (anchored to Q5 — first-to-know workflow, only if their current setup is broken)

Pick three. Rank them. For each, write:

- **Title** (5–7 words)
- **Why this one** (1 sentence, references something specific they said)
- **Payoff** (concrete: hours saved per week, decisions improved, errors avoided)
- **Effort** (one of: half-day spike, 1-week build, 2-3 week project)
- **Provider stack to use** (which model + harness, derived from `stack:`)

### Recommended provider config

Apply the logic from stack-detection skill:

- Both Anthropic and OpenRouter present → Anthropic primary, OpenRouter for breadth, OpenAI for embeddings if present.
- Only Anthropic → Claude Code + Sonnet 4.6 default, Opus 4.7 for architecture.
- Only OpenAI → Codex + GPT 5.5 default.
- Only OpenRouter → Use OpenRouter directly with whichever model is best per task. Suggest adding an Anthropic key as well.
- Nothing present → Step-by-step instruction to get an Anthropic API key. Single recommendation, no menu.

Write the recommended config as a fenced JSON block in the report so the user can copy it.

### "What good looks like in 90 days" paragraph

One paragraph, ~60 words. Concrete, specific to their answers. Don't promise transformation, describe a believable end state.

Examples of good:

> By July, the Monday morning report is generated automatically by 9am, the operations lead has 4 hours back per week, and the next two AI experiments queue up from the same skeleton.

Examples of bad:

> Your business will be transformed by an AI-powered platform that delivers 10x productivity.

### Theming

Use `brand.palette.primary` as the report's accent colour. Use `brand.fonts.heading` and `brand.fonts.body` if available (fall back to system fonts if licensing is unclear). Apply `brand.voice.tone_summary` to the report's writing style — match formal/casual register.

If the captured brand is too light to read against white, fall back to a dark theme matching the `chris0x88.github.io` palette (black bg `#0d0c0b`, gold `#c8a96e`).

## File 2 · consultant-brief.md

A markdown summary for Chris. Target 400 words, one screen scrollable. Format:

```markdown
# Onboarding Brief · {{COMPANY_NAME}} · {{DATE}}

## What they do
{{ONE_SENTENCE_BUSINESS}}

## Shape
- {{HEADCOUNT_TOTAL}} people, {{OPERATORS}}/{{BACK_OFFICE}}
- {{REVENUE_MODEL}}
- Customers: {{CUSTOMER_SEGMENT}}
- Tools in use: {{TOOLS_LIST}}

## Their words
> {{Q3_VERBATIM}}

> {{Q8_VERBATIM}}

> {{Q10_VERBATIM}}

## What I learned that they didn't say
{{SURPRISING_FACT_FROM_RESEARCH}}

## Stack detected
- Anthropic key: {{YES/NO}}
- OpenAI key: {{YES/NO}}
- OpenRouter key: {{YES/NO}}
- Local: {{ollama installed Y/N}}
- Editor: {{EDITOR}}
- Harness installed: {{HARNESSES_LIST}}

## Three opportunities (ranked)

### 1. {{TITLE_1}}
{{WHY_1}} · Payoff: {{PAYOFF_1}} · Effort: {{EFFORT_1}}

### 2. {{TITLE_2}}
{{WHY_2}} · Payoff: {{PAYOFF_2}} · Effort: {{EFFORT_2}}

### 3. {{TITLE_3}}
{{WHY_3}} · Payoff: {{PAYOFF_3}} · Effort: {{EFFORT_3}}

## Lead temperature
{{COLD/WARM/HOT}} — based on Q10 ({{BLOCKER}}) and completion depth ({{COMPLETION_NOTES}}).

## Suggested opening line for follow-up
"{{ONE_SENTENCE_OPENER_REFERENCING_Q3_OR_Q8}}"

## UUID
{{UUID}}
```

The UUID is a fresh `uuid4` you generate at report time. The same UUID is embedded in `audit-report.html` as a tiny footer string. This lets Chris match a brief he receives by email to the user's local report.

## When you're done

Tell the user, in plain prose:

> Done. Three files in your working directory:
>
> 1. **audit-report.html** — open this in your browser. It's your one-page report.
> 2. **consultant-brief.md** — if you want a discovery call with Chris, send this. It's everything he needs to walk into the call with full context.
> 3. **branding.json** and **stack.json** — raw artefacts from the audit. Useful if you want to re-run any phase later.
>
> Total time: [N] minutes. Have a look at the report. If anything is off, tell me and I'll regenerate.
>
> Book a call when you're ready: https://chris0x88.github.io/#contact

Stop. Do not editorialise. Do not pitch.

## Quality gate before writing files

Before you write either output file, check:

- Every placeholder in `report.html` is filled. No `{{...}}` strings remain in the output.
- Each opportunity references something the user actually said in the interview. If you can't trace an opportunity back to a specific answer, replace it.
- The 90-day paragraph names a concrete artefact (a report, a workflow, a saved hour count). No vague "transformation" language.
- The consultant brief fits one screen at a normal terminal width (~80 chars, ~50 lines).
- Lead temperature is honestly assigned. Default to "warm" unless answers are clearly cold ("we're not really sure why we're doing this") or hot ("we have budget allocated for Q3").

If any check fails, fix and re-render. Don't ship a sloppy report.
