'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { 
  FaShieldAlt,
  FaRocket,
  FaUsers,
  FaAward,
  FaClock,
  FaHeadset,
  FaCertificate,
  FaGlobe,
  FaCheckCircle,
  FaStar,
  FaArrowRight,
  FaLightbulb
} from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUs() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const reasonsRef = useRef(null);
  const statsRef = useRef(null);
  const [activeReason, setActiveReason] = useState(0);

  const whyChooseReasons = [
    {
      id: 1,
      icon: FaAward,
      title: 'Proven Excellence',
      subtitle: '15+ Years of Industry Leadership',
      description: 'With over 500 successful projects and a 98% client satisfaction rate, we have consistently delivered excellence across Ethiopia\'s most challenging electro-mechanical projects.',
      features: [
        '500+ completed projects',
        '98% client satisfaction rate',
        'ISO 9001:2015 certified',
        'Award-winning solutions'
      ],
      color: 'text-[#0066FF]',
      bgColor: 'bg-[#0066FF]/10',
      gradient: 'from-[#0066FF] to-[#00D4FF]'
    },
    {
      id: 2,
      icon: FaRocket,
      title: 'Innovation Leadership',
      subtitle: 'Cutting-Edge Technology Solutions',
      description: 'We stay ahead of industry trends by investing in the latest technologies and developing proprietary solutions that give our clients competitive advantages.',
      features: [
        'Proprietary monitoring systems',
        'Smart technology integration',
        'AI-powered solutions',
        'Future-ready infrastructure'
      ],
      color: 'text-[#10B981]',
      bgColor: 'bg-[#10B981]/10',
      gradient: 'from-[#10B981] to-[#00D4FF]'
    },
    {
      id: 3,
      icon: FaUsers,
      title: 'Expert Team',
      subtitle: '50+ Certified Professionals',
      description: 'Our team of highly qualified engineers, technicians, and project managers brings decades of combined experience to every project.',
      features: [
        '50+ certified professionals',
        'Continuous training programs',
        'International certifications',
        'Specialized expertise'
      ],
      color: 'text-[#FF6B35]',
      bgColor: 'bg-[#FF6B35]/10',
      gradient: 'from-[#FF6B35] to-[#F59E0B]'
    },
    {
      id: 4,
      icon: FaHeadset,
      title: '24/7 Support',
      subtitle: 'Always Available When You Need Us',
      description: 'Our commitment doesn\'t end with project completion. We provide round-the-clock support and maintenance to ensure your systems operate at peak performance.',
      features: [
        '24/7 technical support',
        'Emergency response team',
        'Preventive maintenance',
        'Remote monitoring'
      ],
      color: 'text-[#8B5CF6]',
      bgColor: 'bg-[#8B5CF6]/10',
      gradient: 'from-[#8B5CF6] to-[#0066FF]'
    }
  ];

  const competitiveAdvantages = [
    {
      icon: FaShieldAlt,
      title: 'Safety First',
      description: 'Zero-accident track record with comprehensive safety protocols',
      metric: '0 Accidents'
    },
    {
      icon: FaClock,
      title: 'On-Time Delivery',
      description: 'Consistent project delivery within agreed timelines',
      metric: '99.8% On-Time'
    },
    {
      icon: FaCertificate,
      title: 'Quality Assured',
      description: 'ISO certified processes and international standards',
      metric: 'ISO 9001:2015'
    },
    {
      icon: FaGlobe,
      title: 'Nationwide Coverage',
      description: 'Service delivery across all regions of Ethiopia',
      metric: '50+ Cities'
    }
  ];

  const clientBenefits = [
    'Reduced operational costs through efficient solutions',
    'Enhanced system reliability and uptime',
    'Future-proof technology investments',
    'Comprehensive warranty and support',
    'Transparent pricing with no hidden costs',
    'Dedicated project management',
    'Compliance with international standards',
    'Sustainable and eco-friendly solutions'
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const reasons = reasonsRef.current;
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

    // Reasons animation
    gsap.fromTo(reasons.children,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: reasons,
          start: 'top 85%',
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

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const currentReason = whyChooseReasons[activeReason];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-[#F8FAFC] relative overflow-hidden">
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
              Why Choose B&M?
            </span>
          </h2>
          <p className="text-xl text-[#64748B] max-w-3xl mx-auto font-inter">
            Discover what sets us apart as Ethiopia's premier electro-mechanical solutions provider. 
            Our commitment to excellence drives everything we do.
          </p>
        </div>

        {/* Main Reasons Section */}
        <div className="mb-20">
          {/* Reason Navigation */}
          <div ref={reasonsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {whyChooseReasons.map((reason, index) => (
              <motion.button
                key={reason.id}
                onClick={() => setActiveReason(index)}
                className={`text-left p-6 rounded-2xl border transition-all duration-300 ${
                  activeReason === index
                    ? `bg-gradient-to-r ${reason.gradient} text-white shadow-xl border-transparent`
                    : 'bg-white text-[#64748B] border-[#0066FF]/20 hover:bg-[#F8FAFC] hover:border-[#0066FF]/40'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <reason.icon className={`w-8 h-8 mb-4 ${
                  activeReason === index ? 'text-white' : reason.color
                }`} />
                <h3 className={`text-lg font-bold mb-2 font-poppins ${
                  activeReason === index ? 'text-white' : 'text-[#1A2332]'
                }`}>
                  {reason.title}
                </h3>
                <p className={`text-sm font-inter ${
                  activeReason === index ? 'text-white/90' : 'text-[#64748B]'
                }`}>
                  {reason.subtitle}
                </p>
              </motion.button>
            ))}
          </div>

          {/* Active Reason Content */}
          <motion.div
            key={activeReason}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl border border-[#0066FF]/10 overflow-hidden shadow-xl"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Content Side */}
              <div className="p-8 lg:p-12">
                <div className={`w-16 h-16 ${currentReason.bgColor} rounded-xl flex items-center justify-center mb-6`}>
                  <currentReason.icon className={`w-8 h-8 ${currentReason.color}`} />
                </div>
                
                <h3 className="text-3xl font-bold text-[#1A2332] mb-4 font-poppins">
                  {currentReason.title}
                </h3>
                <p className="text-lg text-[#64748B] mb-8 font-inter leading-relaxed">
                  {currentReason.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  {currentReason.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3"
                      whileHover={{ x: 5 }}
                    >
                      <FaCheckCircle className={`w-5 h-5 ${currentReason.color}`} />
                      <span className="text-[#64748B] font-inter">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Visual Side */}
              <div className={`bg-gradient-to-br ${currentReason.gradient} p-12 flex items-center justify-center`}>
                <div className="text-center text-white">
                  <currentReason.icon className="w-32 h-32 mx-auto mb-6 opacity-20" />
                  <h4 className="text-2xl font-bold mb-4 font-poppins">
                    {currentReason.subtitle}
                  </h4>
                  <div className="flex items-center justify-center gap-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="w-6 h-6" />
                    ))}
                  </div>
                  <p className="mt-2 opacity-90 font-inter">Excellence Guaranteed</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Competitive Advantages */}
        <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {competitiveAdvantages.map((advantage, index) => (
            <motion.div
              key={index}
              className="bg-white border border-[#0066FF]/10 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="w-12 h-12 bg-[#0066FF]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <advantage.icon className="w-6 h-6 text-[#0066FF]" />
              </div>
              <div className="text-2xl font-bold text-[#0066FF] mb-2 font-poppins">
                {advantage.metric}
              </div>
              <h4 className="text-lg font-bold text-[#1A2332] mb-2 font-poppins">
                {advantage.title}
              </h4>
              <p className="text-[#64748B] text-sm font-inter">
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Client Benefits */}
        <div className="bg-gradient-to-r from-[#1A2332] to-[#0F172A] rounded-3xl p-12 relative overflow-hidden">
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4 font-poppins">
                What Our Clients Gain
              </h3>
              <p className="text-lg text-[#64748B] max-w-2xl mx-auto font-inter">
                When you choose B&M, you're not just getting a service provider - 
                you're gaining a strategic partner committed to your success.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {clientBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-6 h-6 bg-[#10B981] rounded-full flex items-center justify-center flex-shrink-0">
                    <FaCheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-300 font-inter">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <motion.button
                className="group relative px-8 py-4 bg-gradient-to-r from-[#0066FF] to-[#00D4FF] text-white font-semibold rounded-xl overflow-hidden transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-3">
                  <FaLightbulb className="w-5 h-5" />
                  Experience the B&M Difference
                  <FaArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#00D4FF] to-[#0066FF]"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
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
    </section>
  );
}