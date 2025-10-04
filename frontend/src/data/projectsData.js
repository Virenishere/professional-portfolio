import pawanComputerCenterImage from '../assets/pcc.png';
import buildYourBuzzImage from '../assets/bbz.png';
import coinLoreImage from '../assets/cl.png';
import farmer2BuyerImage from '../assets/f2b.png';

export const projectsData = [
  {
    id: 1,
    title: "BuildFolio",
    description: "AI-powered resume builder with TypeScript backend and Cerebras LLM integration; frontend in progress using React and Tailwind CSS.",
    longDescription: "An intelligent resume builder that leverages AI to help users create professional resumes. Built with a scalable TypeScript backend and integrated with Cerebras LLM for smart content suggestions.",
    technologies: ["TypeScript", "Node.js", "React", "Tailwind CSS", "Zustand", "Framer Motion", "Cerebras LLM", "Python"],
    link: "https://buildfolio-demo.com",
    github: "https://github.com/yourusername/buildfolio",
    category: "Full Stack",
    featured: true,
    status: "In Progress",
    startDate: "2024-12",
    endDate: "Present"
  },
  {
    id: 2,
    title: "BrainPin",
    description: "Full-stack pinboard app to save, organize, and manage links/media; built with React, TypeScript, Node.js, and MongoDB.",
    longDescription: "A comprehensive pinboard application for organizing and managing digital content. Features responsive design, dark/light mode, and secure authentication with smooth animations.",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Express", "Tailwind CSS", "Zustand", "Framer Motion", "Radix UI", "JWT", "Zod", "bcryptjs"],
    link: "https://brainpin-demo.com",
    github: "https://github.com/yourusername/brainpin",
    category: "Full Stack",
    featured: true,
    status: "Live",
    startDate: "2024-10",
    endDate: "2024-12"
  },
  {
    id: 3,
    title: "Website Builder Platform",
    description: "A comprehensive website builder similar to Wix/WordPress with drag-and-drop functionality, rich text editor, and custom HTML/CSS embedding.",
    longDescription: "Advanced website builder platform enabling users to create professional websites from scratch. Features infinite nested divs, draggable/resizable elements, and custom code integration.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Zustand", "Framer Motion", "RnD"],
    link: "#",
    github: "#",
    category: "Full Stack",
    featured: true,
    status: "In Development",
    startDate: "2025-08",
    endDate: "Present"
  },
  {
    id: 4,
    title: "Text-to-Image Canvas App",
    description: "Interactive image generation platform with LLM API integration, canvas-based editing tools, and real-time rendering capabilities.",
    longDescription: "Sophisticated image generation application with advanced editing tools including background editing, human enhancement, upscaling, and style switching.",
    technologies: ["Next.js", "TypeScript", "shadcnUI", "Zustand", "TanStack Query", "Clerk", "DynamoDB", "SDXL API"],
    link: "https://image-pipeline-demo.com",
    github: "#",
    category: "Frontend",
    featured: false,
    status: "Live",
    startDate: "2025-01",
    endDate: "2025-04"
  }
];

export const projectCategories = ['All', 'Full Stack', 'Frontend', 'Backend'];