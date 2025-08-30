'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ContactHero from '@/components/contact/ContactHero';
import InteractiveContactForm from '@/components/contact/InteractiveContactForm';
import ContactInformationHub from '@/components/contact/ContactInformationHub';
import OfficeLocationsMap from '@/components/contact/OfficeLocationsMap';

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
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
      <ContactHero />
      <InteractiveContactForm />
      <ContactInformationHub />
      <OfficeLocationsMap />
    </div>
  );
}