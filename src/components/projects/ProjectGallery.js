'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaSearch,
  FaFilter,
  FaCamera,
  FaBolt,
  FaRoad,
  FaCog,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaEye,
  FaTimes,
  FaArrowLeft,
  FaArrowRight
} from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectGallery() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const filtersRef = useRef(null);
  const galleryRef = useRef(null);

  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = [
    { id: 'all', name: 'All Projects', icon: FaFilter, color: 'text-[#0066FF]' },
    { id: 'cctv', name: 'CCTV & Security', icon: FaCamera, color: 'text-[#0066FF]' },
    { id: 'electric', name: 'Mega Electric', icon: FaBolt, color: 'text-[#FF6B35]' },
    { id: 'lighting', name: 'Road Lighting', icon: FaRoad, color: 'text-[#10B981]' },
    { id: 'collider', name: 'Ethiopian Collider', icon: FaCog, color: 'text-[#8B5CF6]' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Addis Ababa Commercial Complex CCTV',
      category: 'cctv',
      location: 'Addis Ababa, Ethiopia',
      date: '2024',
      client: 'Commercial Plaza Ltd',
      description: 'Comprehensive CCTV surveillance system installation covering 50,000 sq ft commercial complex with 120 HD cameras, central monitoring station, and mobile app integration.',
      images: [
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1586281010691-3d3857c8c9c4?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop'
      ],
      thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      specs: {
        'Cameras': '120 HD Units',
        'Coverage': '50,000 sq ft',
        'Storage': '30 Days Cloud Backup',
        'Features': 'Night Vision, Motion Detection'
      },
      results: {
        'Security Incidents': '95% Reduction',
        'Response Time': '2 Minutes',
        'Client Satisfaction': '100%',
        'System Uptime': '99.9%'
      }
    },
    {
      id: 2,
      title: 'Industrial Power Distribution Network',
      category: 'electric',
      location: 'Hawassa, Ethiopia',
      date: '2024',
      client: 'Hawassa Industrial Park',
      description: 'Design and installation of mega electrical infrastructure for industrial park including 500MW power distribution, backup systems, and smart grid integration.',
      images: [
        'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop'
      ],
      thumbnail: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop',
      specs: {
        'Capacity': '500MW Distribution',
        'Coverage': 'Industrial Park',
        'Backup': 'Redundant Systems',
        'Technology': 'Smart Grid Integration'
      },
      results: {
        'Power Efficiency': '98% Uptime',
        'Energy Savings': '25% Reduction',
        'Factories Served': '50+ Units',
        'Jobs Created': '10,000+'
      }
    },
    {
      id: 3,
      title: 'Smart Street Lighting Project',
      category: 'lighting',
      location: 'Bahir Dar, Ethiopia',
      date: '2023',
      client: 'Bahir Dar City Administration',
      description: 'Implementation of smart LED street lighting system with automated controls, energy monitoring, and maintenance alerts across 25km of city roads.',
      images: [
        'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop'
      ],
      thumbnail: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=400&h=300&fit=crop',
      specs: {
        'Length': '25km Road Coverage',
        'Lights': '500 LED Units',
        'Control': 'Smart Automation',
        'Monitoring': 'Real-time System'
      },
      results: {
        'Energy Savings': '75% Reduction',
        'Maintenance Cost': '60% Lower',
        'Light Quality': '300% Improvement',
        'Safety Index': '85% Better'
      }
    },
    {
      id: 4,
      title: 'Research Facility Precision Engineering',
      category: 'collider',
      location: 'Addis Ababa University',
      date: '2023',
      client: 'Ethiopian Space Science Institute',
      description: 'Specialized engineering for advanced research equipment installation including precision alignment, vibration isolation, and environmental controls.',
      images: [
        'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1586281010691-3d3857c8c9c4?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop'
      ],
      thumbnail: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop',
      specs: {
        'Precision': 'Micron Level Accuracy',
        'Environment': 'Clean Room Standards',
        'Isolation': 'Vibration Control',
        'Monitoring': '24/7 System Watch'
      },
      results: {
        'Research Capability': '500% Enhanced',
        'Precision Achieved': '0.001mm Accuracy',
        'Publications': '25+ Research Papers',
        'International Recognition': 'Award Winning'
      }
    },
    {
      id: 5,
      title: 'Hospital Emergency Power System',
      category: 'electric',
      location: 'Mekelle, Ethiopia',
      date: '2023',
      client: 'Mekelle General Hospital',
      description: 'Critical power infrastructure for 500-bed hospital including UPS systems, emergency generators, and automated transfer switches.',
      images: [
        'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop'
      ],
      thumbnail: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop',
      specs: {
        'Capacity': '2MW Backup Power',
        'Coverage': '500 Bed Hospital',
        'Response': 'Instant Switchover',
        'Reliability': '99.99% Uptime'
      },
      results: {
        'Lives Saved': 'Countless',
        'Power Outages': '0 Service Interruption',
        'Equipment Protected': '100% Coverage',
        'Staff Confidence': 'Maximum'
      }
    },
    {
      id: 6,
      title: 'Shopping Mall Security Integration',
      category: 'cctv',
      location: 'Dire Dawa, Ethiopia',
      date: '2023',
      client: 'Dire Dawa Mall',
      description: 'Integrated security solution combining CCTV, access control, and alarm systems for large shopping complex with 200+ stores.',
      images: [
        'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1586281010691-3d3857c8c9c4?w=800&h=600&fit=crop'
      ],
      thumbnail: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=300&fit=crop',
      specs: {
        'Cameras': '300 HD Units',
        'Access Points': '50 Controlled Entries',
        'Integration': 'Unified Platform',
        'Coverage': '200+ Stores'
      },
      results: {
        'Theft Reduction': '90% Decrease',
        'Incident Response': '1 Minute Average',
        'Customer Safety': '100% Satisfaction',
        'Store Security': 'Complete Coverage'
      }
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const filters = filtersRef.current;
    const gallery = galleryRef.current;

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

    // Filters animation
    gsap.fromTo(filters,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: filters,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Gallery items animation
    gsap.fromTo(gallery.children,
      { y: 80, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: gallery,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [filteredProjects]);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
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
              Project Gallery
            </span>
          </h2>
          <p className="text-xl text-[#64748B] max-w-3xl mx-auto font-inter">
            Discover our comprehensive portfolio of successful projects across Ethiopia. 
            Each project represents our commitment to excellence and innovation.
          </p>
        </div>

        {/* Search and Filter */}
        <div ref={filtersRef} className="max-w-4xl mx-auto mb-12">
          {/* Search Bar */}
          <div className="relative mb-8">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#64748B] w-5 h-5" />
            <input
              type="text"
              placeholder="Search projects by name, location, or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-[#F8FAFC] border border-[#0066FF]/20 rounded-xl text-[#1A2332] placeholder-[#64748B] focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 transition-all duration-300 text-lg"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-[#0066FF] to-[#00D4FF] text-white shadow-lg'
                    : 'bg-white text-[#64748B] border border-[#0066FF]/20 hover:bg-[#F8FAFC] hover:text-[#0066FF]'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <category.icon className={`w-4 h-4 ${activeCategory === category.id ? 'text-white' : category.color}`} />
                <span className="font-inter">{category.name}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Project Gallery Grid */}
        <div ref={galleryRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group bg-white rounded-2xl border border-[#0066FF]/10 overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => openProjectModal(project)}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FaEye className="w-5 h-5 text-[#0066FF]" />
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
                    project.category === 'cctv' ? 'bg-[#0066FF]' :
                    project.category === 'electric' ? 'bg-[#FF6B35]' :
                    project.category === 'lighting' ? 'bg-[#10B981]' : 'bg-[#8B5CF6]'
                  }`}>
                    {categories.find(cat => cat.id === project.category)?.name}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1A2332] mb-2 font-poppins group-hover:text-[#0066FF] transition-colors duration-300">
                  {project.title}
                </h3>
                
                <div className="flex items-center gap-4 text-sm text-[#64748B] mb-3">
                  <div className="flex items-center gap-1">
                    <FaMapMarkerAlt className="w-4 h-4" />
                    <span className="font-inter">{project.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaCalendarAlt className="w-4 h-4" />
                    <span className="font-inter">{project.date}</span>
                  </div>
                </div>

                <p className="text-[#64748B] font-inter text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#0066FF] font-inter">
                    {project.client}
                  </span>
                  <motion.div
                    className="w-8 h-8 bg-[#0066FF]/10 rounded-full flex items-center justify-center group-hover:bg-[#0066FF] transition-colors duration-300"
                    whileHover={{ rotate: 45 }}
                  >
                    <FaArrowRight className="w-4 h-4 text-[#0066FF] group-hover:text-white transition-colors duration-300" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <FaSearch className="w-16 h-16 text-[#64748B] mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-[#1A2332] mb-2 font-poppins">
              No Projects Found
            </h3>
            <p className="text-[#64748B] font-inter">
              Try adjusting your search terms or category filter.
            </p>
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProjectModal}
          >
            <motion.div
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative">
                <div className="relative h-80 overflow-hidden rounded-t-3xl">
                  <img
                    src={selectedProject.images[currentImageIndex]}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Image Navigation */}
                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300"
                      >
                        <FaArrowLeft className="w-5 h-5 text-[#0066FF]" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300"
                      >
                        <FaArrowRight className="w-5 h-5 text-[#0066FF]" />
                      </button>
                      
                      {/* Image Indicators */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                        {selectedProject.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                              index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Close Button */}
                <button
                  onClick={closeProjectModal}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300"
                >
                  <FaTimes className="w-5 h-5 text-[#0066FF]" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <h2 className="text-3xl font-bold text-[#1A2332] mb-4 font-poppins">
                  {selectedProject.title}
                </h2>
                
                <div className="flex items-center gap-6 text-[#64748B] mb-6">
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="w-4 h-4" />
                    <span className="font-inter">{selectedProject.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="w-4 h-4" />
                    <span className="font-inter">{selectedProject.date}</span>
                  </div>
                  <span className="font-semibold text-[#0066FF] font-inter">
                    {selectedProject.client}
                  </span>
                </div>

                <p className="text-[#64748B] font-inter leading-relaxed mb-8">
                  {selectedProject.description}
                </p>

                {/* Specifications and Results */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-[#1A2332] mb-4 font-poppins">
                      Technical Specifications
                    </h3>
                    <div className="space-y-3">
                      {Object.entries(selectedProject.specs).map(([key, value]) => (
                        <div key={key} className="flex justify-between items-center py-2 border-b border-[#0066FF]/10">
                          <span className="font-medium text-[#64748B] font-inter">{key}</span>
                          <span className="font-semibold text-[#1A2332] font-inter">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#1A2332] mb-4 font-poppins">
                      Project Results
                    </h3>
                    <div className="space-y-3">
                      {Object.entries(selectedProject.results).map(([key, value]) => (
                        <div key={key} className="flex justify-between items-center py-2 border-b border-[#0066FF]/10">
                          <span className="font-medium text-[#64748B] font-inter">{key}</span>
                          <span className="font-semibold text-[#10B981] font-inter">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}