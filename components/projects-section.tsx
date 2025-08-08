import Image from 'next/image';
import Link from 'next/link';

import { Project, projectsData } from '../lib/projects-data';

import { Heading } from './heading';

type ProjectCardProps = {
  project: Project;
  imagePosition: 'left' | 'right';
};

const ProjectCard = ({
  project: { name, description, tools, image, type, backgroundColor, link },
  imagePosition,
}: ProjectCardProps) => {
  const { imgWidth, imgHeight } =
    type === 'web'
      ? { imgWidth: 600, imgHeight: 600 }
      : { imgWidth: 200, imgHeight: 200 };

  const imageElement = (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="project-image-link flex-shrink-0"
    >
      <Image
        src={image}
        alt={`Image of ${name} inside a ${type} application`}
        width={imgWidth}
        height={imgHeight}
      />
    </Link>
  );

  const contentElement = (
    <div
      className={`flex flex-col justify-between p-8 lg:p-12 ${backgroundColor} rounded-2xl flex-1`}
    >
      <div className="flex flex-col gap-4">
        <h3 className="flex text-2xl lg:text-4xl font-bold text-justify text-dark-brown">
          {name}
        </h3>
        <p className="flex text-base lg:text-lg text-justify text-dark-brown">
          {description}
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h4 className="flex text-xl lg:text-2xl text-justify font-bold text-dark-brown">
          Tools
        </h4>
        <div className="flex flex-row gap-2 lg:gap-4 flex-wrap">
          {tools.map((tool, index) => (
            <button
              key={index}
              className="flex px-4 lg:px-8 py-1 lg:py-2 bg-dark-brown text-white text-sm lg:text-lg rounded-full hover:bg-opacity-80 transition-all duration-300 w-fit"
            >
              {tool}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
      {/* Small screens (< md): Always stacked */}
      <div className="flex flex-col md:hidden gap-6 items-center">
        {imageElement}
        {contentElement}
      </div>

      {/* Medium screens (md): Web projects stacked, Mobile projects side-by-side */}
      {type === 'web' ? (
        <div className="hidden md:flex md:flex-col lg:hidden gap-8">
          {imageElement}
          {contentElement}
        </div>
      ) : (
        <div className="hidden md:flex md:flex-row lg:hidden gap-8">
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
      )}

      {/* Large screens (lg+): Always side-by-side with original sizing */}
      <div className="hidden lg:flex lg:flex-row lg:gap-12 lg:w-full">
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
    </div>
  );
};

const ProjectsSection = ({ filterType }: { filterType?: 'web' | 'mobile' }) => {
  const filteredProjects = filterType
    ? projectsData.filter(project => project.type === filterType)
    : projectsData;

  return (
    <section id="projects">
      <Heading title="Projects" />
      <div className="flex flex-row w-screen pt-12 lg:pt-24 pl-8 lg:pl-48 pr-8 lg:pr-48 pb-12 lg:pb-24 place-items-center container">
        <div className="flex flex-col gap-12 lg:gap-24 w-full">
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
    </section>
  );
};

export { ProjectsSection };
