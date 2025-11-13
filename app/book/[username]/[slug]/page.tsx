'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar as CalendarIcon, Clock, Video, MapPin, Check, ArrowLeft, ArrowRight, Globe, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

// This is a mock - in production, fetch from Supabase
const mockEventType = {
  id: '1',
  name: 'Discovery Call',
  description: 'Let\'s discuss your needs and how we can help you achieve your goals.',
  duration: 30,
  price: 0,
  is_paid: false,
  color: '#6366f1',
  user: {
    full_name: 'John Doe',
    company: 'ACME Inc.',
    avatar: null
  }
}

export default function BookingPage() {
  const params = useParams()
  const [step, setStep] = useState(1) // 1: date, 2: time, 3: details, 4: confirmation
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: ''
  })

  const [currentMonth, setCurrentMonth] = useState(new Date())

  // Generate calendar days
  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear()
    const month = currentMonth.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []
    // Add empty cells for days before month starts
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }
    // Add days of month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i))
    }
    return days
  }

  const availableTimes = [
    '09:00 AM',
    '09:30 AM',
    '10:00 AM',
    '10:30 AM',
    '11:00 AM',
    '11:30 AM',
    '01:00 PM',
    '01:30 PM',
    '02:00 PM',
    '02:30 PM',
    '03:00 PM',
    '03:30 PM',
    '04:00 PM',
  ]

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date)
    setStep(2)
  }

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
    setStep(3)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // In production: create booking in Supabase
    setStep(4)
  }

  const formatDate = (date: Date | null) => {
    if (!date) return ''
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December']
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left sidebar - Event info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            <Card className="p-8 sticky top-8">
              {/* User info */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-200">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white text-2xl font-bold">
                  {mockEventType.user.full_name[0]}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{mockEventType.user.full_name}</h3>
                  <p className="text-sm text-gray-600">{mockEventType.user.company}</p>
                </div>
              </div>

              {/* Event details */}
              <h1 className="text-2xl font-bold text-gray-900 mb-3">
                {mockEventType.name}
              </h1>
              <p className="text-gray-600 mb-6">
                {mockEventType.description}
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-purple-600" />
                  </div>
                  <span className="font-medium">{mockEventType.duration} minutes</span>
                </div>

                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                    <Video className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="font-medium">Google Meet</span>
                </div>

                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="font-medium">Eastern Time (US & Canada)</span>
                </div>

                {mockEventType.is_paid && (
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center">
                      <span className="text-yellow-600 font-bold">$</span>
                    </div>
                    <span className="font-medium">${mockEventType.price}</span>
                  </div>
                )}
              </div>

              {/* Selected date/time summary */}
              {selectedDate && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 pt-6 border-t border-gray-200"
                >
                  <p className="text-sm font-medium text-gray-700 mb-2">Selected:</p>
                  <div className="flex items-center gap-2 text-gray-900">
                    <CalendarIcon className="w-4 h-4" />
                    <span className="font-semibold">{formatDate(selectedDate)}</span>
                  </div>
                  {selectedTime && (
                    <div className="flex items-center gap-2 text-gray-900 mt-2">
                      <Clock className="w-4 h-4" />
                      <span className="font-semibold">{selectedTime}</span>
                    </div>
                  )}
                </motion.div>
              )}
            </Card>
          </motion.div>

          {/* Right side - Booking interface */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <Card className="p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Select a Date & Time
                    </h2>

                    {/* Calendar */}
                    <div className="bg-white rounded-xl">
                      {/* Month navigation */}
                      <div className="flex items-center justify-between mb-6">
                        <button
                          onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)))}
                          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                          <ArrowLeft className="w-5 h-5" />
                        </button>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                        </h3>
                        <button
                          onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)))}
                          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                          <ArrowRight className="w-5 h-5" />
                        </button>
                      </div>

                      {/* Day names */}
                      <div className="grid grid-cols-7 gap-2 mb-2">
                        {dayNames.map(day => (
                          <div key={day} className="text-center text-sm font-medium text-gray-600 py-2">
                            {day}
                          </div>
                        ))}
                      </div>

                      {/* Calendar grid */}
                      <div className="grid grid-cols-7 gap-2">
                        {generateCalendarDays().map((date, index) => {
                          if (!date) {
                            return <div key={`empty-${index}`} className="aspect-square" />
                          }

                          const isToday = date.toDateString() === new Date().toDateString()
                          const isPast = date < new Date(new Date().setHours(0, 0, 0, 0))
                          const isSelected = selectedDate?.toDateString() === date.toDateString()

                          return (
                            <motion.button
                              key={date.toISOString()}
                              onClick={() => !isPast && handleDateSelect(date)}
                              disabled={isPast}
                              whileHover={!isPast ? { scale: 1.05 } : {}}
                              whileTap={!isPast ? { scale: 0.95 } : {}}
                              className={`aspect-square rounded-lg font-medium transition-all ${
                                isPast
                                  ? 'text-gray-300 cursor-not-allowed'
                                  : isSelected
                                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                                  : isToday
                                  ? 'bg-purple-100 text-purple-900'
                                  : 'hover:bg-gray-100 text-gray-900'
                              }`}
                            >
                              {date.getDate()}
                            </motion.button>
                          )
                        })}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <Card className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-2xl font-bold text-gray-900">
                        Select a Time
                      </h2>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setStep(1)}
                      >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back
                      </Button>
                    </div>

                    <p className="text-gray-600 mb-6">
                      {formatDate(selectedDate)}
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {availableTimes.map((time) => (
                        <motion.button
                          key={time}
                          onClick={() => handleTimeSelect(time)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="p-4 text-center rounded-lg border-2 border-gray-200 hover:border-purple-600 hover:bg-purple-50 transition-all font-medium text-gray-900"
                        >
                          {time}
                        </motion.button>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <Card className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-2xl font-bold text-gray-900">
                        Enter Details
                      </h2>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setStep(2)}
                      >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back
                      </Button>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                          placeholder="you@example.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number (optional)
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Additional Notes (optional)
                        </label>
                        <textarea
                          value={formData.notes}
                          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                          rows={4}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                          placeholder="Anything you'd like us to know..."
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full py-6 text-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                      >
                        Confirm Booking
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </form>
                  </Card>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <Card className="p-12 text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.2 }}
                      className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6"
                    >
                      <Check className="w-10 h-10 text-green-600" />
                    </motion.div>

                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      You're all set!
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                      Your booking has been confirmed. A confirmation email has been sent to{' '}
                      <span className="font-semibold">{formData.email}</span>
                    </p>

                    <div className="bg-purple-50 rounded-xl p-6 mb-8">
                      <p className="text-sm font-medium text-gray-700 mb-4">Meeting Details:</p>
                      <div className="space-y-3 text-left">
                        <div className="flex items-center gap-3">
                          <CalendarIcon className="w-5 h-5 text-purple-600" />
                          <span>{formatDate(selectedDate)}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Clock className="w-5 h-5 text-purple-600" />
                          <span>{selectedTime}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <User className="w-5 h-5 text-purple-600" />
                          <span>{mockEventType.user.full_name}</span>
                        </div>
                      </div>
                    </div>

                    <Button
                      onClick={() => window.location.href = '/'}
                      variant="outline"
                    >
                      Back to Home
                    </Button>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
