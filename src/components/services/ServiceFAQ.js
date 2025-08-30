'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FaChevronDown,
  FaChevronUp,
  FaQuestionCircle,
  FaSearch,
  FaClock,
  FaDollarSign,
  FaTools,
  FaShieldAlt,
  FaHeadset,
  FaCertificate
} from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function ServiceFAQ() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const faqRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const faqCategories = [
    { id: 'all', name: 'All Questions', icon: FaQuestionCircle, color: 'text-[#0066FF]' },
    { id: 'general', name: 'General', icon: FaQuestionCircle, color: 'text-[#0066FF]' },
    { id: 'pricing', name: 'Pricing', icon: FaDollarSign, color: 'text-[#10B981]' },
    { id: 'timeline', name: 'Timeline', icon: FaClock, color: 'text-[#FF6B35]' },
    { id: 'technical', name: 'Technical', icon: FaTools, color: 'text-[#8B5CF6]' },
    { id: 'support', name: 'Support', icon: FaHeadset, color: 'text-[#00D4FF]' }
  ];

  const faqData = [
    {
      category: 'general',
      question: 'What types of electro-mechanical services do you provide?',
      answer: 'We provide comprehensive electro-mechanical services including CCTV & Security Systems, Mega Electric Projects, Road & Street Lighting, and specialized Ethiopian Collider Projects. Our services cover design, installation, testing, commissioning, and ongoing maintenance for industrial, commercial, and residential applications.',
      icon: FaQuestionCircle
    },
    {
      category: 'general',
      question: 'Do you serve clients outside of Ethiopia?',
      answer: 'Currently, we primarily serve clients within Ethiopia, focusing on local industrial and infrastructure projects. However, we do consider international projects on a case-by-case basis, particularly for specialized engineering solutions and Ethiopian Collider-related work.',
      icon: FaQuestionCircle
    },
    {
      category: 'pricing',
      question: 'How do you determine pricing for projects?',
      answer: 'Our pricing is based on several factors including project scope, complexity, materials required, timeline, and location. We provide free initial consultations and detailed quotes after site assessment. We offer competitive rates with transparent pricing and no hidden costs.',
      icon: FaDollarSign
    },
    {
      category: 'pricing',
      question: 'Do you offer payment plans or financing options?',
      answer: 'Yes, we offer flexible payment plans for larger projects. Payment terms typically include an initial deposit, progress payments during installation, and final payment upon completion. We can discuss customized payment schedules based on your project requirements and budget.',
      icon: FaDollarSign
    },
    {
      category: 'pricing',
      question: 'Are there any additional costs I should be aware of?',
      answer: 'Our quotes include all standard installation costs, materials, and labor. Additional costs may apply for permits, specialized equipment rental, emergency services, or changes to the original scope. We always discuss any potential additional costs upfront during the consultation phase.',
      icon: FaDollarSign
    },
    {
      category: 'timeline',
      question: 'How long does a typical installation take?',
      answer: 'Project timelines vary based on complexity and scope. Small CCTV installations may take 1-3 days, while large electrical projects can take several weeks to months. We provide detailed project timelines during the planning phase and keep you updated throughout the process.',
      icon: FaClock
    },
    {
      category: 'timeline',
      question: 'Do you provide emergency services?',
      answer: 'Yes, we offer 24/7 emergency services for critical electrical and security system issues. Our emergency response team can typically respond within 2-4 hours for urgent situations. Emergency service rates may apply for after-hours and weekend calls.',
      icon: FaClock
    },
    {
      category: 'timeline',
      question: 'Can you work around my business schedule?',
      answer: 'Absolutely! We understand that business operations are critical. We can schedule installations during off-hours, weekends, or holidays to minimize disruption to your operations. We work closely with you to develop a schedule that meets your needs.',
      icon: FaClock
    },
    {
      category: 'technical',
      question: 'What certifications and standards do you follow?',
      answer: 'We follow international standards including ISO certifications, IEC electrical standards, and local Ethiopian regulations. Our technicians are certified professionals with ongoing training. All installations comply with safety regulations and industry best practices.',
      icon: FaCertificate
    },
    {
      category: 'technical',
      question: 'Do you provide system integration services?',
      answer: 'Yes, we specialize in integrating various electro-mechanical systems. We can integrate CCTV systems with access control, lighting systems with smart controls, and electrical systems with monitoring platforms. Our engineers ensure seamless integration and optimal performance.',
      icon: FaTools
    },
    {
      category: 'technical',
      question: 'What happens if equipment fails after installation?',
      answer: 'All our installations come with comprehensive warranties. Equipment failures during the warranty period are covered at no cost. We also offer extended warranty options and maintenance contracts to ensure long-term reliability and performance of your systems.',
      icon: FaShieldAlt
    },
    {
      category: 'support',
      question: 'What kind of ongoing support do you provide?',
      answer: 'We provide comprehensive ongoing support including 24/7 technical assistance, preventive maintenance, system monitoring, software updates, and emergency repairs. Our support packages can be customized based on your specific needs and system requirements.',
      icon: FaHeadset
    },
    {
      category: 'support',
      question: 'Do you provide training for our staff?',
      answer: 'Yes, we provide comprehensive training for your staff on system operation, basic maintenance, and troubleshooting. Training can be conducted on-site or at our facilities, and we provide documentation and ongoing support to ensure your team is confident with the systems.',
      icon: FaHeadset
    },
    {
      category: 'support',
      question: 'How do I request maintenance or support?',
      answer: 'You can request support through multiple channels: our 24/7 hotline, email support, online portal, or mobile app. For maintenance contracts, we proactively schedule regular maintenance visits. Emergency support is available with priority response times.',
      icon: FaHeadset
    }
  ];

  const filteredFAQs = faqData.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const faqContainer = faqRef.current;

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

    // FAQ items animation
    gsap.fromTo(faqContainer.children,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: faqContainer,
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
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-xl text-[#64748B] max-w-3xl mx-auto font-inter">
            Find answers to common questions about our electro-mechanical services, 
            processes, and support. Can't find what you're looking for? Contact us directly.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-12">
          {/* Search Bar */}
          <div className="relative mb-8">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#64748B] w-5 h-5" />
            <input
              type="text"
              placeholder="Search frequently asked questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white border border-[#0066FF]/20 rounded-xl text-[#1A2332] placeholder-[#64748B] focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 transition-all duration-300 text-lg"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center">
            {faqCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-[#0066FF] to-[#00D4FF] text-white shadow-lg'
                    : 'bg-white text-[#64748B] border border-[#0066FF]/20 hover:bg-[#F8FAFC] hover:text-[#0066FF]'
                }`}
              >
                <category.icon className={`w-4 h-4 ${activeCategory === category.id ? 'text-white' : category.color}`} />
                <span className="font-inter">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Items */}
        <div ref={faqRef} className="max-w-4xl mx-auto space-y-4">
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
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-10 h-10 bg-[#0066FF]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <faq.icon className="w-5 h-5 text-[#0066FF]" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#1A2332] font-poppins pr-4">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="flex-shrink-0">
                    {activeIndex === index ? (
                      <FaChevronUp className="w-5 h-5 text-[#0066FF] transition-transform duration-300" />
                    ) : (
                      <FaChevronDown className="w-5 h-5 text-[#64748B] transition-transform duration-300" />
                    )}
                  </div>
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6">
                    <div className="pl-14">
                      <p className="text-[#64748B] font-inter leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
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
                Try adjusting your search terms or category filter.
              </p>
            </div>
          )}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#1A2332] to-[#0F172A] rounded-3xl p-12 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4 font-poppins">
                Still Have Questions?
              </h3>
              <p className="text-lg text-[#64748B] mb-8 max-w-2xl mx-auto font-inter">
                Our expert team is here to help. Get personalized answers to your specific 
                questions about our electro-mechanical services and solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-[#0066FF] to-[#00D4FF] text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#0066FF]/25">
                  <span className="relative z-10 flex items-center gap-3">
                    <FaHeadset className="w-5 h-5" />
                    Contact Our Experts
                  </span>
                </button>
                
                <button className="group relative px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:bg-white/10">
                  <span className="relative z-10 flex items-center gap-3">
                    <FaQuestionCircle className="w-5 h-5" />
                    Submit a Question
                  </span>
                </button>
              </div>

              {/* Quick Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#0066FF]/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <FaHeadset className="w-6 h-6 text-[#00D4FF]" />
                  </div>
                  <h4 className="text-white font-semibold mb-1 font-poppins">24/7 Support</h4>
                  <p className="text-[#64748B] text-sm font-inter">+251 911 234 567</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#0066FF]/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <FaQuestionCircle className="w-6 h-6 text-[#00D4FF]" />
                  </div>
                  <h4 className="text-white font-semibold mb-1 font-poppins">Email Support</h4>
                  <p className="text-[#64748B] text-sm font-inter">support@bmelectro.com</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#0066FF]/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <FaClock className="w-6 h-6 text-[#00D4FF]" />
                  </div>
                  <h4 className="text-white font-semibold mb-1 font-poppins">Response Time</h4>
                  <p className="text-[#64748B] text-sm font-inter">Within 24 hours</p>
                </div>
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
      </div>
    </section>
  );
}