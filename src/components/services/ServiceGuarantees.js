'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FaShieldAlt,
  FaHeadset,
  FaClock,
  FaTools,
  FaCertificate,
  FaPhone,
  FaCheckCircle,
  FaArrowRight,
  FaCalendarAlt,
  FaUserTie,
  FaClipboardCheck,
  FaExclamationTriangle,
  FaLaptop,
  FaWrench,
  FaChartLine
} from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function ServiceGuarantees() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const guaranteesRef = useRef(null);
  const supportRef = useRef(null);
  const [activeGuarantee, setActiveGuarantee] = useState(0);

  const guarantees = [
    {
      id: 'warranty',
      icon: FaShieldAlt,
      title: 'Comprehensive Warranty',
      subtitle: 'Peace of Mind Protection',
      description: 'Industry-leading warranty coverage on all installations and equipment with comprehensive protection against defects and failures.',
      gradient: 'from-[#0066FF] to-[#00D4FF]',
      features: [
        { icon: FaCheckCircle, text: '5-Year Equipment Warranty', highlight: true },
        { icon: FaCheckCircle, text: '2-Year Installation Warranty' },
        { icon: FaCheckCircle, text: 'Free Replacement Parts' },
        { icon: FaCheckCircle, text: 'No Hidden Costs' },
        { icon: FaCheckCircle, text: 'Transferable Warranty' }
      ],
      coverage: [
        'Manufacturing defects',
        'Installation workmanship',
        'Component failures',
        'Performance issues',
        'Environmental damage'
      ]
    },
    {
      id: 'support',
      icon: FaHeadset,
      title: '24/7 Technical Support',
      subtitle: 'Always Available When You Need Us',
      description: 'Round-the-clock technical support with dedicated engineers ready to assist with any issues or questions.',
      gradient: 'from-[#10B981] to-[#00D4FF]',
      features: [
        { icon: FaPhone, text: '24/7 Emergency Hotline', highlight: true },
        { icon: FaLaptop, text: 'Remote Diagnostics' },
        { icon: FaUserTie, text: 'Dedicated Account Manager' },
        { icon: FaClipboardCheck, text: 'Preventive Maintenance' },
        { icon: FaChartLine, text: 'Performance Monitoring' }
      ],
      coverage: [
        'Emergency response',
        'Technical troubleshooting',
        'System optimization',
        'Training and guidance',
        'Documentation support'
      ]
    },
    {
      id: 'maintenance',
      icon: FaTools,
      title: 'Maintenance Contracts',
      subtitle: 'Proactive System Care',
      description: 'Comprehensive maintenance programs designed to maximize system performance, reliability, and lifespan.',
      gradient: 'from-[#FF6B35] to-[#F59E0B]',
      features: [
        { icon: FaCalendarAlt, text: 'Scheduled Maintenance', highlight: true },
        { icon: FaWrench, text: 'Preventive Repairs' },
        { icon: FaClipboardCheck, text: 'Performance Reports' },
        { icon: FaCertificate, text: 'Compliance Audits' },
        { icon: FaExclamationTriangle, text: 'Priority Response' }
      ],
      coverage: [
        'Regular inspections',
        'Component replacement',
        'Software updates',
        'Performance optimization',
        'Compliance verification'
      ]
    },
    {
      id: 'response',
      icon: FaClock,
      title: 'Response Time Guarantee',
      subtitle: 'Fast, Reliable Service',
      description: 'Guaranteed response times for all service requests with escalation procedures for critical issues.',
      gradient: 'from-[#8B5CF6] to-[#0066FF]',
      features: [
        { icon: FaClock, text: '< 4 Hours Emergency Response', highlight: true },
        { icon: FaClock, text: '< 24 Hours Standard Response' },
        { icon: FaPhone, text: 'Immediate Acknowledgment' },
        { icon: FaUserTie, text: 'Escalation Procedures' },
        { icon: FaCheckCircle, text: 'Resolution Tracking' }
      ],
      coverage: [
        'Critical system failures',
        'Security breaches',
        'Power outages',
        'Equipment malfunctions',
        'Performance degradation'
      ]
    }
  ];

  const supportTiers = [
    {
      name: 'Basic Support',
      price: 'Included',
      description: 'Standard support included with all installations',
      features: [
        'Business hours support (8AM-6PM)',
        'Email and phone support',
        'Basic troubleshooting',
        '1-year warranty',
        'Documentation access'
      ],
      color: 'border-[#64748B]',
      textColor: 'text-[#64748B]'
    },
    {
      name: 'Premium Support',
      price: '$299/month',
      description: 'Enhanced support for critical systems',
      features: [
        '24/7 phone support',
        'Remote diagnostics',
        'Priority response',
        '3-year warranty',
        'Quarterly maintenance'
      ],
      color: 'border-[#0066FF]',
      textColor: 'text-[#0066FF]',
      popular: true
    },
    {
      name: 'Enterprise Support',
      price: 'Custom',
      description: 'Comprehensive support for large installations',
      features: [
        'Dedicated support team',
        'On-site technicians',
        'Custom SLA agreements',
        '5-year warranty',
        'Monthly maintenance'
      ],
      color: 'border-[#F59E0B]',
      textColor: 'text-[#F59E0B]'
    }
  ];

  useEffect(() => {
    // Ensure elements exist before animating
    if (!sectionRef.current || !titleRef.current || !guaranteesRef.current || !supportRef.current) {
      return;
    }

    const section = sectionRef.current;
    const title = titleRef.current;
    const guarantees = guaranteesRef.current;
    const support = supportRef.current;

    // Kill existing ScrollTriggers for this component
    ScrollTrigger.getAll().forEach(trigger => {
      if (trigger.trigger === section || trigger.trigger === guarantees || trigger.trigger === support) {
        trigger.kill();
      }
    });

    // Set initial states
    gsap.set(title, { y: 100, opacity: 0 });
    gsap.set(guarantees.children, { y: 80, opacity: 0 });
    gsap.set(support.children, { y: 50, opacity: 0, scale: 0.9 });

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
        id: 'serviceGuarantees-title'
      }
    });

    // Guarantees animation
    gsap.to(guarantees.children, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: guarantees,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
        id: 'serviceGuarantees-items'
      }
    });

    // Support tiers animation
    gsap.to(support.children, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.6,
      stagger: 0.15,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: support,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
        id: 'serviceGuarantees-support'
      }
    });

    return () => {
      // Clean up only this component's ScrollTriggers
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.id && trigger.vars.id.includes('serviceGuarantees')) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-48 h-48 border border-[#0066FF]/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 border-2 border-[#00D4FF]/20 rotate-45 animate-bounce"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-poppins mb-6">
            <span className="bg-gradient-to-r from-[#0066FF] via-[#00D4FF] to-[#1A2332] bg-clip-text text-transparent">
              Service Guarantees & Support
            </span>
          </h2>
          <p className="text-xl text-[#64748B] max-w-3xl mx-auto font-inter">
            Comprehensive warranties, dedicated support, and maintenance programs 
            to ensure your systems perform optimally throughout their lifecycle.
          </p>
        </div>

        {/* Service Guarantees */}
        <div ref={guaranteesRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {guarantees.map((guarantee, index) => (
            <div
              key={guarantee.id}
              className="group bg-white border border-[#0066FF]/10 rounded-3xl p-8 hover:shadow-2xl hover:shadow-[#0066FF]/10 transition-all duration-300 hover:-translate-y-2"
              onMouseEnter={() => setActiveGuarantee(index)}
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${guarantee.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <guarantee.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1A2332] font-poppins">
                    {guarantee.title}
                  </h3>
                  <p className={`text-lg font-semibold bg-gradient-to-r ${guarantee.gradient} bg-clip-text text-transparent`}>
                    {guarantee.subtitle}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-[#64748B] mb-6 font-inter leading-relaxed">
                {guarantee.description}
              </p>

              {/* Features */}
              <div className="space-y-3 mb-6">
                {guarantee.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <feature.icon className={`w-5 h-5 ${feature.highlight ? 'text-[#10B981]' : 'text-[#0066FF]'}`} />
                    <span className={`font-inter ${feature.highlight ? 'font-semibold text-[#1A2332]' : 'text-[#64748B]'}`}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Coverage Details */}
              <div className="bg-[#F8FAFC] rounded-xl p-4">
                <h4 className="font-semibold text-[#1A2332] mb-3 font-poppins">Coverage Includes:</h4>
                <div className="grid grid-cols-1 gap-2">
                  {guarantee.coverage.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#0066FF] rounded-full"></div>
                      <span className="text-sm text-[#64748B] font-inter">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Support Tiers */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#1A2332] mb-4 font-poppins">
              Support Plans
            </h3>
            <p className="text-lg text-[#64748B] font-inter">
              Choose the support level that best fits your needs and budget
            </p>
          </div>

          <div ref={supportRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportTiers.map((tier, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl border-2 ${tier.color} p-8 hover:shadow-xl transition-all duration-300 ${
                  tier.popular ? 'scale-105 shadow-lg' : 'hover:scale-105'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-[#0066FF] to-[#00D4FF] text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h4 className={`text-2xl font-bold ${tier.textColor} mb-2 font-poppins`}>
                    {tier.name}
                  </h4>
                  <div className={`text-3xl font-bold ${tier.textColor} mb-2 font-poppins`}>
                    {tier.price}
                  </div>
                  <p className="text-[#64748B] font-inter">
                    {tier.description}
                  </p>
                </div>

                <div className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <FaCheckCircle className="w-5 h-5 text-[#10B981]" />
                      <span className="text-[#64748B] font-inter">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-3 px-6 border-2 ${tier.color} ${tier.textColor} font-semibold rounded-xl hover:bg-gradient-to-r hover:from-[#0066FF] hover:to-[#00D4FF] hover:text-white hover:border-transparent transition-all duration-300`}>
                  {tier.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="bg-gradient-to-r from-[#FF6B35] to-[#F59E0B] rounded-3xl p-12 relative overflow-hidden">
          <div className="relative z-10 text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaExclamationTriangle className="w-10 h-10 text-white" />
            </div>
            
            <h3 className="text-3xl font-bold text-white mb-4 font-poppins">
              Emergency Support Available 24/7
            </h3>
            
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto font-inter">
              Critical system failure? Security breach? Power outage? 
              Our emergency response team is standing by to help you get back online quickly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+251911234567"
                className="group relative px-8 py-4 bg-white text-[#FF6B35] font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <FaPhone className="w-5 h-5" />
                  Call Emergency Line
                </span>
              </a>
              
              <button className="group relative px-8 py-4 border-2 border-white text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:bg-white hover:text-[#FF6B35]">
                <span className="relative z-10 flex items-center gap-3">
                  Request Callback
                  <FaArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-white/80">
              <div className="text-center">
                <FaClock className="w-6 h-6 mx-auto mb-2" />
                <div className="font-semibold">4 Hours</div>
                <div className="text-sm">Emergency Response</div>
              </div>
              <div className="text-center">
                <FaUserTie className="w-6 h-6 mx-auto mb-2" />
                <div className="font-semibold">Expert Technicians</div>
                <div className="text-sm">Certified Professionals</div>
              </div>
              <div className="text-center">
                <FaTools className="w-6 h-6 mx-auto mb-2" />
                <div className="font-semibold">On-Site Service</div>
                <div className="text-sm">When Needed</div>
              </div>
            </div>
          </div>

          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" 
              style={{
                backgroundImage: `radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.3) 0%, transparent 50%),
                                 radial-gradient(circle at 70% 50%, rgba(255, 255, 255, 0.2) 0%, transparent 50%)`
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}