'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Button } from '@/components/ui/button'
import {
  Calendar, Zap, Shield, Sparkles, ArrowRight, Check,
  Clock, DollarSign, Users, TrendingUp, Star, X,
  CheckCircle2, XCircle, Mail, MessageSquare, AlertCircle,
  BarChart3, Smile, Globe, Lock, Bolt, Award, Target,
  TrendingDown, PhoneCall, CreditCard, Headphones
} from 'lucide-react'
import { SignInButton } from '@clerk/nextjs'
import { useRef, useState } from 'react'

export default function Home() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // Interactive Calendar State
  const [selectedDate, setSelectedDate] = useState<number | null>(15)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [currentMonth, setCurrentMonth] = useState('November 2025')
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [selectedTheme, setSelectedTheme] = useState('futuristic')

  // Theme Configurations
  const themes = {
    classic: {
      name: 'Classic B&W',
      bg: 'bg-white',
      primary: 'from-black to-gray-800',
      text: 'text-gray-900',
      border: 'border-gray-300',
      hover: 'hover:bg-gray-100',
      selected: 'bg-black text-white',
      icon: '🎯',
      neonColor: { r: 100, g: 100, b: 100 },
      isDark: false
    },
    gradient: {
      name: 'Purple Dream',
      bg: 'bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50',
      primary: 'from-indigo-600 via-purple-600 to-pink-600',
      text: 'text-gray-900',
      border: 'border-purple-200',
      hover: 'hover:bg-purple-50',
      selected: 'bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white',
      icon: '💜',
      neonColor: { r: 168, g: 85, b: 247 },
      isDark: false
    },
    ocean: {
      name: 'Ocean Blue',
      bg: 'bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50',
      primary: 'from-cyan-600 via-blue-600 to-indigo-600',
      text: 'text-gray-900',
      border: 'border-blue-200',
      hover: 'hover:bg-blue-50',
      selected: 'bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-600 text-white',
      icon: '🌊',
      neonColor: { r: 59, g: 130, b: 246 },
      isDark: false
    },
    sunset: {
      name: 'Sunset Glow',
      bg: 'bg-gradient-to-br from-orange-50 via-pink-50 to-rose-50',
      primary: 'from-orange-600 via-pink-600 to-rose-600',
      text: 'text-gray-900',
      border: 'border-pink-200',
      hover: 'hover:bg-pink-50',
      selected: 'bg-gradient-to-br from-orange-600 via-pink-600 to-rose-600 text-white',
      icon: '🌅',
      neonColor: { r: 236, g: 72, b: 153 },
      isDark: false
    },
    forest: {
      name: 'Forest Green',
      bg: 'bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50',
      primary: 'from-emerald-600 via-green-600 to-teal-600',
      text: 'text-gray-900',
      border: 'border-green-200',
      hover: 'hover:bg-green-50',
      selected: 'bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 text-white',
      icon: '🌲',
      neonColor: { r: 16, g: 185, b: 129 },
      isDark: false
    },
    futuristic: {
      name: 'Space Dark',
      bg: 'bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950',
      primary: 'from-slate-900 to-slate-800',
      text: 'text-white',
      border: 'border-cyan-500/30',
      hover: 'hover:bg-white/10',
      selected: 'bg-gradient-to-r from-cyan-400 to-cyan-600 text-white',
      icon: '🌌',
      neonColor: { r: 34, g: 211, b: 238 },
      isDark: true
    },
    minimal: {
      name: 'Minimalistic',
      bg: 'bg-white',
      primary: 'from-gray-900 to-gray-700',
      text: 'text-gray-900',
      border: 'border-gray-200',
      hover: 'hover:bg-gray-50',
      selected: 'bg-gray-900 text-white',
      icon: '⚡',
      neonColor: { r: 75, g: 85, b: 99 },
      isDark: false,
      noAnimations: true
    },
    coral: {
      name: 'Coral Reef',
      bg: 'bg-gradient-to-br from-orange-50 via-coral-50 to-amber-50',
      primary: 'from-orange-500 via-coral-500 to-amber-500',
      text: 'text-gray-900',
      border: 'border-orange-200',
      hover: 'hover:bg-orange-50',
      selected: 'bg-gradient-to-r from-orange-500 to-amber-500 text-white',
      icon: '🪸',
      neonColor: { r: 249, g: 115, b: 22 },
      isDark: false
    },
    midnight: {
      name: 'Midnight Blue',
      bg: 'bg-gradient-to-br from-blue-950 via-indigo-950 to-slate-950',
      primary: 'from-blue-900 to-indigo-900',
      text: 'text-white',
      border: 'border-blue-500/30',
      hover: 'hover:bg-blue-900/20',
      selected: 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white',
      icon: '🌙',
      neonColor: { r: 59, g: 130, b: 246 },
      isDark: true
    },
    rose: {
      name: 'Rose Gold',
      bg: 'bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50',
      primary: 'from-rose-500 via-pink-500 to-amber-400',
      text: 'text-gray-900',
      border: 'border-rose-200',
      hover: 'hover:bg-rose-50',
      selected: 'bg-gradient-to-r from-rose-500 to-amber-400 text-white',
      icon: '🌹',
      neonColor: { r: 244, g: 114, b: 182 },
      isDark: false
    }
  }

  const currentTheme = themes[selectedTheme as keyof typeof themes]

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden" ref={containerRef}>
      <Header />

      {/* HERO SECTION - Split Layout */}
      <section className="relative min-h-screen pt-32 pb-20">
        {/* Animated Grid Background */}
        <motion.div
          style={{ y }}
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </motion.div>

        {/* Animated Glow Effects */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-12 items-center">

            {/* TOP - Content */}
            <div className="text-center max-w-4xl">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
              >
                <Sparkles className="w-4 h-4" />
                <span className="text-sm">Join 200,000+ professionals who ditched Calendly</span>
              </motion.div>

              {/* Main Hook - Problem/Desire */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8"
              >
                <span className="block">Stop Wasting</span>
                <span className="block bg-gradient-to-r from-white via-gray-400 to-white bg-clip-text text-transparent animate-gradient">
                  10 Hours Every Week
                </span>
                <span className="block mt-4 text-4xl sm:text-5xl lg:text-6xl">On Scheduling</span>
              </motion.h1>

              {/* Subheading - Promise & Benefit */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg sm:text-xl text-gray-400 mb-12 leading-relaxed"
              >
                CalendarPro eliminates the endless email ping-pong.<br/>
                <span className="text-white font-semibold"> Get back 520 hours per year</span> to focus on what actually makes you money.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-start gap-4 mb-12"
              >
                <SignInButton mode="modal">
                  <Button size="lg" className="bg-white text-black hover:bg-gray-200 px-8 group text-lg">
                    Start Free - Takes 60 Seconds
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </SignInButton>
                <Link href="#how-it-works">
                  <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 px-8 text-lg">
                    See How It Works
                  </Button>
                </Link>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap items-center gap-6 text-sm text-gray-400"
              >
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Setup in 60 seconds</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Cancel anytime</span>
                </div>
              </motion.div>
            </div>

            {/* BOTTOM - Interactive Demo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full max-w-4xl"
            >
              {/* Floating Sparkles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={`sparkle-${i}`}
                  className="absolute w-3 h-3 pointer-events-none"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -50, 0],
                    x: [0, Math.random() * 30 - 15, 0],
                    opacity: [0, 1, 0],
                    scale: [0, 1.5, 0],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: Math.random() * 4 + 3,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                    ease: "easeInOut"
                  }}
                >
                  <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full blur-sm" />
                </motion.div>
              ))}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-center mb-4">Experience the Magic</h3>
                <div className="flex items-center justify-center gap-2 mb-6 flex-wrap">
                  <span className="text-xs text-gray-400">Choose theme:</span>

                  {/* Theme Buttons - Button Size */}
                  {Object.entries(themes).map(([key, theme]) => (
                    <motion.button
                      key={key}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setSelectedTheme(key)
                        setShowConfirmation(false)
                        setSelectedTime(null)
                      }}
                      className={`relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all text-xs font-semibold ${
                        selectedTheme === key
                          ? 'border-white bg-white/10 text-white shadow-lg'
                          : 'border-white/20 bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <span className="text-sm">{theme.icon}</span>
                      <span>{theme.name}</span>
                      {selectedTheme === key && (
                        <motion.div
                          layoutId="selected"
                          className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-green-500 rounded-full flex items-center justify-center"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                        >
                          <Check className="w-2 h-2 text-white" />
                        </motion.div>
                      )}
                    </motion.button>
                  ))}

                  {/* Create Your Own Button */}
                  <SignInButton mode="modal">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border-2 border-dashed border-purple-400 bg-gradient-to-r from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 transition-all text-xs font-bold text-white"
                    >
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="text-sm"
                      >
                        ✨
                      </motion.span>
                      <span>Create Own</span>
                      <span className="absolute -top-1.5 -right-1.5 bg-gradient-to-r from-green-400 to-emerald-500 text-white text-[9px] px-1.5 py-0.5 rounded-full font-bold shadow-lg">
                        NEW
                      </span>
                    </motion.button>
                  </SignInButton>
                </div>
              </div>

              {/* Interactive Calendar */}
              <motion.div
                className="relative rounded-3xl overflow-hidden border-2"
                style={{
                  borderColor: `rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.3)`,
                }}
                animate={currentTheme.noAnimations ? {} : {
                  boxShadow: [
                    `0 0 30px rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.3), 0 0 60px rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.2), 0 0 90px rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.1)`,
                    `0 0 50px rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.5), 0 0 100px rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.3), 0 0 150px rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.2)`,
                    `0 0 30px rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.3), 0 0 60px rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.2), 0 0 90px rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.1)`,
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* Animated Space Background */}
                {!currentTheme.noAnimations && (
                <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950">
                  {/* Twinkling Stars - Reduced from 100 to 50 for performance */}
                  {[...Array(50)].map((_, i) => {
                    const size = Math.random() > 0.7 ? 2 : 1;
                    return (
                      <motion.div
                        key={i}
                        className="absolute bg-white rounded-full"
                        style={{
                          width: `${size}px`,
                          height: `${size}px`,
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                          boxShadow: size === 2 ? '0 0 8px rgba(255, 255, 255, 0.8)' : '0 0 4px rgba(255, 255, 255, 0.6)',
                        }}
                        animate={{
                          opacity: [0.3, 1, 0.3],
                          scale: [0.8, 1.5, 0.8],
                        }}
                        transition={{
                          duration: Math.random() * 2 + 1.5,
                          repeat: Infinity,
                          delay: Math.random() * 2,
                          ease: "easeInOut"
                        }}
                      />
                    );
                  })}

                  {/* Neon Floating Particles - Reduced from 30 to 15 for performance */}
                  {[...Array(15)].map((_, i) => (
                    <motion.div
                      key={`particle-${i}`}
                      className="absolute w-3 h-3 rounded-full"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        background: `radial-gradient(circle, rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.8), rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.2))`,
                        boxShadow: `0 0 15px rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.8), 0 0 30px rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.4)`,
                      }}
                      animate={{
                        y: [0, -40, 0],
                        x: [0, Math.random() * 30 - 15, 0],
                        opacity: [0.4, 0.9, 0.4],
                        scale: [0.8, 1.3, 0.8],
                      }}
                      transition={{
                        duration: Math.random() * 4 + 4,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                        ease: "easeInOut"
                      }}
                    />
                  ))}

                  {/* Neon Grid Lines */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute w-full h-px top-1/4" style={{ background: `linear-gradient(to right, transparent, rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 1), transparent)` }} />
                    <div className="absolute w-full h-px top-2/4" style={{ background: `linear-gradient(to right, transparent, rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 1), transparent)` }} />
                    <div className="absolute w-full h-px top-3/4" style={{ background: `linear-gradient(to right, transparent, rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 1), transparent)` }} />
                  </div>
                </div>
                )}

                {/* Header - Dark Glassmorphic with Neon Effects */}
                <div className="relative p-6 bg-gradient-to-r from-slate-900 to-slate-800 backdrop-blur-xl border-b-2" style={{ borderColor: `rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.3)` }}>
                  {/* Animated Neon Border Top */}
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-0.5"
                    style={{ background: `linear-gradient(to right, transparent, rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 1), transparent)` }}
                    animate={{
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />

                  <div className="flex items-center gap-4 mb-4">
                    <motion.div
                      className="relative w-14 h-14 rounded-full flex items-center justify-center text-2xl"
                      style={{
                        background: `linear-gradient(135deg, rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.9), rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.6))`,
                      }}
                      animate={{
                        boxShadow: [
                          `0 0 30px rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.8), 0 0 60px rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.5)`,
                          `0 0 50px rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 1), 0 0 100px rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.7)`,
                          `0 0 30px rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.8), 0 0 60px rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.5)`,
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <div className="absolute inset-0 rounded-full border-2" style={{ borderColor: `rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.7)` }} />
                      <motion.div
                        className="absolute inset-0 rounded-full border-2"
                        style={{ borderColor: `rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.6)` }}
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.8, 0, 0.8],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeOut"
                        }}
                      />
                      <motion.div
                        className="absolute inset-0 rounded-full border-2"
                        style={{ borderColor: `rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.4)` }}
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.6, 0, 0.6],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeOut",
                          delay: 0.3
                        }}
                      />
                      {currentTheme.icon}
                    </motion.div>
                    <div>
                      <motion.h3
                        className="text-2xl font-bold bg-clip-text text-transparent"
                        style={{
                          backgroundImage: `linear-gradient(to right, rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 1), rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.6))`,
                          textShadow: `0 0 20px rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.5)`,
                        }}
                      >
                        30-Minute Demo Call
                      </motion.h3>
                      <p className="text-sm font-medium" style={{ color: `rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.9)`, textShadow: `0 0 10px rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.3)` }}>with Sarah Chen</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm" style={{ color: `rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.9)` }}>
                    <motion.div
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 backdrop-blur-sm border-2"
                      style={{ borderColor: `rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.4)` }}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: `0 0 25px rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.6), 0 0 50px rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.3)`,
                        borderColor: `rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.8)`
                      }}
                    >
                      <Clock className="w-4 h-4" style={{ color: `rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 1)`, filter: `drop-shadow(0 0 4px rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.8))` }} />
                      <span className="font-medium">30 min</span>
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 backdrop-blur-sm border-2"
                      style={{ borderColor: `rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.4)` }}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: `0 0 25px rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.6), 0 0 50px rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.3)`,
                        borderColor: `rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.8)`
                      }}
                    >
                      <Calendar className="w-4 h-4" style={{ color: `rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 1)`, filter: `drop-shadow(0 0 4px rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.8))` }} />
                      <span className="font-medium">Video Call</span>
                    </motion.div>
                  </div>
                </div>

                {!showConfirmation ? (
                  <div className="relative grid md:grid-cols-2 gap-6 p-6">
                    {/* Calendar Grid */}
                    <div className="relative p-6 rounded-2xl bg-white backdrop-blur-xl border border-white/20">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-sm font-bold text-gray-900">{currentMonth}</h4>
                        <div className="flex gap-2">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                          >
                            <span className="text-gray-900 text-sm font-bold">←</span>
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                          >
                            <span className="text-gray-900 text-sm font-bold">→</span>
                          </motion.button>
                        </div>
                      </div>

                      {/* Days of Week */}
                      <div className="grid grid-cols-7 gap-2 mb-3">
                        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
                          <div key={day} className="text-center text-xs font-bold text-gray-600 py-1">
                            {day}
                          </div>
                        ))}
                      </div>

                      {/* Calendar Dates with Enhanced Neon Glow */}
                      <div className="grid grid-cols-7 gap-2">
                        {[...Array(35)].map((_, i) => {
                          const date = i - 2
                          const isValidDate = date > 0 && date <= 30
                          const isSelected = date === selectedDate
                          const isPast = date < 13

                          return (
                            <motion.button
                              key={i}
                              onClick={() => isValidDate && !isPast && setSelectedDate(date)}
                              disabled={!isValidDate || isPast}
                              whileHover={isValidDate && !isPast ? {
                                scale: 1.15,
                                boxShadow: `0 0 30px rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.6), 0 0 50px rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.4)`
                              } : {}}
                              whileTap={isValidDate && !isPast ? { scale: 0.95 } : {}}
                              className={`aspect-square rounded-xl text-sm font-bold transition-all relative ${
                                !isValidDate
                                  ? 'invisible'
                                  : isPast
                                  ? 'text-gray-300 cursor-not-allowed'
                                  : isSelected
                                  ? 'bg-gradient-to-br from-black to-gray-900 text-white border-2'
                                  : 'text-gray-900 bg-white border-2 border-gray-200'
                              }`}
                              style={isSelected ? {
                                boxShadow: `0 0 30px rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.9), 0 0 60px rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.6), 0 0 90px rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.4), 0 0 120px rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.2)`,
                                borderColor: `rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 1)`
                              } : !isPast && isValidDate ? {
                                borderColor: `rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.3)`
                              } : {}}
                            >
                              {isSelected && (
                                <>
                                  {/* Multiple Expanding Neon Rings */}
                                  <motion.div
                                    className="absolute inset-0 rounded-xl border-3"
                                    style={{
                                      borderColor: `rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 1)`,
                                      boxShadow: `0 0 15px rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.8)`,
                                    }}
                                    animate={{
                                      scale: [1, 1.4, 1],
                                      opacity: [1, 0, 1],
                                    }}
                                    transition={{
                                      duration: 1.5,
                                      repeat: Infinity,
                                      ease: "easeOut"
                                    }}
                                  />
                                  <motion.div
                                    className="absolute inset-0 rounded-xl border-3"
                                    style={{
                                      borderColor: `rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.8)`,
                                      boxShadow: `0 0 20px rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.6)`,
                                    }}
                                    animate={{
                                      scale: [1, 1.6, 1],
                                      opacity: [0.8, 0, 0.8],
                                    }}
                                    transition={{
                                      duration: 1.5,
                                      repeat: Infinity,
                                      ease: "easeOut",
                                      delay: 0.2
                                    }}
                                  />
                                  <motion.div
                                    className="absolute inset-0 rounded-xl border-2"
                                    style={{
                                      borderColor: `rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.6)`,
                                      boxShadow: `0 0 25px rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.4)`,
                                    }}
                                    animate={{
                                      scale: [1, 1.8, 1],
                                      opacity: [0.6, 0, 0.6],
                                    }}
                                    transition={{
                                      duration: 1.5,
                                      repeat: Infinity,
                                      ease: "easeOut",
                                      delay: 0.4
                                    }}
                                  />
                                  {/* Inner Glow */}
                                  <motion.div
                                    className="absolute inset-2 rounded-lg"
                                    style={{
                                      backgroundColor: `rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.2)`,
                                    }}
                                    animate={{
                                      opacity: [0.2, 0.4, 0.2],
                                    }}
                                    transition={{
                                      duration: 2,
                                      repeat: Infinity,
                                      ease: "easeInOut"
                                    }}
                                  />
                                </>
                              )}
                              <span className="relative z-10" style={isSelected ? { textShadow: `0 0 10px rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.8)` } : {}}>{isValidDate && date}</span>
                            </motion.button>
                          )
                        })}
                      </div>
                    </div>

                    {/* Time Slots with Enhanced Neon Glow */}
                    <div className="relative">
                      <motion.h4
                        className="text-sm font-bold text-white mb-4 px-2"
                        style={{
                          textShadow: `0 0 15px rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.6)`,
                        }}
                        animate={{
                          textShadow: [
                            `0 0 15px rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.6)`,
                            `0 0 25px rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.8)`,
                            `0 0 15px rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.6)`,
                          ],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        {selectedDate ? `Nov ${selectedDate}, 2025` : 'Select a date'}
                      </motion.h4>

                      {selectedDate && (
                        <div className="space-y-3 max-h-80 overflow-y-auto pr-2 custom-scrollbar">
                          {['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'].map((time, index) => (
                            <motion.button
                              key={time}
                              onClick={() => setSelectedTime(time)}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                              whileHover={{
                                scale: 1.03,
                                boxShadow: selectedTime === time
                                  ? `0 0 40px rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.9), 0 0 80px rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.6)`
                                  : `0 0 25px rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.4), 0 0 50px rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.2)`
                              }}
                              whileTap={{ scale: 0.97 }}
                              className={`w-full p-4 rounded-2xl text-left text-sm font-bold transition-all relative overflow-hidden ${
                                selectedTime === time
                                  ? 'text-white border-3'
                                  : 'bg-white/90 text-gray-900 border-2 border-gray-200'
                              }`}
                              style={selectedTime === time ? {
                                background: `linear-gradient(to right, rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 1), rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.9), rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 1))`,
                                boxShadow: `0 0 30px rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.8), 0 0 60px rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.5), 0 0 90px rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.3)`,
                                borderColor: `rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.6)`
                              } : {
                                borderColor: `rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.3)`
                              }}
                            >
                              {selectedTime === time && (
                                <>
                                  {/* Animated Neon Glow Overlay */}
                                  <motion.div
                                    className="absolute inset-0"
                                    style={{
                                      background: `linear-gradient(to right, rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.3), rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.5))`
                                    }}
                                    animate={{
                                      opacity: [0.4, 0.7, 0.4],
                                    }}
                                    transition={{
                                      duration: 1.5,
                                      repeat: Infinity,
                                      ease: "easeInOut"
                                    }}
                                  />
                                  {/* Scanning Line Effect */}
                                  <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                    animate={{
                                      x: ['-100%', '200%'],
                                    }}
                                    transition={{
                                      duration: 2,
                                      repeat: Infinity,
                                      ease: "linear"
                                    }}
                                  />
                                  {/* Expanding Border Effect */}
                                  <motion.div
                                    className="absolute inset-0 rounded-2xl border-2"
                                    style={{
                                      borderColor: `rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.6)`
                                    }}
                                    animate={{
                                      scale: [1, 1.05, 1],
                                      opacity: [0.8, 0, 0.8],
                                    }}
                                    transition={{
                                      duration: 1.5,
                                      repeat: Infinity,
                                      ease: "easeOut"
                                    }}
                                  />
                                </>
                              )}
                              <div className="flex items-center justify-between relative z-10">
                                <span style={selectedTime === time ? { textShadow: '0 0 8px rgba(255, 255, 255, 0.8)' } : {}}>{time}</span>
                                {selectedTime === time && (
                                  <motion.div
                                    initial={{ scale: 0, rotate: -180 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{ type: "spring", stiffness: 200 }}
                                    style={{
                                      filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.9))',
                                    }}
                                  >
                                    <Check className="w-5 h-5" />
                                  </motion.div>
                                )}
                              </div>
                            </motion.button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="relative p-8">
                    <div className="text-center py-8">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="relative w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mx-auto mb-6"
                        style={{
                          boxShadow: '0 0 40px rgba(34, 197, 94, 0.6), 0 0 80px rgba(34, 197, 94, 0.3)'
                        }}
                      >
                        <CheckCircle2 className="w-10 h-10 text-white" />
                        <motion.div
                          className="absolute inset-0 rounded-full border-2 border-green-300"
                          animate={{
                            scale: [1, 1.5],
                            opacity: [0.8, 0],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeOut"
                          }}
                        />
                      </motion.div>
                      <h3 className="text-3xl font-bold text-white mb-4 bg-gradient-to-r from-cyan-400 to-cyan-200 bg-clip-text text-transparent">
                        You're All Set!
                      </h3>
                      <p className="text-base text-cyan-200/90 mb-8">
                        Your meeting is confirmed for November {selectedDate}, 2025 at {selectedTime}
                      </p>
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-600 text-white text-sm font-bold shadow-lg shadow-cyan-500/50"
                      >
                        <Calendar className="w-5 h-5" />
                        <span>Added to Calendar</span>
                      </motion.div>
                      <p className="mt-6 text-xs text-cyan-300/60">
                        A confirmation email has been sent to your inbox
                      </p>
                    </div>
                  </div>
                )}

                {/* Form & Confirm Button with Enhanced Neon */}
                {!showConfirmation && selectedTime && (
                  <div className="relative p-6 border-t-2" style={{ borderColor: `rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.3)` }}>
                    {/* Animated Neon Border Top */}
                    <motion.div
                      className="absolute top-0 left-0 right-0 h-1"
                      style={{ background: `linear-gradient(to right, transparent, rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 1), transparent)` }}
                      animate={{
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />

                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="px-4 py-3 rounded-xl border-2 text-white bg-white/5 backdrop-blur-sm focus:outline-none text-sm transition-all"
                        style={{
                          borderColor: `rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.4)`,
                          boxShadow: `0 0 15px rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.1)`,
                          color: `rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.9)`,
                        }}
                      />
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="px-4 py-3 rounded-xl border-2 text-white bg-white/5 backdrop-blur-sm focus:outline-none text-sm transition-all"
                        style={{
                          borderColor: `rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.4)`,
                          boxShadow: `0 0 15px rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.1)`,
                          color: `rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.9)`,
                        }}
                      />
                    </div>
                    <motion.button
                      onClick={() => setShowConfirmation(true)}
                      whileHover={{
                        scale: 1.02,
                        boxShadow: `0 0 40px rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.9), 0 0 80px rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.6), 0 0 120px rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.4)`
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-5 rounded-xl text-white font-bold text-base relative overflow-hidden group border-2"
                      style={{
                        background: `linear-gradient(to right, rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 1), rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.9), rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 1))`,
                        boxShadow: `0 0 25px rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.6), 0 0 50px rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.4)`,
                        borderColor: `rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.8)`
                      }}
                    >
                      <motion.div
                        className="absolute inset-0"
                        style={{
                          background: `linear-gradient(to right, rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.4), rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.6))`
                        }}
                        animate={{
                          x: ['-100%', '100%'],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                      {/* Pulsing Glow Background */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/10"
                        animate={{
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      {/* Expanding Border */}
                      <motion.div
                        className="absolute inset-0 rounded-xl border-2"
                        style={{
                          borderColor: `rgba(${currentTheme.neonColor.r}, ${currentTheme.neonColor.g}, ${currentTheme.neonColor.b}, 0.6)`
                        }}
                        animate={{
                          scale: [1, 1.02, 1],
                          opacity: [0.8, 0, 0.8],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeOut"
                        }}
                      />
                      <span
                        className="relative z-10 flex items-center justify-center gap-2"
                        style={{
                          textShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
                        }}
                      >
                        Confirm Booking for {selectedTime}
                        <ArrowRight
                          className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                          style={{
                            filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.9))',
                          }}
                        />
                      </span>
                    </motion.button>
                  </div>
                )}
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* PROBLEM/PAIN SECTION - Agitation */}
      <section className="relative py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-red-500/20 bg-red-500/10">
              <XCircle className="w-4 h-4 text-red-500" />
              <span className="text-sm text-red-500">The Problem Costing You Thousands</span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-bold mb-6">
              You're Hemorrhaging<br/>
              <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Time & Money
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Every minute spent on scheduling is a minute NOT spent making money.<br/>
              Here's the brutal truth about what it's costing you:
            </p>
          </motion.div>

          {/* Pain Points Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {[
              {
                icon: Mail,
                title: 'Email Hell',
                stat: '8 emails per meeting',
                description: 'You send "What time works for you?" They reply "Tuesday?" You reply "Morning or afternoon?" They reply "10am?" You reply "Booked, how about 2pm?"... Sound familiar?',
                color: 'from-red-500 to-orange-500'
              },
              {
                icon: DollarSign,
                title: 'Subscription Slavery',
                stat: '$360+/year wasted',
                description: 'Paying $15-30/month for "Pro" features you barely use. Meanwhile, Calendly gets richer while you stay stuck on a hamster wheel of recurring charges.',
                color: 'from-orange-500 to-yellow-500'
              },
              {
                icon: TrendingDown,
                title: 'Dying Conversions',
                stat: '30% drop in bookings',
                description: 'Your scheduling link is so clunky that prospects give up halfway through. Every abandoned booking is money left on the table.',
                color: 'from-yellow-500 to-red-500'
              },
              {
                icon: AlertCircle,
                title: 'No-Show Nightmares',
                stat: '20% no-show rate',
                description: 'Timezone confusion, double-bookings, last-minute cancellations. You block time, they ghost. Your calendar is chaos, your revenue suffers.',
                color: 'from-red-500 to-pink-500'
              }
            ].map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-red-500/30 transition-all">
                  <div className={`absolute inset-0 bg-gradient-to-r ${problem.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`} />
                  <div className="relative">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${problem.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <problem.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{problem.title}</h3>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 mb-4">
                      <span className="text-sm font-semibold text-red-500">{problem.stat}</span>
                    </div>
                    <p className="text-gray-400 leading-relaxed">{problem.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Cost Calculator - Shock Value */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative p-12 rounded-3xl border border-red-500/20 bg-gradient-to-br from-red-500/10 to-orange-500/10 backdrop-blur-sm text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 rounded-3xl" />
            <div className="relative">
              <h3 className="text-3xl font-bold mb-8">
                The True Cost of Broken Scheduling
              </h3>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="text-5xl font-bold mb-2">10hrs</div>
                  <div className="text-sm text-gray-400">Wasted per week</div>
                </div>
                <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="text-5xl font-bold mb-2">$5,200</div>
                  <div className="text-sm text-gray-400">Lost productivity/year</div>
                </div>
                <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="text-5xl font-bold mb-2">$360</div>
                  <div className="text-sm text-gray-400">Subscription fees/year</div>
                </div>
              </div>
              <div className="text-2xl font-bold">
                Total: <span className="text-red-500 text-4xl">$5,560</span> per year down the drain.
              </div>
              <p className="mt-4 text-gray-400">
                That's enough to hire a part-time assistant, take a vacation, or invest in real growth.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SOLUTION SECTION - The Answer */}
      <section className="relative py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-green-500/20 bg-green-500/10">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span className="text-sm text-green-500">The Solution</span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-bold mb-6">
              Introducing<br/>
              <span className="bg-gradient-to-r from-white via-gray-400 to-white bg-clip-text text-transparent">
                CalendarPro
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The only scheduling platform that actually gives a damn about your time and money.
            </p>
          </motion.div>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {[
                {
                  icon: Bolt,
                  title: '60-Second Setup',
                  description: 'From signup to first booking faster than ordering coffee. No PhD required, no 10-step wizard, just pure simplicity.'
                },
                {
                  icon: TrendingUp,
                  title: '3X Higher Conversions',
                  description: 'Beautiful, fast booking pages that don\'t suck. Your prospects will actually complete the booking instead of rage-quitting.'
                },
                {
                  icon: Lock,
                  title: '99.9% Uptime',
                  description: 'Enterprise-grade reliability. Your calendar never sleeps, crashes, or takes "maintenance breaks" at the worst possible time.'
                },
                {
                  icon: Smile,
                  title: 'Client Experience',
                  description: 'Your clients will think you\'re a genius. "Wow, that was easy!" becomes your new normal. More referrals = more revenue.'
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{benefit.title}</h4>
                    <p className="text-gray-400">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Pricing Comparison */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold mb-6 text-center">Stop the Bleeding</h3>
              <div className="space-y-4 mb-6">
                <div className="p-6 rounded-xl bg-red-500/10 border border-red-500/20">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Other Tools</span>
                    <X className="w-5 h-5 text-red-500" />
                  </div>
                  <div className="text-3xl font-bold text-red-500">$15-30/mo</div>
                  <div className="text-sm text-gray-400 mt-1">= $360+ per year, FOREVER</div>
                </div>
                <div className="p-6 rounded-xl bg-green-500/10 border-2 border-green-500/50 relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-green-500 text-black text-xs font-bold rounded-full">
                    BEST VALUE
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">CalendarPro</span>
                    <Check className="w-5 h-5 text-green-500" />
                  </div>
                  <div className="text-3xl font-bold text-green-500">$29</div>
                  <div className="text-sm text-gray-400 mt-1">One-time. Lifetime access. Done.</div>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                <p className="text-sm text-center font-medium">
                  Save <span className="font-bold text-yellow-500">$331</span> in year 1 alone.<br/>
                  <span className="text-gray-400">That's more than 11X ROI instantly.</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="relative py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6">Built for Speed, Power & Profit</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to turn scheduling from a nightmare into your secret weapon.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Lightning Fast',
                description: 'Sub-second load times. Your booking page loads before they finish blinking.'
              },
              {
                icon: Shield,
                title: 'Fort Knox Security',
                description: 'SOC 2 compliant, end-to-end encryption. Your data is safer than Fort Knox.'
              },
              {
                icon: Calendar,
                title: 'Smart Scheduling',
                description: 'AI-powered conflict detection. Never get double-booked or miss a meeting again.'
              },
              {
                icon: Globe,
                title: 'Timezone Magic',
                description: 'Automatic timezone detection. Works seamlessly across 425+ timezones worldwide.'
              },
              {
                icon: CreditCard,
                title: 'Payment Integration',
                description: 'Collect payment at booking. Stripe & PayPal built-in. No more payment-chasing.'
              },
              {
                icon: BarChart3,
                title: 'Analytics Dashboard',
                description: 'Know exactly what\'s working. Track bookings, revenue, no-shows, and optimize.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all"
              >
                <feature.icon className="w-12 h-12 mb-6 text-white group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF/TESTIMONIALS */}
      <section className="relative py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <h2 className="text-5xl font-bold mb-6">
              Real People. Real Results.<br/>
              <span className="bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                Real Revenue.
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Join 200,000+ professionals who stopped wasting time and started making more money.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Chen',
                role: 'Business Coach',
                avatar: '👩‍💼',
                text: 'CalendarPro gave me back 10 hours a week. I reinvested that time into client work and made an extra $12K in 3 months. Best $29 I ever spent.',
                result: '+$12K in 3 months',
                stars: 5
              },
              {
                name: 'Marcus Johnson',
                role: 'SaaS Consultant',
                avatar: '👨‍💻',
                text: 'I was paying Calendly $30/month like a sucker. CalendarPro does EVERYTHING Calendly does, but better, for $29 one-time. No-brainer.',
                result: 'Saved $360/year',
                stars: 5
              },
              {
                name: 'Emily Rodriguez',
                role: 'Sales Director',
                avatar: '👩',
                text: 'Our team conversion rate jumped 40% after switching. The booking experience is so smooth that prospects don\'t drop off anymore. Game changer.',
                result: '+40% conversion',
                stars: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">"{testimonial.text}"</p>
                <div className="inline-flex items-center px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full">
                  <span className="text-sm font-semibold text-green-500">{testimonial.result}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="relative py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6">So Simple, It's Stupid</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              No complicated setup. No 47-step wizard. Just 3 clicks and you're booking.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: '1',
                title: 'Sign Up Free',
                description: 'Takes 60 seconds. Email or Google. No credit card, no BS.',
                icon: Target
              },
              {
                step: '2',
                title: 'Create Event Type',
                description: 'Name it, set duration, pick your availability. Done in 2 minutes.',
                icon: Calendar
              },
              {
                step: '3',
                title: 'Share & Book',
                description: 'Copy your link. Send it. Watch bookings roll in automatically.',
                icon: Zap
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 border-2 border-white/20 mb-6 text-3xl font-bold">
                    {step.step}
                  </div>
                  <step.icon className="w-12 h-12 mx-auto mb-6 text-white" />
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-white/20 to-transparent -z-10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TRY IT LIVE - Interactive Calendar Demo - MOVED TO HERO SECTION */}
      {/* This section has been moved to the hero section to create a split layout like Calendly */}
      {/* The interactive demo now appears on the right side of the hero for immediate engagement */}

      {/* PRICING SECTION */}
      <section id="pricing" className="relative py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6">Pricing That Actually Makes Sense</h2>
            <p className="text-xl text-gray-400">No hidden fees. No surprises. No BS. Just honest, transparent pricing.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8"
          >
            {/* Free Plan */}
            <div className="p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-2">Free</h3>
              <div className="text-5xl font-bold mb-6">$0</div>
              <p className="text-gray-400 mb-6">Perfect to get started and see the magic</p>
              <ul className="space-y-4 mb-8">
                {['Unlimited bookings', 'Calendar sync', 'Email notifications', 'Basic customization'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-white" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <SignInButton mode="modal">
                <Button className="w-full bg-white/10 border border-white/20 hover:bg-white/20">
                  Start Free
                </Button>
              </SignInButton>
            </div>

            {/* Pro Plan */}
            <div className="relative p-8 border-2 border-white rounded-2xl bg-white/10 backdrop-blur-sm">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-black text-sm font-bold rounded-full">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <div className="text-5xl font-bold mb-2">
                $29<span className="text-lg text-gray-400">/lifetime</span>
              </div>
              <p className="text-gray-400 mb-6">Pay once. Own forever. Save $331+ per year.</p>
              <ul className="space-y-4 mb-8">
                {[
                  'Everything in Free',
                  'Payment integration (Stripe/PayPal)',
                  'SMS reminders',
                  'Custom branding',
                  'Priority support',
                  'Advanced analytics',
                  'Team scheduling',
                  'API access'
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-white" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <SignInButton mode="modal">
                <Button className="w-full bg-white text-black hover:bg-gray-200">
                  Get Pro - $29 Lifetime
                </Button>
              </SignInButton>
            </div>
          </motion.div>

          {/* Guarantee */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-green-500/20 bg-green-500/10">
              <Shield className="w-5 h-5 text-green-500" />
              <span className="text-sm font-semibold">60-Day Money-Back Guarantee - No Questions Asked</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-32 border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">Questions? We Got Answers.</h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                q: 'Is it really $29 one-time, or is there a catch?',
                a: 'Yes, really. $29 one-time gets you Pro features for life. No recurring charges, no hidden fees, no "gotchas." We make money when you succeed and tell your friends.'
              },
              {
                q: 'Can I really set it up in 60 seconds?',
                a: 'Yes. Sign up with email or Google, create an event type, copy your link. That\'s it. If it takes longer than 2 minutes, you\'re doing it wrong (or you type really slow).'
              },
              {
                q: 'What if I don\'t like it?',
                a: '60-day money-back guarantee. No questions, no hassle, no hard feelings. We\'ll refund you in full if you\'re not happy.'
              },
              {
                q: 'Does it work with Google Calendar?',
                a: 'Yes. Also works with Outlook, iCal, and pretty much any calendar that uses CalDAV. Sync is automatic and instant.'
              },
              {
                q: 'Can I collect payments at booking?',
                a: 'Yes! Stripe and PayPal integration built-in. Collect deposits, full payments, or charge for no-shows. Your choice.'
              },
              {
                q: 'Is there a limit on bookings?',
                a: 'Free plan: Unlimited. Pro plan: Still unlimited. We don\'t believe in artificial limits.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all"
              >
                <h3 className="text-xl font-bold mb-3">{faq.q}</h3>
                <p className="text-gray-400 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-32 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-12 rounded-3xl border border-white/20 bg-white/5 backdrop-blur-sm"
          >
            <h2 className="text-5xl sm:text-6xl font-bold mb-6">
              Stop Wasting Time.<br/>
              <span className="bg-gradient-to-r from-white via-gray-400 to-white bg-clip-text text-transparent">
                Start Making Money.
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join 200,000+ professionals who reclaimed 10 hours per week.<br/>
              Your first booking is 60 seconds away.
            </p>
            <SignInButton mode="modal">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200 px-12 py-6 text-xl group">
                Start Free - Takes 60 Seconds
                <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </SignInButton>
            <p className="mt-6 text-sm text-gray-400">
              No credit card • Setup in 60 seconds • Cancel anytime
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span className="font-bold">CalendarPro</span>
            </div>
            <div className="text-sm text-gray-400">
              © 2025 CalendarPro. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
