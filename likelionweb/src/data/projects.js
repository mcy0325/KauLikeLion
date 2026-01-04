export const projects = [
  {
    id: 'hidaddy',
    title: '하이대디',
    generation: 13,
    year: 2025,
    description: '아빠들을 위한 임신 동행 애플리케이션',
    category: ['App'],
    github: 'https://github.com/Devroup',
    tags: ['React Native', 'Java'],
  },
    {
    id: 'princesslibrary',
    title: 'Princess Library',
    generation: 13,
    year: 2025,
    description: 'AI 기반 독서록, 독서 토론 웹 서비스',
    category: ['Web'],
    github: 'https://github.com/Team-Fwaiya/Frontend-Princess',
    tags: ['React', 'Java', 'Spring'],
  },
  {
    id: 'classfit',
    title: '클래스핏(class+fit)',
    generation: 13,
    year: 2025,
    description: 'AI 기반 수강신청 지원 웹 서비스',
    category: ['Web'],
    github: 'https://github.com/Zsun3011/classfit',
    tags: ['React', 'Spring Boot', 'AWS'],
  },
   {
    id: 'woowang',
    title: '우리 따라왕',
    generation: 12,
    year: 2024,
    description: '여행 코스 추천 웹 서비스',
    category: ['Web'],
    github: 'https://github.com/LikelionKau12th/WooWang_FE.git',
    tags: ['HTML', 'CSS', 'JavaScript', 'Java'],
  },
  {
    id: 'mutcycle',
    title: '멋사이클링',
    generation: 12,
    year: 2024,
    description: '웹 기반 프로젝트',
    category: ['Web'],
    github: 'https://github.com/LikelionKau12th/mutcycle.git',
    tags: ['HTML', 'JavaScript', 'Java'],
  },
  {
    id: 'babywithus',
    title: '우리랑 아기랑',
    generation: 12,
    year: 2024,
    description: '초보 부모들을 위한 임신 동행 웹 서비스',
    category: ['Web'],
    github: 'https://github.com/LikelionKau12th/BabyWithUs-Front.git',
    tags: ['HTML', 'CSS', 'JavaScript', 'Java'],
  },
];

export const getProjectsByGeneration = (gen) =>
  projects.filter(p => p.generation === gen);

export const getProjectsByCategory = (category) =>
  projects.filter(p => p.category.includes(category));
