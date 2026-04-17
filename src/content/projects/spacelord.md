---
title: Space Lord
tagline: "hedera · edge compute · AI-driven DeFi"
status: Live
github: https://github.com/Chris0x88/spacelord
tags: ["Built for the 2026 Hedera Apex Hackathon — driven by an OpenClaw agent", "Own-rolled comms to Hedera mainnet — no third-party APIs in the hot path", "Direct SaucerSwap V2 router calls, HTS transfers, HCS signals", "Agent drives it by CLI tool use, not MCP — one valid execution path per op", "Read-only governance: per-swap caps, daily caps, slippage ceilings"]
order: 2
---

**Your Hedera wallet, exchange, and trading desk collapsed into one local CLI — driven by an AI agent.**

Built for the 2026 Hedera Apex Hackathon as the execution surface for an [OpenClaw](https://openclaw.ai) agent. The core design goal was raw edge compute: no third-party APIs between the agent and the chain. I wrote my own comms layer straight to Hedera mainnet rather than piping through middleware that could rate-limit, go down, or rug the API.

The agent drives everything through **CLI tool use, not MCP** — one valid execution path per operation, so the LLM can't invent a swap. Governance is read-only config the agent can't edit (per-swap caps, daily caps, slippage ceilings), and transfers are whitelisted. Gets faster again once BlockStreams rolls out on Hedera.
