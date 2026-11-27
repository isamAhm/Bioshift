# BioShift Deployment Guide

## Pre-Deployment Checklist

- ✅ Build succeeds locally (`npm run build`)
- ✅ Environment variables configured
- ✅ Form tested and working
- ✅ Resend account set up
- ✅ Contact emails updated in `app/api/demo/route.ts`

## Option 1: Vercel (Easiest) ⚡

### Via Dashboard

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Import to Vercel:**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click "Import Project"
   - Select your repository
   - Click "Import"

3. **Add Environment Variables:**
   - Go to Project Settings → Environment Variables
   - Add for all environments:
     - `RESEND_API_KEY`: Your Resend API key
     - `RESEND_FROM_EMAIL`: Your verified sender email

4. **Deploy:**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Done! 🎉

### Via CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Add environment variables
vercel env add RESEND_API_KEY production
vercel env add RESEND_FROM_EMAIL production

# Deploy to production
vercel --prod
```

### Custom Domain

1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records
4. Wait for DNS propagation

---

## Option 2: Netlify 🌐

1. **Push to GitHub**

2. **Import to Netlify:**
   - Go to [app.netlify.com/start](https://app.netlify.com/start)
   - Connect GitHub
   - Select repository

3. **Build Settings:**
   - Build command: `npm run build`
   - Publish directory: `.next`

4. **Environment Variables:**
   - Site settings → Environment variables
   - Add:
     - `RESEND_API_KEY`
     - `RESEND_FROM_EMAIL`

5. **Deploy**

---

## Option 3: Self-Hosted (VPS) 🖥️

### Requirements
- Ubuntu 20.04+ or similar
- Node.js 20.x+
- PM2 (process manager)
- Nginx (reverse proxy)

### Setup

1. **Install Node.js:**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

2. **Install PM2:**
   ```bash
   sudo npm install -g pm2
   ```

3. **Clone Repository:**
   ```bash
   cd /var/www
   git clone https://github.com/isamAhm/Bioshift.git
   cd Bioshift
   npm install
   ```

4. **Create `.env.local`:**
   ```bash
   nano .env.local
   ```
   Add your Resend credentials

5. **Build:**
   ```bash
   npm run build
   ```

6. **Start with PM2:**
   ```bash
   pm2 start npm --name "bioshift" -- start
   pm2 save
   pm2 startup
   ```

7. **Configure Nginx:**
   ```bash
   sudo nano /etc/nginx/sites-available/bioshift
   ```

   ```nginx
   server {
       listen 80;
       server_name yourdomain.com www.yourdomain.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

   ```bash
   sudo ln -s /etc/nginx/sites-available/bioshift /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl reload nginx
   ```

8. **Setup SSL:**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
   ```

---

## Option 4: Docker 🐳

### Dockerfile

```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

### Build and Run

```bash
# Build image
docker build -t bioshift .

# Run container
docker run -d \
  -p 3000:3000 \
  -e RESEND_API_KEY=your_key \
  -e RESEND_FROM_EMAIL=your_email \
  --name bioshift \
  bioshift
```

### Docker Compose

```yaml
version: '3.8'

services:
  bioshift:
    build: .
    ports:
      - "3000:3000"
    environment:
      - RESEND_API_KEY=${RESEND_API_KEY}
      - RESEND_FROM_EMAIL=${RESEND_FROM_EMAIL}
    restart: unless-stopped
```

```bash
docker-compose up -d
```

---

## Post-Deployment

### Testing
- [ ] Visit deployed URL
- [ ] Test form submission
- [ ] Check email delivery
- [ ] Test on mobile
- [ ] Verify all links work

### Monitoring
- [ ] Set up uptime monitoring
- [ ] Configure error tracking (optional)
- [ ] Add analytics (optional)

### Security
- [ ] Ensure HTTPS works
- [ ] Test spam protection
- [ ] Review environment variables

---

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `RESEND_API_KEY` | Resend API key | `re_123abc...` |
| `RESEND_FROM_EMAIL` | Verified sender email | `hello@yourdomain.com` |

---

## Troubleshooting

### Build Fails
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Form Errors
- Verify environment variables are set
- Check Resend dashboard
- Ensure sender email is verified

### Performance
- Enable CDN
- Check image optimization
- Review Network tab

---

## Support

- Email: isam.ahmedh8@gmail.com, henok3095@gmail.com
- Docs: [Next.js Deployment](https://nextjs.org/docs/deployment)
- Resend: [resend.com/docs](https://resend.com/docs)
