'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const SmoothScrollProvider = ({ children }) => {
  const lenisRef = useRef(null);

  useEffect(() => {
    let lenis = null;

    // Try to initialize Lenis with fallback
    const initSmoothScroll = async () => {
      try {
        // Dynamic import for better compatibility
        const { default: Lenis } = await import('lenis');

        lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          direction: 'vertical',
          gestureDirection: 'vertical',
          smooth: true,
          mouseMultiplier: 1,
          smoothTouch: false,
          touchMultiplier: 2,
          infinite: false,
        });

        lenisRef.current = lenis;

        // Make Lenis available globally for navbar
        window.lenis = lenis;

        // GSAP ScrollTrigger integration
        lenis.on('scroll', ScrollTrigger.update);

        gsap.ticker.add((time) => {
          lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);

      } catch (error) {
        console.warn('Lenis not available, using native smooth scroll:', error);

        // Fallback smooth scroll function
        window.lenis = {
          scrollTo: (target, options = {}) => {
            const element = typeof target === 'string' ? document.querySelector(target) : target;
            if (element) {
              element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                ...options
              });
            }
          }
        };
      }
    };

    initSmoothScroll();

    // Cleanup
    return () => {
      if (lenis) {
        lenis.destroy();
        gsap.ticker.remove();
      }
      delete window.lenis;
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScrollProvider;