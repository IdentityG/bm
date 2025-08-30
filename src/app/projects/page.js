'use client';

import ProjectsHero from '@/components/projects/ProjectsHero';
import ProjectGallery from '@/components/projects/ProjectGallery';
import ProjectRequest from '@/components/projects/ProjectRequest';
import ProjectCategories from '@/components/projects/ProjectCategories';
import FeaturedProjects from '@/components/projects/FeaturedProjects';
import ProjectCaseStudies from '@/components/projects/ProjectCaseStudies';

export default function ProjectsPage() {
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