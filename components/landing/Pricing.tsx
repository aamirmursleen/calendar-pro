'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Check, Zap } from 'lucide-react'
import Link from 'next/link'

export function Pricing() {
  const plans = [
    {
      name: 'Free Forever',
      price: '$0',
      description: 'Perfect for getting started',
      features: [
        'Unlimited bookings',
        '5 event types',
        'Google Calendar sync',
        'Email notifications',
        'Basic customization',
        'Community support'
      ],
      cta: 'Start Free',
      popular: false
    },
    {
      name: 'Lifetime Pro',
      price: '$29',
      description: 'One-time payment, lifetime access',
      features: [
        'Everything in Free',
        'Unlimited event types',
        'Payment integration',
        'SMS reminders',
        'Custom branding',
        'Remove CalendarPro badge',
        'Priority support',
        'Advanced analytics',
        'Team features',
        'API access'
      ],
      cta: 'Get Lifetime Access',
      popular: true,
      badge: 'BEST VALUE'
    },
    {
      name: 'Agency',
      price: '$79',
      description: 'For teams and agencies',
      features: [
        'Everything in Pro',
        'Unlimited team members',
        'White-label ready',
        'Advanced integrations',
        'Dedicated support',
        'Custom development',
        'SLA guarantee'
      ],
      cta: 'Go Agency',
      popular: false
    }
  ]

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent
            <span className="block mt-2 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              One-Time Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            No monthly fees. No surprises. Just pay once and use forever.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 ${
                plan.popular
                  ? 'bg-gradient-to-b from-purple-600 to-blue-600 text-white shadow-2xl scale-105 border-4 border-purple-400'
                  : 'bg-white border-2 border-gray-200'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-yellow-400 text-purple-900 text-xs font-bold rounded-full">
                  {plan.badge}
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <div className={`text-5xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.price}
                </div>
                <p className={`text-sm ${plan.popular ? 'text-purple-100' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-green-300' : 'text-green-600'}`} />
                    <span className={`text-sm ${plan.popular ? 'text-purple-50' : 'text-gray-700'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={`w-full py-6 text-lg ${
                  plan.popular
                    ? 'bg-white text-purple-600 hover:bg-gray-100'
                    : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                }`}
              >
                <Link href="/signup">
                  {plan.cta}
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-50 rounded-full border-2 border-green-200">
            <Zap className="w-5 h-5 text-green-600" />
            <span className="font-semibold text-green-600">
              60-Day Money-Back Guarantee • No Questions Asked
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
