import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { staggerContainer, staggerItem } from '../../../styles/animations';
import {
  ProjectsContainer,
  ProjectsHeader,
  ProjectsHeaderTitle,
  ProjectsShowcase,
  ShowcaseCard,
  ShowcaseIcon,
  ShowcaseTitle,
  ShowcaseNumber,
  ShowcaseDescription,
  ViewAllButton,
  ViewAllLink
} from './Projects.styles';

const showcaseData = [
  {
    icon: '🌸',
    title: '아이디어톤',
    number: '6+',
    description: '아이디어 기획 프로젝트'
  },
  {
    icon: '🏆',
    title: '중앙 해커톤',
    number: '8+',
    description: '48시간 개발 프로젝트'
  },
  {
    icon: '🚀',
    title: '최종 프로젝트',
    number: '10+',
    description: '서비스 배포 프로젝트'
  }
];

function Projects() {
  return (
    <ProjectsContainer id="projects">
      <ProjectsHeader
        as={motion.div}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <ProjectsHeaderTitle>Projects</ProjectsHeaderTitle>
      </ProjectsHeader>

      <ProjectsShowcase
        as={motion.div}
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {showcaseData.map((item, index) => (
          <motion.div key={index} variants={staggerItem}>
            <ShowcaseCard>
              <ShowcaseIcon>{item.icon}</ShowcaseIcon>
              <ShowcaseTitle>{item.title}</ShowcaseTitle>
              <ShowcaseNumber>{item.number}</ShowcaseNumber>
              <ShowcaseDescription>{item.description}</ShowcaseDescription>
            </ShowcaseCard>
          </motion.div>
        ))}
      </ProjectsShowcase>

      <ViewAllButton
        as={motion.div}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <ViewAllLink to="/projects">모든 프로젝트 보기 →</ViewAllLink>
      </ViewAllButton>
    </ProjectsContainer>
  );
}

export default Projects;
