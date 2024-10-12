import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGithub, FaGitAlt, FaNodeJs  } from 'react-icons/fa';
import { SiTypescript, SiPostgresql, SiMongodb, SiExpress,SiPostman,SiAppwrite  } from 'react-icons/si';


const Skills = () => {
  const skills = [
    { Icon: FaHtml5, label: 'HTML5', color: 'text-orange-600', bgColor: 'bg-orange-100', darkBgColor: 'bg-orange-700' },
    { Icon: FaCss3Alt, label: 'CSS3', color: 'text-blue-600', bgColor: 'bg-blue-100', darkBgColor: 'bg-blue-700' },
    { Icon: FaJsSquare, label: 'JavaScript', color: 'text-yellow-600', bgColor: 'bg-yellow-100', darkBgColor: 'bg-yellow-700' },
    { Icon: FaNodeJs, label: 'NodeJs', color: 'text-lime-700', bgColor: 'bg-lime-200', darkBgColor: 'bg-lime-800' },
    { Icon: SiExpress, label: 'ExpressJs', color: 'text-gray-600', bgColor: 'bg-gray-200', darkBgColor: 'bg-gray-800' },
    { Icon: FaReact, label: 'React.js', color: 'text-cyan-600', bgColor: 'bg-cyan-100', darkBgColor: 'bg-cyan-700' },
    { Icon: FaGithub, label: 'GitHub', color: 'text-black', bgColor: 'bg-gray-100', darkBgColor: 'bg-gray-800' },
    { Icon: FaGitAlt, label: 'Git', color: 'text-orange-600', bgColor: 'bg-orange-100', darkBgColor: 'bg-orange-700' },
    { Icon: SiTypescript, label: 'TypeScript', color: 'text-indigo-600', bgColor: 'bg-indigo-100', darkBgColor: 'bg-indigo-700' },
    { Icon: SiMongodb, label: 'MongoDB', color: 'text-green-600', bgColor: 'bg-green-100', darkBgColor: 'bg-green-700' },
    { Icon: SiPostgresql, label: 'PostgreSQL', color: 'text-blue-600', bgColor: 'bg-sky-100', darkBgColor: 'bg-sky-700' },
    { Icon: SiPostman, label: 'Postman', color: 'text-orange-600', bgColor: 'bg-orange-100', darkBgColor: 'bg-orange-700' },
    { Icon: SiAppwrite, label: 'Appwrite', color: 'text-pink-600', bgColor: 'bg-pink-100', darkBgColor: 'bg-pink-700' },
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
