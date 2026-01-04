export const lightTheme = {
  colors: {
    // Primary Colors - LIKELION
    primary: '#ff7710',        // LIKELION orange
    primaryHover: '#f77a0e',
    primaryLight: '#f99a0e',

    // Secondary Colors - Aviation Sky
    secondary: '#299bd8',      // Sky blue
    secondaryHover: '#1262af',

    // Accent Colors - Deep Blue
    accent: '#1262af',         // Deep blue
    accentLight: '#299bd8',

    // Aviation Theme Colors
    sky: {
      light: '#e0f2ff',        // Light sky blue
      base: '#87ceeb',         // Sky blue
      medium: '#299bd8',       // Medium blue
      deep: '#1262af',         // Deep blue
      navy: '#0a1e42',         // Navy blue
    },

    cloud: {
      white: '#ffffff',
      light: '#f7f9fc',
      gray: '#e6edf5',
    },

    // Background Colors
    background: '#FFFFFF',
    backgroundAlt: '#F9FAFB',
    backgroundSky: '#f0f8ff',  // Alice blue for sections

    // Text Colors
    text: '#424242',
    textSecondary: '#666666',
    textLight: '#999999',

    // UI Elements
    border: '#E5E7EB',
    borderSky: '#b3d9f2',      // Sky-themed border
    cardBg: 'rgba(255, 255, 255, 0.95)',
    glassBg: 'rgba(255, 255, 255, 0.1)',
    glassBlur: 'blur(10px)',

    // Boarding Pass Colors
    ticket: {
      border: '#d4af37',       // Gold
      perforation: '#cccccc',
      barcode: '#000000',
    },
  },

  gradients: {
    sky: 'linear-gradient(180deg, #87ceeb 0%, #299bd8 50%, #1262af 100%)',
    skyHorizon: 'linear-gradient(180deg, #e0f2ff 0%, #87ceeb 50%, #299bd8 100%)',
    sunset: 'linear-gradient(135deg, #ff7710 0%, #f99a0e 100%)',
    heroOverlay: 'linear-gradient(135deg, rgba(41, 155, 216, 0.1) 0%, rgba(18, 98, 175, 0.1) 100%)',
    cloudyDay: 'linear-gradient(to bottom, #e0f2ff 0%, #ffffff 50%, #f7f9fc 100%)',
    airplaneStripe: 'linear-gradient(90deg, #1262af 0%, #299bd8 50%, #87ceeb 100%)',
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
    airplane: '0 8px 16px rgba(18, 98, 175, 0.15)',
    cloud: '0 4px 20px rgba(135, 206, 235, 0.2)',
    ticket: '0 2px 8px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
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
