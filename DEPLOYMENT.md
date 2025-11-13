# 🚀 Production Deployment Guide - Calendar Jet

This guide will help you deploy Calendar Jet to production on Vercel.

## ✅ Pre-Deployment Checklist

- [x] Production build tested locally
- [ ] Clerk switched to production mode
- [ ] Production environment variables configured
- [ ] Vercel project connected
- [ ] Custom domain configured (optional)

## 📋 Step-by-Step Deployment

### 1. Set Up Clerk for Production

1. Go to [Clerk Dashboard](https://dashboard.clerk.com/)
2. **Switch to Production mode** (toggle in top right corner)
3. Go to **"API Keys"** section
4. Copy your production keys:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` (starts with `pk_live_`)
   - `CLERK_SECRET_KEY` (starts with `sk_live_`)
5. Keep these keys handy for the next step

### 2. Deploy to Vercel

#### Option A: Deploy via Vercel Dashboard (Recommended)

1. **Go to Vercel Dashboard**: https://vercel.com/dashboard
2. **Click "Add New Project"**
3. **Import your GitHub repository**: `aamirmursleen/calendar-pro`
4. **Configure your project**:
   - Framework Preset: Next.js
   - Root Directory: `./` (leave as default)
   - Build Command: `npm run build`
   - Output Directory: `.next`

5. **Add Environment Variables** (click "Environment Variables"):

   ```bash
   # Clerk Authentication (REQUIRED)
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_YOUR_KEY
   CLERK_SECRET_KEY=sk_live_YOUR_SECRET

   # Supabase Database (REQUIRED)
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

   # Application URL
   NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app

   # Optional: Payment processors, SMS, etc.
   # Add these later as needed
   ```

6. **Click "Deploy"**
7. Wait 2-3 minutes for deployment to complete

#### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod

# Follow the prompts and add environment variables when asked
```

### 3. Configure Clerk Production Settings

After deploying to Vercel, you need to configure Clerk:

1. Go back to [Clerk Dashboard](https://dashboard.clerk.com/)
2. Navigate to **"Domains"** section
3. Add your Vercel domain: `your-app.vercel.app`
4. Navigate to **"Redirects"** section
5. Add these URLs:
   - Sign-in redirect: `https://your-app.vercel.app/dashboard`
   - Sign-out redirect: `https://your-app.vercel.app`

### 4. Configure Supabase for Production

1. Create a production Supabase project at https://supabase.com/dashboard
2. Update your Vercel environment variables with production Supabase credentials
3. Run database migrations in production:
   ```bash
   # Connect to your production Supabase project
   supabase link --project-ref your-project-ref

   # Push your schema to production
   supabase db push
   ```

### 5. Set Up Custom Domain (Optional)

1. In Vercel Dashboard, go to your project
2. Click **"Settings" → "Domains"**
3. Add your custom domain
4. Update DNS records as instructed by Vercel
5. Update Clerk domains to include your custom domain
6. Update `NEXT_PUBLIC_APP_URL` in Vercel environment variables

### 6. Verify Deployment

1. Visit your production URL
2. Test the following:
   - [ ] Homepage loads correctly
   - [ ] All 10 themes work
   - [ ] Sign up/Sign in works
   - [ ] Dashboard is accessible
   - [ ] Calendar booking flow works
   - [ ] Mobile responsiveness

## 🔧 Post-Deployment Configuration

### Enable Optional Features

#### Google Calendar Integration
1. Get credentials from [Google Cloud Console](https://console.cloud.google.com/)
2. Add to Vercel environment variables:
   ```
   GOOGLE_CLIENT_ID=your_id
   GOOGLE_CLIENT_SECRET=your_secret
   ```

#### Stripe Payments
1. Get keys from [Stripe Dashboard](https://dashboard.stripe.com/)
2. Add to Vercel environment variables:
   ```
   NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_live_...
   STRIPE_SECRET_KEY=sk_live_...
   ```

#### Twilio SMS
1. Get credentials from [Twilio Console](https://console.twilio.com/)
2. Add to Vercel environment variables:
   ```
   TWILIO_ACCOUNT_SID=...
   TWILIO_AUTH_TOKEN=...
   TWILIO_PHONE_NUMBER=...
   ```

## 🔍 Troubleshooting

### Build Fails on Vercel
- Check build logs in Vercel dashboard
- Ensure all required environment variables are set
- Try building locally: `npm run build`

### Authentication Not Working
- Verify Clerk production keys are correct
- Check that your domain is added in Clerk dashboard
- Ensure redirect URLs are configured

### Database Connection Issues
- Verify Supabase URL and keys
- Check that database schema is deployed
- Ensure Supabase project is in same region as Vercel

## 📊 Monitoring

### Vercel Analytics
1. Go to your project in Vercel
2. Click **"Analytics"** tab
3. Enable analytics to track:
   - Page views
   - User sessions
   - Performance metrics

### Clerk User Management
1. Monitor users in Clerk Dashboard
2. View authentication analytics
3. Manage user accounts

## 🔄 Continuous Deployment

Your app is now set up for continuous deployment:

1. **Push to GitHub** → Automatic deployment to Vercel
2. Every commit to `main` branch triggers a new deployment
3. Preview deployments for pull requests

## 🎉 Your App is Live!

Your production URL: `https://your-app.vercel.app`

Share your Calendar Jet app with real users!

---

## 📞 Need Help?

- Vercel Docs: https://vercel.com/docs
- Clerk Docs: https://clerk.com/docs
- Next.js Docs: https://nextjs.org/docs
- GitHub Issues: https://github.com/aamirmursleen/calendar-pro/issues
