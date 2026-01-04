import styled from 'styled-components';

export const HeroContainer = styled.section`
  position: relative;
  padding: 5.5rem 2rem 5rem;
  min-height: 82vh;
  background:
    linear-gradient(135deg, rgba(41, 155, 216, 0.2), rgba(18, 98, 175, 0.75)),
    url('/mainbannerBackground.svg') no-repeat center center / cover;
  color: #f8fbff;
  overflow: hidden;
  margin-top: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 4.5rem 1.25rem 3.5rem;
    min-height: 70vh;
    margin-top: 0;
  }
`;

export const HeroGrid = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 2.5rem;
  max-width: 1180px;
  margin: 0 auto;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
  }
`;

export const HeroText = styled.div`
  color: #f8fbff;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const HeroBadge = styled.div`
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

export const HeroTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['6xl']};
  font-family: ${({ theme }) => theme.fonts.english};
  font-weight: bold;
  letter-spacing: 0.02em;
  text-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
  }
`;

export const HeroSubtitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

export const HeroDescription = styled.p`
  max-width: 560px;
  line-height: 1.7;
  color: rgba(248, 251, 255, 0.9);
  margin: 0.5rem 0 0.75rem;
  font-size: ${({ theme }) => theme.fontSizes.base};
`;

export const HeroMeta = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 0.75rem;
  max-width: 600px;
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

export const HeroBoard = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 24px;
  padding: 1.5rem 1.75rem;
  min-height: 320px;
  overflow: hidden;
  box-shadow: 0 30px 70px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(12px);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const BoardGlow = styled.div`
  position: absolute;
  width: 260px;
  height: 260px;
  background: radial-gradient(circle, rgba(255, 119, 16, 0.32), transparent 60%);
  top: -40px;
  right: -60px;
  filter: blur(10px);
  pointer-events: none;
`;

export const BoardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  position: relative;
  z-index: 1;
  flex-wrap: wrap;
`;

export const BoardTag = styled.div`
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.25);
  font-size: ${({ theme }) => theme.fontSizes.xs};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #ffffff;
`;

export const BoardStatus = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: bold;
  color: #ffffff;
`;

export const BoardRoute = styled.div`
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

export const BoardPath = styled.div`
  position: relative;
  border-radius: 16px;
  padding: 1.1rem 1.2rem 1rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02));
  border: 1px solid rgba(255, 255, 255, 0.15);
  overflow: hidden;
`;

export const PathLine = styled.div`
  position: relative;
  height: 2px;
  background: linear-gradient(to right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.85));
  margin: 1.1rem 0 0.8rem;
`;

export const PathNodes = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.75rem;
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
