'use client';

import { AboutMeSection } from '../components/about-me-section';
import { ExperienceSection } from '../components/experience-section';
import { Landing } from '../components/landing';
import { Navbar } from '../components/navbar/navbar';
import { ProjectsSection } from '../components/projects-section';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-w-screen min-h-screen flex-col place-items-center bg-white">
        <Landing />
        <ProjectsSection />
        <ExperienceSection />
        <AboutMeSection />
      </main>
    </>
  );
}
