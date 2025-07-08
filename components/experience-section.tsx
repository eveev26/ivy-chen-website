'use client'

import React, { useState } from 'react';
import Image from 'next/image';

interface Experience {
  id: string;
  title: string;
  company: string;
  logo: string;
  duration: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    id: 'fullstack',
    title: 'Full Stack Developer',
    company: 'FreshBooks',
    logo: '/icons/freshbooks.svg',
    duration: 'January 2024 - August 2024',
    description: [
      'Optimized Jenkins pipeline by approximately 20% by reducing the amount of time it took to pull test results from Google Cloud Storage which reduced CI wait times',
      'Led a team of 3 to implement an innovation project on actionable empty states and presented a successful demo to the Product Development and Engineering department which earned positive feedback',
      'Migrated the CD of 8 services from Jenkins to Azure with the assistance of the Developer Experience team in order to adopt CI/CD standardization across all services',
      'Added a new feature in the CI/CD pipeline in order to update libraries via Github\'s dependabot correctly which reduced engineering team workload and clean up open pull requests',
      'Heavily contributed to the standardization of messaging libraries project which allowed fixed architecture and maintainability within each of the migrated services'
    ]
  },
  {
    id: 'intern',
    title: 'Software Engineering Intern',
    company: 'Wealthsimple',
    logo: '/icons/wealthsimple.svg',
    duration: 'May 2023 - August 2023',
    description: [
      'Developed and maintained web applications using React and Node.js',
      'Collaborated with cross-functional teams to deliver high-quality software solutions',
      'Participated in code reviews and implemented best practices for clean code',
      'Assisted in debugging and troubleshooting production issues'
    ]
  },
  {
    id: 'research',
    title: 'Research Assistant',
    company: 'University of Toronto',
    logo: '/icons/uoft.svg',
    duration: 'September 2022 - December 2022',
    description: [
      'Conducted research on machine learning algorithms and data analysis',
      'Implemented prototypes using Python and various ML libraries',
      'Presented findings to research team and contributed to academic publications',
      'Collaborated with graduate students on research projects'
    ]
  }
];

const tabColors = ['bg-light-blue', 'bg-pink', 'bg-green'];

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState(experiences[0].id);

  const activeExperience = experiences.find(exp => exp.id === activeTab) || experiences[0];
  const activeTabIndex = experiences.findIndex(exp => exp.id === activeTab);
  const activeTabColor = tabColors[activeTabIndex] || tabColors[0];

  return (
    <div className='flex flex-row w-screen m-12 pl-48 pr-48 place-items-center'>
      <div className='flex flex-col w-full gap-2 rounded-2xl'>
        {/* Tab Navigation */}
        <div className='flex flex-row gap-2 -mb-2 relative z-10'>
          {experiences.map((exp, index) => (
            <button
              key={exp.id}
              onClick={() => setActiveTab(exp.id)}
              className={`px-4 py-2 text-xl font-bold transition-all duration-300 rounded-t-2xl relative ${tabColors[index]} text-dark-brown ${
                activeTab === exp.id ? 'z-20' : 'z-10'
              } flex items-center gap-3`}
              style={{
                transform: activeTab === exp.id ? 'translateY(2px)' : 'translateY(0)'
              }}
            >
              <Image src={exp.logo} alt={`${exp.company} logo`} width={24} height={24} />
              {exp.company}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className={`flex flex-col gap-4 ${activeTabColor} rounded-2xl rounded-tl-none p-6`}>
          <p className='flex text-3xl text-justify font-bold text-dark-brown'>
            {activeExperience.title}
          </p>
          <p className='flex text-lg text-justify text-dark-brown'>
            {activeExperience.duration}
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            {activeExperience.description.map((item, index) => (
              <li key={index} className="text-lg text-justify text-dark-brown">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
} 