'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Connect Your Accounts',
    description: 'Link your bank accounts and payment methods securely in minutes.',
  },
  {
    number: '02',
    title: 'Set Your Budgets',
    description: 'Define spending limits for each department and category.',
  },
  {
    number: '03',
    title: 'Track in Real-Time',
    description: 'Watch expenses update automatically as transactions happen.',
  },
  {
    number: '04',
    title: 'Make Data-Driven Decisions',
    description: 'Use insights and reports to optimize your spending strategy.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Get started in 4 simple steps
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-6"
            >
              {/* Number Circle */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center">
                  <span className="font-display font-bold text-xl text-primary">
                    {step.number}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pt-2">
                <h3 className="font-display font-semibold text-xl mb-2">
                  {step.title}
                </h3>
                <p className="text-foreground/70">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
