import styled from 'styled-components';

export const PageContainer = styled.div``;

export const Banner = styled.section`
  position: relative;
  overflow: hidden;
  padding: 6rem 2rem 5rem;
  background:
    linear-gradient(135deg, rgba(41, 155, 216, 0.2), rgba(18, 98, 175, 0.8)),
    url('/mainbannerBackground.svg') no-repeat center center / cover;
  color: #f8fbff;
  isolation: isolate;

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
    padding: 4.5rem 1.25rem 3.5rem;
  }
`;

export const BannerInner = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1180px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 2rem;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
  }
`;

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: #f8fbff;
`;

export const BannerBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.45rem 0.9rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(8px);
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-family: ${({ theme }) => theme.fonts.primary};
  letter-spacing: 0.04em;
`;

export const BadgeDot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 0 0 6px rgba(255, 119, 16, 0.15);
`;

export const BadgeDivider = styled.span`
  width: 28px;
  height: 1px;
  background: rgba(255, 255, 255, 0.5);
`;

export const BannerTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['5xl']};
  font-family: ${({ theme }) => theme.fonts.english};
  font-weight: bold;
  text-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  letter-spacing: 0.02em;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
  }
`;

export const BannerSubtitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: bold;
  margin-bottom: 0.6rem;
  text-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-family: ${({ theme }) => theme.fonts.primary};
  max-width: 640px;
  line-height: 1.7;
  color: rgba(248, 251, 255, 0.9);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
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
