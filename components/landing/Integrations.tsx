'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function Integrations() {
  const integrations = [
    { name: 'Google Calendar', logo: '🗓️' },
    { name: 'Outlook', logo: '📧' },
    { name: 'Stripe', logo: '💳' },
    { name: 'PayPal', logo: '💰' },
    { name: 'Zoom', logo: '🎥' },
    { name: 'Google Meet', logo: '📹' },
    { name: 'Twilio', logo: '📱' },
    { name: 'Zapier', logo: '⚡' },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Integrates With Your Favorite Tools
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Seamlessly connect with the tools you already use every day
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow border border-gray-200"
            >
              <div className="text-4xl mb-3">{integration.logo}</div>
              <div className="text-sm font-semibold text-gray-700">
                {integration.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
