import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string().min(3),
  message: z.string().min(10),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate request body
    const validatedData = contactSchema.parse(body);

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Atlas Lisan <onboarding@resend.dev>', // Replace with your verified domain
      to: [process.env.CONTACT_EMAIL || 'info@atlaslisan.com'],
      subject: `Yeni İletişim Formu: ${validatedData.subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(to right, #3b82f6, #8b5cf6, #ec4899); padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
              .header h1 { color: white; margin: 0; font-size: 24px; }
              .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #6b7280; font-size: 12px; text-transform: uppercase; margin-bottom: 5px; }
              .value { background: white; padding: 15px; border-radius: 8px; border: 1px solid #e5e7eb; }
              .footer { text-align: center; margin-top: 30px; color: #9ca3af; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>🌐 Yeni İletişim Formu</h1>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">İsim Soyisim</div>
                  <div class="value">${validatedData.name}</div>
                </div>

                <div class="field">
                  <div class="label">Email</div>
                  <div class="value">
                    <a href="mailto:${validatedData.email}">${validatedData.email}</a>
                  </div>
                </div>

                ${validatedData.phone ? `
                <div class="field">
                  <div class="label">Telefon</div>
                  <div class="value">
                    <a href="tel:${validatedData.phone}">${validatedData.phone}</a>
                  </div>
                </div>
                ` : ''}

                <div class="field">
                  <div class="label">Konu</div>
                  <div class="value">${validatedData.subject}</div>
                </div>

                <div class="field">
                  <div class="label">Mesaj</div>
                  <div class="value">${validatedData.message.replace(/\n/g, '<br>')}</div>
                </div>
              </div>
              <div class="footer">
                <p>Bu mesaj Atlas Lisan web sitesi iletişim formundan gönderilmiştir.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Email gönderilemedi', details: error },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email başarıyla gönderildi', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Geçersiz form verileri', details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Bir hata oluştu' },
      { status: 500 }
    );
  }
}
