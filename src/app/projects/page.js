'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectsHero from '@/components/projects/ProjectsHero';
import ProjectGallery from '@/components/projects/ProjectGallery';
import ProjectRequest from '@/components/projects/ProjectRequest';
import ProjectCategories from '@/components/projects/ProjectCategories';
import FeaturedProjects from '@/components/projects/FeaturedProjects';
import ProjectCaseStudies from '@/components/projects/ProjectCaseStudies';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsPage() {
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
      <ProjectsHero />
      <ProjectCategories />
      <FeaturedProjects />
      <ProjectGallery />
      <ProjectCaseStudies />
      <ProjectRequest />
    </div>
  );
}