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
import { Eye, EyeOff } from 'lucide-react'
import { loginUser } from '@/lib/api'


const loginSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  rememberMe: z.boolean().default(false),
})

type LoginFormData = z.infer<typeof loginSchema>

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data: LoginFormData) => {
    try {
      setIsLoading(true)
  
      const result = await loginUser({
        email: data.email,
        password: data.password,
      })
  
      console.log(result)
  
      // Save JWT token
      localStorage.setItem('token', result.access_token)
  
      // Save user info
      localStorage.setItem('user', JSON.stringify(result.user))
  
      alert('Login successful!')
  
      window.location.href = '/dashboard'
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
      <div className="bg-card border border-border rounded-2xl p-8 backdrop-blur-sm">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-display text-2xl font-bold mb-2">Welcome Back</h1>
          <p className="text-foreground/70">Sign in to your Finora account to continue</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
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
            {errors.password && (
              <p className="text-destructive text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Remember Me */}
          <div className="flex items-center gap-2">
            <input
              id="remember"
              type="checkbox"
              {...register('rememberMe')}
              className="w-4 h-4 bg-secondary border-border rounded cursor-pointer"
            />
            <label htmlFor="remember" className="text-sm text-foreground/70 cursor-pointer">
              Remember me
            </label>
          </div>

          {/* Submit */}
          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-base h-10"
            disabled={isLoading}
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </Button>
        </form>

        {/* Forgot Password */}
        <div className="text-center mt-4">
          <Link
            href="/auth/forgot-password"
            className="text-sm text-primary hover:text-primary/90 transition-colors"
          >
            Forgot your password?
          </Link>
        </div>

        {/* Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-card text-foreground/70">Don&apos;t have an account?</span>
          </div>
        </div>

        {/* Sign Up Link */}
        <Link href="/auth/register">
          <Button variant="outline" className="w-full text-base h-10">
            Create Account
          </Button>
        </Link>
      </div>
    </motion.div>
  )
}
