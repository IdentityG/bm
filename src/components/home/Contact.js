'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const formRef = useRef(null);
  const contactInfoRef = useRef(null);
  const mapRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: '📍',
      title: 'Visit Our Office',
      details: ['123 Electric Avenue', 'Tech City, TC 12345', 'United States'],
      color: 'electric-blue'
    },
    {
      icon: '📞',
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543', 'Available 24/7'],
      color: 'bright-cyan'
    },
    {
      icon: '✉️',
      title: 'Email Us',
      details: ['info@bmelectro.com', 'support@bmelectro.com', 'quotes@bmelectro.com'],
      color: 'electric-blue'
    },
    {
      icon: '🕐',
      title: 'Business Hours',
      details: ['Mon - Fri: 8:00 AM - 6:00 PM', 'Sat: 9:00 AM - 4:00 PM', 'Emergency: 24/7'],
      color: 'bright-cyan'
    }
  ];

  const services = [
    'CCTV Installation',
    'Electrical Wiring',
    'Road Lighting',
    'Security Systems',
    'Maintenance',
    'Emergency Repair',
    'Consultation',
    'Other'
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const form = formRef.current;
    const contactInfoContainer = contactInfoRef.current;
    const map = mapRef.current;

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

    // Contact info animation
    gsap.fromTo(contactInfoContainer.children,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: contactInfoContainer,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Map animation
    gsap.fromTo(map,
      { y: 50, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: map,
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
      service: '',
      message: ''
    });
    
    setIsSubmitting(false);
    
    // Show success message (you can implement a toast notification here)
    alert('Thank you! Your message has been sent successfully.');
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-[#F8FAFC] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-[#0066FF]/20 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-[#00D4FF]/20 rotate-12 animate-bounce"></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-[#0066FF]/10 rounded-full animate-ping"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-poppins mb-6">
            <span className="bg-gradient-to-r from-[#0066FF] via-[#00D4FF] to-[#1A2332] bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-[#64748B] max-w-3xl mx-auto font-inter">
            Ready to start your next electrical project? We're here to help bring your vision to life. 
            Contact us today for a free consultation and quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Contact Form */}
          <div ref={formRef} className="bg-white border border-[#0066FF]/10 rounded-3xl p-8 hover:bg-[#F8FAFC] transition-all duration-300 shadow-lg">
            <h3 className="text-2xl font-bold text-[#1A2332] mb-6 font-poppins">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-[#1A2332] mb-2 font-inter">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#0066FF]/20 rounded-xl text-[#1A2332] placeholder-[#64748B] focus:outline-none focus:border-[#0066FF] focus:bg-white transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div className="group">
                  <label className="block text-[#1A2332] mb-2 font-inter">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#0066FF]/20 rounded-xl text-[#1A2332] placeholder-[#64748B] focus:outline-none focus:border-[#0066FF] focus:bg-white transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-[#1A2332] mb-2 font-inter">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#0066FF]/20 rounded-xl text-[#1A2332] placeholder-[#64748B] focus:outline-none focus:border-[#0066FF] focus:bg-white transition-all duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div className="group">
                  <label className="block text-[#1A2332] mb-2 font-inter">Service Needed</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#0066FF]/20 rounded-xl text-[#1A2332] focus:outline-none focus:border-[#0066FF] focus:bg-white transition-all duration-300"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service} className="bg-white text-[#1A2332]">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="group">
                <label className="block text-[#1A2332] mb-2 font-inter">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#0066FF]/20 rounded-xl text-[#1A2332] placeholder-[#64748B] focus:outline-none focus:border-[#0066FF] focus:bg-white transition-all duration-300 resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full group relative px-8 py-4 bg-gradient-to-r from-[#0066FF] to-[#00D4FF] text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#0066FF]/25 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF] to-[#0066FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div ref={contactInfoRef} className="space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group bg-white border border-[#0066FF]/10 rounded-2xl p-6 hover:bg-[#F8FAFC] transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className={`text-4xl p-3 ${info.color === 'electric-blue' ? 'bg-[#0066FF]/20' : 'bg-[#00D4FF]/20'} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                    {info.icon}
                  </div>
                  <div>
                    <h4 className={`text-xl font-bold ${info.color === 'electric-blue' ? 'text-[#0066FF]' : 'text-[#00D4FF]'} mb-2 font-poppins`}>
                      {info.title}
                    </h4>
                    <div className="space-y-1">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-[#64748B] font-inter">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Map */}
        <div ref={mapRef} className="bg-white border border-[#0066FF]/10 rounded-3xl p-8 hover:bg-[#F8FAFC] transition-all duration-300 shadow-lg">
          <h3 className="text-2xl font-bold text-[#1A2332] mb-6 font-poppins text-center">Find Us Here</h3>
          <div className="relative h-96 bg-gradient-to-br from-[#0066FF]/20 to-[#00D4FF]/20 rounded-2xl overflow-hidden">
            {/* Placeholder for actual map - you can integrate Google Maps, Mapbox, etc. */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <p className="text-xl text-[#1A2332] font-inter">Interactive Map Coming Soon</p>
                <p className="text-[#64748B] mt-2">123 Electric Avenue, Tech City, TC 12345</p>
              </div>
            </div>
            
            {/* Animated location pin */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-6 h-6 bg-[#0066FF] rounded-full animate-ping"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#00D4FF] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}