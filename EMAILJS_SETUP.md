# EmailJS Setup Guide for BioShift Landing Page

This guide will help you configure EmailJS to receive demo request emails from your landing page.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **Sign Up** (it's free!)
3. Verify your email address

## Step 2: Add Email Service

1. Go to [Email Services](https://dashboard.emailjs.com/admin/integration)
2. Click **Add New Service**
3. Choose your email provider:
   - **Gmail** (recommended for personal use)
   - **Outlook/Hotmail**
   - **Yahoo**
   - Or any other supported service
4. Click **Connect Account** and authorize EmailJS
5. **Copy the Service ID** (e.g., `service_abc123`)
6. Click **Create Service**

## Step 3: Create Email Template

1. Go to [Email Templates](https://dashboard.emailjs.com/admin/templates)
2. Click **Create New Template**
3. Use this template content:

### Template Name
```
BioShift Demo Request
```

### Subject Line
```
New BioShift Demo Request - {{from_name}}
```

### Content (HTML)
```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; color: #0B2239;">
  
  <div style="background: #0B2239; padding: 24px; border-radius: 8px 8px 0 0;">
    <h1 style="color: #ffffff; margin: 0;">BioShift</h1>
    <p style="color: #F5B301; margin-bottom: 0;">New Demo Request</p>
  </div>
  
  <div style="padding: 24px; border: 1px solid #e5e7eb;">
    
    <h2>Contact Information</h2>
    
    <p><strong>Name:</strong> {{from_name}}</p>
    <p><strong>Company:</strong> {{company}}</p>
    <p><strong>Email:</strong> {{from_email}}</p>
    <p><strong>Phone:</strong> {{phone}}</p>
    
    <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 24px 0;" />
    
    <h2>Message</h2>
    <p style="line-height: 1.7; white-space: pre-wrap;">{{message}}</p>
    
  </div>
  
  <p style="color: #64748b; font-size: 12px; text-align: center; margin-top: 20px;">
    This request was submitted through the BioShift website.
  </p>
  
</div>
```

4. **Important Settings:**
   - **To Email:** Add `henok3095@gmail.com` (and any other emails you want to receive notifications)
   - **From Name:** `{{from_name}}`
   - **Reply To:** `{{from_email}}` (so you can reply directly to the sender)

5. Click **Save**
6. **Copy the Template ID** (e.g., `template_xyz789`)

## Step 4: Get Your Public Key

1. Go to [Account Settings](https://dashboard.emailjs.com/admin/account)
2. Find the **Public Key** section
3. **Copy your Public Key** (e.g., `abcdefghijklmnop`)

## Step 5: Configure Environment Variables

1. Open the `.env.local` file in your project root
2. Replace the placeholder values with your actual EmailJS credentials:

```bash
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123       # From Step 2
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789     # From Step 3
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=abcdefghijklmnop     # From Step 4
```

**Example with real values:**
```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_8h3k9j2
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_demo_bioshift
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=4yX9kJ2nP8mQ5rT7
```

3. Save the file
4. **Restart your development server:**
```bash
npm run dev
```

## Step 6: Test Your Form

1. Open your website
2. Click "Request a demo"
3. Fill out the form
4. Submit
5. Check your email (henok3095@gmail.com)

## Deploying to Vercel

When deploying to Vercel, you need to add the environment variables:

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add these three variables:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
4. Redeploy your site

## EmailJS Free Tier Limits

- ✅ **200 emails per month** (free)
- ✅ No credit card required
- ✅ Works with Vercel subdomains
- ✅ Works with custom domains

## Troubleshooting

### "Email service is not configured" error
- Make sure all three environment variables are set in `.env.local`
- Restart your dev server after changing `.env.local`
- Check for typos in variable names

### Emails not arriving
- Check your EmailJS dashboard for failed emails
- Verify the template has the correct "To Email" address
- Check spam folder
- Verify your EmailJS service is connected properly

### Testing locally
- Form submissions work immediately on `localhost:3000`
- No domain verification needed!

## Support

Need help? Contact:
- EmailJS Support: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- Or reach out to the development team

---

**That's it!** Your demo request form is now ready to receive submissions. 🚀
