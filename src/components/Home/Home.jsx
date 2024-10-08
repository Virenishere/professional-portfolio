import React from "react";
import Navbar from "../Navbar";
import Header from "../Header/Header";


const Home = ({ toggleDarkMode, darkMode }) => {
    return (
        <div className="bg-white dark:bg-zinc-900/90 text-black dark:text-white">
            <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} /> 
            <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        </div>
    );
};

export default Home;
