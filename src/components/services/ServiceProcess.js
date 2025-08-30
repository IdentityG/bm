'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FaClipboardList,
  FaDraftingCompass,
  FaTools,
  FaCheckCircle,
  FaHeadset,
  FaArrowRight,
  FaClock,
  FaShieldAlt,
  FaCertificate
} from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function ServiceProcess() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const processRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      id: 1,
      icon: FaClipboardList,
      title: 'Consultation & Assessment',
      description: 'We begin with a comprehensive consultation to understand your specific requirements, site conditions, and project objectives.',
      details: [
        'Site survey and analysis',
        'Requirements gathering',
        'Technical feasibility study',
        'Initial cost estimation'
      ],
      duration: '1-3 Days',
      color: 'text-[#0066FF]',
      bgColor: 'bg-[#0066FF]/10',
      gradient: 'from-[#0066FF] to-[#00D4FF]'
    },
    {
      id: 2,
      icon: FaDraftingCompass,
      title: 'Design & Planning',
      description: 'Our expert engineers create detailed designs and comprehensive project plans tailored to your specific needs and industry standards.',
      details: [
        'Technical drawings and schematics',
        'Equipment specifications',
        'Project timeline development',
        'Safety and compliance planning'
      ],
      duration: '5-10 Days',
      color: 'text-[#FF6B35]',
      bgColor: 'bg-[#FF6B35]/10',
      gradient: 'from-[#FF6B35] to-[#F59E0B]'
    },
    {
      id: 3,
      icon: FaTools,
      title: 'Installation & Implementation',
      description: 'Professional installation by certified technicians using industry-leading equipment and following strict safety protocols.',
      details: [
        'Professional installation team',
        'Quality materials and equipment',
        'Safety protocol adherence',
        'Progress monitoring and updates'
      ],
      duration: '1-4 Weeks',
      color: 'text-[#10B981]',
      bgColor: 'bg-[#10B981]/10',
      gradient: 'from-[#10B981] to-[#00D4FF]'
    },
    {
      id: 4,
      icon: FaCheckCircle,
      title: 'Testing & Commissioning',
      description: 'Rigorous testing and quality assurance to ensure all systems meet specifications and perform optimally.',
      details: [
        'System functionality testing',
        'Performance optimization',
        'Safety compliance verification',
        'Documentation and certification'
      ],
      duration: '2-5 Days',
      color: 'text-[#8B5CF6]',
      bgColor: 'bg-[#8B5CF6]/10',
      gradient: 'from-[#8B5CF6] to-[#0066FF]'
    },
    {
      id: 5,
      icon: FaHeadset,
      title: 'Support & Maintenance',
      description: 'Ongoing support and maintenance services to ensure long-term reliability and optimal performance of your systems.',
      details: [
        '24/7 technical support',
        'Preventive maintenance',
        'Emergency response service',
        'System upgrades and updates'
      ],
      duration: 'Ongoing',
      color: 'text-[#F59E0B]',
      bgColor: 'bg-[#F59E0B]/10',
      gradient: 'from-[#F59E0B] to-[#FF6B35]'
    }
  ];

  const qualityFeatures = [
    {
      icon: FaClock,
      title: 'On-Time Delivery',
      description: 'We commit to project timelines and deliver on schedule'
    },
    {
      icon: FaShieldAlt,
      title: 'Safety First',
      description: 'Strict adherence to safety protocols and industry standards'
    },
    {
      icon: FaCertificate,
      title: 'Certified Quality',
      description: 'ISO certified processes and quality management systems'
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const process = processRef.current;

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

    // Process steps animation
    gsap.fromTo(process.children,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: process,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-[#F8FAFC] to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-48 h-48 border border-[#0066FF]/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 border-2 border-[#00D4FF]/20 rotate-45 animate-bounce"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-poppins mb-6">
            <span className="bg-gradient-to-r from-[#0066FF] via-[#00D4FF] to-[#1A2332] bg-clip-text text-transparent">
              Our Service Process
            </span>
          </h2>
          <p className="text-xl text-[#64748B] max-w-3xl mx-auto font-inter">
            A systematic approach to delivering exceptional electro-mechanical solutions 
            with precision, quality, and reliability at every step.
          </p>
        </div>

        {/* Process Steps */}
        <div ref={processRef} className="space-y-8 mb-16">
          {processSteps.map((step, index) => (
            <div
              key={step.id}
              className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              onMouseEnter={() => setActiveStep(index)}
            >
              {/* Step Content */}
              <div className="flex-1">
                <div className="bg-white rounded-2xl p-8 border border-[#0066FF]/10 hover:shadow-xl transition-all duration-300">
                  {/* Step Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 ${step.bgColor} rounded-xl flex items-center justify-center`}>
                      <step.icon className={`w-8 h-8 ${step.color}`} />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`text-sm font-bold ${step.color} bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}>
                          STEP {step.id}
                        </span>
                        <span className="text-sm text-[#64748B] font-inter">
                          {step.duration}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-[#1A2332] font-poppins">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  {/* Step Description */}
                  <p className="text-lg text-[#64748B] mb-6 font-inter leading-relaxed">
                    {step.description}
                  </p>

                  {/* Step Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center gap-3">
                        <FaCheckCircle className={`w-4 h-4 ${step.color}`} />
                        <span className="text-[#1A2332] font-inter text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Step Visual */}
              <div className="flex-1 flex justify-center">
                <div className={`relative w-64 h-64 bg-gradient-to-r ${step.gradient} rounded-full flex items-center justify-center`}>
                  <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center">
                    <step.icon className={`w-24 h-24 ${step.color}`} />
                  </div>
                  
                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <span className={`text-xl font-bold ${step.color}`}>{step.id}</span>
                  </div>

                  {/* Connection Line */}
                  {index < processSteps.length - 1 && (
                    <div className={`absolute ${index % 2 === 0 ? 'right-0 translate-x-8' : 'left-0 -translate-x-8'} top-1/2 w-16 h-1 bg-gradient-to-r ${step.gradient} opacity-30`}></div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Features */}
        <div className="bg-gradient-to-r from-[#1A2332] to-[#0F172A] rounded-3xl p-12 relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white text-center mb-8 font-poppins">
              Why Choose Our Process?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {qualityFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-[#0066FF]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-[#00D4FF]" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3 font-poppins">
                    {feature.title}
                  </h4>
                  <p className="text-[#64748B] font-inter">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-[#0066FF] to-[#00D4FF] text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#0066FF]/25">
                <span className="relative z-10 flex items-center gap-3">
                  Start Your Project Today
                  <FaArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
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
    </section>
  );
}