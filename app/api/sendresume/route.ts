
import { EmailTemplate } from "./emailtemplate";
import { Resend } from "resend";
import * as React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { fullName, email, phone, position, cvFile, coverLetter } = await request.json();
        const { data, error } = await resend.emails.send({
            from: process.env.SENDER_EMAIL || "anna@songstark.com",
            to: process.env.RECEIVER_EMAIL?.split(",") || "anna@songstark.com",
            subject: "Contact from Songstark Rwanda website",
            react: await EmailTemplate({ fullName, email, phone, position, cvFile: `${process.env.APP_URL}${cvFile}`, coverLetter }) as React.ReactElement,
        });

        if (error) {
            return Response.json({ error, message: "Error sending email" }, { status: 500 });
        }

        return Response.json({ data });
    } catch (error) {
        return Response.json({ error, message: "Error sending email" }, { status: 500 });
    }
}
