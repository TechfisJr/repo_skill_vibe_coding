# TechFis UI Rules - Flexible Layout Mode

## Objective
This document allows front-end developers to **freely design layouts** for each screen while preserving the TechFis visual identity.

**Layout Mode**: Flexible layout (structure can change, tokens cannot).

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
- Primary / Brand: `#0e4831`
- Accent / CTA: `#afc932`
- Secondary Text: `#6E759F`
- Primary Text: `#223354`
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

## 3) How Layout Can Be Creative

### Allowed
- Switch from a 1-column layout to 2-3 columns based on data context.
- Split/merge content cards to improve admin task efficiency.
- Reorganize filter/sort/action areas to optimize workflow.
- Choose suitable page patterns: List / Detail / Dashboard or hybrid.
- Optimize responsiveness as long as tokens and component styles remain unchanged.

### Required Responsive Baseline (Flexible Mode)

```typescript
// Standard breakpoints for all flexible layouts
const BREAKPOINTS = {
  xs: 0,    // mobile
  sm: 600,  // large mobile / small tablet
  md: 900,  // tablet
  lg: 1200, // desktop
  xl: 1536,
};

// Required adaptive behavior
// xs-sm: single-column first, stacked actions, full-width inputs/buttons
// md:    two-column layout allowed when readability is preserved
// lg+:   2-3 columns optimized for workflow efficiency
```

- Mobile-first implementation is required (`xs` first, then scale up).
- At `xs-sm`, avoid horizontal scrolling for forms/tables/cards.
- Sticky toolbars/summary blocks are allowed only when they do not hide content on small screens.

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

## 7) AI Agent Guidelines for Layout Changes

### How Agents Should Approach Layout Refactoring

#### Step 1: Analyze Current Layout
```
Before touching code:
✓ Read the current page structure (grid, flex, card arrangement)
✓ Understand the data flow and user task
✓ Identify inefficiencies (scroll depth, clustering, navigation)
✓ Map all colors, spacing, and radius used
```

#### Step 2: Check Token Compliance
```javascript
// Verify alignment with locked tokens
function validateCurrentLayout() {
  // Extract all used colors
  // Check: Are they from the palette? YES/NO
  
  // Extract all spacing values
  // Check: Are they 4, 8, 12, 16, 24, 32, 40? YES/NO
  
  // Extract all border-radius values
  // Check: Are they 6, 8, 10, 12, 16, 24? YES/NO
  
  // Extract all transitions
  // Check: Are they all .2s? YES/NO
  
  // Extract font-family
  // Check: Is it SVN-Gilroy globally? YES/NO
}
```

#### Step 3: Design New Layout (Keep Tokens)
```
When redesigning layout:
✓ Do NOT change colors (use same palette)
✓ Do NOT change spacing scale (use same 8px multiples)
✓ Do NOT change border radius (use same 6-24px set)
✓ Do CHANGE grid columns, card order, section arrangement
✓ Do OPTIMIZE for user workflow/admin efficiency
✓ Do MAINTAIN responsiveness
```

#### Step 4: Implement Carefully
```typescript
// Template for layout changes
const NewLayoutPage = () => {
  const theme = useTheme();
  
  return (
    <Box sx={{
      display: 'grid',
      gridTemplateColumns: { xs: '1fr', lg: '2fr 1fr' }, // Flexible grid
      gap: 3, // LOCKED VALUE (12px)
      p: 4,   // LOCKED VALUE (16px)
      backgroundColor: theme.palette.background.default // THEME COLOR
    }}>
      <MainContent /> {/* Can reorganize */}
      <Sidebar />     {/* Can reorganize */}
    </Box>
  );
};
```

#### Step 5: Validate Before Submit
```
Checklist before pushing code:
□ All colors from theme.palette
□ All spacing from {4, 8, 12, 16, 24, 32, 40}
□ All radius from {6, 8, 10, 12, 16, 24}
□ All transitions 0.2s ease
□ Font still SVN-Gilroy globally
□ No custom shadows (use theme.shadows)
□ No hardcoded hex values
□ Components use MUI or approved custom components
□ Responsive breakpoints work correctly
```

---

## 8) Common Layout Patterns (Agent-Friendly)

### Pattern 1: Single Column → Two Column
```typescript
// BEFORE (Single column, scroll heavy)
<Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
  <FilterCard />
  <DataTable />
  <RelatedInfo />
</Box>

// AFTER (Two columns, better space usage)
<Box sx={{
  display: 'grid',
  gridTemplateColumns: { xs: '1fr', lg: '300px 1fr' },
  gap: 3
}}>
  <Box>
    <FilterCard />
  </Box>
  <Box>
    <DataTable />
    <RelatedInfo />
  </Box>
</Box>

// TOKENS PRESERVED ✓
// - Spacing (gap: 3) = LOCKED 12px ✓
// - Colors, radius, transitions unchanged ✓
```

### Pattern 2: Stack → Tabs (for dense info)
```typescript
// BEFORE (Long scrolling page)
<Box>
  <SectionA />
  <Divider />
  <SectionB />
  <Divider />
  <SectionC />
</Box>

// AFTER (Tabbed view)
<Box>
  <Tabs>
    <Tab label="Overview"><SectionA /></Tab>
    <Tab label="Details"><SectionB /></Tab>
    <Tab label="Related"><SectionC /></Tab>
  </Tabs>
</Box>

// TOKENS PRESERVED ✓
// All tab colors, spacing, transitions unchanged ✓
```

### Pattern 3: Grid Rearrangement
```typescript
// BEFORE (4-item grid, too wide)
<Box sx={{
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: 2
}}>

// AFTER (Responsive grid)
<Box sx={{
  display: 'grid',
  gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
  gap: 2  // LOCKED SPACING (8px)
}}>

// TOKENS PRESERVED ✓
```

---

## 9) Layout Validation Checklist for Agents

Run this before submitting layout changes:

```typescript
class LayoutValidator {
  // 1. Color Compliance
  checkColors() {
    const usedColors = extractColorsFromCSS();
    const allowedPalette = [
      '#0e4831', '#afc932', '#6E759F', '#223354', '#999999',
      '#57CA22', '#FFA319', '#FF1943', '#33C2FF',
      '#f2f5f9', '#ffffff', '#f9fbff', '#e0e0e0', '#e5e7eb'
    ];
    return usedColors.every(color => allowedPalette.includes(color));
  }

  // 2. Spacing Compliance
  checkSpacing() {
    const usedSpacing = extractSpacingFromCSS();
    const allowedScale = [4, 8, 12, 16, 24, 32, 40];
    return usedSpacing.every(val => 
      allowedScale.includes(parseInt(val))
    );
  }

  // 3. Border Radius Compliance
  checkRadius() {
    const usedRadius = extractRadiusFromCSS();
    const allowed = ['6px', '8px', '10px', '12px', '16px', '24px'];
    return usedRadius.every(r => allowed.includes(r));
  }

  // 4. Transition Compliance
  checkTransitions() {
    const usedTransitions = extractTransitionsFromCSS();
    return usedTransitions.every(t => 
      t.includes('0.2s') || t.includes('.2s')
    );
  }

  // 5. Font Compliance
  checkFont() {
    return getGlobalFont() === 'SVN-Gilroy';
  }

  // 6. Shadow Compliance
  checkShadows() {
    const customShadows = extractCustomShadows();
    return customShadows.length === 0; // All from theme
  }

  runAll() {
    return {
      colorsOK: this.checkColors(),
      spacingOK: this.checkSpacing(),
      radiusOK: this.checkRadius(),
      transitionsOK: this.checkTransitions(),
      fontOK: this.checkFont(),
      shadowsOK: this.checkShadows(),
      
      isCompliant: () => 
        Object.values(this).every(v => v === true)
    };
  }
}
```

---

## 10) AI Agent Quick Reference

### To Apply This Style System Across Project:

1. **Import Tokens** (from IKIGAI-admin-style.md Section 11)
   ```typescript
   // Copy-paste token definitions
   export const THEME_COLORS = { ... };
   export const SPACING = { ... };
   export const BORDER_RADIUS = { ... };
   ```

2. **Update theme.ts** (or equivalent)
   ```typescript
   // Replace all hardcoded values with token references
   theme.palette.primary.main = THEME_COLORS.primary;
   theme.palette.spacing.unit = 4;
   // ... etc
   ```

3. **Refactor Components** (batch processing)
   ```
   For each component:
   - Search for hardcoded colors → Replace with theme
   - Search for arbitrary spacing → Replace with scale
   - Search for custom radius → Replace with allowed set
   - Search for other transitions → Lock to .2s
   - Search for custom shadows → Use theme.shadows
   ```

4. **Refactor Pages** (layout preservation)
   ```
   For each page:
   - Analyze current grid/flex structure
   - Identify inefficiencies (from Section 8 patterns)
   - Apply new layout (keeping all tokens) 
   - Validate using Section 9 checklist
   ```

5. **Validate Project**
   ```
   - Run LayoutValidator on all files
   - Check for 0% hardcoded colors
   - Check for 100% compliant spacing
   - Generate compliance report
   ```

---

## 11) Scope
- Applies to all new screens and refactored screens.
- This document does **not replace** the original design system; it only defines a "flexible layout" mode.
- Original source of truth: IKIGAI-admin-style.md (see Section 13 for All Tokens)

---

**Last Updated**: 2026-03-20  
**Status**: Layout-Flexible, Token-Locked, AI-Ready  
**Version**: 2.0 (AI Agent Edition)  
**Authority**: Senior Design System Architect
