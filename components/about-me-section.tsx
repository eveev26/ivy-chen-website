import Image from 'next/image';

const AboutMeSection = () => {
  return (
    <section id="about-me">
      <div className="flex flex-col lg:flex-row w-screen pt-12 lg:pt-24 pl-8 lg:pl-48 pr-8 lg:pr-48 pb-12 lg:pb-24 place-items-center gap-8 lg:gap-24 container">
        {/* Text Content */}
        <div className="flex flex-col gap-4 w-full order-2 lg:order-1">
          <h2 className="flex text-3xl lg:text-6xl text-justify mb-4 lg:mb-8 text-dark-brown">
            About Me
          </h2>
          <p className="flex text-base lg:text-lg text-justify text-dark-brown">
            Hi, my name is Ivy Chen, and I am a third year Computer Science
            student at UTSC. I am an aspiring software developer who is eager to
            apply my knowledge and skills to real-world challenges and make a
            meaningful impact in the tech industry.
          </p>
          <p className="flex text-base lg:text-lg text-justify text-dark-brown">
            I&apos;m always open to connecting with fellow tech enthusiasts,
            industry professionals, and like-minded people. Feel free to reach
            out for networking, collaboration, or simply to discuss anything
            tech-related!
          </p>
        </div>

        {/* Profile Image */}
        <div className="flex-shrink-0 order-1 lg:order-2">
          <Image
            src="/images/profile-2.png"
            alt="Image of Ivy Chen"
            width={300}
            height={300}
            className="lg:w-[600px] lg:h-[600px] rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export { AboutMeSection };
