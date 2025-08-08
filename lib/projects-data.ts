export interface Project {
  id: string;
  name: string;
  description: string;
  tools: string[];
  image: string;
  alt: string;
  type: 'web' | 'mobile';
  backgroundColor: string;
  link: string;
}

export const projectsData: Project[] = [
  {
    id: 'plate-it-forward',
    name: 'Plate It Forward',
    description:
      'A web app that lets people share extra food with others in their community to reduce waste and promote sustainability. It connects users who have surplus food with those who can use it, turning potential waste into a valuable resource.',
    tools: ['Python', 'PyMongo', 'React'],
    image: '/images/plate-it-forward.png',
    alt: 'plate-it-forward',
    type: 'web',
    backgroundColor: 'bg-light-blue',
    link: 'https://devpost.com/software/plate-it-forward?_gl=1*7q8vi3*_gcl_au*MTUyMTQ0NTYyOS4xNzUxMzE4NzQ1*_ga*ODU2NzM1Njc5LjE3NTEzMTg3NDU.*_ga_0YHJK3Y10M*czE3NTI3MjgwOTkkbzMkZzEkdDE3NTI3MjgxMzIkajI3JGwwJGgw',
  },
  {
    id: 'scarpool',
    name: 'Scarpool',
    description:
      'Scarpool is a ridesharing app designed for UTSC students to reduce commuting costs and environmental impact by connecting peers with similar schedules for shared rides. It simplifies finding carpool partners, helping students save money, cut emissions, and build community.',
    tools: ['React Native', 'MongoDB', 'Google Maps API'],
    image: '/images/scarpool.png',
    alt: 'scarpool',
    type: 'mobile',
    backgroundColor: 'bg-pink',
    link: 'https://devpost.com/software/scarpool?_gl=1*ri1fyx*_gcl_au*MTUyMTQ0NTYyOS4xNzUxMzE4NzQ1*_ga*ODU2NzM1Njc5LjE3NTEzMTg3NDU.*_ga_0YHJK3Y10M*czE3NTI3MjgwOTkkbzMkZzEkdDE3NTI3MjgxNjckajU0JGwwJGgw',
  },
  {
    id: 'speech-summarizer',
    name: 'Speech Summarizer',
    description:
      "An AI-powered app designed to save professionals time by automatically transcribing and summarizing business meetings. Users upload audio or video files, which are processed using Google Cloud's Speech-to-Text and Cohere's summarization tools to generate concise meeting minutes, including attendees, key points, and next steps.",
    tools: ['Flutter', 'GCP', 'Node.js'],
    image: '/images/speech-summarizer.png',
    alt: 'speech-summarizer',
    type: 'mobile',
    backgroundColor: 'bg-green',
    link: 'https://devpost.com/software/speechsummarizer?_gl=1*ml1ypa*_gcl_au*MTUyMTQ0NTYyOS4xNzUxMzE4NzQ1*_ga*ODU2NzM1Njc5LjE3NTEzMTg3NDU.*_ga_0YHJK3Y10M*czE3NTI3MjgwOTkkbzMkZzEkdDE3NTI3MjgyMDQkajQwJGwwJGgw',
  },
];
