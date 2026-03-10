import { NextResponse } from "next/server";
import { siteConfig } from "@/content/site.config";
import { getTransporter } from "@/lib/mailer";

type WorkshopInterestPayload = {
  fullName?: string;
  businessOrOccupation?: string;
  industry?: string;
  email?: string;
  phoneNumber?: string;
  digitalChallenge?: string;
  companySize?: string;
  freeConsultation?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as WorkshopInterestPayload;

  if (!body.fullName || !body.businessOrOccupation || !body.industry || !body.email) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const transporter = getTransporter();
  const receiver = siteConfig.bookingsEmail;
  const sender = process.env.SMTP_FROM || "no-reply@massinmapani.com";

  if (!transporter) {
    console.log("[TODO:SMTP] Workshop interest submission", body);
    return NextResponse.json({ ok: true, mode: "console" });
  }

  try {
    await transporter.sendMail({
      to: receiver,
      from: sender,
      subject: `Workshop expression of interest from ${body.fullName}`,
      replyTo: body.email,
      text:
        `Full name: ${body.fullName}\n` +
        `Business name/occupation: ${body.businessOrOccupation}\n` +
        `Industry: ${body.industry}\n` +
        `Email: ${body.email}\n` +
        `Phone number: ${body.phoneNumber || "N/A"}\n` +
        `Company size: ${body.companySize || "N/A"}\n` +
        `Free consultation: ${body.freeConsultation || "N/A"}\n\n` +
        `Digital challenge:\n${body.digitalChallenge || "N/A"}`
    });
  } catch (error) {
    console.error("[SMTP_ERROR]", error);
    return NextResponse.json({ error: "Email delivery failed" }, { status: 500 });
  }

  return NextResponse.json({ ok: true, mode: "smtp" });
}
