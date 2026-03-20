# TechFis UI Rules - Flexible Layout Mode

## Objective
This document allows front-end developers to **freely design layouts** for each screen while preserving the TechFis visual identity.

**Layout Mode**: Flexible layout (structure can change, tokens cannot).

---

## 1. Core Principles
- **Allowed to change**: page layout, column structure, block order, and content presentation patterns.
- **Must remain unchanged**: font, color, border radius, shadow, spacing scale, transitions, and component style.
- **Cannot be changed**: locked design tokens from the original Design System.

---

## 2. Locked Tokens (Must Be Preserved)

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
- Primary / Brand: `#0e4831`
- Accent / CTA: `#afc932`
- Secondary Text: `#6E759F`
- Primary Text: `#0e4831`
- Muted Text: `#999999`
- Success: `#57CA22`
- Warning: `#FFA319`
- Error: `#FF1943`
- Info: `#33C2FF`
- Page Background: `#f2f5f9`
- Card Background: `#ffffff`
- Modal Background: `#f9fbff`
- Border: `#e0e0e0`
- Divider: `#e5e7eb`

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

## 3. Responsive System

### 3.1 Breakpoint Definitions

```typescript
const BREAKPOINTS = {
  xs:  0,     // 0–599px      Mobile portrait
  sm:  600,   // 600–899px    Mobile landscape / small tablet
  md:  900,   // 900–1199px   Tablet portrait
  lg:  1200,  // 1200–1535px  Desktop / laptop
  xl:  1536,  // 1536px+      Large monitor / wide screen
};
```

### 3.2 Layout Behavior Per Breakpoint

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│  Breakpoint   │  xs (0–599)    │  sm (600–899)  │  md (900–1199) │  lg+ (1200+) │
├──────────────────────────────────────────────────────────────────────────────────┤
│  Sidebar      │  Hidden        │  Hidden        │  Collapsed     │  Full 240px  │
│               │  (drawer)      │  (drawer)      │  (icon-only)   │  (fixed)     │
├──────────────────────────────────────────────────────────────────────────────────┤
│  Header       │  Full width    │  Full width    │  Full width    │  Full width  │
│               │  + menu icon   │  + menu icon   │  + menu icon   │  (sidebar    │
│               │                │                │                │   visible)   │
├──────────────────────────────────────────────────────────────────────────────────┤
│  Content      │  Full width    │  Full width    │  Full width    │  Sidebar-    │
│  Area         │  (no sidebar)  │  (no sidebar)  │  (icon offset) │  offset      │
├──────────────────────────────────────────────────────────────────────────────────┤
│  Content      │  12–16px       │  16–20px       │  20–24px       │  24–32px     │
│  Padding      │                │                │                │              │
├──────────────────────────────────────────────────────────────────────────────────┤
│  KPI Grid     │  1 column      │  2 columns     │  3 columns     │  5 columns   │
├──────────────────────────────────────────────────────────────────────────────────┤
│  Form Grid    │  1 column      │  1 column      │  2 columns     │  2-3 columns │
├──────────────────────────────────────────────────────────────────────────────────┤
│  Data Table   │  Horizontal    │  Horizontal    │  Full          │  Full        │
│               │  scroll        │  scroll        │                │              │
├──────────────────────────────────────────────────────────────────────────────────┤
│  Toolbar      │  Stacked       │  Stacked       │  Flex row      │  Flex row    │
│  (Search +    │  (2 rows)      │  (2 rows)      │  space-between │  space-      │
│   Filters)    │                │                │                │  between     │
├──────────────────────────────────────────────────────────────────────────────────┤
│  Page Header  │  Stacked       │  Stacked       │  Flex row      │  Flex row    │
│  (Title +     │  Title above   │  Title above   │  space-between │  space-      │
│   CTA)        │  CTA below     │  CTA below     │                │  between     │
├──────────────────────────────────────────────────────────────────────────────────┤
│  Charts       │  1 column,     │  1 column,     │  Side by side  │  Side by     │
│               │  full width    │  full width    │  (50/50)       │  side (opt.) │
├──────────────────────────────────────────────────────────────────────────────────┤
│  Dialog       │  Full screen   │  Full screen   │  Centered      │  Centered    │
│               │  (maxWidth=xs) │  (maxWidth=xs) │  (maxWidth=sm) │  (max=sm/md) │
└──────────────────────────────────────────────────────────────────────────────────┘
```

### 3.3 Sidebar Responsive Behavior

```typescript
// xs, sm: Hidden by default — open via hamburger drawer
// md:     Icon-only collapsed sidebar (64px wide)
// lg+:    Full sidebar (240px fixed)

const SidebarLayout = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.between('md', 'lg'));

  return (
    <Box sx={{ display: 'flex' }}>
      {isMobile && <MobileDrawer />}           // Drawer overlay
      {isTablet && <CollapsedSidebar />}        // Icon-only 64px
      {!isMobile && !isTablet && <FullSidebar />} // 240px fixed

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ml: { xs: 0, md: '64px', lg: '240px' },
          p:  { xs: '12px', sm: '16px', md: '20px', lg: '24px', xl: '32px' },
          transition: 'margin .2s ease',
        }}
      >
        {/* Page content */}
      </Box>
    </Box>
  );
};
```

### 3.4 Global Layout Frame (All Breakpoints)

```typescript
// Root app shell — do not modify margins/transitions
const AppShell = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

    {/* Fixed top header */}
    <AppBar
      position="fixed"
      sx={{
        height: '80px',
        backgroundColor: '#0e4831',           // LOCKED
        zIndex: theme.zIndex.drawer + 1,
        px: { xs: 2, sm: 3, lg: 4 },         // Flexible padding
      }}
    />

    {/* Body: sidebar + content */}
    <Box sx={{ display: 'flex', pt: '80px' }}>
      <Sidebar />   {/* Behavior per 3.3 */}
      <MainContent />
    </Box>

  </Box>
);
```

### 3.5 Page Header (Title + CTA Row)

```typescript
// Stack on mobile, flex row on desktop
<Box
  sx={{
    display:        'flex',
    flexDirection:  { xs: 'column', md: 'row' },
    alignItems:     { xs: 'flex-start', md: 'center' },
    justifyContent: 'space-between',
    gap:            { xs: 2, md: 0 },       // 8px gap when stacked
    mb:             3,                       // 12px below header
  }}
>
  <Typography variant="h4" fontWeight={700} />
  <Button variant="contained" fullWidth={isMobile} />
                                             // Full-width CTA on mobile
</Box>
```

### 3.6 KPI Metrics Grid

```typescript
<Box
  sx={{
    display: 'grid',
    gridTemplateColumns: {
      xs: '1fr',                          // 1 column  — mobile
      sm: 'repeat(2, 1fr)',               // 2 columns — large mobile
      md: 'repeat(3, 1fr)',               // 3 columns — tablet
      lg: 'repeat(4, 1fr)',               // 4 columns — laptop
      xl: 'repeat(5, 1fr)',               // 5 columns — wide screen
    },
    gap: 2,                               // LOCKED: 8px
  }}
>
  {metrics.map(m => <MetricCard key={m.id} {...m} />)}
</Box>
```

### 3.7 Toolbar (Search + Filters + CTA)

```typescript
// Two-row on mobile, single row on tablet+
<Box
  sx={{
    display:        'flex',
    flexDirection:  { xs: 'column', md: 'row' },
    alignItems:     { xs: 'stretch', md: 'center' },
    justifyContent: 'space-between',
    gap:            2,                   // LOCKED: 8px
    mb:             3,                   // LOCKED: 12px
  }}
>
  {/* Left: search + filters */}
  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
    <TextField
      placeholder="Search..."
      sx={{ width: { xs: '100%', sm: '260px', lg: '300px' } }}
    />
    <FilterDropdown />
  </Box>

  {/* Right: primary action */}
  <Button
    variant="contained"
    sx={{
      width: { xs: '100%', md: 'auto' }, // Full-width on mobile
      whiteSpace: 'nowrap',
    }}
  >
    + Create New
  </Button>
</Box>
```

### 3.8 Data Table

```typescript
// Tables always scroll horizontally on small screens — never compress columns
<Box
  sx={{
    width:    '100%',
    overflowX: { xs: 'auto', lg: 'visible' }, // Horizontal scroll on mobile/tablet
    borderRadius: '10px',                      // LOCKED card radius
    boxShadow: 'shadows.card',                 // LOCKED shadow
  }}
>
  <Table sx={{ minWidth: { xs: 600, md: 'auto' } }}>
    {/* On xs-sm: minWidth 600px triggers horizontal scroll */}
    {/* On lg+: fits container naturally */}
  </Table>
</Box>

// Column visibility rules:
// xs-sm: Show only essential columns (name, status, actions)
// md:    Show primary + secondary columns
// lg+:   Show all columns
```

```typescript
// Column visibility helper
const useColumnVisibility = () => {
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));
  const isMd = useMediaQuery(theme.breakpoints.down('lg'));

  return {
    showEssential:  true,
    showSecondary:  !isXs,
    showAll:        !isMd,
  };
};
```

### 3.9 Form Layout

```typescript
// Single column on mobile, 2-column on tablet+
<Box
  sx={{
    display: 'grid',
    gridTemplateColumns: {
      xs: '1fr',               // 1 column — mobile
      md: 'repeat(2, 1fr)',    // 2 columns — tablet+
    },
    gap: 3,                    // LOCKED: 12px
  }}
>
  {/* Full-width fields always span all columns */}
  <Box sx={{ gridColumn: '1 / -1' }}>
    <LabeledInput label="Description" multiline />
  </Box>

  {/* Regular fields fill their cell */}
  <LabeledInput label="First Name" />
  <LabeledInput label="Last Name" />
</Box>
```

### 3.10 Dialog / Modal

```typescript
// Full screen on mobile, centered modal on desktop
<Dialog
  fullScreen={useMediaQuery(theme.breakpoints.down('sm'))} // xs-sm: full screen
  maxWidth={useMediaQuery(theme.breakpoints.down('md')) ? 'xs' : 'sm'}
  fullWidth
  PaperProps={{
    sx: {
      borderRadius: { xs: 0, sm: '16px' },   // No radius when full screen
      backgroundColor: '#f9fbff',             // LOCKED
      m: { xs: 0, sm: 3 },
    }
  }}
>
  <DialogTitle sx={{ px: { xs: 2, sm: 3 }, py: 2 }}>
    Dialog Title
  </DialogTitle>
  <DialogContent sx={{ px: { xs: 2, sm: 3 } }}>
    {/* Content */}
  </DialogContent>
  <DialogActions sx={{ px: { xs: 2, sm: 3 }, pb: 2 }}>
    <Button fullWidth={useMediaQuery(theme.breakpoints.down('sm'))}>Cancel</Button>
    <Button fullWidth={useMediaQuery(theme.breakpoints.down('sm'))}>Confirm</Button>
  </DialogActions>
</Dialog>
```

### 3.11 Card Grid (Content Sections)

```typescript
<Box
  sx={{
    display: 'grid',
    gridTemplateColumns: {
      xs: '1fr',                     // 1 column
      sm: 'repeat(2, 1fr)',          // 2 columns
      lg: 'repeat(3, 1fr)',          // 3 columns
      xl: 'repeat(4, 1fr)',          // 4 columns on wide
    },
    gap: { xs: 2, md: 3 },          // 8px mobile / 12px desktop
  }}
>
  {cards.map(c => <Card key={c.id} />)}
</Box>
```

### 3.12 Typography Scaling

```typescript
// Headings scale down on mobile to prevent overflow
const RESPONSIVE_TYPOGRAPHY = {
  h1: { fontSize: { xs: '22px', sm: '26px', lg: '32px' }, fontWeight: 700 },
  h2: { fontSize: { xs: '20px', sm: '24px', lg: '28px' }, fontWeight: 700 },
  h3: { fontSize: { xs: '18px', sm: '20px', lg: '24px' }, fontWeight: 700 },
  h4: { fontSize: { xs: '16px', sm: '18px', lg: '20px' }, fontWeight: 700 },
  body: { fontSize: { xs: '13px', sm: '14px', lg: '16px' } },
};

// Page titles get the most reduction on mobile
// Body text minimum: 13px — never go below
```

### 3.13 Spacing Scale Per Breakpoint

```typescript
// Content area padding scales with screen size
const CONTENT_PADDING = {
  xs: 2,   // 8px  — tight on mobile
  sm: 3,   // 12px
  md: 4,   // 16px
  lg: 6,   // 24px — standard desktop
  xl: 8,   // 32px — comfortable on large screens
};

// Section gaps scale similarly
const SECTION_GAP = {
  xs: 3,   // 12px
  sm: 3,   // 12px
  md: 4,   // 16px
  lg: 6,   // 24px — LOCKED desktop standard
};

// Card padding
const CARD_PADDING = {
  xs: '16px',
  sm: '16px',
  md: '20px',
  lg: '24px',
  xl: '32px',
};
```

### 3.14 Touch & Interaction Rules (Mobile)

```typescript
// Minimum touch target sizes (WCAG 2.1 AA — 44x44px minimum)
const TOUCH_TARGETS = {
  button:     { minHeight: '44px', minWidth: '44px' },
  iconButton: { minHeight: '44px', minWidth: '44px' },
  tableRow:   { minHeight: '48px' },
  navItem:    { minHeight: '48px' },
  input:      { minHeight: '44px' },
};

// Rules for mobile interaction
// - No hover-only affordances (hover is desktop-only)
// - No tooltip-only actions — use labels on mobile
// - Row actions (edit/delete) use a "..." menu on xs-sm, visible icons on lg+
// - Swipe gestures are optional, not a primary interaction model
```

### 3.15 Pagination (Responsive)

```typescript
// Full pagination on desktop, simplified on mobile
<Box
  sx={{
    display:        'flex',
    flexDirection:  { xs: 'column', sm: 'row' },
    alignItems:     'center',
    justifyContent: 'space-between',
    gap:            2,
    mt:             3,
  }}
>
  {/* "Showing X–Y of Z" — hide on xs if space is tight */}
  <Typography
    variant="body2"
    color="text.secondary"
    sx={{ display: { xs: 'none', sm: 'block' } }}
  >
    Showing {from}–{to} of {total}
  </Typography>

  <Pagination
    count={totalPages}
    siblingCount={isMobile ? 0 : 1}  // Fewer page buttons on mobile
    boundaryCount={1}
    size={isMobile ? 'small' : 'medium'}
  />
</Box>
```

---

## 4. How Layout Can Be Creative

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
- Do not allow horizontal scroll at the page level on any breakpoint.
- Do not drop below 13px for any visible text on mobile.
- Do not reduce touch targets below 44px height on interactive elements.

---

## 5. Required Components and Libraries
- Prioritize MUI components (`@mui/material`)
- Use `@iconify/react` for icons
- Prefer system-standard input components (`LabeledInput`, `SelectedInput`, `MultiSelectedInput`) when available
- Reuse components in `src/components/Common/` before creating new ones

---

## 6. Pre-Merge Checklist

### Token Compliance
- [ ] Global font is still SVN-Gilroy
- [ ] Colors only come from the system palette
- [ ] Border radius values match the defined scale
- [ ] Shadows are from theme tokens only (no custom shadows)
- [ ] Spacing follows the standard scale
- [ ] Hover/focus/active states use 0.2s transitions

### Responsive Compliance
- [ ] Sidebar hidden (drawer) on xs/sm, icon-only on md, full on lg+
- [ ] Page header title + CTA stacks vertically on xs/sm
- [ ] KPI grid: 1 col (xs), 2 col (sm), 3 col (md), 4 col (lg), 5 col (xl)
- [ ] Form grid: 1 col (xs/sm), 2 col (md+)
- [ ] Tables scroll horizontally on xs/sm — no column compression
- [ ] Essential columns only shown on xs/sm; all columns on lg+
- [ ] Toolbar stacks on xs/sm; single flex row on md+
- [ ] Dialogs are full-screen on xs/sm, centered modal on md+
- [ ] Buttons are full-width on xs when standalone CTA
- [ ] All touch targets are ≥ 44px height on xs/sm
- [ ] No horizontal page scroll at any breakpoint
- [ ] Typography scales correctly: H1 22→32px, body 13→16px
- [ ] Content padding: 8px (xs) → 12px (sm) → 16px (md) → 24px (lg) → 32px (xl)
- [ ] Responsive behavior tested on real device or accurate emulator

---

## 7. Quick Decision Rules for Developers
If you are deciding between two options:
1. Choose the option that preserves more original tokens.
2. Choose the option that reduces clicks/scrolling for admins.
3. If both are equal, choose the layout that is easier to scale later.

**Responsive-specific tiebreaker:**
4. If layout works on desktop but breaks on mobile — fix mobile first.
5. If a feature cannot fit on xs without scrolling — consider hiding or moving it to a drawer/tab.

---

## 8. AI Agent Guidelines for Layout Changes

### Step 1: Analyze Current Layout
```
Before touching code:
✓ Read the current page structure (grid, flex, card arrangement)
✓ Understand the data flow and user task
✓ Identify inefficiencies (scroll depth, clustering, navigation)
✓ Map all colors, spacing, and radius used
✓ Note current responsive behavior (or lack thereof)
```

### Step 2: Check Token Compliance
```javascript
function validateCurrentLayout() {
  // Colors from palette?          YES/NO
  // Spacing in 4/8/12/16/24/32/40 scale?  YES/NO
  // Border-radius in 6/8/10/12/16/24?     YES/NO
  // Transitions all .2s?          YES/NO
  // Font SVN-Gilroy globally?     YES/NO
  // Responsive breakpoints used?  YES/NO
}
```

### Step 3: Design New Layout (Keep Tokens)
```
✓ Do NOT change colors, spacing, radius, transitions
✓ Do CHANGE grid columns, card order, section arrangement
✓ Do ADD responsive breakpoint variants to all grid/flex containers
✓ Do ADD mobile-first sx={{ ... xs: ..., sm: ..., md: ..., lg: ..., xl: ... }}
✓ Do VERIFY sidebar behavior matches Section 3.3
✓ Do VERIFY table scroll behavior matches Section 3.8
```

### Step 4: Implement Carefully

```typescript
// Mobile-first template for every layout container
const ResponsiveLayout = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{
      display: 'grid',
      gridTemplateColumns: {
        xs: '1fr',           // Mobile: single column
        md: '1fr 1fr',       // Tablet: two columns
        lg: '2fr 1fr',       // Desktop: asymmetric
      },
      gap: { xs: 2, lg: 3 },  // 8px → 12px
      p:   { xs: 2, sm: 3, md: 4, lg: 6, xl: 8 },
      backgroundColor: theme.palette.background.default,
    }}>
      <MainContent />
      <SidePanel />
    </Box>
  );
};
```

### Step 5: Validate Before Submit
```
□ All colors from theme.palette
□ All spacing from {4, 8, 12, 16, 24, 32, 40}
□ All radius from {6, 8, 10, 12, 16, 24}
□ All transitions 0.2s ease
□ Font still SVN-Gilroy globally
□ No custom shadows
□ No hardcoded hex values
□ Sidebar hidden on xs/sm (drawer), icon-only on md, full on lg+
□ Tables scroll on xs/sm, no horizontal page overflow
□ Forms are single-column on xs/sm
□ Touch targets ≥ 44px on mobile
□ Tested across all 5 breakpoints
```

---

## 9. Common Layout Patterns (Agent-Friendly)

### Pattern 1: Single Column → Two Column
```typescript
// BEFORE (Single column, scroll heavy)
<Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
  <FilterCard />
  <DataTable />
  <RelatedInfo />
</Box>

// AFTER (Responsive — stacked mobile, side-by-side desktop)
<Box sx={{
  display: 'grid',
  gridTemplateColumns: { xs: '1fr', lg: '300px 1fr' },
  gap: 3,  // LOCKED: 12px
}}>
  <FilterCard />
  <Box>
    <DataTable />
    <RelatedInfo />
  </Box>
</Box>
```

### Pattern 2: Stack → Tabs (for dense info)
```typescript
// BEFORE (Long scrolling page — bad on mobile)
<Box>
  <SectionA /><Divider /><SectionB /><Divider /><SectionC />
</Box>

// AFTER (Tabbed — works on all screens)
<Tabs value={tab} onChange={(_, v) => setTab(v)}>
  <Tab label="Overview" />
  <Tab label="Details" />
  <Tab label="Related" />
</Tabs>
<Box sx={{ pt: 3 }}>
  {tab === 0 && <SectionA />}
  {tab === 1 && <SectionB />}
  {tab === 2 && <SectionC />}
</Box>
```

### Pattern 3: Table Actions on Mobile
```typescript
// BEFORE (All action icons visible — too wide on mobile)
<TableCell>
  <IconButton><EditIcon /></IconButton>
  <IconButton><DeleteIcon /></IconButton>
  <IconButton><ViewIcon /></IconButton>
</TableCell>

// AFTER (Menu on mobile, icons on desktop)
<TableCell>
  {isMobile ? (
    <IconButton onClick={openMenu}>
      <Icon icon="mdi:dots-vertical" />
    </IconButton>
  ) : (
    <Box sx={{ display: 'flex', gap: 1 }}>
      <IconButton><EditIcon /></IconButton>
      <IconButton><DeleteIcon /></IconButton>
      <IconButton><ViewIcon /></IconButton>
    </Box>
  )}
</TableCell>
```

### Pattern 4: Responsive Grid Rearrangement
```typescript
// BEFORE (Fixed 4-column — overflows on tablet)
<Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2 }}>

// AFTER (Scales across all breakpoints)
<Box sx={{
  display: 'grid',
  gridTemplateColumns: {
    xs: '1fr',
    sm: 'repeat(2, 1fr)',
    md: 'repeat(3, 1fr)',
    xl: 'repeat(4, 1fr)',
  },
  gap: 2,  // LOCKED: 8px
}}>
```

### Pattern 5: Full-Screen Modal on Mobile
```typescript
// BEFORE (Centered modal clips on small screens)
<Dialog maxWidth="sm" fullWidth open={open}>

// AFTER (Adaptive — full screen on mobile)
<Dialog
  maxWidth="sm"
  fullWidth
  fullScreen={useMediaQuery(theme.breakpoints.down('sm'))}
  open={open}
  PaperProps={{
    sx: {
      borderRadius: { xs: 0, sm: '16px' },  // No radius when full-screen
      backgroundColor: '#f9fbff',            // LOCKED
    }
  }}
>
```

---

## 10. Layout Validation Checklist for Agents

```typescript
class LayoutValidator {
  checkColors() {
    const allowed = [
      '#0e4831','#afc932','#6E759F','#999999',
      '#57CA22','#FFA319','#FF1943','#33C2FF',
      '#f2f5f9','#ffffff','#f9fbff','#e0e0e0','#e5e7eb'
    ];
    return extractColorsFromCode().every(c => allowed.includes(c));
  }

  checkSpacing() {
    const allowed = [4, 8, 12, 16, 24, 32, 40];
    return extractSpacingValues().every(v => allowed.includes(v));
  }

  checkRadius() {
    const allowed = ['6px','8px','10px','12px','16px','24px'];
    return extractRadiusValues().every(r => allowed.includes(r));
  }

  checkTransitions() {
    return extractTransitions().every(t => t.includes('.2s') || t.includes('0.2s'));
  }

  checkFont() {
    return getGlobalFontFamily() === 'SVN-Gilroy';
  }

  checkShadows() {
    return extractCustomBoxShadows().length === 0;
  }

  checkResponsive() {
    return {
      // Sidebar uses breakpoint-aware visibility
      sidebarResponsive:    hasSidebarBreakpoints(),
      // No horizontal overflow at page level
      noHorizontalScroll:   !hasPageHorizontalOverflow(),
      // Tables have overflow-x: auto on xs/sm
      tableScrollable:      tablesHaveOverflowX(),
      // Touch targets meet 44px minimum
      touchTargetsMet:      allTouchTargetsAbove44px(),
      // Headings scale with breakpoints
      typographyScales:     headingsHaveResponsiveFontSizes(),
      // Content padding scales with breakpoints
      paddingScales:        contentPaddingHasBreakpoints(),
    };
  }

  runAll() {
    const results = {
      colorsOK:      this.checkColors(),
      spacingOK:     this.checkSpacing(),
      radiusOK:      this.checkRadius(),
      transitionsOK: this.checkTransitions(),
      fontOK:        this.checkFont(),
      shadowsOK:     this.checkShadows(),
      responsiveOK:  this.checkResponsive(),
    };

    const isCompliant = Object.values(results)
      .every(v => v === true || (typeof v === 'object' &&
        Object.values(v).every(Boolean)));

    return { ...results, isCompliant };
  }
}
```

---

## 11. Scope
- Applies to all new screens and refactored screens.
- This document does **not replace** the original design system; it only defines a "flexible layout" mode.
- Original source of truth: `admin-design-system.md` (all tokens).

---

**Last Updated**: 2026-03-20  
**Status**: Layout-Flexible, Token-Locked, Responsive-Complete, AI-Ready  
**Version**: 3.0  
**Authority**: Senior Design System Architect
