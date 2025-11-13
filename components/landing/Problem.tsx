'use client'

import { motion } from 'framer-motion'
import { XCircle, DollarSign, Clock, Users, TrendingDown } from 'lucide-react'

export function Problem() {
  const problems = [
    {
      icon: Clock,
      title: 'Endless Back-and-Forth Emails',
      description: 'Spending hours every week playing email ping-pong just to find a meeting time.',
      stat: 'Average: 8 emails per meeting',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: DollarSign,
      title: 'Expensive Monthly Subscriptions',
      description: 'Paying $15-30/month for basic scheduling features you barely use.',
      stat: '$360+ per year wasted',
      color: 'from-orange-500 to-yellow-500'
    },
    {
      icon: Users,
      title: 'Missed Opportunities',
      description: 'Losing potential clients because your booking process is too complicated.',
      stat: '30% drop in conversions',
      color: 'from-yellow-500 to-red-500'
    },
    {
      icon: TrendingDown,
      title: 'No-Shows & Confusion',
      description: 'Dealing with no-shows, timezone confusion, and double-bookings.',
      stat: '20% no-show rate',
      color: 'from-red-500 to-pink-500'
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-red-100 rounded-full">
            <XCircle className="w-4 h-4 text-red-600" />
            <span className="text-sm font-semibold text-red-600">The Problem</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Scheduling Shouldn't Be
            <span className="block mt-2 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              This Painful
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            If you're frustrated with traditional scheduling tools, you're not alone.
            Here's what's costing you time, money, and clients every single day:
          </p>
        </motion.div>

        {/* Problems grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"
                style={{
                  backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`
                }}
              />
              <div className="relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-red-300 transition-all duration-300 hover:shadow-xl">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${problem.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <problem.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {problem.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {problem.description}
                </p>
                <div className="inline-flex items-center px-4 py-2 bg-red-50 rounded-lg">
                  <span className="text-sm font-semibold text-red-600">
                    {problem.stat}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cost calculation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-red-600 to-orange-600 rounded-3xl p-10 text-white text-center shadow-2xl"
        >
          <h3 className="text-3xl font-bold mb-4">
            The True Cost of Bad Scheduling
          </h3>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl font-bold mb-2">10 hrs/week</div>
              <div className="text-sm opacity-90">Wasted on scheduling</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl font-bold mb-2">$5,200/year</div>
              <div className="text-sm opacity-90">Lost productivity</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl font-bold mb-2">$360/year</div>
              <div className="text-sm opacity-90">Subscription fees</div>
            </div>
          </div>
          <p className="mt-8 text-xl font-semibold">
            That's <span className="text-yellow-300">$5,560 per year</span> down the drain.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
