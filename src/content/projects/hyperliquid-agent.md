---
title: Hyperliquid Agent
tagline: "trading co-pilot · embedded AI · hyperliquid perps"
status: Live
github: https://github.com/Chris0x88/hyperliquid-agent
tags: ["Embedded Claude runtime — parallel tools, streaming, compaction", "Tick-based daemon with iterators in dependency order", "Stop-loss & take-profit drafted from signals and market structure", "Dual-write key vault — AES-256-GCM + macOS Keychain, API wallets only", "Runs local. No fees on top. No telemetry."]
order: 1
---

**An AI trading co-pilot that lives inside your Hyperliquid client.**

Not a bot that trades for you — a partner that sits beside you while you do. It reads your positions, your thesis, and your risk. It drafts stop losses and take profits from the actual signals and market structure you care about. It bounces ideas, argues the other side of a trade, and questions you when you scale leverage past what your thesis supports. It also carries the ugly operational work — account state, trailing stops, profit locking — so the trader can stay on the trade.

Built by porting Claude Code's agent runtime into the trading loop itself, so the LLM isn't a chat bolted on the side — it has tools, memory, and a live view of the account. Free-text routes to the agent; fixed commands stay fast, deterministic, and zero-credit.
