import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    
    const { 
      first, email, phone, company, websiteUrl, message,
      _service, _budget, _pages, _quickness 
    } = formData;

    const result = await resend.emails.send({
      from: 'contact@digitalizeplus.com',
      to: 'faizkasman97@gmail.com',
      subject: 'New Website Request Submission',
      html: `
        <h2>New Website Request</h2>
        <h3>Project Details:</h3>
        <p><strong>Service Type:</strong> ${_service}</p>
        <p><strong>Budget Range:</strong> ${_budget}</p>
        <p><strong>Number of Pages:</strong> ${_pages}</p>
        <p><strong>Timeline:</strong> ${_quickness}</p>
        
        <h3>Contact Information:</h3>
        <p><strong>Name:</strong> ${first}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Website:</strong> ${websiteUrl}</p>
        
        <h3>Message:</h3>
        <p>${message}</p>
      `
    });

    if (!result || !result.data?.id) {
      throw new Error('Failed to get valid response from Resend');
    }

    return NextResponse.json(
      { message: 'Email sent successfully', id: result.data.id },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to send email', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
} 