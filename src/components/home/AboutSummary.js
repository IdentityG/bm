'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  FaCheckCircle,
  FaAward,
  FaClock,
  FaUsers,
  FaArrowRight,
  FaBolt,
  FaShieldAlt,
  FaCog
} from 'react-icons/fa';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const AboutSummary = () => {
  const sectionRef = useRef(null);
  const statsContainerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  const stats = [
    { value: 10, suffix: '+', label: 'Years in Business', icon: FaClock, color: 'from-blue-500 to-blue-600' },
    { value: 500, suffix: '+', label: 'Projects Completed', icon: FaCheckCircle, color: 'from-green-500 to-green-600' },
    { value: 100, suffix: '%', label: 'Client Satisfaction', icon: FaAward, color: 'from-yellow-500 to-yellow-600' },
    { value: 50, suffix: '+', label: 'Expert Team Members', icon: FaUsers, color: 'from-purple-500 to-purple-600' },
  ];

  const services = [
    { icon: FaBolt, title: 'Electrical Excellence', description: 'Mega electric projects and power distribution systems' },
    { icon: FaShieldAlt, title: 'Security Solutions', description: 'Advanced CCTV and comprehensive security systems' },
    { icon: FaCog, title: 'Technical Innovation', description: 'Ethiopian Collider and cutting-edge engineering' },
  ];

  // Counter Component with its own animation logic
  const CounterNumber = ({ value, suffix, index }) => {
    const counterRef = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
      if (!counterRef.current || !isInView || hasAnimated) return;

      const counter = { value: 0 };

      gsap.to(counter, {
        value: value,
        duration: 2,
        delay: index * 0.1,
        ease: 'power2.out',
        onUpdate: () => {
          if (counterRef.current) {
            counterRef.current.textContent = Math.floor(counter.value).toLocaleString();
          }
        },
        onComplete: () => {
          setHasAnimated(true);
          // Pulse animation on complete
          if (counterRef.current && counterRef.current.parentElement) {
            gsap.to(counterRef.current.parentElement, {
              scale: 1.05,
              duration: 0.2,
              yoyo: true,
              repeat: 1,
              ease: 'power2.inOut'
            });
          }
        }
      });

      return () => {
        gsap.killTweensOf(counter);
      };
    }, [value, index, hasAnimated]); // Removed isInView from dependencies

    return (
      <>
        <span ref={counterRef} className="tabular-nums inline-block">
          0
        </span>
        <span className={`bg-gradient-to-r ${stats[index].color} bg-clip-text text-transparent`}>
          {suffix}
        </span>
      </>
    );
  };

  // Set up intersection observer for triggering counter animation
  useEffect(() => {
    if (!statsContainerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isInView) {
            setIsInView(true);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px'
      }
    );

    const currentStatsContainer = statsContainerRef.current;
    if (currentStatsContainer) {
      observer.observe(currentStatsContainer);
    }

    return () => {
      if (currentStatsContainer) {
        observer.unobserve(currentStatsContainer);
      }
    };
  }, [isInView]);

  // Background animations
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Kill any existing background animations
      gsap.killTweensOf(sectionRef.current);
      
      // Background animation
      gsap.to(sectionRef.current, {
        backgroundPosition: '200% center',
        duration: 25,
        repeat: -1,
        ease: 'none'
      });

      // Service cards floating animation
      const serviceCards = sectionRef.current.querySelectorAll('.service-card');
      if (serviceCards.length > 0) {
        gsap.killTweensOf(serviceCards);
        gsap.to(serviceCards, {
          y: -5,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: 'power2.inOut',
          stagger: 0.2
        });
      }
    }, sectionRef);

    return () => {
      ctx.revert();
      // Clean up background animations
      const currentSection = sectionRef.current;
      if (currentSection) {
        gsap.killTweensOf(currentSection);
        const serviceCards = currentSection.querySelectorAll('.service-card');
        if (serviceCards) {
          gsap.killTweensOf(serviceCards);
        }
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 overflow-hidden"
      style={{ backgroundSize: '400% 400%' }}
    >
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 80%, #0066FF 1px, transparent 1px),
              radial-gradient(circle at 80% 20%, #00D4FF 1px, transparent 1px),
              radial-gradient(circle at 40% 40%, #0066FF 0.5px, transparent 0.5px)
            `,
            backgroundSize: '50px 50px, 30px 30px, 20px 20px'
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <FaBolt className="w-4 h-4" />
              <span>About B&M Electro-Mechanical</span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              Empowering{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Ethiopia's Growth
              </span>
            </h2>

            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              At B&M, we empower Ethiopia's growth with innovative electro-mechanical
              solutions, backed by over a decade of expertise in CCTV installation, mega
              electric projects, and road lighting systems.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  Our Mission & Vision
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  We are committed to delivering world-class electro-mechanical solutions that
                  power Ethiopia's infrastructure development. Our expertise spans from
                  sophisticated security systems to large-scale electrical installations, always
                  prioritizing quality, innovation, and client satisfaction.
                </p>

                <div className="space-y-4">
                  {services.map((service, i) => (
                    <motion.div
                      key={i}
                      className="service-card flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                          <service.icon className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-1">
                          {service.title}
                        </h4>
                        <p className="text-sm text-slate-600">{service.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Link href="/about">
                  <motion.button
                    className="group inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg shadow-lg overflow-hidden relative"
                    whileHover={{ scale: 1.02, boxShadow: '0 10px 25px rgba(0, 102, 255, 0.3)' }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">Discover Our Story</span>
                    <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200 relative z-10" />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Content - Stats */}
            <div
              ref={statsContainerRef}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="relative group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 text-center relative overflow-hidden group-hover:-translate-y-1 transition-transform duration-300">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    />
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg mb-4 relative z-10`}
                    >
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="relative z-10">
                      <div className="text-3xl sm:text-4xl font-bold text-slate-800 mb-2">
                        <CounterNumber value={stat.value} suffix={stat.suffix} index={i} />
                      </div>
                      <p className="text-sm font-medium text-slate-600">
                        {stat.label}
                      </p>
                    </div>
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSummary;