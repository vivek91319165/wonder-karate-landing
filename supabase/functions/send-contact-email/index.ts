
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, subject, message }: ContactEmailRequest = await req.json();

    // Validation
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Name, email, and message are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Send email to the karate school (admin notification)
    const adminEmail = await resend.emails.send({
      from: "Wonder Karate <onboarding@resend.dev>",
      to: ["wonderkarate@example.com"], // Replace with your actual email
      subject: `New Contact Form Submission: ${subject || "No Subject"}`,
      html: `
        <h1>New Message from Website Contact Form</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || "No Subject"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // Send confirmation email to the sender
    const userEmail = await resend.emails.send({
      from: "Wonder Karate <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for contacting Wonder Karate Classes",
      html: `
        <h1>Thank you for reaching out!</h1>
        <p>Dear ${name},</p>
        <p>We have received your message and will get back to you as soon as possible.</p>
        <p>Here's a copy of your message:</p>
        <p><strong>Subject:</strong> ${subject || "No Subject"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <p>Best regards,<br>Wonder Karate Classes</p>
      `,
    });

    console.log("Admin email response:", adminEmail);
    console.log("User confirmation email response:", userEmail);

    return new Response(
      JSON.stringify({ message: "Emails sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
