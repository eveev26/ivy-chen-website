import Image from 'next/image';
import React from 'react';

import { aboutMeData } from '../lib/about-me-data';

const AboutMeSection: React.FC = () => {
  return (
    <div className='flex flex-row w-screen pt-24 pl-48 pr-48 pb-24 place-items-center gap-24 container'>
      <div className='flex flex-col gap-4 w-full'>
        <p className='flex text-6xl text-justify mb-8 text-dark-brown'>{aboutMeData.title}</p>
        {aboutMeData.paragraphs.map((paragraph, index) => (
          <p key={index} className='flex text-lg text-justify text-dark-brown'>
            {paragraph}
          </p>
        ))}
      </div>
      <Image 
        src={aboutMeData.image.src} 
        alt={aboutMeData.image.alt} 
        width={aboutMeData.image.width} 
        height={aboutMeData.image.height}
      />
    </div>
  );
};

export { AboutMeSection };