import styled from 'styled-components';

export const ProjectsContainer = styled.section`
  padding: 5rem 2rem;
  background-color: ${({ theme }) => theme.colors.backgroundAlt};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 3rem 1rem;
  }
`;

export const ProjectsHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

export const ProjectsIntro = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 0.5rem;
`;

export const ProjectsHeaderTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  font-family: ${({ theme }) => theme.fonts.english};
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;
