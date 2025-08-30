'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaCalendarAlt,
  FaRocket,
  FaAward,
  FaUsers,
  FaBuilding,
  FaGlobe,
  FaChevronLeft,
  FaChevronRight,
  FaPlay
} from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function CompanyStory() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const timelineRef = useRef(null);
  const storyRef = useRef(null);
  const [activeYear, setActiveYear] = useState(0);

  const companyTimeline = [
    {
      year: '2009',
      title: 'The Beginning',
      description: 'Founded with a vision to revolutionize Ethiopia\'s electro-mechanical industry',
      details: 'Started as a small team of 5 passionate engineers with a dream to bring world-class electro-mechanical solutions to Ethiopia. Our first office was a modest space in Addis Ababa with big ambitions.',
      achievements: [
        'Established company with 5 founding members',
        'Secured first major CCTV installation contract',
        'Completed 10 successful projects in first year'
      ],
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop',
      icon: FaRocket,
      color: 'text-[#0066FF]'
    },
    {
      year: '2012',
      title: 'Rapid Growth',
      description: 'Expanded services and established ourselves as a trusted industry partner',
      details: 'Three years of consistent growth led to expanding our team to 20 professionals and moving to a larger facility. We began specializing in mega electric projects and industrial installations.',
      achievements: [
        'Grew team to 20+ professionals',
        'Opened dedicated workshop facility',
        'Completed first mega electric project',
        'Established partnerships with international suppliers'
      ],
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop',
      icon: FaBuilding,
      color: 'text-[#10B981]'
    },
    {
      year: '2016',
      title: 'Industry Recognition',
      description: 'Achieved major certifications and won prestigious industry awards',
      details: 'Our commitment to quality and innovation was recognized with ISO certifications and multiple industry awards. We became the go-to partner for complex electro-mechanical projects.',
      achievements: [
        'Achieved ISO 9001:2015 certification',
        'Won "Best Electrical Contractor" award',
        'Completed 100+ successful projects',
        'Established training academy for technicians'
      ],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      icon: FaAward,
      color: 'text-[#FF6B35]'
    },
    {
      year: '2020',
      title: 'Innovation Leadership',
      description: 'Pioneered smart technology integration and digital transformation',
      details: 'Embraced digital transformation and smart technology integration. Launched our Ethiopian Collider division for precision engineering and became leaders in smart infrastructure solutions.',
      achievements: [
        'Launched Ethiopian Collider division',
        'Implemented smart city lighting projects',
        'Developed proprietary monitoring systems',
        'Expanded to 40+ team members'
      ],
      image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop',
      icon: FaGlobe,
      color: 'text-[#8B5CF6]'
    },
    {
      year: '2024',
      title: 'Market Leadership',
      description: 'Established as Ethiopia\'s premier electro-mechanical solutions provider',
      details: 'Today, we stand as Ethiopia\'s leading electro-mechanical company with 50+ professionals, 500+ completed projects, and partnerships with major corporations across the country.',
      achievements: [
        'Reached 500+ completed projects milestone',
        'Expanded team to 50+ professionals',
        'Established nationwide service network',
        'Launched sustainability initiatives'
      ],
      image: 'https://images.unsplash.com/photo-1586281010691-3d3857c8c9c4?w=600&h=400&fit=crop',
      icon: FaUsers,
      color: 'text-[#00D4FF]'
    }
  ];

  const founderStory = {
    title: 'Our Founder\'s Vision',
    quote: 'We started B&M with a simple belief: Ethiopia deserves world-class electro-mechanical solutions. Every project we undertake is a step towards building a more connected, secure, and prosperous Ethiopia.',
    founder: 'Bereket Mengistu',
    position: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face'
  };

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const timeline = timelineRef.current;
    const story = storyRef.current;

    // Title animation
    gsap.fromTo(title,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Timeline animation
    gsap.fromTo(timeline.children,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: timeline,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Story animation
    gsap.fromTo(story,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: story,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const nextYear = () => {
    setActiveYear((prev) => (prev + 1) % companyTimeline.length);
  };

  const prevYear = () => {
    setActiveYear((prev) => (prev - 1 + companyTimeline.length) % companyTimeline.length);
  };

  const currentMilestone = companyTimeline[activeYear];

  return (
    <section ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 border border-[#0066FF]/20 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 border border-[#00D4FF]/20 rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-poppins mb-6">
            <span className="bg-gradient-to-r from-[#0066FF] via-[#00D4FF] to-[#1A2332] bg-clip-text text-transparent">
              Our Story
            </span>
          </h2>
          <p className="text-xl text-[#64748B] max-w-3xl mx-auto font-inter">
            From humble beginnings to industry leadership - discover the journey that shaped 
            B&M Electro-Mechanical into Ethiopia's premier electro-mechanical solutions provider.
          </p>
        </div>

        {/* Interactive Timeline */}
        <div className="mb-20">
          {/* Timeline Navigation */}
          <div ref={timelineRef} className="flex justify-center items-center gap-4 mb-12 overflow-x-auto pb-4">
            {companyTimeline.map((milestone, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveYear(index)}
                className={`flex-shrink-0 flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeYear === index
                    ? 'bg-gradient-to-r from-[#0066FF] to-[#00D4FF] text-white shadow-lg'
                    : 'bg-white text-[#64748B] border border-[#0066FF]/20 hover:bg-[#F8FAFC] hover:text-[#0066FF]'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <milestone.icon className={`w-5 h-5 ${activeYear === index ? 'text-white' : milestone.color}`} />
                <span className="font-inter font-semibold">{milestone.year}</span>
              </motion.button>
            ))}
          </div>

          {/* Timeline Content */}
          <div className="relative">
            <div className="flex justify-center items-center gap-4 mb-8">
              <motion.button
                onClick={prevYear}
                className="w-12 h-12 bg-white border border-[#0066FF]/20 rounded-full flex items-center justify-center hover:bg-[#0066FF] hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaChevronLeft className="w-5 h-5" />
              </motion.button>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-[#1A2332] font-poppins">
                  {currentMilestone.year} - {currentMilestone.title}
                </h3>
              </div>

              <motion.button
                onClick={nextYear}
                className="w-12 h-12 bg-white border border-[#0066FF]/20 rounded-full flex items-center justify-center hover:bg-[#0066FF] hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaChevronRight className="w-5 h-5" />
              </motion.button>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeYear}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl border border-[#0066FF]/10 overflow-hidden shadow-xl"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image Side */}
                  <div className="relative h-80 lg:h-auto">
                    <img
                      src={currentMilestone.image}
                      alt={currentMilestone.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/30"></div>
                    
                    {/* Year Badge */}
                    <div className="absolute top-6 left-6">
                      <div className={`w-16 h-16 ${currentMilestone.color === 'text-[#0066FF]' ? 'bg-[#0066FF]' :
                        currentMilestone.color === 'text-[#10B981]' ? 'bg-[#10B981]' :
                        currentMilestone.color === 'text-[#FF6B35]' ? 'bg-[#FF6B35]' :
                        currentMilestone.color === 'text-[#8B5CF6]' ? 'bg-[#8B5CF6]' : 'bg-[#00D4FF]'
                      } rounded-xl flex items-center justify-center shadow-lg`}>
                        <currentMilestone.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="p-8 lg:p-12">
                    <h4 className="text-3xl font-bold text-[#1A2332] mb-4 font-poppins">
                      {currentMilestone.title}
                    </h4>
                    <p className="text-lg text-[#64748B] mb-6 font-inter leading-relaxed">
                      {currentMilestone.description}
                    </p>
                    <p className="text-[#64748B] mb-8 font-inter leading-relaxed">
                      {currentMilestone.details}
                    </p>

                    {/* Achievements */}
                    <div>
                      <h5 className="text-xl font-bold text-[#1A2332] mb-4 font-poppins">
                        Key Achievements
                      </h5>
                      <div className="space-y-3">
                        {currentMilestone.achievements.map((achievement, index) => (
                          <motion.div
                            key={index}
                            className="flex items-center gap-3"
                            whileHover={{ x: 5 }}
                          >
                            <div className={`w-6 h-6 ${currentMilestone.color === 'text-[#0066FF]' ? 'bg-[#0066FF]' :
                              currentMilestone.color === 'text-[#10B981]' ? 'bg-[#10B981]' :
                              currentMilestone.color === 'text-[#FF6B35]' ? 'bg-[#FF6B35]' :
                              currentMilestone.color === 'text-[#8B5CF6]' ? 'bg-[#8B5CF6]' : 'bg-[#00D4FF]'
                            } rounded-full flex items-center justify-center flex-shrink-0`}>
                              <FaAward className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-[#64748B] font-inter">{achievement}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Founder Story */}
        <div ref={storyRef} className="bg-gradient-to-r from-[#1A2332] to-[#0F172A] rounded-3xl p-12 relative overflow-hidden">
          <div className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Founder Image */}
              <div className="text-center lg:text-left">
                <div className="relative inline-block">
                  <img
                    src={founderStory.image}
                    alt={founderStory.founder}
                    className="w-64 h-64 rounded-full object-cover mx-auto lg:mx-0 shadow-2xl"
                  />
                  <div className="absolute inset-0 rounded-full border-4 border-[#0066FF]/30"></div>
                </div>
              </div>

              {/* Founder Quote */}
              <div>
                <h3 className="text-3xl font-bold text-white mb-6 font-poppins">
                  {founderStory.title}
                </h3>
                <blockquote className="text-xl text-gray-300 font-inter italic leading-relaxed mb-8">
                  "{founderStory.quote}"
                </blockquote>
                <div>
                  <div className="text-2xl font-bold text-white font-poppins">
                    {founderStory.founder}
                  </div>
                  <div className="text-[#00D4FF] font-inter">
                    {founderStory.position}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" 
              style={{
                backgroundImage: `radial-gradient(circle at 30% 50%, rgba(0, 212, 255, 0.3) 0%, transparent 50%),
                                 radial-gradient(circle at 70% 50%, rgba(0, 102, 255, 0.3) 0%, transparent 50%)`
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}