'use client'

import Image from 'next/image'
import './/page.css';
import Navbar from "../components/navbar";
import ExperienceSection from "../components/experience-section";
import React, { useState } from 'react';
import Landing from '../components/landing';
import Heading from '../components/heading';
import ProjectsSection from '../components/projects-section';
import AboutMeSection from '../components/about-me-section';

export default function Home() {
  return (
    <main className='flex min-w-screen min-h-screen flex-col place-items-center bg-white' >
      <Navbar />
      <Landing />

      <Heading title="Projects" />

      <ProjectsSection />

      <Heading title="Experience" />

      <ExperienceSection />

      <AboutMeSection />


    </main>
  )
}
