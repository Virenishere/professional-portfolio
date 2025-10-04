import React, { useState } from 'react';
import { 
  FiExternalLink, 
  FiGithub, 
  FiCalendar, 
  FiCode, 
  FiStar, 
  FiArrowRight,
  FiEye,
  FiTrendingUp,
  FiZap
} from 'react-icons/fi';
import * as ProjectData from '../../data/projectsData';

const { projectsData } = ProjectData;

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  
  // Show only first 2 projects initially
  const displayedProjects = showAll ? projectsData : projectsData.slice(0, 2);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Live':
        return 'bg-green-500 text-white';
      case 'In Progress':
        return 'bg-blue-500 text-white';
      case 'In Development':
        return 'bg-yellow-500 text-black';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Live':
        return <FiEye className="w-3 h-3" />;
      case 'In Progress':
        return <FiTrendingUp className="w-3 h-3" />;
      case 'In Development':
        return <FiZap className="w-3 h-3" />;
      default:
        return <FiCode className="w-3 h-3" />;
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-3 text-gray-900 dark:text-white">
          My Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Discover my latest work and creative solutions built with modern technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {displayedProjects.map((project, index) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 overflow-hidden"
          >
            {/* Project Header */}
            <div className="p-6 border-b border-gray-100 dark:border-gray-700">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <FiCode className="text-blue-600 dark:text-blue-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <div className="flex items-center gap-1 mt-1">
                        <FiStar className="text-yellow-500 text-sm" />
                        <span className="text-yellow-600 dark:text-yellow-400 text-xs font-medium">Featured</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                  {getStatusIcon(project.status)}
                  {project.status}
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Project Details */}
            <div className="p-6">
              {/* Timeline */}
              <div className="flex items-center gap-2 mb-4 text-sm text-gray-500 dark:text-gray-400">
                <FiCalendar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="font-medium">{project.startDate} - {project.endDate}</span>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-lg font-medium border border-gray-200 dark:border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-3 py-1 bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-400 text-xs rounded-lg font-medium">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                {project.link && project.link !== '#' && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                  >
                    <FiExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
                {project.github && project.github !== '#' && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white text-sm rounded-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors duration-200 font-medium"
                  >
                    <FiGithub className="w-4 h-4" />
                    Source Code
                  </a>
                )}
                {(!project.link || project.link === '#') && (!project.github || project.github === '#') && (
                  <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-sm rounded-lg font-medium">
                    <FiZap className="w-4 h-4" />
                    Coming Soon
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      {!showAll && projectsData.length > 2 && (
        <div className="text-center">
          <button
            onClick={() => setShowAll(true)}
            className="inline-flex items-center gap-3 px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            <span>See All Projects</span>
            <div className="flex items-center gap-2">
              <span className="text-sm bg-blue-500 px-2 py-1 rounded">
                {projectsData.length - 2}+ more
              </span>
              <FiArrowRight className="w-5 h-5" />
            </div>
          </button>
        </div>
      )}

      {/* Show Less Button */}
      {showAll && (
        <div className="text-center">
          <button
            onClick={() => setShowAll(false)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
          >
            Show Less
            <FiArrowRight className="w-4 h-4 rotate-180" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;