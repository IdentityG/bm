'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { 
  FaClock,
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaCheckCircle,
  FaArrowRight,
  FaHeadset,
  FaClipboardCheck,
  FaUserTie,
  FaRocket
} from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function ResponseTimeProcess() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const processRef = useRef(null);
  const guaranteesRef = useRef(null);

  const responseProcess = [
    {
      step: '01',
      title: 'Inquiry Received',
      description: 'Your message is received and logged in our system',
      timeframe: 'Immediate',
      icon: FaEnvelope,
      color: 'text-[#0066FF]',
      bgColor: 'bg-[#0066FF]/10'
    },
    {
      step: '02',
      title: 'Initial Response',
      description: 'Acknowledgment and preliminary information gathering',
      timeframe: 'Within 2 Hours',
      icon: FaHeadset,
      color: 'text-[#10B981]',
      bgColor: 'bg-[#10B981]/10'
    },
    {
      step: '03',
      title: 'Expert Assignment',
      description: 'Matched with appropriate specialist for your needs',
      timeframe: 'Within 4 Hours',
      icon: FaUserTie,
      color: 'text-[#FF6B35]',
      bgColor: 'bg-[#FF6B35]/10'
    },
    {
      step: '04',
      title: 'Detailed Response',
      description: 'Comprehensive answer or consultation scheduling',
      timeframe: 'Within 24 Hours',
      icon: FaClipboardCheck,
      color: 'text-[#8B5CF6]',
      bgColor: 'bg-[#8B5CF6]/10'
    }
  ];

  const responseGuarantees = [
    {
      title: '2-Hour Acknowledgment',
      description: 'All inquiries acknowledged within 2 hours during business hours',
      icon: FaClock,
      metric: '< 2 Hours',
      color: 'text-[#0066FF]'
    },
    {
      title: '24-Hour Full Response',
      description: 'Comprehensive response or consultation scheduled within 24 hours',
      icon: FaCheckCircle,
      metric: '< 24 Hours',
      color: 'text-[#10B981]'
    },
    {
      title: 'Emergency Response',
      description: 'Critical issues addressed immediately with emergency team',
      icon: FaRocket,
      metric: '< 1 Hour',
      color: 'text-[#FF6B35]'
    },
    {
      title: 'Follow-up Commitment',
      description: 'Regular updates and follow-up until resolution',
      icon: FaCalendarAlt,
      metric: 'Ongoing',
      color: 'text-[#8B5CF6]'
    }
  ];

  const communicationChannels = [
    {
      channel: 'Email',
      responseTime: '2-4 Hours',
      bestFor: 'Detailed inquiries, document sharing',
      availability: '24/7 Monitoring'
    },
    {
      channel: 'Phone',
      responseTime: 'Immediate',
      bestFor: 'Urgent matters, direct conversation',
      availability: 'Business Hours + Emergency'
    },
    {
      channel: 'WhatsApp',
      responseTime: '1-2 Hours',
      bestFor: 'Quick questions, status updates',
      availability: '8 AM - 8 PM Daily'
    },
    {
      channel: 'Contact Form',
      responseTime: '4-6 Hours',
      bestFor: 'Service requests, project inquiries',
      availability: '24/7 Submission'
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const process = processRef.current;
    const guarantees = guaranteesRef.current;

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

    // Guarantees animation
    gsap.fromTo(guarantees.children,
      { y: 80, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: guarantees,
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
              Response Time & Process
            </span>
          </h2>
          <p className="text-xl text-[#64748B] max-w-3xl mx-auto font-inter">
            We value your time and prioritize prompt communication. Here's exactly what 
            to expect when you contact B&M Electro-Mechanical.
          </p>
        </div>

        {/* Response Process Steps */}
        <div ref={processRef} className="mb-20">
          <h3 className="text-3xl font-bold text-[#1A2332] text-center mb-12 font-poppins">
            Our Communication Process
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {responseProcess.map((step, index) => (
              <motion.div
                key={index}
                className="relative bg-white rounded-2xl border border-[#0066FF]/10 p-6 hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* Step Number */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-[#0066FF] to-[#00D4FF] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{step.step}</span>
                </div>

                <div className={`w-12 h-12 ${step.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                  <step.icon className={`w-6 h-6 ${step.color}`} />
                </div>
                
                <h4 className="text-lg font-bold text-[#1A2332] mb-2 font-poppins">
                  {step.title}
                </h4>
                
                <p className="text-[#64748B] text-sm mb-4 font-inter">
                  {step.description}
                </p>

                <div className={`inline-block px-3 py-1 ${step.bgColor} rounded-full`}>
                  <span className={`text-xs font-semibold ${step.color}`}>
                    {step.timeframe}
                  </span>
                </div>

                {/* Connection Line */}
                {index < responseProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-[#0066FF] to-[#00D4FF] opacity-30"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Response Guarantees */}
        <div ref={guaranteesRef} className="mb-16">
          <h3 className="text-3xl font-bold text-[#1A2332] text-center mb-12 font-poppins">
            Our Response Guarantees
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {responseGuarantees.map((guarantee, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl border border-[#0066FF]/10 p-6 text-center hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="w-12 h-12 bg-[#0066FF]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <guarantee.icon className={`w-6 h-6 ${guarantee.color}`} />
                </div>
                
                <div className={`text-2xl font-bold ${guarantee.color} mb-2 font-poppins`}>
                  {guarantee.metric}
                </div>
                
                <h4 className="text-lg font-bold text-[#1A2332] mb-3 font-poppins">
                  {guarantee.title}
                </h4>
                
                <p className="text-[#64748B] text-sm font-inter">
                  {guarantee.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Communication Channels */}
        <div className="bg-gradient-to-r from-[#F8FAFC] to-white rounded-3xl p-12 border border-[#0066FF]/10">
          <h3 className="text-3xl font-bold text-[#1A2332] text-center mb-12 font-poppins">
            Choose Your Preferred Communication Channel
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communicationChannels.map((channel, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 border border-[#0066FF]/10 hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="text-lg font-bold text-[#1A2332] mb-2 font-poppins">
                  {channel.channel}
                </h4>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#64748B] font-inter">Response Time:</span>
                    <span className="font-semibold text-[#0066FF]">{channel.responseTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#64748B] font-inter">Availability:</span>
                    <span className="font-semibold text-[#10B981]">{channel.availability}</span>
                  </div>
                  <div className="pt-2 border-t border-[#0066FF]/10">
                    <span className="text-[#64748B] font-inter text-xs">Best for: {channel.bestFor}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}