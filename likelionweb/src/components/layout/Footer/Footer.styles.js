import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  margin-top: auto;
`;

export const FooterContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    padding: 2rem 1rem;
  }
`;

export const FooterSection = styled.div`
  h3 {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.primary};
  }
`;

export const FooterLogo = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
`;

export const FooterLogoImg = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
`;

export const FooterText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export const FooterTitle = styled.div`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.text};
`;

export const FooterSubtitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const FooterAddress = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textLight};
  margin-top: 0.5rem;
`;

export const QuickLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const QuickLinkItem = styled.li`
  a {
    color: ${({ theme }) => theme.colors.textSecondary};
    text-decoration: none;
    transition: color ${({ theme }) => theme.transitions.fast};
    font-size: ${({ theme }) => theme.fontSizes.sm};

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

export const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const FooterBottom = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: 1.5rem 2rem;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 1rem;
  }
`;

export const Copyright = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textLight};
`;
