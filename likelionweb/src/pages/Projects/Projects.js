import React from 'react';
import { motion } from 'framer-motion';
import { pageTransition, staggerContainer, staggerItem, slideUp } from '../../styles/animations';
import { getProjectsByGeneration } from '../../data/projects';
import { siteContent } from '../../data/content';
import ProjectCard from '../../components/sections/Projects/ProjectCard';
import {
  PageContainer,
  Banner,
  BannerContent,
  BannerTitle,
  BannerSubtitle,
  BannerDescription,
  BannerMeta,
  MetaItem,
  MetaLabel,
  MetaValue,
  ProjectsSection,
  SectionHeader,
  SectionIntro,
  SectionTitle,
  ProjectsGrid
} from './Projects.styles';

function Projects() {
  const projects12 = getProjectsByGeneration(12);
  const projects13 = getProjectsByGeneration(13);

  return (
    <PageContainer
      as={motion.div}
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Banner>
        <BannerContent
          as={motion.div}
          variants={slideUp}
          initial="initial"
          animate="animate"
        >
          <BannerTitle>{siteContent.organization.slogan}</BannerTitle>
          <BannerSubtitle>{siteContent.organization.nameKr}</BannerSubtitle>
          <BannerDescription>
            한국항공대학교 멋쟁이사자처럼에서 개발한 프로젝트들을 소개합니다.
          </BannerDescription>
          <BannerMeta>
            <MetaItem>
              <MetaLabel>Departure</MetaLabel>
              <MetaValue>{siteContent.hero.flightSearch.departure}</MetaValue>
            </MetaItem>
            <MetaItem>
              <MetaLabel>Arrival</MetaLabel>
              <MetaValue>{siteContent.hero.flightSearch.arrival}</MetaValue>
            </MetaItem>
            <MetaItem>
              <MetaLabel>Flight Date</MetaLabel>
              <MetaValue>{siteContent.hero.flightSearch.date}</MetaValue>
            </MetaItem>
          </BannerMeta>
        </BannerContent>
      </Banner>

      <ProjectsSection>
        <SectionHeader
          as={motion.div}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <SectionIntro>2025년 한국항공대학교 멋쟁이사자처럼</SectionIntro>
          <SectionTitle>LIKELION 13th Projects</SectionTitle>
        </SectionHeader>

        <ProjectsGrid
          as={motion.div}
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {projects13.map((project, index) => (
            <motion.div key={project.id} variants={staggerItem}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </ProjectsGrid>
      </ProjectsSection>

      <ProjectsSection variant="cream">
        <SectionHeader
          as={motion.div}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionIntro>2024년 한국항공대학교 멋쟁이사자처럼</SectionIntro>
          <SectionTitle>LIKELION 12th Projects</SectionTitle>
        </SectionHeader>

        <ProjectsGrid
          as={motion.div}
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {projects12.map((project, index) => (
            <motion.div key={project.id} variants={staggerItem}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </ProjectsGrid>
      </ProjectsSection>
    </PageContainer>
  );
}

export default Projects;
