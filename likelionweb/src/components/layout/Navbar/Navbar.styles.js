import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  height: 72px;
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(14px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${({ theme }) => theme.zIndex.sticky};
  transition: all ${({ theme }) => theme.transitions.medium};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 1rem;
    height: 64px;
  }
`;

export const Logo = styled(NavLink)`
  font-size: 1.5rem;
  font-family: ${({ theme }) => theme.fonts.english};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  transition: all ${({ theme }) => theme.transitions.fast};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.2rem;
  }
`;

export const LogoHighlight = styled.span`
  font-family: ${({ theme }) => theme.fonts.english};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 1rem;
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  gap: 0.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;

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
  border-radius: 8px;
  transition: all ${({ theme }) => theme.transitions.fast};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.base};
  position: relative;

  &:hover {
    background: ${({ theme }) => theme.colors.backgroundAlt};
    color: ${({ theme }) => theme.colors.primary};
  }

  &.active {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary};
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
