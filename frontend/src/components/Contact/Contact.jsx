import { motion } from 'framer-motion'; // Import motion for animations
import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null); 
    const [success, setSuccess] = useState(null); 

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post('https://professional-portfolio-ten-fawn.vercel.app/send-email', { email });
    
            if (response.status === 200) {
                console.log("Email submitted:", email);
                setSuccess('Email sent successfully!'); 
                setError(null); 
            }
        } catch (err) {
            console.error('Error sending email:', err);
            setError('Failed to send email. Please try again.'); 
            setSuccess(null); 
        }
    
        setEmail(''); 
    };
    

    return (
        <div className='max-w-4xl mx-auto p-8'>
            <motion.div 
                className="border border-blue-200 rounded-lg my-4 dark:border-gray-800 bg-blue-50 dark:bg-blue-900 shadow-lg p-6"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5 }} 
            >
                <h5 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    Contact Us
                </h5>
                
                <div className="border border-gray-200 dark:border-gray-600 w-full mb-5"></div>
                
                <p className="my-2 text-gray-800 dark:text-gray-200">
                    Drop in your email ID and I will get back to you.
                </p>
                
                {/* Display success or error messages */}
                {success && <p className="text-green-600">{success}</p>}
                {error && <p className="text-red-600">{error}</p>}
                
                <form className="relative my-4" onSubmit={handleSubmit}>
                    <input
                        aria-label="Email for newsletter"
                        placeholder="virender288@gmail.com"
                        type="email"
                        autoComplete="email"
                        required
                        value={email}
                        onChange={handleEmailChange}
                        className="px-4 py-3 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-gray-300 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition duration-200 ease-in-out shadow-sm"
                    />
                    <button
                        className="flex items-center justify-center absolute right-1 top-1 px-4 font-bold h-10 bg-blue-500 dark:bg-blue-600 text-white rounded-md shadow hover:bg-blue-600 dark:hover:bg-blue-700 transition duration-200 ease-in-out"
                        type="submit"
                    >
                        Send
                    </button>
                </form>
            </motion.div>
        </div>
    );
};

export default Contact;
