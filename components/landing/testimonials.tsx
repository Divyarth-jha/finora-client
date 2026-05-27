'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'CFO at TechVenture',
    content:
      'Finora transformed how we manage expenses. Real-time insights have helped us cut costs by 20% in just 3 months.',
    rating: 5,
  },
  {
    name: 'James Chen',
    role: 'CEO at GrowthCo',
    content:
      'The best financial tracking tool we&apos;ve ever used. The team loves the simplicity and the reporting is outstanding.',
    rating: 5,
  },
  {
    name: 'Emma Rodriguez',
    role: 'Operations Manager',
    content:
      'Finally, a finance tool built for modern businesses. The automation features alone save us 10+ hours per week.',
    rating: 5,
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function Testimonials() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Loved by Teams Worldwide
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            See what our customers have to say about Finora
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={item}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/80 mb-6 leading-relaxed">
                {testimonial.content}
              </p>

              {/* Author */}
              <div>
                <p className="font-display font-semibold">{testimonial.name}</p>
                <p className="text-foreground/70 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
