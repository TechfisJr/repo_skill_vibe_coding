# 🎨 IKIGAI Design System - AI Agent Edition

> Complete design system documentation optimized for AI agents to understand and apply styles across the entire project.

---

## 📚 Files in This Directory

| File | Purpose | Audience | Updated |
|------|---------|----------|---------|
| **IKIGAI-admin-style.md** | Comprehensive design rules (12 sections) | Developers & Agents | ✅ 2026-03-20 |
| **IKIGAI-style.md** | Flexible layout guidelines with validation | Developers & Agents | ✅ 2026-03-20 |
| **IKIGAI-tokens.ts** | Copy-paste token definitions (TypeScript) | **AGENTS ONLY** | ✅ 2026-03-20 |
| **README.md** | Overview of design system | Humans | 2026-03-20 |
| **THIS FILE** | Agent implementation guide | **AGENTS ONLY** | 2026-03-20 |

---

## 🤖 AI Agent Workflow

### 1. **Read First**: Section 13 of IKIGAI-admin-style.md
   - AI Agent Implementation Guide
   - Priority Enforcement Levels
   - Color/Spacing/Radius Algorithms
   - Validation Checklist

### 2. **Reference**: IKIGAI-tokens.ts
   - Copy-paste all token definitions into your project
   - Use IKIGAI_COLORS, IKIGAI_SPACING, etc.
   - Never hardcode colors, spacing, or radius

### 3. **Validate Layout**: IKIGAI-style.md (Sections 7-10)
   - Learn layout patterns from Section 8
   - Use LayoutValidator from Section 9
   - Run checklist from Section 5

### 4. **Execute Refactor**:
   ```
   For each file in the project:
   ├─ Identify all hardcoded colors/spacing/radius
   ├─ Replace with IKIGAI_COLORS.*, IKIGAI_SPACING.*, etc.
   ├─ Ensure all transitions are 0.2s ease
   ├─ Validate using LayoutValidator
   └─ Commit with style system compliance
   ```

---

## ✅ Pre-Refactoring Checklist (Agents)

Before starting any refactoring task:

- [ ] You've read Sections 13 of IKIGAI-admin-style.md
- [ ] You understand Priority Enforcement Levels (STRICT vs FLEXIBLE)
- [ ] You have IKIGAI-tokens.ts imported in your mental model
- [ ] You understand the 5 refactoring patterns from Section 8 of IKIGAI-style.md
- [ ] You know how to run LayoutValidator before submitting

---

## 🚀 Three Enforcement Modes

### STRICT (Non-negotiable - must apply everywhere)
```typescript
// Color system - ALWAYS use theme
backgroundColor: IKIGAI_COLORS.surface  ✅

// Spacing - ALWAYS use scale
padding: IKIGAI_SPACING.md  ✅

// Border radius - ALWAYS use allowed set
borderRadius: IKIGAI_RADIUS.md  ✅

// Transitions - ALWAYS 0.2s
transition: IKIGAI_TRANSITIONS.standard  ✅

// Font - ALWAYS SVN-Gilroy globally
fontFamily: IKIGAI_TYPOGRAPHY.fontFamily  ✅
```

### FLEXIBLE (Can adapt per context)
```typescript
// Layout structure can change
// ✅ Switch from 1 column to 2 columns
// ✅ Reorganize card order
// ✅ Change grid columns

// Component organization can vary
// ✅ Different page patterns
// ✅ Different card grouping
// ✅ Different filter placement

// Responsive behavior can adapt
// ✅ Different breakpoints
// ✅ Different mobile-first approach
// ✅ Different grid-template-columns
```

---

## 📋 Token Lookup Tables

### Quick Color Reference
```javascript
Primary Actions      → #5569ff  (IKIGAI_COLORS.primary)
Lime CTA Button     → #afc932  (IKIGAI_COLORS.accent)
Dark Green Header   → #0e4831  (IKIGAI_COLORS.darkGreen)
Success             → #57CA22  (IKIGAI_COLORS.success)
Error/Delete        → #FF1943  (IKIGAI_COLORS.error)
Warning             → #FFA319  (IKIGAI_COLORS.warning)
Info                → #33C2FF  (IKIGAI_COLORS.info)
Text Primary        → #0e4831  (IKIGAI_COLORS.textPrimary)
Background          → #f2f5f9  (IKIGAI_COLORS.background)
White/Surface       → #ffffff  (IKIGAI_COLORS.surface)
```

### Quick Spacing Reference
```javascript
xs  → 4px   (gap: 1)
sm  → 8px   (gap: 2)
md  → 12px  (gap: 3)
lg  → 16px  (gap: 4)
xl  → 24px  (gap: 6)
2xl → 32px  (gap: 8)
3xl → 40px  (gap: 10)
```

### Quick Radius Reference
```javascript
sm   → 6px    (inputs, icon buttons)
md   → 8px    (buttons, dropdowns)
lg   → 10px   (standard cards)
xl   → 12px   (internal elements)
2xl  → 16px   (modal, dialog)
3xl  → 24px   (main containers)
full → 9999px (chips, badges)
```

---

## 🔍 How Agents Should Validate Code

### Validation Algorithm

```javascript
// STEP 1: Color check
function validateColors(cssContent) {
  const COLOR_REGEX = /#[0-9a-f]{6}|rgb\(|color:/gi;
  const found = cssContent.match(COLOR_REGEX) || [];
  
  // Count hardcoded colors
  const hardcoded = found.filter(c => 
    !ALLOWED_COLORS.includes(c)
  );
  
  return {
    total: found.length,
    hardcoded: hardcoded.length,
    compliance: (found.length - hardcoded.length) / found.length
  };
}

// STEP 2: Spacing check
function validateSpacing(cssContent) {
  const SPACING_REGEX = /padding|margin|gap|width|height/gi;
  const found = cssContent.match(SPACING_REGEX) || [];
  
  // Check all values are multiples of 4 (or percentages)
  return {
    total: found.length,
    compliance: checkAllValuesAreScale()
  };
}

// STEP 3: Full validation
function validateCompliance(projectPath) {
  return {
    colors: validateColors(),
    spacing: validateSpacing(),
    radius: validateRadius(),
    transitions: validateTransitions(),
    fonts: validateFont(),
    
    overallCompliance: () => 
      colors + spacing + radius + transitions + fonts >= 95%
  };
}
```

---

## 🛠 Refactoring Pattern Examples

### Pattern 1: Hardcoded Color → Token
```typescript
// BEFORE
sx={{ backgroundColor: '#5569ff' }}

// AFTER
import { IKIGAI_COLORS } from '@/tokens';
sx={{ backgroundColor: IKIGAI_COLORS.primary }}
```

### Pattern 2: Arbitrary Spacing → Scale
```typescript
// BEFORE
sx={{ padding: '14px', gap: '20px' }}

// AFTER
import { IKIGAI_SPACING } from '@/tokens';
sx={{ p: 3, gap: IKIGAI_SPACING.xl }}  // 12px, 24px
```

### Pattern 3: Custom Radius → Allowed Set
```typescript
// BEFORE
sx={{ borderRadius: '7px' }}

// AFTER
import { IKIGAI_RADIUS } from '@/tokens';
sx={{ borderRadius: IKIGAI_RADIUS.sm }}  // 6px
```

### Pattern 4: Missing Transition → Add Standard
```typescript
// BEFORE
'&:hover': { backgroundColor: newColor }

// AFTER
import { IKIGAI_TRANSITIONS } from '@/tokens';
'&:hover': { 
  backgroundColor: newColor,
  transition: IKIGAI_TRANSITIONS.standard
}
```

---

## 📊 Compliance Targets

Agents should aim for:

| Metric | Target | Method |
|--------|--------|--------|
| Color Compliance | 100% | All colors from IKIGAI_COLORS |
| Spacing Compliance | 100% | All spacing from scale {4,8,12,16,24,32,40} |
| Radius Compliance | 100% | All radius from {6,8,10,12,16,24,9999}px |
| Transition Compliance | 100% | All transitions 0.2s ease |
| Font Compliance | 100% | SVN-Gilroy globally |
| Shadow Compliance | 100% | All shadows from theme |
| Overall | 99%+ | Use IKIGAI_DESIGN_SYSTEM for everything |

---

## 🚨 Common Agent Mistakes to Avoid

### ❌ WRONG
```typescript
// Hardcoded colors
backgroundColor: '#5569ff'
color: '#0e4831'

// Arbitrary spacing  
padding: '14px'
margin: '20px'

// Custom radius
borderRadius: '7px'
borderRadius: '15px'

// Wrong transition
transition: 'color 0.3s linear'

// Custom shadows
boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
```

### ✅ CORRECT
```typescript
// Theme colors
backgroundColor: IKIGAI_COLORS.primary
color: IKIGAI_COLORS.textPrimary

// Scale spacing
padding: IKIGAI_SPACING.md  // 12px
margin: IKIGAI_SPACING.xl   // 24px

// Allowed radius
borderRadius: IKIGAI_RADIUS.sm   // 6px
borderRadius: IKIGAI_RADIUS.lg   // 10px

// Standard transition
transition: IKIGAI_TRANSITIONS.standard  // 0.2s ease

// Theme shadows
boxShadow: IKIGAI_SHADOWS.card
```

---

## 🎯 Task Execution Order (for Agents)

1. **Analyze** - Read all 3 files and understand tokens
2. **Validate** - Run LayoutValidator on current code
3. **Plan** - Identify files to refactor (by importance)
4. **Refactor** - Apply token replacements
5. **Validate** - Re-run LayoutValidator
6. **Report** - Generate compliance report
7. **Commit** - Submit with 99%+ compliance

---

## 📞 Questions Agents Should Ask

When faced with a styling decision:

1. **Is there a token for this?**
   - Colors → Check IKIGAI_COLORS
   - Spacing → Check IKIGAI_SPACING
   - Radius → Check IKIGAI_RADIUS

2. **If no token exists, can I create one?**
   - STRICT values → NO, use existing only
   - FLEXIBLE values → YES, but document it

3. **Is this layout or token?**
   - Token (locked) → Must use system
   - Layout (flexible) → Can be creative

4. **Will other agents understand this later?**
   - Clear tokens → YES ✅
   - Magic numbers → NO ❌

---

## 🔗 Related Documentation

- [IKIGAI Admin Style Guide](./IKIGAI-admin-style.md) - Full reference
- [IKIGAI Layout Rules](./IKIGAI-style.md) - Flexible layouts
- [Token Definitions](./IKIGAI-tokens.ts) - Copy-paste values

---

## 📈 Version History

| Version | Date | Changes |
|---------|------|---------|
| 2.0 | 2026-03-20 | AI Agent Edition - Added Sections 13 & 8-10, Token file |
| 1.0 | 2026-03-19 | Initial Design System |

---

**Status**: AI-Ready ✅  
**Compliance**: 99%+ target  
**Last Updated**: 2026-03-20  
**Authority**: Senior Design System Architect

---

*This document is auto-generated for AI agents. See IKIGAI-admin-style.md for human-readable version.*
