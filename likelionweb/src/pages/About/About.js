import React from 'react';
import { motion } from 'framer-motion';
import { pageTransition, staggerContainer, staggerItem, slideUp, slideInRight } from '../../styles/animations';
import { management12th, management13th } from '../../data/management';
import { siteContent } from '../../data/content';
import ManagementCard from '../../components/sections/Management/ManagementCard';
import {
  PageContainer,
  Banner,
  HeroGrid,
  HeroText,
  FlightBadge,
  BadgeDot,
  BadgeDivider,
  BadgeTag,
  BannerTitle,
  BannerSubtitle,
  Description,
  DescriptionLine,
  FlightStats,
  StatCard,
  StatLabel,
  StatValue,
  HeroVisual,
  GradientOrb,
  BoardingHeader,
  FlightCode,
  RouteLabel,
  RouteCodes,
  AirportCode,
  RouteArrow,
  MapPath,
  PathLine,
  PathNodes,
  PathNode,
  PathDot,
  PathLabel,
  FlightMeta,
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
        <HeroGrid>
          <HeroText
            as={motion.div}
            variants={slideUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <FlightBadge>
              <BadgeDot />
              <span>KAU</span>
              <BadgeDivider />
              <span>LIKELION</span>
              <BadgeTag>13th</BadgeTag>
            </FlightBadge>

            <BannerTitle>{organization.slogan}</BannerTitle>
            <BannerSubtitle>{organization.nameKr}</BannerSubtitle>

            <Description>
              {about.description.map((line, index) => (
                <DescriptionLine key={index}>{line}</DescriptionLine>
              ))}
            </Description>

            <FlightStats>
              <StatCard>
                <StatLabel>Flight Plan</StatLabel>
                <StatValue>웹/앱 서비스 개발</StatValue>
              </StatCard>
              <StatCard>
                <StatLabel>Crew</StatLabel>
                <StatValue>KAU LIKELION</StatValue>
              </StatCard>
              <StatCard>
                <StatLabel>Altitude</StatLabel>
                <StatValue>아이디어 → 실현</StatValue>
              </StatCard>
            </FlightStats>
          </HeroText>

          <HeroVisual
            as={motion.div}
            variants={slideInRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <GradientOrb />
            <BoardingHeader>
              <FlightCode>KAU LIKELION</FlightCode>
              <RouteLabel>Creative Flight Mode</RouteLabel>
            </BoardingHeader>

            <RouteCodes>
              <AirportCode>KAU</AirportCode>
              <RouteArrow />
              <AirportCode>LION</AirportCode>
            </RouteCodes>

            <MapPath>
              <PathLine />
              <PathNodes>
                <PathNode>
                  <PathDot />
                  <PathLabel>KAU</PathLabel>
                </PathNode>
                <PathNode>
                  <PathDot />
                  <PathLabel>LION</PathLabel>
                </PathNode>
              </PathNodes>
            </MapPath>

            <FlightMeta>
              <MetaItem>
                <MetaLabel>Departure</MetaLabel>
                <MetaValue>Korea Aerospace Univ.</MetaValue>
              </MetaItem>
              <MetaItem>
                <MetaLabel>Arrival</MetaLabel>
                <MetaValue>LIKELION 13th</MetaValue>
              </MetaItem>
              <MetaItem>
                <MetaLabel>Flight Date</MetaLabel>
                <MetaValue>Creative Flight Mode</MetaValue>
              </MetaItem>
            </FlightMeta>
          </HeroVisual>
        </HeroGrid>
      </Banner>

      <ManagementSection>
        <SectionHeader
          as={motion.div}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <SectionIntro>2025 Boarding · 13기 운영진</SectionIntro>
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
