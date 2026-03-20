/**
 * IKIGAI Design System - Token Definitions
 * 
 * This file serves as the single source of truth for all design tokens.
 * Use these values across the entire project.
 * 
 * ✅ AI AGENTS: Import this file and use all values from here
 * ✅ DEVELOPERS: Refer to this for copy-paste values
 * 
 * Version: 2.0 (AI-Ready)
 * Last Updated: 2026-03-20
 */

// ============================================================================
// COLOR TOKENS
// ============================================================================

export const IKIGAI_COLORS = {
  // Primary (Blue)
  primary: '#004831',
  primaryLight: '#7a8cff',
  primaryDark: '#2e4ccc',
  primaryLighter: 'rgba(85, 105, 255, 0.1)',

  // Accent (Lime Green) - Main CTA button
  accent: '#afc932',
  accentLight: '#c2d947',
  accentDark: '#90a825',
  accentLighter: 'rgba(175, 201, 50, 0.1)',

  // Semantic (Dark Green)
  darkGreen: '#0e4831',
  darkGreenLight: '#1a6d47',
  darkGreenDark: '#092d1f',
  darkGreenLighter: 'rgba(14, 72, 49, 0.1)',

  // Status Colors
  success: '#57CA22',
  successLight: '#85e042',
  successDark: '#3d9015',
  successLighter: 'rgba(87, 202, 34, 0.1)',

  error: '#FF1943',
  errorLight: '#ff5c7d',
  errorDark: '#cc0033',
  errorLighter: 'rgba(255, 25, 67, 0.1)',

  warning: '#FFA319',
  warningLight: '#ffc740',
  warningDark: '#cc8200',
  warningLighter: 'rgba(255, 163, 25, 0.1)',

  info: '#33C2FF',
  infoLight: '#66d9ff',
  infoDark: '#0098cc',
  infoLighter: 'rgba(51, 194, 255, 0.1)',

  // Neutral - Secondary (Muted Blue)
  secondary: '#6E759F',
  secondaryLight: '#8a92b4',
  secondaryDark: '#525b7f',
  secondaryLighter: 'rgba(110, 117, 159, 0.1)',

  // Text Colors
  textPrimary: '#0e4831',
  textSecondary: '#6E759F',
  textMuted: '#999999',
  textInverse: '#FFFFFF',

  // Background Colors
  background: '#f2f5f9',
  backgroundDark: '#e5e7eb',
  backgroundLight: '#f9fbff',

  // Surface Colors
  surface: '#ffffff',
  surfaceHover: '#f2f5f9',
  surfaceActive: '#e5e7eb',
  surfaceDisabled: 'rgba(0, 0, 0, 0.05)',

  // Border Colors
  border: '#ddd',
  borderLight: '#e5e7eb',
  borderDark: '#999999',

  // Divider
  divider: '#e5e7eb',

  // Transparent variants
  blackOverlay: 'rgba(0, 0, 0, 0.5)',
  whiteOverlay: 'rgba(255, 255, 255, 0.8)',
} as const;

// ============================================================================
// SPACING TOKENS
// ============================================================================

export const IKIGAI_SPACING = {
  // Base unit (all other values are multiples)
  unit: 4,

  // Scale
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '24px',
  '2xl': '32px',
  '3xl': '40px',

  // Numeric values (for calculations)
  unitNum: 4,
  xsNum: 4,
  smNum: 8,
  mdNum: 12,
  lgNum: 16,
  xlNum: 24,
  '2xlNum': 32,
  '3xlNum': 40,
} as const;

// Common spacing patterns
export const IKIGAI_SPACING_PATTERNS = {
  // Section spacing
  sectionGapVertical: '24px',
  sectionPadding: '24px',

  // Card spacing
  cardGapVertical: '20px',
  cardPadding: '24px',
  cardPaddingCompact: '16px',

  // Form spacing
  formGroupGap: '12px',
  labelInputGap: '4px', // space-y-1
  formSectionGap: '24px',

  // List/Table spacing
  itemGap: '8px',
  rowGap: '8px',

  // Icon + text spacing
  iconTextGap: '8px',
  iconButtonPadding: '8px',

  // Component spacing
  buttonGroupGap: '8px',
  tabGapHorizontal: '0px', // Tabs are adjacent
  chipGap: '8px',

  // Modal/Dialog spacing
  modalHeaderPadding: '24px',
  modalContentPadding: '24px',
  modalFooterPadding: '16px',
  modalHeaderFooterGap: '0px', // Divider separates
  modalContentFooterGap: '16px',

  // Header spacing
  headerPadding: '16px 24px',
  headerLogoMargin: '8px',

  // Sidebar spacing
  sidebarPadding: '16px',
  sidebarItemGap: '8px',
  sidebarGroupGap: '16px',
} as const;

// ============================================================================
// BORDER RADIUS TOKENS
// ============================================================================

export const IKIGAI_RADIUS = {
  // Allowed values ONLY
  sm: '6px',        // Inputs, small elements, icon buttons
  md: '8px',        // Buttons, dropdowns, standard buttons
  lg: '10px',       // Cards, standard cards
  xl: '12px',       // Internal card elements
  '2xl': '16px',    // Modals, dialogs, large containers
  '3xl': '24px',    // Main content containers
  full: '9999px',   // Chips, badges, fully rounded
} as const;

// Usage mapping
export const IKIGAI_RADIUS_USAGE = {
  input: '6px',
  button: '6px',
  buttonLarge: '8px',
  iconButton: '8px',
  chip: '9999px',
  badge: '9999px',
  card: '10px',
  cardContent: '10px',
  modal: '16px',
  dialog: '16px',
  contentContainer: '24px',
  mainContainer: '24px',
  dropdown: '8px',
  select: '6px',
} as const;

// ============================================================================
// TYPOGRAPHY TOKENS
// ============================================================================

export const IKIGAI_TYPOGRAPHY = {
  // Font family (PRIMARY - must be applied globally)
  fontFamily: "'SVN-Gilroy', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontFamilyMonospace: "'Courier New', monospace",

  // Font weights
  weights: {
    thin: 100,
    extralight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  } as const,

  // Heading styles
  h1: {
    fontSize: '32px',
    fontWeight: 700,
    lineHeight: 1.25,
  },
  h2: {
    fontSize: '28px',
    fontWeight: 700,
    lineHeight: 1.29,
  },
  h3: {
    fontSize: '24px',
    fontWeight: 700,
    lineHeight: 1.33,
  },
  h4: {
    fontSize: '20px',
    fontWeight: 700,
    lineHeight: 1.4,
  },

  // Body text
  body: {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: 1.6,
  },
  bodySmall: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: 1.6,
  },
  bodyMedium: {
    fontSize: '15px',
    fontWeight: 500,
    lineHeight: 1.6,
  },

  // Caption
  caption: {
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: 1.5,
  },
  captionMedium: {
    fontSize: '13px',
    fontWeight: 500,
    lineHeight: 1.5,
  },

  // Small
  small: {
    fontSize: '12px',
    fontWeight: 400,
  },

  // Extra small (rarely used)
  xs: {
    fontSize: '11px',
    fontWeight: 400,
  },
} as const;

// ============================================================================
// TRANSITION/MOTION TOKENS
// ============================================================================

export const IKIGAI_TRANSITIONS = {
  // Duration (in seconds)
  fast: '0.1s',
  standard: '0.2s',
  slow: '0.3s',

  // Easing functions
  easeInOut: 'ease-in-out',
  easeOut: 'ease-out',
  easeIn: 'ease-in',
  linear: 'linear',
  cubic: 'cubic-bezier(0.4, 0, 0.2, 1)',

  // Complete transition strings
  standardAll: 'all 0.2s ease',
  standardColor: 'color 0.2s ease',
  standardBackground: 'background 0.2s ease',
  standardTransform: 'transform 0.2s ease',
  standardOpacity: 'opacity 0.2s ease',
  standardBoxShadow: 'box-shadow 0.2s ease',

  // Special cases
  hover: 'all 0.2s ease',
  focus: 'all 0.2s ease',
  active: 'all 0.2s ease',
  disabled: 'none',
} as const;

// ============================================================================
// SHADOW TOKENS
// ============================================================================

export const IKIGAI_SHADOWS = {
  // Elevation shadows (from MUI inspiration)
  none: 'none',
  sm: '0 2px 8px rgba(159, 162, 191, 0.12)',
  md: '0 4px 20px rgba(159, 162, 191, 0.18)',
  lg: '0 8px 32px rgba(232, 0, 45, 0.12)',
  xl: '0 12px 40px rgba(159, 162, 191, 0.20)',

  // Specific use cases
  card: '0px 9px 16px rgba(159, 162, 191, .18), 0px 2px 2px rgba(159, 162, 191, 0.32)',
  cardSm: '0 2px 8px rgba(159, 162, 191, 0.12)',
  cardLg: '0 8px 32px rgba(159, 162, 191, 0.20)',
  modal: '0 4px 12px rgba(0, 0, 0, 0.2)',
  input: '0 2px 4px rgba(0, 0, 0, 0.08)',
  hover: '0 8px 24px rgba(159, 162, 191, 0.15)',
  active: '0 4px 12px rgba(159, 162, 191, 0.15)',
} as const;

// ============================================================================
// COMPONENT TOKENS
// ============================================================================

export const IKIGAI_COMPONENTS = {
  // Button tokens
  button: {
    paddingSmall: '8px 16px',
    paddingMedium: '12px 24px',
    paddingLarge: '16px 32px',
    borderRadius: '6px',
    fontWeight: 600,
    transition: 'all 0.2s ease',
    textTransform: 'none', // preserve case
  },

  // Input tokens
  input: {
    padding: '12px 16px',
    borderRadius: '6px',
    border: '1.5px solid #c7c7cb',
    fontSize: '14px',
    fontWeight: 500,
    color: '#303642',
    backgroundColor: '#ffffff',
  },

  // Chip/Badge tokens
  chip: {
    padding: '4px 12px',
    borderRadius: '9999px',
    fontSize: '12px',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },

  // Card tokens
  card: {
    padding: '24px',
    borderRadius: '10px',
    backgroundColor: '#ffffff',
    boxShadow: '0px 9px 16px rgba(159, 162, 191, .18), 0px 2px 2px rgba(159, 162, 191, 0.32)',
  },

  // Modal/Dialog tokens
  modal: {
    maxWidth: 'sm',
    borderRadius: '16px',
    backgroundColor: '#f9fbff',
    backdropFilter: 'blur(4px)',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
  },

  // Header tokens
  header: {
    height: '80px',
    backgroundColor: '#0e4831',
    position: 'fixed',
    top: 0,
    zIndex: 1000,
  },

  // Sidebar tokens
  sidebar: {
    width: '290px',
    position: 'fixed',
    left: 0,
  },

  // Table header tokens
  tableHeader: {
    backgroundColor: '#f2f5f9',
    fontSize: '13px',
    fontWeight: 'bold',
    color: '#999',
    textTransform: 'uppercase',
  },
} as const;

// ============================================================================
// BREAKPOINTS (Responsive Design)
// ============================================================================

export const IKIGAI_BREAKPOINTS = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1440,
} as const;

// ============================================================================
// Z-INDEX TOKENS
// ============================================================================

export const IKIGAI_Z_INDEX = {
  hide: -1,
  auto: 'auto',
  base: 0,
  floating: 10,
  dropdown: 100,
  sticky: 200,
  fixed: 300,
  modalBackdrop: 400,
  modal: 500,
  popover: 600,
  tooltip: 700,
  notification: 800,
} as const;

// ============================================================================
// SEMANTIC USAGE MAPPING (For AI agents)
// ============================================================================

export const IKIGAI_SEMANTIC_COLORS = {
  // Action intent
  primary: IKIGAI_COLORS.primary,
  secondary: IKIGAI_COLORS.secondary,
  success: IKIGAI_COLORS.success,
  error: IKIGAI_COLORS.error,
  warning: IKIGAI_COLORS.warning,
  info: IKIGAI_COLORS.info,

  // Button variants
  buttonPrimary: IKIGAI_COLORS.primary,
  buttonSecondary: IKIGAI_COLORS.secondary,
  buttonSuccess: IKIGAI_COLORS.darkGreen,
  buttonDanger: IKIGAI_COLORS.error,
  buttonWarning: IKIGAI_COLORS.warning,
  buttonAccent: IKIGAI_COLORS.accent, // Lime green

  // Text variants
  textDefault: IKIGAI_COLORS.textPrimary,
  textMuted: IKIGAI_COLORS.textMuted,
  textInverse: IKIGAI_COLORS.textInverse,
  textLink: IKIGAI_COLORS.primary,

  // Background variants
  backgroundDefault: IKIGAI_COLORS.background,
  backgroundSurface: IKIGAI_COLORS.surface,
  backgroundAccent: IKIGAI_COLORS.accent,

  // State colors
  stateHover: IKIGAI_COLORS.surfaceHover,
  stateActive: IKIGAI_COLORS.surfaceActive,
  stateDisabled: IKIGAI_COLORS.surfaceDisabled,
  stateFocus: IKIGAI_COLORS.primary,
} as const;

// ============================================================================
// USAGE GUIDE
// ============================================================================

/**
 * HOW TO USE THESE TOKENS IN YOUR CODE:
 * 
 * 1. Import the tokens you need:
 *    import { IKIGAI_COLORS, IKIGAI_SPACING, IKIGAI_RADIUS } from './IKIGAI-tokens';
 * 
 * 2. Use them in your components:
 *    const MyButton = styled(Button)`
 *      background-color: ${IKIGAI_COLORS.button};
 *      padding: ${IKIGAI_SPACING.md};
 *      border-radius: ${IKIGAI_RADIUS.md};
 *      transition: ${IKIGAI_TRANSITIONS.standard};
 *    `;
 * 
 * 3. Or in inline styles:
 *    <Box sx={{
 *      backgroundColor: IKIGAI_COLORS.surface,
 *      gap: IKIGAI_SPACING.md,
 *      borderRadius: IKIGAI_RADIUS.lg,
 *    }}>
 * 
 * 4. Or in Tailwind (if using):
 *    className="bg-white gap-3 rounded-lg"
 *    (Map Tailwind values to our scale)
 * 
 * RULE: Never use hardcoded values! Always import from this file.
 * 
 * Example of WRONG:
 *    backgroundColor: '#5569ff'  ❌
 * 
 * Example of CORRECT:
 *    backgroundColor: IKIGAI_COLORS.primary  ✅
 */

// ============================================================================
// VALIDATION HELPERS (For AI agents)
// ============================================================================

/**
 * Check if a color is valid within IKIGAI color system
 */
export function isValidColor(color: string): boolean {
  const allColors = Object.values(IKIGAI_COLORS);
  return allColors.includes(color as any);
}

/**
 * Check if spacing is valid within IKIGAI scale
 */
export function isValidSpacing(value: string | number): boolean {
  const spacingValues = Object.values(IKIGAI_SPACING);
  if (typeof value === 'string') {
    return spacingValues.includes(value);
  }
  // Check if it's a multiple of 4
  return typeof value === 'number' && value % 4 === 0;
}

/**
 * Check if border radius is valid
 */
export function isValidRadius(value: string): boolean {
  const radiusValues = Object.values(IKIGAI_RADIUS);
  return radiusValues.includes(value);
}

/**
 * Get all allowed color values (for validation)
 */
export function getAllowedColors(): string[] {
  return Object.values(IKIGAI_COLORS) as string[];
}

/**
 * Get all allowed spacing values
 */
export function getAllowedSpacing(): string[] {
  return Object.values(IKIGAI_SPACING) as string[];
}

/**
 * Get all allowed radius values
 */
export function getAllowedRadius(): string[] {
  return Object.values(IKIGAI_RADIUS) as string[];
}

// ============================================================================
// EXPORT EVERYTHING
// ============================================================================

export const IKIGAI_DESIGN_SYSTEM = {
  colors: IKIGAI_COLORS,
  spacing: IKIGAI_SPACING,
  spacingPatterns: IKIGAI_SPACING_PATTERNS,
  radius: IKIGAI_RADIUS,
  radiusUsage: IKIGAI_RADIUS_USAGE,
  typography: IKIGAI_TYPOGRAPHY,
  transitions: IKIGAI_TRANSITIONS,
  shadows: IKIGAI_SHADOWS,
  components: IKIGAI_COMPONENTS,
  breakpoints: IKIGAI_BREAKPOINTS,
  zIndex: IKIGAI_Z_INDEX,
  semanticColors: IKIGAI_SEMANTIC_COLORS,
} as const;

export default IKIGAI_DESIGN_SYSTEM;
