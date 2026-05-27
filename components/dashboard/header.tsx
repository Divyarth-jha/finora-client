'use client'

import { motion } from 'framer-motion'
import { Menu, Bell, Search, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface DashboardHeaderProps {
  onMenuClick: () => void
}

export function DashboardHeader({ onMenuClick }: DashboardHeaderProps) {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 bg-card border-b border-border z-40"
    >
      <div className="px-6 py-4 flex items-center justify-between">
        {/* Left Side */}
        <div className="flex items-center gap-4 flex-1">
          <button
            className="lg:hidden p-2 hover:bg-secondary rounded-lg"
            onClick={onMenuClick}
          >
            <Menu size={20} />
          </button>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-md">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/50 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search..."
                className="pl-10 bg-secondary/50 border-border"
              />
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <button className="relative p-2 hover:bg-secondary rounded-lg transition-colors">
            <Bell size={20} className="text-foreground/70" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
          </button>

          {/* User Menu */}
          <button className="flex items-center gap-3 px-3 py-2 hover:bg-secondary rounded-lg transition-colors">
            <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
              <span className="font-semibold text-primary text-sm">JD</span>
            </div>
            <div className="hidden sm:flex flex-col items-start text-sm">
              <span className="font-medium text-foreground">John Doe</span>
              <span className="text-foreground/70 text-xs">Admin</span>
            </div>
            <ChevronDown size={16} className="text-foreground/70" />
          </button>
        </div>
      </div>
    </motion.header>
  )
}
