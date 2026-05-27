'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowDownLeft } from 'lucide-react'

const transactions = [
  {
    id: 1,
    description: 'AWS Cloud Services',
    category: 'Operations',
    amount: -2450,
    date: '2024-06-15',
    status: 'completed',
  },
  {
    id: 2,
    description: 'Google Ads Campaign',
    category: 'Marketing',
    amount: -1200,
    date: '2024-06-14',
    status: 'completed',
  },
  {
    id: 3,
    description: 'Monthly Payroll',
    category: 'Personnel',
    amount: -8500,
    date: '2024-06-13',
    status: 'completed',
  },
  {
    id: 4,
    description: 'Office Supplies',
    category: 'Operations',
    amount: -350,
    date: '2024-06-12',
    status: 'completed',
  },
  {
    id: 5,
    description: 'Conference Registration',
    category: 'Marketing',
    amount: -599,
    date: '2024-06-11',
    status: 'pending',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
}

export function RecentTransactions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-card border border-border rounded-xl p-6"
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-display font-semibold text-lg">Recent Transactions</h2>
        <a href="/dashboard/expenses" className="text-primary text-sm hover:text-primary/90">
          View all
        </a>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-1"
      >
        {transactions.map((transaction) => (
          <motion.div
            key={transaction.id}
            variants={item}
            className="flex items-center justify-between p-4 hover:bg-secondary/50 rounded-lg transition-colors border-b border-border last:border-b-0"
          >
            {/* Left */}
            <div className="flex items-center gap-4 flex-1">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                {transaction.amount < 0 ? (
                  <ArrowUpRight className="w-5 h-5 text-destructive" />
                ) : (
                  <ArrowDownLeft className="w-5 h-5 text-primary" />
                )}
              </div>

              <div className="min-w-0 flex-1">
                <p className="font-medium text-sm truncate">{transaction.description}</p>
                <p className="text-xs text-foreground/70">{transaction.category}</p>
              </div>
            </div>

            {/* Right */}
            <div className="text-right ml-4">
              <p className={`font-semibold text-sm ${
                transaction.amount < 0 ? 'text-destructive' : 'text-primary'
              }`}>
                {transaction.amount < 0 ? '-' : '+'} ${Math.abs(transaction.amount).toLocaleString()}
              </p>
              <p className={`text-xs ${
                transaction.status === 'completed' ? 'text-foreground/70' : 'text-warning'
              }`}>
                {transaction.date}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}
