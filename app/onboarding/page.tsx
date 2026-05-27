'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { useOnboardingStore } from '@/lib/stores/onboarding-store'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const industries = [
  'Technology',
  'Finance',
  'Healthcare',
  'Retail',
  'Manufacturing',
  'Education',
  'Other',
]

export default function OnboardingStep1() {
  const router = useRouter()
  const { data, updateData, setStep } = useOnboardingStore()
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newErrors: Record<string, string> = {}
    if (!data.companyName.trim()) {
      newErrors.companyName = 'Company name is required'
    }
    if (!data.industry) {
      newErrors.industry = 'Please select an industry'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setStep(2)
    router.push('/onboarding/step2')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <div className="bg-card border border-border rounded-2xl p-8 backdrop-blur-sm">
        <h2 className="font-display text-2xl font-bold mb-6">Tell Us About Your Company</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Company Name */}
          <div>
            <Label htmlFor="companyName" className="text-foreground mb-2 block">
              Company Name
            </Label>
            <Input
              id="companyName"
              type="text"
              placeholder="Acme Inc."
              value={data.companyName}
              onChange={(e) => {
                updateData({ companyName: e.target.value })
                setErrors({ ...errors, companyName: '' })
              }}
              className="bg-secondary/50 border-border text-foreground"
            />
            {errors.companyName && (
              <p className="text-destructive text-sm mt-1">{errors.companyName}</p>
            )}
          </div>

          {/* Industry Selection */}
          <div>
            <Label className="text-foreground mb-3 block">What&apos;s Your Industry?</Label>
            <div className="grid grid-cols-2 gap-3">
              {industries.map((industry) => (
                <button
                  key={industry}
                  type="button"
                  onClick={() => {
                    updateData({ industry })
                    setErrors({ ...errors, industry: '' })
                  }}
                  className={`p-3 rounded-lg border-2 transition-all text-sm font-medium ${
                    data.industry === industry
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-border bg-secondary/50 text-foreground hover:border-primary/50'
                  }`}
                >
                  {industry}
                </button>
              ))}
            </div>
            {errors.industry && (
              <p className="text-destructive text-sm mt-2">{errors.industry}</p>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <Button variant="outline" className="flex-1" asChild>
              <a href="/">Skip for now</a>
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
