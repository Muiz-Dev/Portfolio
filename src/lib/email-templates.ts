
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface AdminEmailProps {
  formData: ContactFormData;
  adminName: string;
}

interface UserEmailProps {
  userName: string;
  adminName: string;
}

// Basic styling for email compatibility
const emailStyles = {
  body: `font-family: 'Inter', Arial, sans-serif; background-color: #f0f0f0; color: #333; line-height: 1.6; padding: 20px;`,
  container: `max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #ddd; border-radius: 8px; padding: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);`,
  header: `font-family: 'Figtree', serif; font-size: 24px; font-weight: bold; color: #2A2734; margin-bottom: 20px; border-bottom: 2px solid #73A3B1; padding-bottom: 10px;`,
  footer: `margin-top: 20px; font-size: 12px; color: #777; text-align: center;`,
  strong: `color: #2A2734; font-weight: 600;`,
  quote: `border-left: 4px solid #73A3B1; padding-left: 15px; margin: 15px 0; font-style: italic; color: #555;`
};

export const getAdminNotificationEmail = ({ formData, adminName }: AdminEmailProps) => {
  const subject = `New Contact Form Submission from ${formData.name}`;
  const html = `
    <body style="${emailStyles.body}">
      <div style="${emailStyles.container}">
        <h1 style="${emailStyles.header}">New Message via Portfolio</h1>
        <p>Hello ${adminName},</p>
        <p>You've received a new message through your portfolio contact form. Here are the details:</p>
        <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
        <p><strong style="${emailStyles.strong}">Name:</strong> ${formData.name}</p>
        <p><strong style="${emailStyles.strong}">Email:</strong> <a href="mailto:${formData.email}" style="color: #73A3B1; text-decoration: none;">${formData.email}</a></p>
        <div>
          <p><strong style="${emailStyles.strong}">Message:</strong></p>
          <div style="${emailStyles.quote}">${formData.message}</div>
        </div>
        <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
        <p>You can reply directly to this user at their provided email address.</p>
        <div style="${emailStyles.footer}">
          <p>This is an automated notification from your portfolio website.</p>
        </div>
      </div>
    </body>
  `;
  const text = `
    New Contact Form Submission
    
    Name: ${formData.name}
    Email: ${formData.email}
    
    Message: 
    ${formData.message}
  `;

  return { subject, html, text };
};

export const getUserConfirmationEmail = ({ userName, adminName }: UserEmailProps) => {
  const subject = `Message Received! Thank you for contacting ${adminName}`;
  const html = `
    <body style="${emailStyles.body}">
      <div style="${emailStyles.container}">
        <h1 style="${emailStyles.header}">Thank You For Your Message!</h1>
        <p>Hi ${userName},</p>
        <p>Thank you for reaching out! This is an automated confirmation to let you know that I've received your message and will get back to you as soon as possible.</p>
        <p>I appreciate you taking the time to connect.</p>
        <br>
        <p>Best regards,</p>
        <p><strong style="${emailStyles.strong}">${adminName}</strong></p>
        <div style="${emailStyles.footer}">
          <p>This is an automated reply. Your message has been successfully delivered.</p>
        </div>
      </div>
    </body>
  `;
  const text = `
    Hi ${userName},

    Thank you for reaching out! This is an automated confirmation to let you know that I've received your message and will get back to you as soon as possible.
    
    Best regards,
    ${adminName}
  `;

  return { subject, html, text };
};
