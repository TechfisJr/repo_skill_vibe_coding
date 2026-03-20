# Admin Design System
<!-- PROJECT-SPECIFIC: Replace all [PROJECT_*] placeholders before use -->
<!-- PROJECT_NAME: Your project name -->
<!-- PROJECT_PRIMARY: Primary brand color (default: #5569ff) -->
<!-- PROJECT_ACCENT: Accent/CTA color (default: #afc932) -->
<!-- PROJECT_HEADER_BG: Header/sidebar brand color (default: #0e4831) -->
<!-- PROJECT_FONT: Primary font family (default: SVN-Gilroy) -->

**Version**: 1.0  
**Target**: Enterprise Admin Dashboard  
**Stack**: React + MUI v5 + Tailwind CSS + Iconify  

---

## 1. Design Philosophy

**UI Style**: Enterprise Admin Dashboard  
**Feeling**: Professional, data-heavy, task-focused, trustworthy  

**Core UX Priorities**:
- Clarity and efficiency for admin tasks
- Clear information hierarchy
- Accessible, non-distracting interactions
- Consistent visual language across all pages
- Fast, responsive UI with smooth transitions

---

## 2. Token System

> All design decisions are encoded as tokens below.
> When adapting for a new project, update Section 2 only — the rest of the document references these tokens.

### 2.1 Color Tokens

```typescript
// Replace values for your project brand
export const COLORS = {
  // --- Brand ---
  // [PROJECT_PRIMARY]: Main interactive color (links, active states, checkboxes)
  primary:         '[PROJECT_PRIMARY]',    // default: #5569ff
  primaryLight:    '[PROJECT_PRIMARY_LIGHT]',
  primaryDark:     '[PROJECT_PRIMARY_DARK]',

  // [PROJECT_ACCENT]: Main CTA button color
  accent:          '[PROJECT_ACCENT]',     // default: #afc932 (lime green)
  accentLight:     '[PROJECT_ACCENT_LIGHT]',
  accentDark:      '[PROJECT_ACCENT_DARK]',

  // [PROJECT_HEADER_BG]: Header and sidebar brand background
  brand:           '[PROJECT_HEADER_BG]',  // default: #0e4831 (dark green)
  brandLight:      '[PROJECT_HEADER_BG_LIGHT]',
  brandDark:       '[PROJECT_HEADER_BG_DARK]',

  // --- Semantic (do not change these per project) ---
  success:         '#57CA22',
  successDark:     '#3d9016',
  error:           '#FF1943',
  errorDark:       '#cc0f30',
  warning:         '#FFA319',
  warningDark:     '#cc7f00',
  info:            '#33C2FF',
  infoDark:        '#0090cc',

  // --- Neutral ---
  textPrimary:     '#223354',
  textSecondary:   '#6E759F',
  textMuted:       '#999999',

  bgPage:          '#f2f5f9',   // Page background
  bgCard:          '#ffffff',   // Card background
  bgModal:         '#f9fbff',   // Modal/dialog background
  bgDisabled:      'rgba(0,0,0,0.05)',

  border:          '#e0e0e0',
  divider:         '#e5e7eb',
};
```

### 2.2 Spacing Tokens

```typescript
// Universal scale — do not modify per project
export const SPACING = {
  xs:   '4px',   //  p-1
  sm:   '8px',   //  p-2
  md:   '12px',  //  p-3
  lg:   '16px',  //  p-4
  xl:   '24px',  //  p-6
  '2xl':'32px',  //  p-8
  '3xl':'40px',  //  p-10
};

export const GAPS = {
  sectionToSection: '24px',
  cardToCard:       '16px',
  formGroup:        '12px',
  listItem:         '8px',
  labelToInput:     '4px',
  iconToText:       '8px',
};
```

### 2.3 Border Radius Tokens

```typescript
// Absolute set — only these 6 values allowed
export const RADIUS = {
  sm:   '6px',     // inputs, small elements
  md:   '8px',     // buttons, icon buttons, dropdowns
  lg:   '10px',    // standard cards
  xl:   '12px',    // card internal accents (rare)
  '2xl':'16px',    // modals, dialogs
  '3xl':'24px',    // main content containers
  full: '9999px',  // chips, badges, round avatars
};
```

### 2.4 Shadow Tokens

```typescript
export const SHADOWS = {
  card:   '0px 9px 16px rgba(159,162,191,.18), 0px 2px 2px rgba(159,162,191,.32)',
  cardSm: '0px 2px 8px rgba(159,162,191,.2)',
  cardLg: '0px 16px 32px rgba(159,162,191,.24)',
  modal:  '0 4px 12px rgba(0,0,0,0.2)',
};
```

### 2.5 Typography Tokens

```typescript
// [PROJECT_FONT]: Replace with your project font
export const TYPOGRAPHY = {
  fontFamily: '[PROJECT_FONT], -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  // default: 'SVN-Gilroy, ...'

  sizes: {
    h1: '32px', // Page title
    h2: '28px', // Section header
    h3: '24px', // Card / dialog title
    h4: '20px', // Subsection
    body: '16px',
    sm: '14px',
    xs: '12px',
  },

  weights: {
    regular:   400,
    medium:    500,
    semibold:  600,
    bold:      700,
  },
};
```

### 2.6 Motion Tokens

```typescript
// Do not deviate from these
export const TRANSITIONS = {
  standard: 'all 0.2s ease',
  fast:     'all 0.1s ease',
  slow:     'all 0.3s ease',
  // Always use 'standard' on interactive elements
};
```

---

## 3. Layout System

### 3.1 Global Structure

```
┌──────────────────────┬───────────────────────────────────────────┐
│                      │                                           │
│  SIDEBAR             │  CONTENT AREA                             │
│  [PROJECT_SIDEBAR]px │                                           │
│  fixed left          │  Page Header (Title + Primary CTA)        │
│                      │                                           │
│  ┌────────────────┐  │  Metrics / KPI Row                        │
│  │ Logo + Name    │  │                                           │
│  └────────────────┘  │  Toolbar (Search + Filter + Actions)      │
│                      │                                           │
│  [Language Switch]   │  Main Content                             │
│  [User Info]         │  ├─ Table / Form / Dashboard              │
│  ─────────────────   │  └─ Cards / Charts                        │
│  Navigation Menu     │                                           │
│  ─────────────────   │  Pagination / Footer Actions              │
│  Logout (fixed btm)  │                                           │
│                      │                                           │
└──────────────────────┴───────────────────────────────────────────┘
```

### 3.2 Layout Measurements

| Token | Default | Notes |
|---|---|---|
| `[PROJECT_SIDEBAR]` | `240px` | Replace with your sidebar width (range: 200–290px) |
| Header height | `80px` | Fixed top |
| Header background | `[PROJECT_HEADER_BG]` | Brand color |
| Page background | `#f2f5f9` | Behind sidebar and content |
| Content padding | `24–32px` | Left, right, bottom |
| Content top margin | `16–20px` | Below header |

### 3.3 Content Height Formula

```css
.content-area {
  min-height: calc(100vh - 80px - 32px);
  overflow-y: auto;
}
```

### 3.4 Grid Columns

```css
/* KPI metrics row */
.metrics-grid  { grid-template-columns: repeat(5, 1fr); gap: 16px; }

/* Standard content grid */
.content-grid  { grid-template-columns: repeat(3, 1fr); gap: 24px; }

/* Two-column form */
.form-grid     { grid-template-columns: repeat(2, 1fr); gap: 16px; }

/* Responsive */
@media (max-width: 1280px) { .metrics-grid  { grid-template-columns: repeat(3, 1fr); } }
@media (max-width: 1024px) { .content-grid  { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 768px)  { .metrics-grid,
                              .content-grid,
                              .form-grid    { grid-template-columns: 1fr; } }
```

---

## 4. Component Standards

### 4.1 Buttons

#### Variants

```typescript
// Solid variants
Primary   → bg: COLORS.accent        // Main CTA (lime/brand accent)
Brand     → bg: COLORS.brand         // Secondary brand action
Success   → bg: COLORS.success       // Confirm / approve
Danger    → bg: COLORS.error         // Delete / destructive
Warning   → bg: COLORS.warning       // Caution action

// Ghost variants
Outlined  → border: 1px solid, transparent bg, colored text
Text      → no border, no bg, colored text
```

#### Sizes

| Size | Padding | Font size | Usage |
|---|---|---|---|
| `sm` | `px-3 py-1` | 13px | Inline actions, table row actions |
| `md` | `px-6 py-2` | 14px | Default |
| `lg` | `px-10 py-3` | 16px | Primary page CTA |

#### Rules

```typescript
// ALL buttons must follow these rules
const BUTTON_RULES = {
  fontWeight:       600,
  textTransform:    'none',       // Preserve case
  borderRadius:     RADIUS.md,    // 8px
  transition:       TRANSITIONS.standard,
  disableRipple:    true,
  iconGap:          '8px',
  hover:            'brightness(0.9) scale(1.02)',
};
```

#### Reference Implementation

```typescript
// Solid primary CTA
<Button
  variant="contained"
  sx={{
    backgroundColor: COLORS.accent,
    fontWeight: 600,
    textTransform: 'none',
    borderRadius: RADIUS.md,
    transition: TRANSITIONS.standard,
    '&:hover': { filter: 'brightness(0.9)', transform: 'scale(1.02)' }
  }}
>
  Create New
</Button>

// Icon button
<IconButton sx={{ borderRadius: RADIUS.md, transition: TRANSITIONS.standard }}>
  <Icon icon="mdi:pencil-outline" width={18} />
</IconButton>
```

---

### 4.2 Icons (Iconify)

```typescript
import { Icon } from '@iconify/react';

// Approved sizes
const ICON_SIZES = {
  inline:      16,   // Next to text in paragraphs
  button:      18,   // Inside buttons
  iconButton:  20,   // Standalone icon-only buttons
  sectionHead: 20,   // Section header decorations
  emptyState:  64,   // Empty state illustrations
};

// Color rule: use currentColor or theme.palette — never raw hex
// ✅ <Icon icon="mdi:plus" width={18} />  (inherits from parent)
// ❌ <Icon icon="mdi:plus" style={{ color: '#12abef' }} />
```

---

### 4.3 Cards

```typescript
const CARD_STYLE = {
  background:   COLORS.bgCard,       // #ffffff
  borderRadius: RADIUS.lg,           // 10px standard, 24px for main containers
  boxShadow:    SHADOWS.card,
  padding:      SPACING.xl,          // 24px
  transition:   TRANSITIONS.standard,
};

// Hover card
'&:hover': { boxShadow: SHADOWS.cardLg, transform: 'translateY(-2px)' }
```

---

### 4.4 Tables

```typescript
// Header style
TableHead: {
  backgroundColor: COLORS.bgPage,   // #f2f5f9
  th: {
    fontWeight: 700,
    fontSize: '13px',
    textTransform: 'uppercase',
    color: COLORS.textMuted,         // #999
    padding: SPACING.md,
  }
}

// Body style
TableBody: {
  tr: {
    transition: TRANSITIONS.standard,
    '&:hover': { backgroundColor: COLORS.bgPage },
  },
  td: {
    fontSize: '14px',
    color: COLORS.textPrimary,
    padding: SPACING.md,
    borderBottom: `1px solid ${COLORS.border}`,
  }
}
```

---

### 4.5 Modals & Dialogs

```typescript
// Standard dialog paper props
PaperProps: {
  sx: {
    borderRadius: RADIUS['2xl'],   // 16px
    backgroundColor: COLORS.bgModal,
    boxShadow: SHADOWS.modal,
  }
}

// Backdrop
backdropProps: {
  style: {
    backgroundColor: 'rgba(0,0,0,0.45)',
    backdropFilter: 'blur(4px)',
  }
}

// Dialog structure
// Header: flex between, bold title (h3), close icon top-right
// Content: divider below header, padded sections
// Footer: DialogActions, right-aligned, Cancel + Confirm
```

#### Dialog Variants

```
Confirm Dialog  → title + description + [Cancel] [Confirm]
Selection Dialog → title + checkbox list + [Remove] [Apply]
Form Dialog     → title + form fields + footer actions
```

---

### 4.6 Forms & Inputs

```typescript
// Input base style
const INPUT_STYLE = {
  border:       `1.5px solid ${COLORS.border}`,
  borderRadius: RADIUS.sm,         // 6px
  padding:      `${SPACING.sm} ${SPACING.md}`,
  fontSize:     TYPOGRAPHY.sizes.sm,
  fontWeight:   TYPOGRAPHY.weights.medium,
  background:   COLORS.bgCard,
  color:        COLORS.textPrimary,
  transition:   TRANSITIONS.standard,

  '&:hover':  { borderColor: COLORS.textMuted },
  '&:focus':  { borderColor: COLORS.primary, outline: 'none',
                boxShadow: `0 0 0 3px ${COLORS.primary}22` },
  '&:disabled': { opacity: 1, cursor: 'not-allowed', background: COLORS.bgDisabled },
};

// Label style
const LABEL_STYLE = {
  fontSize:   TYPOGRAPHY.sizes.sm,
  fontWeight: TYPOGRAPHY.weights.medium,
  color:      COLORS.textPrimary,
  marginBottom: SPACING.xs,        // 4px gap above input
};
// Required indicator: append <span style="color: red"> *</span>

// Error state
const ERROR_STYLE = {
  color:      COLORS.error,
  fontSize:   TYPOGRAPHY.sizes.xs,
  fontWeight: TYPOGRAPHY.weights.semibold,
  marginTop:  SPACING.xs,
};
```

---

### 4.7 Badges & Status Chips

```typescript
// Status color mapping
const STATUS_COLORS = {
  active:    { bg: `${COLORS.success}22`, text: COLORS.success },
  inactive:  { bg: `${COLORS.textMuted}22`, text: COLORS.textMuted },
  pending:   { bg: `${COLORS.warning}22`, text: COLORS.warning },
  draft:     { bg: `${COLORS.warning}22`, text: COLORS.warning },
  closed:    { bg: `${COLORS.textMuted}22`, text: COLORS.textMuted },
  error:     { bg: `${COLORS.error}22`, text: COLORS.error },
};

// Chip base
const CHIP_STYLE = {
  borderRadius: RADIUS.full,
  padding:      '2px 10px',
  fontSize:     TYPOGRAPHY.sizes.xs,
  fontWeight:   TYPOGRAPHY.weights.semibold,
};
```

---

### 4.8 KPI Metric Cards

```typescript
// Metric color by type (adapt values per project)
const METRIC_COLORS = {
  total:      COLORS.textPrimary,   // #223354 dark
  active:     COLORS.success,       // green
  pending:    COLORS.warning,       // orange
  closed:     COLORS.textMuted,     // gray
  primary:    COLORS.primary,       // blue
};

// Card style
const METRIC_CARD = {
  background:   COLORS.bgCard,
  borderRadius: RADIUS.lg,
  boxShadow:    SHADOWS.cardSm,
  padding:      SPACING.lg,         // 16px
  display:      'flex',
  alignItems:   'center',
  gap:          SPACING.md,

  number: { fontSize: '28px', fontWeight: 700 },
  label:  { fontSize: TYPOGRAPHY.sizes.sm, color: COLORS.textSecondary },
  icon:   { size: 20 },
};
```

---

### 4.9 Navigation (Sidebar)

```typescript
// Sidebar link states
const NAV_ITEM = {
  base: {
    padding:      `${SPACING.sm} ${SPACING.lg}`,
    borderRadius: RADIUS.md,
    color:        COLORS.textSecondary,
    transition:   TRANSITIONS.standard,
    fontWeight:   TYPOGRAPHY.weights.medium,
    fontSize:     TYPOGRAPHY.sizes.sm,
  },
  hover: {
    backgroundColor: `${COLORS.primary}14`,
    color:           COLORS.textPrimary,
  },
  active: {
    backgroundColor: `${COLORS.primary}22`,
    color:           COLORS.primary,
    fontWeight:      TYPOGRAPHY.weights.semibold,
  },
};
```

---

### 4.10 Feedback Components

```typescript
// Toast notifications (using Sonner or similar)
const TOAST = {
  success: { background: COLORS.success, color: '#fff', duration: 3000 },
  error:   { background: COLORS.error,   color: '#fff', duration: 5000 },
  warning: { background: COLORS.warning, color: '#fff', duration: 4000 },
  info:    { background: COLORS.info,    color: '#fff', duration: 3000 },
  position: 'top-right',
};

// Loading states
// - Skeleton: MUI Skeleton for content placeholders
// - Spinner: CircularProgress centered, primary color
// - Page bar: NProgress at page top
```

---

## 5. Typography System

```css
/* Global font — set once in index.css */
body {
  font-family: '[PROJECT_FONT]', -apple-system, BlinkMacSystemFont,
    'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif;
}
```

### Heading Scale

| Level | Size | Weight | Usage |
|---|---|---|---|
| H1 | 32px | 700 | Page title |
| H2 | 28px | 700 | Section header |
| H3 | 24px | 700 | Card title, dialog title |
| H4 | 20px | 700 | Subsection header |
| Body | 14–16px | 400–500 | General text |
| Small | 12–13px | 400–500 | Helper text, captions |

### Text Colors

| Role | Token | Default |
|---|---|---|
| Primary text | `COLORS.textPrimary` | `#223354` |
| Secondary text | `COLORS.textSecondary` | `#6E759F` |
| Muted / hint | `COLORS.textMuted` | `#999` |
| Links | `COLORS.primary` | `[PROJECT_PRIMARY]` |
| On dark background | `#ffffff` | — |

---

## 6. Page Patterns

### 6.1 List Page

```
┌─ Page Header ────────────────────────────────────────────┐
│  [Page Title]                     [+ Create Button]      │
├─ Toolbar ────────────────────────────────────────────────┤
│  [Search Input]  [Filter]  [Sort]                        │
├─ Table ──────────────────────────────────────────────────┤
│  COL A       COL B       COL C       STATUS    ACTIONS   │
│  ─────────────────────────────────────────────────────── │
│  row data    row data    row data    [badge]   [E][D]     │
│  ...                                                     │
├─ Pagination ─────────────────────────────────────────────┤
│  Showing X–Y of Z            [< 1  2  3 >]              │
└──────────────────────────────────────────────────────────┘
```

### 6.2 Detail / Form Page

```
┌─ Page Header ────────────────────────────────────────────┐
│  [< Back]  Entity Name                    [Status Chip]  │
├─ Tab Navigation ─────────────────────────────────────────┤
│  [Tab 1]  [Tab 2]  [Tab 3]                               │
├─ Content Cards ──────────────────────────────────────────┤
│  ┌─ Section Card ──────────────────────────────────────┐ │
│  │  [Form Fields in 2-column grid]                     │ │
│  └─────────────────────────────────────────────────────┘ │
│  ┌─ Related Data ──────────────────────────────────────┐ │
│  │  [Nested Table / Sub-list]                          │ │
│  └─────────────────────────────────────────────────────┘ │
├─ Footer Actions (sticky) ────────────────────────────────┤
│                              [Cancel]  [Save Changes]    │
└──────────────────────────────────────────────────────────┘
```

### 6.3 Dashboard Page

```
┌─ Page Header ────────────────────────────────────────────┐
│  Dashboard Title                   [Date Range Picker]   │
├─ KPI Row ────────────────────────────────────────────────┤
│  [Metric 1]  [Metric 2]  [Metric 3]  [Metric 4]         │
├─ Charts Row ─────────────────────────────────────────────┤
│  [Chart — 2/3 width]          [Chart — 1/3 width]        │
├─ Recent Activity Table ──────────────────────────────────┤
│  [Latest Records with quick-action buttons]              │
└──────────────────────────────────────────────────────────┘
```

---

## 7. Interaction Design

### Hover States

| Element | Hover Behavior |
|---|---|
| Solid button | `brightness(0.9) + scale(1.02)` |
| Outlined button | Fill with brand color |
| Table row | Background → `COLORS.bgPage` |
| Sidebar item | Background → `primary 8% opacity` |
| Card | Shadow increase + `translateY(-2px)` |
| Icon button | Color shift or subtle scale |

### Transition Rule

> Every interactive element must use `transition: all 0.2s ease`.  
> No other duration is allowed unless explicitly noted.

### Empty States

```
[Large Icon — 64px, COLORS.textMuted]
[Heading: "No [entity] found"]
[Description: secondary color, text-sm]
[Optional CTA button]
Centered in container, py: 64px
```

---

## 8. Design Constraints

### DO ✅

1. Use MUI components first — override via `sx` prop only
2. Reference colors through `COLORS.*` / `theme.palette.*` tokens
3. Use spacing values from the `SPACING` scale exclusively
4. Apply `TRANSITIONS.standard` to all interactive elements
5. Set font globally in `index.css` — never per-component
6. Use `RADIUS` tokens — never arbitrary values
7. Use `SHADOWS` tokens — never inline `box-shadow` strings
8. Use Iconify at approved sizes with `currentColor`
9. Implement all three states: default, hover, active/focus

### DO NOT ❌

1. Hardcode hex colors — no `#abc123` in components
2. Use arbitrary spacing — no `p-[14px]`, `gap-[18px]`
3. Create new border-radius values outside `RADIUS` set
4. Override font-family per component
5. Enable ripple effects on buttons (`disableRipple: true`)
6. Mix light and dark mode — this system is light-only
7. Change shadow definitions — use `SHADOWS` tokens
8. Mix icon libraries on the same screen without purpose
9. Use `style={{}}` for color/spacing — prefer `sx` with tokens

---

## 9. Agent Implementation Guide

### 9.1 Adapt to a New Project — Checklist

```
[ ] Replace [PROJECT_NAME] in file header
[ ] Set [PROJECT_PRIMARY] — main interactive color
[ ] Set [PROJECT_ACCENT]  — CTA button color
[ ] Set [PROJECT_HEADER_BG] — header/sidebar brand background
[ ] Set [PROJECT_FONT]    — typeface (or remove and use system font)
[ ] Set [PROJECT_SIDEBAR] — sidebar width (200–290px)
[ ] Update COLORS.*Light and COLORS.*Dark variants
[ ] Verify color contrast meets WCAG AA (4.5:1 for text)
[ ] Update Summary Table at end of this file
```

### 9.2 Task Workflow

```
TASK START
├─ Read Section 2 (tokens) — extract all values
├─ Check existing code for token violations
├─ Plan: update theme first, then components, then pages
│  ├─ 1. Update theme/tokens config
│  ├─ 2. Refactor component styles (bottom-up)
│  ├─ 3. Update page layouts
│  └─ 4. Verify responsive behavior
├─ Run validation checklist (Section 9.4)
└─ TASK COMPLETE
```

### 9.3 Decision Tree for New Components

```
Is a MUI component available?
├─ YES → Use MUI + sx prop to apply tokens
└─ NO  → Build with Tailwind + tokens

Is the component reusable across pages?
├─ YES → Place in src/components/common/
└─ NO  → Keep co-located with the page/feature

Does it need a color?
├─ YES → Use COLORS.* or theme.palette.*
└─ NO  → Inherit from parent (currentColor)

Does it accept interaction?
└─ YES → Add transition: TRANSITIONS.standard
```

### 9.4 Pre-Submit Validation Checklist

```typescript
// Run before every PR / commit touching UI files

const VALIDATION = {
  colors: () => {
    // No raw hex values in component files
    // All colors reference COLORS.* or theme.palette.*
    // Status colors use semantic names (success, error, warning)
  },

  spacing: () => {
    // All padding/margin come from SPACING scale
    // No p-[14px], gap-[18px], m-[22px] in className
    // No style={{ padding: '13px' }}
  },

  radius: () => {
    // Only: 6px | 8px | 10px | 12px | 16px | 24px | 9999px
    // No rounded-sm (4px), rounded-none, custom pixel values
  },

  transitions: () => {
    // Every button, link, card hover uses 'all 0.2s ease'
    // No 0.3s, 0.15s, or instant transitions on interactive elements
  },

  typography: () => {
    // No fontSize/fontFamily hardcoded in sx props
    // Font inherited globally from body
    // Use Typography variants (h4, body1, caption, etc.)
  },

  icons: () => {
    // All from @iconify/react
    // Sizes: 16 | 18 | 20 | 48 | 64 only
    // Color via currentColor or theme.palette — not raw hex
  },
};
```

### 9.5 Refactoring Patterns

```typescript
// Pattern 1: Color
// BEFORE: <Button style={{ backgroundColor: '#5569ff' }}>
// AFTER:  <Button sx={{ backgroundColor: COLORS.primary }}>

// Pattern 2: Spacing
// BEFORE: <Box sx={{ padding: '14px', marginBottom: '20px' }}>
// AFTER:  <Box sx={{ p: '12px', mb: '24px' }}>    // md and xl

// Pattern 3: Border Radius
// BEFORE: <Card sx={{ borderRadius: '12px' }}>
// AFTER:  <Card sx={{ borderRadius: RADIUS.lg }}>  // 10px

// Pattern 4: Transition
// BEFORE: <Button sx={{ '&:hover': { backgroundColor: x } }}>
// AFTER:  <Button sx={{ transition: TRANSITIONS.standard,
//                       '&:hover': { backgroundColor: x } }}>

// Pattern 5: Hardcoded font
// BEFORE: <Typography sx={{ fontFamily: 'Gilroy', fontSize: '20px' }}>
// AFTER:  <Typography variant="h4">
```

---

## 10. Summary Table

> Update this table when adapting to a new project.

| Token | Default Value | Project Value |
|---|---|---|
| Primary Color | `#5569ff` | `[PROJECT_PRIMARY]` |
| Accent / CTA Button | `#afc932` | `[PROJECT_ACCENT]` |
| Brand / Header BG | `#0e4831` | `[PROJECT_HEADER_BG]` |
| Success | `#57CA22` | (unchanged) |
| Error | `#FF1943` | (unchanged) |
| Warning | `#FFA319` | (unchanged) |
| Info | `#33C2FF` | (unchanged) |
| Primary Text | `#223354` | (unchanged) |
| Secondary Text | `#6E759F` | (unchanged) |
| Page Background | `#f2f5f9` | (unchanged) |
| Card Background | `#ffffff` | (unchanged) |
| Font Family | `SVN-Gilroy` | `[PROJECT_FONT]` |
| Spacing Base | `8px` | (unchanged) |
| Border Radius Set | `6/8/10/12/16/24px` | (unchanged) |
| Transition | `all 0.2s ease` | (unchanged) |
| Sidebar Width | `240px` | `[PROJECT_SIDEBAR]` |
| Header Height | `80px` | (unchanged) |

---

## 11. Quick Reference — Copy-Paste Tokens

```typescript
// Drop this block into src/constants/design-tokens.ts
// Then replace all [PROJECT_*] values

export const COLORS = {
  primary:       '[PROJECT_PRIMARY]',
  accent:        '[PROJECT_ACCENT]',
  brand:         '[PROJECT_HEADER_BG]',
  success:       '#57CA22',
  error:         '#FF1943',
  warning:       '#FFA319',
  info:          '#33C2FF',
  textPrimary:   '#223354',
  textSecondary: '#6E759F',
  textMuted:     '#999999',
  bgPage:        '#f2f5f9',
  bgCard:        '#ffffff',
  bgModal:       '#f9fbff',
  border:        '#e0e0e0',
  divider:       '#e5e7eb',
};

export const SPACING = {
  xs: '4px', sm: '8px', md: '12px',
  lg: '16px', xl: '24px', '2xl': '32px', '3xl': '40px',
};

export const RADIUS = {
  sm: '6px', md: '8px', lg: '10px',
  xl: '12px', '2xl': '16px', '3xl': '24px', full: '9999px',
};

export const SHADOWS = {
  card:   '0px 9px 16px rgba(159,162,191,.18), 0px 2px 2px rgba(159,162,191,.32)',
  cardSm: '0px 2px 8px rgba(159,162,191,.2)',
  cardLg: '0px 16px 32px rgba(159,162,191,.24)',
  modal:  '0 4px 12px rgba(0,0,0,0.2)',
};

export const TRANSITIONS = {
  standard: 'all 0.2s ease',
  fast:     'all 0.1s ease',
  slow:     'all 0.3s ease',
};
```

---

**Status**: Reusable Template — Replace [PROJECT_*] placeholders before use  
**Stack**: React + MUI v5 + Tailwind CSS + Iconify  
**Authority**: Engineering Standards Board
