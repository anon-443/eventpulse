# EventPulse

> A modern, responsive event discovery and ticket-booking platform built as a student web-development project.

**Live website:** [anon-443.github.io/eventpulse](https://anon-443.github.io/eventpulse/)  
**Source code:** [github.com/anon-443/eventpulse](https://github.com/anon-443/eventpulse)

## Overview

EventPulse helps people explore community, design, technology, workshop, and wellness events through a polished editorial interface. Visitors can search listings, apply practical filters, open event details, and complete a guided demo booking flow. The experience is designed for phone, tablet, and desktop screens.

## Features

| Area | Included functionality |
| --- | --- |
| Homepage | Editorial hero, event categories, calls to action, event statistics, and newsletter sign-up validation |
| Event discovery | Search, category chips, date/price/type filters, mobile filter drawer, and compact or comfortable card views |
| Event details | Schedule, venue information, organizer context, map view, countdown, calendar export, and share controls |
| Booking | Validated guest form, ticket quantity selection, demo payment step, confirmation modal, QR ticket, and download UI |
| Profile | Login/sign-up interface, favorites, wallet-style passes, notification preferences, referral insights, and rewards demos |
| Organizer Hub | Event-management dashboard, auto-saved draft UI, live preview, description helper, and ticket-theme controls |
| Accessibility | Responsive navigation, keyboard focus states, light/dark theme, and optional reduced-motion preference |

## Technology

The project uses **React**, **TypeScript**, **Vite**, **Tailwind CSS**, **Framer Motion**, **Wouter**, **Express**, **tRPC**, **Drizzle**, and **Vitest**.

## Run locally

Install a current LTS version of Node.js and [pnpm](https://pnpm.io/), then run:

```bash
git clone https://github.com/anon-443/eventpulse.git
cd eventpulse
pnpm install --frozen-lockfile
pnpm dev
```

The development server prints the local address in the terminal.

## Useful commands

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Starts the local development server |
| `pnpm test` | Runs the Vitest test suite |
| `pnpm check` | Runs TypeScript validation |
| `pnpm build` | Builds the full application |
| `pnpm build:pages` | Builds the static GitHub Pages version |

## GitHub Pages deployment

The project deploys automatically to GitHub Pages whenever changes are pushed to the `main` branch. The workflow is defined in [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml).

Because GitHub Pages is static hosting, server-backed functions such as production authentication, AI generation, live payments, and ticket validation are not available in the public deployment.

## Demo notice

Booking payments, wallet handoff, ticket transfers, rewards, account data, and ticket validation are **demonstration interfaces**. They are included to showcase front-end interaction design and do not process payments, issue live tickets, or validate venue entry.

## Project structure

```text
client/              # React pages, components, styles, and browser utilities
server/              # Express and tRPC server code for local/full-stack development
drizzle/             # Database schema and migrations
.github/workflows/   # GitHub Pages deployment automation
```

---

Built for an Event Booking Platform course project.
