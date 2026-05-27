export function saveToken(token: string) {
    localStorage.setItem('token', token)
  }
  
  export function getToken() {
    return localStorage.getItem('token')
  }
  
  export function removeToken() {
    localStorage.removeItem('token')
  }
  
  export function saveUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user))
  }
  
  export function getUser() {
    const user = localStorage.getItem('user')
  
    if (!user) return null
  
    return JSON.parse(user)
  }
  
  export function logout() {
    removeToken()
    localStorage.removeItem('user')
  }