import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGithub, FaGitAlt, FaFigma } from 'react-icons/fa';
import { SiTypescript, SiPostgresql, SiMongodb, SiFlutter } from 'react-icons/si';
import { RiTailwindCssFill } from "react-icons/ri";

const Skills = () => {
  const skills = [
    { Icon: FaHtml5, label: 'HTML5', color: 'text-orange-600', bgColor: 'bg-orange-200', darkBgColor: 'bg-orange-800' },
    { Icon: FaCss3Alt, label: 'CSS3', color: 'text-blue-600', bgColor: 'bg-blue-200', darkBgColor: 'bg-blue-800' },
    { Icon: FaJsSquare, label: 'JavaScript', color: 'text-yellow-600', bgColor: 'bg-yellow-200', darkBgColor: 'bg-yellow-800' },
    { Icon: SiTypescript, label: 'TypeScript', color: 'text-blue-600', bgColor: 'bg-blue-200', darkBgColor: 'bg-blue-800' },
    { Icon: FaReact, label: 'React.js', color: 'text-cyan-600', bgColor: 'bg-cyan-200', darkBgColor: 'bg-cyan-800' },
    { Icon: FaGithub, label: 'GitHub', color: 'text-black', bgColor: 'bg-gray-200', darkBgColor: 'bg-gray-700' },
    { Icon: FaGitAlt, label: 'Git', color: 'text-orange-600', bgColor: 'bg-orange-200', darkBgColor: 'bg-orange-800' },
    { Icon: SiMongodb, label: 'MongoDB', color: 'text-green-600', bgColor: 'bg-green-200', darkBgColor: 'bg-green-800' },
    { Icon: SiPostgresql, label: 'PostgreSQL', color: 'text-blue-600', bgColor: 'bg-blue-200', darkBgColor: 'bg-blue-800' },
  ];

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map(({ Icon, label, color, bgColor, darkBgColor }, index) => (
          <div key={index} className={`flex flex-col items-center p-5 rounded-lg shadow-md transition-transform transform hover:scale-105 ${bgColor} dark:${darkBgColor} text-black dark:text-white`}>
            <Icon className={`text-5xl mb-2 ${color}`} />
            <span className="text-lg font-medium">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
