# EventPulse Design Direction

## Three stylistic approaches

### Theme Name: Sunlit Editorial Festival
Very warm, optimistic event discovery with a paper-like canvas, bold display type, electric coral and cobalt accents, and editorially offset composition.
Probability: 0.06

### Theme Name: Quiet Gallery Calendar
A restrained art-book interface with bone, ink, and muted sage tones, slow transitions, generous margins, and a focus on curatorial clarity.
Probability: 0.03

### Theme Name: Night Signal District
A dark urban event atlas with electric lime, cobalt, and infrared details, kinetic grid references, and high-contrast luminous wayfinding.
Probability: 0.08

## Chosen Approach: Sunlit Editorial Festival

### Design Movement
Contemporary editorial design blended with modern festival identity systems: expressive typography, intentional asymmetry, tactile print cues, and high-contrast wayfinding.

### Core Principles
1. Lead with feeling, then answer logistics: every event surface pairs an evocative visual or phrase with immediately scannable date, place, and price.
2. Make the page feel composed, not templated: offset columns, large type, cropped imagery, and moments of quiet whitespace create a guided rhythm.
3. Use color as a navigation language: coral signals action and warmth, cobalt signals trust and focus, marigold marks discovery, and ink keeps everything grounded.
4. Motion should feel like a page turn or a poster being pinned: quick, intentional, and physical rather than flashy.

### Color Philosophy
EventPulse lives on warm paper, not sterile white. A light cream canvas makes photography and accent colors feel printed and tactile. Electric coral is the ownable signature color because it reads as social, energetic, and human. Cobalt anchors interactive elements with a dependable, contemporary note, while marigold introduces serendipity and celebration. Deep ink provides high-contrast reading comfort.

### Layout Paradigm
A scroll-led editorial composition: the hero uses a split asymmetry with a text block, an overflowing featured card, and a small live-stat rail. Discovery sections switch between an open event grid, offset category index, and a booking panel that reads like a ticket stub. Avoid a single centered column; let content break the frame while maintaining strong mobile stacking.

### Signature Elements
- Ticket-stub geometry: small perforated edges, dashed dividers, and compact meta rows echo physical tickets without becoming kitsch.
- Sun mark: a small coral circular mark with a cobalt orbit appears in the logo, category chips, and live-state indicators.
- Cropped poster crops: event imagery sits in bold rectangular frames with subtle hover zoom and editorial captions.

### Interaction Philosophy
Interactions should reassure and reward. Search results refine immediately. Event cards reveal a little more on hover, then open a calm detail drawer. Booking is staged into concise steps with clear financial math and inline validation. Every meaningful action gets a small, human confirmation rather than a loud system alert.

### Animation
Entrance motion uses opacity plus a short upward translate with 30–70ms stagger. Cards lift 4px on hover and their images scale to 1.035. Buttons compress to 0.97 on press. Drawers enter from the right on desktop and from the bottom on mobile with a spring-like ease-out. Success states use a single outlined checkmark draw and a gentle coral pulse. Respect reduced motion and keep UI transitions below 300ms wherever possible.

### Typography System
Use Fraunces for headlines and display numerals: high-character, editorial, and slightly unexpected. Use DM Sans for body copy, labels, navigation, and controls for crisp utility. Headlines are tight and expressive; metadata is uppercase or sentence-case with wider tracking and a strong numeric emphasis.

### Brand Essence
EventPulse is the warm, design-led way for curious people to find the next thing worth showing up for. Personality: curious, vibrant, considered.

### Brand Voice
Headlines are inviting and specific, never generic. CTAs are direct but human. Microcopy should sound like a thoughtful host with a sense of momentum.

Example lines:
- “Your next good night starts here.”
- “Keep the plans. We’ll keep the pulse.”

### Wordmark & Logo
The mark is a coral sun disc intersected by a cobalt orbit line, forming a compact “pulse” gesture. Pair it with a custom wordmark treatment that uses a slightly italicized serif Event and a clean sans Pulse, with the sun mark serving as the dot-like visual counterweight.

### Signature Brand Color
Pulse Coral — #F05A47. This is the unmistakable action and warmth color for EventPulse.

## Style Decisions
- Prefer warm paper surfaces over pure white as the primary light canvas.
- Use editorial asymmetry and ticket-stub motifs consistently across pages and dialogs.
- Keep the primary experience light-themed, with a dark-mode toggle as a considered alternate palette.
- Use generated visual assets only for prominent featured event imagery and the brand mark; use gradient/color treatments elsewhere to avoid repetition.
