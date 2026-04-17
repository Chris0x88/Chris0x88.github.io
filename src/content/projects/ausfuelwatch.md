---
title: AusFuelWatch
tagline: "maritime intel · fuel security · live map"
status: Live
github: https://github.com/Chris0x88/AUS_FUEL_WATCH
tags: ["Three localhost processes — AIS proxy, intel server, static HTML dashboard", "15 AIS zones across the Singapore–Australia corridor", "Departure detection by snapshot diff (AIS goes dark mid-Indian-Ocean)", "Claude web-search intel loop every 20 minutes", "No backend, no login, no web server — opens as a file"]
order: 5
---

**A live map of the ships carrying Australia's fuel.**

Built during the March 2026 fuel crisis. Three localhost processes — an AIS WebSocket proxy, a Claude-powered intel server, and a standalone HTML dashboard — no backend, no login, no web server. The dashboard opens from the filesystem.

The Singapore corridor vessel count is the leading indicator for Australian pump prices, so the whole dashboard exists to watch it. Terrestrial AIS has no coverage across the open Indian Ocean, so tanker departures are detected by snapshot diff rather than live feed. A case study in what you can build in a weekend when the priority is visibility, not infrastructure.
