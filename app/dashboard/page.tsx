'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  Calendar,
  Clock,
  DollarSign,
  TrendingUp,
  Plus,
  ArrowRight,
  Users,
  CheckCircle2
} from 'lucide-react'
import { supabase } from '@/lib/supabase'

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null)
  const [stats, setStats] = useState({
    totalBookings: 0,
    upcomingBookings: 0,
    revenue: 0,
    eventTypes: 0
  })

  useEffect(() => {
    loadUserData()
  }, [])

  const loadUserData = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    setUser(user)
  }

  const statCards = [
    {
      title: 'Total Bookings',
      value: stats.totalBookings,
      icon: Calendar,
      color: 'from-blue-500 to-cyan-500',
      change: '+12%'
    },
    {
      title: 'Upcoming',
      value: stats.upcomingBookings,
      icon: Clock,
      color: 'from-purple-500 to-pink-500',
      change: '+8%'
    },
    {
      title: 'Revenue',
      value: `$${stats.revenue}`,
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500',
      change: '+23%'
    },
    {
      title: 'Event Types',
      value: stats.eventTypes,
      icon: Users,
      color: 'from-orange-500 to-red-500',
      change: '+2'
    }
  ]

  const quickActions = [
    {
      title: 'Create Event Type',
      description: 'Set up a new booking type',
      icon: Plus,
      href: '/dashboard/events/new',
      color: 'from-purple-600 to-blue-600'
    },
    {
      title: 'View Bookings',
      description: 'See all your scheduled meetings',
      icon: Calendar,
      href: '/dashboard/bookings',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      title: 'Connect Calendar',
      description: 'Sync with Google Calendar',
      icon: Calendar,
      href: '/dashboard/settings/calendars',
      color: 'from-green-600 to-emerald-600'
    }
  ]

  const recentBookings = [
    {
      id: 1,
      title: 'Discovery Call with John Doe',
      time: 'Today at 2:00 PM',
      status: 'confirmed'
    },
    {
      id: 2,
      title: 'Strategy Session with Jane Smith',
      time: 'Tomorrow at 10:00 AM',
      status: 'confirmed'
    },
    {
      id: 3,
      title: 'Consultation with Bob Wilson',
      time: 'Friday at 3:30 PM',
      status: 'pending'
    }
  ]

  return (
    <div className="max-w-7xl mx-auto">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome back, {user?.user_metadata?.full_name || 'there'}!
        </h1>
        <p className="text-gray-600">
          Here's what's happening with your bookings today.
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-semibold text-green-600">
                  {stat.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                {stat.value}
              </h3>
              <p className="text-sm text-gray-600">{stat.title}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-8"
      >
        <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quickActions.map((action, index) => (
            <Link key={index} href={action.href}>
              <Card className="p-6 hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer group">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${action.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <action.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {action.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {action.description}
                </p>
                <div className="flex items-center text-purple-600 font-medium text-sm">
                  Get started
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Recent Bookings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">Recent Bookings</h2>
          <Link href="/dashboard/bookings">
            <Button variant="outline">View All</Button>
          </Link>
        </div>
        <Card className="divide-y divide-gray-200">
          {recentBookings.length > 0 ? (
            recentBookings.map((booking) => (
              <div key={booking.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{booking.title}</h3>
                      <p className="text-sm text-gray-600">{booking.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {booking.status === 'confirmed' ? (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        <CheckCircle2 className="w-3 h-3 mr-1" />
                        Confirmed
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        <Clock className="w-3 h-3 mr-1" />
                        Pending
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="p-12 text-center">
              <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                No bookings yet
              </h3>
              <p className="text-gray-600 mb-6">
                Create your first event type to start accepting bookings
              </p>
              <Link href="/dashboard/events/new">
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Create Event Type
                </Button>
              </Link>
            </div>
          )}
        </Card>
      </motion.div>
    </div>
  )
}
