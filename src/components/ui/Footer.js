'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaPaperPlane,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);
  const contentRef = useRef(null);
  const bottomRef = useRef(null);

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Project', href: '/projects' },
    { name: 'Contact', href: '/contact' }
  ];

  const services = [
    { name: 'CCTV Installation', href: '#services' },
    { name: 'Electrical Wiring', href: '#services' },
    { name: 'Road Lighting', href: '#services' },
    { name: 'Security Systems', href: '#services' },
    { name: 'Maintenance', href: '#services' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: FaFacebookF, href: '#', color: 'text-blue-400 hover:text-blue-400', bgColor: 'hover:bg-blue-500' },
    { name: 'Twitter', icon: FaTwitter, href: '#', color: 'text-sky-400 hover:text-sky-400', bgColor: 'hover:bg-sky-500' },
    { name: 'LinkedIn', icon: FaLinkedinIn, href: '#', color: 'text-blue-600 hover:text-blue-600', bgColor: 'hover:bg-blue-600' },
    { name: 'Instagram', icon: FaInstagram, href: '#', color: 'text-pink-400 hover:text-pink-400', bgColor: 'hover:bg-pink-500' },
    { name: 'YouTube', icon: FaYoutube, href: '#', color: 'text-red-500 hover:text-red-500', bgColor: 'hover:bg-red-600' }
  ];

  useEffect(() => {
    // Ensure elements exist before animating
    if (!footerRef.current || !contentRef.current || !bottomRef.current) {
      return;
    }

    const footer = footerRef.current;
    const content = contentRef.current;
    const bottom = bottomRef.current;

    // Kill existing ScrollTriggers and animations for this component
    ScrollTrigger.getAll().forEach(trigger => {
      if (trigger.trigger === footer || trigger.trigger === bottom) {
        trigger.kill();
      }
    });

    // Kill any existing social icon animations
    const socialIcons = footer.querySelectorAll('.social-icon');
    gsap.killTweensOf(socialIcons);
    gsap.killTweensOf([content.children, bottom]);

    // Set initial states
    gsap.set(content.children, { y: 50, opacity: 0 });
    gsap.set(bottom, { y: 30, opacity: 0 });

    // Main content animation
    gsap.to(content.children, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: footer,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
        id: 'footer-content'
      }
    });

    // Bottom section animation
    gsap.to(bottom, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: bottom,
        start: 'top 90%',
        toggleActions: 'play none none reverse',
        id: 'footer-bottom'
      }
    });

    // Continuous animations for social icons
    socialIcons.forEach((icon, index) => {
      gsap.to(icon, {
        y: -5,
        duration: 2 + (index % 3) * 0.5,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
        delay: index * 0.3
      });
    });

    return () => {
      // Clean up only this component's ScrollTriggers and animations
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.id && trigger.vars.id.includes('footer')) {
          trigger.kill();
        }
      });
      
      // Clean up social icon animations
      gsap.killTweensOf(socialIcons);
      gsap.killTweensOf([content.children, bottom]);
    };
  }, []);

  return (
    <footer ref={footerRef} className="relative bg-gradient-to-b from-[#0066FF] to-[#0F172A] overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 border border-[#0066FF] rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-[#00D4FF] rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-[#0066FF]/10 rounded-full animate-ping"></div>
        <div className="absolute top-1/4 right-1/3 w-24 h-24 border-2 border-[#00D4FF]/20 rotate-45 animate-bounce"></div>
      </div>

      {/* Animated wave at top 
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor" className="text-[#0066FF]"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor" className="text-[#00D4FF]"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor" className="text-[#0F172A]"></path>
        </svg>
      </div> */}

      <div className="container mx-auto px-6 pt-20 pb-8 relative z-10">
        {/* Main Footer Content */}
        <div ref={contentRef} className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-3xl font-bold font-poppins mb-4">
                <span className="bg-gradient-to-r from-[#FF6B35] to-[#00D4FF] bg-clip-text text-transparent">
                  B&M Electro-Mechanical
                </span>
              </h3>
              <p className="text-gray-300 font-inter leading-relaxed mb-6">
                Your trusted partner for comprehensive electrical, CCTV, and lighting solutions.
                With over 15 years of experience, we deliver excellence in every project,
                ensuring safety, reliability, and innovation in all our services.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300 hover:text-[#0066FF] transition-colors duration-300 group">
                  <FaMapMarkerAlt className="text-lg text-[#FF6B35] group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-inter">123 Electric Avenue, Tech City, TC 12345</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 hover:text-[#00D4FF] transition-colors duration-300 group">
                  <FaPhone className="text-lg text-[#FF6B35] group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-inter">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 hover:text-[#0066FF] transition-colors duration-300 group">
                  <FaEnvelope className="text-lg text-[#FF6B35] group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-inter">info@bmelectro.com</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className={`social-icon group relative w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center text-lg transition-all duration-300 hover:scale-110 hover:bg-white/10 ${social.color}`}
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <IconComponent className="relative z-10 transition-all duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0066FF]/20 to-[#00D4FF]/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6 font-poppins">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#0066FF] transition-colors duration-300 font-inter flex items-center gap-2 group"
                  >
                    <span className="w-2 h-2 bg-[#FF6B35]/50 rounded-full group-hover:bg-[#0066FF] transition-colors duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6 font-poppins">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-[#00D4FF] transition-colors duration-300 font-inter flex items-center gap-2 group"
                  >
                    <span className="w-2 h-2 bg-[#00D4FF]/50 rounded-full group-hover:bg-[#00D4FF] transition-colors duration-300"></span>
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Newsletter Signup */}
            <div className="mt-8">
              <h5 className="text-lg font-semibold text-white mb-4 font-poppins">Stay Updated</h5>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#0066FF] transition-colors duration-300 text-sm"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-[#0066FF] to-[#00D4FF] text-white rounded-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                  <FaPaperPlane className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div ref={bottomRef} className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 font-inter text-sm">
              © 2025 B&M Electro-Mechanical. All rights reserved.
            </div>

            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#0066FF] transition-colors duration-300 font-inter">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00D4FF] transition-colors duration-300 font-inter">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-[#0066FF] transition-colors duration-300 font-inter">
                Cookie Policy
              </a>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-6 text-center">
            <p className="text-gray-500 text-xs font-inter mb-2">Licensed & Certified</p>
            <div className="flex justify-center gap-4 text-xs text-gray-500">
              <span className="px-2 py-1 bg-white/5 rounded border border-white/10">Licensed Electrician</span>
              <span className="px-2 py-1 bg-white/5 rounded border border-white/10">Insured & Bonded</span>
              <span className="px-2 py-1 bg-white/5 rounded border border-white/10">24/7 Emergency</span>
            </div>
          </div>
        </div>
      </div>

      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-[#0066FF]/10 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}></div>
          ))}
        </div>
      </div>
    </footer>
  );
}