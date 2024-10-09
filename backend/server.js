require('dotenv').config();
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const helmet = require('helmet');
const cors = require('cors');

const PORT = process.env.PORT || 500; // Use PORT from environment
const app = express();

const corsOptions = {
    origin: "https://professional-portfolio-frontend-henna.vercel.app/",
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
    credentials: true, // Allow credentials if needed
};

// Middleware
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(helmet());

app.post('/send-email', async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: 'All fields are required' }); // Return JSON response
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
        text: `You have received a new message from your contact form and the mail is: ${email}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
        return res.status(200).json({ message: "Email sent successfully" }); // Return JSON response
    } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ message: 'Error sending email' }); // Return JSON response
    }
});

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});
