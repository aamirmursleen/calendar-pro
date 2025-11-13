'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useUser } from '@clerk/nextjs'
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

export default function DashboardPage() {
  const { user } = useUser()
  const [stats, setStats] = useState({
    totalBookings: 0,
    upcomingBookings: 0,
    revenue: 0,
    eventTypes: 0
  })

  const statCards = [
    {
      title: 'Total Bookings',
      value: stats.totalBookings,
      icon: Calendar,
      change: '+12%'
    },
    {
      title: 'Upcoming',
      value: stats.upcomingBookings,
      icon: Clock,
      change: '+8%'
    },
    {
      title: 'Revenue',
      value: `$${stats.revenue}`,
      icon: DollarSign,
      change: '+23%'
    },
    {
      title: 'Event Types',
      value: stats.eventTypes,
      icon: Users,
      change: '+2'
    }
  ]

  const quickActions = [
    {
      title: 'Create Event Type',
      description: 'Set up a new booking type',
      icon: Plus,
      href: '/dashboard/events/new',
    },
    {
      title: 'View Bookings',
      description: 'See all your scheduled meetings',
      icon: Calendar,
      href: '/dashboard/bookings',
    },
    {
      title: 'Connect Calendar',
      description: 'Sync with Google Calendar',
      icon: Calendar,
      href: '/dashboard/settings/calendars',
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
        <h1 className="text-3xl font-bold text-white mb-2">
          Welcome back, {user?.firstName || user?.username || 'there'}!
        </h1>
        <p className="text-gray-400">
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
            <Card className="p-6 bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-semibold text-white">
                  {stat.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">
                {stat.value}
              </h3>
              <p className="text-sm text-gray-400">{stat.title}</p>
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
        <h2 className="text-xl font-bold text-white mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quickActions.map((action, index) => (
            <Link key={index} href={action.href}>
              <Card className="p-6 bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all hover:-translate-y-1 cursor-pointer group">
                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <action.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {action.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4">
                  {action.description}
                </p>
                <div className="flex items-center text-white font-medium text-sm">
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
          <h2 className="text-xl font-bold text-white">Recent Bookings</h2>
          <Link href="/dashboard/bookings">
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
              View All
            </Button>
          </Link>
        </div>
        <Card className="bg-white/5 border-white/10 backdrop-blur-sm divide-y divide-white/10">
          {recentBookings.length > 0 ? (
            recentBookings.map((booking) => (
              <div key={booking.id} className="p-6 hover:bg-white/5 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{booking.title}</h3>
                      <p className="text-sm text-gray-400">{booking.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {booking.status === 'confirmed' ? (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white border border-white/20">
                        <CheckCircle2 className="w-3 h-3 mr-1" />
                        Confirmed
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-gray-400 border border-white/20">
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
              <h3 className="text-lg font-semibold text-white mb-2">
                No bookings yet
              </h3>
              <p className="text-gray-400 mb-6">
                Create your first event type to start accepting bookings
              </p>
              <Link href="/dashboard/events/new">
                <Button className="bg-white text-black hover:bg-gray-200">
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
