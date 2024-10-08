import React from "react";

const projectsData = [
    {
        title: "Moonbeam",
        description: "Never write from scratch again. Kickstart your next great writing piece with Moonbeam. Your long-form writing AI assistant.",
        technologies: ["Front-end", "GPT-3", "Next.js", "React", "TailwindCSS", "Chrome Extension"],
        imageUrl: "https://via.placeholder.com/150", // Replace with your image URLs
        link: "https://www.google.com" // Add a link property
    },
    {
        title: "Aceternity",
        description: "Building modern applications that scale well and are easy to maintain. Cutting edge websites with a pinch of magic, and a lot of love.",
        technologies: ["Next.js", "React", "TailwindCSS", "Full-Stack"],
        imageUrl: "https://via.placeholder.com/150",
        link: "https://www.google.com" // Add a link property
    },
    {
        title: "Algochurn",
        description: "Practice the most popular algorithmic questions and Front-end interview questions with an interactive IDE and learning environment.",
        technologies: ["Next.js", "React", "TailwindCSS", "Monaco", "Algorithms"],
        imageUrl: "https://via.placeholder.com/150",
        link: "https://www.google.com" // Add a link property
    },
    {
        title: "Tailwind Master Kit",
        description: "Beautiful, Handcrafted, ready-to-use components and templates for your next Tailwind web app project.",
        technologies: ["Tailwind", "Next.js", "Freemium"],
        imageUrl: "https://via.placeholder.com/150",
        link: "https://www.google.com" // Add a link property
    },
];

const Projects = () => {
    return (
        <div className="max-w-4xl mx-auto p-8">
            <h2 className="text-3xl font-bold mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projectsData.map((project, index) => (
                    <a 
                        key={index} 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg flex p-6 transition-transform transform hover:scale-105"
                    >
                        <div className="flex-1">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                            <p className="mt-2 text-gray-600 dark:text-gray-300">{project.description}</p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {project.technologies.map((tech, techIndex) => (
                                    <span key={techIndex} className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium px-2.5 py-0.5 rounded">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="ml-4">
                            <img src={project.imageUrl} alt={project.title} className="h-32 w-32 object-cover rounded-lg" />
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Projects;
