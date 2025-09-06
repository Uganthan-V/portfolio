
export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    title: 'Project Alpha',
    description: 'A cutting-edge data visualization tool using D3.js and React, providing real-time analytics for enterprise clients.',
    tags: ['React', 'TypeScript', 'D3.js', 'Node.js', 'TailwindCSS'],
    image: 'https://picsum.photos/seed/alpha/600/400',
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'Project Beta',
    description: 'An e-commerce platform with a custom CMS, built on Next.js for server-side rendering and performance.',
    tags: ['Next.js', 'Stripe', 'GraphQL', 'PostgreSQL', 'Vercel'],
    image: 'https://picsum.photos/seed/beta/600/400',
    githubUrl: '#',
  },
  {
    title: 'Project Gamma',
    description: 'A mobile-first social media application focused on photo sharing with interactive filters and a global feed.',
    tags: ['React Native', 'Firebase', 'Redux', 'Jest', 'CI/CD'],
    image: 'https://picsum.photos/seed/gamma/600/400',
    githubUrl: '#',
    liveUrl: '#',
  },
   {
    title: 'Project Delta',
    description: 'An AI-powered chatbot for customer service, integrated with multiple messaging platforms using Gemini API.',
    tags: ['Python', 'Gemini API', 'Flask', 'Docker', 'Kubernetes'],
    image: 'https://picsum.photos/seed/delta/600/400',
    githubUrl: '#',
    liveUrl: '#',
  },
   {
    title: 'Project Epsilon',
    description: 'A collaborative whiteboard application for remote teams, featuring real-time updates via WebSockets.',
    tags: ['Vue.js', 'WebSockets', 'Canvas API', 'Redis', 'Heroku'],
    image: 'https://picsum.photos/seed/epsilon/600/400',
    githubUrl: '#',
  },
   {
    title: 'Project Zeta',
    description: 'A blockchain-based voting system to ensure transparency and security in online polls and elections.',
    tags: ['Solidity', 'Hardhat', 'Ethers.js', 'IPFS', 'The Graph'],
    image: 'https://picsum.photos/seed/zeta/600/400',
    githubUrl: '#',
    liveUrl: '#',
  },
];

export const SKILLS = [
  'React', 'TypeScript', 'Next.js', 'Node.js', 'Python', 'TailwindCSS',
  'GraphQL', 'Firebase', 'Docker', 'Figma', 'UI/UX Design', 'Agile Methodologies'
];

export const BIO = "I am a passionate frontend developer with a keen eye for design and a love for creating intuitive, dynamic user experiences. With expertise in the modern web stack, I transform complex problems into elegant, efficient solutions. When I'm not coding, I enjoy exploring new technologies and contributing to open-source projects.";

export const SOCIAL_LINKS = {
    github: '#',
    linkedin: '#',
    twitter: '#'
};
