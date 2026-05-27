'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Plus, Mail, Trash2 } from 'lucide-react'

const teamMembers = [
  { id: 1, name: 'John Doe', email: 'john@company.com', role: 'Admin', status: 'active' },
  { id: 2, name: 'Sarah Smith', email: 'sarah@company.com', role: 'Finance Manager', status: 'active' },
  { id: 3, name: 'Mike Johnson', email: 'mike@company.com', role: 'Viewer', status: 'active' },
  { id: 4, name: 'Emily Brown', email: 'emily@company.com', role: 'Editor', status: 'inactive' },
  { id: 5, name: 'Alex Wilson', email: 'alex@company.com', role: 'Editor', status: 'active' },
]

export default function TeamPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex justify-between items-start gap-4">
        <div>
          <h1 className="font-display text-3xl font-bold mb-2">Team</h1>
          <p className="text-foreground/70">Manage team members and their permissions</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 gap-2">
          <Plus size={18} />
          Add Member
        </Button>
      </div>

      {/* Team Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card border border-border rounded-xl overflow-hidden"
      >
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-secondary/50">
              <th className="px-6 py-4 text-left text-sm font-semibold">Member</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">Email</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">Role</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">Status</th>
              <th className="px-6 py-4 text-center text-sm font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {teamMembers.map((member) => (
              <tr key={member.id} className="border-b border-border hover:bg-secondary/30 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-primary text-xs font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <span className="font-medium">{member.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-foreground/70">{member.email}</td>
                <td className="px-6 py-4">{member.role}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    member.status === 'active'
                      ? 'bg-primary/10 text-primary'
                      : 'bg-foreground/10 text-foreground/70'
                  }`}>
                    {member.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex justify-center gap-2">
                    <button className="p-2 hover:bg-secondary rounded-lg transition-colors text-foreground/70 hover:text-foreground">
                      <Mail size={16} />
                    </button>
                    <button className="p-2 hover:bg-destructive/10 rounded-lg transition-colors text-foreground/70 hover:text-destructive">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </motion.div>
  )
}
