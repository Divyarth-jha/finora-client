'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import {
  BarChart3,
  DollarSign,
  Wallet,
  Users,
  Settings,
  LogOut,
  Menu,
  X,
} from 'lucide-react'

interface SidebarProps {
  isOpen: boolean
  onToggle: () => void
}

const menuItems = [
  { icon: BarChart3, label: 'Overview', href: '/dashboard' },
  { icon: DollarSign, label: 'Expenses', href: '/dashboard/expenses' },
  { icon: Wallet, label: 'Budgets', href: '/dashboard/budgets' },
  { icon: BarChart3, label: 'Reports', href: '/dashboard/reports' },
  { icon: Users, label: 'Team', href: '/dashboard/team' },
  { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
]

export function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/dashboard') {
      return pathname === '/dashboard'
    }
    return pathname.startsWith(href)
  }

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <motion.div
        animate={{
          x: isOpen ? 0 : -280,
        }}
        transition={{ duration: 0.3 }}
        className={`fixed lg:static w-64 h-screen bg-sidebar border-r border-sidebar-border flex flex-col z-50 ${
          isOpen ? '' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        {/* Header */}
        <div className="p-6 border-b border-sidebar-border flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-sidebar-primary rounded-lg flex items-center justify-center">
              <span className="text-sidebar-primary-foreground font-display font-bold text-sm">F</span>
            </div>
            <span className="font-display font-bold hidden lg:inline">Finora</span>
          </Link>
          <button
            className="lg:hidden p-2 hover:bg-sidebar-accent rounded-lg"
            onClick={onToggle}
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2 overflow-auto">
          {menuItems.map((item) => {
            const Icon = item.icon
            const active = isActive(item.href)

            return (
              <Link key={item.href} href={item.href}>
                <div
                  className={`relative flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    active
                      ? 'bg-sidebar-primary text-sidebar-primary-foreground'
                      : 'text-sidebar-foreground hover:bg-sidebar-accent'
                  }`}
                >
                  {active && (
                    <motion.div
                      layoutId="sidebar-active"
                      className="absolute inset-0 bg-sidebar-primary rounded-lg"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      style={{ zIndex: -1 }}
                    />
                  )}
                  <Icon size={20} className="flex-shrink-0" />
                  <span className="font-medium">{item.label}</span>
                </div>
              </Link>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-sidebar-border">
          <button className="w-full flex items-center gap-3 px-4 py-3 text-sidebar-foreground hover:bg-sidebar-accent rounded-lg transition-colors">
            <LogOut size={20} />
            <span className="font-medium">Sign Out</span>
          </button>
        </div>
      </motion.div>
    </>
  )
}
