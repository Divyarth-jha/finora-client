'use client'

import { motion } from 'framer-motion'
import { BarChart3, TrendingUp, DollarSign, Users } from 'lucide-react'

export function Dashboard() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Powerful Dashboard
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Get a complete view of your finances at a glance
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 rounded-2xl blur-3xl" />

          <div className="relative bg-card border border-primary/20 rounded-2xl p-8 backdrop-blur-sm overflow-hidden">
            {/* Dashboard Preview */}
            <div className="space-y-6">
              {/* Top Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: DollarSign, label: 'Total Expenses', value: '$24,582' },
                  { icon: TrendingUp, label: 'Monthly Growth', value: '+12.5%' },
                  { icon: BarChart3, label: 'Budget Used', value: '68%' },
                  { icon: Users, label: 'Team Members', value: '12' },
                ].map((stat, index) => (
                  <div key={index} className="bg-secondary/50 rounded-lg p-4 border border-border">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                        <stat.icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-xs text-foreground/70">{stat.label}</span>
                    </div>
                    <span className="font-display font-bold text-lg">{stat.value}</span>
                  </div>
                ))}
              </div>

              {/* Charts Area */}
              <div className="grid md:grid-cols-2 gap-4">
                {/* Main Chart */}
                <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                  <h3 className="font-display font-semibold mb-4">Expenses Overview</h3>
                  <div className="h-48 flex items-end gap-2 justify-end">
                    {[65, 45, 72, 52, 68, 45, 75, 58].map((height, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-primary to-primary/60 rounded-t opacity-80 hover:opacity-100 transition-opacity"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>

                {/* Breakdown */}
                <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                  <h3 className="font-display font-semibold mb-4">Category Breakdown</h3>
                  <div className="space-y-3">
                    {[
                      { name: 'Operations', percent: 35, color: 'from-primary' },
                      { name: 'Marketing', percent: 25, color: 'from-blue-500' },
                      { name: 'Personnel', percent: 30, color: 'from-purple-500' },
                      { name: 'Other', percent: 10, color: 'from-orange-500' },
                    ].map((category, index) => (
                      <div key={index}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-foreground/70">{category.name}</span>
                          <span className="font-semibold">{category.percent}%</span>
                        </div>
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${category.color}`}
                            style={{ width: `${category.percent}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
