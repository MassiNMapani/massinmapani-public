import { NextResponse } from "next/server";
import { siteConfig } from "@/content/site.config";
import { getTransporter } from "@/lib/mailer";

type ContactPayload = {
  name?: string;
  email?: string;
  organization?: string;
  reason?: string;
  budgetRange?: string;
  timeline?: string;
  message?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as ContactPayload;

  if (!body.name || !body.email || !body.message) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const transporter = getTransporter();
  const receiver = process.env.CONTACT_RECEIVER_EMAIL || siteConfig.bookingsEmail;
  const sender = process.env.SMTP_FROM || "no-reply@massinmapani.com";

  if (!transporter) {
    console.log("[TODO:SMTP] Contact form message", body);
    return NextResponse.json({ ok: true, mode: "console" });
  }

  try {
    await transporter.sendMail({
      to: receiver,
      from: sender,
      subject: `New inquiry from ${body.name}`,
      replyTo: body.email,
      text: `Name: ${body.name}\nEmail: ${body.email}\nOrganization: ${body.organization || "N/A"}\nReason: ${body.reason || "N/A"}\nBudget range: ${body.budgetRange || "N/A"}\nTimeline: ${body.timeline || "N/A"}\n\n${body.message}`
    });
  } catch (error) {
    console.error("[SMTP_ERROR]", error);
    return NextResponse.json({ error: "Email delivery failed" }, { status: 500 });
  }

  return NextResponse.json({ ok: true, mode: "smtp" });
}
