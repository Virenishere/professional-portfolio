import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LuSun, LuMoon } from "react-icons/lu";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi"; 
import { Link } from "react-scroll"; // Import from react-scroll

export default function Navbar({ toggleDarkMode, darkMode }) {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Updated links to match the IDs of sections in Home
    const links = [
        { name: "Home", link: "header" },       // Corresponds to Header component
        { name: "Skills", link: "skills" },      // Corresponds to Skills component
        { name: "Projects", link: "projects" },  // Corresponds to Projects component
        { name: "About", link: "about" },        // Corresponds to About component
        { name: "Contact", link: "contact" },    // Corresponds to Contact component
    ];

    return (
        <nav className="relative sticky-nav flex justify-between items-center max-w-4xl w-full p-8 mx-auto bg-opacity-60">
            <a href="#skip" className="sr-only focus:not-sr-only">Skip to content</a>

            {/* Dark Mode Toggle */}
            <button
                aria-label="Toggle Dark Mode"
                type="button"
                className="group mt-4 rounded-full bg-white/90 p-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-900/90 dark:ring-white/20 dark:hover:ring-teal-500/50"
                onClick={toggleDarkMode}
            >
                {darkMode ? <LuSun className="h-5 w-5" /> : <LuMoon className="h-5 w-5 text-gray-800 dark:text-white" />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden sm:flex space-x-4 justify-center items-center rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-900/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-teal-500/50">
                {links.map((navLink, index) => (
                    <Link
                        key={navLink.name}
                        to={navLink.link}
                        smooth={true}
                        duration={500}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className="relative rounded-xl px-4 py-2 text-sm text-gray-700 transition-all delay-150 hover:text-gray-900"
                    >
                        <AnimatePresence>
                            {hoveredIndex === index && (
                                <motion.span
                                    className="absolute inset-0 rounded-lg bg-gray-100"
                                    layoutId="hoverBackground"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1, transition: { duration: 0.15 } }}
                                    exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                                />
                            )}
                        </AnimatePresence>
                        <span className="relative z-10">{navLink.name}</span>
                    </Link>
                ))}
            </div>

            {/* Hamburger Menu for Mobile */}
            <div className="sm:hidden flex items-center">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="p-2 rounded-md bg-gray-200 dark:bg-gray-800 flex items-center justify-center focus:outline-none"
                >
                    {isMenuOpen ? <HiOutlineX className="h-6 w-6 text-black dark:text-white" /> : <HiOutlineMenu className="h-6 w-6 text-black dark:text-white" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="absolute top-24 left-0 w-full bg-white rounded-lg shadow-lg dark:bg-zinc-900 z-10"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                    >
                        <div className="flex flex-col space-y-2 p-4">
                            {links.map((navLink) => (
                                <Link
                                    key={navLink.name}
                                    to={navLink.link}
                                    smooth={true}
                                    duration={500}
                                    className="block rounded-lg px-4 py-2 text-sm text-gray-700 dark:text-gray-200 transition-all delay-150 hover:text-gray-900 dark:hover:text-gray-900"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {navLink.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
