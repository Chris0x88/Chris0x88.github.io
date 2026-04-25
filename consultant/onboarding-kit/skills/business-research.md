---
name: business-research
description: Public-source research on a prospect company. Web access required.
---

# Business Research · Phase 2

Use the answers from Phase 1 (especially Q1 — what the business does) to identify the company. Then research it from public sources only.

## Required inputs

- `business.one_sentence` from interview
- Company name (ask the user if you don't already know it)
- Company website URL (ask if not in interview answers)

## What to gather

1. **What they actually sell.** Read their homepage, services page, pricing page if it exists. Write 2–3 sentences.
2. **How they make money.** Subscription, one-off, retainer, transactional, ads, marketplace fee, something else. If unclear, mark `unclear` rather than guessing.
3. **Who their customers are.** Look for case studies, customer logos, "trusted by" sections. Capture a list of named customers if visible. Otherwise capture the segment ("mid-market construction firms in QLD", "B2B SaaS founders in Europe", etc.).
4. **Recent public news.** Search for the company name + "2025" and the company name + "2026". Note any funding rounds, leadership changes, product launches, layoffs, regulatory issues. Cap at 3 items.
5. **Competitive landscape.** Identify 3 to 5 likely competitors. Use review sites (G2, Capterra, Product Hunt) or industry-specific directories. Don't speculate — only list competitors that are obviously in the same space.
6. **One thing the user didn't mention.** Find one fact about the business that's true and that the user didn't surface in their answers. This is your "I actually researched this" signal in the report.

## Output structure

Write into working memory under `research:`:

```yaml
research:
  what_they_sell: "<2-3 sentences>"
  revenue_model: "subscription" | "one-off" | "retainer" | "transactional" | "marketplace" | "ads" | "unclear"
  customer_segment: "<one sentence>"
  named_customers: ["...", ...]  # empty list if none visible
  recent_news:
    - { date: "YYYY-MM", item: "...", source_url: "..." }
  competitors: ["...", ...]
  surprising_fact: "<one sentence about something the user didn't mention>"
  sources_consulted: ["url1", "url2", ...]
```

## Boundaries

- **Public sources only.** No paid databases, no scraping behind a login, no LinkedIn data the user didn't link to themselves.
- **No speculation.** If you can't find revenue model from public sources, mark unclear. Don't infer.
- **No personal info on individuals.** Founders' names from the website are fine. Anything beyond that is out of scope.
- **Time-box to 15 minutes.** This phase is meant to be informed, not exhaustive.

## When you're done

Tell the user:

> I've researched [Company Name] from public sources. Here's the one thing I found that you didn't mention: [surprising_fact]. Does that match your understanding? Anything I got wrong?

If they correct you, update the research structure. Then move to phase 3.
