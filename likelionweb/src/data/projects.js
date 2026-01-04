export const projects = [
  {
    id: 'woowang',
    title: '우리 따라왕',
    generation: 12,
    year: 2024,
    description: '웹 기반 프로젝트',
    thumbnail: '/github_logo.svg',
    category: ['Web'],
    github: 'https://github.com/LikelionKau12th/WooWang_FE.git',
    tags: ['React', 'Frontend'],
  },
  {
    id: 'mutcycle',
    title: '멋사이클링',
    generation: 12,
    year: 2024,
    description: '웹 기반 프로젝트',
    thumbnail: '/github_logo.svg',
    category: ['Web'],
    github: 'https://github.com/LikelionKau12th/mutcycle.git',
    tags: ['Web Development'],
  },
  {
    id: 'babywithus',
    title: '우리랑 아기랑',
    generation: 12,
    year: 2024,
    description: '웹 기반 프로젝트',
    thumbnail: '/github_logo.svg',
    category: ['Web'],
    github: 'https://github.com/LikelionKau12th/BabyWithUs-Front.git',
    tags: ['React', 'Frontend'],
  },
];

export const getProjectsByGeneration = (gen) =>
  projects.filter(p => p.generation === gen);

export const getProjectsByCategory = (category) =>
  projects.filter(p => p.category.includes(category));
