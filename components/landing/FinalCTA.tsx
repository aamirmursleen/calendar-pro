'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'
import Link from 'next/link'

export function FinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-600 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span className="text-sm font-medium text-white">
              Join 200,000+ professionals today
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready to Take Back
            <span className="block mt-2">Your Time?</span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Stop wasting hours on scheduling. Start getting more bookings, more revenue, and more time for what matters.
          </p>

          {/* Benefits list */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10 text-white">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-300" />
              <span>Setup in 60 seconds</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-300" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-300" />
              <span>60-day guarantee</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              asChild
              size="lg"
              className="text-lg px-10 py-7 bg-white text-purple-600 hover:bg-gray-100 shadow-2xl hover:shadow-white/50 transition-all duration-300 group"
            >
              <Link href="/signup">
                Start Free Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-10 py-7 border-2 border-white text-white hover:bg-white/10 transition-all duration-300"
            >
              <Link href="#pricing">
                View Pricing
              </Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex items-center justify-center gap-8 text-white/80 text-sm">
            <div>⭐ 4.8/5 from 837 reviews</div>
            <div>•</div>
            <div>💰 $9M+ revenue generated</div>
            <div>•</div>
            <div>📅 3.7M+ bookings created</div>
          </div>

          {/* Urgency element */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 max-w-2xl mx-auto"
          >
            <p className="text-yellow-300 font-semibold mb-2">
              🔥 Limited Time: Lifetime Pro at Launch Price
            </p>
            <p className="text-white/90 text-sm">
              Lock in your $29 lifetime access before the price increases to $99
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
