'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaQuoteLeft,
  FaQuoteRight,
  FaStar,
  FaPlay,
  FaChevronLeft,
  FaChevronRight,
  FaBuilding,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaAward,
  FaHandshake,
  FaChartLine,
  FaUsers
} from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function ClientSuccessStories() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const storiesRef = useRef(null);
  const statsRef = useRef(null);
  const [activeStory, setActiveStory] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const successStats = [
    { number: '98%', label: 'Client Satisfaction Rate', icon: FaAward, color: 'text-[#10B981]' },
    { number: '250+', label: 'Long-term Partnerships', icon: FaHandshake, color: 'text-[#0066FF]' },
    { number: '15+', label: 'Years Average Partnership', icon: FaCalendarAlt, color: 'text-[#FF6B35]' },
    { number: '95%', label: 'Client Retention Rate', icon: FaChartLine, color: 'text-[#8B5CF6]' }
  ];

  const successStories = [
    {
      id: 1,
      client: {
        name: 'Ethiopian Airlines',
        industry: 'Aviation',
        location: 'Addis Ababa, Ethiopia',
        logo: '✈️',
        size: 'Enterprise',
        partnership: '8 Years'
      },
      project: {
        title: 'Comprehensive Airport Security Infrastructure',
        category: 'CCTV & Security Systems',
        value: '$5.2M',
        duration: '18 Months',
        year: '2016-2024'
      },
      testimonial: {
        quote: "B&M Electro-Mechanical has been our trusted partner for over 8 years. Their expertise in security systems has been instrumental in maintaining our position as Africa's leading airline. The reliability and innovation they bring to every project is exceptional.",
        author: "Tewolde GebreMariam",
        position: "Chief Executive Officer",
        rating: 5,
        videoThumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
      },
      results: {
        before: {
          security: "Basic CCTV coverage",
          efficiency: "Manual monitoring",
          incidents: "15+ monthly incidents",
          satisfaction: "78% passenger confidence"
        },
        after: {
          security: "100% AI-powered coverage",
          efficiency: "Automated threat detection",
          incidents: "2 monthly incidents (87% reduction)",
          satisfaction: "96% passenger confidence"
        }
      },
      impact: [
        "Enhanced passenger safety and confidence",
        "Reduced security incidents by 87%",
        "Improved operational efficiency by 60%",
        "Strengthened international security compliance"
      ]
    },
    {
      id: 2,
      client: {
        name: 'Dangote Cement Ethiopia',
        industry: 'Manufacturing',
        location: 'Mugher, Ethiopia',
        logo: '🏭',
        size: 'Enterprise',
        partnership: '6 Years'
      },
      project: {
        title: 'Industrial Power Infrastructure & Automation',
        category: 'Mega Electric Projects',
        value: '$12M',
        duration: '24 Months',
        year: '2018-2024'
      },
      testimonial: {
        quote: "The electrical infrastructure provided by B&M has been the backbone of our operations. Their proactive maintenance and 24/7 support have ensured zero downtime in our critical production processes. They truly understand industrial requirements.",
        author: "Devakumar Edwin",
        position: "Group Executive Director",
        rating: 5,
        videoThumbnail: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop"
      },
      results: {
        before: {
          uptime: "94% system availability",
          efficiency: "Manual load management",
          maintenance: "Reactive maintenance approach",
          costs: "High energy consumption"
        },
        after: {
          uptime: "99.8% system availability",
          efficiency: "Automated smart grid management",
          maintenance: "Predictive maintenance system",
          costs: "25% reduction in energy costs"
        }
      },
      impact: [
        "Achieved 99.8% production uptime",
        "Reduced energy costs by 25%",
        "Eliminated unplanned downtime",
        "Enhanced production capacity by 30%"
      ]
    },
    {
      id: 3,
      client: {
        name: 'Addis Ababa University',
        industry: 'Education',
        location: 'Addis Ababa, Ethiopia',
        logo: '🎓',
        size: 'Large Institution',
        partnership: '10 Years'
      },
      project: {
        title: 'Smart Campus Infrastructure & Research Facilities',
        category: 'Ethiopian Collider Projects',
        value: '$8.5M',
        duration: '36 Months',
        year: '2014-2024'
      },
      testimonial: {
        quote: "B&M's expertise in precision engineering has enabled us to establish world-class research facilities. Their work on our particle physics laboratory has put Ethiopian research on the global map. The partnership has been transformational.",
        author: "Prof. Tassew Woldehanna",
        position: "President",
        rating: 5,
        videoThumbnail: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop"
      },
      results: {
        before: {
          research: "Limited research capabilities",
          facilities: "Basic laboratory equipment",
          publications: "50 annual publications",
          recognition: "Regional recognition"
        },
        after: {
          research: "Advanced particle physics lab",
          facilities: "World-class precision equipment",
          publications: "200+ annual publications",
          recognition: "International collaborations"
        }
      },
      impact: [
        "Established Ethiopia's first particle physics lab",
        "Increased research publications by 300%",
        "Attracted international research partnerships",
        "Enhanced Ethiopia's scientific reputation"
      ]
    },
    {
      id: 4,
      client: {
        name: 'Commercial Bank of Ethiopia',
        industry: 'Banking & Finance',
        location: 'Nationwide, Ethiopia',
        logo: '🏦',
        size: 'Enterprise',
        partnership: '12 Years'
      },
      project: {
        title: 'Nationwide Branch Security & Infrastructure',
        category: 'CCTV & Security Systems',
        value: '$18M',
        duration: '48 Months',
        year: '2012-2024'
      },
      testimonial: {
        quote: "Over 12 years, B&M has secured our entire branch network across Ethiopia. Their reliability, professionalism, and innovative solutions have made them an indispensable partner in our growth journey.",
        author: "Ato Bacha Gina",
        position: "President",
        rating: 5,
        videoThumbnail: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop"
      },
      results: {
        before: {
          branches: "Basic security systems",
          incidents: "Monthly security breaches",
          monitoring: "Limited surveillance",
          compliance: "Manual compliance tracking"
        },
        after: {
          branches: "500+ branches secured",
          incidents: "Zero major security breaches",
          monitoring: "24/7 centralized monitoring",
          compliance: "Automated compliance reporting"
        }
      },
      impact: [
        "Secured 500+ branches nationwide",
        "Achieved zero major security breaches",
        "Enhanced customer confidence and trust",
        "Enabled rapid branch expansion"
      ]
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const stories = storiesRef.current;
    const stats = statsRef.current;

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

    // Stats animation
    gsap.fromTo(stats.children,
      { y: 80, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: stats,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Stories animation
    gsap.fromTo(stories,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: stories,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const nextStory = () => {
    setActiveStory((prev) => (prev + 1) % successStories.length);
  };

  const prevStory = () => {
    setActiveStory((prev) => (prev - 1 + successStories.length) % successStories.length);
  };

  const currentStory = successStories[activeStory];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-[#F8FAFC] to-white relative overflow-hidden">
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
              Client Success Stories
            </span>
          </h2>
          <p className="text-xl text-[#64748B] max-w-3xl mx-auto font-inter">
            Discover how our partnerships have transformed businesses across Ethiopia. 
            Real stories from real clients who trust us with their most critical projects.
          </p>
        </div>

        {/* Success Statistics */}
        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {successStats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white border border-[#0066FF]/10 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className={`w-12 h-12 ${
                stat.color === 'text-[#10B981]' ? 'bg-[#10B981]/10' :
                stat.color === 'text-[#0066FF]' ? 'bg-[#0066FF]/10' :
                stat.color === 'text-[#FF6B35]' ? 'bg-[#FF6B35]/10' : 'bg-[#8B5CF6]/10'
              } rounded-xl flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className={`text-3xl font-bold ${stat.color} mb-2 font-poppins`}>
                {stat.number}
              </div>
              <div className="text-[#64748B] text-sm font-inter">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Story Navigation */}
        <div className="flex justify-center items-center gap-4 mb-12">
          <motion.button
            onClick={prevStory}
            className="w-12 h-12 bg-white border border-[#0066FF]/20 rounded-full flex items-center justify-center hover:bg-[#0066FF] hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaChevronLeft className="w-5 h-5" />
          </motion.button>

          <div className="flex gap-2">
            {successStories.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveStory(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeStory ? 'bg-[#0066FF]' : 'bg-[#0066FF]/30'
                }`}
              />
            ))}
          </div>

          <motion.button
            onClick={nextStory}
            className="w-12 h-12 bg-white border border-[#0066FF]/20 rounded-full flex items-center justify-center hover:bg-[#0066FF] hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaChevronRight className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Success Story Content */}
        <div ref={storiesRef}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStory}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl border border-[#0066FF]/10 overflow-hidden shadow-2xl"
            >
              {/* Story Header */}
              <div className="bg-gradient-to-r from-[#0066FF]/10 to-[#00D4FF]/10 p-8">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                  {/* Client Info */}
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                      {currentStory.client.logo}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#1A2332] font-poppins">
                        {currentStory.client.name}
                      </h3>
                      <div className="flex items-center gap-4 text-[#64748B] text-sm">
                        <span>{currentStory.client.industry}</span>
                        <span>•</span>
                        <span>{currentStory.client.size}</span>
                        <span>•</span>
                        <span>{currentStory.client.partnership} Partnership</span>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-[#0066FF] font-poppins">
                        {currentStory.project.value}
                      </div>
                      <div className="text-xs text-[#64748B]">Project Value</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-[#10B981] font-poppins">
                        {currentStory.project.duration}
                      </div>
                      <div className="text-xs text-[#64748B]">Duration</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-[#FF6B35] font-poppins">
                        {currentStory.project.year}
                      </div>
                      <div className="text-xs text-[#64748B]">Timeline</div>
                    </div>
                    <div className="flex justify-center">
                      {[...Array(currentStory.testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="w-4 h-4 text-[#F59E0B]" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Story Content */}
              <div className="p-8">
                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Left Column - Testimonial */}
                  <div>
                    <h4 className="text-2xl font-bold text-[#1A2332] mb-6 font-poppins">
                      {currentStory.project.title}
                    </h4>

                    {/* Video Testimonial */}
                    <div className="relative mb-6 rounded-2xl overflow-hidden">
                      <img
                        src={currentStory.testimonial.videoThumbnail}
                        alt="Video testimonial"
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <motion.button
                          className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setIsVideoPlaying(true)}
                        >
                          <FaPlay className="w-6 h-6 text-[#0066FF] ml-1" />
                        </motion.button>
                      </div>
                    </div>

                    {/* Quote */}
                    <div className="relative">
                      <FaQuoteLeft className="absolute -top-2 -left-2 w-8 h-8 text-[#0066FF]/20" />
                      <blockquote className="text-lg text-[#64748B] font-inter italic leading-relaxed pl-6 pr-6">
                        {currentStory.testimonial.quote}
                      </blockquote>
                      <FaQuoteRight className="absolute -bottom-2 -right-2 w-8 h-8 text-[#0066FF]/20" />
                    </div>

                    {/* Author */}
                    <div className="mt-6 pt-6 border-t border-[#0066FF]/10">
                      <div className="font-bold text-[#1A2332] text-lg font-poppins">
                        {currentStory.testimonial.author}
                      </div>
                      <div className="text-[#64748B] font-inter">
                        {currentStory.testimonial.position}
                      </div>
                      <div className="text-[#0066FF] font-semibold font-inter">
                        {currentStory.client.name}
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Results */}
                  <div className="space-y-8">
                    {/* Before & After */}
                    <div>
                      <h4 className="text-2xl font-bold text-[#1A2332] mb-6 font-poppins">
                        Transformation Results
                      </h4>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Before */}
                        <div className="bg-[#F8FAFC] rounded-2xl p-6">
                          <h5 className="font-bold text-[#64748B] mb-4 font-poppins">Before</h5>
                          <div className="space-y-3">
                            {Object.entries(currentStory.results.before).map(([key, value]) => (
                              <div key={key} className="text-sm">
                                <div className="font-medium text-[#1A2332] capitalize">{key}</div>
                                <div className="text-[#64748B]">{value}</div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* After */}
                        <div className="bg-gradient-to-br from-[#10B981]/10 to-[#00D4FF]/10 rounded-2xl p-6">
                          <h5 className="font-bold text-[#10B981] mb-4 font-poppins">After</h5>
                          <div className="space-y-3">
                            {Object.entries(currentStory.results.after).map(([key, value]) => (
                              <div key={key} className="text-sm">
                                <div className="font-medium text-[#1A2332] capitalize">{key}</div>
                                <div className="text-[#64748B]">{value}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Impact */}
                    <div>
                      <h4 className="text-2xl font-bold text-[#1A2332] mb-6 font-poppins">
                        Business Impact
                      </h4>
                      <div className="space-y-3">
                        {currentStory.impact.map((impact, index) => (
                          <motion.div
                            key={index}
                            className="flex items-center gap-3"
                            whileHover={{ x: 5 }}
                          >
                            <div className="w-6 h-6 bg-[#10B981] rounded-full flex items-center justify-center flex-shrink-0">
                              <FaAward className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-[#64748B] font-inter">{impact}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#1A2332] to-[#0F172A] rounded-3xl p-12 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4 font-poppins">
                Ready to Write Your Success Story?
              </h3>
              <p className="text-lg text-[#64748B] mb-8 max-w-2xl mx-auto font-inter">
                Join our family of successful clients and experience the B&M difference. 
                Let's discuss how we can transform your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-[#0066FF] to-[#00D4FF] text-white font-semibold rounded-xl hover:shadow-2xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Your Project
                </motion.button>
                
                <motion.button
                  className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule Consultation
                </motion.button>
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
      </div>
    </section>
  );
}