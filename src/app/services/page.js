'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ServicesHero from '@/components/services/ServicesHero';
import ServiceCategories from '@/components/services/ServiceCategories';
import ServiceProcess from '@/components/services/ServiceProcess';
import ServiceRequest from '@/components/services/ServiceRequest';
import TechnicalSpecifications from '@/components/services/TechnicalSpecifications';
import CaseStudies from '@/components/services/CaseStudies';
import ServiceGuarantees from '@/components/services/ServiceGuarantees';
import ServiceFAQ from '@/components/services/ServiceFAQ';

gsap.registerPlugin(ScrollTrigger);

export default function ServicesPage() {
  useEffect(() => {
    // Refresh ScrollTrigger on page load
    ScrollTrigger.refresh();

    return () => {
      // Clean up all ScrollTriggers when page unmounts
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <ServicesHero />
      <ServiceCategories />
      <ServiceProcess />
      <TechnicalSpecifications />
      <CaseStudies />
      <ServiceGuarantees />
      <ServiceFAQ />
      <ServiceRequest />
    </div>
  );
}