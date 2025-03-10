import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";


export async function POST(request: NextRequest) {
  try {
  const { name, email, message } = await request.json();
  console.log(name, email, message);


  if (!name || !email || !message) {
    return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.RECEIVER_EMAIL,
    subject: "New contact request from Songstark Website",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
  }
  }

