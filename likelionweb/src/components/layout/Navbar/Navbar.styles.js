import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.cardBg};
  backdrop-filter: ${({ theme }) => theme.colors.glassBlur};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  position: sticky;
  top: 0;
  z-index: ${({ theme }) => theme.zIndex.sticky};
  transition: background-color ${({ theme }) => theme.transitions.medium};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 1rem;
  }
`;

export const Logo = styled(NavLink)`
  font-size: 1.5rem;
  font-family: ${({ theme }) => theme.fonts.english};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.primaryHover};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.2rem;
  }
`;

export const LogoHighlight = styled.span`
  font-family: ${({ theme }) => theme.fonts.english};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.accent};
`;

export const NavLinks = styled.ul`
  display: flex;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const NavItem = styled.li`
  font-size: 1rem;
`;

export const NavLinkStyled = styled(NavLink)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: all ${({ theme }) => theme.transitions.fast};
  font-family: ${({ theme }) => theme.fonts.primary};

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

export const MobileMenuButton = styled(motion.button)`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  padding: 0.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }
`;

export const DarkModeToggle = styled(motion.button)`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundAlt};
  }
`;
