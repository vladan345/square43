// app/api/send-email/route.js
import nodemailer from "nodemailer";

export async function POST(req) {
  const {
    firstName,
    email,
    message,
    lastName,
    country,
    services,
    budget,
    captchaToken,
  } = await req.json();
  // Validate reCAPTCHA token
  const captchaRes = await fetch(
    `https://www.google.com/recaptcha/api/siteverify`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`,
    }
  );
  const captchaData = await captchaRes.json();

  if (!captchaData.success) {
    console.log(captchaData["error-codes"]);
    return new Response(
      JSON.stringify({ success: false, error: "reCAPTCHA validation failed" }),
      {
        status: 400,
      }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.NOTIFICATION_EMAIL,
    cc: "nikola@nulapps.nl",
    subject: "Square43 Form Submission",
    text: `Name: ${firstName}\nLast name: ${lastName}\nEmail: ${email}\nMessage: ${message}\nCountry: ${country}\nServices: ${services}\nBudget: ${budget}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
