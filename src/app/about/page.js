'use client';

import AboutHero from '@/components/about/AboutHero';
import CertificationsAwards from '@/components/about/CertificationsAwards';
import CompanyStory from '@/components/about/CompanyStory';
import CompanyValuesMission from '@/components/about/CompanyValuesMission';
import FacilitiesCapabilities from '@/components/about/FacilitiesCapabilities';
import LeadershipTeam from '@/components/about/LeadershipTeam';
import OurTeamExpertise from '@/components/about/OurTeamExpertise';
import WhyChooseUs from '@/components/about/WhyChooseUs';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <AboutHero />
      <CompanyStory />
      <LeadershipTeam />
      <CompanyValuesMission />
      <OurTeamExpertise />
      <FacilitiesCapabilities />
      <CertificationsAwards />
      <WhyChooseUs />
    </div>
  );
}