import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '../../../styles/animations';
import {
  AboutContainer,
  AboutHeader,
  SectionTitle,
  AboutGrid,
  AboutCard,
  AboutIcon,
  CardTitle,
  CardDescription
} from './About.styles';

const aboutCards = [
  {
    icon: '📍',
    title: '동아리실',
    description: '한국항공대학교\n항공우주센터 3층 310-B호'
  },
  {
    icon: '✈️',
    title: '활동 목표',
    description: '웹 개발 학습과\nIT 창업 프로젝트 수행'
  },
  {
    icon: '🎒',
    title: '학습 내용',
    description: 'Git · UX/UI · HTML/CSS/JS\nJava & Spring · AWS'
  },
  {
    icon: '🚀',
    title: '최종 목표',
    description: '"LTE"\n프로젝트 완성'
  }
];

function About() {
  return (
    <AboutContainer id="about">
      <AboutHeader
        as={motion.div}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionTitle>About</SectionTitle>
      </AboutHeader>

      <AboutGrid
        as={motion.div}
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {aboutCards.map((card, index) => (
          <motion.div key={index} variants={staggerItem}>
            <AboutCard>
              <AboutIcon>{card.icon}</AboutIcon>
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>
                {card.description.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < card.description.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </CardDescription>
            </AboutCard>
          </motion.div>
        ))}
      </AboutGrid>
    </AboutContainer>
  );
}

export default About;
