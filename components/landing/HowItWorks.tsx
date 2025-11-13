'use client'

import { motion } from 'framer-motion'
import { Link2, Settings, Rocket } from 'lucide-react'

export function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: Link2,
      title: 'Connect Your Calendar',
      description: 'Link your Google, Outlook, or iCal calendar in one click. We\'ll sync your availability automatically.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      number: '02',
      icon: Settings,
      title: 'Create Your Booking Page',
      description: 'Customize your booking page with your branding, set your availability, and configure your meeting types.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      number: '03',
      icon: Rocket,
      title: 'Share & Get Booked',
      description: 'Share your booking link and watch meetings fill your calendar. Get paid, send reminders, all automatically.',
      color: 'from-green-500 to-emerald-500'
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Get Started in
            <span className="block mt-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Three Simple Steps
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From signup to your first booking in less than 60 seconds
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-green-200 -translate-y-1/2" />

          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-xl h-full">
                  {/* Step number */}
                  <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-gradient-to-r bg-gray-900 text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center mb-6 mt-8`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-50 rounded-full border-2 border-green-200">
            <span className="text-lg font-semibold text-green-600">
              ⚡ Average setup time: 47 seconds
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
