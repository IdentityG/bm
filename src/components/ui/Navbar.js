'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { 
  FaTwitter, 
  FaLinkedin, 
  FaFacebook, 
  FaInstagram,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef([]);
  const ctaRef = useRef(null);
  
  const pathname = usePathname();

  // Navigation items with dropdowns
  const navItems = [
    { name: 'Home', href: '/', hasDropdown: false },
    { 
      name: 'Services', 
      href: '/services',
      hasDropdown: true,
      dropdownItems: [
        { name: 'CCTV Installation', href: '/services/cctv' },
        { name: 'Mega Electric Projects', href: '/services/electric' },
        { name: 'Road Lighting', href: '/services/lighting' },
        { name: 'Ethiopian Collider', href: '/services/collider' },
        { name: 'Security Systems', href: '/services/security' },
        { name: 'Maintenance', href: '/services/maintenance' }
      ]
    },
    { name: 'Projects', href: '/projects', hasDropdown: false },
    { name: 'About Us', href: '/about', hasDropdown: false },
    { name: 'Blog', href: '/blog', hasDropdown: false },
    { name: 'Contact', href: '/contact', hasDropdown: false }
  ];

  const socialLinks = [
    { icon: FaFacebook, href: '#', label: 'Facebook' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaInstagram, href: '#', label: 'Instagram' }
  ];

  // Scroll detection with immediate check on mount
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
    };

    // Check scroll position immediately on mount/page change
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]); // Re-run when pathname changes

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial page load animations
      gsap.set([logoRef.current, ...linksRef.current, ctaRef.current], {
        y: -20,
        opacity: 0
      });

      gsap.to(logoRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'back.out(1.7)'
      });

      gsap.to(linksRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        delay: 0.2,
        ease: 'power2.out'
      });

      gsap.to(ctaRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        delay: 0.6,
        ease: 'power2.out'
      });

      // Scroll-triggered navbar background change with refresh handling
      ScrollTrigger.create({
        trigger: 'body',
        start: 'top -50px',
        end: 'bottom -10px',
        onToggle: (self) => {
          const scrolled = window.scrollY > 50;
          setIsScrolled(scrolled);
          
          if (self.isActive || scrolled) {
            gsap.to(navRef.current, {
              backgroundColor: 'rgba(0, 102, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
              duration: 0.3
            });
          } else {
            gsap.to(navRef.current, {
              backgroundColor: 'transparent',
              backdropFilter: 'blur(0px)',
              boxShadow: '0 0 0 rgba(0, 0, 0, 0)',
              duration: 0.3
            });
          }
        },
        onRefresh: () => {
          // Handle page refresh/navigation
          const scrolled = window.scrollY > 50;
          setIsScrolled(scrolled);
          if (scrolled) {
            gsap.set(navRef.current, {
              backgroundColor: 'rgba(0, 102, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
            });
          }
        }
      });

    }, navRef);

    return () => ctx.revert();
  }, [pathname]); // Re-run animations when pathname changes

  // Hamburger menu animation
  const toggleMenu = () => {
    const newMenuState = !isMenuOpen;
    setIsMenuOpen(newMenuState);
    
    // GSAP hamburger to X animation with proper state tracking
    if (newMenuState) {
      // Opening menu - show X
      gsap.to('.hamburger-line-1', { rotation: 45, y: 6, duration: 0.3 });
      gsap.to('.hamburger-line-2', { opacity: 0, duration: 0.3 });
      gsap.to('.hamburger-line-3', { rotation: -45, y: -6, duration: 0.3 });
    } else {
      // Closing menu - show hamburger
      gsap.to('.hamburger-line-1', { rotation: 0, y: 0, duration: 0.3 });
      gsap.to('.hamburger-line-2', { opacity: 1, duration: 0.3 });
      gsap.to('.hamburger-line-3', { rotation: 0, y: 0, duration: 0.3 });
    }
  };

  // Close mobile menu and reset hamburger animation
  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    // Reset hamburger animation when closing
    gsap.to('.hamburger-line-1', { rotation: 0, y: 0, duration: 0.3 });
    gsap.to('.hamburger-line-2', { opacity: 1, duration: 0.3 });
    gsap.to('.hamburger-line-3', { rotation: 0, y: 0, duration: 0.3 });
  };

  // Smooth scroll function for Lenis integration
  const handleSmoothScroll = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element && window.lenis) {
        window.lenis.scrollTo(element, { duration: 1.2 });
      }
    }
    closeMobileMenu();
  };

  // Mobile menu variants
  const mobileMenuVariants = {
    closed: {
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    }
  };

  const mobileMenuItemVariants = {
    closed: { x: 50, opacity: 0 },
    open: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut'
      }
    })
  };

  return (
    <>
      <motion.nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#0066FF] backdrop-blur-md shadow-lg border-b border-[#FF6B35]' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* Logo */}
            <motion.div
              ref={logoRef}
              className="flex items-center space-x-3 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/" className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-electric-blue via-bright-cyan to-purple-tech rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-poppins font-bold text-xl">B&M</span>
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-electric-blue to-bright-cyan rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-xl font-poppins font-bold bg-gradient-to-r from-slate-400 to-[#FF6B35] bg-clip-text text-transparent">
                    B&M Electro-Mechanical
                  </h1>
                  <p className="text-xs text-white font-medium">Professional Solutions</p>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <motion.div
                    ref={(el) => (linksRef.current[index] = el)}
                    whileHover={{ y: -2 }}
                    className="relative"
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        pathname === item.href
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-white hover:text-blue-600 hover:bg-blue-50'
                      }`}
                      onClick={(e) => handleSmoothScroll(e, item.href)}
                    >
                      {item.name}
                      {item.hasDropdown && (
                        <FiChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      )}
                    </Link>
                    
                    {/* Active indicator */}
                    {pathname === item.href && (
                      <motion.div
                        className="absolute bottom-0 left-1/2 w-1 h-1 bg-blue-600 rounded-full"
                        layoutId="activeIndicator"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        style={{ x: '-50%' }}
                      />
                    )}
                  </motion.div>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {item.hasDropdown && activeDropdown === item.name && (
                      <motion.div
                        className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.dropdownItems?.map((dropdownItem, idx) => (
                          <motion.div
                            key={dropdownItem.name}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            whileHover={{ x: 5 }}
                          >
                            <Link
                              href={dropdownItem.href}
                              className="group block px-4 py-3 text-sm text-slate-800 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all duration-300 relative overflow-hidden"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <span className="relative z-10">{dropdownItem.name}</span>
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100"
                                initial={{ x: '-100%' }}
                                whileHover={{ x: 0 }}
                                transition={{ duration: 0.3 }}
                              />
                              <motion.div
                                className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100"
                                initial={{ scaleY: 0 }}
                                whileHover={{ scaleY: 1 }}
                                transition={{ duration: 0.3 }}
                              />
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Desktop CTA & Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center space-x-3 text-sm text-white">
                <FaPhone className="w-4 h-4" />
                <span className="font-medium">+251-XXX-XXXX</span>
              </div>
              

              <motion.div ref={ctaRef}>
                <Link href="/contact">
                  <motion.button
                    className="px-6 py-3 bg-gradient-to-r from-[#0066FF] to-[#FF6B35] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 relative z-10"
                    style={{
                      background: 'linear-gradient(135deg, #0066FF, #FF6B35)',
                      color: '#ffffff'
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '0 10px 25px rgba(0, 102, 255, 0.3)'
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10 text-white font-semibold">Get a Quote</span>
                  </motion.button>
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg text-slate-800 hover:text-blue-600 transition-colors duration-200"
              onClick={toggleMenu}
              aria-label="Toggle mobile menu"
              aria-expanded={isMenuOpen}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className="hamburger-line-1 w-6 h-0.5 bg-current mb-1 transition-all duration-300"></span>
                <span className="hamburger-line-2 w-6 h-0.5 bg-current mb-1 transition-all duration-300"></span>
                <span className="hamburger-line-3 w-6 h-0.5 bg-current transition-all duration-300"></span>
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
            />
            
            <motion.div
              className="fixed top-0 right-0 h-full w-full max-w-sm bg-white/95 backdrop-blur-md shadow-2xl z-50 lg:hidden"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-electric-blue to-bright-cyan rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">B&M</span>
                    </div>
                    <div>
                      <h2 className="font-poppins font-bold text-slate-800">B&M</h2>
                      <p className="text-xs text-slate-600">Electro-Mechanical</p>
                    </div>
                  </div>
                  <button
                    onClick={closeMobileMenu}
                    className="p-2 rounded-lg text-slate-600 hover:text-blue-600"
                  >
                    <HiX size={24} />
                  </button>
                </div>

                {/* Mobile Navigation */}
                <div className="flex-1 overflow-y-auto py-6">
                  <nav className="px-6 space-y-2">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        custom={index}
                        variants={mobileMenuItemVariants}
                        initial="closed"
                        animate="open"
                      >
                        <Link
                          href={item.href}
                          className={`block py-3 px-4 rounded-lg font-medium transition-colors duration-200 ${
                            pathname === item.href
                              ? 'text-blue-600 bg-blue-50'
                              : 'text-slate-800 hover:text-blue-600 hover:bg-blue-50'
                          }`}
                          onClick={(e) => handleSmoothScroll(e, item.href)}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </nav>

                  {/* Mobile Contact Info */}
                  <div className="px-6 py-6 border-t border-gray-100 mt-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 text-slate-600">
                        <FaPhone className="w-4 h-4" />
                        <span>+251-XXX-XXXX</span>
                      </div>
                      <div className="flex items-center space-x-3 text-slate-600">
                        <FaEnvelope className="w-4 h-4" />
                        <span>info@bm-electro.com</span>
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center space-x-4 mt-6">
                      {socialLinks.map((social, index) => (
                        <motion.a
                          key={social.label}
                          href={social.href}
                          className="p-2 rounded-lg text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                          aria-label={social.label}
                        >
                          <social.icon size={18} />
                        </motion.a>
                      ))}
                    </div>

                    {/* Mobile CTA */}
                    <Link href="/contact">
                      <motion.button
                        className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg shadow-lg relative z-10"
                        style={{
                          background: 'linear-gradient(135deg, #0066FF, #00D4FF)',
                          color: '#ffffff'
                        }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={closeMobileMenu}
                      >
                        <span className="relative z-10 text-white font-semibold">Get a Quote</span>
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;