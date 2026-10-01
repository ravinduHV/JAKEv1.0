# JAKE Site — PDF Images, Branding and Monument Headlines

## 1. Use the real images from the PDF
These images are in the PDF and will replace the "image pending" frames:
- **JAKE robot, front three-quarter view (cut out on transparent):** the main picture at the top of the page, with a soft blue glow under it.
- **JAKE robot, front and back pair:** used in the "Inside JAKE" (system) section next to the module cards.
- **Official logo with the blue gradient:** taken from the PDF version, replacing the current crop, so the top bar and footer get a clean logo with no dark box behind it.

The PDF has no photo of the Faculty building, so that section keeps a framed placeholder. It will be restyled as a blue-gradient panel with the faculty name until you upload a real photo. Nothing will be AI-generated.

## 2. Match the PDF background and glow
- **Page background:** the deep navy-to-black gradient from the PDF cover (bright logo blue in the top-left corner, fading to near-black). It is used behind the opening section and the "Join JAKE" section, and as a soft corner wash on other sections.
- **Light sections:** the PDF's white-to-pale-blue gradient page is used for one or two contrast sections (for example "The project addresses" and the phases list), so the page isn't all dark.
- **Logo glow:** blue glow and drop shadow taken from the logo (#0A5CFF to #1E9BFF). It is applied to the logo, the main buttons, cards on hover, and the robot picture.
- **Colours:** the existing colours are fine-tuned to the exact blues sampled from the PDF.

## 3. Headline font: Monument Extended
- Headlines use **PP Monument Extended** (the free personal-use version from Pangram Pangram). It is hosted with the site, with heavier weights for big titles and regular for smaller ones.
- To keep it easy to read: wide letter-spacing on small labels only, slightly tighter spacing on big titles, and uppercase for section titles.
- If the font files can't be fetched or the licence blocks it, the fallback is **Unbounded**, a free, wide, geometric font that looks almost the same.
- Body text stays Inter Tight and labels stay JetBrains Mono.

## Technical details
- Combine each PDF image with its transparency mask (ImageMagick `-compose CopyOpacity`), trim, then upload through lovable-assets. The pointers go in `src/assets/`.
  - img-005 + img-006: robot hero
  - img-014 + img-015: robot pair
  - img-003 + img-004: gradient logo, right half
- Sample the gradient stops from img-000 (dark page) and img-009 (light page). Add `--gradient-page`, `--gradient-light`, `--shadow-glow` and `--shadow-logo` tokens to `src/styles.css`, plus `bg-page` and `bg-light` utilities and a `.light-section` scope that overrides the colour tokens.
- Self-host the Monument woff2 files via lovable-assets and `@font-face`. Map `--font-display` to Monument with Unbounded as the fallback, loaded via a link.
- Update `ImagePending` usage in `index.tsx`. Regenerate the favicon from the gradient logo.
- Update the memory note on fonts and backgrounds.
