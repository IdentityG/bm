'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  FaCamera,
  FaBolt,
  FaRoad,
  FaCog,
  FaArrowRight,
  FaShieldAlt,
  FaIndustry,
  FaLightbulb,
  FaChevronRight,
  FaPlay,
  FaCheckCircle,
  FaStar
} from 'react-icons/fa';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const ServicesOverview = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const titleRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedFeature, setSelectedFeature] = useState(null);

  const services = [
    {
      id: 'cctv',
      icon: FaCamera,
      title: 'CCTV Installation',
      description: 'Advanced surveillance systems with cutting-edge technology for comprehensive security solutions.',
      link: '/services/cctv-installation',
      gradient: 'from-[#0066FF] to-[#00D4FF]',
      iconBg: 'bg-[#0066FF]/10',
      iconColor: 'text-[#0066FF]',
      features: ['HD Monitoring', '24/7 Support', 'Remote Access'],
      stats: { value: '99.9%', label: 'Uptime' }
    },
    {
      id: 'electric',
      icon: FaBolt,
      title: 'Mega Electric Projects',
      description: 'Large-scale electrical installations and power distribution systems for industrial applications.',
      link: '/services/electric-projects',
      gradient: 'from-[#FF6B35] to-[#F59E0B]',
      iconBg: 'bg-[#FF6B35]/10',
      iconColor: 'text-[#FF6B35]',
      features: ['Power Systems', 'Industrial Grade', 'Safety First'],
      stats: { value: '500MW', label: 'Capacity' }
    },
    {
      id: 'lighting',
      icon: FaRoad,
      title: 'Road Lighting',
      description: 'Smart street lighting solutions that enhance safety and reduce energy consumption.',
      link: '/services/road-lighting',
      gradient: 'from-[#10B981] to-[#00D4FF]',
      iconBg: 'bg-[#10B981]/10',
      iconColor: 'text-[#10B981]',
      features: ['Smart Controls', 'Energy Efficient', 'Weather Resistant'],
      stats: { value: '75%', label: 'Energy Saved' }
    },
    {
      id: 'collider',
      icon: FaCog,
      title: 'Ethiopian Collider',
      description: 'Specialized engineering for advanced scientific and research infrastructure projects.',
      link: '/services/ethiopian-collider',
      gradient: 'from-[#8B5CF6] to-[#0066FF]',
      iconBg: 'bg-[#8B5CF6]/10',
      iconColor: 'text-[#8B5CF6]',
      features: ['Research Grade', 'Precision Engineering', 'Innovation'],
      stats: { value: '100+', label: 'Projects' }
    }
  ];

  // Subtle mouse tracking for depth
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Ensure elements exist before animating
    if (!sectionRef.current || !titleRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      // Kill existing ScrollTriggers for this component
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === titleRef.current || 
            cardsRef.current.some(card => card && trigger.trigger === card)) {
          trigger.kill();
        }
      });

      // Set initial states
      gsap.set(titleRef.current, { opacity: 0, y: 30 });

      // Smooth title reveal
      gsap.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
          id: 'servicesOverview-title'
        }
      });

      // Staggered cards entrance
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        gsap.set(card, { opacity: 0, y: 40, scale: 0.95 });

        gsap.to(card, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
            id: `servicesOverview-card-${index}`
          }
        });
      });

    }, sectionRef);

    return () => {
      ctx.revert();
      // Clean up only this component's ScrollTriggers
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.id && trigger.vars.id.includes('servicesOverview')) {
          trigger.kill();
        }
      });
    };
  }, []);

  // Subtle mouse tracking
  const handleMouseMove = (e) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (rect) {
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
      mouseX.set(x);
      mouseY.set(y);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC]"
      onMouseMove={handleMouseMove}
      aria-label="Services Overview"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(0, 102, 255, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 50%, rgba(0, 212, 255, 0.1) 0%, transparent 50%)
            `
          }}
        />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(to right, #0066FF 1px, transparent 1px),
                           linear-gradient(to bottom, #0066FF 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">

          {/* Section Header */}
          <motion.div
            ref={titleRef}
            className="text-center mb-20"
            style={{
              transform: useTransform(
                [smoothX, smoothY],
                ([x, y]) => `translate3d(${x / 100}px, ${y / 100}px, 0)`
              )
            }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-[#0066FF]/10 border border-[#0066FF]/20 px-6 py-2 rounded-full">
                <div className="flex items-center space-x-2">
                  <FaStar className="w-4 h-4 text-[#0066FF]" />
                  <span className="text-[#0066FF] font-semibold font-poppins text-sm tracking-wide">
                    OUR EXPERTISE
                  </span>
                  <FaStar className="w-4 h-4 text-[#0066FF]" />
                </div>
              </div>
            </motion.div>

            {/* Title */}
            <h2 className="font-poppins">
              <span className="block text-5xl sm:text-6xl lg:text-7xl font-bold text-[#1A2332] mb-4">
                Electro-Mechanical
              </span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl font-bold">
                <span className="bg-gradient-to-r from-[#0066FF] via-[#00D4FF] to-[#0066FF] bg-clip-text text-transparent">
                  Solutions
                </span>
              </span>
            </h2>

            {/* Subtitle */}
            <motion.p
              className="text-xl lg:text-2xl text-[#64748B] max-w-3xl mx-auto mt-8 font-inter leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Powering Ethiopia's future with cutting-edge technology and innovative engineering excellence
            </motion.p>

            {/* Decorative Line */}
            <motion.div
              className="flex justify-center items-center mt-8 space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#0066FF]" />
              <div className="w-2 h-2 bg-[#0066FF] rounded-full" />
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#0066FF]" />
            </motion.div>
          </motion.div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                ref={el => cardsRef.current[index] = el}
                className="group relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  className="relative h-full bg-white rounded-2xl border border-[#64748B]/10 shadow-lg overflow-hidden"
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.3, ease: 'easeOut' }
                  }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Gradient Accent Line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient}`} />

                  {/* Card Content */}
                  <div className="p-8">
                    {/* Icon Container */}
                    <motion.div
                      className={`relative w-16 h-16 ${service.iconBg} rounded-xl flex items-center justify-center mb-6`}
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                      {hoveredCard === index && (
                        <motion.div
                          className={`absolute inset-0 ${service.iconBg} rounded-xl`}
                          initial={{ scale: 1 }}
                          animate={{ scale: 1.5, opacity: 0 }}
                          transition={{ duration: 0.6 }}
                        />
                      )}
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-[#1A2332] mb-3 font-poppins">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#64748B] mb-6 leading-relaxed font-inter">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center space-x-2"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{
                            opacity: hoveredCard === index ? 1 : 0.7,
                            x: hoveredCard === index ? 0 : -5
                          }}
                          transition={{ delay: i * 0.05 }}
                        >
                          <FaCheckCircle className={`w-4 h-4 ${service.iconColor}`} />
                          <span className="text-sm text-[#64748B] font-inter">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex items-baseline space-x-2 mb-6 pt-4 border-t border-[#64748B]/10">
                      <span className={`text-3xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent font-poppins`}>
                        {service.stats.value}
                      </span>
                      <span className="text-sm text-[#64748B] font-inter">{service.stats.label}</span>
                    </div>

                    {/* CTA Button */}
                    <Link
                      href={service.link}
                      className={`inline-flex items-center justify-center w-full space-x-2 py-3 px-6 rounded-xl font-semibold transition-all duration-300 font-poppins
                        ${hoveredCard === index
                          ? `bg-gradient-to-r ${service.gradient} text-white shadow-lg`
                          : `bg-gradient-to-r ${service.gradient} text-white shadow-lg md:bg-[#F8FAFC] md:text-[#1A2332] md:hover:bg-gradient-to-r md:hover:${service.gradient} md:hover:text-white md:hover:shadow-lg`
                        }`}
                    >
                      <span>Learn More</span>
                      <motion.div
                        animate={{ x: hoveredCard === index ? 5 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <FaArrowRight className="w-4 h-4" />
                      </motion.div>
                    </Link>
                  </div>

                  {/* Hover Gradient Overlay */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-t ${service.gradient} pointer-events-none`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredCard === index ? 0.05 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <motion.div
            className="text-center mt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-block"
              style={{
                transform: useTransform(
                  [smoothX, smoothY],
                  ([x, y]) => `translate3d(${x / 50}px, ${y / 50}px, 0)`
                )
              }}
            >
              {/* CTA Card */}
              <div className="bg-gradient-to-br from-[#FF6B35] to-[#FF6B35] p-12 rounded-3xl relative overflow-hidden max-w-4xl mx-auto">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0"
                    style={{
                      backgroundImage: `radial-gradient(circle at 30% 50%, rgba(0, 212, 255, 0.3) 0%, transparent 50%),
                                       radial-gradient(circle at 70% 50%, rgba(0, 102, 255, 0.3) 0%, transparent 50%)`
                    }}
                  />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    viewport={{ once: true }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-[#0066FF]/80 rounded-full mb-6"
                  >
                    <FaIndustry className="w-8 h-8 text-[#00D4FF]" />
                  </motion.div>

                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 font-poppins">
                    Ready to Transform Your Infrastructure?
                  </h3>

                  <p className="text-lg text-[#172740] mb-8 max-w-2xl mx-auto font-inter">
                    Partner with us to leverage cutting-edge electro-mechanical solutions
                    tailored for Ethiopia's growing industrial landscape.
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href="/contact"
                        className="inline-flex items-center space-x-3 bg-gradient-to-r from-[#0066FF] to-[#00D4FF] text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 font-poppins"
                      >
                        <FaPlay className="w-5 h-5" />
                        <span>Get Started Now</span>
                      </Link>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href="/portfolio"
                        className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 font-poppins"
                      >
                        <span>View Our Work</span>
                        <FaArrowRight className="w-5 h-5" />
                      </Link>
                    </motion.div>
                  </div>

                  {/* Trust Indicators */}
                  <motion.div
                    className="flex flex-wrap justify-center items-center gap-8 mt-10 pt-8 border-t border-white/10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center space-x-2">
                      <FaShieldAlt className="w-5 h-5 text-[#10B981]" />
                      <span className="text-white/80 font-inter">ISO Certified</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaCheckCircle className="w-5 h-5 text-[#10B981]" />
                      <span className="text-white/80 font-inter">500+ Projects</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaStar className="w-5 h-5 text-[#F59E0B]" />
                      <span className="text-white/80 font-inter">5-Star Rated</span>
                    </div>
                  </motion.div>
                </div>

                {/* Animated Corner Accents */}
                <motion.div
                  className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#00D4FF] rounded-tl-3xl"
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#00D4FF] rounded-br-3xl"
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5
                  }}
                />
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Floating Gradient Orbs - Subtle */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 opacity-[0.03]"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-full h-full bg-gradient-to-br from-[#0066FF] to-[#00D4FF] rounded-full blur-3xl" />
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-10 w-64 h-64 opacity-[0.03]"
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <div className="w-full h-full bg-gradient-to-br from-[#FF6B35] to-[#F59E0B] rounded-full blur-3xl" />
      </motion.div>
    </section>
  );
};

export default ServicesOverview;