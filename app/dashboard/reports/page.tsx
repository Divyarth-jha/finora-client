'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Plus, Download } from 'lucide-react'

const reports = [
  { id: 1, name: 'June 2024 Summary', type: 'Monthly', created: '2024-06-01', status: 'ready' },
  { id: 2, name: 'Q2 2024 Report', type: 'Quarterly', created: '2024-06-01', status: 'ready' },
  { id: 3, name: 'Department Breakdown', type: 'Custom', created: '2024-05-28', status: 'ready' },
  { id: 4, name: 'Expense Forecast', type: 'Forecast', created: '2024-05-15', status: 'ready' },
]

export default function ReportsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex justify-between items-start gap-4">
        <div>
          <h1 className="font-display text-3xl font-bold mb-2">Reports</h1>
          <p className="text-foreground/70">Generate and download financial reports</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 gap-2">
          <Plus size={18} />
          New Report
        </Button>
      </div>

      {/* Report List */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-3"
      >
        {reports.map((report) => (
          <motion.div
            key={report.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card border border-border rounded-xl p-6 flex items-center justify-between hover:border-primary/50 transition-all"
          >
            <div className="flex-1">
              <h3 className="font-display font-semibold mb-1">{report.name}</h3>
              <div className="flex gap-4 text-sm text-foreground/70">
                <span>{report.type}</span>
                <span>{report.created}</span>
                <span className="text-primary font-medium">{report.status}</span>
              </div>
            </div>

            <Button variant="outline" className="gap-2">
              <Download size={18} />
              Download
            </Button>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}
