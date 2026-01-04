import styled from 'styled-components';

export const RecruitmentContainer = styled.section`
  padding: 4rem 2rem;
  background: url('/recruitsectionBackground.svg') no-repeat center center / cover;
  text-align: center;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 3rem 1rem;
  }
`;

export const RecruitmentHeader = styled.div`
  margin-bottom: 2rem;
`;

export const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 0.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

export const Subtitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: bold;
  color: #303030;
  margin-bottom: 0.8rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

export const Period = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondary};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;

export const RecruitmentContent = styled.div`
  position: relative;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.98), rgba(248, 251, 255, 0.9));
  border-radius: 18px;
  padding: 2.4rem 2rem 2.2rem;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.16);
  max-width: 680px;
  margin: 0 auto;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.85);
  border-left: 5px solid ${({ theme }) => theme.colors.primary};
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 1rem;
    left: 1.2rem;
    right: 1.2rem;
    height: 2px;
    background-image: repeating-linear-gradient(
      90deg,
      rgba(41, 155, 216, 0.25) 0px,
      rgba(41, 155, 216, 0.25) 10px,
      transparent 10px,
      transparent 18px
    );
    opacity: 0.6;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 2rem 1.5rem 1.8rem;
  }
`;

export const Description = styled.div`
  line-height: 1.8;
  position: relative;
  z-index: 1;
`;

export const DescriptionLine = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-family: ${({ theme }) => theme.fonts.primary};
  color: #4a5568;
  margin-bottom: 0.5rem;
  line-height: 1.5;
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;

export const ApplyButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  margin-top: 1.5rem;
  padding: 0.9rem 2.1rem;
  background: ${({ theme }) => theme.gradients.sunset};
  color: white;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.base};
  text-decoration: none;
  border-radius: 28px;
  transition: all ${({ theme }) => theme.transitions.medium};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  box-shadow: 0 12px 30px rgba(255, 119, 16, 0.25);
  z-index: 1;

  &::after {
    content: '\\2708';
    position: static;
    display: inline-block;
    font-size: 1rem;
    opacity: 0.95;
    transition: transform ${({ theme }) => theme.transitions.fast};
    transform: translateY(1px);
  }

  &:hover {
    background: linear-gradient(135deg, #ff8520 0%, #ff6d00 100%);
    transform: translateY(-2px) scale(1.01);
    box-shadow: 0 16px 36px rgba(255, 119, 16, 0.35);
    letter-spacing: 0.01em;
    color: white;
    &::after {
      transform: translate(2px, 1px);
    }
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 10px 20px rgba(255, 119, 16, 0.25);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0.85rem 2rem;
    font-size: ${({ theme }) => theme.fontSizes.base};

    &::after {
      font-size: 1rem;
      right: 1rem;
    }
  }
`;

export const SparkleEffect = styled.div`
  position: absolute;
  inset: -20%;
  width: 140%;
  height: 140%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
  pointer-events: none;
  z-index: 0;
`;
