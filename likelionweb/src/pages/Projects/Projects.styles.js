import styled from 'styled-components';

export const PageContainer = styled.div``;

export const Banner = styled.section`
  position: relative;
  overflow: hidden;
  padding: 5rem 2rem 4rem;
  background:
    linear-gradient(135deg, rgba(41, 155, 216, 0.2), rgba(18, 98, 175, 0.75)),
    url('/mainbannerBackground.svg') no-repeat center center / cover;
  color: #f8fbff;
  isolation: isolate;
  text-align: center;

  &:before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.12), transparent 35%),
                radial-gradient(circle at 80% 10%, rgba(255, 255, 255, 0.1), transparent 30%),
                radial-gradient(circle at 40% 80%, rgba(255, 119, 16, 0.18), transparent 45%);
    pointer-events: none;
    z-index: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 3.5rem 1.25rem 3rem;
  }
`;

export const BannerContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BannerTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['6xl']};
  font-family: ${({ theme }) => theme.fonts.english};
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  letter-spacing: 0.02em;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
  }
`;

export const BannerSubtitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: bold;
  margin-bottom: 1rem;
  text-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

export const BannerDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-family: ${({ theme }) => theme.fonts.primary};
  color: rgba(248, 251, 255, 0.9);
  line-height: 1.7;
  max-width: 600px;
  margin: 0 auto 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.base};
  }
`;

export const BannerMeta = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  max-width: 600px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    max-width: 300px;
  }
`;

export const MetaItem = styled.div`
  padding: 0.85rem 1rem;
  border-radius: 12px;
  border: 1px dashed rgba(255, 255, 255, 0.35);
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(8px);
`;

export const MetaLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0.85;
  margin-bottom: 0.2rem;
`;

export const MetaValue = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: bold;
`;

export const BannerCard = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 1.5rem;
  min-height: 260px;
  box-shadow: 0 30px 70px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(12px);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: hidden;
`;

export const CardTitle = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: bold;
  color: #ffffff;
`;

export const CardRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: rgba(248, 251, 255, 0.9);
  font-size: ${({ theme }) => theme.fontSizes.sm};
  letter-spacing: 0.04em;
`;

export const ProjectsSection = styled.section`
  padding: 5rem 2rem;
  background-color: ${({ variant, theme }) =>
    variant === 'cream' ? theme.colors.backgroundCream : theme.colors.background};

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
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.primary};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 0.4rem;
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

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto 4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 4rem 2rem;

  p {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;
