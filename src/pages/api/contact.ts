import type { APIRoute } from 'astro';

interface ContactFormData {
  email: string;
  message: string;
  timestamp: string;
}

export const POST: APIRoute = async ({ request }) => {
  // Only accept POST requests
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const data: ContactFormData = await request.json();

    // Validate input
    if (!data.email || !data.message) {
      return new Response(
        JSON.stringify({ error: 'Email and message are required' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email address' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // TODO: Integrate with Wix email service or your email provider
    // For now, we'll log the contact form submission
    console.log('Contact form submission:', {
      email: data.email,
      message: data.message,
      timestamp: data.timestamp,
    });

    // TODO: Send email to admin
    // TODO: Store in Wix database/collection if needed

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Your message has been received. We will get back to you soon.',
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(
      JSON.stringify({ error: 'An error occurred while processing your request' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
