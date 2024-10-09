require('dotenv').config();
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const helmet = require('helmet');
const cors = require('cors');

const PORT = process.env.PORT || 5000;
const app = express();

// CORS configuration
const corsOptions = {
    origin: [
        "https://professional-portfolio-frontend-nine.vercel.app"],
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
    credentials: true,
};

// Middleware setup
app.use(cors(corsOptions)); // CORS should be the first middleware
app.use(bodyParser.json());
app.use(helmet());

// Test route to verify server is working
app.get('/', (req, res) => {
    res.send('Welcome to the Email Service API!');
});

// Email sending route
app.post('/send-email', async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: 'Email is required' });
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: email, // sender address
        to: process.env.EMAIL_USER, // list of receivers
        subject: `Contact Form Submission`, // Subject line
        text: `You have received a new message from your contact form: ${email}`, // plain text body
    };

    try {
        await transporter.sendMail(mailOptions);
        return res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ message: 'Error sending email' });
    }
});

// Enable preflight for the send-email route
app.options('/send-email', cors(corsOptions)); // Handle preflight requests

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});
