# CalendarPro - Premium Scheduling Platform

**100x Better than Calendly** - A next-generation scheduling platform built with Next.js 14, Supabase, and modern web technologies.

## ✨ Key Features

### 🎨 Landing Page (12 Premium Sections)
- Hero with animated gradient background
- Problem/Solution sections with cost calculations
- Features showcase (12 features with hover effects)
- Pricing (Free, Pro $29, Agency $79)
- Social proof, testimonials, FAQ, and more

### 🔐 Authentication System
- Email/Password signup and signin
- Google OAuth ready
- Protected routes with middleware
- Session management

### 📊 Dashboard
- Stats overview (bookings, revenue, event types)
- Quick actions and recent bookings
- Beautiful sidebar navigation

### 📅 Premium Booking Interface (10x Better!)
- Smooth calendar animations
- Beautiful time slot selection
- Custom booking forms
- Timezone support
- Success confirmation page

### 🎯 Event Types Management
- Unlimited event types
- Custom durations, buffer times
- Paid bookings (Stripe/PayPal ready)
- Custom branding and forms

### ⚙️ Super Admin Panel
- Email server (SMTP) configuration
- Twilio SMS setup
- Stripe & PayPal configuration
- User management
- System analytics

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your Supabase credentials

# Run database migration
# Go to Supabase SQL Editor and run supabase-schema.sql

# Start development server
npm run dev
```

Visit http://localhost:3000

## 📦 Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS + Framer Motion
- shadcn/ui
- Supabase (Auth + Database)
- Ready for: Stripe, PayPal, Twilio, Google Calendar

## 🗄️ Database Setup

1. Create Supabase project at [supabase.com](https://supabase.com)
2. Run `supabase-schema.sql` in SQL Editor
3. Add credentials to `.env.local`

## 🎯 What's Built

✅ Landing page (12 sections)
✅ Authentication (signup/signin)
✅ Dashboard with stats
✅ Premium booking interface
✅ Event types management
✅ Super admin panel
✅ Database schema
🔜 Google Calendar integration
🔜 Payment processing
🔜 SMS reminders

## 📝 Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
SUPABASE_SERVICE_ROLE_KEY=your_service_key
```

See `.env.local` for all options.

## 🚀 Deployment

Deploy to Vercel:

```bash
vercel
```

Set environment variables in Vercel dashboard.

## 📖 Documentation

- `PROGRESS.md` - Development progress and session notes
- `supabase-schema.sql` - Complete database schema
- Check code comments for implementation details

## 🤝 Contributing

Contributions welcome! Please submit a Pull Request.

## 📄 License

MIT License

---

**Built with ❤️ for modern scheduling needs**
