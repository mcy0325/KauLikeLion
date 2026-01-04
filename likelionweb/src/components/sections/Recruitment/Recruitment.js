import React from 'react';
import { motion } from 'framer-motion';
import { slideUp, sparkleVariants } from '../../../styles/animations';
import { siteContent } from '../../../data/content';
import {
  RecruitmentContainer,
  RecruitmentHeader,
  Title,
  Subtitle,
  Period,
  RecruitmentContent,
  Description,
  DescriptionLine,
  ApplyButton,
  SparkleEffect
} from './Recruitment.styles';

function Recruitment() {
  const { recruitment } = siteContent;

  return (
    <RecruitmentContainer>
      <RecruitmentHeader
        as={motion.div}
        variants={slideUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <Title>{recruitment.title}</Title>
        <Subtitle>{siteContent.organization.name}</Subtitle>
        <Period>
          서류 접수 기간: {recruitment.applicationPeriod.start} ~ {recruitment.applicationPeriod.end}
        </Period>
      </RecruitmentHeader>

      <RecruitmentContent
        as={motion.div}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <Description>
          {recruitment.description.map((line, index) => (
            <DescriptionLine key={index}>{line}</DescriptionLine>
          ))}
        </Description>

        <ApplyButton
          href={recruitment.formUrl}
          target="_blank"
          rel="noopener noreferrer"
          as={motion.a}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <SparkleEffect
            as={motion.div}
            variants={sparkleVariants}
            animate="animate"
          />
          지원 폼 작성하기
        </ApplyButton>
      </RecruitmentContent>
    </RecruitmentContainer>
  );
}

export default Recruitment;
