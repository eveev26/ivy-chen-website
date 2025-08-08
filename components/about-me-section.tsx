import Image from 'next/image';

const AboutMeSection = () => {
  return (
    <section id="about-me">
      <div className="flex flex-row w-screen pt-24 pl-48 pr-48 pb-24 place-items-center gap-24 container">
        <div className="flex flex-col gap-4 w-full">
          <h2 className="flex text-6xl text-justify mb-8 text-dark-brown">
            About Me
          </h2>
          <p className="flex text-lg text-justify text-dark-brown">
            Hi, my name is Ivy Chen, and I am a third year Computer Science
            student at UTSC. I am an aspiring software developer who is eager to
            apply my knowledge and skills to real-world challenges and make a
            meaningful impact in the tech industry.
          </p>
          <p className="flex text-lg text-justify text-dark-brown">
            I&aposm always open to connecting with fellow tech enthusiasts,
            industry professionals, and like-minded people. Feel free to reach
            out for networking, collaboration, or simply to discuss anything
            tech-related!
          </p>
        </div>
        <Image
          src="/images/profile-2.png"
          alt="Image of Ivy Chen"
          width="600"
          height="600"
        />
      </div>
    </section>
  );
};

export { AboutMeSection };
