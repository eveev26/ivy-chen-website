import React from 'react';
import Image from 'next/image';
import { Project, projectsData } from '../lib/projects-data';

interface ProjectsSectionProps {
  filterType?: 'web' | 'mobile';
}

interface ProjectCardProps {
  project: Project;
  imagePosition: 'left' | 'right';
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, imagePosition }) => {
  const imageSize = project.type === 'web' ? { width: 600, height: 600 } : { width: 200, height: 200 };
  
  const imageElement = (
    <Image 
      src={project.image} 
      alt={project.alt} 
      width={imageSize.width} 
      height={imageSize.height}
    />
  );

  const contentElement = (
    <div className={`flex flex-col justify-between p-12 ${project.backgroundColor} rounded-2xl flex-1`}>
      <div className='flex flex-col gap-4'>
        <p className='flex text-4xl font-bold text-justify text-dark-brown'>
          {project.name}
        </p>
        <p className='flex text-lg text-justify text-dark-brown'>
          {project.description}
        </p>
      </div>
      <div className='flex flex-col gap-4'>
        <p className='flex text-2xl text-justify font-bold text-dark-brown'>
          Tools
        </p>
        <div className='flex flex-row gap-4'>
          {project.tools.map((tool, index) => (
            <button 
              key={index}
              className='flex px-8 py-2 bg-dark-brown text-white text-lg rounded-full hover:bg-opacity-80 transition-all duration-300 w-fit'
            >
              {tool}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className='flex flex-row gap-12'>
      {imagePosition === 'left' ? (
        <>
          {imageElement}
          {contentElement}
        </>
      ) : (
        <>
          {contentElement}
          {imageElement}
        </>
      )}
    </div>
  );
};

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ filterType }) => {
  const filteredProjects = filterType 
    ? projectsData.filter(project => project.type === filterType)
    : projectsData;

  return (
    <div className='flex flex-row w-screen pt-24 pl-48 pr-48 pb-24 place-items-center' style={{margin: '0 auto', maxWidth: '2000px'}}>
      <div className='flex flex-col gap-24 w-full'>
        {filteredProjects.map((project, index) => {
          const imagePosition = index % 2 === 0 ? 'left' : 'right';
          
          return (
            <ProjectCard 
              key={project.id} 
              project={project} 
              imagePosition={imagePosition}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsSection; 