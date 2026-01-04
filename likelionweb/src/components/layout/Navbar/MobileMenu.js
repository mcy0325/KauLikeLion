import React from 'react';
import { mobileMenuVariants, staggerContainer, staggerItem } from '../../../styles/animations';
import {
  MobileMenuContainer,
  MobileMenuOverlay,
  MobileNavLinks,
  MobileNavItem,
  MobileNavLink
} from './MobileMenu.styles';

function MobileMenu({ navItems, onClose }) {
  return (
    <>
      <MobileMenuOverlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <MobileMenuContainer
        initial="closed"
        animate="open"
        exit="closed"
        variants={mobileMenuVariants}
      >
        <MobileNavLinks
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {navItems.map(item => (
            <MobileNavItem key={item.path} variants={staggerItem}>
              <MobileNavLink
                to={item.path}
                onClick={onClose}
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                {item.label}
              </MobileNavLink>
            </MobileNavItem>
          ))}
        </MobileNavLinks>
      </MobileMenuContainer>
    </>
  );
}

export default MobileMenu;
