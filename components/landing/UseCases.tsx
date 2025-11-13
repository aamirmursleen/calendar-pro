'use client'

import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Heart, Users, Laptop, TrendingUp } from 'lucide-react'

export function UseCases() {
  const cases = [
    {
      icon: Briefcase,
      title: 'Consultants',
      description: 'Book discovery calls, charge for consultations, and manage client relationships effortlessly.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: GraduationCap,
      title: 'Coaches & Trainers',
      description: 'Schedule coaching sessions, accept payments, and send automated reminders to reduce no-shows.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Perfect for therapists, nutritionists, and wellness professionals managing appointments.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Sales Teams',
      description: 'Round-robin scheduling for demos, automatic follow-ups, and conversion tracking.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Laptop,
      title: 'Agencies',
      description: 'Team scheduling, client onboarding, and white-label booking pages for your brand.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: TrendingUp,
      title: 'SaaS Companies',
      description: 'Product demos, customer success check-ins, and support calls all in one place.',
      color: 'from-pink-500 to-rose-500'
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Perfect for Every
            <span className="block mt-2 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Professional
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            No matter your industry, CalendarPro adapts to your workflow
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-purple-300 hover:shadow-xl transition-all"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${useCase.color} flex items-center justify-center mb-6`}>
                <useCase.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {useCase.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {useCase.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
