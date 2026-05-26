# Aryze Eatery — Site Project

## What this is
Mobile-first concept landing page for Aryze Eatery (Phoenix healthy drive-thru).
Plain HTML + vanilla JS, no build step.

## Key files
- `index.html` — A/B/C theme comparison shell
- `app.html` — main landing page (themed via ?v=a|b|c body class)
- `app.js` — menu data, cart logic, theme switching
- `assets/` — logos, desert banner

## Brand constraints
**Colors:** Navy #1B2A4A, Teal #2A9D8F, Gold #E9C46A — no other palette colors
**Type:** Heavy condensed sans-serif for display (Anton or equivalent) — script wordmark only for logo
**Illustration style:** Botanical illustrations — no generic food photography filters
**Hard NOs:** No gradients, no rounded-corner cards, no pastel colors

## Local dev
python3 -m http.server 5179
open http://localhost:5179/

## What NOT to change
- Logo files in assets/logos/ — use as-is
- Menu item prices without confirmation
