# EventPulse

> **Discover what moves you.** EventPulse is a responsive event-discovery and booking experience designed around a warm, editorial festival identity.

[Live website](https://anon-443.github.io/eventpulse/) · [Source code](https://github.com/anon-443/eventpulse) · [Report an issue](https://github.com/anon-443/eventpulse/issues) · [Deployment workflow](https://github.com/anon-443/eventpulse/actions/workflows/deploy-pages.yml)

## Overview

EventPulse helps visitors discover curated events, explore event details, book a simulated ticket, and keep saved passes close at hand. The interface pairs warm paper surfaces, coral actions, cobalt wayfinding, ticket-stub details, motion that respects reduced-motion preferences, and layouts tailored for mobile, tablet, and desktop screens.

The repository includes both the browser application and a full-stack development setup. The public GitHub Pages site is a static presentation of the experience, while the managed application can use the Express/tRPC server for server-backed features.

## Live site

The public static site is available at:

**https://anon-443.github.io/eventpulse/**

| Environment | URL | Purpose |
| --- | --- | --- |
| GitHub Pages | [anon-443.github.io/eventpulse](https://anon-443.github.io/eventpulse/) | Public, static portfolio and project preview |
| Repository | [anon-443/eventpulse](https://github.com/anon-443/eventpulse) | Source code, workflow configuration, and project documentation |

## Features

| Area | Included experience |
| --- | --- |
| Discovery | Search, category chips, price, date, and event-type filters with responsive event cards |
| Event details | Agenda, venue information, countdown timer, map presentation, and share controls |
| Booking | Multi-step demo booking flow, ticket confirmation, QR presentation, and ticket download |
| Wallet | Saved passes, expiry filters, pass reminders, 3D flip cards, visual barcode, entry rules, quick share, and a clearly labelled mock ticket transfer |
| Profile | Local account preview, notification preferences, referral insights, CSV export, and account-scoped rewards |
| Organizer Hub | Event management UI, auto-saved event drafts, live preview, ticket theme/logo customization, and AI-description workflow for the server-enabled app |
| Polish | Light and dark modes, reduced-motion support, responsive navigation, accessible focus states, and toast feedback |

## Technology

EventPulse uses **React 19**, **TypeScript**, **Vite**, **Tailwind CSS 4**, **Framer Motion**, **Wouter**, **Sonner**, **tRPC**, **Express**, **Drizzle**, and **Vitest**. The browser UI uses local storage for the clearly labelled account-preview, wallet, referral, rewards, and organizer-draft examples.

## Run locally

### Requirements

Install a current LTS release of Node.js and use [pnpm](https://pnpm.io/). The project pins its package-manager version in `package.json`.

### Installation

```bash
git clone https://github.com/anon-443/eventpulse.git
cd eventpulse
pnpm install --frozen-lockfile
pnpm dev
```

The local app will start on the port assigned by the development environment. Open the address shown in your terminal.

### First local run

After the server starts, open the printed local URL and use the main navigation to move between **Explore events**, **Organizer hub**, and **Account**. No environment file is required to view the browser interface and its locally stored demonstration flows. Server-backed functionality uses the managed application configuration when it is available.

## Usage guide

| Goal | How to use it |
| --- | --- |
| Find an event | Use the homepage search field, date/price/type selectors, and category chips to narrow the event edit. |
| Review an event | Select an event card to open its concise detail preview, then use **Book ticket** to enter the demonstration booking flow. |
| Save and schedule | Use the bookmark control on an event card. Saved events show an **Add to Calendar** action that downloads a standard `.ics` file. |
| Use tickets and profile tools | Open **Account** to view locally stored passes, notification choices, referral insights, wallet filters, and rewards demonstrations. |
| Manage events | Open **Organizer hub** to work with drafts, preview event content, and explore the organizer-facing ticket customization interface. |

> The payment flow, Apple Wallet handoff, transfers, rewards, validation, and account records are clearly labelled demonstrations. They do not process payments, issue production tickets, or validate venue entry.

### Useful commands

| Command | What it does |
| --- | --- |
| `pnpm dev` | Starts the full local development server |
| `pnpm test` | Runs the Vitest suite |
| `pnpm check` | Runs TypeScript checking without emitting files |
| `pnpm build` | Builds the client and server bundles for the managed full-stack deployment |
| `pnpm build:pages` | Builds the static GitHub Pages site under the `/eventpulse/` base path |

## GitHub Actions and Pages deployment

Deployment is automated by the GitHub Actions workflow at [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml). It runs automatically on every push to `main`, installs the pinned dependencies, runs `pnpm build:pages`, uploads `dist/public`, and deploys the result to GitHub Pages. It can also be started manually from the repository’s **Actions** tab using **Run workflow**.

To maintain the live site, keep **Settings → Pages → Build and deployment → Source** set to **GitHub Actions**. Static deep links are supported through the included `404.html` client-router fallback.

### Publish a change

Run the quality checks locally, commit the change, and push to `main`:

```bash
pnpm test
pnpm check
pnpm build:pages
git add .
git commit -m "Describe your change"
git push origin main
```

GitHub Actions will publish the new static build to [the live site](https://anon-443.github.io/eventpulse/). Check the [workflow history](https://github.com/anon-443/eventpulse/actions/workflows/deploy-pages.yml) if a deployment needs troubleshooting.

## Static-site limitations

GitHub Pages serves static files only, so it does **not** run the Express/tRPC server, database, authentication, or server-side AI procedure. The Pages version continues to support browser-based discovery, filters, demo booking, locally stored wallet/profile experiences, referral views, organizer UI, and theme preferences. The AI description generator is intentionally shown as unavailable on the static deployment rather than presenting a misleading result.

Use a server-enabled deployment for live AI generation, real user accounts, ticket validation, or any feature that requires a private API key or database.

## Important demo notes

The booking payment, Apple Wallet handoff, ticket transfer, ticket barcode validation, local account preview, referral analytics, and loyalty rewards are **demonstration interfaces**. They are designed to show interaction patterns and do not transfer ticket ownership, process payments, validate venue entry, or store personal data on a remote server.

## Project structure

```text
client/
  src/pages/          # Home, Organizer Hub, Profile, and fallback page
  src/components/     # Ticket, wallet, notification, map, and UI components
  src/lib/            # Local identity, storage, routing, and rewards helpers
server/
  routers.ts          # tRPC procedures, including the server-side AI workflow
  db.ts               # Database helpers
.github/workflows/    # GitHub Pages deployment workflow
GITHUB_PAGES.md       # Detailed static-hosting notes
```

## Quality checks

Before publishing changes, run:

```bash
pnpm test
pnpm check
pnpm build:pages
```

The project also uses responsive visual checks for the public routes and verifies direct navigation on the GitHub Pages version.

## Next enhancements

The strongest next implementation steps are a secure public API backend for live AI generation, authenticated ticket ownership with signed QR validation, and an event-specific organizer branding model backed by a database.

---

Built as an EventPulse course project and portfolio-ready event booking platform.
