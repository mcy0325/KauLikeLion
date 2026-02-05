import React from 'react';
import { motion } from 'framer-motion';
import { pageTransition, staggerContainer, staggerItem, slideUp } from '../../styles/animations';
import { management12th, management13th, management14th } from '../../data/management';
import { siteContent } from '../../data/content';
import ManagementCard from '../../components/sections/Management/ManagementCard';
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
  ManagementSection,
  SectionHeader,
  SectionIntro,
  SectionTitle,
  ManagementGrid
} from './About.styles';

function About() {
  const { hero, organization } = siteContent;

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
          <BannerTitle>{organization.slogan}</BannerTitle>
          <BannerSubtitle>{organization.nameKr}</BannerSubtitle>
          <BannerDescription>
            한국항공대학교 멋쟁이사자처럼을 이끌어가는 운영진을 소개합니다.
          </BannerDescription>
          <BannerMeta>
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
          </BannerMeta>
        </BannerContent>
      </Banner>

      <ManagementSection>
        <SectionHeader
          as={motion.div}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <SectionIntro>2026 Boarding · 14기 운영진</SectionIntro>
          <SectionTitle>LIKELION 14th Management</SectionTitle>
        </SectionHeader>

        <ManagementGrid
          as={motion.div}
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ delayChildren: 0.1 }}
        >
          {management14th.map((person, index) => (
            <motion.div key={person.id} variants={staggerItem}>
              <ManagementCard person={person} index={index} />
            </motion.div>
          ))}
        </ManagementGrid>
      </ManagementSection>

      <ManagementSection variant="cream">
        <SectionHeader
          as={motion.div}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <SectionIntro>2025 Landing · 13기 운영진</SectionIntro>
          <SectionTitle>LIKELION 13th Management</SectionTitle>
        </SectionHeader>

        <ManagementGrid
          as={motion.div}
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ delayChildren: 0.1 }}
        >
          {management13th.map((person, index) => (
            <motion.div key={person.id} variants={staggerItem}>
              <ManagementCard person={person} index={index} />
            </motion.div>
          ))}
        </ManagementGrid>
      </ManagementSection>

      <ManagementSection>
        <SectionHeader
          as={motion.div}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionIntro>2024 Landing · 12기 운영진</SectionIntro>
          <SectionTitle>LIKELION 12th Management</SectionTitle>
        </SectionHeader>

        <ManagementGrid
          as={motion.div}
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ delayChildren: 0.05 }}
        >
          {management12th.map((person, index) => (
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
