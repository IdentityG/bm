'use client';

import Hero from '@/components/home/Hero';
import AboutSummary from '@/components/home/AboutSummary';
import ServicesOverview from '@/components/home/ServicesOverview';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import Testimonials from '@/components/home/Testimonials';
import Gallery from '@/components/home/Gallery';
import CallToAction from '@/components/home/CallToAction';
import WeWorkedWith from '@/components/home/WeWorkedWith';
import Contact from '@/components/home/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <AboutSummary />
      <FeaturedProjects />
      <Gallery />
      <ServicesOverview />
      <CallToAction />
      <WeWorkedWith />
      <Testimonials />
      <Contact />
    </div>
  );
}
