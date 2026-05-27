'use client'

import { motion } from 'framer-motion'
import { BarChart3, Zap, Shield, Users, Clock, TrendingUp } from 'lucide-react'

const features = [
  {
    id: 1,
    title: 'Real-Time Analytics',
    description: 'Track spending across all departments with instant dashboards and detailed reports.',
    icon: BarChart3,
    color: 'from-primary',
  },
  {
    id: 2,
    title: 'Smart Budgeting',
    description: 'Set budgets per department and get alerts when approaching limits.',
    icon: Zap,
    color: 'from-blue-500',
  },
  {
    id: 3,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption and compliance with major regulatory standards.',
    icon: Shield,
    color: 'from-purple-500',
  },
  {
    id: 4,
    title: 'Team Collaboration',
    description: 'Invite team members, set roles, and manage approvals seamlessly.',
    icon: Users,
    color: 'from-pink-500',
  },
  {
    id: 5,
    title: 'Instant Reports',
    description: 'Generate professional expense and financial reports in seconds.',
    icon: Clock,
    color: 'from-orange-500',
  },
  {
    id: 6,
    title: 'Trend Analysis',
    description: 'Understand spending patterns and forecast future expenses accurately.',
    icon: TrendingUp,
    color: 'from-green-500',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function Features() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Powerful Features
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Everything you need to manage your business finances with confidence
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.id}
                variants={item}
                className="group relative bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />

                <div className="relative">
                  {/* Icon */}
                  <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} to-transparent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
