import styled from 'styled-components';

export const RoadmapContainer = styled.section`
  padding: 5rem 2rem;
  background: ${({ theme }) => theme.colors.backgroundCream};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 3rem 1rem;
  }
`;

export const RoadmapHeader = styled.div`
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

export const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 4px;
    background: ${({ theme }) => theme.colors.primary};
    transform: translateX(-50%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    &::before {
      left: 30px;
    }
  }
`;

export const TimelineItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row !important;
    margin-bottom: 2rem;
    padding-left: 8px;
  }

  &:nth-child(odd) {
    flex-direction: row;
  }

  &:nth-child(even) {
    flex-direction: row-reverse;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      flex-direction: row;
    }
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const TimelineMarker = styled.div`
  font-size: 2rem;
  background: white;
  border: 4px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 44px;
    height: 44px;
    font-size: 1.2rem;
    border-width: 3px;
  }
`;

export const TimelineContent = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadows.md};
  flex: 1;
  margin: 0 2rem;

  h4 {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 0.5rem;
    font-family: ${({ theme }) => theme.fonts.primary};
  }

  p {
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.6;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-left: 0.75rem;
    margin-right: 0;
    padding: 1rem;

    h4 {
      font-size: ${({ theme }) => theme.fontSizes.lg};
    }

    p {
      font-size: ${({ theme }) => theme.fontSizes.sm};
    }
  }
`;

export const TimelineDate = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.textLight};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin-top: 0.5rem;
`;
