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
- [x] Verify the GitHub Actions Pages deployment workflow is present, current, and automatically runs on main-branch pushes.
- [x] Add relevant public repository topics for event discovery, booking, React, TypeScript, Tailwind CSS, and GitHub Pages.

## Global Sizing and Color Refinement

- [x] Replace the cobalt/blue interface treatments with deep warm charcoal on the homepage while preserving coral actions and the yellow floating control.
- [x] Refine desktop hero typography, image rotation, editorial-card position, CTA spacing, and stat-label/divider sizing.
- [x] Reduce section whitespace and calibrate the calendar/search heading and supporting copy scale.
- [x] Resize featured and standard event-card imagery, text, spacing, shadows, descriptions, and booking controls for more consistent card proportions.
- [x] Refine newsletter and footer sizing, charcoal surface styling, spacing, controls, and social-icon scale.
- [x] Open and visually verify the Notification Center, then refine any residual blue treatment or oversized spacing.
- [x] Review and, if needed, refine organizer-draft, AI-history, and ticket-confirmation dialogs, then capture evidence of the charcoal sizing treatment.
- [x] Capture and review fresh tablet layouts for Home, Organizer Hub, and Profile after the final global sizing/color pass.
- [x] Commit and push the sizing/color refinements, wait for the GitHub Pages workflow to succeed, and verify the live site reflects the update.

## Event Catalog and Image Consistency Refresh

- [x] Replace every remaining surfaced concert and music reference on Profile, Organizer Hub, and event-facing UI with non-music content.
- [x] Rewrite the hero/editorial feature directly in Home.tsx so its image, title, labels, copy, iconography, and countdown context represent the garden-studio feature.
- [x] Standardize every event-card image to one responsive aspect ratio and uniform visual crop.
- [x] Publish the verified updated event catalog and uniform image sizing to GitHub Pages.

## Expanded Event Catalog and Hero Rebalance

- [x] Complete countdown start times and venue-map coordinates for every newly added event so all twelve detail views are accurate.
- [x] Replace the hero component’s underlying image and editorial content to match the refined aesthetic visual without CSS-only masking.
- [x] Rebalance the “Your next / good night / starts here.” headline size, line-height, and desktop/mobile composition for clearer visual hierarchy.
- [x] Publish the validated expanded catalog, equal image cards, revised hero, and headline to GitHub Pages.

## Event Image Reliability Fix

- [x] Replace the broken Clay & Conversation image reference with a reliable event visual.
- [x] Add a graceful image fallback so an unavailable external image never leaves an empty event-card area.
- [x] Verify all twelve event thumbnails render at desktop, tablet, and mobile widths before publishing the fix.

## Hero Copy Composition Correction

- [x] Widen and reposition the hero copy column so the left-side content uses the available desktop space intentionally.
- [x] Tune headline width, type scale, line-height, supporting-copy measure, CTA alignment, and statistic spacing for a balanced editorial composition.
- [x] Publish the validated hero composition and image reliability correction to GitHub Pages.

## Hero Spacing Correction

- [x] Reduce the desktop grid gap and reposition the hero image and editorial feature card closer to the copy block.
- [x] Preserve the clearer hero typography while removing the empty middle area at widescreen desktop sizes.
- [x] Publish the validated tightened hero layout to GitHub Pages.

## Inclusive Hero Visual and Messaging Refresh

- [x] Replace the banquet-room hero visual with an aesthetic daytime-friendly community or creative-event image.
- [x] Replace “Your next good night starts here.” with messaging that suits daytime, evening, and hybrid events.
- [x] Align the supporting hero and editorial-card copy with the refreshed all-hours event positioning.
- [x] Publish the validated revised hero to GitHub Pages.

## Homepage Feature Image and Overlap Correction

- [x] Use the selected daytime creative image in the homepage feature visual.
- [x] Remove the overlapping feature-title treatment and reposition the editorial card for clear, non-colliding content.
- [x] Publish the validated corrected homepage feature to GitHub Pages.

## Museum Hero and Above-the-Fold Refinement

- [x] Use the user-selected museum image as the homepage feature visual.
- [x] Move the eyebrow, headline, supporting copy, CTAs, feature image, and editorial card higher to remove excess space above the hero content.
- [x] Keep the 10k+, 500+, and 42 statistics visible in the first screen at desktop width without clipping.
- [x] Publish the validated above-the-fold composition to GitHub Pages.

## Left Hero Stack Elevation

- [x] Move the left hero eyebrow, headline, description, CTAs, and statistics upward toward the header at desktop width.
- [x] Preserve clear spacing, avoid clipping, and keep the museum feature visual balanced beside the elevated copy.
- [x] Publish the validated elevated hero stack to GitHub Pages.

## Newsletter Visual Balance

- [x] Add a restrained editorial visual treatment to the empty right side of the newsletter panel.
- [x] Preserve headline, body copy, email field, and action-button readability at desktop and mobile widths.
- [x] Verify and publish the enhanced newsletter panel and elevated hero stack to GitHub Pages.

## Mobile Typography and Copy Polish

- [x] Audit Home, Organizer Hub, Profile, shared dialogs, and navigation for mobile text wrapping, oversized type, and cramped controls.
- [x] Keep concise labels, metadata, and actions on one line where feasible without reducing legibility or causing overflow.
- [x] Remove unnecessary terminal periods from short labels, headlines, and UI sentences while retaining punctuation where it improves meaning.
- [x] Verify the refreshed text system at desktop, tablet, and mobile widths, then publish to GitHub Pages.

## Hero and Discovery Layout Correction

- [x] Remove or replace overlapping dotted ticket dividers in event-card metadata rows.
- [x] Separate the desktop hero editorial card from the museum feature-image title area.
- [x] Move the hero eyebrow, headline, supporting copy, CTAs, and statistics higher as one balanced composition.
- [x] Recompose the event-discovery heading and supporting copy to remove excessive horizontal empty space.
- [x] Recheck animation behavior and optimize the affected layouts for phones before publishing.

## Hero Overlay and Text Alignment Refinement

- [x] Remove the feature-title overlay text from the museum hero image.
- [x] Keep the discovery supporting sentence complete and on one line at desktop width.
- [x] Improve paragraph widths, line breaks, and alignment in the EventPulse way and discovery sections.
- [x] Validate responsive text formatting and publish the refinement to GitHub Pages.

## Discovery Header Baseline Alignment

- [x] Align the discovery heading and supporting sentence directly opposite each other with an even desktop gap and shared visual baseline.
- [x] Preserve a natural stacked layout on mobile, then validate and publish the alignment refinement.

## Discovery Header Simplification

- [x] Remove the discovery supporting sentence and keep a clean single-heading composition at every breakpoint.
- [x] Validate the simplified header and publish the correction to GitHub Pages.

## Hero Stack Elevation Follow-up

- [x] Move the hero eyebrow, headline, supporting copy, CTAs, and statistics upward toward the navigation while preserving their readable spacing.
- [x] Verify the elevated hero composition at desktop and phone widths, then publish to GitHub Pages.

## How-it-Works Card Balance and Image Variety

- [x] Center the numbers, titles, and supporting copy within each how-it-works card at desktop and phone widths.
- [x] Replace the duplicate Clay & Conversation event photograph with a distinct ceramics image while preserving the shared card crop.
- [x] Validate the corrected card and image presentation, then publish to GitHub Pages.

## Event Card Badge Removal and Header Visibility

- [x] Remove all EP number badges from event cards.
- [x] Increase navigation labels, account actions, and utility-icon sizing for clearer header visibility.
- [x] Validate desktop and phone layouts, then publish to GitHub Pages.

## Final Release Pass

- [x] Add a mobile filter drawer with event type, date, and price controls that apply to the homepage event grid.
- [x] Add a compact/comfortable event-card density control that works at desktop and phone widths.
- [x] Add a persistent reduced-motion preference that disables nonessential decorative and entrance motion.
- [x] Audit Home, Profile, Organizer Hub, ticket flows, shared dialogs, and navigation for unintended gaps, wrapping, punctuation, and text alignment.
- [x] Make concise labels remain on one line where space allows, preserve readable paragraphs, and correct inconsistent formatting.
- [x] Review the animation system for responsive and reduced-motion behavior.
- [x] Update README with final feature overview, local setup, GitHub Pages usage, and clear demo-only disclaimers.
- [x] Update the GitHub repository description and topics for the final public release.
- [x] Run tests, type checks, production build, and multi-viewport visual verification before publishing.

## Discovery Readability Scale

- [x] Increase discovery eyebrow, heading, search field, filters, category chips, event count, and preference-control text sizing.
- [x] Verify the larger discovery controls remain balanced at desktop and phone widths, then publish to GitHub Pages.
