'use server';

import nodemailer from 'nodemailer';

interface MailOptions {
  to: string;
  subject: string;
  text: string;
  html: string;
  replyTo?: string;
}

async function sendEmailWithResend({ to, subject, text, html, replyTo }: MailOptions) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !from) {
    console.error('Resend configuration is missing (RESEND_API_KEY / RESEND_FROM_EMAIL). Email not sent.');
    throw new Error('Server email configuration is incomplete.');
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to,
      subject,
      html,
      text,
      reply_to: replyTo,
    }),
  });

  if (!response.ok) {
    const payload = await response.text().catch(() => '');
    console.error('Resend failed to send email:', response.status, payload);
    throw new Error('Failed to send email via Resend.');
  }
}

async function sendEmailWithSmtp({ to, subject, text, html, replyTo }: MailOptions) {
  if (
    !process.env.SMTP_HOST ||
    !process.env.SMTP_PORT ||
    !process.env.SMTP_USER ||
    !process.env.SMTP_PASS ||
    !process.env.SMTP_FROM_EMAIL
  ) {
    console.error('SMTP configuration is missing (SMTP_*). Email not sent.');
    // This error is for the developer, not the user.
    // The user will see a generic "failed to send" message from the server action.
    throw new Error('Server email configuration is incomplete.');
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: `"${process.env.SMTP_FROM_NAME || 'Muiz Adesope'}" <${process.env.SMTP_FROM_EMAIL}>`,
    to,
    replyTo,
    subject,
    text,
    html,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Nodemailer failed to send email:', error);
    throw new Error('Failed to send email via Nodemailer.');
  }
};

export const sendEmail = async (options: MailOptions) => {
  const provider = (process.env.EMAIL_PROVIDER || 'smtp').toLowerCase();

  if (provider === 'resend') {
    return sendEmailWithResend(options);
  }

  return sendEmailWithSmtp(options);
};
