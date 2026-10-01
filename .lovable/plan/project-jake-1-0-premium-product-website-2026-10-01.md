# Project JAKE 1.0 — Premium Product Website

A single, long-scroll product site for JAKE (Japura Autonomous Kiosk Engine), built from your brief and the project PDF. Facts come only from the PDF. The word "humanoid" is never used.

## Assets
- Official logo (blue version on dark) in the top bar and footer. The square logo becomes the browser tab icon.
- **Still needed:** the JAKE product photo and the Faculty of Engineering photo. Until you upload them, those spots show a clean labelled frame ("Product image pending"). Nothing is generated or swapped in from stock photos.

## Visual direction
- Dark, precise, lab-like look: near-black background, cool graphite panels, logo blue (#0A5CFF to #1E9BFF) as the only accent colour, thin hairline grids.
- Wide geometric display type (similar to the logo lettering) for headlines, a clean grotesk for body text, a mono font for technical labels.
- Restrained motion: fade-up on scroll, a voice demo that steps through its states, a route line that draws itself.

## Sections (in order, following the brief)
1. Top bar: logo, section links, "JOIN JAKE →"
2. Hero: "PROJECT JAKE 1.0 / ENGINEERING INTELLIGENCE IN MOTION.", subtitle, two buttons, five capability tags
3. Introduction: "Built for a real environment" (from the Executive Summary and Background in the PDF)
4. Faculty environment: faculty photo frame plus the "From the Faculty of Engineering..." line
5. Where it starts → What we are building → Where it can go
6. Intended operating areas: faculty bridge and connected buildings, plus a conceptual route map, clearly labelled
7. Six core capabilities
8. Voice interaction: the "Speak. JAKE listens." flow and a stepped demo (Listening → Request recognized → Destination found → Route ready, destination "Mechatronics Laboratory"), labelled conceptual
9. Voice + touch
10. Multilingual: English, Sinhala, and Tamil (shown as future integration)
11. Interaction UI mock, labelled "Conceptual UI"
12. Light-load delivery: 5–8 kg, request → load → navigate → deliver
13. Inside JAKE: only the modules listed in the PDF's architecture table
14. Engineered in phases: the 9 phases from the PDF
15. Where disciplines connect: mechatronics, robotics, AI, automation, software
16. Project status: research, design, development, testing. No percentages.
17. Future applications: hotels, hospitals, universities, offices, airports, malls (from the PDF)
18. Join the project: call-to-action. The contact address is a placeholder until you give the real one.
19. Footer: Faculty and university credit

Every claim is marked as either Current/Documented or Conceptual/Future, as the brief requires.

## Technical details
- Replace `src/routes/index.tsx` with the full page, split into section components under `src/components/jake/`. Content lives in `src/content/jake.ts`, sourced from the PDF.
- Design tokens (oklch) go in `src/styles.css`. Fonts are loaded via a link in `__root.tsx`: Michroma (display), Inter Tight (body), JetBrains Mono (labels).
- The logo is uploaded through lovable-assets. The favicon is a padded square copy in `public/`.
- Page head() gets a unique title, description, and og/twitter tags. Root metadata loses the "Lovable App" defaults.
- Frontend only, no backend.
- Record the structure in AGENTS.md and save the "no humanoid" rule and the brand colours to memory.
