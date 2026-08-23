# EventPulse Extension Checklist

- [x] Identify and resolve the visible image or UI error reported after the first delivery.
- [x] Add navigation routes and coherent state for event discovery, organizer dashboard, and user profile surfaces.
- [x] Build the organizer dashboard with KPI cards, booking trend visualization, event management table, and add-event interaction.
- [x] Build a dedicated login/signup and user profile page with booked tickets and past event history UI.
- [x] Add a live interactive venue map to event details using the included map component.
- [x] Add a compliant reviews area that does not fabricate reviews, ratings, or testimonials.
- [x] Validate desktop and mobile layouts, core interactions, and production build output.

## Countdown, Ticket, and Motion Extension

- [x] Add a live event countdown to the event details experience.
- [x] Refine the booking confirmation into a clear, downloadable ticket modal.
- [x] Extend organizer event creation with client-side image upload preview and rich description controls.
- [x] Ensure the theme toggle is accessible from every major platform page, including account entry.
- [x] Add considerate route-level page transitions while preserving reduced-motion support.
- [x] Verify responsive behavior and production build output.

## Ticket QR, Drafts, and Preferences Extension

- [x] Generate a ticket-specific, machine-readable QR code and include it in the ticket download.
- [x] Add local auto-save and restore controls for Organizer Hub event drafts, including rich text and image preview data.
- [x] Add a profile notification-preferences panel for event countdown and booking update alerts.
- [x] Add focused booking quality-of-life improvements without diluting the editorial event experience.
- [x] Validate ticket, draft, and preference persistence interactions across responsive layouts.

## Reusable Workflow and Organizer Intelligence Extension

- [x] Package the proven EventPulse delivery workflow as a reusable skill and validate it.
- [x] Add a live drafted-event preview to the Organizer Hub creation flow.
- [x] Add a keyword-to-description text assistant to the organizer creation flow.
- [x] Add a visual notification-center dropdown that respects locally saved notification preferences.
- [x] Verify the new organizer and navigation interactions and save the updated release.
- [x] Save a new EventPulse checkpoint after the organizer preview, AI description assistant, notification center, and reusable skill are validated.

## Tone, Alerts, and Wallet Extension

- [x] Update and validate the reusable EventPulse workflow skill for tone-aware writing, alert management, and wallet-style ticket handoff.
- [x] Add professional, casual, and exciting tone selection to the organizer AI description assistant.
- [x] Add category filtering and mark-all-read behavior to the Notification Center.
- [x] Add an Apple Wallet-style mock handoff from the ticket confirmation modal.
- [x] Verify updated tests, build, and responsive interaction surfaces before release.
- [x] Verify the tone selector, Notification Center controls, and Apple Wallet mock at mobile and tablet breakpoints, then save the updated release.

## AI History, Wallet, and Sharing Extension

- [x] Update and validate the reusable EventPulse workflow skill for AI description history, wallet management, and event sharing.
- [x] Add locally persisted AI-description history with compare and restore actions in the Organizer Hub.
- [x] Add a Wallet & Passes section to the user profile for saved ticket and Apple Wallet mock management.
- [x] Add accessible social sharing and copy-link controls to event details.
- [x] Verify tests, production build, and responsive layouts before release.
- [x] Make AI-history restore open and populate the organizer draft editor when it is closed.
- [x] Add an explicit side-by-side comparison view for two generated AI descriptions.
- [x] Verify AI history, Wallet & Passes, and event-sharing controls at mobile and tablet breakpoints, then save the updated release.

## Referral, Merge, and Persistence Extension

- [x] Add a local referral insights panel in the profile that records and displays shared-link click activity.
- [x] Add an organizer merge flow for combining the strongest parts of two saved AI descriptions into a new draft version.
- [x] Persist Wallet & Passes data locally so saved tickets and pass status survive refreshes.
- [x] Verify persistence behaviors, tests, responsive layouts, and production build before release.
- [x] Replace fixed AI-description splicing with an organizer-controlled merge composer that lets users choose content from each version.
- [x] Exercise and verify referral tracking, AI merge composition, and wallet persistence behavior before saving the release.

## Draft Library, Referral Trends, and Wallet Organization Extension

- [x] Add editable names, tags, and export actions to merged AI description versions.
- [x] Add visual referral activity and click-trend charts based on locally recorded referral data.
- [x] Add wallet-pass filtering and sorting controls with locally retained preferences.
- [x] Verify interactions, responsive layouts, tests, and production build before release.
- [x] Verify the draft-library metadata/export controls, referral trend chart, and wallet sort/filter UI at mobile and tablet breakpoints, then save a validated checkpoint.
- [x] Save a validated EventPulse checkpoint for the draft-library, referral-trend, and wallet-organization extension.

## User-Scoped Analytics and Ticket Management Extension

- [x] Add date-range selection and CSV export for locally recorded Referral Insights.
- [x] Add wallet-pass search and calendar-based expiry filters with durable local preferences.
- [x] Scope organizer draft metadata, referral events, wallet passes, and preferences to the active account-preview identity.
- [x] Verify exports, scoped persistence, responsive controls, tests, and production build before release.

## Ticket Wallet Reminders and Sharing Extension

- [x] Add account-scoped configurable pass-expiry reminder settings and contextual mock alerts.
- [x] Add an accessible 3D ticket flip with a barcode and event-entry rules on the back.
- [x] Add quick-sharing controls directly to saved wallet passes.
- [x] Verify reminder, flip, barcode, sharing, responsive, and production-build behavior before release.

## Ticket Transfer, Ticket Customization, and Rewards Extension

- [x] Add a clearly labelled mock ticket-transfer form to the back of saved 3D wallet passes.
- [x] Add an organizer ticket-customization panel for ticket theme color and logo selection.
- [x] Apply organizer ticket-branding choices to generated 3D ticket previews without misleading validation claims.
- [x] Add an account-scoped Rewards profile tab for mock attendance and referral loyalty points.
- [x] Verify transfer, customization, rewards persistence, responsive layouts, tests, and production build before release.
- [x] Persist mock attendance-reward history under the active local account and re-verify organizer branding reaches the wallet pass after navigation.

## Source Export and Custom Domain Handoff

- [x] Export the EventPulse source to the user's GitHub account as the eventpulse repository.
- [x] Confirm the user's hosting choice: use the free `anon-443.github.io/eventpulse` GitHub Pages subdomain, so no custom DNS configuration is required.

## Public Repository Sanitization

- [x] Audit all tracked files and reachable Git history for secrets, personal data, local artifacts, and credentials.
- [x] Remove or exclude any sensitive material found before changing GitHub repository visibility.
- [x] Validate the sanitized codebase and publish `anon-443/eventpulse` as a public repository.

## Free GitHub Pages Hosting

- [x] Review the current build, routes, and server-backed features for GitHub Pages compatibility.
- [x] Add a GitHub Pages build and deployment workflow for `anon-443.github.io/eventpulse`.
- [x] Document static-hosting limitations and verify the Pages deployment URL.

## Error Notification Repair

- [x] Identify the reported red indicator as a stale development-preview error state left by an earlier resolved import failure.
- [x] Restart the development service so the current valid build clears the stale preview notification.
- [x] Verify the repaired local preview and live GitHub Pages build render without a current runtime error.
- [x] Test the hero action visible behind the report and confirm no red indicator, active error toast, or runtime error is present after restart.
- [x] Verify the same local preview path remains clear after the service restart and record that no matching current runtime error is present.

## Latest GitHub Publication

- [x] Commit and push the current verified EventPulse changes to `anon-443/eventpulse`.
- [x] Verify the public repository reflects the published commit.

## Public Documentation and Live Site

- [x] Write a public README with EventPulse features, local setup, GitHub Pages deployment, and known static-hosting limitations.
- [x] Publish the README to GitHub and verify `https://anon-443.github.io/eventpulse/` remains reachable.

## Hero Composition Refinement

- [x] Remove excessive vertical empty space above the hero eyebrow and rebalance the desktop hero proportions.
- [x] Restore a preferred hero visual direction with a polished, portable event image treatment.
- [x] Replace the oversized Listening Room countdown panel with a more intentional floating editorial feature card.
- [x] Verify the refined hero composition across desktop, tablet, mobile, and GitHub Pages before release.
- [x] Publish the hero refinement to GitHub Pages and visually verify the live homepage renders the compact layout, updated event visual, and editorial feature card.

## Interactive Event Discovery Enhancement

- [x] Add accessible event-card hover and keyboard-focus previews with concise event details.
- [x] Add account-scoped favorite bookmarking controls on event cards with durable local persistence.
- [x] Refine the navigation dark-mode control and create a theme-aware hero image treatment.
- [x] Verify interactive cards, favorites, theme adaptation, responsive layouts, tests, and GitHub Pages build before release.

## Event Motion and Calendar Export

- [x] Add a smooth, reduced-motion-aware image zoom effect to interactive event cards.
- [x] Add a standards-based calendar file export for locally saved favorite events.
- [x] Verify calendar downloads, responsive interactions, tests, and GitHub Pages build before release.

## Aesthetic Hero Visual Refresh

- [x] Replace the current confetti hero image with a calmer aesthetic festival visual.
- [x] Preserve hero-card readability, dark-mode treatment, responsive composition, and GitHub Pages compatibility.
- [x] Verify the calendar action and card layout at mobile and tablet breakpoints after the latest update.
- [x] Reconfirm the navigation theme toggle applies dark mode and the refreshed hero treatment remains readable.
- [x] Verify the refreshed aesthetic hero visual on the live GitHub Pages site before release.
- [x] Visually confirm the dark-mode hero image, overlay, and editorial card remain readable after the final visual refresh.

## GitHub Repository Metadata

- [x] Add a clear public description and live GitHub Pages website URL to the EventPulse repository About section.

## GitHub Documentation and Discoverability

- [x] Add clear local installation, development, validation, and GitHub Pages usage instructions to README.md.
- [ ] Verify the GitHub Actions Pages deployment workflow is present, current, and automatically runs on main-branch pushes.
- [x] Add relevant public repository topics for event discovery, booking, React, TypeScript, Tailwind CSS, and GitHub Pages.
