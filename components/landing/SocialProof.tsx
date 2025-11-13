'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

export function SocialProof() {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Business Coach',
      avatar: '👩‍💼',
      rating: 5,
      text: 'CalendarPro has completely transformed my business. I went from spending 10 hours a week on scheduling to literally zero. My clients love how easy it is to book with me.',
      revenue: '+$12K in bookings'
    },
    {
      name: 'Marcus Johnson',
      role: 'Consultant',
      avatar: '👨‍💻',
      rating: 5,
      text: 'I was paying $30/month for Calendly. CalendarPro does everything Calendly does and more for a one-time $29. This is a no-brainer.',
      revenue: 'Saved $360/year'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Sales Manager',
      avatar: '👩‍💼',
      rating: 5,
      text: 'The team scheduling features are incredible. Round-robin booking has increased our team efficiency by 40%. Best investment we made this year.',
      revenue: '+40% efficiency'
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
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Loved by Professionals
            <span className="block mt-2 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Around the World
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Join 200,000+ professionals who switched to CalendarPro
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-200 hover:shadow-xl transition-shadow relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-purple-200" />

              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl">{testimonial.avatar}</div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="inline-flex items-center px-3 py-1 bg-green-100 rounded-full">
                <span className="text-sm font-semibold text-green-700">
                  {testimonial.revenue}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
