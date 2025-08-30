'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaAward,
  FaCertificate,
  FaMedal,
  FaTrophy,
  FaShieldAlt,
  FaCheckCircle,
  FaStar,
  FaGlobe,
  FaIndustry,
  FaUsers,
  FaCalendarAlt,
  FaExternalLinkAlt
} from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function CertificationsAwards() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const certificationsRef = useRef(null);
  const awardsRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCert, setSelectedCert] = useState(null);

  const certificationCategories = [
    { id: 'all', label: 'All Certifications', icon: FaCertificate },
    { id: 'safety', label: 'Safety & Quality', icon: FaShieldAlt },
    { id: 'technical', label: 'Technical Standards', icon: FaIndustry },
    { id: 'management', label: 'Management Systems', icon: FaUsers }
  ];

  const certifications = [
    {
      id: 1,
      title: 'ISO 9001:2015',
      subtitle: 'Quality Management Systems',
      category: 'management',
      issuer: 'International Organization for Standardization',
      year: '2023',
      validUntil: '2026',
      description: 'Demonstrates our commitment to quality management and continuous improvement in all business processes.',
      benefits: [
        'Consistent quality delivery',
        'Customer satisfaction focus',
        'Continuous improvement culture',
        'Risk-based thinking approach'
      ],
      icon: FaCheckCircle,
      color: 'text-[#10B981]',
      bgColor: 'bg-[#10B981]/10',
      image: '/api/placeholder/400/300'
    },
    {
      id: 2,
      title: 'ISO 45001:2018',
      subtitle: 'Occupational Health & Safety',
      category: 'safety',
      issuer: 'International Organization for Standardization',
      year: '2023',
      validUntil: '2026',
      description: 'Ensures the highest standards of workplace safety and health management across all our operations.',
      benefits: [
        'Zero workplace accidents goal',
        'Employee safety priority',
        'Risk prevention measures',
        'Legal compliance assurance'
      ],
      icon: FaShieldAlt,
      color: 'text-[#FF6B35]',
      bgColor: 'bg-[#FF6B35]/10',
      image: '/api/placeholder/400/300'
    },
    {
      id: 3,
      title: 'IEC 62305',
      subtitle: 'Lightning Protection Systems',
      category: 'technical',
      issuer: 'International Electrotechnical Commission',
      year: '2022',
      validUntil: '2025',
      description: 'Specialized certification for designing and installing lightning protection systems.',
      benefits: [
        'Advanced protection design',
        'Risk assessment expertise',
        'International standard compliance',
        'Safety system optimization'
      ],
      icon: FaIndustry,
      color: 'text-[#0066FF]',
      bgColor: 'bg-[#0066FF]/10',
      image: '/api/placeholder/400/300'
    },
    {
      id: 4,
      title: 'NECA Certification',
      subtitle: 'Electrical Contractors Association',
      category: 'technical',
      issuer: 'National Electrical Contractors Association',
      year: '2023',
      validUntil: '2026',
      description: 'Recognition of excellence in electrical contracting and installation practices.',
      benefits: [
        'Industry best practices',
        'Professional recognition',
        'Technical competency',
        'Quality assurance'
      ],
      icon: FaCertificate,
      color: 'text-[#8B5CF6]',
      bgColor: 'bg-[#8B5CF6]/10',
      image: '/api/placeholder/400/300'
    },
    {
      id: 5,
      title: 'CCTV Installation Certification',
      subtitle: 'Security Systems Professional',
      category: 'technical',
      issuer: 'Security Industry Association',
      year: '2023',
      validUntil: '2025',
      description: 'Advanced certification in CCTV system design, installation, and maintenance.',
      benefits: [
        'Advanced surveillance expertise',
        'System integration skills',
        'Maintenance proficiency',
        'Technology updates'
      ],
      icon: FaGlobe,
      color: 'text-[#00D4FF]',
      bgColor: 'bg-[#00D4FF]/10',
      image: '/api/placeholder/400/300'
    }
  ];

  const awards = [
    {
      title: 'Excellence in Electrical Engineering',
      year: '2023',
      issuer: 'Ethiopian Engineering Association',
      description: 'Recognized for outstanding contributions to electrical engineering projects across Ethiopia.',
      icon: FaTrophy,
      color: 'text-[#F59E0B]'
    },
    {
      title: 'Best Safety Record Award',
      year: '2022',
      issuer: 'Ministry of Labor and Social Affairs',
      description: 'Awarded for maintaining zero workplace accidents for three consecutive years.',
      icon: FaShieldAlt,
      color: 'text-[#10B981]'
    },
    {
      title: 'Innovation in Smart Building Systems',
      year: '2023',
      issuer: 'Ethiopian Technology Innovation Institute',
      description: 'Recognition for implementing cutting-edge smart building automation solutions.',
      icon: FaAward,
      color: 'text-[#0066FF]'
    },
    {
      title: 'Customer Satisfaction Excellence',
      year: '2023',
      issuer: 'Ethiopian Chamber of Commerce',
      description: 'Achieved 98% customer satisfaction rating based on independent survey.',
      icon: FaStar,
      color: 'text-[#FF6B35]'
    },
    {
      title: 'Environmental Responsibility Award',
      year: '2022',
      issuer: 'Ethiopian Environmental Protection Authority',
      description: 'Recognized for implementing eco-friendly practices in all project implementations.',
      icon: FaMedal,
      color: 'text-[#059669]'
    },
    {
      title: 'Outstanding Employer Award',
      year: '2023',
      issuer: 'Ethiopian Employers Federation',
      description: 'Acknowledged for excellent employee development and workplace culture.',
      icon: FaUsers,
      color: 'text-[#8B5CF6]'
    }
  ];  const 
stats = [
    { number: '15+', label: 'Active Certifications', icon: FaCertificate },
    { number: '8', label: 'Industry Awards', icon: FaTrophy },
    { number: '100%', label: 'Compliance Rate', icon: FaCheckCircle },
    { number: '3', label: 'Years Zero Accidents', icon: FaShieldAlt }
  ];

  const filteredCertifications = selectedCategory === 'all' 
    ? certifications 
    : certifications.filter(cert => cert.category === selectedCategory);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const certs = certificationsRef.current;
    const awardsSection = awardsRef.current;

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

    // Certifications animation
    gsap.fromTo(certs.children,
      { y: 80, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: certs,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Awards animation
    gsap.fromTo(awardsSection.children,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: awardsSection,
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
              Certifications & Awards
            </span>
          </h2>
          <p className="text-xl text-[#64748B] max-w-3xl mx-auto font-inter">
            Our commitment to excellence is validated by industry certifications and 
            recognition from leading organizations across Ethiopia and internationally.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
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

        {/* Certification Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {certificationCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-[#0066FF] text-white shadow-lg'
                  : 'bg-white text-[#64748B] border border-[#0066FF]/10 hover:border-[#0066FF]/30'
              }`}
            >
              <category.icon className="w-4 h-4" />
              {category.label}
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div ref={certificationsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <AnimatePresence mode="wait">
            {filteredCertifications.map((cert) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl border border-[#0066FF]/10 overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedCert(cert)}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48 bg-gradient-to-br from-[#0066FF]/10 to-[#FF6B35]/10">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <div className={`w-10 h-10 ${cert.bgColor} rounded-full flex items-center justify-center`}>
                      <cert.icon className={`w-5 h-5 ${cert.color}`} />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#1A2332] mb-2 font-poppins">
                    {cert.title}
                  </h3>
                  <div className="text-[#0066FF] font-semibold text-sm mb-2 font-inter">
                    {cert.subtitle}
                  </div>
                  <div className="text-[#64748B] text-xs mb-4 font-inter">
                    {cert.issuer} • {cert.year}
                  </div>
                  
                  <p className="text-[#64748B] text-sm mb-4 font-inter line-clamp-2">
                    {cert.description}
                  </p>

                  <div className="flex justify-between items-center">
                    <span className="text-xs text-[#64748B] font-inter">
                      Valid until: {cert.validUntil}
                    </span>
                    <FaExternalLinkAlt className="w-4 h-4 text-[#0066FF]" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Awards Section */}
        <div className="bg-gradient-to-r from-[#1A2332] to-[#0F172A] rounded-3xl p-12 relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white text-center mb-12 font-poppins">
              Industry Recognition & Awards
            </h3>
            
            <div ref={awardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                    <award.icon className={`w-6 h-6 ${award.color}`} />
                  </div>
                  
                  <h4 className="text-lg font-bold text-white mb-2 font-poppins">
                    {award.title}
                  </h4>
                  
                  <div className="text-[#00D4FF] font-semibold text-sm mb-2 font-inter">
                    {award.issuer} • {award.year}
                  </div>
                  
                  <p className="text-gray-300 text-sm font-inter">
                    {award.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-gray-300 mb-6 font-inter">
                These recognitions validate our commitment to excellence and continuous improvement.
              </p>
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-[#FF6B35] to-[#F59E0B] text-white font-semibold rounded-xl hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Certifications
              </motion.button>
            </div>
          </div>

          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" 
              style={{
                backgroundImage: `radial-gradient(circle at 30% 50%, rgba(255, 107, 53, 0.3) 0%, transparent 50%),
                                 radial-gradient(circle at 70% 50%, rgba(0, 102, 255, 0.3) 0%, transparent 50%)`
              }}
            />
          </div>
        </div>
      </div>

      {/* Certification Detail Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedCert(null)}
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
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                >
                  ×
                </button>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 ${selectedCert.bgColor} rounded-xl flex items-center justify-center`}>
                    <selectedCert.icon className={`w-6 h-6 ${selectedCert.color}`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#1A2332] font-poppins">
                      {selectedCert.title}
                    </h3>
                    <div className="text-[#0066FF] font-semibold font-inter">
                      {selectedCert.subtitle}
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <span className="text-[#64748B] text-sm font-inter">Issued by:</span>
                    <div className="font-semibold text-[#1A2332] font-inter">{selectedCert.issuer}</div>
                  </div>
                  <div>
                    <span className="text-[#64748B] text-sm font-inter">Valid:</span>
                    <div className="font-semibold text-[#1A2332] font-inter">{selectedCert.year} - {selectedCert.validUntil}</div>
                  </div>
                </div>

                <p className="text-[#64748B] mb-6 font-inter">
                  {selectedCert.description}
                </p>

                <div>
                  <h4 className="font-semibold text-[#1A2332] mb-3 font-poppins">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {selectedCert.benefits.map((benefit, index) => (
                      <li key={index} className="text-[#64748B] text-sm flex items-center gap-2 font-inter">
                        <FaCheckCircle className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}