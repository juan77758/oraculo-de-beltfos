# Implementation Plan: El Oráculo De Beltfos Landing Page

Design and build a premium sports prediction landing page called "El Oráculo De Beltfos" based on the design layout of [chatgpickst.com](https://www.chatgpickst.com). The site will be built using HTML, CSS, and Vanilla Javascript with a rich dark aubergine and fuchsia color palette, premium glassmorphism, responsive sections, interactive elements, and custom brand logos.

## User Review Required

> [!IMPORTANT]
> **Visual Assets:** We will use the existing logo files in the root folder (`logo.png`, `logo 2.jpg`, `oraculo.png`, `portada.jpg`). 
> - `logo.png` / `logo 2.jpg` will be used in the Navigation Bar and Footer.
> - `oraculo.png` will be used as a premium visual highlight (e.g. within the Hero or Chat Mockup).
> - `portada.jpg` can be used as a background accent or section hero image.
> 
> Please let us know if any links (like Telegram or social handles) need specific endpoints, or if we should use placeholders.

## Open Questions
- Do you have a specific Telegram link or WhatsApp channel you want the buttons to point to? We will default to a placeholder CTA link (`https://t.me/OraculoDeBeltfos`) that can be easily updated.

## Proposed Changes

### [Web Application Component]
Implement a responsive, modern single-page website with a premium sports-oracle aesthetic.

#### [NEW] [index.html](file:///c:/Users/Juan%20Carlos/Desktop/oraculo%20de%20beltfos/index.html)
- Main HTML5 structural layout containing:
  - Header & Sticky Nav Bar with brand logo (`logo.png`).
  - Hero Section with heading, sub-headline, Call-to-Action (CTA), and an interactive Chat Mockup simulating predictions.
  - Live Stats Bar showing weekly results (wins/losses, hit rate, ROI).
  - Problem Section showing why casual bettors lose.
  - Qualification Gate showing who the Oracle is for.
  - Features Section listing the benefits of joining.
  - How it Works section detailing the automated analysis process.
  - FAQ Section with expandable accordion details.
  - Final CTA section with fuchsia radial gradient glow.
  - Footer with social links and compliance text.

#### [NEW] [index.css](file:///c:/Users/Juan%20Carlos/Desktop/oraculo%20de%20beltfos/index.css)
- Custom design system variables:
  - `--bg-dark`: `#07010a` (Deep dark background)
  - `--bg-aubergine-deep`: `#16041c` (Deep dark aubergine)
  - `--bg-aubergine-card`: `#23072e` (Aubergine card background)
  - `--fuchsia`: `#ff007f` (Bright neon fuchsia)
  - `--fuchsia-glow`: `rgba(255, 0, 127, 0.15)`
  - `--text-white`: `#ffffff`
  - `--text-muted`: `#b39ebb` (Muted lilac text)
- Key features:
  - Typography using modern Inter or Google Fonts (Outfit).
  - High-end glassmorphic borders and shadows.
  - Subtle hover and pulsing micro-animations for buttons and interactive items.
  - Responsive layout media queries.

#### [NEW] [index.js](file:///c:/Users/Juan%20Carlos/Desktop/oraculo%20de%20beltfos/index.js)
- Lightweight javascript file to drive interactive features:
  - Sticky navigation background transition on scroll.
  - Simulated chat interface typing effects or message sequences showing predictions.
  - FAQ Accordion interactive smooth transition support.

## Verification Plan

### Automated Tests
- Since it is a static web page, verification will consist of running HTML/CSS lint checks if present and loading the page.
- We will verify that there are no javascript console errors.

### Manual Verification
- View the webpage inside a local server.
- Verify color contrast, mobile responsiveness, and interactive accordion/chat functionality.
