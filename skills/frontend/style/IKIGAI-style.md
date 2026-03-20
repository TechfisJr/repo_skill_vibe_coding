# TechFis UI Rules - Flexible Layout Mode

## Objective
This document allows front-end developers to **freely design layouts** for each screen while preserving the TechFis visual identity.

---

## 1) Core Principles
- **Allowed to change**: page layout, column structure, block order, and content presentation patterns.
- **Must remain unchanged**: font, color, border radius, shadow, spacing scale, transitions, and component style.
- **Cannot be changed**: locked design tokens from the original Design System.

---

## 2) Locked Tokens (Must Be Preserved)

### Typography (Locked)
- Primary font: `SVN-Gilroy`
- Fallback: system sans-serif stack
- Standard weights: 100, 200, 300, 400, 500, 600, 700
- Heading:
  - H1: 32 / 700
  - H2: 28 / 700
  - H3: 24 / 700
  - H4: 20 / 700
- Body: 14-16 / 400-500

### Color (Locked)
- Primary: `#5569ff`
- Dark Green: `#0e4831`
- Lime Green: `#afc932`
- Secondary: `#6E759F`
- Success: `#57CA22`
- Warning: `#FFA319`
- Error: `#FF1943`
- Info: `#33C2FF`
- Page Background: `#f2f5f9`
- Card Background: `#ffffff`

### Border Radius (Locked)
- Input: 6px
- Button: 6-8px
- Card: 10px
- Content container: 24px
- Dialog: 16px

### Shadow (Locked)
- Only use theme shadows (`shadows.card`, `shadows.cardSm`, `shadows.cardLg`)
- Do not define custom box-shadow values

### Spacing (Locked)
- Scale: 4, 8, 12, 16, 24, 32, 40
- Section gap: 24
- Group gap: 12
- Item gap: 8

### Motion (Locked)
- Standard transition: `all .2s ease`
- Apply to all hover/focus/active interactions

---

## 3) How Layout Can Be Creative

### Allowed
- Switch from a 1-column layout to 2-3 columns based on data context.
- Split/merge content cards to improve admin task efficiency.
- Reorganize filter/sort/action areas to optimize workflow.
- Choose suitable page patterns: List / Detail / Dashboard or hybrid.
- Optimize responsiveness as long as tokens and component styles remain unchanged.

### Not Allowed
- Do not use colors outside the system palette.
- Do not change to a different font.
- Do not introduce border-radius values outside the defined set.
- Do not use animation/transition settings different from the 0.2s standard.
- Do not create custom button/input styles outside the system.

---

## 4) Required Components and Libraries
- Prioritize MUI components (`@mui/material`)
- Use `@iconify/react` for icons
- Prefer system-standard input components (`LabeledInput`, `SelectedInput`, `MultiSelectedInput`) when available
- Reuse components in `src/components/Common/` before creating new ones

---

## 5) Pre-Merge Checklist
- [ ] Global font is still SVN-Gilroy
- [ ] Colors only come from the system palette
- [ ] Border radius values match the defined scale
- [ ] Shadows are from theme tokens only (no custom shadows)
- [ ] Spacing follows the standard scale
- [ ] Hover/focus/active states use 0.2s transitions
- [ ] New layout preserves admin data readability
- [ ] Responsive behavior is stable on smaller screens

---

## 6) Quick Decision Rules for Developers
If you are deciding between two options:
1. Choose the option that preserves more original tokens.
2. Choose the option that reduces clicks/scrolling for admins.
3. If both are equal, choose the layout that is easier to scale later.

---

## 7) Scope
- Applies to all new screens and refactored screens.
- This document does **not replace** the original design system; it only defines a “flexible layout” mode.
- Original source of truth: `style.md`
