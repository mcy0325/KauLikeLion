import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '../../../styles/animations';
import { management13th } from '../../../data/management';
import ManagementCard from './ManagementCard';
import {
  ManagementContainer,
  ManagementHeader,
  ManagementIntro,
  ManagementTitle,
  ManagementGrid
} from './Management.styles';

function Management() {
  return (
    <ManagementContainer>
      <ManagementHeader
        as={motion.div}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <ManagementIntro>
          앞으로 1년 동안 아기사자들과 함께 할 운영진들
        </ManagementIntro>
        <ManagementTitle>LIKELION 13th Management</ManagementTitle>
      </ManagementHeader>

      <ManagementGrid
        as={motion.div}
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {management13th.map((person, index) => (
          <motion.div key={person.id} variants={staggerItem}>
            <ManagementCard person={person} index={index} />
          </motion.div>
        ))}
      </ManagementGrid>
    </ManagementContainer>
  );
}

export default Management;
