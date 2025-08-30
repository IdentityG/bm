'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FaExpand, 
  FaTimes, 
  FaChevronLeft, 
  FaChevronRight,
  FaImages,
  FaFilter,
  FaPlay,
  FaEye
} from 'react-icons/fa';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Gallery = () => {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const titleRef = useRef(null);
  const imageRefs = useRef([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  const categories = [
    { id: 'all', label: 'All Projects', count: 12 },
    { id: 'cctv', label: 'CCTV Systems', count: 4 },
    { id: 'electric', label: 'Electric Projects', count: 3 },
    { id: 'lighting', label: 'Road Lighting', count: 3 },
    { id: 'collider', label: 'Research Projects', count: 2 }
  ];

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      title: 'Advanced CCTV Installation',
      category: 'cctv',
      description: 'State-of-the-art surveillance system with AI-powered monitoring capabilities.',
      location: 'Addis Ababa Commercial Center',
      year: '2024'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop',
      title: 'Power Distribution Network',
      category: 'electric',
      description: 'Large-scale electrical infrastructure for industrial complex.',
      location: 'Hawassa Industrial Park',
      year: '2024'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop',
      title: 'Smart Highway Lighting',
      category: 'lighting',
      description: 'Energy-efficient LED lighting system with smart controls.',
      location: 'Addis-Djibouti Highway',
      year: '2023'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=600&fit=crop',
      title: 'Research Facility Setup',
      category: 'collider',
      description: 'Precision electrical systems for advanced research infrastructure.',
      location: 'Entoto Observatory',
      year: '2024'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop',
      title: 'Security Command Center',
      category: 'cctv',
      description: 'Comprehensive security monitoring and control systems.',
      location: 'National Security Complex',
      year: '2023'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
      title: 'Industrial Power Systems',
      category: 'electric',
      description: 'High-voltage electrical installations for manufacturing.',
      location: 'Dire Dawa Industrial Zone',
      year: '2024'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop',
      title: 'Urban Street Lighting',
      category: 'lighting',
      description: 'Modern LED street lighting with energy management.',
      location: 'Bahir Dar City Center',
      year: '2023'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop',
      title: 'Metro Station CCTV',
      category: 'cctv',
      description: 'Integrated surveillance for public transportation.',
      location: 'Addis Ababa Light Rail',
      year: '2024'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1562408590-e32931084e23?w=800&h=600&fit=crop',
      title: 'Substation Installation',
      category: 'electric',
      description: 'Critical power infrastructure for grid stability.',
      location: 'Mekelle Power Grid',
      year: '2023'
    },
    {
      id: 10,
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      title: 'Airport Runway Lighting',
      category: 'lighting',
      description: 'Precision lighting systems for aviation safety.',
      location: 'Bole International Airport',
      year: '2024'
    },
    {
      id: 11,
      src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
      title: 'Laboratory Infrastructure',
      category: 'collider',
      description: 'Advanced electrical systems for scientific research.',
      location: 'Ethiopian Space Center',
      year: '2024'
    },
    {
      id: 12,
      src: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop',
      title: 'Campus Security Network',
      category: 'cctv',
      description: 'Comprehensive surveillance for educational institutions.',
      location: 'Addis Ababa University',
      year: '2023'
    }
  ];

  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  // Mouse tracking for 3D effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Advanced title animation
      gsap.fromTo(titleRef.current,
        {
          opacity: 0,
          y: 100,
          rotationX: -30,
          transformPerspective: 1000
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1
          }
        }
      );

      // Grid animation with stagger
      gsap.fromTo(imageRefs.current,
        {
          opacity: 0,
          y: 60,
          scale: 0.8,
          rotationY: -15
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationY: 0,
          duration: 1.2,
          ease: 'power3.out',
          stagger: {
            amount: 1.5,
            grid: 'auto',
            from: 'center'
          },
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Floating animation for images
      imageRefs.current.forEach((img, index) => {
        if (img) {
          gsap.to(img, {
            y: -10,
            duration: 2 + (index % 3) * 0.5,
            repeat: -1,
            yoyo: true,
            ease: 'power2.inOut',
            delay: (index % 4) * 0.3
          });
        }
      });

    }, sectionRef);

    // Simulate loading
    setTimeout(() => setIsLoading(false), 1000);

    return () => ctx.revert();
  }, []);

  // Mouse move handler for 3D effects
  const handleMouseMove = (e) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (rect) {
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      mouseX.set(x * 20);
      mouseY.set(y * 20);
    }
  };

  // Filter animation
  const handleFilterChange = (filterId) => {
    if (filterId === activeFilter) return;
    
    setActiveFilter(filterId);
    
    // Animate out current images
    gsap.to(imageRefs.current, {
      opacity: 0,
      scale: 0.8,
      y: 30,
      duration: 0.3,
      stagger: 0.05,
      onComplete: () => {
        // Animate in new images
        setTimeout(() => {
          gsap.fromTo(imageRefs.current,
            { opacity: 0, scale: 0.8, y: 30 },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.05,
              ease: 'power2.out'
            }
          );
        }, 100);
      }
    });
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-white overflow-hidden"
      onMouseMove={handleMouseMove}
      aria-label="Project Gallery"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(30deg, #0066FF 12%, transparent 12.5%, transparent 87%, #0066FF 87.5%, #0066FF),
              linear-gradient(150deg, #00D4FF 12%, transparent 12.5%, transparent 87%, #00D4FF 87.5%, #00D4FF)
            `,
            backgroundSize: '100px 173px',
            backgroundPosition: '0 0, 50px 87px'
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <motion.div
            ref={titleRef}
            className="text-center mb-16"
            style={{
              rotateX: useTransform(springY, [-20, 20], [5, -5]),
              rotateY: useTransform(springX, [-20, 20], [-5, 5])
            }}
          >
            <motion.div
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-md border border-slate-200 px-6 py-3 rounded-full text-blue-600 font-medium mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <FaImages className="w-5 h-5" />
              <span>Project Gallery</span>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            </motion.div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
              Our Work{' '}
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent bg-300% animate-gradient">
                Showcase
              </span>
            </h2>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of successful electro-mechanical projects across Ethiopia, 
              showcasing innovation, quality, and technical excellence.
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => handleFilterChange(category.id)}
                className={`group relative px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'text-white shadow-lg'
                    : 'text-slate-600 hover:text-blue-600 bg-slate-100 hover:bg-slate-200'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {activeFilter === category.id && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"
                    layoutId="activeFilter"
                    transition={{ duration: 0.3 }}
                  />
                )}
                <span className="relative z-10 flex items-center space-x-2">
                  <span>{category.label}</span>
                  <span className="text-xs opacity-75">({category.count})</span>
                </span>
              </motion.button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <div ref={gridRef} className="relative">
            {isLoading ? (
              // Loading Animation
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {[...Array(8)].map((_, index) => (
                  <motion.div
                    key={index}
                    className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl"
                    animate={{
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: index * 0.1
                    }}
                  />
                ))}
              </div>
            ) : (
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                layout
              >
                <AnimatePresence mode="wait">
                  {filteredImages.map((image, index) => (
                    <motion.div
                      key={image.id}
                      ref={el => imageRefs.current[index] = el}
                      className="group relative aspect-square cursor-pointer overflow-hidden rounded-2xl bg-slate-100"
                      layout
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      whileHover={{ y: -10 }}
                      onClick={() => setSelectedImage(image)}
                    >
                      {/* Image */}
                      <Image
                        src={image.src}
                        alt={image.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Content Overlay */}
                      <motion.div
                        className="absolute inset-0 p-6 flex flex-col justify-end text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ y: 20 }}
                        whileHover={{ y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h3 className="text-lg font-bold mb-2">{image.title}</h3>
                        <p className="text-sm text-white/90 mb-3 line-clamp-2">{image.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-white/80">{image.location}</span>
                          <motion.div
                            className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center"
                            whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.3)' }}
                          >
                            <FaExpand className="w-4 h-4" />
                          </motion.div>
                        </div>
                      </motion.div>

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-medium rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {categories.find(cat => cat.id === image.category)?.label}
                      </div>

                      {/* Hover Glow Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}
          </div>

          {/* View More Button */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl shadow-lg overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(0, 102, 255, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center space-x-2">
                <FaEye className="w-5 h-5" />
                <span>View Complete Gallery</span>
              </span>
              
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTimes className="w-5 h-5" />
              </motion.button>

              {/* Image */}
              <div className="relative aspect-video">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">
                      {selectedImage.title}
                    </h3>
                    <p className="text-slate-600 mb-4">
                      {selectedImage.description}
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-medium rounded-full">
                    {selectedImage.year}
                  </span>
                </div>
                
                <div className="flex items-center space-x-6 text-sm text-slate-500">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">Location:</span>
                    <span>{selectedImage.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">Category:</span>
                    <span>{categories.find(cat => cat.id === selectedImage.category)?.label}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom CSS for gradient animation */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        .bg-300\\% {
          background-size: 300% 300%;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Gallery;