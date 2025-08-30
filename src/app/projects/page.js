'use client';

import ProjectsHero from '@/components/projects/ProjectsHero';
import ProjectGallery from '@/components/projects/ProjectGallery';
import ProjectRequest from '@/components/projects/ProjectRequest';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <ProjectsHero />
      <ProjectGallery />
      <ProjectRequest />
    </div>
  );
}