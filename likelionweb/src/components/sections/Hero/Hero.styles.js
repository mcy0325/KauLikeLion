import styled from 'styled-components';

export const HeroContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  background: url('/mainbannerBackground.svg') no-repeat center center / cover;
  color: white;
  padding: 3rem 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: auto;
    padding: 2rem 1rem;
  }
`;

export const AirplaneSVG = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
`;

export const HeroContent = styled.div`
  text-align: center;
  z-index: 2;
  max-width: 1200px;
  width: 100%;
`;

export const HeroTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['6xl']};
  font-family: ${({ theme }) => theme.fonts.english};
  font-weight: bold;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
  }
`;

export const HeroSubtitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: bold;
  margin-bottom: 3rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    margin-bottom: 2rem;
  }
`;

export const FlightSearchCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 2rem;
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 1.5rem;
    width: 100%;
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: center;
  }
`;

export const RadioLabel = styled.label`
  font-family: ${({ theme }) => theme.fonts.english};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: #333;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  input[type="radio"] {
    cursor: pointer;
  }
`;

export const InputGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const FieldLabel = styled.label`
  font-family: ${({ theme }) => theme.fonts.english};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: bold;
  color: #333;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  padding: 0.875rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: white;
  color: #333;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.base};
  outline: none;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:focus {
    border-color: ${({ theme }) => theme.colors.accent};
  }

  &::placeholder {
    color: #999;
  }
`;

export const SearchButton = styled.button`
  padding: 0.875rem 2rem;
  background: #f99a0e;
  color: white;
  font-family: ${({ theme }) => theme.fonts.english};
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.base};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color ${({ theme }) => theme.transitions.medium};
  align-self: flex-end;

  &:hover {
    background: #f77a0e;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    align-self: stretch;
  }
`;

export const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  opacity: 0.7;
  cursor: pointer;
  z-index: 2;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const AirplanePath = styled.path``;
