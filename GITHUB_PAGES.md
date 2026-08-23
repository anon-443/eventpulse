# GitHub Pages deployment

The public repository deploys a static EventPulse preview to `https://anon-443.github.io/eventpulse/` through `.github/workflows/deploy-pages.yml`.

GitHub Pages does not run the Express/tRPC server. Consequently, the public Pages preview preserves the browser-based event discovery, wallet, ticket, referral, local-profile, and organizer UI features, but the server-backed AI description generator is clearly labelled as unavailable there. Use the managed EventPulse deployment for live server-backed AI generation and any future authenticated backend features.

The workflow builds with the `/eventpulse/` base path, and `404.html` redirects static deep links back to the client router. In the repository’s **Settings → Pages**, the deployment source must remain **GitHub Actions**.
