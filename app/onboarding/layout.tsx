'use client'

import { motion } from 'framer-motion'
import { useOnboardingStore } from '@/lib/stores/onboarding-store'

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { data } = useOnboardingStore()

  const steps = [
    { number: 1, label: 'Company Details' },
    { number: 2, label: 'Budget & Team' },
    { number: 3, label: 'Settings' },
    { number: 4, label: 'Confirmation' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 pt-8">
          <div className="inline-flex items-center gap-2 bg-secondary/50 px-3 py-1 rounded-full mb-4 border border-primary/20">
            <span className="text-sm text-foreground/70">Step {data.step} of 4</span>
          </div>
          <h1 className="font-display text-3xl font-bold mb-2">Welcome to Finora</h1>
          <p className="text-foreground/70">Let&apos;s set up your account in a few minutes</p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-between items-center mb-12">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center flex-1">
              {/* Step Circle */}
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{
                  scale: data.step === step.number ? 1.1 : 1,
                }}
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold border-2 transition-all ${
                  data.step >= step.number
                    ? 'bg-primary border-primary text-primary-foreground'
                    : 'bg-transparent border-border text-foreground/50'
                }`}
              >
                {step.number}
              </motion.div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{
                    scaleX: data.step > step.number ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className={`flex-1 h-1 mx-2 origin-left rounded-full ${
                    data.step > step.number ? 'bg-primary' : 'bg-border'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Content */}
        {children}
      </div>
    </div>
  )
}
