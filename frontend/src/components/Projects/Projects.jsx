import React from "react";
import pawanComputerCenterImage from '../../assets/pcc.png';
import buildYourBuzzImage from '../../assets/bbz.png';
import coinLoreImage from '../../assets/cl.png';
import farmer2BuyerImage from '../../assets/f2b.png';


const projectsData = [
    {
        title: "Pawan Computer Center",
        description: "Implemented a secure authentication system and admin dashboard for managing 500+ student records, leveraging MongoDB and Stripe for efficient operations and payment processing.",
        technologies: ["Front-end", "React", "TailwindCSS", "MongoDB", "NodeJs", "ExpressJS"],
        imageUrl: pawanComputerCenterImage, // Replace with your image URLs
        link: "https://pawan-computer-center-h5xa.vercel.app/" // Add a link property
    },
    {
        title: "Build Your Buzz",
        description: "Developed a digital marketing platform using the MERN stack and React Router DOM for smooth navigation, featuring secure user authentication and integrated Nodemailer for effective communication.",
        technologies: ["Front-end", "React", "TailwindCSS", "NodeJs", "ExpressJS"],
        imageUrl: buildYourBuzzImage,
        link: "https://build-your-buzz.vercel.app/" // Add a link property
    },
    {
        title: "Farmer2Buyer",
        description: "Developed a responsive interface for agricultural products, enhancing accessibility across devices while improving user experience through effective DOM navigation during presentations at SIH India.",
        technologies: ["TailwindCSS", "ReactJS"],
        imageUrl: farmer2BuyerImage,
        link: "https://farmers-2-sellers.netlify.app/" // Add a link property
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