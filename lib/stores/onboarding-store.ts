import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface OnboardingData {
  step: number
  companyName: string
  industry: string
  teamSize: string
  currency: string
  budget: string
  timezone: string
  notifications: boolean
  completed: boolean
}

interface OnboardingStore {
  data: OnboardingData
  setStep: (step: number) => void
  updateData: (updates: Partial<OnboardingData>) => void
  reset: () => void
}

const initialData: OnboardingData = {
  step: 1,
  companyName: '',
  industry: '',
  teamSize: '',
  currency: 'USD',
  budget: '',
  timezone: 'UTC',
  notifications: true,
  completed: false,
}

export const useOnboardingStore = create<OnboardingStore>()(
  persist(
    (set) => ({
      data: initialData,
      setStep: (step) =>
        set((state) => ({
          data: { ...state.data, step },
        })),
      updateData: (updates) =>
        set((state) => ({
          data: { ...state.data, ...updates },
        })),
      reset: () =>
        set({
          data: initialData,
        }),
    }),
    {
      name: 'finora-onboarding',
    }
  )
)
