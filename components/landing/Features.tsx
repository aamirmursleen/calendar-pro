'use client'

import { motion } from 'framer-motion'
import {
  Calendar,
  CreditCard,
  Bell,
  Users,
  Palette,
  BarChart3,
  Globe,
  Zap,
  Lock,
  RefreshCw,
  MessageSquare,
  Video
} from 'lucide-react'

export function Features() {
  const features = [
    {
      icon: Calendar,
      title: 'Smart Calendar Sync',
      description: 'Automatically sync with Google, Outlook, and iCal. Never get double-booked again.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: CreditCard,
      title: 'Get Paid Instantly',
      description: 'Accept payments via Stripe or PayPal. Charge for consultations, coaching, and services.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Bell,
      title: 'Smart Reminders',
      description: 'Automated email and SMS reminders reduce no-shows by 80%. Powered by Twilio.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Team Scheduling',
      description: 'Round-robin and collective scheduling for teams. Perfect for sales and support.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Palette,
      title: 'Custom Branding',
      description: 'Make it yours with custom colors, logos, and domains. White-label ready.',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Track bookings, revenue, and conversion rates. Make data-driven decisions.',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: Globe,
      title: 'Timezone Intelligence',
      description: 'Automatic timezone detection and conversion. Schedule globally with confidence.',
      gradient: 'from-teal-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Instant Booking',
      description: 'Lightning-fast booking pages that load in under 1 second. No friction, more conversions.',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Lock,
      title: 'Enterprise Security',
      description: 'Bank-level encryption, GDPR compliant, and SOC 2 certified. Your data is safe.',
      gradient: 'from-gray-600 to-gray-800'
    },
    {
      icon: RefreshCw,
      title: 'Buffer Time & Rules',
      description: 'Set buffer times, daily limits, and advance notice. Stay in control of your schedule.',
      gradient: 'from-blue-600 to-indigo-600'
    },
    {
      icon: MessageSquare,
      title: 'Custom Questions',
      description: 'Collect the information you need with custom intake forms and questions.',
      gradient: 'from-violet-500 to-purple-500'
    },
    {
      icon: Video,
      title: 'Video Integration',
      description: 'Auto-generate Zoom, Google Meet, or Teams links. Seamless virtual meetings.',
      gradient: 'from-red-500 to-pink-500'
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-blue-100 rounded-full">
            <Zap className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600">Powerful Features</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need,
            <span className="block mt-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              All in One Place
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Packed with features that would cost thousands elsewhere. All included in your one-time purchase.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative"
            >
              {/* Gradient border effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur`} />

              {/* Card content */}
              <div className="relative bg-white rounded-2xl p-8 h-full border border-gray-200 hover:border-transparent transition-all duration-300">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-2xl font-semibold text-gray-900 mb-4">
            And we're adding more features every month
          </p>
          <p className="text-lg text-gray-600">
            Buy once, benefit forever. All future updates included at no extra cost.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
