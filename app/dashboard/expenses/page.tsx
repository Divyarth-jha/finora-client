'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, Plus, Download } from 'lucide-react'

const expenses = [
  { id: 1, description: 'AWS Cloud Services', category: 'Operations', amount: 2450, date: '2024-06-15', status: 'completed' },
  { id: 2, description: 'Google Ads Campaign', category: 'Marketing', amount: 1200, date: '2024-06-14', status: 'completed' },
  { id: 3, description: 'Monthly Payroll', category: 'Personnel', amount: 8500, date: '2024-06-13', status: 'completed' },
  { id: 4, description: 'Office Supplies', category: 'Operations', amount: 350, date: '2024-06-12', status: 'completed' },
  { id: 5, description: 'Conference Registration', category: 'Marketing', amount: 599, date: '2024-06-11', status: 'pending' },
]

export default function ExpensesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex justify-between items-start gap-4">
        <div>
          <h1 className="font-display text-3xl font-bold mb-2">Expenses</h1>
          <p className="text-foreground/70">Track and manage all your business expenses</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 gap-2">
          <Plus size={18} />
          Add Expense
        </Button>
      </div>

      {/* Filters */}
      <div className="flex gap-3 flex-wrap">
        <div className="relative flex-1 min-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/50" />
          <Input placeholder="Search expenses..." className="pl-10 bg-card border-border" />
        </div>
        <select className="px-4 py-2 bg-card border border-border rounded-lg text-foreground">
          <option>All Categories</option>
          <option>Operations</option>
          <option>Marketing</option>
          <option>Personnel</option>
        </select>
      </div>

      {/* Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card border border-border rounded-xl overflow-hidden"
      >
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-secondary/50">
              <th className="px-6 py-4 text-left text-sm font-semibold">Description</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">Category</th>
              <th className="px-6 py-4 text-right text-sm font-semibold">Amount</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">Date</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id} className="border-b border-border hover:bg-secondary/30 transition-colors">
                <td className="px-6 py-4 font-medium">{expense.description}</td>
                <td className="px-6 py-4 text-foreground/70">{expense.category}</td>
                <td className="px-6 py-4 text-right font-semibold">${expense.amount.toLocaleString()}</td>
                <td className="px-6 py-4 text-foreground/70 text-sm">{expense.date}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    expense.status === 'completed' 
                      ? 'bg-primary/10 text-primary' 
                      : 'bg-warning/10 text-warning'
                  }`}>
                    {expense.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </motion.div>
  )
}
