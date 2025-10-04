import React, { useState } from 'react';
import { FiMapPin, FiCalendar, FiBriefcase, FiBookOpen } from 'react-icons/fi';
import { experienceData, educationData } from '../../data/experienceData';

const About = () => {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          About Me
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
          Passionate web developer with a background in technical support, bringing unique problem-solving skills 
          and customer-focused approach to every project.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center gap-4 mb-8">
        {[
          { id: 'experience', label: 'Experience', icon: FiBriefcase },
          { id: 'education', label: 'Education', icon: FiBookOpen }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
              activeTab === tab.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            <tab.icon className="w-5 h-5" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Experience Content */}
      {activeTab === 'experience' && (
        <div className="space-y-6">
          {experienceData.map((experience) => (
            <div
              key={experience.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {experience.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <FiBriefcase className="w-4 h-4" />
                      <span>{experience.company}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FiMapPin className="w-4 h-4" />
                      <span>{experience.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FiCalendar className="w-4 h-4" />
                      <span>{experience.startDate} - {experience.endDate}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    experience.type === 'Full-time' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                  }`}>
                    {experience.type}
                  </span>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {experience.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Education Content */}
      {activeTab === 'education' && (
        <div className="space-y-6">
          {educationData.map((education) => (
            <div
              key={education.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {education.institution}
                  </h3>
                  <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                    {education.degree}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    {education.field}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <FiCalendar className="w-4 h-4" />
                      <span>{education.startDate} - {education.endDate}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FiMapPin className="w-4 h-4" />
                      <span>{education.location}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm font-medium">
                    {education.grade}
                  </span>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {education.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default About;
