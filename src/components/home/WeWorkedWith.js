'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WeWorkedWith() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const logosRef = useRef(null);
  const statsRef = useRef(null);

  const clients = [
    { name: 'TechCorp Solutions', logo: '🏢', industry: 'Technology' },
    { name: 'Metro Construction', logo: '🏗️', industry: 'Construction' },
    { name: 'City Mall Group', logo: '🏬', industry: 'Retail' },
    { name: 'Healthcare Plus', logo: '🏥', industry: 'Healthcare' },
    { name: 'EduTech Institute', logo: '🎓', industry: 'Education' },
    { name: 'Green Energy Co', logo: '⚡', industry: 'Energy' },
    { name: 'Smart Homes Ltd', logo: '🏠', industry: 'Real Estate' },
    { name: 'Industrial Works', logo: '🏭', industry: 'Manufacturing' },
    { name: 'Security Systems', logo: '🛡️', industry: 'Security' },
    { name: 'Transport Hub', logo: '🚛', industry: 'Logistics' },
    { name: 'Hotel Chain', logo: '🏨', industry: 'Hospitality' },
    { name: 'Bank Network', logo: '🏦', industry: 'Finance' }
  ];

  const stats = [
    { number: '250+', label: 'Happy Clients', icon: '😊' },
    { number: '15+', label: 'Industries Served', icon: '🏭' },
    { number: '98%', label: 'Client Retention', icon: '📈' },
    { number: '24/7', label: 'Support Available', icon: '🕐' }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const logos = logosRef.current;
    const statsContainer = statsRef.current;

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

    // Logo cards animation
    gsap.fromTo(logos.children,
      { y: 50, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: logos,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Stats animation
    gsap.fromTo(statsContainer.children,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: statsContainer,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Very subtle breathing animation for cards (much more gentle)
    logos.querySelectorAll('.client-card').forEach((card, index) => {
      gsap.to(card, {
        y: -2,
        duration: 6 + (index % 4) * 1,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: index * 0.5
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-[#F8FAFC] to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 border border-[#0066FF]/20 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-[#00D4FF]/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-[#0066FF]/10 rounded-full animate-ping"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-poppins mb-6">
            <span className="bg-gradient-to-r from-[#0066FF] via-[#00D4FF] to-[#1A2332] bg-clip-text text-transparent">
              Trusted by Industry Leaders
            </span>
          </h2>
          <p className="text-xl text-[#64748B] max-w-3xl mx-auto font-inter">
            We've had the privilege of working with amazing companies across various industries, 
            delivering exceptional electrical and security solutions that exceed expectations.
          </p>
        </div>

        {/* Client Logos Grid */}
        <div ref={logosRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mb-20">
          {clients.map((client, index) => (
            <div
              key={index}
              className="client-card group relative bg-white border border-[#0066FF]/10 rounded-2xl p-6 hover:bg-[#F8FAFC] transition-all duration-300 hover:shadow-xl hover:shadow-[#0066FF]/15"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0066FF]/20 to-[#00D4FF]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              
              <div className="relative z-10 text-center">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {client.logo}
                </div>
                <h3 className="font-semibold text-[#1A2332] mb-1 text-sm group-hover:text-[#0066FF] transition-colors duration-300">
                  {client.name}
                </h3>
                <p className="text-xs text-[#64748B] group-hover:text-[#00D4FF] transition-colors duration-300">
                  {client.industry}
                </p>
              </div>

              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#0066FF]/50 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="relative inline-block mb-4">
                <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="absolute inset-0 bg-[#0066FF]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-4xl md:text-5xl font-bold font-poppins mb-2 bg-gradient-to-r from-[#0066FF] to-[#00D4FF] bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-[#64748B] font-inter text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-xl text-[#64748B] mb-8 font-inter">
            Ready to join our family of satisfied clients?
          </p>
          <button className="group relative px-8 py-4 bg-gradient-to-r from-[#0066FF] to-[#00D4FF] text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#0066FF]/25">
            <span className="relative z-10 flex items-center gap-3">
              Start Your Project
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF] to-[#0066FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
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
    </section>
  );
}