import { EmailTemplate } from "@/components/email/email-template";
import { Resend } from "resend";
import * as React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json(
        { error: "Please fill out all fields." },
        { status: 400 },
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["kam.graf0@gmail.com"],
      replyTo: email,
      subject: `New message from ${name}`,
      react: React.createElement(EmailTemplate, { name, email, message }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json(
      { error: { message: error instanceof Error ? error.message : "Unknown error" } },
      { status: 500 },
    );
  }
}
