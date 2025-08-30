'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { 
  FaEye,
  FaBullseye,
  FaHeart,
  FaShieldAlt,
  FaLightbulb,
  FaHandshake,
  FaLeaf,
  FaStar,
  FaUsers,
  FaRocket,
  FaGlobe,
  FaCheckCircle
} from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function CompanyValuesMission() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const missionRef = useRef(null);
  const valuesRef = useRef(null);
  const [activeValue, setActiveValue] = useState(0);

  const missionVision = {
    mission: {
      title: 'Our Mission',
      description: 'To deliver innovative, reliable, and sustainable electro-mechanical solutions that empower businesses and communities across Ethiopia, while maintaining the highest standards of quality, safety, and customer satisfaction.',
      icon: FaBullseye,
      color: 'text-[#0066FF]',
      bgColor: 'bg-[#0066FF]/10'
    },
    vision: {
      title: 'Our Vision',
      description: 'To be the leading electro-mechanical solutions provider in East Africa, recognized for our technical excellence, innovation, and commitment to building a more connected and sustainable future.',
      icon: FaEye,
      color: 'text-[#FF6B35]',
      bgColor: 'bg-[#FF6B35]/10'
    }
  };

  const coreValues = [
    {
      title: 'Excellence',
      description: 'We strive for perfection in every project, delivering solutions that exceed expectations and set industry standards.',
      icon: FaStar,
      color: 'text-[#FF6B35]',
      bgColor: 'bg-[#FF6B35]/10',
      details: [
        'Continuous improvement in all processes',
        'Attention to detail in every project phase',
        'Commitment to delivering superior results',
        'Regular training and skill development'
      ]
    },
    {
      title: 'Innovation',
      description: 'We embrace cutting-edge technology and creative solutions to solve complex challenges and drive industry advancement.',
      icon: FaLightbulb,
      color: 'text-[#0066FF]',
      bgColor: 'bg-[#0066FF]/10',
      details: [
        'Investment in latest technology and tools',
        'Research and development initiatives',
        'Creative problem-solving approaches',
        'Adoption of smart and sustainable solutions'
      ]
    },
    {
      title: 'Integrity',
      description: 'We conduct business with honesty, transparency, and ethical practices, building trust with every interaction.',
      icon: FaShieldAlt,
      color: 'text-[#10B981]',
      bgColor: 'bg-[#10B981]/10',
      details: [
        'Transparent communication with clients',
        'Ethical business practices',
        'Honest project assessments and timelines',
        'Accountability for all commitments'
      ]
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork, fostering strong partnerships with clients, suppliers, and communities.',
      icon: FaHandshake,
      color: 'text-[#8B5CF6]',
      bgColor: 'bg-[#8B5CF6]/10',
      details: [
        'Strong client partnerships',
        'Collaborative team environment',
        'Community engagement and support',
        'Supplier relationship management'
      ]
    },
    {
      title: 'Sustainability',
      description: 'We are committed to environmental responsibility and creating solutions that benefit future generations.',
      icon: FaLeaf,
      color: 'text-[#059669]',
      bgColor: 'bg-[#059669]/10',
      details: [
        'Eco-friendly solution design',
        'Energy-efficient implementations',
        'Waste reduction initiatives',
        'Environmental impact consideration'
      ]
    },
    {
      title: 'Customer Focus',
      description: 'Our clients are at the center of everything we do, and their success drives our continuous improvement.',
      icon: FaUsers,
      color: 'text-[#DC2626]',
      bgColor: 'bg-[#DC2626]/10',
      details: [
        '24/7 customer support availability',
        'Customized solution development',
        'Regular client feedback integration',
        'Long-term relationship building'
      ]
    }
  ];  co
nst achievements = [
    { metric: '500+', label: 'Projects Completed', icon: FaCheckCircle },
    { metric: '15+', label: 'Years of Excellence', icon: FaRocket },
    { metric: '50+', label: 'Expert Team Members', icon: FaUsers },
    { metric: '11', label: 'Regions Served', icon: FaGlobe }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const mission = missionRef.current;
    const values = valuesRef.current;

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

    // Mission/Vision animation
    gsap.fromTo(mission.children,
      { y: 80, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: mission,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Values animation
    gsap.fromTo(values.children,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: values,
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
        <div className="absolute top-20 left-20 w-64 h-64 border border-[#FF6B35]/20 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-[#0066FF]/20 rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-poppins mb-6">
            <span className="bg-gradient-to-r from-[#FF6B35] via-[#0066FF] to-[#1A2332] bg-clip-text text-transparent">
              Values & Mission
            </span>
          </h2>
          <p className="text-xl text-[#64748B] max-w-3xl mx-auto font-inter">
            Our core values and mission statement guide every decision we make and 
            every solution we deliver to our valued clients.
          </p>
        </div>

        {/* Mission & Vision */}
        <div ref={missionRef} className="grid lg:grid-cols-2 gap-8 mb-20">
          {Object.entries(missionVision).map(([key, item]) => (
            <motion.div
              key={key}
              className="bg-white rounded-3xl border border-[#0066FF]/10 p-8 hover:shadow-2xl transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className={`w-16 h-16 ${item.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                <item.icon className={`w-8 h-8 ${item.color}`} />
              </div>
              
              <h3 className="text-2xl font-bold text-[#1A2332] mb-4 font-poppins">
                {item.title}
              </h3>
              
              <p className="text-[#64748B] leading-relaxed font-inter">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-[#1A2332] text-center mb-12 font-poppins">
            Our Core Values
          </h3>
          
          <div ref={valuesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl border border-[#0066FF]/10 p-6 hover:shadow-xl transition-all duration-300 cursor-pointer"
                whileHover={{ y: -5, scale: 1.02 }}
                onClick={() => setActiveValue(activeValue === index ? -1 : index)}
              >
                <div className={`w-12 h-12 ${value.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                  <value.icon className={`w-6 h-6 ${value.color}`} />
                </div>
                
                <h4 className="text-lg font-bold text-[#1A2332] mb-2 font-poppins">
                  {value.title}
                </h4>
                
                <p className="text-[#64748B] text-sm mb-4 font-inter">
                  {value.description}
                </p>

                {activeValue === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="border-t border-[#0066FF]/10 pt-4"
                  >
                    <h5 className="font-semibold text-[#1A2332] mb-2 font-poppins">How we implement this:</h5>
                    <ul className="space-y-1">
                      {value.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="text-[#64748B] text-xs flex items-center gap-2 font-inter">
                          <div className={`w-1.5 h-1.5 ${value.color.replace('text-', 'bg-')} rounded-full`}></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="bg-gradient-to-r from-[#1A2332] to-[#0F172A] rounded-3xl p-12 relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white text-center mb-12 font-poppins">
              Our Achievements
            </h3>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-12 h-12 bg-[#0066FF]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="w-6 h-6 text-[#00D4FF]" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2 font-poppins">
                    {achievement.metric}
                  </div>
                  <div className="text-gray-300 text-sm font-inter">
                    {achievement.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-gray-300 mb-6 font-inter">
                These values drive our commitment to excellence and guide us toward a sustainable future.
              </p>
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-[#FF6B35] to-[#F59E0B] text-white font-semibold rounded-xl hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More About Our Journey
              </motion.button>
            </div>
          </div>

          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" 
              style={{
                backgroundImage: `radial-gradient(circle at 30% 50%, rgba(255, 107, 53, 0.3) 0%, transparent 50%),
                                 radial-gradient(circle at 70% 50%, rgba(0, 102, 255, 0.3) 0%, transparent 50%)`
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}