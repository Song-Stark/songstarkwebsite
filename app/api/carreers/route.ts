import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const fullName = formData.get('fullName');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const position = formData.get('position');
    const coverLetter = formData.get('coverLetter');
    const resume = formData.get('resume');

    if (!fullName || !email || !phone || !position || !coverLetter || !resume) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'smtp',
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    } as nodemailer.TransportOptions);
    const resumeBuffer = Buffer.from(await (resume as File).arrayBuffer());

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Job Application - ${position}`,
      text: `
        Full Name: ${fullName}
        Email: ${email}
        Phone: ${phone}
        Position: ${position}
        Cover Letter: ${coverLetter}
      `,
      attachments: [
        {
          filename: (resume as File).name,
          content: resumeBuffer
        }
      ]
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Application submitted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error processing application:", error);
    return NextResponse.json({ message: "Failed to submit application" }, { status: 500 });
  }
}

