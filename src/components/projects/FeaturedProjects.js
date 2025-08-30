'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaArrowLeft,
  FaArrowRight,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUsers,
  FaDollarSign,
  FaClock,
  FaAward,
  FaEye,
  FaExternalLinkAlt
} from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedProjects() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const featuredProjects = [
    {
      id: 1,
      title: 'Addis Ababa Light Rail CCTV Network',
      category: 'CCTV & Security',
      client: 'Ethiopian Railways Corporation',
      location: 'Addis Ababa, Ethiopia',
      date: '2024',
      value: '$2.5M',
      duration: '8 Months',
      description: 'Comprehensive surveillance system for the entire Addis Ababa Light Rail network covering 34 stations and 34.25km of track with 500+ HD cameras, central command center, and real-time monitoring capabilities.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop',
      beforeImage: 'https://images.unsplash.com/photo-1586281010691-3d3857c8c9c4?w=600&h=400&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop',
      achievements: [
        '500+ HD Cameras Installed',
        '34 Stations Covered',
        '99.9% System Uptime',
        '24/7 Monitoring Center'
      ],
      challenges: [
        'Complex railway environment integration',
        'Extreme weather resistance requirements',
        'Real-time data transmission across 34km',
        'Minimal service disruption during installation'
      ],
      results: {
        'Security Incidents': '95% Reduction',
        'Response Time': '30 Seconds',
        'System Reliability': '99.9%',
        'Coverage Area': '100% Complete'
      },
      gradient: 'from-[#0066FF] to-[#00D4FF]'
    },
    {
      id: 2,
      title: 'Hawassa Industrial Park Power Grid',
      category: 'Mega Electric',
      client: 'Ethiopian Industrial Parks Development Corporation',
      location: 'Hawassa, Ethiopia',
      date: '2023-2024',
      value: '$15M',
      duration: '18 Months',
      description: 'Design and implementation of a complete electrical infrastructure for Hawassa Industrial Park including 132kV substation, distribution networks, backup systems, and smart grid technology serving 50+ manufacturing facilities.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=800&fit=crop',
      beforeImage: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      achievements: [
        '132kV Substation Built',
        '50+ Factories Connected',
        '500MW Capacity',
        'Smart Grid Integration'
      ],
      challenges: [
        'Massive scale coordination',
        'International safety standards compliance',
        'Phased implementation without disruption',
        'Integration with national grid'
      ],
      results: {
        'Power Reliability': '99.8%',
        'Energy Efficiency': '25% Improvement',
        'Jobs Created': '15,000+',
        'Economic Impact': '$500M+ Annual'
      },
      gradient: 'from-[#FF6B35] to-[#F59E0B]'
    },
    {
      id: 3,
      title: 'Bahir Dar Smart City Lighting',
      category: 'Road Lighting',
      client: 'Bahir Dar City Administration',
      location: 'Bahir Dar, Ethiopia',
      date: '2023',
      value: '$3.2M',
      duration: '12 Months',
      description: 'Complete transformation of Bahir Dar city lighting infrastructure with smart LED systems, IoT sensors, automated controls, and energy management across 150km of roads and public spaces.',
      image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1200&h=800&fit=crop',
      beforeImage: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=600&h=400&fit=crop',
      achievements: [
        '2,500 Smart LED Lights',
        '150km Road Coverage',
        'IoT Sensor Network',
        'Central Management System'
      ],
      challenges: [
        'City-wide infrastructure upgrade',
        'Minimal traffic disruption',
        'Weather-resistant installations',
        'Integration with existing systems'
      ],
      results: {
        'Energy Savings': '75%',
        'Maintenance Reduction': '60%',
        'Light Quality': '300% Better',
        'Citizen Satisfaction': '95%'
      },
      gradient: 'from-[#10B981] to-[#00D4FF]'
    }
  ];

  useEffect(() => {
    // Ensure elements exist before animating
    if (!sectionRef.current || !titleRef.current || !sliderRef.current) {
      return;
    }

    const section = sectionRef.current;
    const title = titleRef.current;
    const slider = sliderRef.current;

    // Kill existing ScrollTriggers for this component
    ScrollTrigger.getAll().forEach(trigger => {
      if (trigger.trigger === section || trigger.trigger === slider) {
        trigger.kill();
      }
    });

    // Set initial states
    gsap.set(title, { y: 100, opacity: 0 });
    gsap.set(slider, { y: 80, opacity: 0 });

    // Title animation
    gsap.to(title, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
        id: 'featuredProjects-title'
      }
    });

    // Slider animation
    gsap.to(slider, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: slider,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
        id: 'featuredProjects-slider'
      }
    });

    return () => {
      // Clean up only this component's ScrollTriggers
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.id && trigger.vars.id.includes('featuredProjects')) {
          trigger.kill();
        }
      });
    };
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, featuredProjects.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const currentProject = featuredProjects[currentSlide];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-[#F8FAFC] to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 border border-[#0066FF]/20 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-[#00D4FF]/20 rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-poppins mb-6">
            <span className="bg-gradient-to-r from-[#0066FF] via-[#00D4FF] to-[#1A2332] bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-[#64748B] max-w-3xl mx-auto font-inter">
            Discover our most impactful and innovative projects that showcase our expertise 
            in delivering world-class electro-mechanical solutions across Ethiopia.
          </p>
        </div>

        {/* Featured Project Slider */}
        <div ref={sliderRef} className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#0066FF]/10"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Project Image */}
                <div className="relative h-96 lg:h-auto">
                  <img
                    src={currentProject.image}
                    alt={currentProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Project Category Badge */}
                  <div className="absolute top-6 left-6">
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${currentProject.gradient}`}>
                      {currentProject.category}
                    </span>
                  </div>

                  {/* Project Value */}
                  <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-3">
                    <div className="flex items-center gap-2">
                      <FaDollarSign className="w-4 h-4 text-[#10B981]" />
                      <span className="font-bold text-[#1A2332] text-sm">{currentProject.value}</span>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-6 text-sm text-[#64748B]">
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="w-4 h-4" />
                        <span className="font-inter">{currentProject.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaCalendarAlt className="w-4 h-4" />
                        <span className="font-inter">{currentProject.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaClock className="w-4 h-4" />
                        <span className="font-inter">{currentProject.duration}</span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold text-[#1A2332] mb-4 font-poppins">
                    {currentProject.title}
                  </h3>

                  <p className="text-lg text-[#64748B] mb-6 font-inter leading-relaxed">
                    {currentProject.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-[#1A2332] mb-3 font-poppins">Client</h4>
                    <p className="text-[#0066FF] font-semibold font-inter">{currentProject.client}</p>
                  </div>

                  {/* Key Achievements */}
                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-[#1A2332] mb-4 font-poppins">Key Achievements</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {currentProject.achievements.map((achievement, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <FaAward className="w-4 h-4 text-[#F59E0B] flex-shrink-0" />
                          <span className="text-sm text-[#64748B] font-inter">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Project Results */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {Object.entries(currentProject.results).map(([key, value], index) => (
                      <div key={index} className="text-center p-3 bg-[#F8FAFC] rounded-xl">
                        <div className="text-lg font-bold text-[#0066FF] mb-1 font-poppins">{value}</div>
                        <div className="text-xs text-[#64748B] font-inter">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    className={`group relative px-6 py-3 bg-gradient-to-r ${currentProject.gradient} text-white font-semibold rounded-xl overflow-hidden transition-all duration-300`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      <FaEye className="w-4 h-4" />
                      View Full Case Study
                      <FaExternalLinkAlt className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Previous/Next Buttons */}
            <div className="flex gap-4">
              <motion.button
                onClick={prevSlide}
                className="w-12 h-12 bg-white border border-[#0066FF]/20 rounded-xl flex items-center justify-center hover:bg-[#0066FF] hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaArrowLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                onClick={nextSlide}
                className="w-12 h-12 bg-white border border-[#0066FF]/20 rounded-xl flex items-center justify-center hover:bg-[#0066FF] hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaArrowRight className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Slide Indicators */}
            <div className="flex gap-3">
              {featuredProjects.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-[#0066FF] scale-125' : 'bg-[#0066FF]/30'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                />
              ))}
            </div>

            {/* Auto-play Toggle */}
            <motion.button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                isAutoPlaying 
                  ? 'bg-[#0066FF] text-white' 
                  : 'bg-white border border-[#0066FF]/20 text-[#0066FF]'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isAutoPlaying ? 'Pause' : 'Play'}
            </motion.button>
          </div>
        </div>

        {/* Before/After Comparison */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-[#1A2332] text-center mb-8 font-poppins">
            Before & After: {currentProject.title}
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative group">
              <img
                src={currentProject.beforeImage}
                alt="Before"
                className="w-full h-64 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-black/40 rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold text-xl font-poppins">BEFORE</span>
              </div>
            </div>
            <div className="relative group">
              <img
                src={currentProject.afterImage}
                alt="After"
                className="w-full h-64 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-[#0066FF]/40 rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold text-xl font-poppins">AFTER</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}