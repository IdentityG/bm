'use client';

import AboutHero from '@/components/about/AboutHero';
import CompanyStory from '@/components/about/CompanyStory';
import LeadershipTeam from '@/components/about/LeadershipTeam';
import WhyChooseUs from '@/components/about/WhyChooseUs';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <AboutHero />
      <CompanyStory />
      <LeadershipTeam />
      <WhyChooseUs />
    </div>
  );
}