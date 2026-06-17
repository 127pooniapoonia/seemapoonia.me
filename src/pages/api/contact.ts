export const prerender = false;

import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const POST: APIRoute = async ({ request }) => {
  const json = (body: object, status: number) =>
    new Response(JSON.stringify(body), {
      status,
      headers: { 'Content-Type': 'application/json' },
    });

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return json({ error: 'Invalid request body' }, 400);
  }

  const name    = formData.get('name')?.toString().trim() ?? '';
  const email   = formData.get('email')?.toString().trim() ?? '';
  const phone   = formData.get('phone')?.toString().trim() ?? '';
  const message = formData.get('message')?.toString().trim() ?? '';

  if (!name || !email || !message) {
    return json({ error: 'Name, email, and message are required.' }, 400);
  }

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRe.test(email)) {
    return json({ error: 'Invalid email address.' }, 400);
  }

  const apiKey = import.meta.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY is not set');
    return json({ error: 'Server misconfiguration.' }, 500);
  }

  const esc = (s: string) =>
    s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  const html = `
    <p><strong>Name:</strong> ${esc(name)}</p>
    <p><strong>Email:</strong> ${esc(email)}</p>
    ${phone ? `<p><strong>Phone:</strong> ${esc(phone)}</p>` : ''}
    <p><strong>Message:</strong><br/>${esc(message).replace(/\n/g, '<br/>')}</p>
    <hr/>
    <p style="color:#888;font-size:12px">Sent from seemapoonia.me contact form</p>
  `;

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to:   'seema.127poonia@gmail.com',
      reply_to: email,
      subject: `[seemapoonia.me] New message from ${name}`,
      html,
    });
    return json({ success: true }, 200);
  } catch (err) {
    console.error('Resend error:', err);
    return json({ error: 'Failed to send message. Please try again.' }, 500);
  }
};
