import Image from 'next/image';

export const Landing = () => {
  return (
    <section id="landing">
      <div className="flex flex-col lg:flex-row w-screen pl-8 lg:pl-48 pr-8 lg:pr-48 pt-44 lg:pb-64 pb-24 place-items-center justify-between container gap-12 lg:gap-0">
        <Image
          src="/images/profile-1.svg"
          alt="Image of Ivy Chen"
          width={600}
          height={600}
          className="w-64 h-64 lg:w-[600px] lg:h-[600px]"
        />
        <div className="flex flex-col gap-12 lg:gap-20 text-center lg:text-left">
          <h2 className="flex text-xl lg:text-3xl text-justify text-dark-brown">
            hi! my name is
          </h2>
          <h1 className="flex text-5xl lg:text-9xl text-justify text-dark-brown">
            Ivy Chen
          </h1>
          <div className="flex flex-col gap-8 lg:gap-12">
            <h2 className="flex text-xl lg:text-3xl text-justify text-dark-brown">
              i&apos;m a software engineer
            </h2>
            <a
              href="#about-me"
              className="flex px-6 lg:px-8 py-3 lg:py-4 bg-pink text-dark-brown border-2 border-dark-brown text-lg lg:text-xl rounded-lg hover:bg-opacity-80 transition-all duration-300 w-fit mx-auto lg:mx-0"
            >
              learn more about me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
