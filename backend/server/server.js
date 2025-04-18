const express = require('express');
const cors = require('cors');
const AWS = require('aws-sdk');
require('dotenv').config();

const app = express();

// Increase payload size limits
app.use(express.json({limit: '1mb'}));
app.use(express.urlencoded({limit: '1mb', extended: true}));

// Configure CORS with proper headers
app.use(cors({
  origin: 'https://walterhouse.co.za',
  optionsSuccessStatus: 200,
  methods: ['POST'],
  allowedHeaders: ['Content-Type'],
  maxAge: 86400 // 24 hours in seconds
}));

// Configure AWS
AWS.config.update({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const ses = new AWS.SES({ apiVersion: '2010-12-01' });

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  const params = {
    Source: process.env.FROM_EMAIL, // Your verified SES email
    Destination: {
      ToAddresses: [process.env.TO_EMAIL] // Where you want to receive the emails
    },
    Message: {
      Subject: {
        Data: `Portfolio Contact Form: Message from ${name}`
      },
      Body: {
        Text: {
          Data: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        }
      }
    }
  };

  try {
    await ses.sendEmail(params).promise();
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});


const PORT = process.env.PORT || 0;
const server = app.listen(PORT, () => {
  console.log('Server started successfully');
  console.log(`Environment: ${process.env.NODE_ENV}`);
  
  // Only try to log port details in development
  if (process.env.NODE_ENV !== 'production') {
    const address = server.address();
    console.log(`Development server running at: http://localhost:${address.port}`);
  } else {
    console.log('Production server running');
  }
});

// Simplified error handling
server.on('error', (error) => {
  console.error('Server error:', error.message);
});