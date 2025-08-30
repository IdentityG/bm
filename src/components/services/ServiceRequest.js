'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
  FaHeadset
} from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function ServiceRequest() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const formRef = useRef(null);
  const benefitsRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    projectType: '',
    timeline: '',
    budget: '',
    description: '',
    urgency: 'normal'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceTypes = [
    'CCTV & Security Systems',
    'Mega Electric Projects',
    'Road & Street Lighting',
    'Ethiopian Collider Projects',
    'Custom Engineering Solutions',
    'Maintenance & Support',
    'Emergency Services',
    'Consultation Only'
  ];

  const projectTypes = [
    'New Installation',
    'System Upgrade',
    'Maintenance & Repair',
    'Emergency Service',
    'Consultation',
    'Design & Planning'
  ];

  const timelineOptions = [
    'ASAP (Emergency)',
    'Within 1 Week',
    'Within 1 Month',
    '1-3 Months',
    '3-6 Months',
    '6+ Months',
    'Flexible'
  ];

  const budgetRanges = [
    'Under $10,000',
    '$10,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000 - $500,000',
    '$500,000+',
    'Need Estimate'
  ];

  const benefits = [
    {
      icon: FaCheckCircle,
      title: 'Free Consultation',
      description: 'Get expert advice and initial assessment at no cost'
    },
    {
      icon: FaClock,
      title: '24-Hour Response',
      description: 'We respond to all service requests within 24 hours'
    },
    {
      icon: FaHeadset,
      title: 'Dedicated Support',
      description: 'Assigned project manager for personalized service'
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const form = formRef.current;
    const benefitsContainer = benefitsRef.current;

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
    gsap.fromTo(benefitsContainer.children,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: benefitsContainer,
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
      service: '',
      projectType: '',
      timeline: '',
      budget: '',
      description: '',
      urgency: 'normal'
    });
    
    setIsSubmitting(false);
    
    // Show success message
    alert('Thank you! Your service request has been submitted successfully. We will contact you within 24 hours.');
  };

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
              Request Our Services
            </span>
          </h2>
          <p className="text-xl text-[#64748B] max-w-3xl mx-auto font-inter">
            Ready to start your electro-mechanical project? Fill out our detailed service request form 
            and get a personalized consultation from our expert team.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Service Request Form */}
          <div ref={formRef} className="bg-[#F8FAFC] rounded-3xl p-8 border border-[#0066FF]/10">
            <h3 className="text-2xl font-bold text-[#1A2332] mb-6 font-poppins">Service Request Form</h3>
            
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
                    className="w-full px-4 py-3 bg-white border border-[#0066FF]/20 rounded-xl text-[#1A2332] placeholder-[#64748B] focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 transition-all duration-300"
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
                    className="w-full px-4 py-3 bg-white border border-[#0066FF]/20 rounded-xl text-[#1A2332] placeholder-[#64748B] focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 transition-all duration-300"
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
                    className="w-full px-4 py-3 bg-white border border-[#0066FF]/20 rounded-xl text-[#1A2332] placeholder-[#64748B] focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 transition-all duration-300"
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
                    className="w-full px-4 py-3 bg-white border border-[#0066FF]/20 rounded-xl text-[#1A2332] placeholder-[#64748B] focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 transition-all duration-300"
                    placeholder="Enter company name"
                  />
                </div>
              </div>

              {/* Service Details */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#1A2332] mb-2 font-inter font-medium">
                    <FaClipboardList className="inline w-4 h-4 mr-2" />
                    Service Type *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-[#0066FF]/20 rounded-xl text-[#1A2332] focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 transition-all duration-300"
                  >
                    <option value="">Select a service</option>
                    {serviceTypes.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
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
                    className="w-full px-4 py-3 bg-white border border-[#0066FF]/20 rounded-xl text-[#1A2332] focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 transition-all duration-300"
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
                    className="w-full px-4 py-3 bg-white border border-[#0066FF]/20 rounded-xl text-[#1A2332] focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 transition-all duration-300"
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
                    className="w-full px-4 py-3 bg-white border border-[#0066FF]/20 rounded-xl text-[#1A2332] focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 transition-all duration-300"
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
                  className="w-full px-4 py-3 bg-white border border-[#0066FF]/20 rounded-xl text-[#1A2332] placeholder-[#64748B] focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 transition-all duration-300 resize-none"
                  placeholder="Please describe your project requirements, specific needs, and any additional information that would help us understand your needs better..."
                ></textarea>
              </div>

              {/* Urgency Level */}
              <div>
                <label className="block text-[#1A2332] mb-2 font-inter font-medium">Urgency Level</label>
                <div className="flex gap-4">
                  {['normal', 'urgent', 'emergency'].map((level) => (
                    <label key={level} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="urgency"
                        value={level}
                        checked={formData.urgency === level}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-[#0066FF] focus:ring-[#0066FF]"
                      />
                      <span className="text-[#1A2332] font-inter capitalize">{level}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full group relative px-8 py-4 bg-gradient-to-r from-[#0066FF] to-[#00D4FF] text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#0066FF]/25 disabled:opacity-50 disabled:cursor-not-allowed"
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
                      Submit Service Request
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF] to-[#0066FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </form>
          </div>

          {/* Benefits & Information */}
          <div ref={benefitsRef} className="space-y-8">
            <div className="bg-white rounded-2xl p-8 border border-[#0066FF]/10 shadow-lg">
              <h3 className="text-2xl font-bold text-[#1A2332] mb-6 font-poppins">What Happens Next?</h3>
              
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#0066FF]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-[#0066FF]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#1A2332] mb-2 font-poppins">
                        {benefit.title}
                      </h4>
                      <p className="text-[#64748B] font-inter">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-gradient-to-r from-[#FF6B35] to-[#F59E0B] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4 font-poppins">Emergency Services</h3>
              <p className="mb-6 font-inter">
                Need immediate assistance? Our emergency response team is available 24/7 
                for critical electrical and security system issues.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+251911234567"
                  className="flex items-center justify-center gap-3 px-6 py-3 bg-white text-[#FF6B35] font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300"
                >
                  <FaPhone className="w-4 h-4" />
                  Call Emergency Line
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}