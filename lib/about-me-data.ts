export interface AboutMeData {
  title: string;
  paragraphs: string[];
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

export const aboutMeData: AboutMeData = {
  title: "About Me",
  paragraphs: [
    "Hi, my name is Ivy Chen, and I am a third year Computer Science student at UTSC. I am an aspiring software developer who is eager to apply my knowledge and skills to real-world challenges and make a meaningful impact in the tech industry.",
    "I'm always open to connecting with fellow tech enthusiasts, industry professionals, and like-minded people. Feel free to reach out for networking, collaboration, or simply to discuss anything tech-related!"
  ],
  image: {
    src: "/images/profile-2.png",
    alt: "about-me",
    width: 600,
    height: 600
  }
}; 