'use client'

import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function FAQ() {
  const faqs = [
    {
      question: 'Is CalendarPro really free?',
      answer: 'Yes! Our free plan includes unlimited bookings, Google Calendar sync, and basic features. You can upgrade to our one-time $29 Lifetime Pro plan for advanced features like payments, SMS reminders, and custom branding.'
    },
    {
      question: 'What does "lifetime access" mean?',
      answer: 'Pay once, use forever. No monthly fees, no annual renewals. You get all current features plus all future updates at no additional cost. We make money by helping new users, not by charging you monthly.'
    },
    {
      question: 'Can I accept payments through CalendarPro?',
      answer: 'Absolutely! With our Pro plan, you can connect Stripe or PayPal and charge for your services. Set up paid booking types, accept one-time payments, and track your revenue all in one place.'
    },
    {
      question: 'How do SMS reminders work?',
      answer: 'SMS reminders are powered by Twilio and included in the Pro plan. You can configure automated reminders to be sent before appointments, reducing no-shows by up to 80%. You control the timing and message content.'
    },
    {
      question: 'Can I use my own domain?',
      answer: 'Yes! Pro and Agency plans support custom domains. You can use your own domain (like calendar.yourbusiness.com) instead of our default subdomain.'
    },
    {
      question: 'What calendars can I connect?',
      answer: 'CalendarPro integrates with Google Calendar, Outlook/Office 365, and any iCal-compatible calendar. You can connect multiple calendars to check availability across all your accounts.'
    },
    {
      question: 'Is there a refund policy?',
      answer: 'We offer a 60-day money-back guarantee, no questions asked. If CalendarPro isn\'t right for you, just let us know within 60 days for a full refund.'
    },
    {
      question: 'Can I use CalendarPro for my team?',
      answer: 'Yes! Our Agency plan ($79 one-time) includes unlimited team members, round-robin scheduling, collective bookings, and advanced team features. Perfect for sales teams, agencies, and support teams.'
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked
            <span className="block mt-2 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about CalendarPro
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gray-50 rounded-xl px-6 border border-gray-200"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600">
            Still have questions?{' '}
            <a href="mailto:support@calendarpro.com" className="text-purple-600 font-semibold hover:underline">
              Contact our support team
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
