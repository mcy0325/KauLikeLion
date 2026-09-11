import styled from 'styled-components';

export const AwardsContainer = styled.section`
  padding: 5rem 2rem;
  background: ${({ theme }) => theme.colors.backgroundCream};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 3rem 1rem;
  }
`;

export const AwardsHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

export const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  font-family: ${({ theme }) => theme.fonts.english};
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
  }
`;

export const AwardsSummary = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

export const YearCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  flex: 1;
  max-width: 400px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 100%;
  }
`;

export const YearBadge = styled.div`
  display: inline-block;
  padding: 0.5rem 1.2rem;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 25px;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: bold;
  font-family: ${({ theme }) => theme.fonts.english};
  margin-bottom: 0.5rem;
`;

export const TotalCount = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1.5rem;
`;

export const AwardsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const AwardItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const AwardPrizeBadge = styled.span`
  display: inline-block;
  padding: 0.25rem 0.6rem;
  border-radius: 12px;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: bold;
  white-space: nowrap;
  background: ${({ prize }) => {
    if (prize === '총장상') return '#FFD700';
    if (prize === '최우수상') return '#C0C0C0';
    return '#CD7F32';
  }};
  color: ${({ prize }) => {
    if (prize === '총장상') return '#333';
    if (prize === '최우수상') return '#333';
    return '#fff';
  }};
`;

export const AwardInfo = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.text};
`;
