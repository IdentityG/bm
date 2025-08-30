'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FaMicrochip,
  FaBolt,
  FaShieldAlt,
  FaCertificate,
  FaThermometerHalf,
  FaWifi,
  FaEye,
  FaIndustry,
  FaChevronDown,
  FaChevronUp,
  FaCheckCircle,
  FaTools,
  FaCog,
  FaLightbulb
} from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function TechnicalSpecifications() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const tabsRef = useRef(null);
  const contentRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);
  const [expandedSpec, setExpandedSpec] = useState(null);

  const specificationCategories = [
    {
      id: 'cctv',
      title: 'CCTV & Security',
      icon: FaEye,
      color: 'text-[#0066FF]',
      bgColor: 'bg-[#0066FF]/10',
      gradient: 'from-[#0066FF] to-[#00D4FF]',
      specifications: [
        {
          category: 'Camera Systems',
          icon: FaEye,
          specs: [
            { name: 'Resolution', value: 'Up to 4K Ultra HD (3840×2160)', unit: 'pixels' },
            { name: 'Frame Rate', value: '30-60', unit: 'fps' },
            { name: 'Night Vision Range', value: 'Up to 100', unit: 'meters' },
            { name: 'Zoom Capability', value: '10x Optical, 16x Digital', unit: 'zoom' },
            { name: 'Weather Rating', value: 'IP67/IP68', unit: 'standard' }
          ]
        },
        {
          category: 'Storage & Processing',
          icon: FaMicrochip,
          specs: [
            { name: 'Storage Capacity', value: 'Up to 256', unit: 'TB' },
            { name: 'Retention Period', value: '30-365', unit: 'days' },
            { name: 'Compression', value: 'H.265/H.264', unit: 'codec' },
            { name: 'Bandwidth', value: '1-100', unit: 'Mbps' },
            { name: 'Backup Options', value: 'Cloud + Local', unit: 'redundant' }
          ]
        },
        {
          category: 'Network & Connectivity',
          icon: FaWifi,
          specs: [
            { name: 'Network Protocol', value: 'TCP/IP, ONVIF', unit: 'standard' },
            { name: 'Remote Access', value: 'Mobile + Web', unit: 'platform' },
            { name: 'Encryption', value: 'AES-256', unit: 'security' },
            { name: 'Bandwidth Usage', value: '2-8', unit: 'Mbps per camera' },
            { name: 'Concurrent Users', value: 'Up to 100', unit: 'users' }
          ]
        }
      ]
    },
    {
      id: 'electrical',
      title: 'Electrical Systems',
      icon: FaBolt,
      color: 'text-[#FF6B35]',
      bgColor: 'bg-[#FF6B35]/10',
      gradient: 'from-[#FF6B35] to-[#F59E0B]',
      specifications: [
        {
          category: 'Power Distribution',
          icon: FaBolt,
          specs: [
            { name: 'Voltage Range', value: '220V-33kV', unit: 'AC/DC' },
            { name: 'Power Capacity', value: 'Up to 10', unit: 'MVA' },
            { name: 'Frequency', value: '50/60', unit: 'Hz' },
            { name: 'Load Factor', value: '0.8-1.0', unit: 'power factor' },
            { name: 'Efficiency', value: '95-99', unit: '%' }
          ]
        },
        {
          category: 'Protection Systems',
          icon: FaShieldAlt,
          specs: [
            { name: 'Circuit Breakers', value: 'Up to 4000', unit: 'A' },
            { name: 'Earth Fault Protection', value: '<30', unit: 'mA' },
            { name: 'Surge Protection', value: 'Class I+II+III', unit: 'SPD' },
            { name: 'Arc Fault Detection', value: 'AFCI Enabled', unit: 'protection' },
            { name: 'Insulation Resistance', value: '>1', unit: 'MΩ' }
          ]
        },
        {
          category: 'Control & Monitoring',
          icon: FaCog,
          specs: [
            { name: 'SCADA Integration', value: 'Modbus/DNP3', unit: 'protocol' },
            { name: 'Remote Monitoring', value: '24/7 Real-time', unit: 'monitoring' },
            { name: 'Data Logging', value: '1-second', unit: 'intervals' },
            { name: 'Alarm Response', value: '<5', unit: 'seconds' },
            { name: 'Historical Data', value: '10+ years', unit: 'storage' }
          ]
        }
      ]
    },
    {
      id: 'lighting',
      title: 'Lighting Systems',
      icon: FaLightbulb,
      color: 'text-[#10B981]',
      bgColor: 'bg-[#10B981]/10',
      gradient: 'from-[#10B981] to-[#00D4FF]',
      specifications: [
        {
          category: 'LED Technology',
          icon: FaLightbulb,
          specs: [
            { name: 'Luminous Efficacy', value: '120-180', unit: 'lm/W' },
            { name: 'Color Temperature', value: '3000-6500', unit: 'K' },
            { name: 'CRI Rating', value: '>80', unit: 'Ra' },
            { name: 'Lifespan', value: '50,000+', unit: 'hours' },
            { name: 'Dimming Range', value: '0-100', unit: '%' }
          ]
        },
        {
          category: 'Environmental Specs',
          icon: FaThermometerHalf,
          specs: [
            { name: 'Operating Temperature', value: '-40 to +60', unit: '°C' },
            { name: 'IP Rating', value: 'IP65/IP66', unit: 'protection' },
            { name: 'Wind Resistance', value: 'Up to 200', unit: 'km/h' },
            { name: 'Vibration Resistance', value: 'IEC 60068', unit: 'standard' },
            { name: 'Salt Spray Resistance', value: '1000+ hours', unit: 'ASTM B117' }
          ]
        },
        {
          category: 'Smart Controls',
          icon: FaWifi,
          specs: [
            { name: 'Wireless Protocol', value: 'LoRaWAN/Zigbee', unit: 'mesh' },
            { name: 'Sensor Integration', value: 'Motion/Light/Traffic', unit: 'sensors' },
            { name: 'Energy Savings', value: 'Up to 75', unit: '%' },
            { name: 'Response Time', value: '<1', unit: 'second' },
            { name: 'Network Range', value: 'Up to 15', unit: 'km' }
          ]
        }
      ]
    },
    {
      id: 'engineering',
      title: 'Precision Engineering',
      icon: FaCog,
      color: 'text-[#8B5CF6]',
      bgColor: 'bg-[#8B5CF6]/10',
      gradient: 'from-[#8B5CF6] to-[#0066FF]',
      specifications: [
        {
          category: 'Precision Standards',
          icon: FaTools,
          specs: [
            { name: 'Dimensional Accuracy', value: '±0.001', unit: 'mm' },
            { name: 'Surface Finish', value: 'Ra 0.1-3.2', unit: 'μm' },
            { name: 'Parallelism', value: '±0.002', unit: 'mm' },
            { name: 'Perpendicularity', value: '±0.005', unit: 'mm' },
            { name: 'Roundness', value: '±0.001', unit: 'mm' }
          ]
        },
        {
          category: 'Environmental Control',
          icon: FaThermometerHalf,
          specs: [
            { name: 'Temperature Stability', value: '±0.1', unit: '°C' },
            { name: 'Humidity Control', value: '45±5', unit: '%RH' },
            { name: 'Vibration Isolation', value: '<0.1', unit: 'μm' },
            { name: 'Clean Room Class', value: 'ISO 14644-1 Class 7', unit: 'standard' },
            { name: 'Electromagnetic Shielding', value: '>80', unit: 'dB' }
          ]
        },
        {
          category: 'Quality Assurance',
          icon: FaCertificate,
          specs: [
            { name: 'Measurement Uncertainty', value: '±0.0005', unit: 'mm' },
            { name: 'Calibration Interval', value: '6-12', unit: 'months' },
            { name: 'Traceability', value: 'NIST/PTB', unit: 'standards' },
            { name: 'Documentation', value: 'ISO 9001:2015', unit: 'compliant' },
            { name: 'Testing Coverage', value: '100', unit: '%' }
          ]
        }
      ]
    }
  ];

  const certifications = [
    { name: 'ISO 9001:2015', description: 'Quality Management Systems' },
    { name: 'ISO 14001:2015', description: 'Environmental Management' },
    { name: 'ISO 45001:2018', description: 'Occupational Health & Safety' },
    { name: 'IEC 61508', description: 'Functional Safety' },
    { name: 'IEEE Standards', description: 'Electrical Engineering' },
    { name: 'NEMA Compliance', description: 'Electrical Equipment' }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const tabs = tabsRef.current;
    const content = contentRef.current;

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

    // Tabs animation
    gsap.fromTo(tabs.children,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: tabs,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleTabChange = (index) => {
    setActiveTab(index);
    setExpandedSpec(null);
    
    // Animate content change
    gsap.fromTo(contentRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
    );
  };

  const toggleSpecExpansion = (specIndex) => {
    setExpandedSpec(expandedSpec === specIndex ? null : specIndex);
  };

  const activeCategory = specificationCategories[activeTab];

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
              Technical Specifications
            </span>
          </h2>
          <p className="text-xl text-[#64748B] max-w-3xl mx-auto font-inter">
            Detailed technical specifications and performance standards for our 
            electro-mechanical solutions, ensuring transparency and reliability.
          </p>
        </div>

        {/* Category Tabs */}
        <div ref={tabsRef} className="flex flex-wrap justify-center gap-4 mb-12">
          {specificationCategories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => handleTabChange(index)}
              className={`group relative px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                activeTab === index
                  ? `bg-gradient-to-r ${category.gradient} text-white shadow-lg`
                  : 'bg-white text-[#64748B] hover:bg-[#F8FAFC] border border-[#0066FF]/10'
              }`}
            >
              <span className="relative z-10 flex items-center gap-3">
                <category.icon className="w-5 h-5" />
                {category.title}
              </span>
              {activeTab !== index && (
                <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
              )}
            </button>
          ))}
        </div>

        {/* Specifications Content */}
        <div ref={contentRef} className="space-y-8">
          {activeCategory.specifications.map((specGroup, groupIndex) => (
            <div key={groupIndex} className="bg-white rounded-2xl border border-[#0066FF]/10 overflow-hidden shadow-lg">
              {/* Specification Group Header */}
              <div
                className={`p-6 bg-gradient-to-r ${activeCategory.gradient} cursor-pointer`}
                onClick={() => toggleSpecExpansion(groupIndex)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <specGroup.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white font-poppins">
                      {specGroup.category}
                    </h3>
                  </div>
                  <div className="text-white">
                    {expandedSpec === groupIndex ? (
                      <FaChevronUp className="w-5 h-5" />
                    ) : (
                      <FaChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </div>
              </div>

              {/* Specification Details */}
              {expandedSpec === groupIndex && (
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {specGroup.specs.map((spec, specIndex) => (
                      <div key={specIndex} className="bg-[#F8FAFC] rounded-xl p-4 hover:bg-white hover:shadow-md transition-all duration-300">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-[#1A2332] font-inter">
                            {spec.name}
                          </h4>
                          <FaCheckCircle className={`w-4 h-4 ${activeCategory.color}`} />
                        </div>
                        <div className="flex items-baseline gap-2">
                          <span className={`text-2xl font-bold ${activeCategory.color} font-poppins`}>
                            {spec.value}
                          </span>
                          <span className="text-sm text-[#64748B] font-inter">
                            {spec.unit}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Certifications & Standards */}
        <div className="mt-16 bg-gradient-to-r from-[#1A2332] to-[#0F172A] rounded-3xl p-12 relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white text-center mb-8 font-poppins">
              Certifications & Standards
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <FaCertificate className="w-6 h-6 text-[#00D4FF]" />
                    <h4 className="text-lg font-bold text-white font-poppins">
                      {cert.name}
                    </h4>
                  </div>
                  <p className="text-[#64748B] font-inter">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-[#64748B] mb-6 font-inter">
                All our systems are designed and installed according to international standards 
                and undergo rigorous testing and certification processes.
              </p>
              <button className="group relative px-8 py-4 bg-gradient-to-r from-[#0066FF] to-[#00D4FF] text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#0066FF]/25">
                <span className="relative z-10 flex items-center gap-3">
                  Download Technical Datasheets
                  <FaTools className="w-5 h-5" />
                </span>
              </button>
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