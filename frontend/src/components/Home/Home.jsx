import React from "react";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import About from "../About/About";


const Home = ({ toggleDarkMode, darkMode }) => {
    return (
        <div className="bg-white dark:bg-[#18181B] text-black dark:text-white">
            <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} /> 
            <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
            <Skills toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
            <Projects toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
            <About toggleDarkMode={toggleDarkMode} darkMode={darkMode} /> 
            <Contact toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
            <Footer toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
                      
        </div>
    );
};

export default Home;
