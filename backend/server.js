require('dotenv').config();
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const helmet = require('helmet');
const cors = require('cors');

const PORT = process.env.PORT || 5000; // Use PORT from environment or default to 5000
const app = express();

// CORS configuration
const corsOptions = {
    origin: "https://professional-portfolio-frontend-nine.vercel.app", // Ensure no trailing slash
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
};

// Middleware
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(helmet());

// Log incoming requests (for debugging)
app.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    next();
});

// Handle OPTIONS requests
app.options('/send-email', (req, res) => {
    res.sendStatus(200); // Respond with 200 OK for OPTIONS requests
});

// POST route to send email
app.post('/send-email', async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    // Configure the transporter for sending email using Nodemailer
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    // Email options
    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `Contact Form Portfolio`,
        text: `You have received a new message from your contact form and the email is: ${email}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
        return res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ message: 'Error sending email' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});
