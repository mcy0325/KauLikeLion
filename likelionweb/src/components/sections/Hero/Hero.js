import React from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import { slideUp, runwayArrow, airplaneTrajectory } from '../../../styles/animations';
import { siteContent } from '../../../data/content';
import {
  HeroContainer,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  FlightSearchCard,
  RadioGroup,
  RadioLabel,
  InputGroup,
  InputField,
  FieldLabel,
  Input,
  SearchButton,
  ScrollIndicator,
  AirplaneSVG
} from './Hero.styles';

function Hero() {
  const { hero } = siteContent;

  return (
    <HeroContainer>
      {/* Animated airplane trajectory background */}
      <AirplaneSVG>
        <motion.path
          d="M 50 400 Q 200 300, 400 350 T 800 300"
          stroke="rgba(96, 165, 250, 0.3)"
          strokeWidth="2"
          fill="none"
          variants={airplaneTrajectory}
          initial="initial"
          animate="animate"
        />
      </AirplaneSVG>

      <HeroContent
        as={motion.div}
        variants={slideUp}
        initial="initial"
        animate="animate"
      >
        <HeroTitle>{hero.mainTitle}</HeroTitle>
        <HeroSubtitle>{hero.subtitle}</HeroSubtitle>

        <FlightSearchCard
          as={motion.div}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <RadioGroup>
            <RadioLabel>
              <input type="radio" name="trip-type" value="return" disabled />
              Return
            </RadioLabel>
            <RadioLabel>
              <input type="radio" name="trip-type" value="oneway" defaultChecked disabled />
              One-way
            </RadioLabel>
          </RadioGroup>

          <InputGroup>
            <InputField>
              <FieldLabel>Departure</FieldLabel>
              <Input type="text" value={hero.flightSearch.departure} readOnly />
            </InputField>
            <InputField>
              <FieldLabel>Arrival</FieldLabel>
              <Input type="text" value={hero.flightSearch.arrival} readOnly />
            </InputField>
            <InputField>
              <FieldLabel>Date</FieldLabel>
              <Input type="date" value={hero.flightSearch.date} readOnly />
            </InputField>
            <SearchButton
              as={motion.button}
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255, 119, 16, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              SEARCH FLIGHTS
            </SearchButton>
          </InputGroup>
        </FlightSearchCard>
      </HeroContent>

      <ScrollIndicator
        as={motion.div}
        variants={runwayArrow}
        animate="animate"
        aria-label="Scroll down"
      >
        <FiChevronDown size={32} />
      </ScrollIndicator>
    </HeroContainer>
  );
}

export default Hero;
