'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function SettingsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6 max-w-3xl"
    >
      {/* Header */}
      <div>
        <h1 className="font-display text-3xl font-bold mb-2">Settings</h1>
        <p className="text-foreground/70">Manage your account and preferences</p>
      </div>

      {/* Account Settings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card border border-border rounded-xl p-6"
      >
        <h2 className="font-display font-bold text-xl mb-6">Account Settings</h2>

        <form className="space-y-6">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              defaultValue="John Doe"
              className="mt-2 bg-secondary/50 border-border"
            />
          </div>

          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              defaultValue="john@company.com"
              className="mt-2 bg-secondary/50 border-border"
            />
          </div>

          <div>
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              defaultValue="Acme Inc."
              className="mt-2 bg-secondary/50 border-border"
            />
          </div>

          <Button className="bg-primary hover:bg-primary/90">
            Save Changes
          </Button>
        </form>
      </motion.div>

      {/* Security Settings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-card border border-border rounded-xl p-6"
      >
        <h2 className="font-display font-bold text-xl mb-6">Security</h2>

        <div className="space-y-4">
          <div className="flex justify-between items-center p-4 bg-secondary/50 rounded-lg">
            <div>
              <p className="font-medium">Password</p>
              <p className="text-sm text-foreground/70">Change your password</p>
            </div>
            <Button variant="outline">Update</Button>
          </div>

          <div className="flex justify-between items-center p-4 bg-secondary/50 rounded-lg">
            <div>
              <p className="font-medium">Two-Factor Authentication</p>
              <p className="text-sm text-foreground/70">Add extra security to your account</p>
            </div>
            <Button variant="outline">Enable</Button>
          </div>

          <div className="flex justify-between items-center p-4 bg-secondary/50 rounded-lg">
            <div>
              <p className="font-medium">Active Sessions</p>
              <p className="text-sm text-foreground/70">Manage your active sessions</p>
            </div>
            <Button variant="outline">View</Button>
          </div>
        </div>
      </motion.div>

      {/* Notification Settings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-card border border-border rounded-xl p-6"
      >
        <h2 className="font-display font-bold text-xl mb-6">Notifications</h2>

        <div className="space-y-4">
          {[
            { title: 'Budget Alerts', desc: 'Get notified when budget limits are reached' },
            { title: 'Weekly Report', desc: 'Receive weekly expense summaries' },
            { title: 'Team Updates', desc: 'Get notified of team activity' },
          ].map((item, i) => (
            <div key={i} className="flex justify-between items-center p-4 bg-secondary/50 rounded-lg">
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-sm text-foreground/70">{item.desc}</p>
              </div>
              <input
                type="checkbox"
                defaultChecked
                className="w-5 h-5 rounded cursor-pointer"
              />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Danger Zone */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-destructive/10 border border-destructive/20 rounded-xl p-6"
      >
        <h2 className="font-display font-bold text-xl text-destructive mb-4">Danger Zone</h2>
        <p className="text-sm text-foreground/70 mb-4">
          Permanently delete your account and all associated data
        </p>
        <Button variant="outline" className="text-destructive border-destructive hover:bg-destructive/10">
          Delete Account
        </Button>
      </motion.div>
    </motion.div>
  )
}
