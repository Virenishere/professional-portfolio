import React from "react";
import { Element } from "react-scroll"; // Import Element from react-scroll
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import About from "../About/About";

const Home = ({ toggleDarkMode, darkMode, setActiveSection }) => {
    return (
        <div className="bg-white dark:bg-[#18181B] text-black dark:text-white">
            <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} setActiveSection={setActiveSection} />
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
