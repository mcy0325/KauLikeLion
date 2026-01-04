import React from 'react';
import { motion } from 'framer-motion';
import { slideUp, slideInRight } from '../../../styles/animations';
import { siteContent } from '../../../data/content';
import {
  HeroContainer,
  HeroGrid,
  HeroText,
  HeroBadge,
  BadgeDot,
  BadgeDivider,
  HeroTitle,
  HeroSubtitle,
  HeroDescription,
  HeroMeta,
  MetaItem,
  MetaLabel,
  MetaValue,
  HeroBoard,
  BoardGlow,
  BoardHeader,
  BoardTag,
  BoardStatus,
  BoardRoute,
  AirportCode,
  RouteArrow,
  BoardPath,
  PathLine,
  PathNodes,
  PathNode,
  PathDot,
  PathLabel
} from './Hero.styles';

function Hero() {
  const { hero } = siteContent;

  return (
    <HeroContainer>
      <HeroGrid>
        <HeroText
          as={motion.div}
          variants={slideUp}
          initial="initial"
          animate="animate"
        >
          <HeroBadge>
            <BadgeDot />
            <span>KAU LIKELION</span>
            <BadgeDivider />
            <span>Flight Mode</span>
          </HeroBadge>

          <HeroTitle>{hero.mainTitle}</HeroTitle>
          <HeroSubtitle>{hero.subtitle}</HeroSubtitle>
          <HeroDescription>항공대 멋쟁이사자처럼이 아이디어를 현실로 이륙시키는 여정을 시작합니다.</HeroDescription>

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

        <HeroBoard
          as={motion.div}
          variants={slideInRight}
          initial="initial"
          animate="animate"
        >
          <BoardGlow />
          <BoardHeader>
            <BoardTag>Boarding Pass</BoardTag>
            <BoardStatus>Creative Flight Mode</BoardStatus>
          </BoardHeader>

          <BoardRoute>
            <AirportCode>KAU</AirportCode>
            <RouteArrow />
            <AirportCode>LION</AirportCode>
          </BoardRoute>

          <BoardPath>
            <PathLine />
            <PathNodes>
              <PathNode>
                <PathDot />
                <PathLabel>KAU</PathLabel>
              </PathNode>
              <PathNode>
                <PathDot />
                <PathLabel>IDEA</PathLabel>
              </PathNode>
              <PathNode>
                <PathDot />
                <PathLabel>DEVELOPMENT</PathLabel>
              </PathNode>
              <PathNode>
                <PathDot />
                <PathLabel>LION</PathLabel>
              </PathNode>
            </PathNodes>
          </BoardPath>
        </HeroBoard>
      </HeroGrid>
    </HeroContainer>
  );
}

export default Hero;
