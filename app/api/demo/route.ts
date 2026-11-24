
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

function escapeHtml(value: string) {
    return value.replace(/[&<>"']/g, (char) => {
        const entities: Record<string, string> = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;",
        };

        return entities[char];
    });
}

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const {
            name,
            company,
            email,
            phone,
            message,
            website,
        } = body;

        // Basic spam protection (honeypot)
        if (website) {
            return NextResponse.json({ success: true });
        }

        // Validate required fields
        if (
            typeof name !== "string" ||
            typeof email !== "string" ||
            typeof message !== "string" ||
            !name.trim() ||
            !email.trim() ||
            !message.trim()
        ) {
            return NextResponse.json(
                { error: "Please complete all required fields." },
                { status: 400 }
            );
        }

        if (
            name.length > 100 ||
            email.length > 254 ||
            message.length > 3000 ||
            (typeof company === "string" && company.length > 150) ||
            (typeof phone === "string" && phone.length > 40)
        ) {
            return NextResponse.json(
                { error: "One or more fields exceed the allowed length." },
                { status: 400 }
            );
        }

        const validEmail =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

        if (!validEmail) {
            return NextResponse.json(
                { error: "Please enter a valid email address." },
                { status: 400 }
            );
        }

        const apiKey = process.env.RESEND_API_KEY;
        const fromEmail = process.env.RESEND_FROM_EMAIL;

        if (!apiKey || !fromEmail) {
            console.error("Missing Resend environment variables.");

            return NextResponse.json(
                { error: "Email service is not configured." },
                { status: 500 }
            );
        }

        const resend = new Resend(apiKey);

        const safeName = escapeHtml(name.trim());
        const safeCompany = escapeHtml(
            typeof company === "string" ? company.trim() : ""
        );
        const safeEmail = escapeHtml(email.trim());
        const safePhone = escapeHtml(
            typeof phone === "string" ? phone.trim() : ""
        );
        const safeMessage = escapeHtml(message.trim()).replace(
            /\n/g,
            "<br />"
        );

        const { data, error } = await resend.emails.send({
            from: fromEmail,
            to: [
                "isam.ahmedh8@gmail.com",
                "henok3095@gmail.com",
            ],
            replyTo: email.trim(),
            subject: `New BioShift Demo Request - ${name.trim()}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; color: #0B2239;">

          <div style="background: #0B2239; padding: 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #ffffff; margin: 0;">BioShift</h1>
            <p style="color: #F5B301; margin-bottom: 0;">New Demo Request</p>
          </div>

          <div style="padding: 24px; border: 1px solid #e5e7eb;">

            <h2>Contact Information</h2>

            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Company:</strong> ${safeCompany || "Not provided"}</p>
            <p><strong>Email:</strong> ${safeEmail}</p>
            <p><strong>Phone:</strong> ${safePhone || "Not provided"}</p>

            <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 24px 0;" />

            <h2>Message</h2>
            <p style="line-height: 1.7;">${safeMessage}</p>

          </div>

          <p style="color: #64748b; font-size: 12px; text-align: center;">
            This request was submitted through the BioShift website.
          </p>

        </div>
      `,
            text: `
New BioShift Demo Request

Name: ${name.trim()}
Company: ${typeof company === "string" ? company.trim() : "Not provided"}
Email: ${email.trim()}
Phone: ${typeof phone === "string" ? phone.trim() : "Not provided"}

Message:
${message.trim()}
      `,
        });

        if (error) {
            console.error("Resend error:", error);

            return NextResponse.json(
                { error: "Unable to send your request. Please try again." },
                { status: 500 }
            );
        }

        return NextResponse.json({
            success: true,
            id: data?.id,
            message: "Your demo request has been sent successfully!",
        });
    } catch (error) {
        console.error("Demo request error:", error);

        return NextResponse.json(
            { error: "Something went wrong. Please try again." },
            { status: 500 }
        );
    }
}
