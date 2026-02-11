'use server'

import { z } from 'zod'
import { sendEmail } from '@/lib/email';
import { getAdminNotificationEmail, getUserConfirmationEmail } from '@/lib/email-templates';
import { personalData } from '@/lib/portfolio-data';

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

type ContactFormState = {
  success: boolean
  message?: string
}

export async function sendContactEmail(formData: z.infer<typeof contactSchema>): Promise<ContactFormState> {
  const parsedData = contactSchema.safeParse(formData)

  if (!parsedData.success) {
    const errorMessage = parsedData.error.issues.map(issue => issue.message).join(' ');
    return { success: false, message: errorMessage || 'Invalid form data.' }
  }

  const { name, email } = parsedData.data

  try {
    // Prepare emails
    const adminEmail = getAdminNotificationEmail({ formData: parsedData.data, adminName: personalData.name });
    const userEmail = getUserConfirmationEmail({ userName: name, adminName: personalData.name });

    // Send email to admin
    await sendEmail({
      to: personalData.email,
      subject: adminEmail.subject,
      html: adminEmail.html,
      text: adminEmail.text,
    });
    
    // Send confirmation email to user
    await sendEmail({
      to: email,
      subject: userEmail.subject,
      html: userEmail.html,
      text: userEmail.text,
    });

    return { success: true }
  } catch (error) {
    console.error("Error in sendContactEmail action:", error);
    return { success: false, message: 'There was a problem sending your message. Please try again later.' }
  }
}
