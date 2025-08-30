'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaBuilding,
  FaTools,
  FaCog,
  FaLaptop,
  FaTruck,
  FaWarehouse,
  FaFlask,
  FaShieldAlt,
  FaUsers,
  FaChartLine,
  FaMapMarkerAlt,
  FaPhone,
  FaPlay,
  FaExpand,
  FaArrowRight,
  FaCheckCircle
} from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function FacilitiesCapabilities() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const facilitiesRef = useRef(null);
  const capabilitiesRef = useRef(null);
  const [selectedFacility, setSelectedFacility] = useState(null);
  const [activeTab, setActiveTab] = useState('headquarters');

  const facilityTabs = [
    { id: 'headquarters', label: 'Headquarters', icon: FaBuilding },
    { id: 'workshop', label: 'Workshop', icon: FaTools },
    { id: 'warehouse', label: 'Warehouse', icon: FaWarehouse },
    { id: 'testing', label: 'Testing Lab', icon: FaFlask }
  ];

  const facilities = {
    headquarters: {
      title: 'Corporate Headquarters',
      location: 'Addis Ababa, Ethiopia',
      area: '2,500 m²',
      established: '2008',
      description: 'Our modern headquarters houses administrative offices, design studios, and client meeting facilities.',
      features: [
        'Executive offices and meeting rooms',
        'Design and engineering studios',
        'Client presentation facilities',
        'Training and conference rooms',
        'Modern IT infrastructure',
        'Secure document storage'
      ],
      images: [
        '/api/placeholder/600/400',
        '/api/placeholder/600/400',
        '/api/placeholder/600/400'
      ],
      virtualTour: '#',
      contact: {
        phone: '+251-11-123-4567',
        address: 'Bole Sub City, Addis Ababa, Ethiopia'
      }
    },
    workshop: {
      title: 'Technical Workshop',
      location: 'Industrial Zone, Addis Ababa',
      area: '1,800 m²',
      established: '2010',
      description: 'State-of-the-art workshop facility equipped with modern tools and equipment for fabrication and assembly.',
      features: [
        'CNC machining center',
        'Welding and fabrication stations',
        'Electrical panel assembly area',
        'Quality control stations',
        'Tool and equipment storage',
        'Safety and emergency systems'
      ],
      images: [
        '/api/placeholder/600/400',
        '/api/placeholder/600/400',
        '/api/placeholder/600/400'
      ],
      virtualTour: '#',
      contact: {
        phone: '+251-11-123-4568',
        address: 'Industrial Zone, Addis Ababa, Ethiopia'
      }
    },
    warehouse: {
      title: 'Central Warehouse',
      location: 'Logistics Hub, Addis Ababa',
      area: '3,200 m²',
      established: '2012',
      description: 'Centralized storage facility for equipment, materials, and spare parts with advanced inventory management.',
      features: [
        'Climate-controlled storage',
        'Automated inventory system',
        'Loading and unloading bays',
        'Security and surveillance',
        'Equipment staging areas',
        'Spare parts organization'
      ],
      images: [
        '/api/placeholder/600/400',
        '/api/placeholder/600/400',
        '/api/placeholder/600/400'
      ],
      virtualTour: '#',
      contact: {
        phone: '+251-11-123-4569',
        address: 'Logistics Hub, Addis Ababa, Ethiopia'
      }
    },
    testing: {
      title: 'Testing Laboratory',
      location: 'Technology Park, Addis Ababa',
      area: '800 m²',
      established: '2015',
      description: 'Advanced testing facility for quality assurance, performance testing, and research & development.',
      features: [
        'Electrical testing equipment',
        'Environmental testing chambers',
        'Calibration and measurement tools',
        'Safety testing protocols',
        'Research and development area',
        'Documentation and reporting systems'
      ],
      images: [
        '/api/placeholder/600/400',
        '/api/placeholder/600/400',
        '/api/placeholder/600/400'
      ],
      virtualTour: '#',
      contact: {
        phone: '+251-11-123-4570',
        address: 'Technology Park, Addis Ababa, Ethiopia'
      }
    }
  };

  const capabilities = [
    {
      category: 'Design & Engineering',
      icon: FaLaptop,
      color: 'text-[#0066FF]',
      bgColor: 'bg-[#0066FF]/10',
      capabilities: [
        'CAD/CAM Design Software',
        '3D Modeling and Simulation',
        'Electrical System Design',
        'Project Planning Tools',
        'Technical Documentation',
        'Quality Assurance Protocols'
      ]
    },
    {
      category: 'Manufacturing & Assembly',
      icon: FaCog,
      color: 'text-[#FF6B35]',
      bgColor: 'bg-[#FF6B35]/10',
      capabilities: [
        'CNC Machining Centers',
        'Welding and Fabrication',
        'Electrical Panel Assembly',
        'Cable Management Systems',
        'Custom Component Manufacturing',
        'Quality Control Testing'
      ]
    },
    {
      category: 'Testing & Validation',
      icon: FaFlask,
      color: 'text-[#10B981]',
      bgColor: 'bg-[#10B981]/10',
      capabilities: [
        'Electrical Safety Testing',
        'Performance Validation',
        'Environmental Testing',
        'Compliance Verification',
        'Load Testing Equipment',
        'Calibration Services'
      ]
    },
    {
      category: 'Logistics & Support',
      icon: FaTruck,
      color: 'text-[#8B5CF6]',
      bgColor: 'bg-[#8B5CF6]/10',
      capabilities: [
        'Fleet Management System',
        'Inventory Management',
        'Supply Chain Coordination',
        'Emergency Response Teams',
        '24/7 Support Services',
        'Nationwide Coverage'
      ]
    }
  ];  const fa
cilityStats = [
    { number: '8,300', label: 'Total Facility Area (m²)', icon: FaBuilding },
    { number: '4', label: 'Major Facilities', icon: FaWarehouse },
    { number: '50+', label: 'Advanced Equipment', icon: FaTools },
    { number: '24/7', label: 'Operations Support', icon: FaShieldAlt }
  ];

  const currentFacility = facilities[activeTab];

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const facilitiesSection = facilitiesRef.current;
    const capabilitiesSection = capabilitiesRef.current;

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

    // Facilities animation
    gsap.fromTo(facilitiesSection.children,
      { y: 80, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: facilitiesSection,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Capabilities animation
    gsap.fromTo(capabilitiesSection.children,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: capabilitiesSection,
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
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-[#F8FAFC] to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 border border-[#0066FF]/20 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-[#FF6B35]/20 rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-poppins mb-6">
            <span className="bg-gradient-to-r from-[#FF6B35] via-[#0066FF] to-[#1A2332] bg-clip-text text-transparent">
              Facilities & Capabilities
            </span>
          </h2>
          <p className="text-xl text-[#64748B] max-w-3xl mx-auto font-inter">
            State-of-the-art facilities and advanced capabilities that enable us to deliver 
            world-class electro-mechanical solutions across all project scales.
          </p>
        </div>

        {/* Facility Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {facilityStats.map((stat, index) => (
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

        {/* Facility Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {facilityTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-[#0066FF] text-white shadow-lg'
                  : 'bg-white text-[#64748B] border border-[#0066FF]/10 hover:border-[#0066FF]/30'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Facility Details */}
        <div ref={facilitiesRef} className="mb-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl border border-[#0066FF]/10 overflow-hidden shadow-xl"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Facility Images */}
                <div className="relative h-96 lg:h-auto">
                  <img
                    src={currentFacility.images[0]}
                    alt={currentFacility.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex gap-2">
                      {currentFacility.images.map((_, index) => (
                        <div
                          key={index}
                          className={`w-2 h-2 rounded-full ${
                            index === 0 ? 'bg-white' : 'bg-white/50'
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <button className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300">
                    <FaPlay className="w-4 h-4 ml-1" />
                  </button>
                </div>

                {/* Facility Information */}
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <FaMapMarkerAlt className="w-4 h-4 text-[#0066FF]" />
                    <span className="text-[#64748B] text-sm font-inter">{currentFacility.location}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#1A2332] mb-4 font-poppins">
                    {currentFacility.title}
                  </h3>
                  
                  <p className="text-[#64748B] mb-6 font-inter">
                    {currentFacility.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <span className="text-[#64748B] text-sm font-inter">Total Area:</span>
                      <div className="font-semibold text-[#1A2332] font-inter">{currentFacility.area}</div>
                    </div>
                    <div>
                      <span className="text-[#64748B] text-sm font-inter">Established:</span>
                      <div className="font-semibold text-[#1A2332] font-inter">{currentFacility.established}</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-[#1A2332] mb-3 font-poppins">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {currentFacility.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <FaCheckCircle className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                          <span className="text-[#64748B] text-sm font-inter">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <motion.a
                      href={currentFacility.virtualTour}
                      className="flex items-center gap-2 px-4 py-2 bg-[#0066FF] text-white rounded-xl hover:bg-[#0052CC] transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FaExpand className="w-4 h-4" />
                      Virtual Tour
                    </motion.a>
                    <motion.a
                      href={`tel:${currentFacility.contact.phone}`}
                      className="flex items-center gap-2 px-4 py-2 bg-[#10B981] text-white rounded-xl hover:bg-[#059669] transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FaPhone className="w-4 h-4" />
                      Contact
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Capabilities Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-[#1A2332] text-center mb-12 font-poppins">
            Technical Capabilities
          </h3>
          
          <div ref={capabilitiesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl border border-[#0066FF]/10 p-6 hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className={`w-12 h-12 ${capability.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                  <capability.icon className={`w-6 h-6 ${capability.color}`} />
                </div>
                
                <h4 className="text-lg font-bold text-[#1A2332] mb-4 font-poppins">
                  {capability.category}
                </h4>
                
                <ul className="space-y-2">
                  {capability.capabilities.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-[#64748B] text-sm flex items-center gap-2 font-inter">
                      <div className={`w-1.5 h-1.5 ${capability.color.replace('text-', 'bg-')} rounded-full flex-shrink-0`}></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-[#1A2332] to-[#0F172A] rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white mb-6 font-poppins">
              Experience Our Facilities
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto font-inter">
              Schedule a visit to see our state-of-the-art facilities and learn how our 
              capabilities can support your next project.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#FF6B35] to-[#F59E0B] text-white font-semibold rounded-xl hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Facility Tour
                <FaArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.button
                className="flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPhone className="w-4 h-4" />
                Contact Us
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
    </section>
  );
}