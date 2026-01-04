import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import { glassCardHover } from '../../../styles/animations';
import {
  CardContainer,
  CardThumbnail,
  CardContent,
  CardTitle,
  CardBatch,
  CardDescription,
  CardTags,
  Tag,
  CardLink
} from './ProjectCard.styles';

function ProjectCard({ project }) {
  return (
    <CardContainer
      as={motion.div}
      variants={glassCardHover}
      initial="rest"
      whileHover="hover"
    >
      <CardThumbnail
        src={project.thumbnail}
        alt={project.title}
        loading="lazy"
      />
      <CardContent>
        <CardBatch>{project.generation}th</CardBatch>
        <CardTitle>{project.title}</CardTitle>
        {project.description && (
          <CardDescription>{project.description}</CardDescription>
        )}
        {project.tags && (
          <CardTags>
            {project.tags.map(tag => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </CardTags>
        )}
        <CardLink
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          as={motion.a}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View on GitHub <FiExternalLink size={16} />
        </CardLink>
      </CardContent>
    </CardContainer>
  );
}

export default ProjectCard;
