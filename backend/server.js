const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const helmet = require('helmet');
const cors = require('cors');

const PORT = 500;
const app = express();

const corsOptions = {
    origin: "",
    method: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
};

//Middleware
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(helmet());


app.post('/send-email', async(req,res)=>{
    const {email} = req.body;

    if(!email){
        return res.status(400).send('All fields are required');
    }

    //configure the transporter for sending email using Nodemailer
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    //Email options
    const mailOptions = {
        from: email, 
        to:process.env.EMAIL_USER,
        subject: `Contact Form Portfolio`,
        text: `You have recieved a new message from your contact form and the mail is: ${email}`,
    };
    try{
        await transporter.sendMail(mailOptions);
        console.log('Email sent sucessfully');
        return res.status(200).send("Email sent secessfully");
    }catch(error){
        console.error('Error sending email:', error);
        return res.status(500).send('Error sending email');
    }
});

app.listen(PORT, ()=>{
    console.log(`Server is running at port ${PORT}`);
})