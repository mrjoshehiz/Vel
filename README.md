# VELMORA — The Atelier

A new project built independently of the previous Velmora site. Original campaign images, an editorial storefront, collection browsing, search, product sizing, device-local bag, guest order requests, ChatGPT accounts, saved pieces, Verola, styling tools, journal, gallery, runway, owner administration and presentation screens.

## Running

Install with the declared pnpm version. Use the Sites execution profile and preview workflow. Generate changed D1 migrations before building. Runtime configuration: `ADMIN_EMAIL` controls store-owner access; optional `OPENAI_API_KEY` enables AI replies. Otherwise Verola uses predefined shopping guidance.

## Store content

The three initial garments and their prices are sample catalogue records. Seed insertion does not overwrite admin edits. Photography is original illustrative campaign imagery. Order requests do not collect payments or reserve stock. Verify final merchandise specifications, prices, delivery and return policies before opening customer sales.

## Data

D1 holds products, orders, order items, account favourites and moderated reviews. Browser storage holds the bag, garment references and style preferences. Uploaded comparison images use local object URLs only and are not sent to a server.

## Verification

TypeScript and lint checks passed. Search checks cover colour, occasion, budget and no-match queries. In-memory SQLite checks cover the migration, saved-piece uniqueness, order/email verification and approved-review visibility. Anonymous runtime checks passed for 20 pages, plus guest orders with authoritative server prices and delivery fees, aggregate stock limits, protected routes, review email/reference verification, pending-review visibility and empty-budget chat results. Desktop/mobile browser interaction testing and WebMCP browser validation remain unavailable in this environment.


### First-visitor flow review — 3 October 2026
- Reviewed source for the collection → product → bag → guest checkout journey and Verola at mobile and desktop breakpoints.
- Fixed total-stock limits across different sizes; the catalogue, product detail and bag now share the same capacity calculation.
- Added an Edit bag link at checkout, a live product-result count and search input semantics.
- Verola scrolls to the latest message when open and suggested questions focus its input.
- Verified shared-stock capacity, recovery after removal, per-size limits, sold-out pieces and independent products using the actual exported helpers.
- Visual browser, screen-reader, 200% zoom and touch interaction checks remain unverified: the required control-browser skill is unavailable. No visual approval is claimed.
