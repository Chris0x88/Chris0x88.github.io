# Interview · Phase 1

Ten questions. Ask them one at a time. Wait for an answer. Push back if the answer is vague.

The goal is not to fill in fields. The goal is to make the user articulate their business clearly enough that you can find the AI integration opportunities yourself in phase 5. If you finish the interview and you still couldn't explain their business to a stranger, the interview was too soft. Ask follow-ups.

---

## Conversational tone

Open with:

> I'm going to ask you ten questions about your business. Some are easy, some take a minute to think about. Be specific. Vague answers produce vague reports. Ready when you are.

Between questions:
- Don't summarise excessively.
- If they go off on a tangent that's revealing, let them.
- After Q5 and Q10, paraphrase their answers back in 2–3 sentences and ask if you got it right.

---

## The questions

### Q1 — What does your business actually do?

> In one sentence a 12-year-old would understand: what does your business sell, and to whom?

If the answer contains "AI", "platform", "solution", "leverage", "synergy", or any other consultant-speak, push back: "Try again without any of those words."

### Q2 — Headcount and shape

> How many people work in the business? Roughly what's the split between people who do the work the customer pays for, and people who run the back office?

Capture the numbers exactly. The split matters more than the total.

### Q3 — The single most repetitive task

> What's the single most repetitive task someone on your team did this week? Name the task, the person, and roughly how long it took them.

If they hesitate, prompt: "Even if it's small. Especially if it's small."

### Q4 — Where work lives

> Where does your work currently live? Email, Slack, Notion, spreadsheets, a custom system, paper? Name every tool that holds important data, even the embarrassing ones.

Capture as a list. Note which ones are duplicates of each other.

### Q5 — What breaks first, who finds out

> When something goes wrong in your business — a customer is upset, an order is late, a payment fails — who is the first person who finds out, and how do they find out?

This question reveals their observability stack and their ops culture. Capture both.

**Paraphrase back here.** Say something like: "OK so far I've got [one-sentence biz], roughly [N] people split [X/Y], the most repetitive thing this week was [task], your work lives in [tool list], and when something breaks [name] finds out via [channel]. Did I get that right?"

### Q6 — AI tools tried before

> Have you tried any AI tools in the business before? What was the last one, and either why did you stop using it or why is it sticking?

Both answers are useful. "Stuck" tells you what works for them. "Stopped" tells you what category of failure to avoid. If they say "no, never," ask why.

### Q7 — The junior assistant document

> If a junior assistant joined your team tomorrow and had no context whatsoever, what document would you hand them on day one? Does that document exist?

Most of the time it doesn't. The non-existence of this document is itself an opportunity.

### Q8 — The weekly automatable decision

> What's a decision you make every week that feels like it should be automatable, but for whatever reason isn't?

If they say nothing comes to mind, prompt: "Is there a number you check every Monday? A list you go through? An approval you give?"

### Q9 — Proprietary data

> What data do you have that your competitors don't? Customer behaviour, sales patterns, operational logs, product usage, something else?

This question identifies the moat. If they say "nothing," dig: "What's in your CRM that wouldn't be in a competitor's?"

### Q10 — The actual blocker

> Realistically, what's stopping you from acting on AI in your business right now: budget, skills, trust, time, or something else?

The "something else" answer is often the most honest. Listen for it.

**Paraphrase back here.** Tell them what you heard across all ten questions in 4–5 sentences. Confirm. If they correct you, capture the correction.

---

## After Q10

Tell the user:

> Thanks. That's the interview done. I'm going to spend the next 15 to 30 minutes researching your business in public sources, capturing your branding, and (with your permission) checking what AI tools you already have set up. Then I'll write you a one-page report. Stay near your machine — I might ask one or two follow-ups.

Move to phase 2.

---

## What to capture from the interview

Write these into working memory before moving on:

```yaml
business:
  one_sentence: "<verbatim from Q1>"
  headcount:
    total: <int>
    operators: <int>
    back_office: <int>
  most_repetitive_task:
    task: "<from Q3>"
    person: "<from Q3>"
    minutes: <int>
  tools: ["<from Q4>", ...]
  observability:
    first_to_know: "<from Q5>"
    channel: "<from Q5>"
  ai_history:
    tried: true/false
    last_tool: "<from Q6 or null>"
    outcome: "stuck" | "stopped" | "never"
    reason: "<from Q6>"
  onboarding_doc_exists: true/false
  weekly_automatable_decision: "<from Q8>"
  proprietary_data: "<from Q9>"
  primary_blocker: "budget" | "skills" | "trust" | "time" | "other:<freeform>"
```

This is the canonical input for the report generator.
