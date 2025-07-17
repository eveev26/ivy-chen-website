'use client'

import React from 'react';

import { AboutMeSection } from '../components/about-me-section';
import { ExperienceSection } from "../components/experience-section";
import { Heading } from '../components/heading';
import { Landing } from '../components/landing';
import { Navbar } from "../components/navbar";
import { ProjectsSection } from '../components/projects-section';

export default function Home() {
  return (
    <main className='flex min-w-screen min-h-screen flex-col place-items-center bg-white' >
      <Navbar />

      <section id="home">
        <Landing />
      </section>

      <section>
        <Heading title="Projects" id="projects" />
        <ProjectsSection />
      </section>

      <section>
        <Heading title="Experience" id="experience" />
        <ExperienceSection />
      </section>

      <section id="about-me">
        <AboutMeSection />
      </section>

    </main>
  )
}
