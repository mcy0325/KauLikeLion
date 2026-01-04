import styled from 'styled-components';

export const PageContainer = styled.div``;

export const Banner = styled.section`
  text-align: center;
  padding: 5rem 2rem;
  background: url('/mainbannerBackground.svg') no-repeat center center / cover;
  color: white;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 3rem 1rem;
  }
`;

export const BannerTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['5xl']};
  font-family: ${({ theme }) => theme.fonts.english};
  font-weight: bold;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
  }
`;

export const BannerSubtitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: bold;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

export const Description = styled.div`
  max-width: 900px;
  margin: 0 auto;
  line-height: 1.8;
`;

export const DescriptionLine = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-family: ${({ theme }) => theme.fonts.primary};
  margin-bottom: 0.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;

export const ManagementSection = styled.section`
  padding: 5rem 2rem;
  background-color: ${({ theme }) => theme.colors.background};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 3rem 1rem;
  }
`;

export const SectionHeader = styled.div`
  text-align: center;
  margin: 3rem 0 2rem;

  &:first-child {
    margin-top: 0;
  }
`;

export const SectionIntro = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 0.5rem;
`;

export const SectionTitle = styled.div`
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
  margin: 0 auto 4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1.5rem;
  }
`;
