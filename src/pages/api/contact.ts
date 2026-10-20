export const prerender = false;

import type { APIRoute } from 'astro';

// Browsers send an Origin header on cross-origin form posts; reject anything
// that isn't this site (or local dev) so the endpoint can't be driven from other sites.
const ALLOWED_HOSTS = new Set([
  'www.seemapoonia.me',
  'seemapoonia.me',
  'localhost',
  '127.0.0.1',
]);

const LIMITS = { name: 100, email: 254, phone: 30, message: 5000 } as const;

export const POST: APIRoute = async ({ request }) => {
  try {
    const origin = request.headers.get('origin');
    if (origin) {
      let host = '';
      try { host = new URL(origin).hostname; } catch { /* invalid origin */ }
      if (!ALLOWED_HOSTS.has(host)) {
        return Response.json({ error: 'Forbidden.' }, { status: 403 });
      }
    }

    const formData = await request.formData();
    const name    = formData.get('name')?.toString().trim() ?? '';
    const email   = formData.get('email')?.toString().trim() ?? '';
    const phone   = formData.get('phone')?.toString().trim() ?? '';
    const message = formData.get('message')?.toString().trim() ?? '';

    // Honeypot filled → bot. Pretend success so it doesn't retry.
    if (formData.get('website')?.toString()) {
      return Response.json({ success: true });
    }

    if (!name || !email || !message) {
      return Response.json({ error: 'Name, email, and message are required.' }, { status: 400 });
    }

    if (
      name.length > LIMITS.name || email.length > LIMITS.email ||
      phone.length > LIMITS.phone || message.length > LIMITS.message
    ) {
      return Response.json({ error: 'One or more fields are too long.' }, { status: 400 });
    }

    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(email)) {
      return Response.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is not set');
      return Response.json({ error: 'Server misconfiguration.' }, { status: 500 });
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

    const { Resend } = await import('resend');
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to:   'seema.127poonia@gmail.com',
      reply_to: email,
      subject: `[seemapoonia.me] New message from ${name.replace(/[\r\n]+/g, ' ')}`,
      html,
    });

    if (error) {
      console.error('Resend error:', error);
      return Response.json({ error: 'Failed to send message. Please try again.' }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error('Contact form error:', err);
    return Response.json({ error: 'Server error. Please try again.' }, { status: 500 });
  }
};
