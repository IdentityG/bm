'use client';

import ServicesHero from '@/components/services/ServicesHero';
import ServiceCategories from '@/components/services/ServiceCategories';
import ServiceProcess from '@/components/services/ServiceProcess';
import ServiceRequest from '@/components/services/ServiceRequest';
import TechnicalSpecifications from '@/components/services/TechnicalSpecifications';
import CaseStudies from '@/components/services/CaseStudies';
import ServiceGuarantees from '@/components/services/ServiceGuarantees';
import ServiceFAQ from '@/components/services/ServiceFAQ';

export default function ServicesPage() {
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