'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useOnboardingStore } from '@/lib/stores/onboarding-store'
import { Button } from '@/components/ui/button'
import { CheckCircle, ChevronLeft } from 'lucide-react'

export default function OnboardingStep4() {
  const router = useRouter()
  const { data, updateData, setStep } = useOnboardingStore()
  const [isLoading, setIsLoading] = useState(false)

  const handleComplete = async () => {
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    updateData({ completed: true })
    router.push('/dashboard')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <div className="bg-card border border-border rounded-2xl p-8 backdrop-blur-sm">
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="inline-block"
          >
            <CheckCircle className="w-16 h-16 text-primary mb-4" />
          </motion.div>
          <h2 className="font-display text-2xl font-bold mb-2">Almost There!</h2>
          <p className="text-foreground/70">
            Review your setup before getting started
          </p>
        </div>

        {/* Summary */}
        <div className="space-y-4 mb-8 bg-secondary/50 p-6 rounded-lg border border-border">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-foreground/70 text-sm">Company</p>
              <p className="font-display font-semibold">{data.companyName}</p>
            </div>
            <p className="text-foreground/70 text-sm">{data.industry}</p>
          </div>

          <div className="border-t border-border pt-4 flex justify-between items-start">
            <div>
              <p className="text-foreground/70 text-sm">Team Size</p>
              <p className="font-display font-semibold">{data.teamSize}</p>
            </div>
            <div className="text-right">
              <p className="text-foreground/70 text-sm">Monthly Budget</p>
              <p className="font-display font-semibold">${data.budget}</p>
            </div>
          </div>

          <div className="border-t border-border pt-4 flex justify-between items-start">
            <div>
              <p className="text-foreground/70 text-sm">Currency</p>
              <p className="font-display font-semibold">{data.currency}</p>
            </div>
            <div className="text-right">
              <p className="text-foreground/70 text-sm">Timezone</p>
              <p className="font-display font-semibold">{data.timezone}</p>
            </div>
          </div>

          <div className="border-t border-border pt-4">
            <p className="text-foreground/70 text-sm">Notifications</p>
            <p className="font-display font-semibold">
              {data.notifications ? 'Enabled' : 'Disabled'}
            </p>
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-8">
          <p className="text-sm text-foreground/80">
            You can change all of these settings later in your account preferences.
          </p>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              setStep(3)
              router.push('/onboarding/step3')
            }}
            className="flex-1"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <Button
            onClick={handleComplete}
            disabled={isLoading}
            className="flex-1 bg-primary hover:bg-primary/90"
          >
            {isLoading ? 'Setting up...' : 'Get Started'}
          </Button>
        </div>

        <div className="text-center mt-6">
          <Link href="/dashboard" className="text-sm text-primary hover:text-primary/90">
            Skip onboarding
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
