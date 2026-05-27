'use client'

import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  { month: 'Jan', Operations: 2400, Marketing: 1200, Personnel: 2210, Other: 1000 },
  { month: 'Feb', Operations: 1398, Marketing: 2210, Personnel: 2290, Other: 1500 },
  { month: 'Mar', Operations: 9800, Marketing: 2290, Personnel: 2000, Other: 1200 },
  { month: 'Apr', Operations: 3908, Marketing: 2000, Personnel: 2181, Other: 1000 },
  { month: 'May', Operations: 4800, Marketing: 2181, Personnel: 2500, Other: 1500 },
  { month: 'Jun', Operations: 3800, Marketing: 2500, Personnel: 2100, Other: 1200 },
]

export function ExpenseChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-card border border-border rounded-xl p-6"
    >
      <h2 className="font-display font-semibold text-lg mb-4">Expenses Overview</h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
          <XAxis dataKey="month" stroke="var(--foreground)" opacity={0.7} />
          <YAxis stroke="var(--foreground)" opacity={0.7} />
          <Tooltip
            contentStyle={{
              backgroundColor: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
            }}
            labelStyle={{ color: 'var(--foreground)' }}
          />
          <Legend />
          <Bar dataKey="Operations" fill="var(--primary)" radius={[8, 8, 0, 0]} />
          <Bar dataKey="Marketing" fill="var(--chart-2)" radius={[8, 8, 0, 0]} />
          <Bar dataKey="Personnel" fill="var(--chart-3)" radius={[8, 8, 0, 0]} />
          <Bar dataKey="Other" fill="var(--chart-4)" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  )
}
