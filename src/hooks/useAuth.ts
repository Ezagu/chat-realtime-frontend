import { useState } from "react"

type AuthFields = {
  username: string,
  password: string
} 

export const useAuth = () => {
  const [fields, setFields] = useState<AuthFields>({username: '', password: ''})
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFields(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const signup = () => {
    console.log('registrando,', fields)
    setError("Error")
  }

  const login = () => {
    console.log('logueando,', fields)
  }

  return {
    error,
    handleChange,
    signup,
    login
  }
}
