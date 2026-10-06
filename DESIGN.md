# VELMORA reference-led rebuild

The prior homepage composition and cumulative theme overrides are removed. The design uses the supplied 18-screen collection as its visual source: warm neutral surfaces, fashion photography as the principal content, restrained serif display type, compact shopping controls and mobile-specific layouts. The resulting site preserves the catalogue, authentication, saved pieces, styling tools and order-request backend.

## Reference inventory and applied findings

| Reference | Observations | Application |
| --- | --- | --- |
| 01 Aureli jewellery PDP | Balanced image and purchasing columns; quiet ivory; strong size and action hierarchy | Large product gallery, compact information column, size tiles, delivery and disclosure rows |
| 02 Luxique app landing | Soft surfaces, rounded image cards, clear onboarding hierarchy | Rounded product cards and drawers, concise prompts and uncluttered navigation |
| 03 Luxury fashion homepage | Full campaign imagery; model placement leaves readable space | Original landscape campaign with models right and large serif copy left |
| 04 Vesora everyday luxury | Warm brown/cream, aligned content, prominent product imagery | Espresso text, terracotta buttons, neutral shared surfaces and strict grids |
| 05 Beige product detail | Full garment, thumbnails, sizes, quantity and purchase hierarchy | Full-look and labelled detail-crop thumbnails, quantity stepper and purchase area |
| 06 LuxCart mobile flow | Immersive photography, compact discovery and clear product purchasing | Portrait mobile campaign, category tabs and size-selection drawer |
| 07 Luxury fashion app set | Warm accent, two-column products, saved controls and bottom navigation | Terracotta accent, mobile grid, hearts, bag controls and five-destination mobile navigation |
| 08 Kemi fashion home | Clear search, category browsing and compact card metadata | Search surface, pill category controls, name/colour/category/price hierarchy |
| 09 Gritline full models | Generous image-led hero, serif heading and breathing room | Dual-model colour campaign and intentionally spare headline area |
| 10 Gritline photo collage | Asymmetric fashion collage and measured whitespace | Fashion Lab editorial with overlapping garment images |
| 11 Gritline colour grid | Rich portrait colour and composed variation | Wine, ivory and indigo photography across collection, stories and editorial sections |
| 12 Iconic fashion homepage | Campaign, category tabs, product grid and editorial storytelling | Homepage sequence: campaign, current edit, categories, styling and journal |
| 13 Marck onboarding | Full-height mobile image with readable bottom text and broad CTA | Portrait image, lower gradient and white collection action |
| 14 Evony fashion welcome | Strong visual introduction and clear account entry | Image-led account introduction retained and restyled; visible account navigation |
| 15 Lade mobile fashion | Serif heading, prominent image, clear main action | Mobile-specific hierarchy and compact supporting copy |
| 16 Eyelpv homepage | Inset image campaign with modest corner radius; editorial rhythm | Inset campaign, subtle corners and separated editorial sections |
| 17 Kawa shopping app | Search, tabs, two-column grid, thumbnails and bottom purchase dock | Shopping controls, product view choices and dedicated mobile purchase dock |
| 18 Kawa onboarding | Short welcoming copy and clear primary/secondary actions | Concise drawers, empty states and visible routes back into shopping |

## System

- Albert Sans for controls and body text; Cormorant for headings and wordmark.
- Warm off-white #fdfbf8, espresso #29231f, terracotta #a54825; white text on the primary button.
- Main desktop content constrained to 1440px; 5% page gutters; 2-column mobile product grid.
- 48px principal actions, 44px save controls, visible keyboard focus and reduced-motion support.
- Dedicated landscape and portrait campaign assets; fixed image proportions to reserve layout space.
- Mobile product pages replace bottom navigation with a price/action bar. Quantity and size remain explicit.
- Reference screenshots are inspiration, not copied storefronts. No invented discounts, reviews, counts, downloads, or logos.
- Product thumbnails intentionally label the second view as a crop, not a different photographic angle.
- Checkout continues to submit an order request; no payment is collected.

## Review boundary

Type checking, lint and production compilation are separate from the browser walkthrough. The current correction pass used the supervised local preview in Chrome at desktop width and in the 390px mobile presentation frame. These are browser checks, not a physical-device test. Signed-in account and administration flows were not exercised.

## First-visit correction pass

- Inspected all three original product photographs and both campaign assets. The Indigo Form portrait has only about 15px of headroom; centre-biased cover crops removed the top of the head.
- Aligned cover crops to the top throughout the campaign, collection, categories, styling, journal, gallery, account and bag. Hover magnification also anchors to the top.
- Main product photography now keeps its original 2:3 proportion, showing the complete source image. The separately labelled detail crop remains intentional.
- Replaced the sparkle motif with the existing Lucide Shirt clothing icon in mobile Style navigation and the homepage styling link.
- Added an accessible name to the mobile icon-only stylist launcher, kept header buttons at least 44px wide, highlighted Shop on search pages and allowed for the bottom safe area.
- The initial source inspection was followed by the browser walkthrough recorded below.

## Bottom navigation repair

The five bottom destinations and shared header/footer/homepage destinations now use native browser anchors. This removes the JavaScript client-router interception from these navigation actions, while retaining labels, active states, icons and bag count. Each mobile target has an explicit 48px minimum height; icon/text children do not intercept hit testing. A stalled client transition was a suspected mechanism, not browser-reproduced evidence. Home, Shop, Style, Saved and Bag were subsequently exercised successfully in the mobile browser frame. Physical-device taps remain outside this review.

## Browser correction pass and added imagery

- Added three editorial photographs for Wine Drape, Ivory Pair and Indigo Form. Used them across homepage categories and styling, journal, lookbook, gallery and a third product view explicitly labelled Styled look. Original catalogue photography remains available.
- Guest Saved now explains favourites and offers an explicit sign-in action instead of immediately leaving the storefront. Guest product save controls lead to this page.
- Corrected singular bag and rating wording, loading bag labels and outfit-studio stock-limit feedback. Enlarged-image dialogs now fit the photograph without a tall blank area.
- Verified desktop campaign, category/studio crops, mobile full and styled product imagery, image modal, journal/article, gallery, lookbook, story, delivery and size-guide pages.
- Verified category filtering, matching search, empty search and filter reset; choose-size drawer, size validation, bag addition/quantity and persistence; mobile navigation and menu; style notes, closet reference/preferences and measurement estimate.
- Verified required checkout fields, state-dependent delivery fees, local order submission, confirmation reference and cleared bag. Synthetic details were submitted only to the isolated local preview database, never to the live shop.
- The preview database initially lacked its schema; applied the existing migration locally, then verified Verola's delivery reply. No production schema or customer records were changed.
- Remaining business input: the shop has no supplied final returns policy or confirmed fulfilment timetable. The storefront states this clearly rather than promising unsupported terms.

## Between moments: automatic editorial gallery

Added a homepage section between Fashion Lab and the journal with three new, inspected 1024×1536 editorial assets. A dark espresso surface continues the existing brand. Two identical image groups produce a continuous 48-second horizontal loop (38 seconds on mobile), with a pause/play button and hover pause. Duplicate figures are hidden from assistive technology. Motion pauses outside the viewport; reduced-motion preferences show all three images in a static grid. All portraits preserve their source 2:3 ratio and top framing. Group width exceeds viewport width to avoid an empty loop boundary.

The preview initially rendered the section heading and running state. A subsequent browser security restriction blocked further preview interaction, so complete desktop/mobile visual and animation verification for this addition is not claimed. Type checking and final production compilation verify the delivered source separately.

## Homepage film and visible assistant

Replaced the static opening campaign with the supplied 10-second portrait video. Desktop uses a text/video split; mobile stacks the full portrait above the text. Contain framing preserves the entire head and outfit. Video is silent, loops inline, has a pause/play button and a static poster, and starts paused for reduced-motion visitors.

The homepage chat launcher now shows a terracotta greeting card: “Hi, how can I help?” and “Verola · Your AI fashion assistant”. It opens the same existing chat sheet and keeps the established shopping-assistance flow. Other pages retain the compact launcher.

Browser validation: inspected the desktop hero and mobile presentation at 390px; corrected inherited mobile overlay/height rules so text stacks beneath the film. Verified the greeting opens the chat on both views and the mobile video pause changes the control to Play. Mobile document width matches scroll width.


## Final first-visitor review — 4 October 2026

Scope: public storefront, desktop and 390px mobile presentation; includes homepage, collection, size drawer, bag, checkout entry and Verola. Earlier recorded public route checks remain applicable. Account authentication, admin actions, physical devices, 200% enlargement and actual payment were not tested in this pass.

| Domain | Coverage and evidence |
| --- | --- |
| Accessibility | Desktop skip-link focus visibly outlined; labelled mobile navigation and size radiogroup; Add to bag disabled before selection and enabled after; chat keyboard submission and dismissal verified. Reduced-motion alternatives retained in source. |
| Layout | Desktop split hero and mobile stacked portrait reviewed; mobile homepage and checkout document width equalled scroll width (373px usable area in 390px frame). Full head visible. Size drawer and bag inspected. |
| Writing | Explicit AI assistant greeting; clear guest checkout, delivery fee and order-request wording. Verified actual size-guidance response. |
| Typography | Existing Albert/Cormorant hierarchy preserved. Corrected 10.4px mobile navigation labels to 14px for regular destinations. |
| Colour | Established espresso/terracotta palette preserved; visible focus and selected-size state retained. Full contrast certification not claimed. |
| UI and motion | Removed both hero and editorial pause/play controls as requested. Actual video playback verified: paused=false, loop=true, controls=false, advancing currentTime. Editorial loop, viewport pause and hover pause retained; three photographs inspected on desktop. |

Resolved findings: LOW — mobile destination labels were too small (`app/globals.css`, `.mobile-bottom a`); enlarged to 14px. Requested controls removed from `components/store/hero-video.tsx` and `components/store/moving-editorial.tsx` and obsolete control styles removed.

Verification: mobile Shop navigation, choose-size keyboard interaction, M selection, bag addition and checkout entry succeeded. Verola returned size advice. Browser pointer automation inside the showcase iframe missed some controls; keyboard activation verified the actual flows, so physical tap testing is not claimed. No live order or customer data was submitted.

Verdict: approve the requested visual update within this scope. Continuous autoplay without a visible pause control is an explicit user-requested exception; this is not a claim of complete motion accessibility conformance. Reduced-motion visitors still receive static media.


## Scrolling-image loading repair

The moving strip used native lazy loading for all six frames, including the offscreen loop copies. Before repair, browser inspection found an unfinished offscreen image and a screenshot showed blank frames on section entry. All three source assets decoded successfully locally at 1024×1536.

Changed only this strip to eager image loading and wait for every image to decode before starting movement. Offscreen and reduced-motion behavior remain. Desktop and 390px mobile browser checks now report all six images complete with naturalWidth=1024, with photographs visibly rendered. This loads three unique assets (approximately 342KB) earlier; duplicated URLs reuse the same resources.
