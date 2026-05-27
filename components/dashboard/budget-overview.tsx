'use client'

import { motion } from 'framer-motion'

const budgets = [
  { name: 'Operations', used: 2800, limit: 5000, color: 'from-primary' },
  { name: 'Marketing', used: 1200, limit: 3000, color: 'from-blue-500' },
  { name: 'Personnel', used: 4500, limit: 8000, color: 'from-purple-500' },
  { name: 'Other', used: 600, limit: 1000, color: 'from-orange-500' },
]

export function BudgetOverview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="bg-card border border-border rounded-xl p-6 h-full"
    >
      <h2 className="font-display font-semibold text-lg mb-6">Budget Status</h2>

      <div className="space-y-6">
        {budgets.map((budget, index) => {
          const percentage = (budget.used / budget.limit) * 100
          const isWarning = percentage > 75
          const isCritical = percentage > 90

          return (
            <div key={budget.name}>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-sm">{budget.name}</h3>
                <span className={`text-xs font-semibold ${
                  isCritical ? 'text-destructive' : isWarning ? 'text-warning' : 'text-foreground/70'
                }`}>
                  {percentage.toFixed(0)}%
                </span>
              </div>

              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(percentage, 100)}%` }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`h-full rounded-full bg-gradient-to-r ${budget.color}`}
                />
              </div>

              <p className="text-xs text-foreground/70 mt-1">
                ${budget.used.toLocaleString()} / ${budget.limit.toLocaleString()}
              </p>
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}
