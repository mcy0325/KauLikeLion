import styled from 'styled-components';

export const CardContainer = styled.div`
  background: white;
  border: 3px solid ${({ $variant, theme }) =>
    $variant === 'orange' ? 'rgba(255, 255, 255, 0.3)' : theme.colors.backgroundCream};
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.medium};
  box-shadow: ${({ $variant }) =>
    $variant === 'orange' ? '0 8px 25px rgba(0, 0, 0, 0.2)' : '0 5px 15px rgba(0, 0, 0, 0.1)'};
  position: relative;

  &::before {
    content: '🎫';
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
    opacity: 0.3;
    z-index: 1;
  }

  @media (hover: hover) {
    &:hover {
      transform: translateY(-5px);
      box-shadow: ${({ theme }) => theme.shadows.lg};
      border-color: ${({ $variant }) => $variant === 'orange' ? 'white' : '#FF7710'};
    }
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  object-position: top center;
  display: block;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 280px;
  }
`;

export const CardContent = styled.div`
  padding: 1.5rem;
  text-align: center;
  position: relative;
`;

export const CardName = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.text};
  margin: 1rem 0 0.5rem;
  font-family: ${({ theme }) => theme.fonts.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 0;
  }
`;

export const CardRole = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
  margin-bottom: 0.3rem;
`;

export const CardDepartment = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1rem;
`;

export const GitHubLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  color: ${({ theme }) => theme.colors.text};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;
