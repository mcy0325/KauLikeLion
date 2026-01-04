import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';
import { glassCardHover } from '../../../styles/animations';
import {
  CardContainer,
  CardImage,
  CardContent,
  CardName,
  CardRole,
  CardDepartment,
  GitHubLink
} from './ManagementCard.styles';

function ManagementCard({ person, index }) {
  return (
    <CardContainer
      as={motion.div}
      variants={glassCardHover}
      initial="rest"
      whileHover="hover"
      style={{ transitionDelay: `${index * 0.05}s` }}
    >
      <CardImage src={person.img} alt={person.name} loading="lazy" />
      <CardContent>
        <CardName>{person.name}</CardName>
        <CardRole>{person.role}</CardRole>
        <CardDepartment>{person.department}</CardDepartment>
        <GitHubLink
          href={person.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${person.name}'s GitHub`}
          as={motion.a}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FiGithub size={20} />
        </GitHubLink>
      </CardContent>
    </CardContainer>
  );
}

export default ManagementCard;
