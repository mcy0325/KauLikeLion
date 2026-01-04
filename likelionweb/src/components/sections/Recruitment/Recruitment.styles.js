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
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;
`;

export const Description = styled.div`
  margin-bottom: 2rem;
  line-height: 1.8;
`;

export const DescriptionLine = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-family: ${({ theme }) => theme.fonts.primary};
  color: #576074;
  margin-bottom: 0.5rem;
  line-height: 1.5;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;

export const ApplyButton = styled.a`
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.8rem 2rem;
  background: ${({ theme }) => theme.colors.primaryLight};
  color: white;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.base};
  text-decoration: none;
  border-radius: 5px;
  transition: background-color ${({ theme }) => theme.transitions.medium};
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:hover {
    background: #e07a00;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0.7rem 1.5rem;
    font-size: ${({ theme }) => theme.fontSizes.sm};
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
