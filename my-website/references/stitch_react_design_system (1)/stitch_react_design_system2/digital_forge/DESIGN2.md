---
name: Digital Forge
colors:
  surface: '#fdf9f2'
  surface-dim: '#dddad3'
  surface-bright: '#fdf9f2'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3ec'
  surface-container: '#f1ede6'
  surface-container-high: '#ebe8e1'
  surface-container-highest: '#e6e2db'
  on-surface: '#1c1c18'
  on-surface-variant: '#444748'
  inverse-surface: '#31302c'
  inverse-on-surface: '#f4f0e9'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c9c6c5'
  secondary: '#735b24'
  on-secondary: '#ffffff'
  secondary-container: '#fedb98'
  on-secondary-container: '#785f28'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#331200'
  on-tertiary-container: '#bb7145'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c9c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#ffdf9f'
  secondary-fixed-dim: '#e3c281'
  on-secondary-fixed: '#261a00'
  on-secondary-fixed-variant: '#5a430e'
  tertiary-fixed: '#ffdbc9'
  tertiary-fixed-dim: '#ffb68d'
  on-tertiary-fixed: '#331200'
  on-tertiary-fixed-variant: '#71370e'
  background: '#fdf9f2'
  on-background: '#1c1c18'
  surface-variant: '#e6e2db'
  obsidian: '#080808'
  midnight: '#101624'
  ivory: '#F7F3EC'
  champagne: '#C8A96A'
  copper: '#B76E42'
  slate: '#667085'
  stone-border: '#E7E1D6'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 40px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.75'
  body-md:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.2em
  button-text:
    fontFamily: Hanken Grotesk
    fontSize: 15px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  container-max: 1280px
  gutter: 24px
  section-py-desktop: 128px
  section-py-mobile: 80px
  card-p: 32px
---

## Brand & Style
The design system embodies the "Digital Forge" narrative—a premium technical studio where high-performance conversion tools are handcrafted with precision. The aesthetic is a sophisticated fusion of **Minimalism** and **Tactile Modernism**, moving away from generic SaaS tropes toward an editorial, boutique agency feel.

The emotional response should be one of "Expert Craftsmanship" and "Dark Luxury." The interface utilizes high-contrast transitions between light, warm ivory surfaces and deep obsidian laboratory-themed sections. 

**Key Visual Motifs:**
- **Technical Blueprinting:** Use of subtle grid lines and "connector" strokes to visualize automation flows.
- **Layered Artifacts:** UI elements are treated as physical components—layered cards with refined shadows and subtle paper grain textures.
- **Editorial Precision:** High-contrast typography with tight tracking for headlines and wide-tracked uppercase labels for metadata.

## Colors
The palette is rooted in a "Luxury Lab" aesthetic. The primary experience uses **Warm Ivory** as a base to provide a more organic and premium feel than pure white. 

**Color Roles:**
- **Obsidian Black & Midnight Navy:** Used for high-impact sections (Hero, Process Blueprints) to create depth and focus.
- **Champagne Gold:** Reserved for interactive accents, success states, and technical highlights.
- **Burnished Copper:** A secondary accent for warning states or specific "high-energy" automation nodes.
- **Muted Slate & Stone:** Used for secondary text and structural borders to maintain a low-noise environment.

**Color Mode:** The design system defaults to a light mode (Ivory base) but utilizes "Dark Mode Sections" (Obsidian/Midnight) to denote areas of "The Forge"—where the technical work happens.

## Typography
The typography strategy creates a tension between high-fashion editorial and technical precision.

- **Headlines (Hanken Grotesk):** Modern, sharp, and impactful. Headlines should use tight negative letter-spacing to feel "locked in" and custom-designed.
- **Body (DM Sans):** Chosen for its geometric clarity and understated neutrality, ensuring high readability in technical descriptions.
- **Labels (JetBrains Mono):** Monospaced fonts are used for metadata, chips, and small editorial labels to reinforce the "built/system" narrative. These must always be uppercase with generous tracking (0.2em).

## Layout & Spacing
The layout relies on a **Fixed Grid** model within a 1280px container, utilizing generous vertical whitespace (128px between sections) to signify premium positioning.

**Grid Principles:**
- **Weighted Asymmetry:** For hero and feature sections, use a 60/40 or 0.8fr/1.2fr split to avoid the "template" look.
- **Blueprint Connectors:** In process sections, use thin (1px) champagne lines to connect cards, creating a flow chart visual.
- **Margins:** Maintain a minimum 24px safe area on mobile and 64px on desktop.

## Elevation & Depth
Depth is used to distinguish "Artifacts" (interactive cards) from the "Environment" (backgrounds).

- **Tonal Layering:** On Obsidian backgrounds, use Midnight Navy (#101624) for card surfaces to create a subtle, "backlit" depth.
- **The Laboratory Shadow:** Use highly diffused, low-opacity shadows with a slight tint of the accent color (`rgba(200, 169, 106, 0.08)`) to make elements appear as if they are floating above a desk.
- **Glassmorphism (Subtle):** Use for "floating" notification cards in the hero section, with a 12px backdrop-blur and a 1px Stone-border outline.

## Shapes
The design uses a "Soft Geometric" language. While the overarching feel is technical, large radii (rounded-2xl and 3xl) are used to make the UI feel modern and bespoke.

- **Cards:** `1.5rem` (rounded-xl) for standard components.
- **System Assets:** `2rem` (rounded-3xl) for mockups and main containers.
- **Interactive Pills:** Always fully rounded (pill-shaped) to distinguish buttons from informational cards.
- **Technical Nodes:** Small 4px radius or perfect circles for step indicators.

## Components

### Buttons
- **Primary:** Obsidian background, Ivory text, pill shape. Hover state transitions to a Champagne Gold background with a soft outer glow.
- **Secondary:** Transparent background with a 1px Stone border. Hover state shifts the border and text to Champagne Gold.

### Cards & Artifacts
- **The "Artifact" Card:** White or Midnight surface, 1px Stone border, and a subtle "Blueprint" grid pattern in the background (5% opacity).
- **Featured Work:** Image containers should have a `300ms` lift effect (`-translate-y-2`) with an intensified shadow on hover.

### Form Fields
- Ivory background with a 1px Stone border. Focus state must use a Champagne Gold border and a subtle 2px glow. Labels must be `label-caps` typography.

### Process Blueprints
- Connect steps with 1px dashed champagne lines. Step indicators are Obsidian circles with Champagne Gold numbers.

### System Mockups
- Replace standard browser windows with "Layered System Desks"—overlapping cards representing different parts of a workflow (e.g., a "Mobile Checkout" card partially covering an "Admin Dashboard" card).