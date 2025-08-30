'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FaBuilding,
  FaIndustry,
  FaUniversity,
  FaHospital,
  FaArrowRight,
  FaCalendarAlt,
  FaDollarSign,
  FaClock,
  FaUsers,
  FaCheckCircle,
  FaQuoteLeft,
  FaStar,
  FaEye,
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function CaseStudies() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const studiesRef = useRef(null);
  const [activeStudy, setActiveStudy] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const caseStudies = [
    {
      id: 1,
      title: 'Addis Ababa Commercial Complex',
      category: 'CCTV & Security Systems',
      client: 'Ethiopian Commercial Bank',
      location: 'Addis Ababa, Ethiopia',
      duration: '6 months',
      budget: '$2.5M',
      teamSize: '25 specialists',
      completionDate: 'March 2024',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
      challenge: 'Implementing a comprehensive security system for a 50-story commercial complex with 24/7 monitoring capabilities and integration with existing building management systems.',
      solution: 'Deployed 500+ HD cameras with AI-powered analytics, integrated access control systems, and established a centralized monitoring center with redundant backup systems.',
      results: [
        { metric: 'Security Coverage', value: '100%', description: 'Complete building coverage' },
        { metric: 'Response Time', value: '<30s', description: 'Incident detection to alert' },
        { metric: 'System Uptime', value: '99.9%', description: 'Operational reliability' },
        { metric: 'Cost Savings', value: '40%', description: 'Reduced security personnel' }
      ],
      technologies: ['4K IP Cameras', 'AI Analytics', 'Access Control', 'Cloud Storage', 'Mobile Monitoring'],
      testimonial: {
        quote: 'B&M Electro-Mechanical delivered an exceptional security solution that exceeded our expectations. The system integration was seamless and the ongoing support has been outstanding.',
        author: 'Ato Bekele Tadesse',
        position: 'Facilities Manager',
        company: 'Ethiopian Commercial Bank'
      },
      gradient: 'from-[#0066FF] to-[#00D4FF]'
    },
    {
      id: 2,
      title: 'Hawassa Industrial Park Power Grid',
      category: 'Mega Electric Projects',
      client: 'Ethiopian Industrial Parks Development Corporation',
      location: 'Hawassa, Ethiopia',
      duration: '18 months',
      budget: '$15M',
      teamSize: '80 engineers',
      completionDate: 'August 2023',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
      challenge: 'Designing and implementing a robust electrical infrastructure for a major industrial park serving 50+ manufacturing facilities with varying power requirements.',
      solution: 'Constructed a 33kV distribution network with smart grid technology, redundant power supplies, and advanced monitoring systems to ensure uninterrupted power delivery.',
      results: [
        { metric: 'Power Capacity', value: '50MW', description: 'Total installed capacity' },
        { metric: 'Efficiency', value: '98.5%', description: 'Power transmission efficiency' },
        { metric: 'Reliability', value: '99.8%', description: 'System availability' },
        { metric: 'Job Creation', value: '15,000+', description: 'Jobs enabled by infrastructure' }
      ],
      technologies: ['33kV Switchgear', 'Smart Grid', 'SCADA Systems', 'Power Quality Monitoring', 'Emergency Backup'],
      testimonial: {
        quote: 'The electrical infrastructure provided by B&M has been instrumental in attracting international manufacturers to our industrial park. Their technical expertise and project management were exceptional.',
        author: 'Dr. Fitsum Arega',
        position: 'CEO',
        company: 'Ethiopian Industrial Parks Development Corporation'
      },
      gradient: 'from-[#FF6B35] to-[#F59E0B]'
    },
    {
      id: 3,
      title: 'Addis Ababa Smart Street Lighting',
      category: 'Road & Street Lighting',
      client: 'Addis Ababa City Administration',
      location: 'Addis Ababa, Ethiopia',
      duration: '12 months',
      budget: '$8M',
      teamSize: '45 technicians',
      completionDate: 'December 2023',
      image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&h=600&fit=crop',
      challenge: 'Modernizing the city\'s street lighting infrastructure with energy-efficient LED technology and smart controls to reduce energy consumption and maintenance costs.',
      solution: 'Installed 15,000 smart LED streetlights with IoT sensors, centralized control systems, and predictive maintenance capabilities across major city corridors.',
      results: [
        { metric: 'Energy Savings', value: '75%', description: 'Reduction in power consumption' },
        { metric: 'Maintenance Cost', value: '-60%', description: 'Reduced maintenance expenses' },
        { metric: 'Light Quality', value: '+200%', description: 'Improved illumination levels' },
        { metric: 'Carbon Reduction', value: '2,500 tons', description: 'Annual CO2 savings' }
      ],
      technologies: ['Smart LED Fixtures', 'IoT Sensors', 'Wireless Controls', 'Solar Integration', 'Predictive Analytics'],
      testimonial: {
        quote: 'The smart lighting project has transformed our city streets. The energy savings and improved safety have made this one of our most successful infrastructure investments.',
        author: 'Eng. Takele Uma',
        position: 'Deputy Mayor',
        company: 'Addis Ababa City Administration'
      },
      gradient: 'from-[#10B981] to-[#00D4FF]'
    },
    {
      id: 4,
      title: 'Ethiopian Space Science Institute',
      category: 'Ethiopian Collider Projects',
      client: 'Ethiopian Space Science and Technology Institute',
      location: 'Entoto Observatory, Ethiopia',
      duration: '24 months',
      budget: '$12M',
      teamSize: '35 specialists',
      completionDate: 'June 2024',
      image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=600&fit=crop',
      challenge: 'Installing precision electrical and mechanical systems for advanced space research equipment requiring ultra-stable power and vibration-free environments.',
      solution: 'Implemented precision power conditioning, electromagnetic shielding, and vibration isolation systems to support sensitive research instrumentation.',
      results: [
        { metric: 'Power Stability', value: '±0.01%', description: 'Voltage regulation accuracy' },
        { metric: 'Vibration Control', value: '<0.1μm', description: 'Mechanical stability' },
        { metric: 'EMI Shielding', value: '>80dB', description: 'Electromagnetic isolation' },
        { metric: 'Research Capability', value: '10x', description: 'Improved measurement precision' }
      ],
      technologies: ['Precision Power Systems', 'Vibration Isolation', 'EMI Shielding', 'Clean Room Technology', 'Environmental Control'],
      testimonial: {
        quote: 'B&M\'s precision engineering has enabled us to achieve measurement accuracies we never thought possible. Their attention to detail and technical expertise is world-class.',
        author: 'Prof. Solomon Belay',
        position: 'Director',
        company: 'Ethiopian Space Science and Technology Institute'
      },
      gradient: 'from-[#8B5CF6] to-[#0066FF]'
    }
  ];

  useEffect(() => {
    // Ensure elements exist before animating
    if (!sectionRef.current || !titleRef.current || !studiesRef.current) {
      return;
    }

    const section = sectionRef.current;
    const title = titleRef.current;
    const studies = studiesRef.current;

    // Kill existing ScrollTriggers for this component
    ScrollTrigger.getAll().forEach(trigger => {
      if (trigger.trigger === section || trigger.trigger === studies) {
        trigger.kill();
      }
    });

    // Set initial states
    gsap.set(title, { y: 100, opacity: 0 });
    gsap.set(studies, { y: 80, opacity: 0 });

    // Title animation
    gsap.to(title, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
        id: 'caseStudies-title'
      }
    });

    // Studies animation
    gsap.to(studies, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: studies,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
        id: 'caseStudies-content'
      }
    });

    return () => {
      // Clean up only this component's ScrollTriggers
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.id && trigger.vars.id.includes('caseStudies')) {
          trigger.kill();
        }
      });
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const currentStudy = caseStudies[currentSlide];

  return (
    <section ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
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
              Case Studies & Success Stories
            </span>
          </h2>
          <p className="text-xl text-[#64748B] max-w-3xl mx-auto font-inter">
            Explore our portfolio of successful projects that demonstrate our technical expertise, 
            innovation, and commitment to delivering exceptional results.
          </p>
        </div>

        {/* Case Study Carousel */}
        <div ref={studiesRef} className="relative">
          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-white border border-[#0066FF]/20 rounded-full flex items-center justify-center text-[#0066FF] hover:bg-[#0066FF] hover:text-white transition-all duration-300 shadow-lg"
            >
              <FaChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-[#0066FF] w-8' : 'bg-[#0066FF]/30'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-white border border-[#0066FF]/20 rounded-full flex items-center justify-center text-[#0066FF] hover:bg-[#0066FF] hover:text-white transition-all duration-300 shadow-lg"
            >
              <FaChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Case Study Content */}
          <div className="bg-white rounded-3xl border border-[#0066FF]/10 overflow-hidden shadow-2xl">
            {/* Header with Image */}
            <div className="relative h-80 overflow-hidden">
              <img
                src={currentStudy.image}
                alt={currentStudy.title}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${currentStudy.gradient} opacity-80`}></div>
              
              {/* Project Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                    {currentStudy.category}
                  </span>
                  <span className="flex items-center gap-2 text-sm">
                    <FaCalendarAlt className="w-4 h-4" />
                    {currentStudy.completionDate}
                  </span>
                </div>
                <h3 className="text-3xl font-bold mb-2 font-poppins">
                  {currentStudy.title}
                </h3>
                <p className="text-lg opacity-90 font-inter">
                  {currentStudy.client} • {currentStudy.location}
                </p>
              </div>
            </div>

            {/* Project Details */}
            <div className="p-8">
              {/* Project Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <FaDollarSign className="w-6 h-6 text-[#10B981] mx-auto mb-2" />
                  <div className="text-2xl font-bold text-[#1A2332] font-poppins">{currentStudy.budget}</div>
                  <div className="text-sm text-[#64748B] font-inter">Project Value</div>
                </div>
                <div className="text-center">
                  <FaClock className="w-6 h-6 text-[#FF6B35] mx-auto mb-2" />
                  <div className="text-2xl font-bold text-[#1A2332] font-poppins">{currentStudy.duration}</div>
                  <div className="text-sm text-[#64748B] font-inter">Duration</div>
                </div>
                <div className="text-center">
                  <FaUsers className="w-6 h-6 text-[#8B5CF6] mx-auto mb-2" />
                  <div className="text-2xl font-bold text-[#1A2332] font-poppins">{currentStudy.teamSize}</div>
                  <div className="text-sm text-[#64748B] font-inter">Team Size</div>
                </div>
                <div className="text-center">
                  <FaEye className="w-6 h-6 text-[#0066FF] mx-auto mb-2" />
                  <div className="text-2xl font-bold text-[#1A2332] font-poppins">#{currentStudy.id}</div>
                  <div className="text-sm text-[#64748B] font-inter">Case Study</div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Challenge & Solution */}
                <div className="space-y-8">
                  <div>
                    <h4 className="text-xl font-bold text-[#1A2332] mb-4 font-poppins">Challenge</h4>
                    <p className="text-[#64748B] leading-relaxed font-inter">
                      {currentStudy.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-[#1A2332] mb-4 font-poppins">Solution</h4>
                    <p className="text-[#64748B] leading-relaxed font-inter">
                      {currentStudy.solution}
                    </p>
                  </div>

                  {/* Technologies Used */}
                  <div>
                    <h4 className="text-xl font-bold text-[#1A2332] mb-4 font-poppins">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {currentStudy.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className={`px-3 py-1 bg-gradient-to-r ${currentStudy.gradient} bg-opacity-10 text-[#1A2332] rounded-full text-sm font-medium border border-[#0066FF]/20`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Results & Testimonial */}
                <div className="space-y-8">
                  {/* Results */}
                  <div>
                    <h4 className="text-xl font-bold text-[#1A2332] mb-4 font-poppins">Key Results</h4>
                    <div className="space-y-4">
                      {currentStudy.results.map((result, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-[#F8FAFC] rounded-xl">
                          <div>
                            <div className="font-semibold text-[#1A2332] font-inter">{result.metric}</div>
                            <div className="text-sm text-[#64748B] font-inter">{result.description}</div>
                          </div>
                          <div className={`text-2xl font-bold bg-gradient-to-r ${currentStudy.gradient} bg-clip-text text-transparent font-poppins`}>
                            {result.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Client Testimonial */}
                  <div className={`p-6 bg-gradient-to-r ${currentStudy.gradient} bg-opacity-10 rounded-2xl border border-[#0066FF]/20`}>
                    <FaQuoteLeft className="w-8 h-8 text-[#0066FF] mb-4" />
                    <p className="text-[#1A2332] font-inter italic mb-4 leading-relaxed">
                      "{currentStudy.testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#0066FF]/20 rounded-full flex items-center justify-center">
                        <span className="text-[#0066FF] font-bold text-lg">
                          {currentStudy.testimonial.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-[#1A2332] font-poppins">
                          {currentStudy.testimonial.author}
                        </div>
                        <div className="text-sm text-[#64748B] font-inter">
                          {currentStudy.testimonial.position}, {currentStudy.testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center mt-12">
                <button className={`group relative px-8 py-4 bg-gradient-to-r ${currentStudy.gradient} text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl`}>
                  <span className="relative z-10 flex items-center gap-3">
                    View Full Case Study
                    <FaArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mt-20 bg-gradient-to-r from-[#1A2332] to-[#0F172A] rounded-3xl p-12 relative overflow-hidden">
          <div className="relative z-10 text-center">
            <h3 className="text-3xl font-bold text-white mb-8 font-poppins">
              Our Track Record
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold text-[#0066FF] mb-2 font-poppins">500+</div>
                <div className="text-[#64748B] font-inter">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#00D4FF] mb-2 font-poppins">98%</div>
                <div className="text-[#64748B] font-inter">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#10B981] mb-2 font-poppins">15+</div>
                <div className="text-[#64748B] font-inter">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#F59E0B] mb-2 font-poppins">24/7</div>
                <div className="text-[#64748B] font-inter">Support Available</div>
              </div>
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