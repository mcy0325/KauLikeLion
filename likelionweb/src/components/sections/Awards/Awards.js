import { motion } from 'framer-motion';
import {
  AwardsContainer,
  AwardsHeader,
  SectionTitle,
  AwardsSummary,
  YearCard,
  YearBadge,
  AwardsList,
  AwardItem,
  AwardPrizeBadge,
  AwardInfo,
  TotalCount
} from './Awards.styles';

const awardsSummary = [
  {
    year: '2025',
    totalCount: 4,
    awards: [
      { competition: 'ICT 창업메이커톤', prize: '총장상', count: 1 },
      { competition: 'ICT 창업메이커톤', prize: '우수상', count: 2 },
      { competition: '창업아이디어 경진대회', prize: '최우수상', count: 1 }
    ]
  },
  {
    year: '2024',
    totalCount: 4,
    awards: [
      { competition: 'ICT 창업메이커톤', prize: '최우수상', count: 2 },
      { competition: 'ICT 창업메이커톤', prize: '우수상', count: 1 },
      { competition: '창업아이디어 경진대회', prize: '우수상', count: 1 }
    ]
  }
];

function Awards() {
  return (
    <AwardsContainer id="awards">
      <AwardsHeader
        as={motion.div}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionTitle>Awards</SectionTitle>
      </AwardsHeader>

      <AwardsSummary>
        {awardsSummary.map((yearData, index) => (
          <YearCard
            key={yearData.year}
            as={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <YearBadge>{yearData.year}</YearBadge>
            <TotalCount>총 {yearData.totalCount}회 수상</TotalCount>
            <AwardsList>
              {yearData.awards.map((award, idx) => (
                <AwardItem key={idx}>
                  <AwardPrizeBadge prize={award.prize}>{award.prize}</AwardPrizeBadge>
                  <AwardInfo>
                    {award.competition} {award.count > 1 && `(${award.count}팀)`}
                  </AwardInfo>
                </AwardItem>
              ))}
            </AwardsList>
          </YearCard>
        ))}
      </AwardsSummary>
    </AwardsContainer>
  );
}

export default Awards;
