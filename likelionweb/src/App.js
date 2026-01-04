import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import { GlobalStyles } from './styles/GlobalStyles';
import { lightTheme } from './styles/theme';
import Navbar from './components/layout/Navbar/Navbar';
import Footer from './components/layout/Footer/Footer';
import ScrollToTop from './utils/scrollRestoration';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const theme = lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <ScrollToTop />
        <div className="App">
          <Navbar />
          <AnimatedRoutes />
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
