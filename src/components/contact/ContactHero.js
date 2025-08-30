'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { 
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaHeadset,
  FaWhatsapp,
  FaTelegram,
  FaComments
} from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function ContactHero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const contactMethodsRef = useRef(null);
  const quickStatsRef = useRef(null);

  const contactMethods = [
    {
      icon: FaPhone,
      title: 'Call Us',
      description: 'Speak directly with our experts',
      action: 'tel:+251911234567',
      actionText: '+251 911 234 567',
      color: 'text-[#0066FF]',
      bgColor: 'bg-[#0066FF]/10',
      available: '24/7 Available'
    },
    {
      icon: FaEnvelope,
      title: 'Email Us',
      description: 'Send us your detailed inquiry',
      action: 'mailto:info@bmelectro.com',
      actionText: 'info@bmelectro.com',
      color: 'text-[#10B981]',
      bgColor: 'bg-[#10B981]/10',
      available: 'Response in 2 hours'
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      description: 'Quick chat for instant support',
      action: 'https://wa.me/251911234567',
      actionText: 'Chat on WhatsApp',
      color: 'text-[#25D366]',
      bgColor: 'bg-[#25D366]/10',
      available: 'Instant messaging'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Visit Us',
      description: 'Come to our office location',
      action: '#map',
      actionText: 'Get Directions',
      color: 'text-[#FF6B35]',
      bgColor: 'bg-[#FF6B35]/10',
      available: 'Mon-Fri 8AM-6PM'
    }
  ];

  const quickStats = [
    { number: '< 2hrs', label: 'Email Response Time', icon: FaEnvelope },
    { number: '24/7', label: 'Emergency Support', icon: FaHeadset },
    { number: '98%', label: 'Client Satisfaction', icon: FaComments },
    { number: '15min', label: 'Average Call Response', icon: FaPhone }
  ];

  useEffect(() => {
    // Ensure elements exist before animating
    if (!heroRef.current || !titleRef.current || !subtitleRef.current || 
        !contactMethodsRef.current || !quickStatsRef.current) {
      return;
    }

    const hero = heroRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const methods = contactMethodsRef.current;
    const stats = quickStatsRef.current;

    // Kill any existing animations first
    gsap.killTweensOf([title, subtitle, methods.children, stats.children, '.floating-element']);

    // Set initial states
    gsap.set([title, subtitle], { y: 100, opacity: 0 });
    gsap.set(methods.children, { y: 80, opacity: 0, scale: 0.8 });
    gsap.set(stats.children, { y: 60, opacity: 0 });

    // Create timeline for better control
    const tl = gsap.timeline({ delay: 0.2 });

    // Title animation
    tl.to(title, {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: 'power3.out'
    })
    // Subtitle animation
    .to(subtitle, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out'
    }, '-=0.8')
    // Contact methods animation
    .to(methods.children, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: 'back.out(1.7)'
    }, '-=0.5')
    // Stats animation
    .to(stats.children, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out'
    }, '-=0.4');

    // Floating animation for background elements
    gsap.to('.floating-element', {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut',
      stagger: 0.5
    });

    return () => {
      // Clean up all animations
      tl.kill();
      gsap.killTweensOf([title, subtitle, methods.children, stats.children, '.floating-element']);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F8FAFC] via-white to-[#F8FAFC] pt-20 md:pt-24">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="floating-element absolute top-20 left-20 w-32 h-32 border-2 border-[#0066FF] rotate-45"></div>
        <div className="floating-element absolute bottom-20 right-20 w-24 h-24 border-2 border-[#00D4FF] rotate-12"></div>
        <div className="floating-element absolute top-1/2 right-10 w-16 h-16 bg-[#0066FF]/20 rounded-full"></div>
        <div className="floating-element absolute top-1/3 left-1/4 w-20 h-20 border border-[#10B981]/30 rounded-full"></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(to right, #0066FF 1px, transparent 1px),
                             linear-gradient(to bottom, #0066FF 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Main Content */}
          <div className="text-center mb-16">
            {/* Title */}
            <div ref={titleRef} className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold font-poppins mb-6">
                <span className="text-[#1A2332]">Get In</span>
                <br />
                <span className="bg-gradient-to-r from-[#0066FF] via-[#00D4FF] to-[#0066FF] bg-clip-text text-transparent">
                  Touch
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <div ref={subtitleRef} className="mb-12">
              <p className="text-xl md:text-2xl text-[#64748B] max-w-4xl mx-auto font-inter leading-relaxed">
                Ready to start your next electro-mechanical project? We&apos;re here to help. 
                Choose your preferred way to connect with our expert team.
              </p>
            </div>
          </div>

          {/* Contact Methods */}
          <div ref={contactMethodsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.action}
                className="group bg-white border border-[#0066FF]/10 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 text-center block"
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={`w-16 h-16 ${method.bgColor} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className={`w-8 h-8 ${method.color}`} />
                </div>
                <h3 className="text-lg font-bold text-[#1A2332] mb-2 font-poppins group-hover:text-[#0066FF] transition-colors duration-300">
                  {method.title}
                </h3>
                <p className="text-[#64748B] text-sm mb-3 font-inter">
                  {method.description}
                </p>
                <div className={`text-sm font-semibold ${method.color} mb-2`}>
                  {method.actionText}
                </div>
                <div className="text-xs text-[#64748B] font-inter">
                  {method.available}
                </div>
              </motion.a>
            ))}
          </div>

          {/* Quick Response Stats */}
          <div ref={quickStatsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {quickStats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white border border-[#0066FF]/10 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300"
                whileHover={{ y: -3 }}
              >
                <div className="w-12 h-12 bg-[#0066FF]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-[#0066FF]" />
                </div>
                <div className="text-2xl font-bold text-[#0066FF] mb-2 font-poppins">
                  {stat.number}
                </div>
                <div className="text-[#64748B] text-sm font-inter">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Emergency Contact Highlight */}
          <div className="bg-gradient-to-r from-[#FF6B35] to-[#F59E0B] rounded-3xl p-8 text-white text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <FaHeadset className="w-8 h-8" />
              <h2 className="text-2xl font-bold font-poppins">Emergency Support Available</h2>
            </div>
            <p className="text-lg mb-6 font-inter opacity-90">
              Need immediate assistance? Our emergency response team is available 24/7 
              for critical electrical and security system issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:+251911234567"
                className="flex items-center justify-center gap-3 px-6 py-3 bg-white text-[#FF6B35] font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPhone className="w-5 h-5" />
                Emergency Hotline
              </motion.a>
              <motion.a
                href="https://wa.me/251911234567"
                className="flex items-center justify-center gap-3 px-6 py-3 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaWhatsapp className="w-5 h-5" />
                WhatsApp Emergency
              </motion.a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor" className="text-[#0066FF]"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor" className="text-[#00D4FF]"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor" className="text-white"></path>
        </svg>
      </div>
    </section>
  );
}