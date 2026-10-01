# Project JAKE — Premium Conceptual Redesign

## Goal
Transform the existing long technical page into a concise, premium product story that explains JAKE quickly: what it is, who it supports, where it begins, its current direction, and where it could go.

The redesign will preserve the official JAKE logo, existing robot imagery, PDF-derived navy/black backgrounds, blue glow language, and Monument-style headline treatment. The uploaded faculty image with JAKE will become a major editorial visual.

## Page structure
Condense the current 14 numbered sections into approximately seven distinct sections:

1. **Hero — Engineering Intelligence in Motion**
   - Large JAKE visual, concise product definition, short supporting line, two prominent actions.
   - Five simple capability labels only.
   - Make the project identity and development status understandable immediately.

2. **Meet JAKE**
   - Short human-centered introduction paired with the uploaded faculty image.
   - Present the university as JAKE's real-world starting environment without maps, building lists, or operational detail.

3. **What JAKE Can Do**
   - Five concise capabilities: Autonomous Assistance, Visitor Guidance, Information Support, Smart Interaction, and Light-Load Delivery.
   - One benefit-focused sentence per capability, with restrained cards and varied visual emphasis.

4. **Designed Around People / A Simple Experience**
   - Editorial robot-and-type composition focused on approachability and usefulness.
   - Four conceptual steps: Approach, Interact, Assist, Continue.
   - Replace the current technical voice flow and interface simulation.

5. **Starting at the Faculty**
   - Use the uploaded campus image at large scale.
   - Explain why the faculty is the first environment in one short paragraph.

6. **From Concept to Reality / Designed to Go Further**
   - Five-stage conceptual journey: Concept, Design, Prototype, Real-World Testing, Future Development.
   - Clearly show “JAKE 1.0 — In Development.”
   - Present future sectors as concise possibilities, not deployment claims.
   - Include the single project-direction disclaimer here instead of repeating status badges throughout the page.

7. **Join JAKE — Build What Moves Next**
   - Dramatic full-width closing section with the robot, concise invitation, and one strong action.
   - Retain the faculty and university credit in a minimal footer.

## Content cleanup
- Remove system architecture, component/module cards, engineering disciplines, route diagrams, technical interaction stages, detailed engineering phases, specifications, implementation language, and repeated feature sections.
- Remove every multilingual reference, including navigation, page copy, metadata, and hidden content.
- Replace repeated “Documented” and “Conceptual / Future” labels with one clear disclaimer in the status area.
- Rewrite copy to be shorter, confident, realistic, and understandable without robotics knowledge.
- Keep factual claims grounded in the supplied Project JAKE material and avoid unsupported deployment claims.
- Simplify navigation to Home, JAKE, Capabilities, Vision, Development, and Join.

## Visual direction
- Retain the PDF-inspired deep navy-to-black radial background and pale-blue contrast treatment, refined into fewer and more cinematic section changes.
- Keep official logo shadows and restrained blue illumination focused around the logo, robot, and primary actions.
- Use Monument Extended when a licensed webfont is available; otherwise keep the existing user-friendly Unbounded fallback. Preserve Inter Tight for body copy and JetBrains Mono only for small labels.
- Use larger editorial typography, shorter line lengths, generous but controlled spacing, subtle glass only where useful, and asymmetrical compositions rather than dashboard-like grids.
- Preserve the existing robot design and official imagery; do not generate replacements.
- Add a smooth scroll-linked background glow that shifts subtly between sections without competing with the robot or copy.
- Add restrained parallax to selected robot and campus imagery, tuned separately for desktop and touch devices.
- Keep all movement transform-based and lightweight, with gentler travel on phones and a static reduced-motion fallback.

## Mobile and tablet responsiveness
- Build each major section mobile-first rather than shrinking the desktop layout.
- Replace the current fixed desktop navigation with a compact accessible mobile menu while keeping the Join action easy to reach.
- Stack hero content naturally on phones, keep the robot fully visible, and size headlines with fixed breakpoint steps so no word clips or overlaps.
- Convert capability layouts into a clean single-column mobile sequence and a balanced two-column tablet layout.
- Turn the four-step experience and five-stage journey into vertical mobile stories with stable numbering and comfortable touch spacing.
- Use responsive image crops for the uploaded faculty image so JAKE remains visible at phone, tablet, and desktop sizes.
- Reduce oversized vertical gaps on phones while retaining premium breathing room; keep paragraph widths readable and actions full-width where appropriate.
- Prevent horizontal overflow in navigation, labels, buttons, large words, cards, and footer content.
- Keep motion lightweight on mobile and disable nonessential movement for reduced-motion users.
- Prevent scroll effects from causing content jumps, clipped imagery, horizontal drift, or degraded touch scrolling.

## Validation
- Check the complete page at desktop, tablet, and narrow mobile widths, including the glow and parallax at multiple scroll positions.
- Verify navigation, menu behavior, anchor links, both main actions, image loading, readable contrast, overflow, section order, smooth scrolling, parallax stability, and reduced-motion behavior.
- Search the rendered page and metadata to confirm all banned technical and multilingual terms are gone.
- Confirm the final page builds cleanly and that the first screen communicates JAKE, its faculty context, and its development status without scrolling through dense copy.

## Technical details
- Keep the site as one long-scroll page with reusable JAKE presentation elements and centralized factual copy.
- Add the uploaded faculty image through the project asset flow and use responsive image positioning.
- Update the page metadata to match the conceptual product story and remove multilingual or implementation-focused wording.
- Update project memory to reflect the newer content rules, including the single-disclaimer approach.
