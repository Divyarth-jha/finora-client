'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function CTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-2xl p-12 overflow-hidden"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent blur-3xl opacity-40" />

          <div className="relative text-center">
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
              Ready to Transform Your Finances?
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
              Join hundreds of businesses using Finora to manage their finances smarter. 
              Start your free 14-day trial today. No credit card required.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/register">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-base">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="mailto:sales@finora.app">
                <Button size="lg" variant="outline" className="text-base">
                  Schedule Demo
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
