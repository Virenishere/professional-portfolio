import React from "react";
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"; // You can install react-icons if not already done

const Footer = () => {
  return (
    <footer className="max-w-4xl mx-auto text-gray-200 p-8">
        <hr className="border-gray-700 my-4" />
        <p className="text-center text-gray-400">
          &copy; {new Date().getFullYear()} Virender. All rights reserved.
        </p>
      
    </footer>
  );
};

export default Footer;
