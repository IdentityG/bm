'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaDirections,
  FaParking,
  FaBus,
  FaCar,
  FaBuilding,
  FaUsers,
  FaTools,
  FaTimes,
  FaExpand
} from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function OfficeLocationsMap() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const mapRef = useRef(null);
  const locationsRef = useRef(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [activeOffice, setActiveOffice] = useState('headquarters');

  const officeLocations = [
    {
      id: 'headquarters',
      name: 'Headquarters',
      type: 'Main Office',
      address: '123 Electric Avenue, Bole Sub-City, Addis Ababa, Ethiopia',
      coordinates: { lat: 9.0192, lng: 38.7525 },
      phone: '+251-11-123-4567',
      email: 'info@bmelectro.com',
      hours: {
        weekdays: 'Monday - Friday: 8:00 AM - 6:00 PM',
        saturday: 'Saturday: 9:00 AM - 4:00 PM',
        sunday: 'Sunday: Closed (Emergency only)'
      },
      services: [
        'Full Service Center',
        'Sales & Consultation',
        'Technical Support',
        'Project Management',
        'Training Center'
      ],
      facilities: [
        'Reception & Waiting Area',
        'Conference Rooms',
        'Technical Workshop',
        'Equipment Showroom',
        'Customer Parking'
      ],
      transportation: {
        parking: 'Free customer parking available',
        publicTransport: 'Accessible by city bus routes 12, 15, 18',
        landmarks: 'Near Bole International Airport, 15 minutes drive'
      },
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
      teamSize: '35+ Professionals',
      color: 'text-[#0066FF]',
      bgColor: 'bg-[#0066FF]/10'
    },
    {
      id: 'branch-hawassa',
      name: 'Hawassa Branch',
      type: 'Regional Office',
      address: '456 Industrial Road, Hawassa, SNNPR, Ethiopia',
      coordinates: { lat: 7.0621, lng: 38.4776 },
      phone: '+251-46-123-4567',
      email: 'hawassa@bmelectro.com',
      hours: {
        weekdays: 'Monday - Friday: 8:30 AM - 5:30 PM',
        saturday: 'Saturday: 9:00 AM - 2:00 PM',
        sunday: 'Sunday: Closed'
      },
      services: [
        'Regional Service Center',
        'Industrial Projects',
        'Maintenance Support',
        'Emergency Response'
      ],
      facilities: [
        'Service Center',
        'Parts Warehouse',
        'Mobile Service Units',
        'Customer Lounge'
      ],
      transportation: {
        parking: 'On-site parking available',
        publicTransport: 'Near Hawassa University, accessible by local transport',
        landmarks: 'Industrial Park vicinity, 10 minutes from city center'
      },
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop',
      teamSize: '12+ Professionals',
      color: 'text-[#10B981]',
      bgColor: 'bg-[#10B981]/10'
    },
    {
      id: 'branch-mekelle',
      name: 'Mekelle Branch',
      type: 'Regional Office',
      address: '789 Technology Street, Mekelle, Tigray, Ethiopia',
      coordinates: { lat: 13.4967, lng: 39.4755 },
      phone: '+251-34-123-4567',
      email: 'mekelle@bmelectro.com',
      hours: {
        weekdays: 'Monday - Friday: 8:30 AM - 5:30 PM',
        saturday: 'Saturday: 9:00 AM - 1:00 PM',
        sunday: 'Sunday: Closed'
      },
      services: [
        'Northern Region Coverage',
        'Mining Industry Support',
        'Infrastructure Projects',
        'Technical Consultation'
      ],
      facilities: [
        'Regional Office',
        'Equipment Storage',
        'Meeting Rooms',
        'Service Vehicles'
      ],
      transportation: {
        parking: 'Street parking available',
        publicTransport: 'Central location, accessible by city transport',
        landmarks: 'Near Mekelle University, city center location'
      },
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      teamSize: '8+ Professionals',
      color: 'text-[#FF6B35]',
      bgColor: 'bg-[#FF6B35]/10'
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const map = mapRef.current;
    const locations = locationsRef.current;

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

    // Map animation
    gsap.fromTo(map,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: map,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Locations animation
    gsap.fromTo(locations.children,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: locations,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const currentOffice = officeLocations.find(office => office.id === activeOffice);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-[#F8FAFC] to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 border border-[#0066FF]/20 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-[#00D4FF]/20 rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-poppins mb-6">
            <span className="bg-gradient-to-r from-[#0066FF] via-[#00D4FF] to-[#1A2332] bg-clip-text text-transparent">
              Our Locations
            </span>
          </h2>
          <p className="text-xl text-[#64748B] max-w-3xl mx-auto font-inter">
            Visit us at our offices across Ethiopia. We're strategically located to serve 
            you better with comprehensive electro-mechanical solutions nationwide.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Interactive Map */}
          <div ref={mapRef} className="bg-white rounded-3xl border border-[#0066FF]/10 overflow-hidden shadow-xl">
            <div className="p-6 border-b border-[#0066FF]/10">
              <h3 className="text-2xl font-bold text-[#1A2332] font-poppins">
                Office Locations Map
              </h3>
              <p className="text-[#64748B] font-inter">
                Click on markers to view office details
              </p>
            </div>
            
            {/* Map Container - Placeholder for actual map integration */}
            <div className="relative h-96 bg-gradient-to-br from-[#0066FF]/10 to-[#00D4FF]/10">
              {/* Ethiopia Map Outline */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-80 h-80">
                  {/* Simplified Ethiopia outline */}
                  <svg viewBox="0 0 400 300" className="w-full h-full opacity-20">
                    <path
                      d="M50 150 Q100 50 200 80 Q300 60 350 120 Q380 180 320 220 Q250 250 150 230 Q80 200 50 150 Z"
                      fill="currentColor"
                      className="text-[#0066FF]"
                    />
                  </svg>
                  
                  {/* Office Markers */}
                  {officeLocations.map((office, index) => (
                    <motion.button
                      key={office.id}
                      onClick={() => setActiveOffice(office.id)}
                      className={`absolute w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        activeOffice === office.id
                          ? 'bg-[#0066FF] text-white scale-125 shadow-lg'
                          : 'bg-white text-[#0066FF] border-2 border-[#0066FF] hover:scale-110'
                      }`}
                      style={{
                        top: `${20 + index * 25}%`,
                        left: `${30 + index * 20}%`
                      }}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaMapMarkerAlt className="w-4 h-4" />
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Map Controls */}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <button className="w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center hover:bg-[#F8FAFC] transition-colors duration-300">
                  <FaExpand className="w-4 h-4 text-[#0066FF]" />
                </button>
              </div>

              {/* Legend */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                <div className="text-xs font-semibold text-[#1A2332] mb-2">Offices</div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs">
                    <div className="w-3 h-3 bg-[#0066FF] rounded-full"></div>
                    <span className="text-[#64748B]">Headquarters</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <div className="w-3 h-3 bg-[#10B981] rounded-full"></div>
                    <span className="text-[#64748B]">Regional Offices</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Office Details */}
          <div>
            {/* Office Selector */}
            <div className="flex flex-wrap gap-3 mb-8">
              {officeLocations.map((office) => (
                <button
                  key={office.id}
                  onClick={() => setActiveOffice(office.id)}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                    activeOffice === office.id
                      ? 'bg-gradient-to-r from-[#0066FF] to-[#00D4FF] text-white shadow-lg'
                      : 'bg-white text-[#64748B] border border-[#0066FF]/20 hover:bg-[#F8FAFC] hover:text-[#0066FF]'
                  }`}
                >
                  {office.name}
                </button>
              ))}
            </div>

            {/* Active Office Details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeOffice}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl border border-[#0066FF]/10 overflow-hidden shadow-xl"
              >
                {/* Office Image */}
                <div className="relative h-48">
                  <img
                    src={currentOffice.image}
                    alt={currentOffice.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white font-poppins">
                      {currentOffice.name}
                    </h3>
                    <p className="text-white/90 font-inter">{currentOffice.type}</p>
                  </div>
                </div>

                {/* Office Info */}
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Contact Info */}
                    <div>
                      <h4 className="text-lg font-bold text-[#1A2332] mb-4 font-poppins">
                        Contact Information
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <FaMapMarkerAlt className="w-5 h-5 text-[#0066FF] mt-1" />
                          <p className="text-[#64748B] font-inter text-sm">
                            {currentOffice.address}
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <FaPhone className="w-5 h-5 text-[#10B981]" />
                          <a 
                            href={`tel:${currentOffice.phone}`}
                            className="text-[#64748B] hover:text-[#10B981] transition-colors duration-300 font-inter text-sm"
                          >
                            {currentOffice.phone}
                          </a>
                        </div>
                        <div className="flex items-center gap-3">
                          <FaEnvelope className="w-5 h-5 text-[#FF6B35]" />
                          <a 
                            href={`mailto:${currentOffice.email}`}
                            className="text-[#64748B] hover:text-[#FF6B35] transition-colors duration-300 font-inter text-sm"
                          >
                            {currentOffice.email}
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Hours */}
                    <div>
                      <h4 className="text-lg font-bold text-[#1A2332] mb-4 font-poppins">
                        Business Hours
                      </h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <FaClock className="w-4 h-4 text-[#8B5CF6]" />
                          <p className="text-[#64748B] font-inter text-sm">
                            {currentOffice.hours.weekdays}
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <FaClock className="w-4 h-4 text-[#8B5CF6]" />
                          <p className="text-[#64748B] font-inter text-sm">
                            {currentOffice.hours.saturday}
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <FaClock className="w-4 h-4 text-[#8B5CF6]" />
                          <p className="text-[#64748B] font-inter text-sm">
                            {currentOffice.hours.sunday}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Services & Facilities */}
                  <div className="grid md:grid-cols-2 gap-6 mt-6 pt-6 border-t border-[#0066FF]/10">
                    <div>
                      <h4 className="text-lg font-bold text-[#1A2332] mb-3 font-poppins">
                        Services Available
                      </h4>
                      <div className="space-y-2">
                        {currentOffice.services.map((service, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <FaTools className="w-4 h-4 text-[#0066FF]" />
                            <span className="text-[#64748B] font-inter text-sm">{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-[#1A2332] mb-3 font-poppins">
                        Facilities
                      </h4>
                      <div className="space-y-2">
                        {currentOffice.facilities.map((facility, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <FaBuilding className="w-4 h-4 text-[#10B981]" />
                            <span className="text-[#64748B] font-inter text-sm">{facility}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Transportation */}
                  <div className="mt-6 pt-6 border-t border-[#0066FF]/10">
                    <h4 className="text-lg font-bold text-[#1A2332] mb-3 font-poppins">
                      Getting Here
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-start gap-3">
                        <FaParking className="w-4 h-4 text-[#0066FF] mt-1" />
                        <p className="text-[#64748B] font-inter text-sm">
                          {currentOffice.transportation.parking}
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaBus className="w-4 h-4 text-[#10B981] mt-1" />
                        <p className="text-[#64748B] font-inter text-sm">
                          {currentOffice.transportation.publicTransport}
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaDirections className="w-4 h-4 text-[#FF6B35] mt-1" />
                        <p className="text-[#64748B] font-inter text-sm">
                          {currentOffice.transportation.landmarks}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Team Size */}
                  <div className="mt-6 pt-6 border-t border-[#0066FF]/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <FaUsers className="w-5 h-5 text-[#8B5CF6]" />
                      <span className="font-semibold text-[#1A2332] font-poppins">
                        {currentOffice.teamSize}
                      </span>
                    </div>
                    <motion.button
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0066FF] to-[#00D4FF] text-white rounded-xl hover:shadow-lg transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaDirections className="w-4 h-4" />
                      <span className="font-inter text-sm">Get Directions</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Office Cards Grid */}
        <div ref={locationsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {officeLocations.map((office, index) => (
            <motion.div
              key={office.id}
              className="bg-white rounded-2xl border border-[#0066FF]/10 p-6 hover:shadow-xl transition-all duration-300 cursor-pointer"
              whileHover={{ y: -5, scale: 1.02 }}
              onClick={() => setActiveOffice(office.id)}
            >
              <div className={`w-12 h-12 ${office.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                <FaMapMarkerAlt className={`w-6 h-6 ${office.color}`} />
              </div>
              
              <h4 className="text-lg font-bold text-[#1A2332] mb-2 font-poppins">
                {office.name}
              </h4>
              <p className="text-sm text-[#64748B] mb-3 font-inter">
                {office.type}
              </p>
              <p className="text-xs text-[#64748B] font-inter">
                {office.address}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}