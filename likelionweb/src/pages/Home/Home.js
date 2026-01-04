import React from 'react';
import { motion } from 'framer-motion';
import { pageTransition } from '../../styles/animations';
import Hero from '../../components/sections/Hero/Hero';
import Management from '../../components/sections/Management/Management';
import Projects from '../../components/sections/Projects/Projects';
import Recruitment from '../../components/sections/Recruitment/Recruitment';
import { PageContainer } from './Home.styles';

function Home() {
  return (
    <PageContainer
      as={motion.div}
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Hero />
      <Management />
      <Projects />
      <Recruitment />
    </PageContainer>
  );
}

export default Home;
