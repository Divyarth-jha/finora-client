'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface StatCardProps {
  title: string
  value: string
  change: string
  icon: LucideIcon
  color: string
}

export function StatCard({ title, value, change, icon: Icon, color }: StatCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-foreground/70 text-sm font-medium">{title}</h3>
        <div className={`w-10 h-10 bg-gradient-to-br ${color} to-transparent rounded-lg flex items-center justify-center`}>
          <Icon className="w-5 h-5 text-primary-foreground" />
        </div>
      </div>

      <div>
        <p className="font-display text-2xl font-bold mb-2">{value}</p>
        <p className="text-primary text-sm">{change}</p>
      </div>
    </motion.div>
  )
}
