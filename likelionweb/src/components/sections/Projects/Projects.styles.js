import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProjectsContainer = styled.section`
  padding: 5rem 2rem;
  background-color: ${({ theme }) => theme.colors.backgroundCream};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 3rem 1rem;
  }
`;

export const ProjectsHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

export const ProjectsIntro = styled.div`
 font-size: ${({ theme }) => theme.fontSizes.sm};
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.primary};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 0.4rem;
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

export const ProjectsShowcase = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const ShowcaseCard = styled.div`
  background: white;
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const ShowcaseIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

export const ShowcaseTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
`;

export const ShowcaseNumber = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondary};
  margin: 1rem 0;
`;

export const ShowcaseDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.base};
`;

export const ViewAllButton = styled.div`
  text-align: center;
  margin-top: 2rem;
`;

export const ViewAllLink = styled(Link)`
  display: inline-block;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 50px;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(255, 119, 16, 0.4);
  }
`;
