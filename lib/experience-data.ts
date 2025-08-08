interface Experience {
  id: string;
  title: string;
  company: string;
  logo: string;
  duration: string;
  description: string[];
}

export const experiencesData: Experience[] = [
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
      "Added a new feature in the CI/CD pipeline in order to update libraries via Github's dependabot correctly which reduced engineering team workload and clean up open pull requests",
      'Heavily contributed to the standardization of messaging libraries project which allowed fixed architecture and maintainability within each of the migrated services',
    ],
  },
  {
    id: 'intern',
    title: 'Software Engineering Intern',
    company: 'Wealthsimple',
    logo: '/icons/wealthsimple.svg',
    duration: 'May 2023 - August 2023',
    description: [
      'Developed and implemented responsive UI components and screens for a financial portfolios product using React, TypeScript, and animation libraries, enhancing user experience across mobile applications',
      'Designed and integrated portfolio filtering logic and user question flow interfaces, enabling personalized financial recommendations based on user inputs and preferences',
      'Collaborated on an innovative AI chatbot using Decagon AI, creating Agent Operating Procedures (AOPs) to guide users through banking transitions, demonstrating ability to apply emerging technologies to solve business problems',
      'Executed UI polish and bug fixes by implementing design changes from Figma prototypes, ensuring consistent user experiences and attention to detail across platforms',
      'Contributed to the implementation of analytics tracking events to measure user engagement with call-to-action elements, supporting data-driven product development decisions',
    ],
  },
  {
    id: 'research',
    title: 'Research Assistant',
    company: 'University of Toronto',
    logo: '/icons/uoft.svg',
    duration: 'September 2022 - December 2022',
    description: [
      'Conducted comparative analysis between manual and automated speech analysis methodologies, visualizing acoustic data through custom Python scripts and identifying key pattern discrepancies across 52 audio samples',
      'Researched and evaluated Python-based alternatives to Parselmouth for speech analysis, assessing libraries such as librosa, pySPTK, and surfboard for critical functions including formant tracking, pitch extraction, and feature extraction',
      'Established a continuous integration (CI) pipeline for the VirtualSLP-analytics repository using GitHub Actions, implementing automated linting with Python Black and creating a structured testing framework',
      'Developed data visualization tools to identify pause patterns in speech recordings, generating waveform plots and histograms that highlighted differences between manual and automated analysis methods',
      "Contributed to the lab's transition to a fully Python-based speech analysis pipeline, creating detailed documentation of findings and recommendations to improve reproducibility and consistency of research outcomes",
    ],
  },
];
