import React from 'react';
import { motion } from 'framer-motion';
import {
  RoadmapContainer,
  RoadmapHeader,
  SectionTitle,
  Timeline,
  TimelineItem,
  TimelineMarker,
  TimelineContent,
  TimelineDate
} from './Roadmap.styles';

const timelineData = [
  {
    icon: '🌸',
    title: 'Front-end 세션',
    description: 'Git · Figma · React',
    date: '3월 - 5월'
  },
  {
    icon: '💡',
    title: '중앙 아이디어톤',
    description: 'IT 서비스 기획 도출 및 프로토타입 제작',
    date: '5월'
  },
  {
    icon: '🏆',
    title: '중앙 해커톤',
    description: 'IT 서비스 개발 및 배포',
    date: '8월'
  },
  {
    icon: '⚙️',
    title: 'Back-end & 배포 세션',
    description: 'Spring · OAuth2 · AWS · Vercel',
    date: '9월 - 11월'
  },
  {
    icon: '🤝',
    title: '권역별 연합 해커톤 & 기업 연계 해커톤',
    description: '대학 연합과 기업 협업을 통한 실무형 솔루션 개발',
    date: '9월 - 11월'
  },
  {
    icon: '🎉',
    title: '최종 발표',
    description: 'LTE 프로젝트 및 소감 발표',
    date: '11월'
  }
];

function Roadmap() {
  return (
    <RoadmapContainer id="roadmap">
      <RoadmapHeader
        as={motion.div}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionTitle>Roadmap</SectionTitle>
      </RoadmapHeader>

      <Timeline>
        {timelineData.map((item, index) => (
          <TimelineItem
            key={index}
            as={motion.div}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <TimelineMarker>{item.icon}</TimelineMarker>
            <TimelineContent>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <TimelineDate>{item.date}</TimelineDate>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </RoadmapContainer>
  );
}

export default Roadmap;
