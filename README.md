# Aryze Eatery — Concept Site

A mobile-first concept landing page for **Aryze Eatery**, Phoenix's first healthy drive-thru. Three design directions (A/B/C) share the same menu, cart, Instagram strip, and reviews module — only the hero treatment, typography, and color emphasis vary.

**Live demo:** [asdfghjk.lol/aryze](https://asdfghjk.lol/aryze)

| Variant | Direction | URL |
|---|---|---|
| **A · Heritage Editorial** | Sweetgreen-style. Fraunces serif, cream backgrounds, real desert-banner photo hero. | [/aryze/a](https://asdfghjk.lol/aryze/a) |
| **B · Cinematic Desert** | Erewhon-style. Dark navy + gold, illustrated cinematic SVG hero. | [/aryze/b](https://asdfghjk.lol/aryze/b) |
| **C · Pop Drive-Thru** | Joe & the Juice-style. Bold color blocks, Anton condensed display, storefront illustration. | [/aryze/c](https://asdfghjk.lol/aryze/c) |

## What's in the box

```
.
├── index.html          # A/B/C comparison shell with tabs + keyboard shortcuts
├── app.html            # The themed landing page (themed via ?v=a|b|c body class)
├── app.js              # Menu data, cart modal, IG + reviews data, theme switching
├── assets/
│   ├── desert-banner.png       # Brand desert/lake/cactus banner illustration
│   └── logos/
│       ├── wordmark-navy.png   # Aryze script + sun + Phoenix EATERY Arizona — navy on light bg
│       ├── wordmark-teal.png   # All-teal version — for dark bg
│       ├── oval-badge-light.png # Healthy Drive-Tru oval, white interior
│       ├── oval-badge-dark.png  # Same oval, navy interior — for dark bg
│       ├── circle-badge.png    # Aryze A monogram + ring text
│       └── monogram-a.png      # Just the A monogram (favicon)
└── archive/
    └── early-concepts/         # Initial concept drafts before mobile-first redesign
```

## What the page does

- **Mobile-first, two-scroll landing.** Sticky nav with theme-aware wordmark, hero with live-temp stamp, benefits strip, 18-item menu with cart, IG, reviews, location, footer.
- **18-item menu in 3 sections** — Bowls (6), Meals (4), Beverages (8). Each card has a one-tap "Add" button.
- **Cart modal** as a bottom sheet on mobile / side panel on desktop. Size selector for bowls, chicken/beef option for broth, 9 boosts ($1/$2 each), quantity, and **smart cross-sell suggestions** that adapt to what's already in the cart (bowls suggest drinks, drinks suggest bowls/toast, etc.). Order summary with AZ sales tax, checkout confirmation screen.
- **Instagram strip** (6 placeholder cells, synthetic data — swap to real `@aryzeeatery` content via the IG Display API or scheduled pull).
- **Google reviews module** (5 placeholder reviews, 4.9★/247 — wire to Google Places API for real reviews).
- **Brand wordmark + oval badge** swap automatically per theme.

## Local development

The site is plain HTML + CSS + vanilla JS, no build step. To preview locally:

```bash
cd /Users/nayslayer/code/apps/aryze-eatery
python3 -m http.server 5179
open http://localhost:5179/
```

## Deployment

The live site is served by the OpenClaw dashboard (FastAPI, port 7080) behind a Cloudflared tunnel at `asdfghjk.lol`. `dashboard/aryze` is a symlink to this repo, so any change here is live after a static cache miss. Routes in `~/code/claw-core/openclaw/dashboard/server.py`:

```python
ARYZE_DIR = Path(__file__).parent / "aryze"  # symlink to ~/code/apps/aryze-eatery

@app.get("/aryze") @app.get("/aryze/")
async def aryze_index(): ...

@app.get("/aryze/a") @app.get("/aryze/b") @app.get("/aryze/c")
async def aryze_variant(request): ...    # injects theme class server-side

app.mount("/aryze", StaticFiles(directory=str(ARYZE_DIR), html=True), ...)
```

Restart the dashboard after a `server.py` edit:

```bash
launchctl kickstart -k gui/$(id -u)/com.openclaw.dashboard
```

HTML edits go live immediately. JS/CSS edits need a cache-bust — bump the `?v=N` query in `app.html`.

## Brand assets

All logos and the desert banner are sourced from the client's iCloud folder at `~/Library/Mobile Documents/com~apple~CloudDocs/Desktop/ABC/Expaaand/STUFF LOVE/SHINY ✨ NEW/CLIENTS/ARYZE EATERY/`. 21 logo variants are available there; the 6 shipping in `assets/logos/` are the ones picked for nav, hero, footer, and favicon slots.

## What's stubbed (and how to wire it for real)

| Stub | Replace with |
|---|---|
| Cart "checkout" confirmation modal | Toast / Square / Olo / Otter — POS or aggregator API |
| Instagram cells (gradient + emoji) | IG Display API or a scheduled pull (`@aryzeeatery`) into `assets/insta/` |
| Google reviews | Google Places API `place/details` → reviews + rating |
| Live Phoenix temp | Open-Meteo or NWS — see the [earlier concept draft](archive/early-concepts/) for a working hook |
| Menu item "photos" | Real product photography. Card layout already supports `<img>` swap. |

## Built by

Concept and build: [@nayslayer](https://github.com/nayslayer143).
For: Aryze Eatery, 1701 S Central Ave + Mojave, Phoenix, AZ 85004.
