// pages/api/submitForm.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method not allowed
  }

  const { name, email, subject, message } = req.body;

  // Configure the transporter
  const transporter = nodemailer.createTransport({
    service: 'your-email-service', // E.g., Gmail, SendGrid, etc.
    auth: {
      user: 'your-email@example.com',
      pass: 'your-email-password',
    },
  });

  // Create the email content
  const mailContent = {
    from: 'your-email@example.com',
    to: 'recipient@example.com',
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailContent);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Email sending failed' });
  }
}
