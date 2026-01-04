import styled from 'styled-components';

export const CardContainer = styled.div`
  background: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  transition: all ${({ theme }) => theme.transitions.medium};
  display: flex;
  flex-direction: column;
  box-shadow: ${({ theme }) => theme.shadows.md};
  padding: 1rem;
  gap: 0.25rem;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const CardContent = styled.div`
  padding: 0.75rem 0.5rem 0.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const CardBatch = styled.div`
  display: inline-block;
  background: ${({ theme }) => theme.gradients.sunset};
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: bold;
  font-family: ${({ theme }) => theme.fonts.english};
  margin-bottom: 0.5rem;
  align-self: flex-start;
`;

export const CardTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.5rem;
  font-family: ${({ theme }) => theme.fonts.primary};
`;

export const CardDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1rem;
  flex: 1;
`;

export const CardTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const Tag = styled.span`
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

export const CardLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.primaryHover};
  }
`;
