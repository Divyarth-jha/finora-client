'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'

const budgets = [
  { id: 1, name: 'Operations', limit: 5000, spent: 2800, category: 'All operational expenses' },
  { id: 2, name: 'Marketing', limit: 3000, spent: 1200, category: 'Marketing campaigns and ads' },
  { id: 3, name: 'Personnel', limit: 8000, spent: 4500, category: 'Salaries and benefits' },
  { id: 4, name: 'Other', limit: 1000, spent: 600, category: 'Miscellaneous expenses' },
]

export default function BudgetsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex justify-between items-start gap-4">
        <div>
          <h1 className="font-display text-3xl font-bold mb-2">Budgets</h1>
          <p className="text-foreground/70">Set and manage spending budgets for your business</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 gap-2">
          <Plus size={18} />
          New Budget
        </Button>
      </div>

      {/* Budget Cards */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
        className="grid md:grid-cols-2 lg:grid-cols-2 gap-6"
      >
        {budgets.map((budget) => {
          const percentage = (budget.spent / budget.limit) * 100
          const isWarning = percentage > 75
          const isCritical = percentage > 90

          return (
            <motion.div
              key={budget.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`bg-card border-2 rounded-xl p-6 transition-all ${
                isCritical ? 'border-destructive/50' : isWarning ? 'border-warning/50' : 'border-border hover:border-primary/50'
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-display font-bold text-lg">{budget.name}</h3>
                  <p className="text-sm text-foreground/70">{budget.category}</p>
                </div>
                <span className={`text-lg font-bold ${
                  isCritical ? 'text-destructive' : isWarning ? 'text-warning' : 'text-primary'
                }`}>
                  {percentage.toFixed(0)}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="h-3 bg-secondary rounded-full overflow-hidden mb-4">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(percentage, 100)}%` }}
                  transition={{ duration: 0.6 }}
                  className={`h-full rounded-full ${
                    isCritical ? 'bg-destructive' : isWarning ? 'bg-warning' : 'bg-primary'
                  }`}
                />
              </div>

              {/* Amount */}
              <div className="flex justify-between text-sm">
                <div>
                  <p className="text-foreground/70 mb-1">Spent</p>
                  <p className="font-semibold">${budget.spent.toLocaleString()}</p>
                </div>
                <div className="text-right">
                  <p className="text-foreground/70 mb-1">Limit</p>
                  <p className="font-semibold">${budget.limit.toLocaleString()}</p>
                </div>
              </div>

              {isCritical && (
                <div className="mt-4 p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
                  <p className="text-xs text-destructive font-medium">Budget exceeded</p>
                </div>
              )}
            </motion.div>
          )
        })}
      </motion.div>
    </motion.div>
  )
}
