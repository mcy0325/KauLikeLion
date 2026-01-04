import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  /* Font Face Declarations */
  @font-face {
    font-family: 'BalooBhai2';
    src: url('/fonts/BalooBhai2-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Dunggeunmiso-R';
    src: url('/fonts/Dunggeunmiso-R.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Dunggeunmiso-B';
    src: url('/fonts/Dunggeunmiso-B.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('/fonts/Roboto-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  /* CSS Reset & Base Styles */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
    overflow-y: auto;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.primary};
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    overflow-y: auto;
    transition: background-color ${({ theme }) => theme.transitions.medium},
                color ${({ theme }) => theme.transitions.medium};
    padding-top: 72px;

    /* Subtle cloud pattern background */
    position: relative;

    &::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image:
        radial-gradient(circle at 20% 30%, rgba(224, 242, 255, 0.3) 0%, transparent 50%),
        radial-gradient(circle at 80% 60%, rgba(135, 206, 235, 0.2) 0%, transparent 50%),
        radial-gradient(circle at 40% 80%, rgba(224, 242, 255, 0.25) 0%, transparent 50%);
      pointer-events: none;
      z-index: -1;
    }
  }

  #root {
    min-height: 100vh;
  }

  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.text};
  }

  p {
    margin-bottom: 1rem;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: color ${({ theme }) => theme.transitions.fast};

    &:hover {
      color: ${({ theme }) => theme.colors.primaryHover};
    }
  }

  /* Hide Scrollbar */
  ::-webkit-scrollbar {
    display: none;
  }

  /* For Firefox */
  * {
    scrollbar-width: none;
  }

  /* For IE and Edge */
  * {
    -ms-overflow-style: none;
  }

  /* Utility Classes */
  .container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 2rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      padding: 0 1rem;
    }
  }

  /* Accessibility */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  /* Focus Styles for Keyboard Navigation */
  *:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 2px;
  }

  button:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 2px;
  }
`;
