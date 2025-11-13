'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Plus, Clock, DollarSign, Edit, Copy, Trash2, ToggleLeft, ToggleRight } from 'lucide-react'

export default function EventTypesPage() {
  // Mock data - in production, fetch from Supabase
  const [eventTypes, setEventTypes] = useState([
    {
      id: '1',
      name: 'Discovery Call',
      slug: 'discovery',
      duration: 30,
      is_paid: false,
      price: 0,
      is_active: true,
      color: '#6366f1'
    },
    {
      id: '2',
      name: 'Strategy Session',
      slug: 'strategy',
      duration: 60,
      is_paid: true,
      price: 150,
      is_active: true,
      color: '#8b5cf6'
    }
  ])

  const copyLink = (slug: string) => {
    const link = `${window.location.origin}/book/username/${slug}`
    navigator.clipboard.writeText(link)
    alert('Link copied to clipboard!')
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Event Types</h1>
          <p className="text-gray-600">Create and manage your booking types</p>
        </div>
        <Link href="/dashboard/events/new">
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600">
            <Plus className="w-4 h-4 mr-2" />
            Create Event Type
          </Button>
        </Link>
      </div>

      {eventTypes.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-6">
          {eventTypes.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: event.color + '20', color: event.color }}
                    >
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        {event.name}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span>{event.duration} min</span>
                        {event.is_paid && (
                          <span className="flex items-center gap-1">
                            <DollarSign className="w-4 h-4" />
                            {event.price}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  {event.is_active ? (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Active
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      Inactive
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyLink(event.slug)}
                  >
                    <Copy className="w-4 h-4 mr-2" />
                    Copy Link
                  </Button>
                  <Link href={`/dashboard/events/${event.id}`}>
                    <Button variant="outline" size="sm">
                      <Edit className="w-4 h-4 mr-2" />
                      Edit
                    </Button>
                  </Link>
                  <Button variant="outline" size="sm">
                    {event.is_active ? <ToggleRight className="w-4 h-4" /> : <ToggleLeft className="w-4 h-4" />}
                  </Button>
                  <Button variant="outline" size="sm">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      ) : (
        <Card className="p-12 text-center">
          <Clock className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            No event types yet
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
        </Card>
      )}
    </div>
  )
}
