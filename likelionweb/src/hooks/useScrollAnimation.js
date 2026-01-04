import { useEffect } from 'react';
import { useAnimation, useInView } from 'framer-motion';

export const useScrollAnimation = (ref, threshold = 0.1) => {
  const controls = useAnimation();
  const inView = useInView(ref, {
    threshold,
    once: true // Animation triggers only once
  });

  useEffect(() => {
    if (inView) {
      controls.start('animate');
    }
  }, [controls, inView]);

  return controls;
};
