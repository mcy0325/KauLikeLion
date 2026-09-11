import React from 'react';
import { motion } from 'framer-motion';
import { slideUp } from '../../../styles/animations';
import { siteContent } from '../../../data/content';
import {
  HeroContainer,
  HeroGrid,
  HeroText,
  HeroTitle,
  HeroSubtitle,
  HeroIntro,
  HeroMeta,
  MetaItem,
  MetaLabel,
  MetaValue
} from './Hero.styles';

function Hero() {
  const { hero, about } = siteContent;

  return (
    <HeroContainer>
      <HeroGrid>
        <HeroText
          as={motion.div}
          variants={slideUp}
          initial="initial"
          animate="animate"
        >
          <HeroTitle>{hero.mainTitle}</HeroTitle>
          <HeroSubtitle>{hero.subtitle}</HeroSubtitle>

          <HeroIntro>
            {about.description.map(line => <p key={line}>{line}</p>)}
          </HeroIntro>

          <HeroMeta>
            <MetaItem>
              <MetaLabel>Departure</MetaLabel>
              <MetaValue>{hero.flightSearch.departure}</MetaValue>
            </MetaItem>
            <MetaItem>
              <MetaLabel>Arrival</MetaLabel>
              <MetaValue>{hero.flightSearch.arrival}</MetaValue>
            </MetaItem>
            <MetaItem>
              <MetaLabel>Flight Date</MetaLabel>
              <MetaValue>{hero.flightSearch.date}</MetaValue>
            </MetaItem>
          </HeroMeta>
        </HeroText>
      </HeroGrid>
    </HeroContainer>
  );
}

export default Hero;
