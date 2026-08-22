# EventPulse

EventPulse is a responsive event discovery and ticket booking experience designed around a Sunlit Editorial Festival visual system. It helps users browse curated events, search and filter by practical criteria, inspect event details, and complete a lightweight demo booking flow.

## Included experience

- Responsive homepage with sticky navigation, brand mark, hero artwork, live countdown card, event statistics, and CTA paths.
- Six detailed events across Music, Tech, Design, Workshops, and Festivals.
- Real-time search by event title, venue, location, category, or description.
- Category, type, date, and price filters with clear-all behavior and empty-state messaging.
- Rich event detail drawer with agenda timeline, venue note, host profile, and ticket CTA.
- Multi-step demo booking flow with contact validation, ticket quantity controls, service fee and tax math, Card/UPI payment UI, confirmation ticket preview, and downloadable ticket summary.
- Persistent light/dark theme toggle through the provided ThemeProvider and localStorage.
- Newsletter signup validation, social/contact links, placeholder host actions, and toast feedback for secondary interactions.
- Accessible semantic sections, focus-visible styling, reduced-motion support, mobile navigation, and touch-friendly controls.

## Design notes

The interface uses Fraunces for expressive display type and DM Sans for utility text. Pulse Coral (`#F05A47`) owns primary action and warmth; cobalt anchors navigation and focus states; marigold marks discovery; warm paper and deep ink keep the experience tactile and readable. Ticket-stub dividers, date/price meta rows, and cropped poster imagery carry the editorial event language through the page.

## Running locally

```bash
pnpm install
pnpm dev
```

The project includes `pnpm check` for TypeScript validation and `pnpm build` for the production build.

## Scope note

The payment step is intentionally simulated for the student project brief. It validates the form and presents a confirmation state without processing real payment data.
