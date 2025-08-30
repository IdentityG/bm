'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaChevronLeft,
  FaChevronRight,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaBuilding,
  FaCheckCircle,
  FaArrowRight,
  FaDownload,
  FaEye,
  FaClock,
  FaDollarSign,
  FaUsers,
  FaAward
} from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectCaseStudies() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const caseStudiesRef = useRef(null);
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      id: 1,
      title: 'Addis Ababa International Airport Security Upgrade',
      category: 'CCTV & Security Systems',
      client: 'Ethiopian Airports Enterprise',
      location: 'Addis Ababa, Ethiopia',
      duration: '8 Months',
      budget: '$2.5M',
      year: '2024',
      challenge: 'The existing security infrastructure at Addis Ababa International Airport was outdated and insufficient for modern security requirements. The airport needed a comprehensive upgrade to handle increasing passenger traffic while maintaining the highest security standards.',
      solution: 'We designed and implemented a state-of-the-art integrated security system featuring 500+ HD cameras, facial recognition technology, automated threat detection, and centralized monitoring. The system includes redundant backup systems and 24/7 monitoring capabilities.',
      results: [
        { metric: 'Security Coverage', value: '100%', description: 'Complete airport coverage' },
        { metric: 'Incident Detection', value: '95%', description: 'Faster threat identification' },
        { metric: 'Response Time', value: '60%', description: 'Reduction in response time' },
        { metric: 'System Uptime', value: '99.9%', description: 'Reliability achieved' }
      ],
      technologies: [
        'HD/4K Camera Systems',
        'Facial Recognition AI',
        'Automated Threat Detection',
        'Central Command Center',
        'Mobile Monitoring App',
        'Cloud Backup Systems'
      ],
      phases: [
        { phase: 'Phase 1', title: 'Assessment & Design', duration: '2 months', status: 'completed' },
        { phase: 'Phase 2', title: 'Infrastructure Setup', duration: '3 months', status: 'completed' },
        { phase: 'Phase 3', title: 'System Integration', duration: '2 months', status: 'completed' },
        { phase: 'Phase 4', title: 'Testing & Training', duration: '1 month', status: 'completed' }
      ],
      images: [
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1586281010691-3d3857c8c9c4?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop'
      ],
      testimonial: {
        quote: "B&M Electro-Mechanical delivered an exceptional security solution that exceeded our expectations. The system has significantly enhanced our security capabilities and passenger safety.",
        author: "Mehari Tekle",
        position: "Security Director",
        company: "Ethiopian Airports Enterprise"
      }
    },
    {
      id: 2,
      title: 'Hawassa Industrial Park Power Infrastructure',
      category: 'Mega Electric Projects',
      client: 'Ethiopian Investment Commission',
      location: 'Hawassa, Ethiopia',
      duration: '12 Months',
      budget: '$15M',
      year: '2023',
      challenge: 'Hawassa Industrial Park required a robust electrical infrastructure to support 50+ manufacturing facilities. The challenge was to design a scalable power distribution system that could handle varying loads while ensuring 99.9% uptime for critical manufacturing processes.',
      solution: 'We implemented a comprehensive electrical infrastructure including 500MW power distribution network, smart grid technology, redundant backup systems, and automated load management. The system features real-time monitoring and predictive maintenance capabilities.',
      results: [
        { metric: 'Power Capacity', value: '500MW', description: 'Total distribution capacity' },
        { metric: 'System Efficiency', value: '98%', description: 'Energy efficiency achieved' },
        { metric: 'Uptime Guarantee', value: '99.9%', description: 'Reliability standard' },
        { metric: 'Factories Powered', value: '50+', description: 'Manufacturing facilities' }
      ],
      technologies: [
        'Smart Grid Technology',
        'Automated Load Management',
        'Redundant Backup Systems',
        'Real-time Monitoring',
        'Predictive Maintenance',
        'Energy Management System'
      ],
      phases: [
        { phase: 'Phase 1', title: 'Infrastructure Planning', duration: '3 months', status: 'completed' },
        { phase: 'Phase 2', title: 'Primary Installation', duration: '6 months', status: 'completed' },
        { phase: 'Phase 3', title: 'Smart Grid Integration', duration: '2 months', status: 'completed' },
        { phase: 'Phase 4', title: 'Testing & Commissioning', duration: '1 month', status: 'completed' }
      ],
      images: [
        'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop'
      ],
      testimonial: {
        quote: "The electrical infrastructure provided by B&M has been instrumental in attracting international manufacturers to our industrial park. Their expertise and reliability are unmatched.",
        author: "Dr. Arkebe Oqubay",
        position: "Senior Minister",
        company: "Ethiopian Investment Commission"
      }
    },
    {
      id: 3,
      title: 'Bahir Dar Smart City Lighting Initiative',
      category: 'Road & Street Lighting',
      client: 'Bahir Dar City Administration',
      location: 'Bahir Dar, Ethiopia',
      duration: '6 Months',
      budget: '$3.2M',
      year: '2023',
      challenge: 'Bahir Dar city needed to modernize its street lighting infrastructure to improve safety, reduce energy consumption, and support smart city initiatives. The existing system was inefficient and required frequent maintenance.',
      solution: 'We deployed a comprehensive smart LED lighting system across 150km of city roads, featuring automated controls, energy monitoring, maintenance alerts, and integration with city management systems. The solution includes solar-powered sections and emergency backup capabilities.',
      results: [
        { metric: 'Energy Savings', value: '75%', description: 'Reduction in energy consumption' },
        { metric: 'Maintenance Cost', value: '60%', description: 'Lower maintenance expenses' },
        { metric: 'Light Quality', value: '300%', description: 'Improvement in illumination' },
        { metric: 'Coverage Area', value: '150km', description: 'Roads illuminated' }
      ],
      technologies: [
        'Smart LED Technology',
        'Automated Control Systems',
        'Solar Integration',
        'IoT Sensors',
        'Central Management Platform',
        'Emergency Backup Systems'
      ],
      phases: [
        { phase: 'Phase 1', title: 'City Assessment', duration: '1 month', status: 'completed' },
        { phase: 'Phase 2', title: 'LED Installation', duration: '4 months', status: 'completed' },
        { phase: 'Phase 3', title: 'Smart Controls', duration: '1 month', status: 'completed' }
      ],
      images: [
        'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop'
      ],
      testimonial: {
        quote: "The smart lighting system has transformed our city. Citizens feel safer, energy costs have dropped significantly, and we now have a foundation for future smart city initiatives.",
        author: "Yilkal Kefale",
        position: "Mayor",
        company: "Bahir Dar City Administration"
      }
    }
  ];

  useEffect(() => {
    // Ensure elements exist before animating
    if (!sectionRef.current || !titleRef.current || !caseStudiesRef.current) {
      return;
    }

    const section = sectionRef.current;
    const title = titleRef.current;
    const caseStudies = caseStudiesRef.current;

    // Kill existing ScrollTriggers for this component
    ScrollTrigger.getAll().forEach(trigger => {
      if (trigger.trigger === section || trigger.trigger === caseStudies) {
        trigger.kill();
      }
    });

    // Set initial states
    gsap.set(title, { y: 100, opacity: 0 });
    gsap.set(caseStudies, { y: 80, opacity: 0 });

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
        id: 'projectCaseStudies-title'
      }
    });

    // Case studies animation
    gsap.to(caseStudies, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: caseStudies,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
        id: 'projectCaseStudies-content'
      }
    });

    return () => {
      // Clean up only this component's ScrollTriggers
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.id && trigger.vars.id.includes('projectCaseStudies')) {
          trigger.kill();
        }
      });
    };
  }, []);

  const nextCase = () => {
    setActiveCase((prev) => (prev + 1) % caseStudies.length);
  };

  const prevCase = () => {
    setActiveCase((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const currentCase = caseStudies[activeCase];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-[#F8FAFC] relative overflow-hidden">
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
              Project Case Studies
            </span>
          </h2>
          <p className="text-xl text-[#64748B] max-w-3xl mx-auto font-inter">
            Dive deep into our most impactful projects. Discover the challenges we solved, 
            technologies we implemented, and the remarkable results we achieved.
          </p>
        </div>

        {/* Case Study Navigation */}
        <div className="flex justify-center items-center gap-4 mb-12">
          <motion.button
            onClick={prevCase}
            className="w-12 h-12 bg-white border border-[#0066FF]/20 rounded-full flex items-center justify-center hover:bg-[#0066FF] hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaChevronLeft className="w-5 h-5" />
          </motion.button>

          <div className="flex gap-2">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveCase(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeCase ? 'bg-[#0066FF]' : 'bg-[#0066FF]/30'
                }`}
              />
            ))}
          </div>

          <motion.button
            onClick={nextCase}
            className="w-12 h-12 bg-white border border-[#0066FF]/20 rounded-full flex items-center justify-center hover:bg-[#0066FF] hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaChevronRight className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Case Study Content */}
        <div ref={caseStudiesRef}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCase}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl border border-[#0066FF]/10 overflow-hidden shadow-2xl"
            >
              {/* Case Study Header */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={currentCase.images[0]}
                  alt={currentCase.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                
                {/* Header Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-center gap-4 mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      currentCase.category.includes('CCTV') ? 'bg-[#0066FF]' :
                      currentCase.category.includes('Electric') ? 'bg-[#FF6B35]' :
                      currentCase.category.includes('Lighting') ? 'bg-[#10B981]' : 'bg-[#8B5CF6]'
                    }`}>
                      {currentCase.category}
                    </span>
                    <span className="text-sm opacity-90">{currentCase.year}</span>
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-4 font-poppins">
                    {currentCase.title}
                  </h3>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <FaBuilding className="w-4 h-4" />
                      <span>{currentCase.client}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="w-4 h-4" />
                      <span>{currentCase.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaClock className="w-4 h-4" />
                      <span>{currentCase.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaDollarSign className="w-4 h-4" />
                      <span>{currentCase.budget}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case Study Body */}
              <div className="p-8">
                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Left Column */}
                  <div className="space-y-8">
                    {/* Challenge */}
                    <div>
                      <h4 className="text-2xl font-bold text-[#1A2332] mb-4 font-poppins">
                        The Challenge
                      </h4>
                      <p className="text-[#64748B] font-inter leading-relaxed">
                        {currentCase.challenge}
                      </p>
                    </div>

                    {/* Solution */}
                    <div>
                      <h4 className="text-2xl font-bold text-[#1A2332] mb-4 font-poppins">
                        Our Solution
                      </h4>
                      <p className="text-[#64748B] font-inter leading-relaxed">
                        {currentCase.solution}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-2xl font-bold text-[#1A2332] mb-4 font-poppins">
                        Technologies Used
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {currentCase.technologies.map((tech, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <FaCheckCircle className="w-4 h-4 text-[#10B981]" />
                            <span className="text-[#64748B] font-inter text-sm">{tech}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-8">
                    {/* Results */}
                    <div>
                      <h4 className="text-2xl font-bold text-[#1A2332] mb-6 font-poppins">
                        Project Results
                      </h4>
                      <div className="grid grid-cols-2 gap-6">
                        {currentCase.results.map((result, index) => (
                          <motion.div
                            key={index}
                            className="text-center p-4 bg-[#F8FAFC] rounded-xl"
                            whileHover={{ scale: 1.05 }}
                          >
                            <div className="text-3xl font-bold text-[#0066FF] mb-2 font-poppins">
                              {result.value}
                            </div>
                            <div className="text-sm font-semibold text-[#1A2332] mb-1">
                              {result.metric}
                            </div>
                            <div className="text-xs text-[#64748B] font-inter">
                              {result.description}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Project Phases */}
                    <div>
                      <h4 className="text-2xl font-bold text-[#1A2332] mb-6 font-poppins">
                        Project Timeline
                      </h4>
                      <div className="space-y-4">
                        {currentCase.phases.map((phase, index) => (
                          <div key={index} className="flex items-center gap-4">
                            <div className="w-8 h-8 bg-[#10B981] rounded-full flex items-center justify-center flex-shrink-0">
                              <FaCheckCircle className="w-4 h-4 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-1">
                                <span className="font-semibold text-[#1A2332] font-inter">
                                  {phase.phase}: {phase.title}
                                </span>
                                <span className="text-sm text-[#64748B]">
                                  {phase.duration}
                                </span>
                              </div>
                              <div className="w-full bg-[#F8FAFC] rounded-full h-2">
                                <div className="bg-[#10B981] h-2 rounded-full w-full"></div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Client Testimonial */}
                    <div className="bg-gradient-to-r from-[#0066FF]/10 to-[#00D4FF]/10 rounded-2xl p-6">
                      <h4 className="text-xl font-bold text-[#1A2332] mb-4 font-poppins">
                        Client Testimonial
                      </h4>
                      <blockquote className="text-[#64748B] font-inter italic mb-4">
                        "{currentCase.testimonial.quote}"
                      </blockquote>
                      <div>
                        <div className="font-semibold text-[#1A2332]">
                          {currentCase.testimonial.author}
                        </div>
                        <div className="text-sm text-[#64748B]">
                          {currentCase.testimonial.position}, {currentCase.testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 pt-8 border-t border-[#0066FF]/10">
                  <motion.button
                    className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#0066FF] to-[#00D4FF] text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaDownload className="w-4 h-4" />
                    Download Case Study
                  </motion.button>
                  
                  <motion.button
                    className="flex items-center gap-3 px-6 py-3 border-2 border-[#0066FF] text-[#0066FF] font-semibold rounded-xl hover:bg-[#0066FF] hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaEye className="w-4 h-4" />
                    View Full Gallery
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}