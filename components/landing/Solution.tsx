'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Zap, Shield, TrendingUp, Smile } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function Solution() {
  const benefits = [
    {
      icon: Zap,
      title: 'Instant Setup',
      description: 'Go from signup to your first booking in under 60 seconds. No technical knowledge required.',
    },
    {
      icon: TrendingUp,
      title: 'Higher Conversions',
      description: 'Beautiful booking pages that convert 3x better than traditional scheduling tools.',
    },
    {
      icon: Shield,
      title: 'Rock-Solid Reliability',
      description: '99.9% uptime guarantee. Your calendar never sleeps, so you can.',
    },
    {
      icon: Smile,
      title: 'Delightful Experience',
      description: 'Your clients will love how easy it is to book with you. No more frustrated emails.',
    }
  ]

  const comparisons = [
    { label: 'Other Tools', price: '$15-30/mo', total: '$360/year', color: 'text-red-600' },
    { label: 'CalendarPro', price: 'One-time $29', total: '$29 forever', color: 'text-green-600' }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-green-100 rounded-full">
            <CheckCircle2 className="w-4 h-4 text-green-600" />
            <span className="text-sm font-semibold text-green-600">The Solution</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Introducing
            <span className="block mt-2 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              CalendarPro
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The scheduling platform that actually works for you. Simple, powerful, and affordable.
            Everything you need, nothing you don't.
          </p>
        </motion.div>

        {/* Main solution showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Why CalendarPro is Different
            </h3>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Visual comparison */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Simple, Transparent Pricing
            </h3>
            <div className="space-y-4">
              {comparisons.map((item, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl ${
                    index === 1
                      ? 'bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-500'
                      : 'bg-gray-50 border border-gray-200'
                  }`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-700">{item.label}</span>
                    {index === 1 && (
                      <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                        BEST VALUE
                      </span>
                    )}
                  </div>
                  <div className={`text-3xl font-bold ${item.color}`}>
                    {item.price}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    = {item.total}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <p className="text-sm text-center text-yellow-800 font-medium">
                Save <span className="font-bold">$331</span> in your first year alone!
              </p>
            </div>
          </motion.div>
        </div>

        {/* Feature highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-10 text-white"
        >
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold mb-4">
              Everything You Need to Succeed
            </h3>
            <p className="text-xl opacity-90">
              All features included. No hidden fees. No limits.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              'Unlimited bookings',
              'Unlimited event types',
              'Google Calendar sync',
              'Custom branding',
              'Email reminders',
              'SMS notifications',
              'Payment integration',
              'Team scheduling',
              'Analytics dashboard',
              'Priority support',
              'Custom domains',
              'API access'
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-center gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-green-300 flex-shrink-0" />
                <span className="text-white/90">{feature}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button
              asChild
              size="lg"
              className="text-lg px-8 py-6 bg-white text-purple-600 hover:bg-gray-100 shadow-xl"
            >
              <Link href="/signup">
                Get Started Free
              </Link>
            </Button>
            <p className="mt-4 text-sm opacity-75">
              No credit card required • 60-day money-back guarantee
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
