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
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

export const HeroText = styled.div`
  color: #f8fbff;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
  align-items: center;
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

export const BadgeTag = styled.span`
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.2);
  font-size: ${({ theme }) => theme.fontSizes.xs};
  letter-spacing: 0.08em;
  text-transform: uppercase;
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

export const HeroIntro = styled.div`
  max-width: 700px;
  line-height: 1.8;
  color: rgba(248, 251, 255, 0.95);
  margin: 1.5rem 0;
  font-size: ${({ theme }) => theme.fontSizes.base};
  text-align: center;

  p {
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  strong {
    color: ${({ theme }) => theme.colors.accent};
    font-weight: bold;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    max-width: 100%;
  }
`;

export const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 0.5rem;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    width: 100%;
  }
`;

export const HeroButton = styled.button`
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
  text-decoration: none;
  display: inline-block;
  background: ${({ primary, theme }) =>
    primary ? theme.colors.primary : 'transparent'};
  color: white;
  border: ${({ primary }) => (primary ? 'none' : '2px solid white')};
  font-family: ${({ theme }) => theme.fonts.primary};

  &:hover {
    background: ${({ primary, theme }) =>
      primary ? theme.colors.primaryHover : 'white'};
    color: ${({ primary, theme }) =>
      primary ? 'white' : theme.colors.primary};
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(255, 119, 16, 0.4);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
`;

export const HeroMeta = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  max-width: 600px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    max-width: 280px;
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

export const HeroTicket = styled.div`
  position: absolute;
  bottom: 5%;
  right: 5%;
  z-index: 2;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const Ticket = styled.div`
  background: white;
  color: ${({ theme }) => theme.colors.text};
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transform: rotate(-5deg);
  border: 2px dashed ${({ theme }) => theme.colors.primary};
`;

export const TicketHeader = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const TicketContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const TicketRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

export const TicketLabel = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textLight};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

export const TicketValue = styled.span`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.base};
`;
