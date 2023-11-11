"use server";

import { Resend } from "resend";

// Initialize Resend with your API Key
const resend = new Resend("re_3ojgKHd6_yVA9Hc5cFzgjggkEHeRgFzvB");

export async function sendEmail(formData: {
  from: string;
  subject: string;
  message: string;
}) {
  try {
    await resend.emails.send({
      //   from: "Acme <contect@smry.ai>",
      //   to: ["contact@smry.ai"],
      from: "Acme <onboarding@resend.dev>",
      to: ["vercelsucks@gmail.com"],
      subject: formData.subject,
      html: formData.message + " from " + formData.from,
    });
    console.log("success")

    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: "Failed to send email" };
  }
}