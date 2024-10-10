import React, { createContext, useContext, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home/Home"; 

const App = () => {
  const [darkMode, setDarkMode] = useState(false); 

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
    <div className={`overflow-x-hidden ${darkMode ? "dark" : ""}`}>
      <Routes>
        <Route path="/" element={<Home toggleDarkMode={toggleDarkMode} darkMode={darkMode} />} />
      </Routes>
    </div>
  );
};

export default App;
