import React from 'react';

const About = () => {
    return (
        <div className="max-w-4xl mx-auto p-8">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">
                About
            </h1>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    Work Experience
                </h2>

                <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300">
                        Freelance Web Developer
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                        Remote
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                        July 2024 - Present
                    </p>
                </div>
                
                {/* Horizontal line after Freelance Web Developer */}
                <hr className="my-4 border-gray-300 dark:border-gray-600" />
                
                <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300">
                        Technical Support Engineer (Adobe)      
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                        Teleperformance
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                        December 2022 - July 2024
                    </p>
                </div>
                
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    Education
                </h2>
                <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300">
                    Govind Ballabh Pant Institute of Engineering & Technology
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                        July 2017 - September 2021
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                    B.Tech (Electronics and Communication Engineering) 
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
