import styled from 'styled-components';

export const CardContainer = styled.div`
  background: ${({ theme }) => theme.colors.glassBg};
  backdrop-filter: ${({ theme }) => theme.colors.glassBlur};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.medium};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${({ theme }) => theme.gradients.sunset};
    transform: scaleX(0);
    transition: transform ${({ theme }) => theme.transitions.medium};
  }

  &:hover::before {
    transform: scaleX(1);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  display: block;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 200px;
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
