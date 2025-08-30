'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { 
  FaCamera,
  FaBolt,
  FaRoad,
  FaCog,
  FaArrowRight,
  FaEye,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaChartLine,
  FaUsers,
  FaAward
} from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectCategories() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const categoriesRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState(0);

  const projectCategories = [
    {
      id: 'cctv',
      icon: FaCamera,
      title: 'CCTV & Security Systems',
      subtitle: 'Advanced Surveillance Solutions',
      description: 'Comprehensive security infrastructure projects including CCTV networks, access control systems, and integrated security platforms for commercial, industrial, and public facilities.',
      gradient: 'from-[#0066FF] to-[#00D4FF]',
      bgColor: 'bg-[#0066FF]/10',
      stats: {
        projects: '150+',
        locations: '25+',
        cameras: '5,000+',
        coverage: '500km²'
      },
      recentProjects: [
        {
          title: 'Addis Ababa Light Rail Security',
          location: 'Addis Ababa',
          date: '2024',
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'
        },
        {
          title: 'Commercial Plaza Surveillance',
          location: 'Hawassa',
          date: '2024',
          image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=300&fit=crop'
        },
        {
          title: 'Hospital Security Integration',
          location: 'Mekelle',
          date: '2023',
          image: 'https://images.unsplash.com/photo-1586281010691-3d3857c8c9c4?w=400&h=300&fit=crop'
        }
      ],
      achievements: [
        '99.9% System Uptime',
        '24/7 Monitoring Centers',
        'AI-Powered Analytics',
        'Mobile App Integration'
      ]
    },
    {
      id: 'electric',
      icon: FaBolt,
      title: 'Mega Electric Projects',
      subtitle: 'Industrial Power Infrastructure',
      description: 'Large-scale electrical installations including power distribution networks, industrial substations, backup power systems, and smart grid implementations for major facilities.',
      gradient: 'from-[#FF6B35] to-[#F59E0B]',
      bgColor: 'bg-[#FF6B35]/10',
      stats: {
        projects: '200+',
        capacity: '2,000MW',
        facilities: '100+',
        jobs: '50,000+'
      },
      recentProjects: [
        {
          title: 'Hawassa Industrial Park Grid',
          location: 'Hawassa',
          date: '2024',
          image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop'
        },
        {
          title: 'Hospital Emergency Power',
          location: 'Mekelle',
          date: '2023',
          image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop'
        },
        {
          title: 'Manufacturing Plant Power',
          location: 'Dire Dawa',
          date: '2023',
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'
        }
      ],
      achievements: [
        '99.8% Power Reliability',
        'Smart Grid Integration',
        'Renewable Energy Ready',
        'International Standards'
      ]
    },
    {
      id: 'lighting',
      icon: FaRoad,
      title: 'Road & Street Lighting',
      subtitle: 'Smart Urban Illumination',
      description: 'Modern street lighting solutions with LED technology, smart controls, energy management systems, and IoT integration for cities, highways, and public spaces.',
      gradient: 'from-[#10B981] to-[#00D4FF]',
      bgColor: 'bg-[#10B981]/10',
      stats: {
        projects: '100+',
        roads: '500km',
        lights: '10,000+',
        savings: '75%'
      },
      recentProjects: [
        {
          title: 'Bahir Dar Smart City Lighting',
          location: 'Bahir Dar',
          date: '2023',
          image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=400&h=300&fit=crop'
        },
        {
          title: 'Highway Lighting Upgrade',
          location: 'Adama-Awash',
          date: '2023',
          image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=300&fit=crop'
        },
        {
          title: 'University Campus Lighting',
          location: 'Jimma',
          date: '2023',
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'
        }
      ],
      achievements: [
        '75% Energy Reduction',
        'Smart Control Systems',
        'Weather Resistant',
        'Maintenance Alerts'
      ]
    },
    {
      id: 'collider',
      icon: FaCog,
      title: 'Ethiopian Collider Projects',
      subtitle: 'Precision Engineering Excellence',
      description: 'Specialized engineering for advanced research facilities, precision equipment installations, clean room environments, and cutting-edge scientific infrastructure.',
      gradient: 'from-[#8B5CF6] to-[#0066FF]',
      bgColor: 'bg-[#8B5CF6]/10',
      stats: {
        projects: '50+',
        precision: '0.001mm',
        facilities: '15+',
        research: '100+'
      },
      recentProjects: [
        {
          title: 'Space Science Institute Lab',
          location: 'Addis Ababa University',
          date: '2023',
          image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop'
        },
        {
          title: 'Research Equipment Installation',
          location: 'Bahir Dar University',
          date: '2023',
          image: 'https://images.unsplash.com/photo-1586281010691-3d3857c8c9c4?w=400&h=300&fit=crop'
        },
        {
          title: 'Clean Room Facility',
          location: 'Mekelle Institute',
          date: '2022',
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'
        }
      ],
      achievements: [
        'Micron-Level Precision',
        'Clean Room Standards',
        'Vibration Isolation',
        'International Recognition'
      ]
    }
  ];

  useEffect(() => {
    // Ensure elements exist before animating
    if (!sectionRef.current || !titleRef.current || !categoriesRef.current) {
      return;
    }

    const section = sectionRef.current;
    const title = titleRef.current;
    const categories = categoriesRef.current;

    // Kill existing ScrollTriggers for this component
    ScrollTrigger.getAll().forEach(trigger => {
      if (trigger.trigger === section || trigger.trigger === categories) {
        trigger.kill();
      }
    });

    // Set initial states
    gsap.set(title, { y: 100, opacity: 0 });
    gsap.set(categories.children, { y: 80, opacity: 0 });

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
        id: 'projectCategories-title'
      }
    });

    // Categories animation
    gsap.to(categories.children, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: categories,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
        id: 'projectCategories-items'
      }
    });

    return () => {
      // Clean up only this component's ScrollTriggers
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.id && trigger.vars.id.includes('projectCategories')) {
          trigger.kill();
        }
      });
    };
  }, []);

  const currentCategory = projectCategories[activeCategory];

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
              Project Categories
            </span>
          </h2>
          <p className="text-xl text-[#64748B] max-w-3xl mx-auto font-inter">
            Explore our diverse portfolio organized by service categories. Each category represents 
            our specialized expertise and proven track record in delivering exceptional results.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {projectCategories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(index)}
              className={`flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeCategory === index
                  ? `bg-gradient-to-r ${category.gradient} text-white shadow-lg`
                  : 'bg-white text-[#64748B] border border-[#0066FF]/20 hover:bg-[#F8FAFC] hover:text-[#0066FF]'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <category.icon className={`w-5 h-5 ${activeCategory === index ? 'text-white' : 'text-[#0066FF]'}`} />
              <span className="font-inter">{category.title}</span>
            </motion.button>
          ))}
        </div>

        {/* Active Category Details */}
        <div ref={categoriesRef} className="max-w-6xl mx-auto">
          <motion.div
            key={activeCategory}
            className="bg-[#F8FAFC] rounded-3xl p-8 border border-[#0066FF]/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Category Info */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 ${currentCategory.bgColor} rounded-xl flex items-center justify-center`}>
                    <currentCategory.icon className="w-8 h-8 text-[#0066FF]" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-[#1A2332] font-poppins">
                      {currentCategory.title}
                    </h3>
                    <p className={`text-lg font-semibold bg-gradient-to-r ${currentCategory.gradient} bg-clip-text text-transparent`}>
                      {currentCategory.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-lg text-[#64748B] leading-relaxed mb-8 font-inter">
                  {currentCategory.description}
                </p>

                {/* Category Statistics */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {Object.entries(currentCategory.stats).map(([key, value], index) => (
                    <div key={index} className="text-center p-4 bg-white rounded-xl border border-[#0066FF]/10">
                      <div className={`text-2xl font-bold bg-gradient-to-r ${currentCategory.gradient} bg-clip-text text-transparent mb-1 font-poppins`}>
                        {value}
                      </div>
                      <div className="text-sm text-[#64748B] font-inter capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                    </div>
                  ))}
                </div>

                {/* Key Achievements */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-[#1A2332] mb-4 font-poppins">Key Achievements</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {currentCategory.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <FaAward className="w-4 h-4 text-[#F59E0B] flex-shrink-0" />
                        <span className="text-sm text-[#64748B] font-inter">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button
                  className={`group relative px-6 py-3 bg-gradient-to-r ${currentCategory.gradient} text-white font-semibold rounded-xl overflow-hidden transition-all duration-300`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    View All {currentCategory.title} Projects
                    <FaArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </motion.button>
              </div>

              {/* Recent Projects */}
              <div>
                <h4 className="text-xl font-bold text-[#1A2332] mb-6 font-poppins">Recent Projects</h4>
                <div className="space-y-4">
                  {currentCategory.recentProjects.map((project, index) => (
                    <motion.div
                      key={index}
                      className="group bg-white rounded-2xl p-4 border border-[#0066FF]/10 hover:shadow-lg transition-all duration-300 cursor-pointer"
                      whileHover={{ y: -2, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex gap-4">
                        <div className="relative w-20 h-16 rounded-xl overflow-hidden flex-shrink-0">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <h5 className="font-semibold text-[#1A2332] mb-1 font-poppins group-hover:text-[#0066FF] transition-colors duration-300 truncate">
                            {project.title}
                          </h5>
                          <div className="flex items-center gap-4 text-xs text-[#64748B]">
                            <div className="flex items-center gap-1">
                              <FaMapMarkerAlt className="w-3 h-3" />
                              <span className="font-inter">{project.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <FaCalendarAlt className="w-3 h-3" />
                              <span className="font-inter">{project.date}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center">
                          <motion.div
                            className="w-8 h-8 bg-[#0066FF]/10 rounded-full flex items-center justify-center group-hover:bg-[#0066FF] transition-colors duration-300"
                            whileHover={{ rotate: 45 }}
                          >
                            <FaEye className="w-4 h-4 text-[#0066FF] group-hover:text-white transition-colors duration-300" />
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* View All Projects Link */}
                <motion.div
                  className="mt-6 text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button className={`text-sm font-semibold bg-gradient-to-r ${currentCategory.gradient} bg-clip-text text-transparent hover:underline font-inter`}>
                    View All Projects in This Category →
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Overall Statistics */}
        <div className="mt-16 bg-gradient-to-r from-[#1A2332] to-[#0F172A] rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-8 font-poppins">Our Project Impact</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-[#0066FF] mb-2 font-poppins">500+</div>
              <div className="text-[#64748B] font-inter">Total Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#00D4FF] mb-2 font-poppins">50+</div>
              <div className="text-[#64748B] font-inter">Cities Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#10B981] mb-2 font-poppins">250+</div>
              <div className="text-[#64748B] font-inter">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#F59E0B] mb-2 font-poppins">15+</div>
              <div className="text-[#64748B] font-inter">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}