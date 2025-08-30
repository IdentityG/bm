'use client';

import ContactHero from '@/components/contact/ContactHero';
import InteractiveContactForm from '@/components/contact/InteractiveContactForm';
import ContactInformationHub from '@/components/contact/ContactInformationHub';
import OfficeLocationsMap from '@/components/contact/OfficeLocationsMap';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <ContactHero />
      <InteractiveContactForm />
      <ContactInformationHub />
      <OfficeLocationsMap />
    </div>
  );
}