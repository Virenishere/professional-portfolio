import React, { useState } from 'react';
import { skillsData, skillCategories } from '../../data/skillsData';

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredSkills = selectedCategory === 'All' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === selectedCategory);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
          Skills
        </h2>
      </div>

      {/* Category Filter - Compact */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {skillCategories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-3 py-1 text-sm rounded font-medium transition-colors duration-200 ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Compact Skills List */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
        {filteredSkills.map((skill) => (
          <div
            key={skill.id}
            className="flex flex-col items-center p-2 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            title={skill.label}
          >
            <skill.Icon className={`text-2xl ${skill.color} mb-1`} />
            <span className="text-xs font-medium text-center text-gray-700 dark:text-gray-300 truncate w-full">
              {skill.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
