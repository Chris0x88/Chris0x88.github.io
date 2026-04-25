---
name: brand-capture
description: Capture a prospect's brand assets from their public website. Outputs branding.json.
---

# Brand Capture · Phase 3

Visit the company's primary domain. Extract enough brand information that any future build work can match their visual identity without a second pass.

## Required inputs

- Company website URL (from phase 2)

## What to capture

### 1. Logo

Find the primary logo. Most sites have it in `<header>` as an `<img>` or an SVG. Capture the absolute URL. If it's an inline SVG, save the SVG markup to `branding/logo.svg` in the working directory.

If there's a separate dark-mode logo, capture both.

### 2. Colour palette

Pull the CSS or inspect computed styles to find:

- **Primary colour** — usually the main accent, the colour used on CTAs, links, headings.
- **Secondary colour** — the next most prominent colour, often a complementary tone.
- **Background** — the dominant page background (usually white or a near-white, sometimes a dark shade for dark sites).
- **Text colour** — the body text colour.

Express each as a hex code. If you can't reach the CSS, take a screenshot and infer the dominant colours visually — note in the output that the values are inferred.

### 3. Fonts

Identify the font stack:

- **Heading font** — used on `<h1>`, `<h2>`.
- **Body font** — used on `<p>`.
- **Mono font** if there is one (rare, but distinctive when present).

Pull from CSS `font-family` declarations or `<link>` tags pointing at Google Fonts / Adobe Fonts.

### 4. Voice samples

Quote three representative sentences from the homepage. Pick:

- One **headline** (the largest text on the page)
- One **value-prop sentence** (usually the sub-headline)
- One **body paragraph** sentence

These are your evidence of brand voice. Don't paraphrase, copy verbatim.

### 5. Tone characterisation

In one sentence, describe the brand voice based on the samples. Examples:
- "Plain, direct, B2B SaaS-standard."
- "Warm, conversational, slightly self-deprecating."
- "Aggressive, technical, assumes the reader is already an expert."

This sentence informs the report's writing style in phase 5.

### 6. Brand guidelines (if visible)

Some companies link to a brand guide, press kit, or media kit. If you find one, capture the URL and any explicit colour codes / fonts they specify. These override your inferred values.

## Output structure

Write `branding.json` into the working directory:

```json
{
  "company_name": "...",
  "domain": "https://...",
  "logo": {
    "primary_url": "...",
    "dark_mode_url": "..." | null,
    "svg_inline": true | false
  },
  "palette": {
    "primary": "#......",
    "secondary": "#......",
    "background": "#......",
    "text": "#......",
    "source": "css" | "inferred-from-screenshot"
  },
  "fonts": {
    "heading": "...",
    "body": "...",
    "mono": "..." | null
  },
  "voice": {
    "samples": [
      { "kind": "headline", "text": "..." },
      { "kind": "value_prop", "text": "..." },
      { "kind": "body", "text": "..." }
    ],
    "tone_summary": "..."
  },
  "guidelines_url": "..." | null,
  "captured_at": "YYYY-MM-DDTHH:MM:SSZ"
}
```

Also update working memory with `brand:` mirroring the JSON structure so phase 5 can theme the report.

## Boundaries

- **Public website only.** Don't attempt to log in, don't scrape gated assets.
- **No screenshotting if you can avoid it.** Read CSS and HTML where possible. Screenshots are a fallback for visual inference only.
- **Don't grade their branding.** Capture, don't critique. Phase 5 may suggest improvements; this phase observes.

## When you're done

Tell the user:

> Captured your branding. Primary colour [hex], heading font [font], voice reads as [tone summary]. The report I'm about to generate will use these. If any of them are wrong, tell me now and I'll re-pull.

Then move to phase 4.
