'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FaArrowRight, 
  FaEye, 
  FaCalendar, 
  FaMapMarkerAlt,
  FaAward,
  FaChevronLeft,
  FaChevronRight,
  FaPlay
} from 'react-icons/fa';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const FeaturedProjects = () => {
  const sectionRef = useRef(null);
  const galleryRef = useRef(null);
  const titleRef = useRef(null);
  const projectRefs = useRef([]);
  const [activeProject, setActiveProject] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const projects = [
    {
      id: 'addis-metro',
      title: 'Addis Ababa Light Rail',
      category: 'Mega Electric Project',
      description: 'Complete electrical infrastructure for Ethiopia\'s first light rail system, powering sustainable urban transportation.',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop',
      year: '2023',
      location: 'Addis Ababa',
      status: 'Completed',
      highlights: ['15km Rail Network', '34 Stations', '100% Renewable Energy'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'security-complex',
      title: 'National Security Complex',
      category: 'CCTV Installation',
      description: 'Advanced surveillance system with AI-powered monitoring for critical infrastructure protection.',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop',
      year: '2023',
      location: 'Addis Ababa',
      status: 'Completed',
      highlights: ['500+ Cameras', 'AI Detection', '24/7 Monitoring'],
      color: 'from-purple-500 to-indigo-500'
    },
    {
      id: 'highway-lighting',
      title: 'Addis-Djibouti Highway',
      category: 'Road Lighting',
      description: 'Smart LED lighting system for 200km highway with solar integration and remote monitoring.',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop',
      year: '2024',
      location: 'Addis Ababa - Djibouti',
      status: 'In Progress',
      highlights: ['200km Coverage', 'Solar Powered', 'Smart Controls'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'research-facility',
      title: 'Ethiopian Space Observatory',
      category: 'Ethiopian Collider',
      description: 'Precision electrical systems for advanced astronomical research and space observation facility.',
      image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=600&fit=crop',
      year: '2024',
      location: 'Entoto Mountains',
      status: 'Planning',
      highlights: ['Research Grade', 'Precision Systems', 'International Standards'],
      color: 'from-orange-500 to-red-500'
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
      // Advanced title animation with 3D perspective
      gsap.fromTo(titleRef.current,
        {
          opacity: 0,
          y: 100,
          rotationX: -30,
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

      // Gallery container animation
      gsap.fromTo(galleryRef.current,
        {
          opacity: 0,
          scale: 0.8,
          rotationY: -15
        },
        {
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: galleryRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Individual project cards stagger animation
      projectRefs.current.forEach((project, index) => {
        if (project) {
          gsap.fromTo(project,
            {
              opacity: 0,
              y: 50,
              rotationY: index % 2 === 0 ? -20 : 20,
              scale: 0.9
            },
            {
              opacity: 1,
              y: 0,
              rotationY: 0,
              scale: 1,
              duration: 1,
              ease: 'power3.out',
              delay: index * 0.2,
              scrollTrigger: {
                trigger: project,
                start: 'top 90%',
                toggleActions: 'play none none reverse'
              }
            }
          );
        }
      });

      // Parallax effect for the entire section
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.to(sectionRef.current, {
            backgroundPosition: `50% ${50 + progress * 20}%`,
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
      setActiveProject((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, projects.length]);

  // Mouse move handler for 3D effects
  const handleMouseMove = (e) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (rect) {
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      mouseX.set(x * 10);
      mouseY.set(y * 10);
    }
  };

  // Project navigation
  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
    setIsAutoPlaying(false);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
    setIsAutoPlaying(false);
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 lg:py-32 overflow-hidden bg-white"
      onMouseMove={handleMouseMove}
      aria-label="Featured Projects Gallery"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(45deg, #0066FF 25%, transparent 25%),
              linear-gradient(-45deg, #0066FF 25%, transparent 25%),
              linear-gradient(45deg, transparent 75%, #00D4FF 75%),
              linear-gradient(-45deg, transparent 75%, #00D4FF 75%)
            `,
            backgroundSize: '60px 60px',
            backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px'
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
              rotateX: useTransform(springY, [-10, 10], [2, -2]),
              rotateY: useTransform(springX, [-10, 10], [-2, 2])
            }}
          >
            <motion.div
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md border border-white/30 px-6 py-3 rounded-full text-blue-600 font-medium mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <FaAward className="w-5 h-5" />
              <span>Featured Projects</span>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            </motion.div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
              Our Work in{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                Action
              </span>
            </h2>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Discover how we've transformed Ethiopia's infrastructure with innovative 
              electro-mechanical solutions that power progress and inspire the future.
            </p>
          </motion.div>

          {/* Main Gallery */}
          <div ref={galleryRef} className="relative">
            
            {/* Featured Project Display */}
            <div className="relative h-[600px] rounded-3xl overflow-hidden mb-8 group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.1, rotateY: -15 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.9, rotateY: 15 }}
                  transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  {/* Project Image */}
                  <div className="relative w-full h-full">
                    <Image
                      src={projects[activeProject].image}
                      alt={projects[activeProject].title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      priority
                    />
                    
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${projects[activeProject].color} opacity-20`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Project Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                      >
                        <div className="flex items-center space-x-4 mb-4">
                          <span className={`px-3 py-1 bg-gradient-to-r ${projects[activeProject].color} rounded-full text-sm font-medium`}>
                            {projects[activeProject].category}
                          </span>
                          <div className="flex items-center space-x-2 text-sm text-white/80">
                            <FaCalendar className="w-4 h-4" />
                            <span>{projects[activeProject].year}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-white/80">
                            <FaMapMarkerAlt className="w-4 h-4" />
                            <span>{projects[activeProject].location}</span>
                          </div>
                        </div>
                        
                        <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                          {projects[activeProject].title}
                        </h3>
                        
                        <p className="text-lg text-white/90 mb-6 max-w-2xl">
                          {projects[activeProject].description}
                        </p>
                        
                        {/* Project Highlights */}
                        <div className="flex flex-wrap gap-3 mb-6">
                          {projects[activeProject].highlights.map((highlight, index) => (
                            <motion.div
                              key={index}
                              className="flex items-center space-x-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-sm"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                            >
                              <div className={`w-2 h-2 bg-gradient-to-r ${projects[activeProject].color} rounded-full`} />
                              <span>{highlight}</span>
                            </motion.div>
                          ))}
                        </div>
                        
                        {/* View Project Button */}
                        <Link href={`/projects/${projects[activeProject].id}`}>
                          <motion.button
                            className="group/btn inline-flex items-center space-x-2 px-6 py-3 bg-white text-slate-800 font-semibold rounded-xl hover:bg-white/90 transition-colors duration-200"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <FaEye className="w-4 h-4" />
                            <span>View Project</span>
                            <FaArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                          </motion.button>
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Controls */}
              <div className="absolute top-1/2 left-4 right-4 flex justify-between items-center pointer-events-none">
                <motion.button
                  onClick={prevProject}
                  className="w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200 pointer-events-auto"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaChevronLeft className="w-5 h-5" />
                </motion.button>
                
                <motion.button
                  onClick={nextProject}
                  className="w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200 pointer-events-auto"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaChevronRight className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Auto-play Control */}
              <motion.button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaPlay className={`w-4 h-4 transition-transform duration-200 ${isAutoPlaying ? 'rotate-0' : 'rotate-90'}`} />
              </motion.button>
            </div>

            {/* Project Thumbnails */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  ref={el => projectRefs.current[index] = el}
                  className={`relative h-32 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${
                    activeProject === index 
                      ? 'ring-4 ring-blue-500 ring-opacity-50 scale-105' 
                      : 'hover:scale-105'
                  }`}
                  onClick={() => {
                    setActiveProject(index);
                    setIsAutoPlaying(false);
                  }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-30`} />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  <div className="absolute bottom-2 left-2 right-2">
                    <h4 className="text-white text-sm font-semibold truncate">
                      {project.title}
                    </h4>
                    <p className="text-white/80 text-xs truncate">
                      {project.category}
                    </p>
                  </div>

                  {/* Active Indicator */}
                  {activeProject === index && (
                    <motion.div
                      className="absolute top-2 right-2 w-3 h-3 bg-white rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href="/projects">
              <motion.button
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 20px 40px rgba(0, 102, 255, 0.3)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>View All Projects</span>
                  <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
                
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;