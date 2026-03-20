# TechFis Recruitment Platform Admin - Design System

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

## 2. Layout System

### Global Layout Structure
```
┌──────────────────────────────────────────────────────────────┐
│  Header (80px, Dark Green) with Logo & Language Selector     │
├────────────┬─────────────────────────────────────────────────┤
│            │                                                  │
│ Sidebar    │  Metrics Row (KPI cards, horizontal)           │
│ (200-250px)│  ├─ Total, Active, Draft, Closed, Applicants  │
│            │                                                  │
│ Menu Items │  Toolbar Section (Search, Filter, Create CTA) │
│ (Vertical) │  ├─ Search input                               │
│            │  ├─ Filter dropdown                            │
│            │  └─ [Create Campaign] button (Lime Green)      │
│            │                                                  │
│            │  Data Table (White card)                        │
│            │  ├─ Sortable columns                           │
│            │  ├─ Row actions (View, Edit, Delete)          │
│            │  └─ Pagination at bottom                       │
│            │                                                  │
└────────────┴─────────────────────────────────────────────────┘
```

### Key Measurements
- **Sidebar Width**: 200-250px (fixed left, can collapse on mobile)
- **Header Height**: 80px (fixed top, dark green background `#0e4831`)
- **Header Elements**: Logo, platform name, language selector (EN | VI | JP)
- **Header Color**: `#0e4831` (dark green)
- **Body Background**: `#f2f5f9` (light gray, behind sidebar)
- **Content Area**: Main white card container with padding
- **Main Content Padding**: 24-32px (left, right, bottom)
- **Content Top Margin**: 16-20px below header for visual separation

### Metrics Row (KPI Cards)
- **Layout**: Horizontal grid (5 columns on desktop)
- **Spacing**: 16px gap between metric cards
- **Card Style**: White background, subtle shadow, padding 16px
- **Metric Number**: Large, bold (28-32px), primary colors based on status
  - Total: Dark blue (`#223354`)
  - Active: Success green (`#57CA22`)
  - Draft: Warning orange (`#FFA319`)
  - Closed: Dark gray (`#999`)
  - Applicants: Primary blue (`#5569ff`)
- **Icon Position**: Left side (20px icon)
- **Card Responsive**: Stack to 2-3 columns on tablet, 1 column on mobile

### Toolbar Section
- **Layout**: Flex row with space-between
- **Left Side**: Search input + Filter dropdown
- **Right Side**: [Create Campaign] button (lime green `#afc932`)
- **Search Input**: 
  - Width: 300px min (responsive)
  - Placeholder: "Search campaign name or description..."
  - Icon: Magnifying glass (16px)
- **Filter Dropdown**: Dark green text, dropdown arrow
- **Button**: `[+ Create Campaign]` (lime green, 8px padding, 6px radius)

### Page Container Rules
- Sidebar is sticky/fixed on left (hidden below lg breakpoint)
- Main content flows inside a scrollable container (if content height > viewport)
- Content area height: `calc(100vh - 80px - 32px)` (header height minus padding)
- All page content wrapped in white card(s) with consistent box-shadow
- No horizontal scroll on desktop; content fits within viewport after sidebar

### Section Spacing Patterns
- **Metrics Row Gap**: 16px (horizontal)
- **Toolbar to Table Gap**: 24px (vertical)
- **Section Gap**: 24px vertical spacing between major content blocks
- **Card Padding**: 24-32px (standard)
- **Group Gap**: 12px between form groups
- **Item to Item**: 8px (list items, rows)

---

## 3. Component Standards

### Buttons

#### Button Types & Colors
```typescript
Primary (lime green)      → bg-[#afc932] hover:bg-[#9cb32d]
Success (dark green)      → bg-[#0e4831] hover:bg-[0b3d2a]
Danger (red)              → bg-red-500 hover:bg-red-600
Warning (amber)           → bg-amber-500 hover:bg-amber-600
Custom (outlined gray)    → border border-gray-300 text-[#313743]
Secondary                 → bg-[#6E759F]
```

#### Button Sizes (Tailwind-based)
- **Small**: `px-3 py-1` text-sm
- **Medium**: `px-8 py-2` text-base (default)
- **Large**: `px-10 py-3` text-base

#### Button Variants
- **Solid** (default with color)
- **Outlined** (border only, custom variant)
- **Text** (no background)
- **Icon Buttons** (32x32px with 8px padding, border-radius: 8px)

#### Button Rules
- Font weight: Bold (600+)
- Text transform: None (preserve case)
- Icon margin: Left or right positioned with 8px gap
- Hover effect: `brightness-90 scale-1.02` for solid buttons
- Ripple effect: Disabled by default (`disableRipple: true`)
- Border radius: 6px standard, 8px for icon buttons
- Transitions: All .2s ease

#### Specific Buttons
- **Add New Button**: Dark green (`#0e4730`), with plus icon, `rounded-xl`, hover scale-1.02
- **Footer Buttons**: Cancel (outlined red), Save (lime green), both use custom styling with 8px padding

### Icons (Iconify)

#### Icon Library Standard
- **Primary Icon Source**: Iconify (`@iconify/react`)
- **Usage Principle**: Icons are supportive, not decorative overload
- **Visual Style Priority**: Use clean outline or duotone styles that match enterprise admin tone

#### Recommended Icon Sizes
- **Inline text/icon**: 16px
- **Button leading/trailing icon**: 18px
- **Icon-only button**: 18-20px inside 32x32px container
- **Section headers / card actions**: 20px
- **Empty state / status illustration icon**: 48-64px

#### Icon Colors
- Default icon color follows current text color (`currentColor`)
- For semantic states, use theme colors only (`theme.palette.success.main`, `theme.palette.error.main`, etc.)
- Do not assign arbitrary hex values directly on icons

#### Spacing & Alignment
- Keep **8px gap** between icon and label in buttons
- Vertically align icon and text center (`inline-flex items-center`)
- Preserve compact density in tables: icons should not increase row height unnecessarily

#### Interaction Rules
- Apply the same **0.2s transition** behavior as other interactive elements
- Icon-only actions must keep defined button radius (8px) and hover feedback
- Disabled actions reduce emphasis via parent disabled state; avoid custom disabled styling per icon

#### Icon Naming Convention
- Store icon names as explicit constants when reused frequently
- Prefer a single icon style family per feature area for visual consistency
- Keep semantic clarity (e.g., add, edit, delete, view, search, filter, sort)

#### Implementation Example
```typescript
// ✅ CORRECT
import { Icon } from '@iconify/react';

<Button
  variant="contained"
  color="success"
  startIcon={<Icon icon="mdi:plus" width={18} height={18} />}
>
  Add New
</Button>

// ✅ CORRECT - Icon-only action
<IconButton size="small" sx={{ borderRadius: '8px', transition: 'all .2s' }}>
  <Icon icon="mdi:pencil-outline" width={18} height={18} />
</IconButton>

// ❌ INCORRECT
<Icon icon="mdi:plus" width="21" style={{ color: '#12abef' }} />
```

### Cards
- **Background**: White (`#ffffff`)
- **Padding**: 0px default (override in content)
- **Border Radius**: 10px (default), 24px (content containers)
- **Shadow**: `box-shadow: 0px 9px 16px rgba(159, 162, 191, .18), 0px 2px 2px rgba(159, 162, 191, 0.32)`
- **Elevation 2 (card-like)**: Slightly reduced shadow
- **Elevation 24 (featured)**: Larger shadow for emphasis
- **Usage**: All form sections, detail views, modal content wrapped in cards

### Tables (DataTable Component)
- **Header Background**: `#f2f5f9` (light gray)
- **Header Text**: Uppercase, font-size 13px, font-weight bold, color `#999`
- **Row Height**: Auto (compact, data-dense)
- **Row Hover**: Background changes to `#f2f5f9`
- **Cell Padding**: Tight, standard table padding
- **Border Color**: `#ddd` (light)
- **Pagination**: Standard MUI pagination, bottom-aligned
- **Density**: Compact - minimize vertical height while maintaining readability

### Modals & Dialogs
- **Background**: `#f9fbff` (very light blue-gray)
- **Border Radius**: 16px (`rounded-2xl`)
- **Max Width**: Small dialogs (sm), Medium dialogs (sm-md)
- **Backdrop**: `rgba(0,0,0,0.45)` with `backdrop-filter: blur(4px)`
- **Shadow**: `0 4px 12px rgba(0,0,0,0.2)`
- **Header**: Flex between, title (h3 bold), close icon button
- **Content**: Dividers between sections
- **Footer**: DialogActions with Cancel/Confirm buttons
- **Close Icon**: Standard X icon, top-right corner

#### Dialog Variants
- **Confirm Dialog**: Title, description, two action buttons (Cancel/Confirm)
- **Selection Dialog**: Title, checkbox list, Apply/Remove buttons
- **Form Dialog**: Title, form fields, footer actions

### Forms & Inputs

#### Input Styles
- **Border**: `border-[#c7c7cb]` (light gray)
- **Padding**: `p-2` (8px)
- **Border Radius**: `rounded-md` (6px)
- **Background**: White
- **Font Size**: `text-sm`
- **Font Weight**: Medium (500)
- **Text Color**: `#303642` (dark)
- **Focus**: `focus:outline-none` (MUI handles focus via underline in OutlinedInput)
- **Disabled**: `disabled:opacity-100 disabled:cursor-default` (remains visible)

#### Input Types
- **Text Input** (`LabeledInput`): Standard input field
- **Select** (`SelectedInput`): Native select element
- **Multi-Select** (`MultiSelectedInput`): Custom dropdown with checkboxes, portal-based
- **Textarea**: Similar to text input (in form components)

#### Input Label Rules
- **Font Size**: `text-sm`
- **Font Weight**: Medium (500)
- **Color**: `#303642` (dark)
- **Required Indicator**: Red `(*)` appended to label
- **Spacing**: 4px gap (`space-y-1`) between label and input

#### Input States
- **Focus**: Underline changes to primary color
- **Hover**: Border color changes to `#999`
- **Disabled**: Opacity 100%, cursor not-allowed
- **Error**: Red helper text below input (MUI FormHelperText)

#### Form Validation
- **Helper Text**: Bold, red color for errors
- **Position**: Below input field with 8px margin
- **Font Size**: Slightly smaller

---

## 4. Typography System

### Font Family
- **Primary**: `SVN-Gilroy` (custom)
- **Fallback**: System sans-serif stack
- **Global Apply Rule**: Set toàn bộ app dùng `SVN-Gilroy` từ global CSS để đảm bảo đồng bộ typography.

```css
/* Global font setup */
body {
  font-family: 'SVN-Gilroy', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
}
```

### Font Weights (SVN-Gilroy)
- **Thin**: 100
- **Extra Light**: 200
- **Light**: 300
- **Regular**: 400 (default)
- **Medium**: 500
- **Semi-Bold**: 600
- **Bold**: 700

### Heading Hierarchy
```
H1: font-size 32px, font-weight bold (700), used for page titles
H2: font-size 28px, font-weight bold (700), used for section headers
H3: font-size 24px, font-weight bold (700), used for dialog titles, card titles
H4: font-size 20px, font-weight bold (700), used for subsection headers
Body: font-size 14-16px, font-weight 400-500
```

### Typography Sizes (Tailwind + MUI)
- **Title/Header**: 24-32px, bold
- **Subtitle**: 18-20px, semi-bold
- **Body**: 14-16px, regular/medium
- **Small**: 12-13px, regular/medium
- **Caption**: 12px, regular

### Text Colors
- **Primary Text**: `#223354` (dark blue-black)
- **Secondary Text**: `#6E759F` (muted blue)
- **Tertiary/Hint**: `#999` or `rgba(0,0,0,0.5)` (very light)
- **Links**: Primary color `#5569ff`

---

## 5. Color System

### Core Colors
| Usage | Hex | RGB | Name |
|-------|-----|-----|------|
| Primary Button | `#5569ff` | 85, 105, 255 | Primary Blue |
| Primary Hover | `#0e4831` | 14, 72, 49 | Dark Green (for some) |
| Lime/Green Button | `#afc932` | 175, 201, 50 | Lime Green |
| Dark Green Button | `#0e4831` | 14, 72, 49 | Dark Green |
| Secondary | `#6E759F` | 110, 117, 159 | Muted Blue |
| Success (light) | `#57CA22` | 87, 202, 34 | Bright Green |
| Warning | `#FFA319` | 255, 163, 25 | Orange |
| Error | `#FF1943` | 255, 25, 67 | Red |
| Info | `#33C2FF` | 51, 194, 255 | Cyan Blue |

### Color Variants (Auto-generated for each color)
Each color has 4 variants:
- **lighter**: 85% lighter version (used for backgrounds)
- **light**: 30% lighter version
- **main**: Full color
- **dark**: 20% darker version

Example: Primary color (`#5569ff`)
- `primary.lighter`: `rgba(85, 105, 255, 0.1)` (10% opacity, light background)
- `primary.light`: Generated with `lighten()`
- `primary.main`: `#5569ff`
- `primary.dark`: Generated with `darken()`

### Background Colors
- **Page Background**: `#f2f5f9` (light gray)
- **Card Background**: `#ffffff` (white)
- **Header Background**: `#0e4831` (dark green)
- **Sidebar Background**: `#ffffff` (white)
- **Input Background**: `#ffffff` (white)
- **Disabled Background**: `#f2f5f9` or `rgba(0,0,0,0.05)`

### Neutral Colors
- **Black**: `#223354` (dark blue-black, primary text)
- **Neutral Light**: `#f2f5f9` (very light gray)
- **Neutral Medium**: `#e5e7eb` (light border)
- **Neutral Dark**: `#999` or `#757575` (medium gray)

### Text Color on Backgrounds
- On white: Use primary/secondary colors
- On gray: Darker grays or primary
- On colored: Use white text

### Gradients (decorative, used sparingly)
- **Blue gradients** (5 variants): For backgrounds, illustrations
- **Orange gradients** (3 variants): For accents
- **Purple gradients** (2 variants): For special emphasis
- **Pink gradients** (2 variants): For highlights
- **Green gradients** (2 variants): For success states
- **Black gradients** (2 variants): For dark accents

---

## 6. Spacing System

### Base Unit
- **MUI Theme Spacing**: 9px base unit
- **In Tailwind**: Use standard 4px and 8px multiples

### Padding Scale
```
xs: 4px     (p-1)
sm: 8px     (p-2)
md: 12px    (p-3)
lg: 16px    (p-4)
xl: 24px    (p-6)
2xl: 32px   (p-8)
3xl: 40px   (p-10)
```

### Margin Rules
- **Section to Section**: 24px vertical
- **Form Group Gaps**: 12px
- **Item to Item**: 8px
- **Horizontal Spacing**: 16px (left/right padding in cards)

### Common Spacing Patterns
- **Form Field Label-Input Gap**: 4px (`space-y-1`)
- **Dialog Header-Content Gap**: 0px (border divides)
- **Dialog Content-Footer Gap**: 16px
- **List Item Gap**: 8px
- **Button Gap**: 8px horizontal

---

## 7. Interaction Design

### Hover Effects
- **Buttons**: `brightness-90 scale-1.02` (darken + slight grow)
- **Links**: Color changes to primary, underline appears
- **Table Rows**: Background becomes `#f2f5f9`
- **Menu Items**: Background becomes `rgba(primary, 0.4)`
- **Icons**: Color changes or size grows slightly

### Focus States (Keyboard Navigation)
- Input fields: Border color changes to primary, outline-none
- Buttons: No ring, handled by MUI ripple (disabled by default)
- Links: Underline appears

### Active States
- Buttons: Solid color appears, shadow may be added
- Menu Items: Color + background change
- Tabs: Selected tab has primary background + white text
- Checkboxes: Filled with primary color

### Transitions
- **Default Duration**: 0.2s (`transition: all .2s`)
- **Easing**: Ease function (default), sometimes `cubic-bezier(0.4, 0, 0.2, 1)`
- **Properties**: All (color, background, transform, shadow)
- **Disabled**: Hover effects don't apply to disabled elements

### Visual Feedback
- **Click Feedback**: Slight scale change + color shift
- **Loading**: MUI Skeleton or circular progress indicator
- **Success**: Green toast notification with white text on background
- **Error**: Red toast notification
- **Warning**: Orange/yellow toast

---

## 8. Data Visualization Patterns

### Tables
- White card with shadow
- Compact rows (minimize height)
- Even row striping (alternating background colors)
- Hover highlights entire row
- Header distinguishes with darker background `#f2f5f9`
- Pagination at bottom (standard MUI TablePagination)

### Badges & Chips
- Small rounded containers with status color
- Text color adapts to background
- Padding: 4px horizontal, 2px vertical
- Font size: 12-13px, semi-bold from `MuiChip`
- Delete icon (red) for removable chips

### Status Indicators
- **Success**: Green (`#57CA22`) background with white text/icon
- **Error**: Red (`#FF1943`) background with white text/icon
- **Warning**: Orange (`#FFA319`) background with white text/icon
- **Info**: Cyan (`#33C2FF`) background with white text/icon
- Circular (32px) or rectangular badge

### Progress/Score Display
- **Linear Progress**: `border-radius: 6px`, `height: 6px`, colored bars
- **Circular Progress**: MUI CircularProgress with primary color
- **Score As Percentage**: Text-based with percentage sign
- **Range Display**: "X of Y" format (e.g., "5 of 10")

### Lists & Menus
- Vertical lists with items
- List items have hover/active states
- Subheaders with uppercase, bold, smaller font
- Icons on left with 34px min-width alignment
- Margins between items minimize (1px)

---

## 9. UX Patterns

### Empty States
- Icon-based (large, 64-96px)
- Heading: "No data found" or similar
- Description text in secondary color
- Optional action button (Add New, Refresh)
- Centered in container with padding

### Loading States
- **Skeleton Loaders**: MUI Skeleton components
- **Spinner**: Circular progress, centered, primary color
- **Progress Bar**: NProgress at top of page
- **Disabled Interaction**: Opacity + cursor-wait during load

### Error States
- **Toast Notification**: Red background, white text, auto-dismiss (5s)
- **Inline Errors**: Red helper text below input
- **Page-Level Errors**: Modal dialog with error message + action button
- **Error Icon**: Red circle with exclamation mark (24px)

### Success/Confirmation
- **Toast Notification**: Green background, white text, auto-dismiss (3s)
- **Confirmation Dialog**: Modal with title, description, two buttons
- **Success Icon**: Green checkmark (24px) in toast

### Feedback Mechanisms
- **Toast (Sonner)**: Auto-dismiss notifications (top-right)
- **Modal Dialogs**: For important confirmations
- **Inline Messages**: Validation errors under inputs
- **Progress Indicators**: Loading bars, spinners

---

## 10. Page-Level Patterns

### List Page Pattern
**Structure**:
```
┌─ Header (dark green background) ─────┐
│  Page Title                          │
├─ Toolbar ────────────────────────────┤
│ [Filter] [Sort] [Add New Button]    │
├─ Table Section ──────────────────────┤
│ [Header Row]                         │
│ [Data Row 1] [Actions]               │
│ [Data Row 2] [Actions]               │
│ [Data Row N] [Actions]               │
├─ Pagination ─────────────────────────┤
│ "Showing X to Y of Z"                │
│ [< Prev] [Pages] [Next >]           │
└──────────────────────────────────────┘
```

**Key Features**:
- Top toolbar with filters, sorts, and add buttons
- Sortable columns (click header)
- Filterable fields
- Pagination controls at bottom
- Row actions (Edit, Delete, View Details)

### Detail Page Pattern
**Structure**:
```
┌─ Header ─────────────────────────────┐
│ Title: [Entity Name]                 │
├─ Tabs / Sections ────────────────────┤
│ [Tab 1] [Tab 2] [Tab 3]             │
├─ Content Area ───────────────────────┤
│ [Form Sections / Cards]              │
│ [Related Data / Tables]              │
│ [Additional Info]                    │
├─ Footer ─────────────────────────────┤
│ [Cancel Button] [Save Button]       │
└──────────────────────────────────────┘
```

**Key Features**:
- Tab-based navigation for different sections
- Form sections grouped in cards
- Related data shown in tables below
- Footer with action buttons (always visible)
- Status indicator (if applicable)

### Dashboard Pattern
**Structure**:
```
┌─ Header ─────────────────────────────┐
│ Dashboard Title                      │
├─ Metrics Row ────────────────────────┤
│ [Metric 1] [Metric 2] [Metric 3]   │
├─ Charts Section ─────────────────────┤
│ [Chart 1]          [Chart 2]        │
├─ Data Table ─────────────────────────┤
│ Recent Activities / Latest Records   │
└──────────────────────────────────────┘
```

**Key Features**:
- KPI/metric cards at top
- Visual charts (if applicable)
- Data tables for details
- Metrics use large, bold numbers

---

## 11. Design Constraints

### DO ✅

1. **Use MUI Components First**
   - Buttons, Dialogs, Tables, Inputs from `@mui/material`
   - Apply custom styling via `sx` prop when needed

2. **Follow Color System**
   - Use defined colors only (primary, secondary, success, error, warning, info)
   - Generate variants with `lighten()`, `darken()`, `alpha()`

3. **Maintain 0.2s Transitions**
   - All interactive elements use `.2s` transitions
   - Apply to color, background, transform, shadow

4. **Use SVN-Gilroy Font**
   - Define in global CSS (`index.css`)
   - All text automatically uses this font

5. **Respect Spacing Scale**
   - Use 8px (p-2), 12px (p-3), 16px (p-4), 24px (p-6) increments
   - Don't use arbitrary padding/margin values

6. **Dark Green (#0e4831) for Strategic Areas**
   - Header background
   - Primary action buttons (secondary to lime green)
   - Important CTAs

7. **Consistent Border Radius**
   - Inputs: 6px (rounded-md)
   - Buttons: 6-8px (rounded-md to rounded-lg)
   - Cards: 10px (rounded-lg) or 24px (rounded-3xl)
   - Icons buttons: 8px (rounded-lg)

8. **Light Gray (#f2f5f9) for Subtle Backgrounds**
   - Page background
   - Table headers
   - Divider backgrounds
   - Sidebar dividers

9. **Modal/Dialog Styling**
   - Always use `backgroundColor: #f9fbff`
   - Border: `1px solid #ccc` (optional)
   - Border radius: `16px`
   - Backdrop blur: `blur(4px)`

10. **Use Iconify Consistently**
  - Use `@iconify/react` as the default icon source
  - Keep icon sizes in approved scale (16, 18, 20, 48-64)
  - Use `currentColor` or `theme.palette.*` for icon color

### DO NOT ❌

1. **Don't Use Custom Colors**
   - No arbitrary hex codes (#abc123)
   - Must use theme colors from `PureLightTheme`

2. **Don't Create New Button Variants**
   - Stick to: Primary, Success, Danger, Warning, Custom (outlined)
   - Don't add new color combinations

3. **Don't Use Rounded Corners Other Than Defined**
   - No `rounded-full`, `rounded-none`, or custom amounts
   - Use: 6px, 8px, 10px, 12px, 16px, 24px only

4. **Don't Break the Layout Grid**
   - Sidebar width: Always 290px
   - Header height: Always 80px
   - Content max-width: Follow container naturally

5. **Don't Skip Transitions**
   - All hover, click, and state changes need 0.2s transitions
   - Instant changes feel broken

6. **Don't Use Non-MUI Inputs**
   - Except where necessary (LabeledInput, SelectedInput for custom styling)
   - Default to MUI TextField, Select, Checkbox, Radio

7. **Don't Apply Ripple Effects to Buttons**
   - `disableRipple: true` is set globally
   - Maintain this for clean look

8. **Don't Use Arbitrary Fonts**
   - SVN-Gilroy only
   - No fallbacks to serif fonts

9. **Don't Mix Light and Dark Modes**
   - Theme is Light only
   - No dark mode variants

10. **Don't Change Shadow Definitions**
    - Use predefined shadows: `shadows.card`, `shadows.cardSm`, `shadows.cardLg`
    - Don't create custom box-shadow values

11. **Don't Mix Icon Libraries Randomly**
  - Avoid combining unrelated icon packs in the same screen without purpose
  - Do not hardcode icon colors/sizes outside defined standards

---

## 12. AI Agent Guidelines

### How to Extend UI Without Breaking Style

#### Adding New Components
1. **Check if MUI has it** → Use that first
2. **If not, create a wrapper** around MUI or Tailwind
3. **Apply theme colors only** (no hardcoded hex)
4. **Inherit spacing and typography** from global theme

#### Creating New Pages
1. Use `SidebarLayout` as wrapper
2. Follow "List Page", "Detail Page", or "Dashboard" pattern from Section 10
3. Apply consistent padding/margins from spacing scale
4. Use DataTable for any lists

#### Modifying Existing Components
1. Don't remove borders/shadows (they're intentional)
2. Maintain hover/focus states
3. Keep 0.2s transitions
4. If changing colors, use `theme.palette.*` references

#### Color Consistency
```typescript
// ✅ CORRECT
const myColor = theme.palette.primary.main;
const lightBg = theme.palette.primary.lighter;

// ❌ INCORRECT
const myColor = '#5569ff';
const lightBg = '#f0f2ff';
```

#### Spacing Consistency
```typescript
// ✅ CORRECT - Using Tailwind scale
<div className="p-4 gap-3 mb-6">

// ❌ INCORRECT - Using arbitrary values
<div style={{padding: '14px', gap: '13px', marginBottom: '20px'}}>
```

#### Typography Consistency
```typescript
// ✅ CORRECT - Using MUI Typography variants
<Typography variant="h4" fontWeight="bold">

// ❌ INCORRECT - Hardcoding sizes
<Typography sx={{fontSize: '20px', fontWeight: 700}}>
```

#### Button Usage
```typescript
// ✅ CORRECT
<Button variant="contained" color="primary">Save</Button>
<ButtonWithIcon color="success" label="Add New" icon="add" />

// ❌ INCORRECT
<button style={{background: '#afc932', padding: '8px'}}>Save</button>
```

#### Form Fields
```typescript
// ✅ CORRECT
<LabeledInput 
  label="Name"
  value={name}
  onChange={handleChange}
  isRequire
/>

// ❌ INCORRECT
<input 
  placeholder="Name"
  style={{padding: '8px', border: '1px solid #ccc'}}
/>
```

#### State Feedback
```typescript
// ✅ CORRECT
if (loading) return <CircularProgress />;
if (error) showToast('error', message);
if (success) showToast('success', 'Saved!');

// ❌ INCORRECT
<div style={{color: 'red'}}>Error occurred</div>
```

#### Iconify Usage
```typescript
// ✅ CORRECT
import { Icon } from '@iconify/react';

<Button
  variant="outlined"
  color="primary"
  startIcon={<Icon icon="mdi:filter-variant" width={18} height={18} />}
>
  Filter
</Button>

// ✅ CORRECT - inherit color from parent
<Typography color="text.secondary" className="inline-flex items-center gap-2">
  <Icon icon="mdi:information-outline" width={16} height={16} />
  Note
</Typography>

// ❌ INCORRECT
<Icon icon="mdi:information-outline" style={{ color: '#00ffcc', fontSize: '19px' }} />
```

### Reusability First
1. Check `src/components/Common/` for existing components
2. Extend existing components via props rather than duplicating
3. Keep props well-typed (use TypeScript interfaces)
4. Document complex component props

### Testing Against Design System
- [ ] All colors from `theme.palette`
- [ ] All spacing from 8px scale
- [ ] All interactions have 0.2s transitions
- [ ] Font is SVN-Gilroy (inherited globally)
- [ ] Border radius matches defined set
- [ ] Shadows use predefined values
- [ ] Active/Hover/Focus states implemented
- [ ] Mobile responsive (hidden sidebar below lg)

---

## Quick Reference: Common MUI Overrides

### Buttons
```typescript
<Button 
  variant="contained" 
  color="primary"
  sx={{
    fontWeight: 'bold',
    textTransform: 'none',
    padding: '8px 20px',
    borderRadius: '6px'
  }}
>
  Click Me
</Button>
```

### Inputs
```typescript
<TextField
  label="Name"
  variant="outlined"
  fullWidth
  sx={{
    '& .MuiOutlinedInput-input': {
      padding: '8px'
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.action.hover
    }
  }}
/>
```

### Modals
```typescript
<Dialog
  open={open}
  maxWidth="sm"
  fullWidth
  PaperProps={{
    sx: {
      borderRadius: '16px',
      backgroundColor: '#f9fbff',
      boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
    }
  }}
>
```

### Tables
```typescript
<TableContainer component={Paper}>
  <Table>
    <TableHead sx={{ backgroundColor: '#f2f5f9' }}>
      <TableRow>
        <TableCell sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
          Column
        </TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow hover sx={{ transition: 'all .2s' }}>
        <TableCell>Data</TableCell>
      </TableRow>
    </TableBody>
  </Table>
</TableContainer>
```

---

## 13. AI Agent Implementation Guide

### How to Use This Document as an Agent

This section prepares you (AI agent) to implement the IKIGAI design system across the entire codebase.

#### 1. **Reading Order for Agents**
1. Start with "Summary Table" (Section below) - Get all tokens in one view
2. Read "Token Quick Reference" - For copy-paste values
3. Review "Component Templates" - Ready-to-use code blocks
4. Check "Pre-Flight Validation" - Ensure compliance before commit

#### 2. **Task Workflow for Agents**
```
TASK START
├─ Read this design system file fully
├─ Extract all color/spacing/radius tokens
├─ Check existing code for non-compliance
├─ Plan refactor strategy
├─ Apply changes incrementally
│  ├─ Update theme setup first
│  ├─ Refactor component styles
│  ├─ Update page layouts
│  └─ Test responsive behavior
├─ Run validation checklist
└─ TASK COMPLETE
```

#### 3. **Priority Enforcement Levels**

**STRICT** (Cannot be broken):
- ✅ Color palette - Must come from theme only
- ✅ Font family - SVN-Gilroy globally
- ✅ Border radius set - 6, 8, 10, 12, 16, 24px only
- ✅ Spacing scale - 4, 8, 12, 16, 24, 32, 40px multiples
- ✅ Transition duration - Always .2s

**FLEXIBLE** (Can adapt per context):
- Layout structure (1, 2, 3 columns)
- Component organization
- Content card grouping
- Desktop vs mobile behavior (but keep sidebar 290px when visible)

#### 4. **For Each Component You Modify**

```typescript
// STEP 1: Check theme imports
import { useTheme } from '@mui/material';

// STEP 2: Get color from theme (NEVER hardcode)
const theme = useTheme();
const primaryColor = theme.palette.primary.main;
const errorColor = theme.palette.error.main;

// STEP 3: Apply spacing from scale
// ✅ GOOD: p-2 (8px), p-3 (12px), p-4 (16px)
// ❌ BAD: p-3.5 (14px), p-5 (20px)

// STEP 4: Use consistent border radius
// ✅ GOOD: rounded-md (6px), rounded-lg (8px), rounded-2xl (16px)
// ❌ BAD: rounded-sm (4px), rounded-xl (12px), rounded-3xl (24px)

// STEP 5: Add transition to interactions
// ✅ GOOD: transition: all .2s ease;
// ❌ BAD: transition: color 0.3s linear;
```

#### 5. **When Creating New Components**

**Question Tree**:
```
Is it a standard UI element?
├─ YES → Use MUI component (@mui/material)
└─ NO → Use Tailwind + theme tokens

Is MUI component sufficient?
├─ YES → Use directly with sx prop
└─ NO → Wrap it with custom styling (via sx, not useState)

Need custom colors?
├─ YES → Use theme.palette.[semantic name]
└─ NO → Use default (inherit from parent)

Components to create:
├─ ButtonWithIcon   → Use theme colors + Iconify
├─ LabeledInput    → Wrap TextField with label
├─ DialogHeader    → Consistent title + close icon
├─ DataTable       → MUI Table + custom header style
└─ StatusBadge     → MUI Chip with semantic colors
```

#### 6. **Color Application Algorithm**

```javascript
// ABSOLUTE RULE - Use this algorithm for EVERY color choice

const getColorForAction = (action) => {
  switch(action) {
    case 'primary':
    case 'save':
    case 'submit': return theme.palette.primary.main;      // #5569ff
    
    case 'success':
    case 'confirm': return theme.palette.success.main;     // #57CA22
    
    case 'danger':
    case 'delete':
    case 'error':   return theme.palette.error.main;       // #FF1943
    
    case 'warning': return theme.palette.warning.main;     // #FFA319
    
    case 'info':
    case 'help':    return theme.palette.info.main;        // #33C2FF
    
    case 'secondary':
    case 'muted':   return theme.palette.secondary.main;   // #6E759F
    
    case 'accent':
    case 'add':     return '#afc932';                       // Lime Green
    
    default:        return theme.palette.text.primary;     // #223354
  }
};

// NEVER do this:
// ❌ const color = '#5569ff';  (hardcoded)
// ❌ const color = props.color;  (passed via props)

// ALWAYS do this:
// ✅ const color = theme.palette.primary.main;
// ✅ const color = getColorForAction(action);
```

#### 7. **Spacing Application Algorithm**

```javascript
// ABSOLUTE RULE - Use this spacing grid

const SPACING = {
  // Micro
  xs: '4px',      // p-1, gap-1
  sm: '8px',      // p-2, gap-2
  md: '12px',     // p-3, gap-3
  lg: '16px',     // p-4, gap-4
  xl: '24px',     // p-6, gap-6
  '2xl': '32px',  // p-8, gap-8
  '3xl': '40px',  // p-10, gap-10
};

// Context-dependent spacing:
const STANDARD_GAPS = {
  sectionToSection: '24px',    // margin-y between <section>s
  cardToCard: '20px',          // gap in grid
  groupInForm: '12px',         // gap between form groups
  itemToItem: '8px',           // gap between list items
  labelToInput: '4px',         // space-y-1 (label above input)
  iconToText: '8px',           // gap between icon and label
};

// NEVER mix arbitrary spacing:
// ❌ p-[14px], gap-[18px], m-[22px]
// ✅ Only use values from SPACING object
```

#### 8. **Border Radius Rules for Agents**

```typescript
// ABSOLUTE SET - Only these 6 values allowed:

const BORDER_RADIUS = {
  'rounded-md': '6px',      // Inputs, small buttons, icon buttons
  'rounded-lg': '8px',      // Buttons, select dropdowns
  'rounded-xl': '12px',     // Card internal elements (rare)
  '2xl': '16px',            // Modal dialogs
  '3xl': '24px',            // Main content cards, containers
  'rounded-full': '9999px', // Chips, badges, round buttons
};

// Applied to:
const RADIUS_USAGE = {
  input: '6px',                    // All form inputs
  button: '6-8px',                 // Regular buttons
  iconButton: '8px',               // Icon buttons
  chip: '100px' (use rounded-full),
  card: '10px',                    // Standard cards
  contentContainer: '24px',        // Main container
  modal: '16px',                   // Dialog/modal
  badge: 'rounded-full',           // Status badges
};

// WRONG:
// ❌ borderRadius: '5px'
// ❌ className="rounded-sm"
// ❌ borderRadius: '7px'

// CORRECT:
// ✅ borderRadius: '6px'
// ✅ className="rounded-md"
// ✅ borderRadius: '8px'
```

#### 9. **Validation Checklist for Agents**

Before submitting code, run this checklist:

```typescript
class StyleValidation {
  // Check every color reference
  validateColors() {
    const FORBIDDEN = ['#fff', '#000', '#aaa', '#123456'];
    // Scan code for hardcoded hex values
    // At least 95% should use theme.palette.*
  }

  // Check every spacing value
  validateSpacing() {
    const ALLOWED = [4, 8, 12, 16, 24, 32, 40];
    // All padding/margin must be multiple of these
    // Percentage and vw/vh allowed for responsive
  }

  // Check border radius
  validateRadius() {
    const ALLOWED = ['6px', '8px', '10px', '12px', '16px', '24px'];
    // All borderRadius must match exactly
  }

  // Check transitions
  validateTransitions() {
    // All interactive elements must have: transition: all .2s ease;
    // No other durations allowed (0.3s, 0.15s, etc.)
  }

  // Check font
  validateFont() {
    // Global font-family must be SVN-Gilroy
    // No individual component overrides
  }

  // Check MUI usage
  validateMUIUsage() {
    // Prefer MUI components for standard UI
    // Custom styling via sx prop, not inline styles
  }
}
```

#### 10. **Common Refactoring Patterns**

**Pattern 1: Hardcoded Color → Theme Color**
```typescript
// BEFORE
<Button style={{ backgroundColor: '#5569ff' }}>

// AFTER
<Button sx={{ backgroundColor: theme.palette.primary.main }}>
```

**Pattern 2: Arbitrary Spacing → Scale**
```typescript
// BEFORE
<Box sx={{ padding: '14px', marginBottom: '20px' }}>

// AFTER
<Box sx={{ p: 3, mb: 6 }}>  // 12px and 24px respectively
```

**Pattern 3: Inconsistent Radius → System Radius**
```typescript
// BEFORE
<Card sx={{ borderRadius: '12px' }}>

// AFTER
<Card sx={{ borderRadius: '10px' }}>  // Standard card radius
```

**Pattern 4: Missing Transition → Add Standard**
```typescript
// BEFORE
<Button sx={{ '&:hover': { backgroundColor: newColor } }}>

// AFTER
<Button sx={{ 
  '&:hover': { 
    backgroundColor: newColor,
    transition: 'all .2s ease'
  } 
}}>
```

---

## Summary Table

| Element | Value | Notes |
|---------|-------|-------|
| Primary Color | #5569ff | Blue, links, active states |
| Primary Button | #afc932 | Lime green, main CTA |
| Success Color | #57CA22 | Green success states |
| Error Color | #FF1943 | Red errors |
| Warning Color | #FFA319 | Orange warnings |
| Base Font | SVN-Gilroy | All weights available |
| Spacing Base | 8px | 4, 8, 12, 16, 24, 32px scale |
| Border Radius | 6-24px | Never arbitrary values |
| Transition | 0.2s | All interactive elements |
| Sidebar Width | 290px | Fixed, hidden mobile |
| Header Height | 80px | Fixed position |
| Page Background | #f2f5f9 | Light gray |
| Card Background | #ffffff | White |
| Header Background | #0e4831 | Dark green |

---

## Token Quick Reference (Copy-Paste Ready)

### Color Tokens
```javascript
// IKIGAI Theme Colors - Use these ONLY
export const THEME_COLORS = {
  // Primary (Blue)
  primary: '#5569ff',
  primaryLight: '#7a8cff',
  primaryDark: '#2e4ccc',
  
  // Action (Lime)
  accent: '#afc932',
  accentLight: '#c2d947',
  accentDark: '#90a825',
  
  // Status
  success: '#57CA22',
  error: '#FF1943',
  warning: '#FFA319',
  info: '#33C2FF',
  
  // Semantic (Dark Green)
  darkGreen: '#0e4831',
  darkGreenLight: '#1a6d47',
  darkGreenDark: '#092d1f',
  
  // Neutral
  secondary: '#6E759F',
  text: '#223354',
  textSecondary: '#6E759F',
  textMuted: '#999999',
  background: '#f2f5f9',
  card: '#ffffff',
  border: '#ddd',
  divider: '#e5e7eb'
};
```

### Spacing Tokens
```javascript
// IKIGAI Spacing Scale
export const SPACING = {
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '24px',
  '2xl': '32px',
  '3xl': '40px'
};

// Common gaps
export const GAPS = {
  sectionGap: '24px',
  cardGap: '20px',
  formGroupGap: '12px',
  itemGap: '8px',
  labelInputGap: '4px',
  iconTextGap: '8px'
};
```

### Border Radius Tokens
```javascript
// IKIGAI Border Radiuses
export const BORDER_RADIUS = {
  sm: '6px',    // inputs, small elements
  md: '8px',    // buttons, dropdowns
  lg: '10px',   // cards
  xl: '12px',   // internal card elements
  '2xl': '16px', // modals
  '3xl': '24px', // main containers
  full: '9999px' // chips, badges
};
```

### Transition Tokens
```javascript
// IKIGAI Motion
export const TRANSITIONS = {
  standard: 'all 0.2s ease',
  fast: 'all 0.1s ease',
  slow: 'all 0.3s ease'
};

// ALWAYS use 'standard' for interactive elements
```

---

**Last Updated**: 2026-03-20  
**Status**: Design System Locked - AI-Ready  
**Version**: 2.0 (AI Agent Edition)  
**Authority**: Senior Design System Architect
