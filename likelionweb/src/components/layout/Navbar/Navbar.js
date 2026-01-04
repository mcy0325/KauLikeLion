import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { useIsMobile } from '../../../hooks/useMediaQuery';
import MobileMenu from './MobileMenu';
import {
  Nav,
  Logo,
  LogoHighlight,
  NavRight,
  NavLinks,
  NavItem,
  NavLinkStyled,
  MobileMenuButton
} from './Navbar.styles';
import { siteContent } from '../../../data/content';

function Navbar() {
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
          <LogoHighlight>Korea Aerospace Univ.</LogoHighlight> LIKELION
        </Logo>

        <NavRight>
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
        </NavRight>
      </Nav>

      <AnimatePresence>
        {isMobile && mobileMenuOpen && (
          <MobileMenu
            navItems={navItems}
            onClose={closeMobileMenu}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
