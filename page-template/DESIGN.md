---
name: Emerald Impact Portfolio
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#3e4a3f'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#6e7a6e'
  outline-variant: '#bdcabc'
  surface-tint: '#006d36'
  primary: '#006d36'
  on-primary: '#ffffff'
  primary-container: '#50c878'
  on-primary-container: '#005025'
  inverse-primary: '#66dd8b'
  secondary: '#5e5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e2e2e2'
  on-secondary-container: '#646464'
  tertiary: '#5d5f5b'
  on-tertiary: '#ffffff'
  tertiary-container: '#b1b2ae'
  on-tertiary-container: '#434541'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#83fba5'
  primary-fixed-dim: '#66dd8b'
  on-primary-fixed: '#00210c'
  on-primary-fixed-variant: '#005227'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c6'
  on-secondary-fixed: '#1b1b1b'
  on-secondary-fixed-variant: '#474747'
  tertiary-fixed: '#e3e3de'
  tertiary-fixed-dim: '#c6c7c2'
  on-tertiary-fixed: '#1a1c19'
  on-tertiary-fixed-variant: '#454744'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-xl:
    fontFamily: Anton
    fontSize: 120px
    fontWeight: '400'
    lineHeight: 110px
    letterSpacing: 0.02em
  headline-lg:
    fontFamily: Anton
    fontSize: 80px
    fontWeight: '400'
    lineHeight: 80px
    letterSpacing: 0.02em
  headline-lg-mobile:
    fontFamily: Anton
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 52px
  headline-md:
    fontFamily: Anton
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 44px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 32px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: 0.1em
  ticker-text:
    fontFamily: Space Grotesk
    fontSize: 18px
    fontWeight: '700'
    lineHeight: 24px
spacing:
  grid-unit: 8px
  container-max: 1440px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  section-padding: 120px
---

## Brand & Style

This design system is built for creative professionals and developers who want a portfolio that commands attention through structural confidence and bold typographic hierarchy. It draws heavily from **Brutalism** and **High-Contrast** modernism, utilizing raw structural lines, a subtle dot-grid background, and vibrant color accents to create an atmosphere of technical precision and creative energy.

The brand personality is authoritative yet approachable, characterized by:

- **Impactful Typography:** Oversized, uppercase headlines that serve as the primary visual element.
- **Structural Integrity:** Visible borders and a persistent grid-like logic.
- **Functional Energy:** The use of Emerald Green as a "power" color to drive interaction and highlight key achievements.

## Colors

The palette is dominated by a high-contrast relationship between a warm off-white background and deep black structural elements.

- **Primary (Emerald Green):** #50C878. Used exclusively for high-intent actions, progress indicators, the ticker tape, and selected highlight text.
- **Surface (Canvas):** #F5F5F0. A slightly warm, desaturated neutral that reduces eye strain compared to pure white while providing a "blueprint" feel.
- **Structural Black:** #000000. Used for borders, heavy shadows, and primary text to ensure maximum legibility and "brutalist" weight.
- **Accent Ticker:** The emerald green is often used as a background for scrolling text elements to create a persistent brand anchor.

## Typography

The typography system relies on a "Display-First" philosophy. **Anton** provides the heavy, condensed impact required for hero sections and section titles. **Hanken Grotesk** offers a clean, contemporary balance for long-form reading, while **Space Grotesk** is used for technical labels and navigation to reinforce the futuristic/technical vibe.

Use the "Outline" variant of Anton (black stroke, no fill) for secondary headlines in a stack to create depth without overwhelming the visual field.

## Layout & Spacing

The layout follows a **Fixed Grid** model within a maximum container width, but utilizes full-bleed elements for the ticker bar and background patterns.

- **Background Pattern:** A subtle 24px dot-grid overlay should persist across the entire background to provide a technical "drawing board" feel.
- **Vertical Rhythm:** Sections are separated by heavy 2px horizontal black lines.
- **Split Layouts:** Use 60/40 splits for hero sections, where typography occupies the larger left pane and statistical data or imagery occupies the framed right pane.
- **Ticker Bar:** A persistent full-width bar at the bottom of the viewport or section breaks, featuring auto-scrolling content.

## Elevation & Depth

This design system rejects soft shadows and blurs in favor of **Hard-Shadow Brutalism**.

- **Hard Shadows:** Use a solid 100% opacity black offset shadow (usually 4px or 8px) for buttons and cards. This creates a "raised sticker" effect.
- **Layering:** Depth is achieved through 2px black borders. Elements do not float; they are anchored to the grid or "pasted" onto the surface.
- **Dividers:** Instead of whitespace alone, use explicit black lines to separate content blocks, mimicking the structure of a technical manual or a newspaper.

## Shapes

The shape language is strictly **Sharp (0px)**. All containers, buttons, and input fields must have square corners to maintain the bold, architectural aesthetic. The only exception is the "pill" style used for decorative badges/tags which may use a `rounded-xl` setting to provide a singular point of visual contrast against the rigid grid.

## Components

- **Buttons:**
  - _Primary:_ Emerald Green background, 2px black border, 4px solid black bottom-right shadow. Uppercase bold text.
  - _Secondary:_ White background, 2px black border, 4px solid black shadow.
- **Ticker Bar:** Emerald Green background (#50C878) with black text. Infinite horizontal scroll. Used for skills, tech stacks, or "Available for Work" notices.
- **Cards (Stat Blocks):** Framed by 2px black borders. Use oversized numbers in the top left and labels in the bottom right, separated by internal grid lines.
- **Badges:** Small Emerald Green rectangles with black text, used to categorize project types or status.
- **Input Fields:** 2px black border, sharp corners, no shadow until focused. On focus, apply the 4px hard black shadow.
- **Navigation:** Simple uppercase links with a "strike-through" or "underline" hover effect using the Emerald Green color.
