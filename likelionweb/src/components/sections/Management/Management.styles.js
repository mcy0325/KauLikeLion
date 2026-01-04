import styled from 'styled-components';

export const ManagementContainer = styled.section`
  padding: 5rem 2rem;
  background: ${({ theme }) => theme.colors.background};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 3rem 1rem;
  }
`;

export const ManagementHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

export const ManagementIntro = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.primary};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 0.4rem;
`;

export const ManagementTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  font-family: ${({ theme }) => theme.fonts.english};
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
  }
`;

export const ManagementGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1.5rem;
  }
`;
