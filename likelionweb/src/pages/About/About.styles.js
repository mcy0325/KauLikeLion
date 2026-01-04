import styled, { keyframes } from 'styled-components';

export const PageContainer = styled.div`
  background: ${({ theme }) => theme.colors.backgroundAlt};
  color: ${({ theme }) => theme.colors.text};
`;

export const Banner = styled.section`
  position: relative;
  overflow: hidden;
  padding: 5rem 2rem 4rem;
  background:
    linear-gradient(135deg, rgba(41, 155, 216, 0.2), rgba(18, 98, 175, 0.75)),
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
    padding: 3.5rem 1.25rem 3rem;
  }
`;

export const HeroGrid = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  align-items: center;
  gap: 3rem;
  max-width: 1180px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
  }
`;

export const HeroText = styled.div`
  text-align: left;
  color: #f8fbff;
`;

export const FlightBadge = styled.div`
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

export const BadgeTag = styled.span`
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.2);
  font-size: ${({ theme }) => theme.fontSizes.xs};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const BannerTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['5xl']};
  font-family: ${({ theme }) => theme.fonts.english};
  font-weight: bold;
  margin: 1rem 0 0.6rem;
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
  margin-bottom: 1.5rem;
  text-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

export const Description = styled.div`
  max-width: 640px;
  line-height: 1.8;
  color: rgba(248, 251, 255, 0.9);
  margin-bottom: 1.5rem;
`;

export const DescriptionLine = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-family: ${({ theme }) => theme.fonts.primary};
  margin-bottom: 0.4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;

export const FlightStats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1rem;
  max-width: 520px;
`;

export const StatCard = styled.div`
  padding: 0.9rem 1rem;
  border-radius: 12px;
  border: 1px dashed rgba(255, 255, 255, 0.35);
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(8px);
`;

export const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0.85;
  margin-bottom: 0.2rem;
`;

export const StatValue = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: bold;
`;

export const HeroVisual = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 24px;
  padding: 2rem;
  min-height: 320px;
  overflow: hidden;
  box-shadow: 0 30px 70px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(12px);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const GradientOrb = styled.div`
  position: absolute;
  width: 220px;
  height: 220px;
  background: radial-gradient(circle, rgba(255, 119, 16, 0.32), transparent 60%);
  top: -50px;
  right: -70px;
  filter: blur(8px);
  pointer-events: none;
`;

export const BoardingHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  position: relative;
  z-index: 1;
`;

export const FlightCode = styled.div`
  font-family: ${({ theme }) => theme.fonts.english};
  letter-spacing: 0.12em;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  text-transform: uppercase;
`;

export const RouteLabel = styled.div`
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  font-size: ${({ theme }) => theme.fontSizes.xs};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const RouteCodes = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
  z-index: 1;
`;

export const AirportCode = styled.div`
  font-family: ${({ theme }) => theme.fonts.english};
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  letter-spacing: 0.18em;
  color: #ffffff;
`;

export const RouteArrow = styled.div`
  flex: 1;
  height: 2px;
  background: linear-gradient(to right, rgba(255, 255, 255, 0.2), #ffffff 70%);
  position: relative;
  opacity: 0.85;

  &:after {
    content: '';
    position: absolute;
    right: 0;
    top: -5px;
    width: 12px;
    height: 12px;
    border-right: 2px solid #ffffff;
    border-bottom: 2px solid #ffffff;
    transform: rotate(-45deg);
  }
`;

export const MapPath = styled.div`
  position: relative;
  border-radius: 16px;
  padding: 1.25rem 1.2rem 1rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02));
  border: 1px solid rgba(255, 255, 255, 0.15);
  overflow: hidden;
`;

export const PathLine = styled.div`
  position: relative;
  height: 2px;
  background: linear-gradient(to right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.85));
  margin: 1.2rem 0 0.8rem;
`;

export const PathNodes = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
`;

export const PathNode = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.35rem;
  min-width: 70px;
`;

export const PathDot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 0 0 6px rgba(255, 119, 16, 0.2);
`;

export const PathLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.86);
`;

export const FlightMeta = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 0.75rem;
  position: relative;
  z-index: 1;
`;

export const MetaItem = styled.div`
  padding: 0.8rem 1rem;
  border-radius: 12px;
  border: 1px dashed rgba(255, 255, 255, 0.35);
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(6px);
`;

export const MetaLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0.85;
  margin-bottom: 0.15rem;
`;

export const MetaValue = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: bold;
`;

export const ManagementSection = styled.section`
  position: relative;
  padding: 4.5rem 2rem 5rem;
  background-color: ${({ theme }) => theme.colors.background};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 3rem 1.25rem 3.5rem;
  }
`;

export const SectionHeader = styled.div`
  text-align: center;
  margin: 3rem auto 1.5rem;
  max-width: 760px;

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
  letter-spacing: 0.02em;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
  }
`;

export const ManagementGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.8rem;
  max-width: 1200px;
  margin: 0 auto 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1.25rem;
  }
`;
