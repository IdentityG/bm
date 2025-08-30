'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaHeadset,
  FaUsers,
  FaBriefcase,
  FaTools,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaTelegram,
  FaPhoneAlt,
  FaCalendarAlt
} from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function ContactInformationHub() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contactCardsRef = useRef(null);
  const departmentsRef = useRef(null);
  const [activeContact, setActiveContact] = useState('main');

  const mainContactInfo = {
    main: {
      title: 'Main Office',
      address: '123 Electric Avenue, Bole Sub-City, Addis Ababa, Ethiopia',
      phone: '+251-11-123-4567',
      email: 'info@bmelectro.com',
      hours: 'Mon-Fri: 8:00 AM - 6:00 PM, Sat: 9:00 AM - 4:00 PM',
      description: 'Our headquarters and main service center'
    },
    emergency: {
      title: '24/7 Emergency Services',
      address: 'Available Nationwide',
      phone: '+251-911-234-567',
      email: 'emergency@bmelectro.com',
      hours: '24/7 - Always Available',
      description: 'Round-the-clock emergency response team'
    },
    support: {
      title: 'Technical Support',
      address: 'Remote & On-site Support',
      phone: '+251-11-123-4568',
      email: 'support@bmelectro.com',
      hours: 'Mon-Sun: 7:00 AM - 10:00 PM',
      description: 'Expert technical assistance and troubleshooting'
    }
  };

  const departments = [
    {
      id: 'sales',
      name: 'Sales & Business Development',
      icon: FaBriefcase,
      contact: 'Alemayehu Tadesse',
      position: 'Sales Director',
      phone: '+251-911-234-568',
      email: 'sales@bmelectro.com',
      description: 'New projects, quotes, and business partnerships',
      color: 'text-[#0066FF]',
      bgColor: 'bg-[#0066FF]/10'
    },
    {
      id: 'projects',
      name: 'Project Management',
      icon: FaTools,
      contact: 'Meron Bekele',
      position: 'Project Manager',
      phone: '+251-911-234-569',
      email: 'projects@bmelectro.com',
      description: 'Ongoing projects, updates, and coordination',
      color: 'text-[#10B981]',
      bgColor: 'bg-[#10B981]/10'
    },
    {
      id: 'support',
      name: 'Customer Support',
      icon: FaHeadset,
      contact: 'Dawit Haile',
      position: 'Support Manager',
      phone: '+251-911-234-570',
      email: 'support@bmelectro.com',
      description: 'Technical support, maintenance, and service',
      color: 'text-[#FF6B35]',
      bgColor: 'bg-[#FF6B35]/10'
    },
    {
      id: 'hr',
      name: 'Human Resources',
      icon: FaUsers,
      contact: 'Hanan Mohammed',
      position: 'HR Director',
      phone: '+251-911-234-571',
      email: 'careers@bmelectro.com',
      description: 'Career opportunities, applications, and recruitment',
      color: 'text-[#8B5CF6]',
      bgColor: 'bg-[#8B5CF6]/10'
    }
  ];

  const socialMedia = [
    { name: 'Facebook', icon: FaFacebookF, url: '#', color: 'hover:text-blue-600' },
    { name: 'Twitter', icon: FaTwitter, url: '#', color: 'hover:text-sky-500' },
    { name: 'LinkedIn', icon: FaLinkedinIn, url: '#', color: 'hover:text-blue-700' },
    { name: 'Instagram', icon: FaInstagram, url: '#', color: 'hover:text-pink-500' },
    { name: 'YouTube', icon: FaYoutube, url: '#', color: 'hover:text-red-600' }
  ];

  const quickActions = [
    {
      title: 'Call Us Now',
      subtitle: 'Speak with our team',
      icon: FaPhoneAlt,
      action: 'tel:+251112344567',
      color: 'text-[#10B981]',
      bgColor: 'bg-[#10B981]'
    },
    {
      title: 'WhatsApp Chat',
      subtitle: 'Quick messaging',
      icon: FaWhatsapp,
      action: 'https://wa.me/251911234567',
      color: 'text-[#25D366]',
      bgColor: 'bg-[#25D366]'
    },
    {
      title: 'Schedule Meeting',
      subtitle: 'Book consultation',
      icon: FaCalendarAlt,
      action: '#',
      color: 'text-[#0066FF]',
      bgColor: 'bg-[#0066FF]'
    },
    {
      title: 'Telegram Channel',
      subtitle: 'Join updates',
      icon: FaTelegram,
      action: 'https://t.me/bmelectro',
      color: 'text-[#0088cc]',
      bgColor: 'bg-[#0088cc]'
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const contactCards = contactCardsRef.current;
    const departments = departmentsRef.current;

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

    // Contact cards animation
    gsap.fromTo(contactCards.children,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: contactCards,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Departments animation
    gsap.fromTo(departments.children,
      { y: 80, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: departments,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const currentContact = mainContactInfo[activeContact];

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
              Contact Information
            </span>
          </h2>
          <p className="text-xl text-[#64748B] max-w-3xl mx-auto font-inter">
            Multiple ways to reach us. Choose the method that works best for you,
            and we'll respond promptly to assist with your needs.
          </p>
        </div>

        {/* Main Contact Cards */}
        <div className="mb-16">
          {/* Contact Type Selector */}
          <div className="flex justify-center mb-8">
            <div className="flex bg-[#F8FAFC] rounded-2xl p-2 border border-[#0066FF]/20">
              {Object.entries(mainContactInfo).map(([key, info]) => (
                <button
                  key={key}
                  onClick={() => setActiveContact(key)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${activeContact === key
                    ? 'bg-gradient-to-r from-[#0066FF] to-[#00D4FF] text-white shadow-lg'
                    : 'text-[#64748B] hover:text-[#0066FF]'
                    }`}
                >
                  {info.title}
                </button>
              ))}
            </div>
          </div>

          {/* Active Contact Card */}
          <motion.div
            key={activeContact}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl border border-[#0066FF]/10 overflow-hidden shadow-xl max-w-4xl mx-auto"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Contact Details */}
              <div className="p-8 lg:p-12">
                <h3 className="text-3xl font-bold text-[#1A2332] mb-6 font-poppins">
                  {currentContact.title}
                </h3>
                <p className="text-lg text-[#64748B] mb-8 font-inter">
                  {currentContact.description}
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#0066FF]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FaMapMarkerAlt className="w-6 h-6 text-[#0066FF]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1A2332] mb-1 font-poppins">Address</h4>
                      <p className="text-[#64748B] font-inter">{currentContact.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#10B981]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FaPhone className="w-6 h-6 text-[#10B981]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1A2332] mb-1 font-poppins">Phone</h4>
                      <a
                        href={`tel:${currentContact.phone}`}
                        className="text-[#64748B] hover:text-[#10B981] transition-colors duration-300 font-inter"
                      >
                        {currentContact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FaEnvelope className="w-6 h-6 text-[#FF6B35]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1A2332] mb-1 font-poppins">Email</h4>
                      <a
                        href={`mailto:${currentContact.email}`}
                        className="text-[#64748B] hover:text-[#FF6B35] transition-colors duration-300 font-inter"
                      >
                        {currentContact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#8B5CF6]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FaClock className="w-6 h-6 text-[#8B5CF6]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1A2332] mb-1 font-poppins">Hours</h4>
                      <p className="text-[#64748B] font-inter">{currentContact.hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-[#F8FAFC] to-[#0066FF]/5 p-8 lg:p-12">
                <h4 className="text-2xl font-bold text-[#1A2332] mb-6 font-poppins">
                  Quick Actions
                </h4>

                <div className="grid grid-cols-2 gap-4">
                  {quickActions.map((action, index) => (
                    <motion.a
                      key={index}
                      href={action.action}
                      className="group bg-white rounded-2xl p-4 border border-[#0066FF]/10 hover:shadow-lg transition-all duration-300 text-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className={`w-12 h-12 ${action.bgColor} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                        <action.icon className="w-6 h-6 text-white" />
                      </div>
                      <h5 className="font-semibold text-[#1A2332] text-sm mb-1 font-poppins">
                        {action.title}
                      </h5>
                      <p className="text-xs text-[#64748B] font-inter">
                        {action.subtitle}
                      </p>
                    </motion.a>
                  ))}
                </div>

                {/* Social Media */}
                <div className="mt-8">
                  <h5 className="font-semibold text-[#1A2332] mb-4 font-poppins">Follow Us</h5>
                  <div className="flex gap-3">
                    {socialMedia.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        className={`w-10 h-10 bg-white rounded-xl flex items-center justify-center border border-[#0066FF]/20 text-[#64748B] ${social.color} transition-colors duration-300`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <social.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Department Contacts */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#1A2332] mb-4 font-poppins">
              Department Contacts
            </h3>
            <p className="text-lg text-[#64748B] max-w-2xl mx-auto font-inter">
              Connect directly with the right team for your specific needs.
              Our specialists are ready to assist you.
            </p>
          </div>

          <div ref={departmentsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.id}
                className="bg-white rounded-2xl border border-[#0066FF]/10 p-6 hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className={`w-12 h-12 ${dept.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                  <dept.icon className={`w-6 h-6 ${dept.color}`} />
                </div>

                <h4 className="text-lg font-bold text-[#1A2332] mb-2 font-poppins">
                  {dept.name}
                </h4>

                <div className="mb-4">
                  <p className="font-semibold text-[#1A2332] text-sm">{dept.contact}</p>
                  <p className="text-xs text-[#64748B] font-inter">{dept.position}</p>
                </div>

                <p className="text-sm text-[#64748B] mb-4 font-inter">
                  {dept.description}
                </p>

                <div className="space-y-2">
                  <a
                    href={`tel:${dept.phone}`}
                    className="flex items-center gap-2 text-sm text-[#64748B] hover:text-[#0066FF] transition-colors duration-300"
                  >
                    <FaPhone className="w-4 h-4" />
                    <span className="font-inter">{dept.phone}</span>
                  </a>
                  <a
                    href={`mailto:${dept.email}`}
                    className="flex items-center gap-2 text-sm text-[#64748B] hover:text-[#0066FF] transition-colors duration-300"
                  >
                    <FaEnvelope className="w-4 h-4" />
                    <span className="font-inter">{dept.email}</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}