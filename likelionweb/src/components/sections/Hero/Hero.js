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
          <HeroTitle>{hero.mainTitle}</HeroTitle>
          <HeroSubtitle>{hero.subtitle}</HeroSubtitle>

          <HeroIntro>
            <p>멋쟁이사자처럼은 현재 전국 61개 대학이 함께하고 있는 연합 동아리입니다.</p>
            <p>"내 아이디어를 내 손으로 실현한다"라는 슬로건 아래, 웹 개발을 배우고 프로젝트를 수행합니다.</p>
            <p>한국항공대학교 멋사의 선발기준에 코딩 실력은 '절대' 없습니다!</p>
            <p>전공, 학년, 나이에 제한 없이 한국항공대학교 학생이라면 재학생, 휴학생 무관 누구나 가입할 수 있습니다!</p>
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
