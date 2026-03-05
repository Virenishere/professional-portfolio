import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGithub, FaGitAlt, FaNodeJs, FaPython, FaDocker, FaLinux, FaAws, FaFigma, FaBrain, FaCloud } from 'react-icons/fa';
import { 
  SiTypescript, 
  SiPostgresql, 
  SiMongodb, 
  SiExpress, 
  SiPostman, 
  SiTailwindcss, 
  SiVite, 
  SiNextdotjs, 
  SiRedis, 
  SiPrisma, 
  SiFirebase, 
  SiVercel, 
  SiFramer, 
  SiVisualstudiocode 
} from 'react-icons/si';

export const skillsData = [
  // Frontend
  {
    id: 1,
    Icon: FaReact,
    label: 'React',
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-100',
    darkBgColor: 'bg-cyan-700',
    category: 'Frontend'
  },
  {
    id: 2,
    Icon: SiNextdotjs,
    label: 'Next.js',
    color: 'text-black',
    bgColor: 'bg-gray-100',
    darkBgColor: 'bg-gray-800',
    category: 'Frontend'
  },
  {
    id: 3,
    Icon: SiTypescript,
    label: 'TypeScript',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    darkBgColor: 'bg-blue-700',
    category: 'Frontend'
  },
  {
    id: 4,
    Icon: FaJsSquare,
    label: 'JavaScript',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100',
    darkBgColor: 'bg-yellow-700',
    category: 'Frontend'
  },
  {
    id: 5,
    Icon: SiTailwindcss,
    label: 'Tailwind CSS',
    color: 'text-teal-600',
    bgColor: 'bg-teal-100',
    darkBgColor: 'bg-teal-700',
    category: 'Frontend'
  },
  {
    id: 6,
    Icon: SiFramer,
    label: 'Framer Motion',
    color: 'text-pink-600',
    bgColor: 'bg-pink-100',
    darkBgColor: 'bg-pink-700',
    category: 'Frontend'
  },
  {
    id: 7,
    Icon: FaReact,
    label: 'Zustand',
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
    darkBgColor: 'bg-orange-700',
    category: 'Frontend'
  },

  // Backend
  {
    id: 8,
    Icon: FaNodeJs,
    label: 'Node.js',
    color: 'text-green-600',
    bgColor: 'bg-green-100',
    darkBgColor: 'bg-green-700',
    category: 'Backend'
  },
  {
    id: 9,
    Icon: SiExpress,
    label: 'Express',
    color: 'text-gray-600',
    bgColor: 'bg-gray-200',
    darkBgColor: 'bg-gray-800',
    category: 'Backend'
  },
  {
    id: 10,
    Icon: SiMongodb,
    label: 'MongoDB',
    color: 'text-green-600',
    bgColor: 'bg-green-100',
    darkBgColor: 'bg-green-700',
    category: 'Database'
  },
  {
    id: 11,
    Icon: SiPostgresql,
    label: 'PostgreSQL',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    darkBgColor: 'bg-blue-700',
    category: 'Database'
  },
  {
    id: 12,
    Icon: SiRedis,
    label: 'Redis',
    color: 'text-red-600',
    bgColor: 'bg-red-100',
    darkBgColor: 'bg-red-700',
    category: 'Database'
  },
  {
    id: 13,
    Icon: FaPython,
    label: 'Python',
    color: 'text-blue-500',
    bgColor: 'bg-blue-100',
    darkBgColor: 'bg-blue-700',
    category: 'Backend'
  },
  {
    id: 14,
    Icon: FaNodeJs,
    label: 'Convex',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-100',
    darkBgColor: 'bg-emerald-700',
    category: 'Backend'
  },

  // Tools
  {
    id: 15,
    Icon: FaGitAlt,
    label: 'Git',
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
    darkBgColor: 'bg-orange-700',
    category: 'Tools'
  },
  {
    id: 16,
    Icon: FaGithub,
    label: 'GitHub',
    color: 'text-black',
    bgColor: 'bg-gray-100',
    darkBgColor: 'bg-gray-800',
    category: 'Tools'
  },
  {
    id: 17,
    Icon: SiPostman,
    label: 'Postman',
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
    darkBgColor: 'bg-orange-700',
    category: 'Tools'
  },
  {
    id: 18,
    Icon: SiVercel,
    label: 'Vercel',
    color: 'text-black',
    bgColor: 'bg-gray-100',
    darkBgColor: 'bg-gray-800',
    category: 'Tools'
  },
  {
    id: 19,
    Icon: SiVisualstudiocode,
    label: 'VS Code',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    darkBgColor: 'bg-blue-700',
    category: 'Tools'
  },
  {
    id: 20,
    Icon: FaFigma,
    label: 'Figma',
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
    darkBgColor: 'bg-purple-700',
    category: 'Tools'
  },

  // Others
  {
    id: 21,
    Icon: SiPrisma,
    label: 'Prisma',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-100',
    darkBgColor: 'bg-indigo-700',
    category: 'Others'
  },
  {
    id: 22,
    Icon: SiFirebase,
    label: 'Firebase',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100',
    darkBgColor: 'bg-yellow-700',
    category: 'Others'
  },
  {
    id: 23,
    Icon: FaDocker,
    label: 'Docker',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    darkBgColor: 'bg-blue-700',
    category: 'DevOps & Infra'
  },
  {
    id: 24,
    Icon: FaLinux,
    label: 'Linux',
    color: 'text-black',
    bgColor: 'bg-gray-100',
    darkBgColor: 'bg-gray-800',
    category: 'DevOps & Infra'
  },
  {
    id: 25,
    Icon: FaAws,
    label: 'AWS',
    color: 'text-orange-500',
    bgColor: 'bg-orange-100',
    darkBgColor: 'bg-orange-700',
    category: 'DevOps & Infra'
  },

  // AI & LLMs
  {
    id: 26,
    Icon: FaBrain,
    label: 'OpenAI (ChatGPT API)',
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
    darkBgColor: 'bg-purple-700',
    category: 'AI & LLMs'
  },
  {
    id: 27,
    Icon: FaBrain,
    label: 'Prompt Engineering',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-100',
    darkBgColor: 'bg-indigo-700',
    category: 'AI & LLMs'
  },
  {
    id: 28,
    Icon: FaBrain,
    label: 'LLM Integration',
    color: 'text-rose-600',
    bgColor: 'bg-rose-100',
    darkBgColor: 'bg-rose-700',
    category: 'AI & LLMs'
  },
  {
    id: 29,
    Icon: FaBrain,
    label: 'AI-powered Analytics',
    color: 'text-teal-600',
    bgColor: 'bg-teal-100',
    darkBgColor: 'bg-teal-700',
    category: 'AI & LLMs'
  },

  // DevOps & Infra extras
  {
    id: 30,
    Icon: FaCloud,
    label: 'GitHub Actions (CI/CD)',
    color: 'text-sky-600',
    bgColor: 'bg-sky-100',
    darkBgColor: 'bg-sky-700',
    category: 'DevOps & Infra'
  },
  {
    id: 31,
    Icon: FaCloud,
    label: 'Hetzner VM Deployment',
    color: 'text-red-500',
    bgColor: 'bg-red-100',
    darkBgColor: 'bg-red-700',
    category: 'DevOps & Infra'
  }
];

export const skillCategories = ['All', 'Frontend', 'Backend', 'Database', 'AI & LLMs', 'DevOps & Infra', 'Tools', 'Others'];