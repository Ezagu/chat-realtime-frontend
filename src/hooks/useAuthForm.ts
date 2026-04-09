import { useState } from "react"
import { useAuthContext } from "./useAuthContext"
import type { UserAuth } from "../types/user"

export const useAuthForm = () => {
  const {login, register, logout} = useAuthContext()
  const [formData, setFormData] = useState<UserAuth>({username: '', password: ''})
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({...prev, [e.target.name]: e.target.value}))
    setError(null)
  }

  const handleRegister = async () => {
    setError(null)
    setLoading(true)
    try {
      await register(formData)
    } catch(e) {
      setError(e instanceof Error ? e.message : 'Unexpected Error')
    } finally {
      setLoading(false)
    }
  }

  const handleLogin = async () => {
    setError(null)
    setLoading(true)

    try {
      await login(formData)
    } catch(e) {
      setError(e instanceof Error ? e.message : 'Unexpected Error')
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    try {
      await logout()
    } catch(e) {
      setError(e instanceof Error ? e.message : 'Unexpected Error')
    }
  }

  return {
    loading,
    error,
    handleChange,
    handleRegister,
    handleLogin,
    handleLogout
  }
}
