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
        'Added a new feature in the CI/CD pipeline in order to update libraries via Github\'s dependabot correctly which reduced engineering team workload and clean up open pull requests',
        'Heavily contributed to the standardization of messaging libraries project which allowed fixed architecture and maintainability within each of the migrated services'
      ]
    },
    {
      id: 'intern',
      title: 'Software Engineering Intern',
      company: 'Wealthsimple',
      logo: '/icons/wealthsimple.svg',
      duration: 'May 2023 - August 2023',
      description: [
        'Developed and maintained web applications using React and Node.js',
        'Collaborated with cross-functional teams to deliver high-quality software solutions',
        'Participated in code reviews and implemented best practices for clean code',
        'Assisted in debugging and troubleshooting production issues'
      ]
    },
    {
      id: 'research',
      title: 'Research Assistant',
      company: 'University of Toronto',
      logo: '/icons/uoft.svg',
      duration: 'September 2022 - December 2022',
      description: [
        'Conducted research on machine learning algorithms and data analysis',
        'Implemented prototypes using Python and various ML libraries',
        'Presented findings to research team and contributed to academic publications',
        'Collaborated with graduate students on research projects'
      ]
    }
  ];