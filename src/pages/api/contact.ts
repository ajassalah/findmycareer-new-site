import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  country?: string;
  interestedIn?: string;
  message?: string;
};

const text = (value: unknown) => (typeof value === "string" ? value.trim() : "");

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const payload = req.body as ContactPayload;
  const name = text(payload.name);
  const email = text(payload.email);
  if (!name || !email) return res.status(400).json({ error: "Name and email are required" });

  const smtpUser = process.env.ZOHO_EMAIL;
  const smtpPassword = process.env.ZOHO_APP_PASSWORD;
  const recipient = process.env.CONTACT_RECIPIENT_EMAIL || smtpUser;
  if (!smtpUser || !smtpPassword || !recipient) {
    return res.status(503).json({ error: "Zoho SMTP is not configured" });
  }

  try {
    const port = Number(process.env.ZOHO_SMTP_PORT || 465);
    const transporter = nodemailer.createTransport({
      host: process.env.ZOHO_SMTP_HOST || "smtp.zoho.eu",
      port,
      secure: port === 465,
      requireTLS: port === 587,
      auth: { user: smtpUser, pass: smtpPassword },
    });

    await transporter.verify();

    const lines = [
      `Name: ${name}`,
      `Email: ${email}`,
      payload.country && `Country: ${text(payload.country)}`,
      payload.phone && `Phone: ${text(payload.phone)}`,
      payload.interestedIn && `Interested in: ${text(payload.interestedIn)}`,
      "",
      text(payload.message),
    ].filter(Boolean).join("\n");

    await transporter.sendMail({
      from: smtpUser,
      to: recipient,
      replyTo: email,
      subject: "New study abroad consultation request",
      text: lines,
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    const smtpError = error as { code?: string; responseCode?: number };
    console.error("Zoho SMTP contact submission failed", {
      code: smtpError.code,
      responseCode: smtpError.responseCode,
    });
    const errorMessage = ["EAUTH", "EENVELOPE"].includes(smtpError.code || "")
      ? "Zoho SMTP authentication failed. Check the Zoho app password."
      : "Zoho SMTP could not send the enquiry. Check the SMTP host and port.";
    return res.status(502).json({ error: errorMessage });
  }
}
