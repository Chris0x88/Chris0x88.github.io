# SECURITY · Onboarding Kit

The kit is meant to be installed by people who don't read scripts. That puts the burden of safety on me, not on you. Here's exactly what it does, what it never does, and how to verify both claims yourself.

---

## What the kit reads

| Phase | What it touches | Read or write |
|---|---|---|
| 1. Interview | Your typed answers in the chat session | Capture only, in-memory |
| 2. Business research | Public web pages about your company | Read, public sources only |
| 3. Brand capture | Your company website's HTML, CSS, and visible assets | Read, public sources only |
| 4. Stack detection | A specific list of env vars and config directories | **Existence checks only.** No values, no contents. Opt-in. |
| 5. Report generation | The four output files written to your working directory | Write, local only |

The full list of stack-detection checks is in [`skills/stack-detection.md`](skills/stack-detection.md). Read it before you grant consent for phase 4.

---

## What the kit never does

- **Never reads your file content.** No directory walks, no opening project files, no reading source code. The stack-detection phase does existence checks (`os.path.exists`) only, never `open()` or `cat`.
- **Never reads environment variable values.** It checks whether `ANTHROPIC_API_KEY` is set. It does not read what the value is.
- **Never reads your browser history, mail, messages, calendar, or any document outside the working directory.**
- **Never transmits anything off your machine** unless you explicitly send the consultant brief to Chris yourself. There is no telemetry, no webhook, no analytics, no phone-home.
- **Never installs software** without telling you exactly what and asking first.
- **Never modifies any file outside the kit's working directory.** All output goes to the directory you run the kit from.

---

## Threat model

The kit runs inside an AI agent that you control. The agent is the privileged actor; the kit is just markdown instructions the agent reads. So:

- **If your agent is compromised**, the kit cannot protect you. Don't run the kit (or any agent) on a machine you don't trust.
- **If the kit's markdown is tampered with** before you run it, the agent might read malicious instructions. Verify the kit by checking the commit hash on GitHub matches what you cloned. The kit is in `Chris0x88/Chris0x88.github.io` under `consultant/onboarding-kit/`.
- **If the agent's web access is intercepted**, business research and brand capture might pull poisoned content. This is a generic web-trust problem, not specific to the kit.

The kit's defence is its smallness. Every file is short, readable, and explicit about what it does. If a phase asks for something the description here doesn't mention, stop and check the source.

---

## Verifying the kit yourself before running it

Five-minute audit:

1. **Read `kit.skill.md`.** It's the entry point. Confirm the five phases match what's described in `README.md`.
2. **Read `skills/stack-detection.md`.** Confirm the check list and the explicit consent gate.
3. **Read each other skill file.** They're under 200 lines each.
4. **Read `templates/report.html`.** It's the only output template; nothing exotic.
5. **Run the kit with phase 4 declined** the first time, if you're cautious. You'll still get a valuable report; you'll just skip the stack detection.

---

## Reporting a vulnerability

If you find a security issue with the kit (a phase that does more than its skill file describes, an output that contains data the kit shouldn't have access to, anything that surprises you):

- Open a private security advisory at https://github.com/Chris0x88/Chris0x88.github.io/security
- Or email me directly. The contact form is at https://chris0x88.github.io/#contact.

I take this seriously. The kit's value depends on it being trustworthy.

---

## Licence and liability

MIT licensed. No warranty. You are responsible for what runs on your own machine. If you don't understand what the kit does after reading the files, don't run it.
