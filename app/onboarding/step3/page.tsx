'use client'

import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { useOnboardingStore } from '@/lib/stores/onboarding-store'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { ChevronLeft } from 'lucide-react'

const currencies = ['USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD']
const timezones = [
  'UTC',
  'EST',
  'CST',
  'MST',
  'PST',
  'GMT',
  'CET',
  'IST',
  'JST',
  'AEST',
]

export default function OnboardingStep3() {
  const router = useRouter()
  const { data, updateData, setStep } = useOnboardingStore()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(4)
    router.push('/onboarding/step4')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <div className="bg-card border border-border rounded-2xl p-8 backdrop-blur-sm">
        <h2 className="font-display text-2xl font-bold mb-6">Settings</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Currency */}
          <div>
            <Label className="text-foreground mb-3 block">Preferred Currency</Label>
            <div className="grid grid-cols-3 gap-2">
              {currencies.map((currency) => (
                <button
                  key={currency}
                  type="button"
                  onClick={() => updateData({ currency })}
                  className={`p-2 rounded-lg border-2 transition-all text-sm font-medium ${
                    data.currency === currency
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-border bg-secondary/50 text-foreground hover:border-primary/50'
                  }`}
                >
                  {currency}
                </button>
              ))}
            </div>
          </div>

          {/* Timezone */}
          <div>
            <Label className="text-foreground mb-3 block">Timezone</Label>
            <div className="grid grid-cols-3 gap-2">
              {timezones.map((tz) => (
                <button
                  key={tz}
                  type="button"
                  onClick={() => updateData({ timezone: tz })}
                  className={`p-2 rounded-lg border-2 transition-all text-sm font-medium ${
                    data.timezone === tz
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-border bg-secondary/50 text-foreground hover:border-primary/50'
                  }`}
                >
                  {tz}
                </button>
              ))}
            </div>
          </div>

          {/* Notifications */}
          <div>
            <Label className="text-foreground mb-3 block">Notifications</Label>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => updateData({ notifications: !data.notifications })}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  data.notifications ? 'bg-primary' : 'bg-border'
                }`}
              >
                <div
                  className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                    data.notifications ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className="text-foreground/70">
                {data.notifications ? 'Enabled' : 'Disabled'}
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setStep(2)
                router.push('/onboarding/step2')
              }}
              className="flex-1"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90">
              Continue
            </Button>
          </div>
        </form>
      </div>
    </motion.div>
  )
}
