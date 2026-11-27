# BioShift Complete Setup Guide

## Quick Start (5 Minutes)

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Environment Variables

Create `.env.local` file:
```bash
cp .env.local.example .env.local
```

Edit `.env.local` with your Resend credentials:
```env
RESEND_API_KEY=re_your_actual_key_here
RESEND_FROM_EMAIL=your@domain.com
```

### 3. Get Resend API Key

1. Sign up at [resend.com](https://resend.com)
2. Go to [API Keys](https://resend.com/api-keys)
3. Create a new API key
4. Copy and paste into `.env.local`

### 4. Verify Sending Domain

1. Go to [Domains](https://resend.com/domains)
2. Add and verify your domain
3. Or use `onboarding@resend.dev` for testing

### 5. Update Contact Emails

Edit `app/api/demo/route.ts` line 118:
```typescript
to: [
    "your-email@example.com",
    "another-email@example.com",
],
```

### 6. Start Development Server

```bash
npm run dev
```

Visit http://localhost:3000

### 7. Test the Form

1. Click "Request a demo" button
2. Fill out the form
3. Check your inbox for the email

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import on [Vercel](https://vercel.com/new)
3. Add environment variables
4. Deploy!

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment guides.

## Troubleshooting

### Build Errors

If you encounter font loading errors:
- The project uses CDN fonts as fallback
- If you have stable internet, you can re-enable next/font in `app/layout.tsx`

### Form Not Working

- Check `.env.local` exists and has correct values
- Verify Resend API key is active
- Ensure sender email is verified

### More Help

See documentation:
- [README.md](./README.md) - Main documentation
- [TAILWIND_MIGRATION.md](./TAILWIND_MIGRATION.md) - Styling guide
- [CHANGES_SUMMARY.md](./CHANGES_SUMMARY.md) - Recent changes

## Contact

- Email: isam.ahmedh8@gmail.com
- Email: henok3095@gmail.com
