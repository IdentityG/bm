'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FaBolt, 
  FaCamera, 
  FaRoad, 
  FaCog, 
  FaArrowRight,
  FaShieldAlt,
  FaTools,
  FaCheckCircle
} from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function ServicesHero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardsRef = useRef(null);
  const ctaRef = useRef(null);

  const serviceHighlights = [
    {
      icon: FaBolt,
      title: 'Mega Electric Projects',
      description: 'Industrial-scale electrical installations',
      color: 'text-[#FF6B35]',
      bgColor: 'bg-[#FF6B35]/10'
    },
    {
      icon: FaCamera,
      title: 'CCTV & Security',
      description: 'Advanced surveillance systems',
      color: 'text-[#0066FF]',
      bgColor: 'bg-[#0066FF]/10'
    },
    {
      icon: FaRoad,
      title: 'Road Lighting',
      description: 'Smart street lighting solutions',
      color: 'text-[#10B981]',
      bgColor: 'bg-[#10B981]/10'
    },
    {
      icon: FaCog,
      title: 'Ethiopian Collider',
      description: 'Specialized engineering projects',
      color: 'text-[#8B5CF6]',
      bgColor: 'bg-[#8B5CF6]/10'
    }
  ];

  useEffect(() => {
    // Ensure elements exist before animating
    if (!heroRef.current || !titleRef.current || !subtitleRef.current || !cardsRef.current || !ctaRef.current) {
      return;
    }

    const hero = heroRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const cards = cardsRef.current;
    const cta = ctaRef.current;

    // Kill any existing animations first
    gsap.killTweensOf([title, subtitle, cards.children, cta, '.floating-element']);

    // Set initial states
    gsap.set([title, subtitle, cta], { y: 100, opacity: 0 });
    gsap.set(cards.children, { y: 80, opacity: 0, scale: 0.8 });

    // Create timeline for better control
    const tl = gsap.timeline({ delay: 0.2 });

    // Title animation
    tl.to(title, {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: 'power3.out'
    })
    // Subtitle animation
    .to(subtitle, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out'
    }, '-=0.8')
    // Cards animation
    .to(cards.children, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: 'back.out(1.7)'
    }, '-=0.5')
    // CTA animation
    .to(cta, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.4');

    // Floating animation for background elements
    gsap.to('.floating-element', {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut',
      stagger: 0.5
    });

    return () => {
      // Clean up all animations
      tl.kill();
      gsap.killTweensOf([title, subtitle, cards.children, cta, '.floating-element']);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F8FAFC] via-white to-[#F8FAFC] pt-20 md:pt-24">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="floating-element absolute top-20 left-20 w-32 h-32 border-2 border-[#0066FF] rotate-45"></div>
        <div className="floating-element absolute bottom-20 right-20 w-24 h-24 border-2 border-[#00D4FF] rotate-12"></div>
        <div className="floating-element absolute top-1/2 right-10 w-16 h-16 bg-[#0066FF]/20 rounded-full"></div>
        <div className="floating-element absolute top-1/3 left-1/4 w-20 h-20 border border-[#10B981]/30 rounded-full"></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(to right, #0066FF 1px, transparent 1px),
                             linear-gradient(to bottom, #0066FF 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          
          {/* Main Title */}
          <div ref={titleRef} className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold font-poppins mb-6">
              <span className="text-[#1A2332]">Professional</span>
              <br />
              <span className="bg-gradient-to-r from-[#0066FF] via-[#00D4FF] to-[#0066FF] bg-clip-text text-transparent">
                Electro-Mechanical
              </span>
              <br />
              <span className="text-[#1A2332]">Services</span>
            </h1>
          </div>

          {/* Subtitle */}
          <div ref={subtitleRef} className="mb-12">
            <p className="text-xl md:text-2xl text-[#64748B] max-w-4xl mx-auto font-inter leading-relaxed">
              Delivering cutting-edge electrical, security, and lighting solutions across Ethiopia. 
              From mega industrial projects to precision engineering, we power your vision with excellence.
            </p>
          </div>

          {/* Service Highlights Cards */}
          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {serviceHighlights.map((service, index) => (
              <div
                key={index}
                className="group bg-white border border-[#0066FF]/10 rounded-2xl p-6 hover:bg-[#F8FAFC] transition-all duration-300 hover:shadow-xl hover:shadow-[#0066FF]/10 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 ${service.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-8 h-8 ${service.color}`} />
                </div>
                <h3 className="text-lg font-bold text-[#1A2332] mb-2 font-poppins">
                  {service.title}
                </h3>
                <p className="text-[#64748B] text-sm font-inter">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-[#0066FF] to-[#00D4FF] text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#0066FF]/25">
              <span className="relative z-10 flex items-center gap-3">
                Get Free Consultation
                <FaArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF] to-[#0066FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button className="group relative px-8 py-4 border-2 border-[#0066FF] text-[#0066FF] font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:text-white hover:scale-105">
              <span className="relative z-10 flex items-center gap-3">
                <FaTools className="w-5 h-5" />
                View All Services
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#0066FF] to-[#00D4FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-70">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0066FF] mb-2 font-poppins">500+</div>
              <div className="text-sm text-[#64748B] font-inter">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#00D4FF] mb-2 font-poppins">15+</div>
              <div className="text-sm text-[#64748B] font-inter">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#10B981] mb-2 font-poppins">24/7</div>
              <div className="text-sm text-[#64748B] font-inter">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#F59E0B] mb-2 font-poppins">100%</div>
              <div className="text-sm text-[#64748B] font-inter">Satisfaction Rate</div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor" className="text-[#0066FF]"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor" className="text-[#00D4FF]"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor" className="text-white"></path>
        </svg>
      </div>
    </section>
  );
}