import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

export const MobileMenuOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: ${({ theme }) => theme.zIndex.modalBackdrop};
`;

export const MobileMenuContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 70%;
  max-width: 300px;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: ${({ theme }) => theme.shadows.xl};
  z-index: ${({ theme }) => theme.zIndex.modal};
  padding: 2rem;
  overflow-y: auto;
`;

export const MobileNavLinks = styled(motion.ul)`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 3rem;
`;

export const MobileNavItem = styled(motion.li)`
  width: 100%;
`;

export const MobileNavLink = styled(NavLink)`
  display: block;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  padding: 1rem;
  border-radius: 8px;
  font-size: 1.2rem;
  font-family: ${({ theme }) => theme.fonts.primary};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundAlt};
    color: ${({ theme }) => theme.colors.primary};
  }

  &.active {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    background-color: ${({ theme }) => theme.colors.backgroundAlt};
  }
`;
