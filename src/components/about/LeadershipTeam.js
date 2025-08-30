'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaTimes,
  FaGraduationCap,
  FaAward,
  FaBriefcase,
  FaQuoteLeft
} from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function LeadershipTeam() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const teamRef = useRef(null);
  const [selectedMember, setSelectedMember] = useState(null);

  const leadershipTeam = [
    {
      id: 1,
      name: 'Bereket Mengistu',
      position: 'Founder & Chief Executive Officer',
      department: 'Executive Leadership',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      bio: 'Bereket founded B&M Electro-Mechanical with a vision to revolutionize Ethiopia\'s electro-mechanical industry. With over 20 years of experience in electrical engineering and business leadership, he has guided the company from a small startup to Ethiopia\'s premier electro-mechanical solutions provider.',
      education: [
        'M.Sc. Electrical Engineering - Addis Ababa University',
        'B.Sc. Electrical & Computer Engineering - AAU',
        'Executive MBA - Ethiopian Management Institute'
      ],
      experience: [
        '20+ years in Electrical Engineering',
        '15+ years in Business Leadership',
        'Former Senior Engineer at Ethiopian Electric Power',
        'Consultant for World Bank Infrastructure Projects'
      ],
      achievements: [
        'Led company to 500+ successful projects',
        'Established partnerships with 250+ clients',
        'Winner of "Entrepreneur of the Year" 2022',
        'Featured in Forbes Africa Rising Stars'
      ],
      quote: 'Our success is built on the foundation of trust, innovation, and unwavering commitment to excellence. Every project we undertake is an opportunity to contribute to Ethiopia\'s development.',
      contact: {
        email: 'bereket@bmelectro.com',
        linkedin: '#',
        phone: '+251-911-234-567'
      },
      color: 'text-[#0066FF]',
      bgColor: 'bg-[#0066FF]/10'
    },
    {
      id: 2,
      name: 'Dr. Meron Tadesse',
      position: 'Chief Technology Officer',
      department: 'Technology & Innovation',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      bio: 'Dr. Meron leads our technology initiatives and innovation strategies. With a Ph.D. in Electrical Engineering and extensive research background, she ensures B&M stays at the forefront of technological advancement in the electro-mechanical industry.',
      education: [
        'Ph.D. Electrical Engineering - MIT',
        'M.Sc. Power Systems - Stanford University',
        'B.Sc. Electrical Engineering - AAU'
      ],
      experience: [
        '15+ years in Advanced Technology Research',
        '10+ years in Industrial Applications',
        'Former Research Scientist at General Electric',
        'Published 25+ peer-reviewed papers'
      ],
      achievements: [
        'Led development of proprietary monitoring systems',
        'Holder of 8 international patents',
        'Winner of "Innovation Excellence Award" 2023',
        'Keynote speaker at 15+ international conferences'
      ],
      quote: 'Innovation is not just about adopting new technologies; it\'s about creating solutions that truly address our clients\' challenges and contribute to sustainable development.',
      contact: {
        email: 'meron@bmelectro.com',
        linkedin: '#',
        phone: '+251-911-234-568'
      },
      color: 'text-[#10B981]',
      bgColor: 'bg-[#10B981]/10'
    },
    {
      id: 3,
      name: 'Dawit Alemayehu',
      position: 'Chief Operations Officer',
      department: 'Operations & Project Management',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      bio: 'Dawit oversees all operational aspects of B&M, ensuring seamless project execution and delivery. His expertise in project management and operational excellence has been instrumental in maintaining our 98% client satisfaction rate.',
      education: [
        'M.Sc. Project Management - UNISA',
        'B.Sc. Mechanical Engineering - AAU',
        'PMP Certification - Project Management Institute'
      ],
      experience: [
        '18+ years in Project Management',
        '12+ years in Operations Leadership',
        'Former Operations Manager at Dangote Group',
        'Managed 200+ large-scale projects'
      ],
      achievements: [
        'Achieved 99.8% on-time project delivery',
        'Implemented ISO 9001:2015 quality systems',
        'Reduced operational costs by 25%',
        'Built team of 50+ skilled professionals'
      ],
      quote: 'Excellence in operations is about creating systems and processes that consistently deliver exceptional results while empowering our team to perform at their best.',
      contact: {
        email: 'dawit@bmelectro.com',
        linkedin: '#',
        phone: '+251-911-234-569'
      },
      color: 'text-[#FF6B35]',
      bgColor: 'bg-[#FF6B35]/10'
    },
    {
      id: 4,
      name: 'Hanan Mohammed',
      position: 'Chief Financial Officer',
      department: 'Finance & Strategy',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
      bio: 'Hanan manages B&M\'s financial strategy and business development initiatives. Her expertise in financial management and strategic planning has been crucial in the company\'s sustainable growth and expansion.',
      education: [
        'MBA Finance - London Business School',
        'B.Sc. Accounting & Finance - AAU',
        'CPA Certification - AICPA'
      ],
      experience: [
        '15+ years in Financial Management',
        '10+ years in Strategic Planning',
        'Former Finance Director at Ethiopian Airlines',
        'Consultant for African Development Bank'
      ],
      achievements: [
        'Secured $10M+ in project financing',
        'Achieved 25% annual revenue growth',
        'Implemented advanced financial systems',
        'Winner of "CFO Excellence Award" 2023'
      ],
      quote: 'Financial excellence and strategic thinking are the pillars that enable sustainable growth and long-term value creation for all our stakeholders.',
      contact: {
        email: 'hanan@bmelectro.com',
        linkedin: '#',
        phone: '+251-911-234-570'
      },
      color: 'text-[#8B5CF6]',
      bgColor: 'bg-[#8B5CF6]/10'
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const team = teamRef.current;

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

    // Team cards animation
    gsap.fromTo(team.children,
      { y: 80, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: team,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const openMemberModal = (member) => {
    setSelectedMember(member);
  };

  const closeMemberModal = () => {
    setSelectedMember(null);
  };

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
              Leadership Team
            </span>
          </h2>
          <p className="text-xl text-[#64748B] max-w-3xl mx-auto font-inter">
            Meet the visionary leaders driving B&M Electro-Mechanical's success. 
            Our experienced executive team combines decades of expertise with innovative thinking.
          </p>
        </div>

        {/* Leadership Team Grid */}
        <div ref={teamRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leadershipTeam.map((member, index) => (
            <motion.div
              key={member.id}
              className="group bg-white rounded-3xl border border-[#0066FF]/10 overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => openMemberModal(member)}
            >
              {/* Member Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-4">
                    <span className="text-[#0066FF] font-semibold text-sm">View Profile</span>
                  </div>
                </div>
              </div>

              {/* Member Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1A2332] mb-2 font-poppins group-hover:text-[#0066FF] transition-colors duration-300">
                  {member.name}
                </h3>
                <p className={`text-sm font-semibold ${member.color} mb-2`}>
                  {member.position}
                </p>
                <p className="text-[#64748B] text-sm font-inter">
                  {member.department}
                </p>

                {/* Contact Icons */}
                <div className="flex items-center gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    href={`mailto:${member.contact.email}`}
                    className="w-8 h-8 bg-[#0066FF]/10 rounded-full flex items-center justify-center hover:bg-[#0066FF] hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaEnvelope className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    href={member.contact.linkedin}
                    className="w-8 h-8 bg-[#0066FF]/10 rounded-full flex items-center justify-center hover:bg-[#0066FF] hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaLinkedin className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Member Detail Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMemberModal}
          >
            <motion.div
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image Side */}
                  <div className="relative h-80 lg:h-96">
                    <img
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>

                  {/* Info Side */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold text-[#1A2332] mb-2 font-poppins">
                      {selectedMember.name}
                    </h2>
                    <p className={`text-lg font-semibold ${selectedMember.color} mb-2`}>
                      {selectedMember.position}
                    </p>
                    <p className="text-[#64748B] mb-6 font-inter">
                      {selectedMember.department}
                    </p>

                    {/* Contact Info */}
                    <div className="flex items-center gap-4">
                      <motion.a
                        href={`mailto:${selectedMember.contact.email}`}
                        className="flex items-center gap-2 px-4 py-2 bg-[#0066FF]/10 rounded-xl hover:bg-[#0066FF] hover:text-white transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        <FaEnvelope className="w-4 h-4" />
                        <span className="text-sm font-inter">Email</span>
                      </motion.a>
                      <motion.a
                        href={selectedMember.contact.linkedin}
                        className="flex items-center gap-2 px-4 py-2 bg-[#0066FF]/10 rounded-xl hover:bg-[#0066FF] hover:text-white transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        <FaLinkedin className="w-4 h-4" />
                        <span className="text-sm font-inter">LinkedIn</span>
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={closeMemberModal}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300"
                >
                  <FaTimes className="w-5 h-5 text-[#0066FF]" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                {/* Bio */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-[#1A2332] mb-4 font-poppins">Biography</h3>
                  <p className="text-[#64748B] font-inter leading-relaxed">
                    {selectedMember.bio}
                  </p>
                </div>

                {/* Quote */}
                <div className="bg-gradient-to-r from-[#0066FF]/10 to-[#00D4FF]/10 rounded-2xl p-6 mb-8">
                  <FaQuoteLeft className="w-8 h-8 text-[#0066FF]/30 mb-4" />
                  <blockquote className="text-lg text-[#64748B] font-inter italic leading-relaxed">
                    "{selectedMember.quote}"
                  </blockquote>
                </div>

                {/* Details Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Education */}
                  <div>
                    <h4 className="text-xl font-bold text-[#1A2332] mb-4 font-poppins flex items-center gap-2">
                      <FaGraduationCap className="w-5 h-5 text-[#0066FF]" />
                      Education
                    </h4>
                    <div className="space-y-3">
                      {selectedMember.education.map((edu, index) => (
                        <div key={index} className="text-[#64748B] font-inter text-sm">
                          {edu}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Experience */}
                  <div>
                    <h4 className="text-xl font-bold text-[#1A2332] mb-4 font-poppins flex items-center gap-2">
                      <FaBriefcase className="w-5 h-5 text-[#10B981]" />
                      Experience
                    </h4>
                    <div className="space-y-3">
                      {selectedMember.experience.map((exp, index) => (
                        <div key={index} className="text-[#64748B] font-inter text-sm">
                          {exp}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-xl font-bold text-[#1A2332] mb-4 font-poppins flex items-center gap-2">
                      <FaAward className="w-5 h-5 text-[#FF6B35]" />
                      Achievements
                    </h4>
                    <div className="space-y-3">
                      {selectedMember.achievements.map((achievement, index) => (
                        <div key={index} className="text-[#64748B] font-inter text-sm">
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}