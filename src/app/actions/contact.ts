'use server';

export interface ContactFormState {
  success: boolean;
  error: string | null;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function sendContactEmail(
  formData: FormData,
): Promise<ContactFormState> {
  const name = (formData.get('name') as string | null)?.trim() ?? '';
  const email = (formData.get('email') as string | null)?.trim() ?? '';
  const message = (formData.get('message') as string | null)?.trim() ?? '';

  if (!name || !email || !message) {
    return { success: false, error: 'All fields are required.' };
  }
  if (!isValidEmail(email)) {
    return { success: false, error: 'Please enter a valid email address.' };
  }
  if (message.length < 10) {
    return { success: false, error: 'Message must be at least 10 characters.' };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // In development without a key, log and simulate success so devs can test the UI.
    console.log('[Contact Form] No RESEND_API_KEY set. Simulating success.');
    console.log({ name, email, message });
    return { success: true, error: null };
  }

  try {
    const { Resend } = await import('resend');
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: 'Himachal Temples Contact <contact@himachaltemples.in>',
      to: 'hello@himachaltemples.in',
      replyTo: email,
      subject: `Message from ${name} via Himachal Temples`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return { success: true, error: null };
  } catch {
    return { success: false, error: 'Failed to send message. Please try again later.' };
  }
}
