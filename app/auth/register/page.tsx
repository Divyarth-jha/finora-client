'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Eye, EyeOff, Check } from 'lucide-react'
import { signupUser } from '@/lib/api'

const registerSchema = z
  .object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string(),
    agreeToTerms: z.boolean().refine((val) => val === true, {
      message: 'You must agree to the terms and conditions',
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })

type RegisterFormData = z.infer<typeof registerSchema>

const passwordStrengthChecks = [
  { label: 'At least 8 characters', check: (pwd: string) => pwd.length >= 8 },
  { label: 'Contains uppercase letter', check: (pwd: string) => /[A-Z]/.test(pwd) },
  { label: 'Contains lowercase letter', check: (pwd: string) => /[a-z]/.test(pwd) },
  { label: 'Contains number or special character', check: (pwd: string) => /[0-9!@#$%^&*]/.test(pwd) },
]

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [password, setPassword] = useState('')

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  })

  const passwordValue = watch('password', '')

  const onSubmit = async (data: RegisterFormData) => {
    try {
      setIsLoading(true)
  
      const result = await signupUser({
        full_name: data.name,
        email: data.email,
        password: data.password,
      })
  
      console.log(result)
  
      alert('Account created successfully!')
  
      window.location.href = '/auth/login'
    } catch (error: any) {
      alert(error.message)
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <div className="bg-card border border-border rounded-2xl p-8 backdrop-blur-sm max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-display text-2xl font-bold mb-2">Create Your Account</h1>
          <p className="text-foreground/70">Join thousands of businesses using Finora</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Name */}
          <div>
            <Label htmlFor="name" className="text-foreground mb-2 block">
              Full Name
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="John Doe"
              {...register('name')}
              className="bg-secondary/50 border-border text-foreground placeholder:text-foreground/50"
            />
            {errors.name && (
              <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <Label htmlFor="email" className="text-foreground mb-2 block">
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              {...register('email')}
              className="bg-secondary/50 border-border text-foreground placeholder:text-foreground/50"
            />
            {errors.email && (
              <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <Label htmlFor="password" className="text-foreground mb-2 block">
              Password
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                {...register('password')}
                className="bg-secondary/50 border-border text-foreground placeholder:text-foreground/50"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/50 hover:text-foreground transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* Password Strength */}
            {passwordValue && (
              <div className="mt-3 space-y-2">
                {passwordStrengthChecks.map((check) => (
                  <div key={check.label} className="flex items-center gap-2">
                    <div
                      className={`w-4 h-4 rounded-full flex items-center justify-center transition-colors ${
                        check.check(passwordValue) ? 'bg-primary' : 'bg-secondary'
                      }`}
                    >
                      {check.check(passwordValue) && (
                        <Check className="w-3 h-3 text-primary-foreground" />
                      )}
                    </div>
                    <span
                      className={`text-xs ${
                        check.check(passwordValue)
                          ? 'text-foreground/70'
                          : 'text-foreground/50'
                      }`}
                    >
                      {check.label}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {errors.password && (
              <p className="text-destructive text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <Label htmlFor="confirmPassword" className="text-foreground mb-2 block">
              Confirm Password
            </Label>
            <div className="relative">
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="••••••••"
                {...register('confirmPassword')}
                className="bg-secondary/50 border-border text-foreground placeholder:text-foreground/50"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/50 hover:text-foreground transition-colors"
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-destructive text-sm mt-1">{errors.confirmPassword.message}</p>
            )}
          </div>

          {/* Terms */}
          <div className="flex items-start gap-2">
            <input
              id="terms"
              type="checkbox"
              {...register('agreeToTerms')}
              className="w-4 h-4 bg-secondary border-border rounded cursor-pointer mt-1"
            />
            <label htmlFor="terms" className="text-sm text-foreground/70 cursor-pointer leading-relaxed">
              I agree to the{' '}
              <Link href="#" className="text-primary hover:text-primary/90">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link href="#" className="text-primary hover:text-primary/90">
                Privacy Policy
              </Link>
            </label>
          </div>
          {errors.agreeToTerms && (
            <p className="text-destructive text-sm">{errors.agreeToTerms.message}</p>
          )}

          {/* Submit */}
          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-base h-10"
            disabled={isLoading}
          >
            {isLoading ? 'Creating Account...' : 'Create Account'}
          </Button>
        </form>

        {/* Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-card text-foreground/70">Already have an account?</span>
          </div>
        </div>

        {/* Sign In Link */}
        <Link href="/auth/login">
          <Button variant="outline" className="w-full text-base h-10">
            Sign In
          </Button>
        </Link>
      </div>
    </motion.div>
  )
}
