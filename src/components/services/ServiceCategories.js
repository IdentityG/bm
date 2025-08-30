'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FaCamera, 
  FaBolt, 
  FaRoad, 
  FaCog,
  FaCheckCircle,
  FaArrowRight,
  FaShieldAlt,
  FaEye,
  FaWifi,
  FaIndustry,
  FaPlug,
  FaLightbulb,
  FaSun,
  FaAtom,
  FaMicroscope,
  FaCertificate
} from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function ServiceCategories() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const categoriesRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState(0);

  const serviceCategories = [
    {
      id: 'cctv',
      icon: FaCamera,
      title: 'CCTV & Security Systems',
      subtitle: 'Advanced Surveillance Solutions',
      description: 'Comprehensive security systems with cutting-edge CCTV technology, access control, and monitoring solutions for complete protection.',
      gradient: 'from-[#0066FF] to-[#00D4FF]',
      features: [
        { icon: FaEye, text: 'HD/4K Camera Systems' },
        { icon: FaWifi, text: 'Remote Monitoring' },
        { icon: FaShieldAlt, text: 'Access Control Integration' },
        { icon: FaCertificate, text: 'Professional Installation' }
      ],
      benefits: [
        '24/7 Real-time Monitoring',
        'Cloud Storage & Backup',
        'Mobile App Integration',
        'Motion Detection Alerts',
        'Night Vision Capability'
      ],
      applications: [
        'Commercial Buildings',
        'Industrial Facilities', 
        'Residential Complexes',
        'Government Institutions'
      ]
    },
    {
      id: 'electric',
      icon: FaBolt,
      title: 'Mega Electric Projects',
      subtitle: 'Industrial-Scale Electrical Solutions',
      description: 'Large-scale electrical installations, power distribution systems, and industrial electrical infrastructure for major projects.',
      gradient: 'from-[#FF6B35] to-[#F59E0B]',
      features: [
        { icon: FaIndustry, text: 'Industrial Power Systems' },
        { icon: FaPlug, text: 'Distribution Networks' },
        { icon: FaBolt, text: 'High Voltage Solutions' },
        { icon: FaCertificate, text: 'Safety Compliance' }
      ],
      benefits: [
        'Scalable Power Solutions',
        'Energy Efficiency Optimization',
        'Redundant Safety Systems',
        'Load Management',
        'Emergency Backup Power'
      ],
      applications: [
        'Manufacturing Plants',
        'Data Centers',
        'Hospitals & Healthcare',
        'Educational Institutions'
      ]
    },
    {
      id: 'lighting',
      icon: FaRoad,
      title: 'Road & Street Lighting',
      subtitle: 'Smart Lighting Infrastructure',
      description: 'Energy-efficient street lighting systems with smart controls, LED technology, and automated management for urban infrastructure.',
      gradient: 'from-[#10B981] to-[#00D4FF]',
      features: [
        { icon: FaLightbulb, text: 'LED Technology' },
        { icon: FaSun, text: 'Solar Integration' },
        { icon: FaWifi, text: 'Smart Controls' },
        { icon: FaCertificate, text: 'Weather Resistant' }
      ],
      benefits: [
        '75% Energy Savings',
        'Automated Dimming',
        'Remote Monitoring',
        'Maintenance Alerts',
        'Environmental Sensors'
      ],
      applications: [
        'City Streets & Highways',
        'Parking Areas',
        'Parks & Recreation',
        'Industrial Complexes'
      ]
    },
    {
      id: 'collider',
      icon: FaCog,
      title: 'Ethiopian Collider Projects',
      subtitle: 'Precision Engineering Solutions',
      description: 'Specialized engineering for advanced scientific research infrastructure, precision equipment, and cutting-edge technology projects.',
      gradient: 'from-[#8B5CF6] to-[#0066FF]',
      features: [
        { icon: FaAtom, text: 'Precision Engineering' },
        { icon: FaMicroscope, text: 'Research Grade Equipment' },
        { icon: FaCog, text: 'Custom Solutions' },
        { icon: FaCertificate, text: 'International Standards' }
      ],
      benefits: [
        'Ultra-Precision Installation',
        'Vibration Isolation',
        'Clean Room Standards',
        'Advanced Monitoring',
        'Research Collaboration'
      ],
      applications: [
        'Research Facilities',
        'Universities',
        'Scientific Institutions',
        'Technology Centers'
      ]
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const categories = categoriesRef.current;

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

    // Categories animation
    gsap.fromTo(categories.children,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: categories,
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
        <div className="absolute bottom-20 left-20 w-48 h-48 border border-[#00D4FF]/20 rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-poppins mb-6">
            <span className="bg-gradient-to-r from-[#0066FF] via-[#00D4FF] to-[#1A2332] bg-clip-text text-transparent">
              Our Service Categories
            </span>
          </h2>
          <p className="text-xl text-[#64748B] max-w-3xl mx-auto font-inter">
            Comprehensive electro-mechanical solutions tailored to meet the diverse needs 
            of Ethiopia's growing industrial and infrastructure landscape.
          </p>
        </div>

        {/* Service Categories */}
        <div ref={categoriesRef} className="space-y-16">
          {serviceCategories.map((category, index) => (
            <div
              key={category.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              {/* Content Side */}
              <div className="flex-1 space-y-6">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.gradient} rounded-xl flex items-center justify-center`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-[#1A2332] font-poppins">
                      {category.title}
                    </h3>
                    <p className={`text-lg font-semibold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                      {category.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-lg text-[#64748B] leading-relaxed font-inter">
                  {category.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <feature.icon className={`w-5 h-5 bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`} />
                      <span className="text-[#1A2332] font-inter font-medium">{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className={`group relative px-6 py-3 bg-gradient-to-r ${category.gradient} text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl`}>
                  <span className="relative z-10 flex items-center gap-3">
                    Learn More About {category.title.split(' ')[0]}
                    <FaArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </button>
              </div>

              {/* Details Side */}
              <div className="flex-1">
                <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-[#0066FF]/10">
                  {/* Benefits */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-[#1A2332] mb-4 font-poppins">Key Benefits</h4>
                    <div className="space-y-3">
                      {category.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center gap-3">
                          <FaCheckCircle className={`w-5 h-5 bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`} />
                          <span className="text-[#64748B] font-inter">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Applications */}
                  <div>
                    <h4 className="text-xl font-bold text-[#1A2332] mb-4 font-poppins">Applications</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {category.applications.map((application, appIndex) => (
                        <div key={appIndex} className={`px-3 py-2 bg-gradient-to-r ${category.gradient} bg-opacity-10 rounded-lg text-center`}>
                          <span className="text-sm text-[#1A2332] font-inter font-medium">{application}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-[#1A2332] to-[#0F172A] rounded-3xl p-12 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4 font-poppins">
                Need a Custom Solution?
              </h3>
              <p className="text-lg text-[#64748B] mb-8 max-w-2xl mx-auto font-inter">
                Our expert team can design and implement tailored electro-mechanical solutions 
                for your specific requirements and industry needs.
              </p>
              <button className="group relative px-8 py-4 bg-gradient-to-r from-[#0066FF] to-[#00D4FF] text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#0066FF]/25">
                <span className="relative z-10 flex items-center gap-3">
                  Discuss Your Project
                  <FaArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}