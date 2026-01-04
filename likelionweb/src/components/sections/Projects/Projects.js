import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '../../../styles/animations';
import { projects } from '../../../data/projects';
import ProjectCard from './ProjectCard';
import {
  ProjectsContainer,
  ProjectsHeader,
  ProjectsIntro,
  ProjectsHeaderTitle,
  ProjectsGrid
} from './Projects.styles';

function Projects() {
  return (
    <ProjectsContainer>
      <ProjectsHeader
        as={motion.div}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <ProjectsIntro>
          한국항공대학교 멋쟁이사자처럼에서 개발한 웹/앱 서비스
        </ProjectsIntro>
        <ProjectsHeaderTitle>
          LIKELION Projects{' '}
        </ProjectsHeaderTitle>
      </ProjectsHeader>

      <ProjectsGrid
        as={motion.div}
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div key={project.id} variants={staggerItem}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
}

export default Projects;
