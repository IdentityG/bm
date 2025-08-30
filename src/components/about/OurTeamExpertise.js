'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaUsers,
  FaCog,
  FaLightbulb,
  FaGraduationCap,
  FaAward,
  FaTools,
  FaChartLine,
  FaHandshake,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaStar,
  FaCode,
  FaWrench,
  FaShieldAlt
} from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function OurTeamExpertise() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const statsRef = useRef(null);
  const teamRef = useRef(null);
  const expertiseRef = useRef(null);
  const [selectedMember, setSelectedMember] = useState(null);
  const [activeTab, setActiveTab] = useState('leadership');

  const teamStats = [
    { number: '50+', label: 'Expert Engineers', icon: FaUsers },
    { number: '15+', label: 'Years Average Experience', icon: FaGraduationCap },
    { number: '200+', label: 'Projects Completed', icon: FaTools },
    { number: '98%', label: 'Client Satisfaction', icon: FaStar }
  ];

  const teamCategories = [
    { id: 'leadership', label: 'Leadership Team', icon: FaHandshake },
    { id: 'engineers', label: 'Senior Engineers', icon: FaCog },
    { id: 'specialists', label: 'Technical Specialists', icon: FaWrench },
    { id: 'support', label: 'Support Team', icon: FaShieldAlt }
  ];

  const teamMembers = {
    leadership: [
      {
        id: 1,
        name: 'Bereket Molla',
        position: 'Chief Executive Officer',
        experience: '20+ Years',
        specialization: 'Strategic Leadership & Business Development',
        education: 'MBA in Business Administration, BSc in Electrical Engineering',
        achievements: ['Led 500+ successful projects', 'Industry recognition awards', 'Strategic partnerships'],
        image: '/api/placeholder/300/300',
        contact: { email: 'bereket@bmelectro.com', phone: '+251-911-123-456', linkedin: '#' },
        bio: 'Visionary leader with over two decades of experience in electro-mechanical systems and business strategy.'
      },
      {
        id: 2,
        name: 'Dr. Sarah Johnson',
        position: 'Chief Technology Officer',
        experience: '18+ Years',
        specialization: 'Advanced Electrical Systems & Innovation',
        education: 'PhD in Electrical Engineering, MSc in Power Systems',
        achievements: ['Patent holder', 'Research publications', 'Technology innovation awards'],
        image: '/api/placeholder/300/300',
        contact: { email: 'sarah@bmelectro.com', phone: '+251-911-123-457', linkedin: '#' },
        bio: 'Leading technology innovation and ensuring cutting-edge solutions in all our projects.'
      }
    ],
    engineers: [
      {
        id: 3,
        name: 'Ahmed Hassan',
        position: 'Senior Electrical Engineer',
        experience: '12+ Years',
        specialization: 'Power Distribution & Control Systems',
        education: 'MSc in Electrical Engineering',
        achievements: ['100+ power system projects', 'Safety excellence awards'],
        image: '/api/placeholder/300/300',
        contact: { email: 'ahmed@bmelectro.com', phone: '+251-911-123-458' },
        bio: 'Expert in complex power distribution systems with a focus on safety and efficiency.'
      },
      {
        id: 4,
        name: 'Maria Rodriguez',
        position: 'Senior CCTV Systems Engineer',
        experience: '10+ Years',
        specialization: 'Security Systems & Surveillance Technology',
        education: 'BSc in Electronics Engineering, Security Systems Certification',
        achievements: ['200+ CCTV installations', 'Advanced security certifications'],
        image: '/api/placeholder/300/300',
        contact: { email: 'maria@bmelectro.com', phone: '+251-911-123-459' },
        bio: 'Specialized in designing and implementing comprehensive security surveillance systems.'
      }
    ],
    specialists: [
      {
        id: 5,
        name: 'David Chen',
        position: 'Automation Specialist',
        experience: '8+ Years',
        specialization: 'Industrial Automation & Smart Systems',
        education: 'MSc in Automation Engineering',
        achievements: ['Smart building implementations', 'IoT integration projects'],
        image: '/api/placeholder/300/300',
        contact: { email: 'david@bmelectro.com', phone: '+251-911-123-460' },
        bio: 'Focused on bringing intelligent automation solutions to modern infrastructure.'
      }
    ],
    support: [
      {
        id: 6,
        name: 'Lisa Thompson',
        position: 'Project Coordinator',
        experience: '6+ Years',
        specialization: 'Project Management & Client Relations',
        education: 'BSc in Project Management, PMP Certified',
        achievements: ['On-time project delivery', 'Client satisfaction excellence'],
        image: '/api/placeholder/300/300',
        contact: { email: 'lisa@bmelectro.com', phone: '+251-911-123-461' },
        bio: 'Ensuring seamless project execution and maintaining strong client relationships.'
      }
    ]
  };

  const expertiseAreas = [
    {
      title: 'Electrical Engineering',
      description: 'Power systems, distribution, control panels, and electrical installations',
      teamSize: '15 Engineers',
      projects: '300+',
      icon: FaLightbulb,
      color: 'text-[#FF6B35]',
      bgColor: 'bg-[#FF6B35]/10'
    },
    {
      title: 'Security Systems',
      description: 'CCTV, access control, alarm systems, and integrated security solutions',
      teamSize: '12 Specialists',
      projects: '250+',
      icon: FaShieldAlt,
      color: 'text-[#0066FF]',
      bgColor: 'bg-[#0066FF]/10'
    },
    {
      title: 'Automation & Control',
      description: 'Industrial automation, smart building systems, and IoT integration',
      teamSize: '8 Experts',
      projects: '150+',
      icon: FaCog,
      color: 'text-[#10B981]',
      bgColor: 'bg-[#10B981]/10'
    },
    {
      title: 'Project Management',
      description: 'End-to-end project delivery, quality assurance, and client management',
      teamSize: '10 Managers',
      projects: '500+',
      icon: FaChartLine,
      color: 'text-[#8B5CF6]',
      bgColor: 'bg-[#8B5CF6]/10'
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const stats = statsRef.current;
    const team = teamRef.current;
    const expertise = expertiseRef.current;

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

    // Team cards animation
    gsap.fromTo(team.children,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: team,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Expertise animation
    gsap.fromTo(expertise.children,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: expertise,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 border border-[#0066FF]/20 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 border border-[#FF6B35]/20 rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-poppins mb-6">
            <span className="bg-gradient-to-r from-[#0066FF] via-[#FF6B35] to-[#1A2332] bg-clip-text text-transparent">
              Our Team & Expertise
            </span>
          </h2>
          <p className="text-xl text-[#64748B] max-w-3xl mx-auto font-inter">
            Meet the passionate professionals who bring innovation, expertise, and 
            dedication to every project we undertake.
          </p>
        </div>

        {/* Team Statistics */}
        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {teamStats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl border border-[#0066FF]/10 p-6 text-center hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="w-12 h-12 bg-[#0066FF]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-[#0066FF]" />
              </div>
              <div className="text-3xl font-bold text-[#0066FF] mb-2 font-poppins">
                {stat.number}
              </div>
              <div className="text-[#64748B] text-sm font-inter">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Categories Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {teamCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === category.id
                  ? 'bg-[#0066FF] text-white shadow-lg'
                  : 'bg-white text-[#64748B] border border-[#0066FF]/10 hover:border-[#0066FF]/30'
              }`}
            >
              <category.icon className="w-4 h-4" />
              {category.label}
            </button>
          ))}
        </div>

        {/* Team Members Grid */}
        <div ref={teamRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <AnimatePresence mode="wait">
            {teamMembers[activeTab]?.map((member) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl border border-[#0066FF]/10 overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedMember(member)}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-64 bg-gradient-to-br from-[#0066FF]/10 to-[#FF6B35]/10">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1A2332] mb-2 font-poppins">
                    {member.name}
                  </h3>
                  <div className="text-[#0066FF] font-semibold mb-2 font-inter">
                    {member.position}
                  </div>
                  <div className="text-[#64748B] text-sm mb-3 font-inter">
                    {member.experience} • {member.specialization}
                  </div>
                  
                  <div className="flex gap-3">
                    {member.contact.email && (
                      <a
                        href={`mailto:${member.contact.email}`}
                        className="w-8 h-8 bg-[#0066FF]/10 rounded-lg flex items-center justify-center hover:bg-[#0066FF] hover:text-white transition-all duration-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaEnvelope className="w-4 h-4" />
                      </a>
                    )}
                    {member.contact.linkedin && (
                      <a
                        href={member.contact.linkedin}
                        className="w-8 h-8 bg-[#0066FF]/10 rounded-lg flex items-center justify-center hover:bg-[#0066FF] hover:text-white transition-all duration-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaLinkedin className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Expertise Areas */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-[#1A2332] text-center mb-12 font-poppins">
            Areas of Expertise
          </h3>
          
          <div ref={expertiseRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl border border-[#0066FF]/10 p-6 hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className={`w-12 h-12 ${area.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                  <area.icon className={`w-6 h-6 ${area.color}`} />
                </div>
                
                <h4 className="text-lg font-bold text-[#1A2332] mb-2 font-poppins">
                  {area.title}
                </h4>
                
                <p className="text-[#64748B] text-sm mb-4 font-inter">
                  {area.description}
                </p>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-[#64748B] font-inter">Team Size:</span>
                    <span className={`text-xs font-semibold ${area.color}`}>
                      {area.teamSize}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-[#64748B] font-inter">Projects:</span>
                    <span className="text-xs font-semibold text-[#10B981]">
                      {area.projects}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Member Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 bg-gradient-to-br from-[#0066FF]/10 to-[#FF6B35]/10">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                >
                  ×
                </button>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#1A2332] mb-2 font-poppins">
                  {selectedMember.name}
                </h3>
                <div className="text-[#0066FF] font-semibold mb-4 font-inter">
                  {selectedMember.position}
                </div>
                
                <p className="text-[#64748B] mb-6 font-inter">
                  {selectedMember.bio}
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-[#1A2332] mb-2 font-poppins">Education</h4>
                    <p className="text-[#64748B] text-sm font-inter">{selectedMember.education}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1A2332] mb-2 font-poppins">Experience</h4>
                    <p className="text-[#64748B] text-sm font-inter">{selectedMember.experience}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-[#1A2332] mb-2 font-poppins">Key Achievements</h4>
                  <ul className="space-y-1">
                    {selectedMember.achievements.map((achievement, index) => (
                      <li key={index} className="text-[#64748B] text-sm flex items-center gap-2 font-inter">
                        <div className="w-1.5 h-1.5 bg-[#0066FF] rounded-full"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4">
                  {selectedMember.contact.email && (
                    <a
                      href={`mailto:${selectedMember.contact.email}`}
                      className="flex items-center gap-2 px-4 py-2 bg-[#0066FF] text-white rounded-xl hover:bg-[#0052CC] transition-all duration-300"
                    >
                      <FaEnvelope className="w-4 h-4" />
                      Email
                    </a>
                  )}
                  {selectedMember.contact.phone && (
                    <a
                      href={`tel:${selectedMember.contact.phone}`}
                      className="flex items-center gap-2 px-4 py-2 bg-[#10B981] text-white rounded-xl hover:bg-[#059669] transition-all duration-300"
                    >
                      <FaPhone className="w-4 h-4" />
                      Call
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}