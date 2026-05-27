const API_URL = process.env.NEXT_PUBLIC_API_URL

// ========================
// REGISTER USER
// ========================
export async function signupUser(data: {
  full_name: string
  email: string
  password: string
}) {
  const response = await fetch(`${API_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  const result = await response.json()

  if (!response.ok) {
    throw new Error(result.detail || 'Signup failed')
  }

  return result
}

// ========================
// LOGIN USER
// ========================
export async function loginUser(data: {
  email: string
  password: string
}) {
  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  const result = await response.json()

  if (!response.ok) {
    throw new Error(result.detail || 'Login failed')
  }

  return result
}

// ========================
// GET CURRENT USER
// ========================
export async function getCurrentUser(token: string) {
  const response = await fetch(`${API_URL}/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const result = await response.json()

  if (!response.ok) {
    throw new Error(result.detail || 'Failed to fetch user')
  }

  return result
}