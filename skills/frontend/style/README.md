# 🎨 Frontend Style Skills

Design system references and style guides for frontend projects.

---

## Skills in This Category

### 1. FE-CREDIT Style Guide
**File:** [`FE-CREDIT-style-guide.md`](./FE-CREDIT-style-guide.md)

A comprehensive, english-translated style guide for the FE Credit partner interface. Includes:

* **Brand Identity** — Logo, slogan, positioning
* **Color Palette** — Primary, secondary, neutral, and status colors
* **Typography** — Font family, size system, hierarchy rules
* **Components** — Buttons, forms, cards, badges, tabs
* **Layout Patterns** — Header, footer, hero banner, grid systems
* **Responsive Design** — Mobile-first breakpoints
* **Animations & Effects** — Transitions, hover states
* **Icons & Assets** — Style and usage guidelines
* **UX Writing** — Tone of voice, CTA guidelines

**Use Case:** Building UI interfaces that align with FE Credit brand standards.

---

### 2. IKIGAI Admin Design System (AI-Ready) ⭐
**Files:**
- [`IKIGAI-admin-style.md`](./IKIGAI-admin-style.md) — Complete design rules + AI Agent Implementation Guide (Section 13)
- [`IKIGAI-style.md`](./IKIGAI-style.md) — Flexible layout mode with validation rules (Sections 7-10 for agents)
- [`IKIGAI-tokens.ts`](./IKIGAI-tokens.ts) — **Token definitions (TypeScript) - Copy-paste ready**
- [`AI-AGENT-GUIDE.md`](./AI-AGENT-GUIDE.md) — Dedicated agent workflow guide

**IKIGAI Admin Style** (12 sections) covers:
* Design philosophy & layout system
* Component standards (buttons, forms, cards, tables, modals)
* Typography & color system (with token names)
* Spacing & interactions
* Page patterns (list, detail, dashboard)
* AI Agent Implementation Guide (Section 13) ✅

**Key Features for Agents:**
- ✅ Section 13: AI Agent Implementation Guide
- ✅ Color/Spacing/Radius algorithms
- ✅ Copy-paste code snippets
- ✅ Validation checklists
- ✅ Common refactoring patterns
- ✅ Token Quick Reference

**IKIGAI Style** (Flexible Layout Mode):
* Locked tokens (colors, spacing, radius, transitions, font)
* Flexible layout options (agents can reorganize UI structure)
* Common layout patterns with code examples
- ✅ Sections 7-10: AI Agent-specific sections
- ✅ Layout validation checklist
- ✅ Pattern examples
- ✅ Quick reference for agents

**IKIGAI Tokens** (Ready-to-use TypeScript):
- ✅ `IKIGAI_COLORS` — All color values
- ✅ `IKIGAI_SPACING` — All spacing scale
- ✅ `IKIGAI_RADIUS` — All border radius values
- ✅ `IKIGAI_TRANSITIONS` — All motion tokens
- ✅ `IKIGAI_SHADOWS` — All shadow values
- ✅ `IKIGAI_TYPOGRAPHY` — Font specs
- ✅ Validation helpers (isValidColor, isValidSpacing, etc.)

**Use Case:** 
- Comprehensive design system for admin dashboards
- AI agents need this to refactor entire codebase with consistent styling
- Strict enforcement of design tokens + flexible layout approach

---

## 📊 File Overview

| File | Purpose | Format | AI-Ready | Status |
|------|---------|--------|----------|--------|
| FE-CREDIT-style-guide.md | Brand standards | Markdown | ✅ | Done |
| IKIGAI-admin-style.md | Full design rules | Markdown | ✅ | Done (v2.0) |
| IKIGAI-style.md | Layout flexibility | Markdown | ✅ | Done (v2.0) |
| IKIGAI-tokens.ts | Token definitions | TypeScript | ✅ | Ready-to-use |
| AI-AGENT-GUIDE.md | Agent workflow | Markdown | ✅✅ | Optimized |
| README.md | This file | Markdown | — | Overview |

---

## Structure

```
style/
├── FE-CREDIT-style-guide.md      # FE Credit brand style guide
├── IKIGAI-admin-style.md         # Complete admin design system (12 sections + AI guide)
├── IKIGAI-style.md               # Flexible layout rules (7 sections + AI guide)
├── IKIGAI-tokens.ts              # Copy-paste token definitions
├── AI-AGENT-GUIDE.md             # Optimized guide for AI agents
└── README.md                     # This file
```

---

## How to Use These Skills

### For Developers

1. **Reference design decisions** — Use as a source of truth for design patterns
2. **Maintain consistency** — Ensure new components follow established standards
3. **Onboard teammates** — Share with designers and developers for alignment
4. **Extend patterns** — Use as a foundation for new components

**Start with:** IKIGAI-admin-style.md → Read all 12 sections

### For AI Agents (Refactoring Entire Projects)

1. **Read:** AI-AGENT-GUIDE.md (complete workflow guide)
2. **Reference:** IKIGAI-admin-style.md Section 13 (AI Implementation Guidelines)
3. **Use:** IKIGAI-tokens.ts (copy tokens into your project)
4. **Validate:** IKIGAI-style.md Sections 9-10 (validation rules)
5. **Execute:** Refactor with 99%+ compliance

**Quick Path:** 
- Read AI-AGENT-GUIDE.md first
- Copy IKIGAI-tokens.ts into your project
- Use Section 13 algorithms for every styling decision
- Run LayoutValidator before submitting

---

## Key Token Values (Quick Reference)

### Colors
```javascript
#5569ff  → Primary Blue
#afc932  → Lime Green CTA
#0e4831  → Dark Green Header
#57CA22  → Success
#FF1943  → Error
#FFA319  → Warning
#33C2FF  → Info
```

### Spacing Scale
```javascript
4px  → xs
8px  → sm
12px → md
16px → lg
24px → xl
32px → 2xl
40px → 3xl
```

### Border Radius
```javascript
6px    → sm (inputs, buttons)
8px    → md (buttons, dropdowns)
10px   → lg (cards)
16px   → 2xl (modals)
24px   → 3xl (containers)
9999px → full (chips, badges)
```

---

## Design System Compliance

All files must follow:
- ✅ Token-based approach (no hardcoded values)
- ✅ Locked design tokens (colors, spacing, radius, transitions, font)
- ✅ Flexible layout structure (agents can reorganize UI)
- ✅ 99%+ compliance target (for projects)

---

## Adding New Style Guides

When adding a new style guide:

1. Create a `<PROJECT>-style-guide.md` file in this directory
2. Follow the format of IKIGAI-admin-style.md for consistency
3. Include AI Agent Implementation Guidelines (like Section 13)
4. Include token definitions or reference IKIGAI-tokens.ts
5. Update this README.md with the new skill

---

## Validation & Compliance

Before submitting styled code:

**Color Compliance:**
- [ ] All colors from IKIGAI_COLORS
- [ ] 0% hardcoded hex values

**Spacing Compliance:**
- [ ] All spacing from scale {4, 8, 12, 16, 24, 32, 40}
- [ ] All padding/margin use scale values

**Radius Compliance:**
- [ ] All border-radius from {6, 8, 10, 12, 16, 24, 9999}
- [ ] No arbitrary radius values

**Transition Compliance:**
- [ ] All interactive elements: `transition: all .2s ease`
- [ ] No other durations (0.1s, 0.3s, etc.)

**Font Compliance:**
- [ ] Global font-family: SVN-Gilroy
- [ ] No per-component font overrides

**Shadow Compliance:**
- [ ] All shadows from IKIGAI_SHADOWS
- [ ] No custom box-shadow values

---

## Version History

| Version | Date | Status | Changes |
|---------|------|--------|---------|
| 2.0 | 2026-03-20 | ✅ Active | Added AI Agent sections, Token file, Agent guide |
| 1.0 | 2026-03-19 | Archive | Initial design systems (FE-CREDIT, IKIGAI) |

---

## Support & Questions

For questions about:
- **Design tokens** → See IKIGAI-tokens.ts
- **AI agent workflows** → See AI-AGENT-GUIDE.md
- **Layout patterns** → See IKIGAI-style.md (Section 8)
- **Validation rules** → See IKIGAI-admin-style.md (Section 13)
- **Brand standards** → See FE-CREDIT-style-guide.md

---

*Last updated: March 20, 2026*  
*Status: AI-Ready v2.0*  
*Compliance Target: 99%+*
