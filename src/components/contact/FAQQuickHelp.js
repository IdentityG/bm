'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import {
  FaQuestionCircle,
  FaSearch,
  FaChevronDown,
  FaChevronUp,
  FaDownload,
  FaBook,
  FaVideo,
  FaHeadset,
  FaPhone,
  FaEnvelope,
  FaComments,
  FaArrowRight
} from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function FAQQuickHelp() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const faqRef = useRef(null);
  const resourcesRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const contactFAQs = [
    {
      question: 'What is the best way to contact B&M for urgent matters?',
      answer: 'For urgent matters, call our 24/7 emergency hotline at +251-911-234-567. For non-emergency urgent issues during business hours, calling our main line +251-11-123-4567 is fastest. We also offer WhatsApp support for quick responses.',
      category: 'urgent'
    },
    {
      question: 'How quickly can I expect a response to my inquiry?',
      answer: 'We guarantee acknowledgment within 2 hours during business hours and a full response within 24 hours. Emergency inquiries are responded to within 1 hour. Email inquiries typically receive responses within 4-6 hours.',
      category: 'response'
    },
    {
      question: 'Can I schedule a consultation or site visit?',
      answer: 'Yes! You can schedule consultations through our contact form, by calling our office, or using our online booking system. We offer free initial consultations for all potential projects. Site visits can be arranged within 48-72 hours.',
      category: 'consultation'
    },
    {
      question: 'Do you provide support outside of business hours?',
      answer: 'Yes, we offer 24/7 emergency support for critical issues. Our emergency team is available for power outages, security system failures, and other urgent technical problems. Regular support is available Monday-Friday 8 AM-6 PM, Saturday 9 AM-4 PM.',
      category: 'support'
    },
    {
      question: 'How can I get a quote for my project?',
      answer: 'You can request a quote through our online form, by calling our sales team at +251-911-234-568, or by emailing sales@bmelectro.com. We provide free quotes for all projects and typically deliver detailed proposals within 3-5 business days.',
      category: 'quotes'
    },
    {
      question: 'What information should I provide when contacting you?',
      answer: 'Please provide your contact details, project location, type of service needed, timeline, and any specific requirements. For technical issues, include system details and error descriptions. The more information you provide, the better we can assist you.',
      category: 'information'
    },
    {
      question: 'Can I track the status of my inquiry or project?',
      answer: 'Yes! All clients receive a unique reference number for tracking. You can check status by calling our support line, emailing with your reference number, or through our client portal. Project clients get regular updates and dedicated project manager contact.',
      category: 'tracking'
    },
    {
      question: 'Do you offer virtual consultations or remote support?',
      answer: 'Absolutely! We offer video consultations via Zoom, Teams, or WhatsApp video. Our technical team can provide remote diagnostics and support. Virtual consultations can be scheduled within 24 hours and are perfect for initial project discussions.',
      category: 'virtual'
    }
  ];

  const quickHelpResources = [
    {
      title: 'Service Brochures',
      description: 'Download detailed information about our services',
      icon: FaDownload,
      type: 'PDF Downloads',
      color: 'text-[#0066FF]',
      bgColor: 'bg-[#0066FF]/10'
    },
    {
      title: 'Technical Guides',
      description: 'Step-by-step guides for common issues',
      icon: FaBook,
      type: 'Documentation',
      color: 'text-[#10B981]',
      bgColor: 'bg-[#10B981]/10'
    },
    {
      title: 'Video Tutorials',
      description: 'Visual guides and system demonstrations',
      icon: FaVideo,
      type: 'Video Library',
      color: 'text-[#FF6B35]',
      bgColor: 'bg-[#FF6B35]/10'
    },
    {
      title: 'Live Chat',
      description: 'Instant messaging with our support team',
      icon: FaComments,
      type: 'Real-time Support',
      color: 'text-[#8B5CF6]',
      bgColor: 'bg-[#8B5CF6]/10'
    }
  ];

  const filteredFAQs = contactFAQs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const faq = faqRef.current;
    const resources = resourcesRef.current;

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

    // FAQ animation
    gsap.fromTo(faq.children,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: faq,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Resources animation
    gsap.fromTo(resources.children,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: resources,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [filteredFAQs]);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-[#F8FAFC] to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 border border-[#0066FF]/20 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-[#00D4FF]/20 rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-poppins mb-6">
            <span className="bg-gradient-to-r from-[#0066FF] via-[#00D4FF] to-[#1A2332] bg-clip-text text-transparent">
              FAQ & Quick Help
            </span>
          </h2>
          <p className="text-xl text-[#64748B] max-w-3xl mx-auto font-inter">
            Find instant answers to common questions or access our self-service resources
            for immediate assistance with your electro-mechanical needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* FAQ Section */}
          <div className="lg:col-span-2">
            {/* Search Bar */}
            <div className="relative mb-8">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#64748B] w-5 h-5" />
              <input
                type="text"
                placeholder="Search frequently asked questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white border border-[#0066FF]/20 rounded-xl text-[#1A2332] placeholder-[#64748B] focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 transition-all duration-300"
              />
            </div>

            {/* FAQ Items */}
            <div ref={faqRef} className="space-y-4">
              {filteredFAQs.length > 0 ? (
                filteredFAQs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl border border-[#0066FF]/10 overflow-hidden hover:shadow-lg transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-[#F8FAFC] transition-colors duration-300"
                    >
                      <h3 className="text-lg font-semibold text-[#1A2332] font-poppins pr-4">
                        {faq.question}
                      </h3>
                      <div className="flex-shrink-0">
                        {activeIndex === index ? (
                          <FaChevronUp className="w-5 h-5 text-[#0066FF] transition-transform duration-300" />
                        ) : (
                          <FaChevronDown className="w-5 h-5 text-[#64748B] transition-transform duration-300" />
                        )}
                      </div>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                    >
                      <div className="px-6 pb-6">
                        <p className="text-[#64748B] font-inter leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <FaQuestionCircle className="w-16 h-16 text-[#64748B] mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-[#1A2332] mb-2 font-poppins">
                    No questions found
                  </h3>
                  <p className="text-[#64748B] font-inter">
                    Try adjusting your search terms.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Quick Help Resources */}
          <div>
            <h3 className="text-2xl font-bold text-[#1A2332] mb-8 font-poppins">
              Quick Help Resources
            </h3>

            <div ref={resourcesRef} className="space-y-6">
              {quickHelpResources.map((resource, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl border border-[#0066FF]/10 p-6 hover:shadow-lg transition-all duration-300 cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 ${resource.bgColor} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <resource.icon className={`w-6 h-6 ${resource.color}`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-[#1A2332] mb-2 font-poppins">
                        {resource.title}
                      </h4>
                      <p className="text-[#64748B] text-sm mb-2 font-inter">
                        {resource.description}
                      </p>
                      <span className={`text-xs font-semibold ${resource.color}`}>
                        {resource.type}
                      </span>
                    </div>
                    <FaArrowRight className="w-4 h-4 text-[#64748B] group-hover:text-[#0066FF] transition-colors duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Still Need Help */}
            <div className="bg-gradient-to-r from-[#1A2332] to-[#0F172A] rounded-2xl p-8 mt-8 text-white">
              <h4 className="text-xl font-bold mb-4 font-poppins">
                Still Need Help?
              </h4>
              <p className="text-[#64748B] mb-6 font-inter">
                Our support team is ready to assist you with personalized help.
              </p>

              <div className="space-y-3">
                <motion.a
                  href="tel:+251112344567"
                  className="flex items-center gap-3 text-white hover:text-[#00D4FF] transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <FaPhone className="w-4 h-4" />
                  <span className="font-inter">Call Support: +251-11-123-4567</span>
                </motion.a>
                <motion.a
                  href="mailto:support@bmelectro.com"
                  className="flex items-center gap-3 text-white hover:text-[#00D4FF] transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <FaEnvelope className="w-4 h-4" />
                  <span className="font-inter">Email: support@bmelectro.com</span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}