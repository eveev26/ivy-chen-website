'use client';

import Image from 'next/image';
import { useState } from 'react';

import { experiencesData } from '../lib/experience-data';

import { Heading } from './heading';

const tabColors = ['bg-light-blue', 'bg-pink', 'bg-green'];

export const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState(experiencesData[0].id);

  const activeExperience =
    experiencesData.find(exp => exp.id === activeTab) || experiencesData[0];
  const activeTabIndex = experiencesData.findIndex(exp => exp.id === activeTab);
  const activeTabColor = tabColors[activeTabIndex] || tabColors[0];

  return (
    <section id="experience">
      <Heading title="Experience" />
      <div className="flex flex-row w-screen pt-12 lg:pt-24 pl-8 lg:pl-48 pr-8 lg:pr-48 pb-12 lg:pb-24 place-items-center container">
        <div className="flex flex-col w-full gap-2 rounded-2xl">
          {/* Tab Navigation */}
          <div className="flex flex-row gap-2 -mb-2 relative z-10">
            {experiencesData.map(({ id, logo, company }, index) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`px-3 lg:px-4 py-2 text-base lg:text-xl font-bold transition-all duration-300 rounded-t-2xl relative ${tabColors[index]} text-dark-brown ${
                  activeTab === id ? 'z-20' : 'z-10'
                } flex items-center gap-3`}
                style={{
                  transform:
                    activeTab === id ? 'translateY(2px)' : 'translateY(0)',
                }}
              >
                <Image
                  src={logo}
                  alt={`${company} logo`}
                  width={24}
                  height={24}
                />
                {/* Show company name only on larger screens */}
                <span className="hidden md:inline">{company}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div
            className={`flex flex-col gap-4 ${activeTabColor} rounded-2xl rounded-tl-none p-4 lg:p-6`}
          >
            <h3 className="flex text-xl lg:text-3xl text-justify font-bold text-dark-brown">
              {activeExperience.title}
            </h3>
            <p className="flex text-base lg:text-lg text-justify text-dark-brown">
              {activeExperience.duration}
            </p>
            <ul className="list-disc list-outside space-y-2 pl-4 lg:pl-6 ml-2 lg:ml-4">
              {activeExperience.description.map((item, index) => (
                <li
                  key={index}
                  className="text-base lg:text-lg text-dark-brown"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
