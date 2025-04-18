const express = require('express');
const cors = require('cors');
const AWS = require('aws-sdk');
require('dotenv').config();

const app = express();
app.use(cors({
  origin: 'https://walterhouse.co.za', 
  optionsSuccessStatus: 200
}));
app.use(express.json());

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
  const address = server.address();
  console.log(`Server started successfully`);
  console.log(`Port assigned by system: ${address.port}`);
  if (process.env.NODE_ENV === 'production') {
    console.log(`Server is running in production mode on port ${address.port}`);
  } else {
    console.log(`Server is running at: http://localhost:${address.port}`);
  }
});

// Add error handling
server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use`);
  } else {
    console.error('Server error:', error);
  }
});