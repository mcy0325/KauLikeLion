export const lightTheme = {
  colors: {
    // Primary Colors
    primary: '#FF7710',        // LIKELION orange
    primaryHover: '#E66600',
    primaryLight: '#FFA040',

    // Secondary Colors
    secondary: '#1E3A8A',      // Deep aviation blue
    secondaryHover: '#1E40AF',

    // Accent Colors
    accent: '#60A5FA',         // Bright sky blue
    accentLight: '#93C5FD',

    // Background Colors
    background: '#FFFFFF',
    backgroundAlt: '#F8FAFC',  // Cloud white

    // Text Colors
    text: '#1F2937',
    textSecondary: '#6B7280',
    textLight: '#9CA3AF',

    // UI Elements
    border: '#E5E7EB',
    cardBg: 'rgba(255, 255, 255, 0.9)',
    glassBg: 'rgba(255, 255, 255, 0.1)',
    glassBlur: 'blur(10px)',
  },

  gradients: {
    sky: 'linear-gradient(180deg, #0F172A 0%, #1E3A8A 50%, #3B82F6 100%)',
    sunset: 'linear-gradient(135deg, #FF7710 0%, #FBBF24 100%)',
    heroOverlay: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 58, 138, 0.6) 100%)',
  },

  fonts: {
    primary: '"Dunggeunmiso-R", sans-serif',
    english: '"BalooBhai2", cursive',
    code: '"Roboto", monospace',
  },

  fontSizes: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem',// 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem',    // 48px
    '6xl': '4.5rem',  // 72px
  },

  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    '2xl': '4rem',
    '3xl': '6rem',
  },

  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1280px',
  },

  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    glow: '0 0 20px rgba(255, 119, 16, 0.5)',
  },

  transitions: {
    fast: '150ms ease-in-out',
    medium: '300ms ease-in-out',
    slow: '500ms ease-in-out',
  },

  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modalBackdrop: 1040,
    modal: 1050,
    popover: 1060,
    tooltip: 1070,
  },
};

export const darkTheme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,

    // Background Colors
    background: '#0F172A',     // Dark navy
    backgroundAlt: '#1E293B',

    // Text Colors
    text: '#F8FAFC',
    textSecondary: '#CBD5E1',
    textLight: '#94A3B8',

    // UI Elements
    border: '#334155',
    cardBg: 'rgba(30, 41, 59, 0.8)',
    glassBg: 'rgba(30, 41, 59, 0.3)',
    glassBlur: 'blur(20px)',
  },

  gradients: {
    ...lightTheme.gradients,
    sky: 'linear-gradient(180deg, #000000 0%, #1E3A8A 50%, #3B82F6 100%)',
    heroOverlay: 'linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(30, 58, 138, 0.7) 100%)',
  },
};
