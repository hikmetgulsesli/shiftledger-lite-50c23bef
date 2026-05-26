---
name: ShiftLedger Lite
colors:
  surface: '#fcf8fa'
  surface-dim: '#dcd9db'
  surface-bright: '#fcf8fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f5'
  surface-container: '#f0edef'
  surface-container-high: '#eae7e9'
  surface-container-highest: '#e4e2e4'
  on-surface: '#1b1b1d'
  on-surface-variant: '#45464d'
  inverse-surface: '#303032'
  inverse-on-surface: '#f3f0f2'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#0051d5'
  on-secondary: '#ffffff'
  secondary-container: '#316bf3'
  on-secondary-container: '#fefcff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#271901'
  on-tertiary-container: '#98805d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#dbe1ff'
  secondary-fixed-dim: '#b4c5ff'
  on-secondary-fixed: '#00174b'
  on-secondary-fixed-variant: '#003ea8'
  tertiary-fixed: '#fcdeb5'
  tertiary-fixed-dim: '#dec29a'
  on-tertiary-fixed: '#271901'
  on-tertiary-fixed-variant: '#574425'
  background: '#fcf8fa'
  on-background: '#1b1b1d'
  surface-variant: '#e4e2e4'
typography:
  display:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-base:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  data-mono:
    fontFamily: jetbrainsMono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  display-mobile:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-padding: 1.5rem
  gutter: 1rem
  stack-sm: 0.25rem
  stack-md: 0.75rem
  row-height-compact: 32px
  row-height-standard: 44px
---

## Brand & Style
The design system is engineered for operational continuity and high-density information management. It targets professionals in mission-critical environments—DevOps, healthcare, and logistics—who require a tool that recedes into the background to prioritize data over decoration. 

The aesthetic is **Corporate / Modern** with a focus on functional density. It avoids the "airy" whitespace of consumer apps in favor of a compact, structured layout that maximizes the visible data on a single screen. The emotional response is one of calm control, reliability, and precision. Visual flourishes are replaced by systematic alignment and clear tonal hierarchies.

## Colors
This design system utilizes a "Deep Slate" primary for text and navigation to establish authority, while "Professional Blue" is reserved for primary actions and interactive states. 

The neutral palette is extensive, using subtle shifts in gray to delineate container layers and surface tiers. Status colors are saturated and high-contrast to ensure immediate recognition of priority incidents. 

- **Primary:** Deep Slate (#0F172A) for typography and structural elements.
- **Accent:** Professional Blue (#2563EB) for focus states and primary buttons.
- **Surface:** A range of grays (Slate 50 to 200) for backgrounds and borders.
- **Semantic:** Strict adherence to Urgent (Red), Alert (Orange), and Success (Green) for operational health indicators.

## Typography
The system uses **Inter** for all UI elements to ensure maximum legibility at small sizes. **JetBrains Mono** is introduced specifically for data values, timestamps, and IDs to prevent character confusion and maintain vertical alignment in dense tables.

Typography is scaled aggressively for density. The default body size is 14px, but the system leans heavily on 13px (body-sm) for secondary metadata. "Label-caps" are used for table headers and section titles to provide clear categorization without occupying excessive vertical space.

## Layout & Spacing
The layout follows a **Fixed Grid** model for desktop, centered on a 1280px or 1440px canvas to maintain a "dashboard" feel. A strict 4px spacing scale is used to maintain tight internal grouping.

- **Desktop:** Sidebar-driven navigation (240px fixed width) with a fluid content area.
- **Tables:** Optimized for a 32px compact row height.
- **Margins:** 24px (1.5rem) outer page margins; 16px (1rem) between cards.
- **Mobile:** Elements reflow to a single column, with padding reduced to 16px to maximize screen real estate for incident logs.

## Elevation & Depth
Depth is achieved through **Tonal Layers** rather than shadows. This maintains a "flat" professional profile that feels more like a desktop application than a website.

- **Base Layer:** Slate 50 (#F8FAFC) for the application background.
- **Surface Layer:** White (#FFFFFF) for primary cards and content areas, with a 1px border in Slate 200.
- **Overlay Layer:** Subtle 2px blurs are used only for dropdowns and modals to provide separation from the primary data grid.
- **Interaction:** Row hover states use Slate 100 to provide immediate feedback without visual noise.

## Shapes
The design system employs a **Soft** shape language. Elements use a 4px (0.25rem) radius to maintain a professional, slightly technical appearance. 

Status badges and tags use the same 4px radius, avoiding full "pill" shapes to stay consistent with the utilitarian, grid-focused aesthetic. Buttons follow this rule strictly to ensure they feel like part of the functional interface rather than friendly marketing CTAs.

## Components
Consistent implementation of these components ensures the interface remains predictable and efficient:

- **Data Tables:** Headers must use `label-caps` with Slate 500 text. Rows should alternate with a very subtle zebra stripe or a 1px bottom border.
- **Status Badges:** Small, rectangular badges (4px radius) using low-opacity background tints of the status colors, paired with high-contrast text and a 6px status dot icon.
- **Action Bars:** Persistent 48px high bars at the top of data sections containing search inputs (left-aligned) and utility buttons (right-aligned).
- **Metric Cards:** Bordered containers with a clear 2-tier hierarchy: a large numeric value (`display`) and a descriptive label (`label-caps`).
- **Input Fields:** 32px height for compact forms. Use a Slate 200 border that shifts to Professional Blue on focus.
- **Shift Handover Feed:** A specialized list component where each entry is separated by a timeline line, utilizing `data-mono` for timestamps.