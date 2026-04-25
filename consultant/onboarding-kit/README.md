# Onboarding Kit · Chris0x88

A generic AI-readiness audit you run yourself before booking a discovery call.

You point your AI agent at this folder. It interviews you, researches your business, captures your branding, detects which AI providers you already have configured, and produces a one-page HTML report that tells you exactly where AI fits into your operation. Run it in an afternoon. Bring the output to a discovery call and we start ten steps ahead.

The kit is harness-agnostic. It works with Claude Code, OpenAI Codex, Hermes, or any agent that can read markdown skill files.

---

## What you walk away with

1. **`audit-report.html`** — your one-page client report. Open it in a browser. It covers what the agent learned about your business, three ranked AI integration opportunities specific to you, a recommended provider stack, and a 90-day picture of what good looks like.
2. **`consultant-brief.md`** — a structured markdown summary you can send to me, paste into an email, or drop into our first call. Same content as the client report but in a format I can read in 60 seconds.
3. **`branding.json`** — captured colours, fonts, logo URLs, voice samples. Useful for any future build work.
4. **`stack.json`** — what AI providers and tools the kit detected on your machine.

The kit does not phone home. Nothing is sent to me automatically. You decide what to share.

---

## Five-minute install

```bash
git clone https://github.com/Chris0x88/Chris0x88.github.io.git
cd Chris0x88.github.io/consultant/onboarding-kit
```

Then attach the kit to your agent. See [`INSTALL.md`](INSTALL.md) for the exact invocation in:

- [Claude Code](INSTALL.md#claude-code) (recommended)
- [OpenAI Codex](INSTALL.md#openai-codex)
- [Hermes / Nous Research](INSTALL.md#hermes)
- [Any other markdown-skill agent](INSTALL.md#generic)

Once attached, you say:

> Run the onboarding kit.

The agent picks up [`kit.skill.md`](kit.skill.md), runs the four sub-skills in order, asks you the [interview questions](interview.md), and writes the four output files into the working directory.

Total time: 30 to 60 minutes, depending on how thorough you want the business research pass to be.

---

## What the kit actually does

| Phase | Skill | What it produces |
|---|---|---|
| 1. Interview | [`interview.md`](interview.md) | Ten questions, captured verbatim |
| 2. Research | [`skills/business-research.md`](skills/business-research.md) | Public-facing summary of the company |
| 3. Branding | [`skills/brand-capture.md`](skills/brand-capture.md) | `branding.json` — colours, fonts, voice |
| 4. Stack | [`skills/stack-detection.md`](skills/stack-detection.md) | `stack.json` — providers and tools detected |
| 5. Report | [`skills/report-generator.md`](skills/report-generator.md) | `audit-report.html` and `consultant-brief.md` |

Each phase produces structured intermediate output the next phase consumes. The final report assembler ties it all together.

---

## Privacy posture

**Defaults are conservative.**

- **No file content reading.** The stack-detection skill checks for the *presence* of config directories and environment variables. It never opens or reads key values, never walks your file tree.
- **No browser history. No mail. No work directories beyond what you explicitly point the agent at.**
- **The interview is voluntary at every step.** Skip questions. Stop at any phase.
- **Nothing is transmitted off your machine** unless you choose to send the consultant brief.

The full threat model and a list of every read the kit performs is in [`SECURITY.md`](SECURITY.md).

---

## When to skip the kit

- You already have a clear, costed AI build brief. Send it. We'll talk.
- You're not ready to run an agent on your own machine. That's fine. Email me and we'll book a discovery call without it.
- Your data is genuinely too sensitive to involve a third-party model in any audit pass. Tell me up-front and we use a fully local stack.

---

## Licence

MIT. Use it, fork it, customise it, run it for your own clients. Attribution appreciated.

If you build something good on top of this, I'd love to see it.

---

[Book a discovery call](https://chris0x88.github.io/#contact) · [Field Notes](https://chris0x88.github.io/blog/) · [Resources](https://chris0x88.github.io/resources.html)
