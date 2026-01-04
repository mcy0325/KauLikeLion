import React from 'react';
import { motion } from 'framer-motion';
import { pageTransition, staggerContainer, staggerItem } from '../../styles/animations';
import { management12th, management13th } from '../../data/management';
import { siteContent } from '../../data/content';
import ManagementCard from '../../components/sections/Management/ManagementCard';
import {
  PageContainer,
  Banner,
  BannerTitle,
  BannerSubtitle,
  Description,
  DescriptionLine,
  ManagementSection,
  SectionHeader,
  SectionIntro,
  SectionTitle,
  ManagementGrid
} from './About.styles';

function About() {
  const { about, organization } = siteContent;

  return (
    <PageContainer
      as={motion.div}
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Banner>
        <BannerTitle>{organization.slogan}</BannerTitle>
        <BannerSubtitle>{organization.nameKr}</BannerSubtitle>
        <Description>
          {about.description.map((line, index) => (
            <DescriptionLine key={index}>{line}</DescriptionLine>
          ))}
        </Description>
      </Banner>

      <ManagementSection>
        <SectionHeader
          as={motion.div}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionIntro>2024년 한국항공대학교 멋쟁이사자처럼</SectionIntro>
          <SectionTitle>LIKELION 12TH Management</SectionTitle>
        </SectionHeader>

        <ManagementGrid
          as={motion.div}
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {management12th.map((person, index) => (
            <motion.div key={person.id} variants={staggerItem}>
              <ManagementCard person={person} index={index} />
            </motion.div>
          ))}
        </ManagementGrid>

        <SectionHeader
          as={motion.div}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <SectionIntro>2025년 한국항공대학교 멋쟁이사자처럼</SectionIntro>
          <SectionTitle>LIKELION 13TH Management</SectionTitle>
        </SectionHeader>

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
      </ManagementSection>
    </PageContainer>
  );
}

export default About;
