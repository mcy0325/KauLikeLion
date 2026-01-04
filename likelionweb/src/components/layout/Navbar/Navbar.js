import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { useIsMobile } from '../../../hooks/useMediaQuery';
import MobileMenu from './MobileMenu';
import {
  Nav,
  Logo,
  LogoHighlight,
  NavLinks,
  NavItem,
  NavLinkStyled,
  MobileMenuButton,
  DarkModeToggle
} from './Navbar.styles';
import { siteContent } from '../../../data/content';

function Navbar({ isDarkMode, toggleDarkMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navItems = [
    { path: '/', label: siteContent.navigation.home.label },
    { path: '/about', label: siteContent.navigation.about.label },
    { path: '/projects', label: siteContent.navigation.projects.label },
  ];

  return (
    <>
      <Nav>
        <Logo to="/">
          LIKELION <LogoHighlight>Korea Aerospace Univ.</LogoHighlight>
        </Logo>

        {!isMobile && (
          <NavLinks>
            {navItems.map(item => (
              <NavItem key={item.path}>
                <NavLinkStyled
                  to={item.path}
                  className={({ isActive }) => isActive ? 'active' : ''}
                >
                  {item.label}
                </NavLinkStyled>
              </NavItem>
            ))}
          </NavLinks>
        )}

        <DarkModeToggle
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
        </DarkModeToggle>

        {isMobile && (
          <MobileMenuButton
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </MobileMenuButton>
        )}
      </Nav>

      <AnimatePresence>
        {isMobile && mobileMenuOpen && (
          <MobileMenu
            navItems={navItems}
            onClose={closeMobileMenu}
            isDarkMode={isDarkMode}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
