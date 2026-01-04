import React from 'react';
import { motion } from 'framer-motion';
import { pageTransition, staggerContainer, staggerItem } from '../../styles/animations';
import { getProjectsByGeneration } from '../../data/projects';
import { siteContent } from '../../data/content';
import ProjectCard from '../../components/sections/Projects/ProjectCard';
import {
  PageContainer,
  Banner,
  BannerInner,
  BannerContent,
  BannerBadge,
  BadgeDot,
  BadgeDivider,
  BannerTitle,
  BannerSubtitle,
  Description,
  BannerCard,
  CardTitle,
  CardRow,
  ProjectsSection,
  SectionHeader,
  SectionIntro,
  SectionTitle,
  ProjectsGrid,
  EmptyState
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
        <BannerInner>
          <BannerContent>
            <BannerBadge>
              <BadgeDot />
              <span>Project Archives</span>
              <BadgeDivider />
              <span>KAU LIKELION</span>
            </BannerBadge>
            <BannerTitle>{siteContent.organization.slogan}</BannerTitle>
            <BannerSubtitle>{siteContent.organization.nameKr}</BannerSubtitle>
            <Description>
              한국항공대학교 멋쟁이사자처럼에서 개발한 다양한 웹/앱 서비스를 소개합니다.
            </Description>
          </BannerContent>

          <BannerCard>
            <CardTitle>Project Flight Plan</CardTitle>
            <CardRow>• 운영진과 아기사자들이 함께 만든 결과물을 한눈에</CardRow>
            <CardRow>• 아이디어 → 설계 → 개발 과정 아카이브</CardRow>
            <CardRow>• GitHub 링크로 바로 확인</CardRow>
          </BannerCard>
        </BannerInner>
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
