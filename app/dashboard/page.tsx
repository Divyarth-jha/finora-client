'use client'

import { motion } from 'framer-motion'
import { DollarSign, TrendingUp, AlertCircle, Users } from 'lucide-react'
import { StatCard } from '@/components/dashboard/stat-card'
import { ExpenseChart } from '@/components/dashboard/expense-chart'
import { BudgetOverview } from '@/components/dashboard/budget-overview'
import { RecentTransactions } from '@/components/dashboard/recent-transactions'

const stats = [
  {
    title: 'Total Expenses',
    value: '$24,582',
    change: '+12.5%',
    icon: DollarSign,
    color: 'from-primary',
  },
  {
    title: 'Monthly Budget',
    value: '$50,000',
    change: '49% used',
    icon: TrendingUp,
    color: 'from-blue-500',
  },
  {
    title: 'Budget Alerts',
    value: '3',
    change: '1 critical',
    icon: AlertCircle,
    color: 'from-orange-500',
  },
  {
    title: 'Team Members',
    value: '12',
    change: 'Active',
    icon: Users,
    color: 'from-purple-500',
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

export default function DashboardPage() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-8"
    >
      {/* Page Header */}
      <motion.div variants={item}>
        <h1 className="font-display text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-foreground/70">Welcome back! Here&apos;s your financial overview.</p>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        variants={container}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {stats.map((stat) => (
          <motion.div key={stat.title} variants={item}>
            <StatCard {...stat} />
          </motion.div>
        ))}
      </motion.div>

      {/* Charts Row */}
      <motion.div
        variants={container}
        className="grid lg:grid-cols-3 gap-6"
      >
        <motion.div variants={item} className="lg:col-span-2">
          <ExpenseChart />
        </motion.div>
        <motion.div variants={item}>
          <BudgetOverview />
        </motion.div>
      </motion.div>

      {/* Recent Transactions */}
      <motion.div variants={item}>
        <RecentTransactions />
      </motion.div>
    </motion.div>
  )
}
