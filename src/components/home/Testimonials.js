'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FaQuoteLeft, 
  FaStar, 
  FaChevronLeft, 
  FaChevronRight,
  FaPlay,
  FaPause,
  FaBuilding,
  FaUserTie,
  FaHeart
} from 'react-icons/fa';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Testimonials = () => {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);
  const titleRef = useRef(null);
  const testimonialRefs = useRef([]);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(1);

  const testimonials = [
    {
      id: 1,
      name: 'Dr. Alemayehu Tadesse',
      position: 'Director of Infrastructure',
      company: 'Ethiopian Railways Corporation',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      quote: 'B&M\'s expertise in electro-mechanical systems transformed our light rail project. Their innovative approach and attention to detail exceeded all expectations.',
      rating: 5,
      project: 'Addis Ababa Light Rail',
      color: 'from-blue-500 to-cyan-500',
      bgPattern: 'radial-gradient(circle at 30% 70%, rgba(0, 102, 255, 0.1) 0%, transparent 50%)'
    },
    {
      id: 2,
      name: 'Eng. Meron Getachew',
      position: 'Security Operations Manager',
      company: 'National Security Agency',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      quote: 'The CCTV installation by B&M has revolutionized our security infrastructure. The AI-powered monitoring system provides unparalleled protection.',
      rating: 5,
      project: 'National Security Complex',
      color: 'from-purple-500 to-indigo-500',
      bgPattern: 'radial-gradient(circle at 70% 30%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)'
    },
    {
      id: 3,
      name: 'Ato Bekele Worku',
      position: 'Highway Development Director',
      company: 'Ethiopian Roads Authority',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      quote: 'B&M\'s smart lighting solution for our highway project combines sustainability with cutting-edge technology. Truly impressive work.',
      rating: 5,
      project: 'Addis-Djibouti Highway',
      color: 'from-green-500 to-emerald-500',
      bgPattern: 'radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)'
    },
    {
      id: 4,
      name: 'Prof. Hirut Assefa',
      position: 'Research Director',
      company: 'Ethiopian Space Science Society',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      quote: 'Working with B&M on our space observatory project has been exceptional. Their precision engineering meets international research standards.',
      rating: 5,
      project: 'Ethiopian Space Observatory',
      color: 'from-orange-500 to-red-500',
      bgPattern: 'radial-gradient(circle at 20% 80%, rgba(255, 107, 53, 0.1) 0%, transparent 50%)'
    }
  ];

  // Mouse tracking for 3D effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Advanced title animation with morphing effect
      gsap.fromTo(titleRef.current,
        {
          opacity: 0,
          y: 80,
          rotationX: -20,
          transformPerspective: 1000
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1
          }
        }
      );

      // Slider container animation
      gsap.fromTo(sliderRef.current,
        {
          opacity: 0,
          scale: 0.9,
          rotationY: -10
        },
        {
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sliderRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Floating animation for testimonial cards
      testimonialRefs.current.forEach((testimonial, index) => {
        if (testimonial) {
          gsap.to(testimonial, {
            y: -8,
            duration: 2.5 + index * 0.3,
            repeat: -1,
            yoyo: true,
            ease: 'power2.inOut',
            delay: index * 0.4
          });
        }
      });

      // Background parallax effect
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.to(sectionRef.current, {
            backgroundPosition: `50% ${50 + progress * 30}%`,
            duration: 0.3,
            ease: 'none'
          });
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setDirection(1);
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  // Mouse move handler for 3D effects
  const handleMouseMove = (e) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (rect) {
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      mouseX.set(x * 15);
      mouseY.set(y * 15);
    }
  };

  // Navigation functions
  const nextTestimonial = () => {
    setDirection(1);
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index) => {
    setDirection(index > activeTestimonial ? 1 : -1);
    setActiveTestimonial(index);
    setIsAutoPlaying(false);
  };

  // Animation variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: direction > 0 ? 45 : -45,
      scale: 0.8
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      rotateY: 0,
      scale: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: direction < 0 ? 45 : -45,
      scale: 0.8
    })
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 lg:py-32 overflow-hidden bg-white"
      onMouseMove={handleMouseMove}
      aria-label="Client Testimonials"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, #0066FF 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, #00D4FF 1px, transparent 1px),
              radial-gradient(circle at 50% 50%, #8B5CF6 1.5px, transparent 1.5px)
            `,
            backgroundSize: '100px 100px, 60px 60px, 80px 80px'
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <motion.div
            ref={titleRef}
            className="text-center mb-16"
            style={{
              rotateX: useTransform(springY, [-15, 15], [3, -3]),
              rotateY: useTransform(springX, [-15, 15], [-3, 3])
            }}
          >
            <motion.div
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md border border-slate-200 px-6 py-3 rounded-full text-blue-600 font-medium mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <FaHeart className="w-5 h-5 text-red-500" />
              <span>Client Testimonials</span>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            </motion.div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
              What Our{' '}
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 bg-clip-text text-transparent">
                Clients Say
              </span>
            </h2>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Discover how our innovative electro-mechanical solutions have transformed 
              projects and exceeded expectations across Ethiopia's infrastructure landscape.
            </p>
          </motion.div>

          {/* Main Testimonial Slider */}
          <div ref={sliderRef} className="relative max-w-5xl mx-auto">
            
            {/* Testimonial Display */}
            <div className="relative h-[500px] perspective-1000">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={activeTestimonial}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.4 },
                    rotateY: { duration: 0.6 },
                    scale: { duration: 0.4 }
                  }}
                  className="absolute inset-0"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div 
                    className="h-full bg-slate-50/80 backdrop-blur-md border border-slate-200 rounded-3xl p-8 lg:p-12 relative overflow-hidden shadow-lg"
                    style={{
                      background: `
                        linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%),
                        ${testimonials[activeTestimonial].bgPattern}
                      `
                    }}
                  >
                    {/* Quote Icon */}
                    <motion.div
                      className={`absolute top-8 left-8 w-16 h-16 bg-gradient-to-br ${testimonials[activeTestimonial].color} rounded-2xl flex items-center justify-center opacity-20`}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <FaQuoteLeft className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col justify-center">
                      
                      {/* Rating Stars */}
                      <motion.div
                        className="flex items-center space-x-1 mb-6"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      >
                        {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                          >
                            <FaStar className="w-5 h-5 text-yellow-400" />
                          </motion.div>
                        ))}
                      </motion.div>

                      {/* Quote */}
                      <motion.blockquote
                        className="text-2xl lg:text-3xl font-medium text-slate-800 leading-relaxed mb-8"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                      >
                        "{testimonials[activeTestimonial].quote}"
                      </motion.blockquote>

                      {/* Client Info */}
                      <motion.div
                        className="flex items-center space-x-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                      >
                        {/* Avatar */}
                        <div className="relative">
                          <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${testimonials[activeTestimonial].color} p-1`}>
                            <img
                              src={testimonials[activeTestimonial].avatar}
                              alt={testimonials[activeTestimonial].name}
                              className="w-full h-full rounded-full object-cover"
                            />
                          </div>
                          <div className={`absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br ${testimonials[activeTestimonial].color} rounded-full flex items-center justify-center`}>
                            <FaUserTie className="w-3 h-3 text-white" />
                          </div>
                        </div>

                        {/* Details */}
                        <div>
                          <h4 className="text-xl font-bold text-slate-800 mb-1">
                            {testimonials[activeTestimonial].name}
                          </h4>
                          <p className="text-slate-600 mb-1">
                            {testimonials[activeTestimonial].position}
                          </p>
                          <div className="flex items-center space-x-2 text-sm text-slate-500">
                            <FaBuilding className="w-4 h-4" />
                            <span>{testimonials[activeTestimonial].company}</span>
                          </div>
                        </div>
                      </motion.div>

                      {/* Project Tag */}
                      <motion.div
                        className={`absolute bottom-8 right-8 px-4 py-2 bg-gradient-to-r ${testimonials[activeTestimonial].color} rounded-full text-white text-sm font-medium shadow-lg`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.8 }}
                      >
                        {testimonials[activeTestimonial].project}
                      </motion.div>
                    </div>

                    {/* Glow Effect */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${testimonials[activeTestimonial].color} opacity-0 rounded-3xl`}
                      animate={{ opacity: [0, 0.05, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="absolute top-1/2 -left-6 -right-6 flex justify-between items-center pointer-events-none">
              <motion.button
                onClick={prevTestimonial}
                className="w-14 h-14 bg-white/80 backdrop-blur-md border border-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:bg-white hover:text-slate-800 transition-colors duration-200 pointer-events-auto shadow-lg"
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaChevronLeft className="w-6 h-6" />
              </motion.button>
              
              <motion.button
                onClick={nextTestimonial}
                className="w-14 h-14 bg-white/80 backdrop-blur-md border border-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:bg-white hover:text-slate-800 transition-colors duration-200 pointer-events-auto shadow-lg"
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaChevronRight className="w-6 h-6" />
              </motion.button>
            </div>

            {/* Auto-play Control */}
            <motion.button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="absolute -top-6 right-0 w-12 h-12 bg-white/80 backdrop-blur-md border border-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:bg-white hover:text-slate-800 transition-colors duration-200 shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isAutoPlaying ? (
                <FaPause className="w-5 h-5" />
              ) : (
                <FaPlay className="w-5 h-5 ml-1" />
              )}
            </motion.button>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center space-x-3 mt-12">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeTestimonial === index 
                    ? `bg-gradient-to-r ${testimonials[index].color} scale-125` 
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="max-w-md mx-auto mt-8">
            <div className="w-full h-1 bg-slate-200 rounded-full overflow-hidden">
              <motion.div
                className={`h-full bg-gradient-to-r ${testimonials[activeTestimonial].color} rounded-full`}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: isAutoPlaying ? 6 : 0, ease: 'linear' }}
                key={activeTestimonial}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;