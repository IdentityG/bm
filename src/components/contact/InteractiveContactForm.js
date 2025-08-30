'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBuilding,
  FaClipboardList,
  FaPaperPlane,
  FaCheckCircle,
  FaUpload,
  FaTimes,
  FaQuestionCircle,
  FaDollarSign,
  FaHandshake
} from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function InteractiveContactForm() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const formRef = useRef(null);
  const [activeFormType, setActiveFormType] = useState('general');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    service: '',
    budget: '',
    timeline: '',
    projectDetails: '',
    urgency: 'normal'
  });
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formTypes = [
    {
      id: 'general',
      title: 'General Inquiry',
      description: 'Ask questions or get information',
      icon: FaQuestionCircle,
      color: 'text-[#0066FF]',
      bgColor: 'bg-[#0066FF]/10'
    },
    {
      id: 'quote',
      title: 'Request Quote',
      description: 'Get pricing for your project',
      icon: FaDollarSign,
      color: 'text-[#10B981]',
      bgColor: 'bg-[#10B981]/10'
    },
    {
      id: 'service',
      title: 'Service Request',
      description: 'Request specific services',
      icon: FaClipboardList,
      color: 'text-[#FF6B35]',
      bgColor: 'bg-[#FF6B35]/10'
    },
    {
      id: 'partnership',
      title: 'Partnership',
      description: 'Business collaboration inquiries',
      icon: FaHandshake,
      color: 'text-[#8B5CF6]',
      bgColor: 'bg-[#8B5CF6]/10'
    }
  ];

  const services = [
    'CCTV & Security Systems',
    'Mega Electric Projects',
    'Road & Street Lighting',
    'Ethiopian Collider Projects',
    'Industrial Automation',
    'Maintenance & Support',
    'Emergency Services',
    'Consultation'
  ];

  const budgetRanges = [
    'Under $10,000',
    '$10,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000 - $500,000',
    '$500,000+',
    'Need Estimate'
  ];

  const timelineOptions = [
    'ASAP',
    'Within 1 Month',
    '1-3 Months',
    '3-6 Months',
    '6+ Months',
    'Flexible'
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const form = formRef.current;

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
      { y: 80, opacity: 0 },
      {
        y: 0,
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

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setUploadedFiles(prev => [...prev, ...files]);
  };

  const removeFile = (index) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
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
      subject: '',
      message: '',
      service: '',
      budget: '',
      timeline: '',
      projectDetails: '',
      urgency: 'normal'
    });
    setUploadedFiles([]);
    
    setIsSubmitting(false);
    alert('Thank you! Your message has been sent successfully. We will respond within 2 hours.');
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
              Send Us a Message
            </span>
          </h2>
          <p className="text-xl text-[#64748B] max-w-3xl mx-auto font-inter">
            Choose the type of inquiry that best fits your needs. 
            Our smart form will adapt to provide the most relevant fields.
          </p>
        </div>

        <div ref={formRef} className="max-w-4xl mx-auto">
          {/* Form Type Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {formTypes.map((type) => (
              <motion.button
                key={type.id}
                onClick={() => setActiveFormType(type.id)}
                className={`p-6 rounded-2xl border transition-all duration-300 text-center ${
                  activeFormType === type.id
                    ? `${type.bgColor} border-transparent shadow-lg`
                    : 'bg-white border-[#0066FF]/20 hover:bg-[#F8FAFC]'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <type.icon className={`w-8 h-8 mx-auto mb-3 ${
                  activeFormType === type.id ? type.color : 'text-[#64748B]'
                }`} />
                <h3 className={`font-bold mb-2 font-poppins ${
                  activeFormType === type.id ? 'text-[#1A2332]' : 'text-[#64748B]'
                }`}>
                  {type.title}
                </h3>
                <p className={`text-sm font-inter ${
                  activeFormType === type.id ? 'text-[#64748B]' : 'text-[#64748B]/70'
                }`}>
                  {type.description}
                </p>
              </motion.button>
            ))}
          </div>

          {/* Dynamic Form */}
          <div className="bg-white rounded-3xl border border-[#0066FF]/10 p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information */}
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
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
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

              {/* Dynamic Fields Based on Form Type */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFormType}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeFormType === 'quote' && (
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-[#1A2332] mb-2 font-inter font-medium">Service Needed</label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#0066FF]/20 rounded-xl text-[#1A2332] focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 transition-all duration-300"
                        >
                          <option value="">Select service</option>
                          {services.map((service, index) => (
                            <option key={index} value={service}>{service}</option>
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
                          <option value="">Select budget</option>
                          {budgetRanges.map((budget, index) => (
                            <option key={index} value={budget}>{budget}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-[#1A2332] mb-2 font-inter font-medium">Timeline</label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#0066FF]/20 rounded-xl text-[#1A2332] focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 transition-all duration-300"
                        >
                          <option value="">Select timeline</option>
                          {timelineOptions.map((timeline, index) => (
                            <option key={index} value={timeline}>{timeline}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  )}

                  {activeFormType === 'service' && (
                    <div>
                      <label className="block text-[#1A2332] mb-2 font-inter font-medium">Service Required</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#0066FF]/20 rounded-xl text-[#1A2332] focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 transition-all duration-300"
                      >
                        <option value="">Select service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  )}

                  {activeFormType === 'general' && (
                    <div>
                      <label className="block text-[#1A2332] mb-2 font-inter font-medium">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#0066FF]/20 rounded-xl text-[#1A2332] placeholder-[#64748B] focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 transition-all duration-300"
                        placeholder="What is your inquiry about?"
                      />
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Message */}
              <div>
                <label className="block text-[#1A2332] mb-2 font-inter font-medium">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#0066FF]/20 rounded-xl text-[#1A2332] placeholder-[#64748B] focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 transition-all duration-300 resize-none"
                  placeholder="Please provide details about your inquiry..."
                ></textarea>
              </div>

              {/* File Upload */}
              <div>
                <label className="block text-[#1A2332] mb-2 font-inter font-medium">
                  <FaUpload className="inline w-4 h-4 mr-2" />
                  Attach Files (Optional)
                </label>
                <div className="border-2 border-dashed border-[#0066FF]/20 rounded-xl p-6 text-center hover:border-[#0066FF]/40 transition-colors duration-300">
                  <input
                    type="file"
                    multiple
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <FaUpload className="w-8 h-8 text-[#64748B] mx-auto mb-2" />
                    <p className="text-[#64748B] font-inter">
                      Click to upload files or drag and drop
                    </p>
                    <p className="text-sm text-[#64748B]/70 mt-1">
                      PDF, DOC, JPG, PNG up to 10MB each
                    </p>
                  </label>
                </div>

                {/* Uploaded Files */}
                {uploadedFiles.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {uploadedFiles.map((file, index) => (
                      <div key={index} className="flex items-center justify-between bg-[#F8FAFC] rounded-lg p-3">
                        <span className="text-[#1A2332] font-inter text-sm">{file.name}</span>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="text-red-500 hover:text-red-700 transition-colors duration-300"
                        >
                          <FaTimes className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Priority Level */}
              <div>
                <label className="block text-[#1A2332] mb-2 font-inter font-medium">Priority Level</label>
                <div className="flex gap-4">
                  {['normal', 'high', 'urgent'].map((level) => (
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
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="w-5 h-5" />
                      Send Message
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
        </div>
      </div>
    </section>
  );
}