'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { useOnboardingStore } from '@/lib/stores/onboarding-store'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ChevronLeft } from 'lucide-react'

const teamSizes = ['1-10', '11-50', '51-200', '200+']

export default function OnboardingStep2() {
  const router = useRouter()
  const { data, updateData, setStep } = useOnboardingStore()
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newErrors: Record<string, string> = {}
    if (!data.teamSize) {
      newErrors.teamSize = 'Please select team size'
    }
    if (!data.budget) {
      newErrors.budget = 'Monthly budget is required'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setStep(3)
    router.push('/onboarding/step3')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <div className="bg-card border border-border rounded-2xl p-8 backdrop-blur-sm">
        <h2 className="font-display text-2xl font-bold mb-6">Team & Budget</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Team Size */}
          <div>
            <Label className="text-foreground mb-3 block">How Many Team Members?</Label>
            <div className="grid grid-cols-2 gap-3">
              {teamSizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => {
                    updateData({ teamSize: size })
                    setErrors({ ...errors, teamSize: '' })
                  }}
                  className={`p-3 rounded-lg border-2 transition-all text-sm font-medium ${
                    data.teamSize === size
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-border bg-secondary/50 text-foreground hover:border-primary/50'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
            {errors.teamSize && (
              <p className="text-destructive text-sm mt-2">{errors.teamSize}</p>
            )}
          </div>

          {/* Monthly Budget */}
          <div>
            <Label htmlFor="budget" className="text-foreground mb-2 block">
              Monthly Operating Budget
            </Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/70">$</span>
              <Input
                id="budget"
                type="number"
                placeholder="10000"
                value={data.budget}
                onChange={(e) => {
                  updateData({ budget: e.target.value })
                  setErrors({ ...errors, budget: '' })
                }}
                className="bg-secondary/50 border-border text-foreground pl-8"
              />
            </div>
            {errors.budget && (
              <p className="text-destructive text-sm mt-1">{errors.budget}</p>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setStep(1)
                router.push('/onboarding')
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
