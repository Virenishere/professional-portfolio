import React, { useEffect, useState } from "react"; // Import useEffect and useState
import { Element } from "react-scroll"; // Import Element from react-scroll
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import About from "../About/About";

const Home = () => {
    const [darkMode, setDarkMode] = useState(false); // Manage dark mode state

    // Function to toggle dark mode
    const toggleDarkMode = () => {
        setDarkMode((prevMode) => {
            const newMode = !prevMode;
            localStorage.setItem("darkMode", newMode);
            return newMode;
        });
    };

    useEffect(() => {
        const savedMode = localStorage.getItem("darkMode");
        if (savedMode === "true") {
            setDarkMode(true);
        }
    }, []);

    return (
        <div className={`bg-white dark:bg-[#18181B] text-black dark:text-white ${darkMode ? "dark" : ""}`}>
            <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
            {/* Wrap sections with Element for scrolling */}
            <Element name="header">
                <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
            </Element>
            <Element name="skills">
                <Skills toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
            </Element>
            <Element name="projects">
                <Projects toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
            </Element>
            <Element name="about">
                <About toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
            </Element>
            <Element name="contact">
                <Contact toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
            </Element>
            <Footer toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        </div>
    );
};

export default Home;
