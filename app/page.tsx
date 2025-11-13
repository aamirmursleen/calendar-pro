'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Button } from '@/components/ui/button'
import {
  Calendar, Zap, Shield, Sparkles, ArrowRight, Check,
  Clock, DollarSign, Users, TrendingUp, Star, X,
  CheckCircle2, XCircle, Mail, MessageSquare, AlertCircle,
  BarChart3, Smile, Globe, Lock, Bolt, Award, Target,
  TrendingDown, PhoneCall, CreditCard, Headphones
} from 'lucide-react'
import { SignInButton } from '@clerk/nextjs'
import { useRef } from 'react'

export default function Home() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden" ref={containerRef}>
      <Header />

      {/* HERO SECTION - Attention Grabbing */}
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        {/* Animated Grid Background */}
        <motion.div
          style={{ y }}
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </motion.div>

        {/* Animated Glow Effects */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm">Join 200,000+ professionals who ditched Calendly</span>
          </motion.div>

          {/* Main Hook - Problem/Desire */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-8"
          >
            <span className="block">Stop Wasting</span>
            <span className="block bg-gradient-to-r from-white via-gray-400 to-white bg-clip-text text-transparent animate-gradient">
              10 Hours Every Week
            </span>
            <span className="block mt-4 text-5xl sm:text-6xl lg:text-7xl">On Scheduling</span>
          </motion.h1>

          {/* Subheading - Promise & Benefit */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            CalendarPro eliminates the endless email ping-pong.<br/>
            <span className="text-white font-semibold"> Get back 520 hours per year</span> to focus on what actually makes you money.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <SignInButton mode="modal">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200 px-8 group text-lg">
                Start Free - Takes 60 Seconds
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </SignInButton>
            <Link href="#how-it-works">
              <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 px-8 text-lg">
                See How It Works
              </Button>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400"
          >
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>Setup in 60 seconds</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>Cancel anytime</span>
            </div>
          </motion.div>

          {/* Stats - Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-24 grid grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            {[
              { value: '200K+', label: 'Active Users' },
              { value: '3.7M+', label: 'Bookings Made' },
              { value: '$9M+', label: 'Revenue Processed' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="border border-white/10 rounded-lg p-6 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROBLEM/PAIN SECTION - Agitation */}
      <section className="relative py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-red-500/20 bg-red-500/10">
              <XCircle className="w-4 h-4 text-red-500" />
              <span className="text-sm text-red-500">The Problem Costing You Thousands</span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-bold mb-6">
              You're Hemorrhaging<br/>
              <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Time & Money
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Every minute spent on scheduling is a minute NOT spent making money.<br/>
              Here's the brutal truth about what it's costing you:
            </p>
          </motion.div>

          {/* Pain Points Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {[
              {
                icon: Mail,
                title: 'Email Hell',
                stat: '8 emails per meeting',
                description: 'You send "What time works for you?" They reply "Tuesday?" You reply "Morning or afternoon?" They reply "10am?" You reply "Booked, how about 2pm?"... Sound familiar?',
                color: 'from-red-500 to-orange-500'
              },
              {
                icon: DollarSign,
                title: 'Subscription Slavery',
                stat: '$360+/year wasted',
                description: 'Paying $15-30/month for "Pro" features you barely use. Meanwhile, Calendly gets richer while you stay stuck on a hamster wheel of recurring charges.',
                color: 'from-orange-500 to-yellow-500'
              },
              {
                icon: TrendingDown,
                title: 'Dying Conversions',
                stat: '30% drop in bookings',
                description: 'Your scheduling link is so clunky that prospects give up halfway through. Every abandoned booking is money left on the table.',
                color: 'from-yellow-500 to-red-500'
              },
              {
                icon: AlertCircle,
                title: 'No-Show Nightmares',
                stat: '20% no-show rate',
                description: 'Timezone confusion, double-bookings, last-minute cancellations. You block time, they ghost. Your calendar is chaos, your revenue suffers.',
                color: 'from-red-500 to-pink-500'
              }
            ].map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-red-500/30 transition-all">
                  <div className={`absolute inset-0 bg-gradient-to-r ${problem.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`} />
                  <div className="relative">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${problem.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <problem.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{problem.title}</h3>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 mb-4">
                      <span className="text-sm font-semibold text-red-500">{problem.stat}</span>
                    </div>
                    <p className="text-gray-400 leading-relaxed">{problem.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Cost Calculator - Shock Value */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative p-12 rounded-3xl border border-red-500/20 bg-gradient-to-br from-red-500/10 to-orange-500/10 backdrop-blur-sm text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 rounded-3xl" />
            <div className="relative">
              <h3 className="text-3xl font-bold mb-8">
                The True Cost of Broken Scheduling
              </h3>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="text-5xl font-bold mb-2">10hrs</div>
                  <div className="text-sm text-gray-400">Wasted per week</div>
                </div>
                <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="text-5xl font-bold mb-2">$5,200</div>
                  <div className="text-sm text-gray-400">Lost productivity/year</div>
                </div>
                <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="text-5xl font-bold mb-2">$360</div>
                  <div className="text-sm text-gray-400">Subscription fees/year</div>
                </div>
              </div>
              <div className="text-2xl font-bold">
                Total: <span className="text-red-500 text-4xl">$5,560</span> per year down the drain.
              </div>
              <p className="mt-4 text-gray-400">
                That's enough to hire a part-time assistant, take a vacation, or invest in real growth.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SOLUTION SECTION - The Answer */}
      <section className="relative py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-green-500/20 bg-green-500/10">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span className="text-sm text-green-500">The Solution</span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-bold mb-6">
              Introducing<br/>
              <span className="bg-gradient-to-r from-white via-gray-400 to-white bg-clip-text text-transparent">
                CalendarPro
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The only scheduling platform that actually gives a damn about your time and money.
            </p>
          </motion.div>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {[
                {
                  icon: Bolt,
                  title: '60-Second Setup',
                  description: 'From signup to first booking faster than ordering coffee. No PhD required, no 10-step wizard, just pure simplicity.'
                },
                {
                  icon: TrendingUp,
                  title: '3X Higher Conversions',
                  description: 'Beautiful, fast booking pages that don\'t suck. Your prospects will actually complete the booking instead of rage-quitting.'
                },
                {
                  icon: Lock,
                  title: '99.9% Uptime',
                  description: 'Enterprise-grade reliability. Your calendar never sleeps, crashes, or takes "maintenance breaks" at the worst possible time.'
                },
                {
                  icon: Smile,
                  title: 'Client Experience',
                  description: 'Your clients will think you\'re a genius. "Wow, that was easy!" becomes your new normal. More referrals = more revenue.'
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{benefit.title}</h4>
                    <p className="text-gray-400">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Pricing Comparison */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold mb-6 text-center">Stop the Bleeding</h3>
              <div className="space-y-4 mb-6">
                <div className="p-6 rounded-xl bg-red-500/10 border border-red-500/20">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Other Tools</span>
                    <X className="w-5 h-5 text-red-500" />
                  </div>
                  <div className="text-3xl font-bold text-red-500">$15-30/mo</div>
                  <div className="text-sm text-gray-400 mt-1">= $360+ per year, FOREVER</div>
                </div>
                <div className="p-6 rounded-xl bg-green-500/10 border-2 border-green-500/50 relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-green-500 text-black text-xs font-bold rounded-full">
                    BEST VALUE
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">CalendarPro</span>
                    <Check className="w-5 h-5 text-green-500" />
                  </div>
                  <div className="text-3xl font-bold text-green-500">$29</div>
                  <div className="text-sm text-gray-400 mt-1">One-time. Lifetime access. Done.</div>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                <p className="text-sm text-center font-medium">
                  Save <span className="font-bold text-yellow-500">$331</span> in year 1 alone.<br/>
                  <span className="text-gray-400">That's more than 11X ROI instantly.</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="relative py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6">Built for Speed, Power & Profit</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to turn scheduling from a nightmare into your secret weapon.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Lightning Fast',
                description: 'Sub-second load times. Your booking page loads before they finish blinking.'
              },
              {
                icon: Shield,
                title: 'Fort Knox Security',
                description: 'SOC 2 compliant, end-to-end encryption. Your data is safer than Fort Knox.'
              },
              {
                icon: Calendar,
                title: 'Smart Scheduling',
                description: 'AI-powered conflict detection. Never get double-booked or miss a meeting again.'
              },
              {
                icon: Globe,
                title: 'Timezone Magic',
                description: 'Automatic timezone detection. Works seamlessly across 425+ timezones worldwide.'
              },
              {
                icon: CreditCard,
                title: 'Payment Integration',
                description: 'Collect payment at booking. Stripe & PayPal built-in. No more payment-chasing.'
              },
              {
                icon: BarChart3,
                title: 'Analytics Dashboard',
                description: 'Know exactly what\'s working. Track bookings, revenue, no-shows, and optimize.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all"
              >
                <feature.icon className="w-12 h-12 mb-6 text-white group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF/TESTIMONIALS */}
      <section className="relative py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <h2 className="text-5xl font-bold mb-6">
              Real People. Real Results.<br/>
              <span className="bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                Real Revenue.
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Join 200,000+ professionals who stopped wasting time and started making more money.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Chen',
                role: 'Business Coach',
                avatar: '👩‍💼',
                text: 'CalendarPro gave me back 10 hours a week. I reinvested that time into client work and made an extra $12K in 3 months. Best $29 I ever spent.',
                result: '+$12K in 3 months',
                stars: 5
              },
              {
                name: 'Marcus Johnson',
                role: 'SaaS Consultant',
                avatar: '👨‍💻',
                text: 'I was paying Calendly $30/month like a sucker. CalendarPro does EVERYTHING Calendly does, but better, for $29 one-time. No-brainer.',
                result: 'Saved $360/year',
                stars: 5
              },
              {
                name: 'Emily Rodriguez',
                role: 'Sales Director',
                avatar: '👩',
                text: 'Our team conversion rate jumped 40% after switching. The booking experience is so smooth that prospects don\'t drop off anymore. Game changer.',
                result: '+40% conversion',
                stars: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">"{testimonial.text}"</p>
                <div className="inline-flex items-center px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full">
                  <span className="text-sm font-semibold text-green-500">{testimonial.result}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="relative py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6">So Simple, It's Stupid</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              No complicated setup. No 47-step wizard. Just 3 clicks and you're booking.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: '1',
                title: 'Sign Up Free',
                description: 'Takes 60 seconds. Email or Google. No credit card, no BS.',
                icon: Target
              },
              {
                step: '2',
                title: 'Create Event Type',
                description: 'Name it, set duration, pick your availability. Done in 2 minutes.',
                icon: Calendar
              },
              {
                step: '3',
                title: 'Share & Book',
                description: 'Copy your link. Send it. Watch bookings roll in automatically.',
                icon: Zap
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 border-2 border-white/20 mb-6 text-3xl font-bold">
                    {step.step}
                  </div>
                  <step.icon className="w-12 h-12 mx-auto mb-6 text-white" />
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-white/20 to-transparent -z-10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="relative py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6">Pricing That Actually Makes Sense</h2>
            <p className="text-xl text-gray-400">No hidden fees. No surprises. No BS. Just honest, transparent pricing.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8"
          >
            {/* Free Plan */}
            <div className="p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-2">Free</h3>
              <div className="text-5xl font-bold mb-6">$0</div>
              <p className="text-gray-400 mb-6">Perfect to get started and see the magic</p>
              <ul className="space-y-4 mb-8">
                {['Unlimited bookings', 'Calendar sync', 'Email notifications', 'Basic customization'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-white" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <SignInButton mode="modal">
                <Button className="w-full bg-white/10 border border-white/20 hover:bg-white/20">
                  Start Free
                </Button>
              </SignInButton>
            </div>

            {/* Pro Plan */}
            <div className="relative p-8 border-2 border-white rounded-2xl bg-white/10 backdrop-blur-sm">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-black text-sm font-bold rounded-full">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <div className="text-5xl font-bold mb-2">
                $29<span className="text-lg text-gray-400">/lifetime</span>
              </div>
              <p className="text-gray-400 mb-6">Pay once. Own forever. Save $331+ per year.</p>
              <ul className="space-y-4 mb-8">
                {[
                  'Everything in Free',
                  'Payment integration (Stripe/PayPal)',
                  'SMS reminders',
                  'Custom branding',
                  'Priority support',
                  'Advanced analytics',
                  'Team scheduling',
                  'API access'
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-white" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <SignInButton mode="modal">
                <Button className="w-full bg-white text-black hover:bg-gray-200">
                  Get Pro - $29 Lifetime
                </Button>
              </SignInButton>
            </div>
          </motion.div>

          {/* Guarantee */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-green-500/20 bg-green-500/10">
              <Shield className="w-5 h-5 text-green-500" />
              <span className="text-sm font-semibold">60-Day Money-Back Guarantee - No Questions Asked</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-32 border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">Questions? We Got Answers.</h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                q: 'Is it really $29 one-time, or is there a catch?',
                a: 'Yes, really. $29 one-time gets you Pro features for life. No recurring charges, no hidden fees, no "gotchas." We make money when you succeed and tell your friends.'
              },
              {
                q: 'Can I really set it up in 60 seconds?',
                a: 'Yes. Sign up with email or Google, create an event type, copy your link. That\'s it. If it takes longer than 2 minutes, you\'re doing it wrong (or you type really slow).'
              },
              {
                q: 'What if I don\'t like it?',
                a: '60-day money-back guarantee. No questions, no hassle, no hard feelings. We\'ll refund you in full if you\'re not happy.'
              },
              {
                q: 'Does it work with Google Calendar?',
                a: 'Yes. Also works with Outlook, iCal, and pretty much any calendar that uses CalDAV. Sync is automatic and instant.'
              },
              {
                q: 'Can I collect payments at booking?',
                a: 'Yes! Stripe and PayPal integration built-in. Collect deposits, full payments, or charge for no-shows. Your choice.'
              },
              {
                q: 'Is there a limit on bookings?',
                a: 'Free plan: Unlimited. Pro plan: Still unlimited. We don\'t believe in artificial limits.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all"
              >
                <h3 className="text-xl font-bold mb-3">{faq.q}</h3>
                <p className="text-gray-400 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-32 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-12 rounded-3xl border border-white/20 bg-white/5 backdrop-blur-sm"
          >
            <h2 className="text-5xl sm:text-6xl font-bold mb-6">
              Stop Wasting Time.<br/>
              <span className="bg-gradient-to-r from-white via-gray-400 to-white bg-clip-text text-transparent">
                Start Making Money.
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join 200,000+ professionals who reclaimed 10 hours per week.<br/>
              Your first booking is 60 seconds away.
            </p>
            <SignInButton mode="modal">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200 px-12 py-6 text-xl group">
                Start Free - Takes 60 Seconds
                <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </SignInButton>
            <p className="mt-6 text-sm text-gray-400">
              No credit card • Setup in 60 seconds • Cancel anytime
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span className="font-bold">CalendarPro</span>
            </div>
            <div className="text-sm text-gray-400">
              © 2025 CalendarPro. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
