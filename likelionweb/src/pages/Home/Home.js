import React from 'react';
import { motion } from 'framer-motion';
import { pageTransition } from '../../styles/animations';
import Hero from '../../components/sections/Hero/Hero';
import About from '../../components/sections/About/About';
import Roadmap from '../../components/sections/Roadmap/Roadmap';
import Management from '../../components/sections/Management/Management';
import Awards from '../../components/sections/Awards/Awards';
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
      <About />
      <Roadmap />
      <Management />
      <Awards />
    </PageContainer>
  );
}

export default Home;
