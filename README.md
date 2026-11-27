# BioShift Landing Page

A modern, animated landing page for BioShift - a biometric workforce attendance and time management system.

## ✨ Features

- **Sticky Navigation**: Fixed navbar that stays visible while scrolling
- **Professional Animations**: Smooth, staggered animations throughout
- **Dashboard Mockup**: Realistic dashboard window with live interactions
- **Responsive Design**: Mobile-first, works on all screen sizes
- **Tailwind CSS v4**: Modern utility-first CSS framework
- **TypeScript**: Type-safe code
- **Next.js 15**: Latest React framework with App Router

## 🚀 Quick Start

### Install Dependencies
```bash
npm install
```

### Configure EmailJS (Required)
The contact form uses EmailJS. Follow the setup guide:
```bash
# See detailed instructions in EMAILJS_SETUP.md
cp .env.local.example .env.local
# Then edit .env.local with your EmailJS credentials
```

📖 **[Complete EmailJS Setup Guide →](./EMAILJS_SETUP.md)**

### Development Server
```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000) (or 3001 if 3000 is in use)

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

## 🎨 Tech Stack

- **Framework**: Next.js 15.5.29
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Fonts**: Newsreader (serif) + Public Sans (sans-serif)
- **Email**: EmailJS (client-side email service)

## 📁 Project Structure

```
bioshift-landing/
├── app/
│   ├── content.json               # Page content data
│   ├── globals.css                # Tailwind + custom animations
│   ├── layout.tsx                 # Root layout with fonts
│   └── page.tsx                   # Main landing page
├── components/
│   ├── DemoModal.tsx              # Demo request form (EmailJS)
│   ├── DashboardWindow.tsx        # Interactive dashboard mockup
│   ├── HeroSection.tsx            # Hero section component
│   ├── Navbar.tsx                 # Sticky navigation
│   ├── Icon.tsx                   # Icon components
│   └── Logo.tsx                   # Logo component
├── .env.local                     # Environment variables (not in git)
├── .env.local.example             # Example env file
├── postcss.config.js              # PostCSS configuration
├── package.json                   # Dependencies
├── tsconfig.json                  # TypeScript config
├── EMAILJS_SETUP.md               # EmailJS configuration guide
├── TAILWIND_MIGRATION.md          # Tailwind migration guide
└── CHANGES_SUMMARY.md             # Recent changes
```

## 🎯 Key Components

### Sticky Navbar
- Fixed position at top
- Backdrop blur effect
- Smooth hover animations
- Mobile responsive

### Hero Section
- Centered content
- Animated headline with gradient text
- Call-to-action buttons
- Device compatibility note

### Dashboard Window
- macOS-style window chrome
- Live indicator with pulse animation
- Sidebar navigation
- KPI cards with hover effects
- Interactive bar chart
- Real-time check-ins list

### Feature Sections
- Manual vs BioShift comparison
- Product features grid
- Reliability checklist
- Rollout timeline
- Contact CTA

## 🎨 Custom Theme

### Colors
- Navy: `#0B2239` - Primary brand color
- Amber: `#F5B301` - Accent color
- Ink: `#0F1B2A` - Text color
- Mut: `#4B5B6B` - Muted text
- Line: `#D9E0E7` - Borders
- Slate: `#F1F4F7` - Backgrounds

### Animations
- `slideUpFade` - Entry animation for dashboard
- `pulse-soft` - Subtle pulsing for live indicator
- `shimmer` - Highlight effect on window bar
- `countUp` - Number reveal animation
- `barGrow` - Chart bar growth
- `slideInLeft` - Staggered entry from left
- `fadeIn` - Simple fade in
- `fadeInScale` - Scale + fade combo

## 📱 Responsive Design

- **Mobile** (< 768px): Single column, horizontal sidebar scroll
- **Tablet** (≥ 768px): Two columns, vertical sidebar
- **Desktop** (≥ 1024px): Full layout with all features

## 🔧 Configuration

### Tailwind CSS v4
Configuration is in `app/globals.css` using `@theme` directive:
```css
@theme {
  --color-navy: #0B2239;
  --color-amber: #F5B301;
  /* ... more theme config ... */
}
```

### PostCSS
Uses `@tailwindcss/postcss` plugin:
```js
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}
```

## 📧 Contact Form

The demo request form uses **EmailJS** for client-side email sending. This works perfectly with Vercel subdomains and doesn't require a custom domain.

### Setup Required
1. Create a free EmailJS account at [emailjs.com](https://www.emailjs.com)
2. Follow the step-by-step guide in **[EMAILJS_SETUP.md](./EMAILJS_SETUP.md)**
3. Add your credentials to `.env.local`
4. Restart the dev server

### Environment Variables
```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### Deploying to Vercel
Add the same environment variables in your Vercel project settings under **Environment Variables**.

## 🐛 Troubleshooting

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next
npm install
npm run build
```

### Styles Not Applying
1. Check `globals.css` has `@import "tailwindcss"`
2. Verify `layout.tsx` imports `globals.css`
3. Restart dev server

### Port Already in Use
Next.js will automatically use port 3001 if 3000 is busy.

## 📚 Documentation

- [TAILWIND_MIGRATION.md](./TAILWIND_MIGRATION.md) - Tailwind setup guide
- [CHANGES_SUMMARY.md](./CHANGES_SUMMARY.md) - Recent updates

## 🎯 Performance

- **First Load JS**: ~103 kB (gzipped)
- **Build Time**: ~21 seconds
- **Static Generation**: All pages pre-rendered
- **Optimization**: Automatic code splitting

## 📄 License

Private - All rights reserved

## 🤝 Contributing

This is a private project. For support, contact the development team.

---

Built with ❤️ using Next.js, Tailwind CSS, and TypeScript
