'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CallToAction() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);
  const particlesRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const buttons = buttonsRef.current;
    const particles = particlesRef.current;
    const glow = glowRef.current;

    // Create floating particles animation with glow effect
    const createParticles = () => {
      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute rounded-full';
        
        // Varied particle sizes and colors
        const size = Math.random() * 4 + 1;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.background = i % 2 === 0 
          ? 'radial-gradient(circle, rgba(14, 165, 233, 0.8) 0%, rgba(14, 165, 233, 0) 70%)'
          : 'radial-gradient(circle, rgba(6, 182, 212, 0.8) 0%, rgba(6, 182, 212, 0) 70%)';
        particle.style.boxShadow = i % 2 === 0 
          ? '0 0 10px rgba(14, 165, 233, 0.5)'
          : '0 0 10px rgba(6, 182, 212, 0.5)';
        
        particles.appendChild(particle);

        gsap.to(particle, {
          y: -150,
          x: Math.random() * 200 - 100,
          opacity: 0,
          duration: 4 + Math.random() * 3,
          repeat: -1,
          delay: Math.random() * 3,
          ease: 'power2.out'
        });
      }
    };

    createParticles();

    // Animated glow effect
    gsap.to(glow, {
      scale: 1.2,
      opacity: 0.3,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });

    // Main animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });

    tl.fromTo(title, 
      { y: 100, opacity: 0, scale: 0.8 },
      { y: 0, opacity: 1, scale: 1, duration: 1, ease: 'back.out(1.7)' }
    )
    .fromTo(subtitle,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.5'
    )
    .fromTo(buttons.children,
      { y: 30, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.2, ease: 'back.out(1.7)' },
      '-=0.3'
    );

    // Continuous background animation
    gsap.to(section, {
      backgroundPosition: '200% 0%',
      duration: 30,
      repeat: -1,
      ease: 'none'
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(-45deg, #0a0e27, #0f172a, #1e293b, #0a0e27)',
        backgroundSize: '400% 400%'
      }}
    >
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/50"></div>
      
      {/* Central glow effect */}
      <div 
        ref={glowRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.3) 0%, transparent 70%)',
          filter: 'blur(100px)'
        }}
      ></div>

      {/* Animated particles container */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none"></div>
      
      {/* Geometric background elements with glow */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-sky-400 rotate-45 animate-pulse shadow-[0_0_30px_rgba(14,165,233,0.5)]"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-cyan-400 rotate-12 animate-bounce shadow-[0_0_30px_rgba(6,182,212,0.5)]"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-sky-500/30 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 border border-cyan-400/50 rounded-full animate-spin"></div>
        <div className="absolute bottom-1/3 left-1/3 w-40 h-40 border border-sky-400/20 rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main heading with enhanced gradient */}
          <h2 
            ref={titleRef}
            className="text-5xl md:text-7xl font-bold font-poppins mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-sky-200 to-white bg-clip-text text-transparent drop-shadow-2xl">
              Ready to Power Up
            </span>
            <span className="block bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent drop-shadow-2xl animate-pulse">
              Your Project?
            </span>
          </h2>

          {/* Subtitle with better contrast */}
          <p 
            ref={subtitleRef}
            className="text-xl md:text-2xl text-gray-200 mb-12 font-inter leading-relaxed max-w-3xl mx-auto drop-shadow-lg"
          >
            Join hundreds of satisfied clients who trust <span className="text-sky-400 font-semibold">B&M Electro-Mechanical</span> for 
            their electrical, CCTV, and lighting solutions. Let's bring your vision to life.
          </p>

          {/* Enhanced action buttons */}
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 shadow-lg shadow-sky-500/30 hover:shadow-xl hover:shadow-sky-500/40">
              <span className="relative z-10 flex items-center gap-3 text-white">
                Get Free Quote
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button className="group relative px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-sky-400/50 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:border-sky-400 hover:shadow-lg hover:shadow-sky-400/30">
              <span className="relative z-10 flex items-center gap-3">
                <svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-100">Call Now: </span>
                <span className="text-sky-400 font-bold">+1 (555) 123-4567</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-sky-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Enhanced trust indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group hover:scale-110 transition-transform duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent mb-2 drop-shadow-lg">500+</div>
              <div className="text-sm text-gray-300 font-medium">Projects Completed</div>
            </div>
            <div className="text-center group hover:scale-110 transition-transform duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent mb-2 drop-shadow-lg">15+</div>
              <div className="text-sm text-gray-300 font-medium">Years Experience</div>
            </div>
            <div className="text-center group hover:scale-110 transition-transform duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent mb-2 drop-shadow-lg">24/7</div>
              <div className="text-sm text-gray-300 font-medium">Support Available</div>
            </div>
            <div className="text-center group hover:scale-110 transition-transform duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent mb-2 drop-shadow-lg">100%</div>
              <div className="text-sm text-gray-300 font-medium">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced bottom wave decoration
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor" className="text-electric-blue"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor" className="text-bright-cyan"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor" className="text-deep-navy"></path>
        </svg>
      </div>  */}
    </section>
  );
}