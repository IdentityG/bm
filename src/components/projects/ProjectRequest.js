'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { 
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBuilding,
  FaClipboardList,
  FaCalendarAlt,
  FaPaperPlane,
  FaCheckCircle,
  FaClock,
  FaHeadset,
  FaDollarSign,
  FaRocket,
  FaLightbulb
} from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectRequest() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const formRef = useRef(null);
  const benefitsRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    projectCategory: '',
    timeline: '',
    budget: '',
    description: '',
    priority: 'normal'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const projectTypes = [
    'New Installation',
    'System Upgrade',
    'Maintenance & Repair',
    'Consultation',
    'Design & Planning',
    'Emergency Service'
  ];

  const projectCategories = [
    'CCTV & Security Systems',
    'Mega Electric Projects',
    'Road & Street Lighting',
    'Ethiopian Collider Projects',
    'Industrial Automation',
    'Smart Building Solutions'
  ];

  const timelineOptions = [
    'ASAP (Emergency)',
    'Within 2 Weeks',
    'Within 1 Month',
    '1-3 Months',
    '3-6 Months',
    '6+ Months',
    'Flexible Timeline'
  ];

  const budgetRanges = [
    'Under $25,000',
    '$25,000 - $100,000',
    '$100,000 - $500,000',
    '$500,000 - $1M',
    '$1M+',
    'Need Estimate'
  ];

  const benefits = [
    {
      icon: FaCheckCircle,
      title: 'Free Project Consultation',
      description: 'Get expert advice and detailed project assessment at no cost',
      color: 'text-[#10B981]'
    },
    {
      icon: FaClock,
      title: '24-Hour Response',
      description: 'We respond to all project requests within 24 hours',
      color: 'text-[#0066FF]'
    },
    {
      icon: FaHeadset,
      title: 'Dedicated Project Manager',
      description: 'Assigned project manager for personalized service and updates',
      color: 'text-[#FF6B35]'
    },
    {
      icon: FaDollarSign,
      title: 'Transparent Pricing',
      description: 'Detailed quotes with no hidden costs or surprise charges',
      color: 'text-[#8B5CF6]'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Submit Request',
      description: 'Fill out our detailed project request form',
      icon: FaPaperPlane
    },
    {
      step: '02',
      title: 'Initial Consultation',
      description: 'Free consultation call within 24 hours',
      icon: FaHeadset
    },
    {
      step: '03',
      title: 'Site Assessment',
      description: 'On-site evaluation and technical analysis',
      icon: FaLightbulb
    },
    {
      step: '04',
      title: 'Project Launch',
      description: 'Detailed proposal and project kickoff',
      icon: FaRocket
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const form = formRef.current;
    const benefits = benefitsRef.current;

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

    // Form animation
    gsap.fromTo(form,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: form,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Benefits animation
    gsap.fromTo(benefits.children,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: benefits,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      projectType: '',
      projectCategory: '',
      timeline: '',
      budget: '',
      description: '',
      priority: 'normal'
    });
    
    setIsSubmitting(false);
    
    // Show success message
    alert('Thank you! Your project request has been submitted successfully. We will contact you within 24 hours.');
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
              Start Your Project
            </span>
          </h2>
          <p className="text-xl text-[#64748B] max-w-3xl mx-auto font-inter">
            Ready to bring your electro-mechanical project to life? Fill out our comprehensive 
            project request form and get a personalized consultation from our expert team.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Project Request Form */}
          <div ref={formRef} className="bg-white rounded-3xl p-8 border border-[#0066FF]/10 shadow-lg">
            <h3 className="text-2xl font-bold text-[#1A2332] mb-6 font-poppins">Project Request Form</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#1A2332] mb-2 font-inter font-medium">
                    <FaUser className="inline w-4 h-4 mr-2" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#0066FF]/20 rounded-xl text-[#1A2332] placeholder-[#64748B] focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-[#1A2332] mb-2 font-inter font-medium">
                    <FaEnvelope className="inline w-4 h-4 mr-2" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#0066FF]/20 rounded-xl text-[#1A2332] placeholder-[#64748B] focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#1A2332] mb-2 font-inter font-medium">
                    <FaPhone className="inline w-4 h-4 mr-2" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#0066FF]/20 rounded-xl text-[#1A2332] placeholder-[#64748B] focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 transition-all duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label className="block text-[#1A2332] mb-2 font-inter font-medium">
                    <FaBuilding className="inline w-4 h-4 mr-2" />
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#0066FF]/20 rounded-xl text-[#1A2332] placeholder-[#64748B] focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 transition-all duration-300"
                    placeholder="Enter company name"
                  />
                </div>
              </div>

              {/* Project Details */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#1A2332] mb-2 font-inter font-medium">
                    <FaClipboardList className="inline w-4 h-4 mr-2" />
                    Project Category *
                  </label>
                  <select
                    name="projectCategory"
                    value={formData.projectCategory}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#0066FF]/20 rounded-xl text-[#1A2332] focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 transition-all duration-300"
                  >
                    <option value="">Select project category</option>
                    {projectCategories.map((category, index) => (
                      <option key={index} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-[#1A2332] mb-2 font-inter font-medium">Project Type</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#0066FF]/20 rounded-xl text-[#1A2332] focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 transition-all duration-300"
                  >
                    <option value="">Select project type</option>
                    {projectTypes.map((type, index) => (
                      <option key={index} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#1A2332] mb-2 font-inter font-medium">
                    <FaCalendarAlt className="inline w-4 h-4 mr-2" />
                    Timeline
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#0066FF]/20 rounded-xl text-[#1A2332] focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 transition-all duration-300"
                  >
                    <option value="">Select timeline</option>
                    {timelineOptions.map((timeline, index) => (
                      <option key={index} value={timeline}>
                        {timeline}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-[#1A2332] mb-2 font-inter font-medium">Budget Range</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#0066FF]/20 rounded-xl text-[#1A2332] focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 transition-all duration-300"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((budget, index) => (
                      <option key={index} value={budget}>
                        {budget}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Project Description */}
              <div>
                <label className="block text-[#1A2332] mb-2 font-inter font-medium">
                  Project Description *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#0066FF]/20 rounded-xl text-[#1A2332] placeholder-[#64748B] focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 transition-all duration-300 resize-none"
                  placeholder="Please describe your project requirements, objectives, and any specific needs or constraints..."
                ></textarea>
              </div>

              {/* Priority Level */}
              <div>
                <label className="block text-[#1A2332] mb-2 font-inter font-medium">Priority Level</label>
                <div className="flex gap-4">
                  {['normal', 'high', 'urgent'].map((level) => (
                    <label key={level} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="priority"
                        value={level}
                        checked={formData.priority === level}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-[#0066FF] focus:ring-[#0066FF]"
                      />
                      <span className="text-[#1A2332] font-inter capitalize">{level}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full group relative px-8 py-4 bg-gradient-to-r from-[#0066FF] to-[#00D4FF] text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Submitting Request...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="w-5 h-5" />
                      Submit Project Request
                    </>
                  )}
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#00D4FF] to-[#0066FF]"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </form>
          </div>

          {/* Benefits & Process */}
          <div ref={benefitsRef} className="space-y-8">
            {/* Benefits */}
            <div className="bg-white rounded-2xl p-8 border border-[#0066FF]/10 shadow-lg">
              <h3 className="text-2xl font-bold text-[#1A2332] mb-6 font-poppins">Why Choose Us?</h3>
              
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start gap-4"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className={`w-12 h-12 ${
                      benefit.color === 'text-[#10B981]' ? 'bg-[#10B981]/10' :
                      benefit.color === 'text-[#0066FF]' ? 'bg-[#0066FF]/10' :
                      benefit.color === 'text-[#FF6B35]' ? 'bg-[#FF6B35]/10' : 'bg-[#8B5CF6]/10'
                    } rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#1A2332] mb-2 font-poppins">
                        {benefit.title}
                      </h4>
                      <p className="text-[#64748B] font-inter">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Process Steps */}
            <div className="bg-gradient-to-r from-[#1A2332] to-[#0F172A] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 font-poppins">Our Process</h3>
              
              <div className="space-y-6">
                {processSteps.map((step, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center gap-4"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-12 h-12 bg-[#0066FF]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-6 h-6 text-[#00D4FF]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-[#00D4FF] font-bold text-sm">{step.step}</span>
                        <h4 className="font-bold font-poppins">{step.title}</h4>
                      </div>
                      <p className="text-[#64748B] text-sm font-inter">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="bg-gradient-to-r from-[#FF6B35] to-[#F59E0B] rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4 font-poppins">Need Immediate Assistance?</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto font-inter">
            For urgent project requirements or emergency services, contact our 24/7 support team directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="tel:+251911234567"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#FF6B35] font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPhone className="w-5 h-5" />
              Call Emergency Line
            </motion.a>
            <motion.a
              href="mailto:emergency@bmelectro.com"
              className="flex items-center justify-center gap-3 px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope className="w-5 h-5" />
              Emergency Email
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}