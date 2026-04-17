---
title: Power Law Allocation
tagline: "bitcoin · deterministic allocation · venue-agnostic"
status: Live
github: https://github.com/Chris0x88/power-law-allocation
tags: ["Stateless — same (date, price) in, same signal out", "400-line core model. No DB, no warm-up, runs in a Lambda", "Five locked constants — tuning them defeats the point", "15% rebalance threshold is the sweet spot (~8 trades/yr, ~2.5× HODL)", "Venue-agnostic rebalancer + reference paper-trade venue"]
order: 4
---

**A Bitcoin allocation model that decides the BTC/cash split for you — deterministically.**

Same date and price in, same signal out. No database, no historical feed, no machine learning — just a power law, Kleiber's Law, and a heartbeat function. The core is ~400 lines with zero I/O and it ships with a venue-agnostic rebalancer so you can bind it to whatever execution venue you like.

**The finding that matters:** a rebalance threshold of **15% or more** is where this strategy earns its keep. Go tighter than that and fees, slippage, and tax drag eat the edge faster than rebalancing creates it. Bitcoin swings 15% often enough that each time it does, you bank another chunk of value — the strategy works *because* it trades rarely. Five locked constants. I won't tune them. That's the point.
