import { useEffect, useState, type ReactNode } from "react"
import type { User, UserAuth } from "../types/user"
import { loginService, logoutService, registerService, getMeService } from "../services/http/authServices"
import { AuthContext } from "../context/AuthContext"

export const AuthProvider = ({children}: {children: ReactNode}) => {

  const [userIdentity, setUserIdentity] = useState<null | User>(null)

  useEffect(() => {
    getMeService()
      .then(user => setUserIdentity(user))
      .catch(() => setUserIdentity(null))
  }, [])

  const login = async (userAuth: UserAuth) => {
    const userLogued = await loginService(userAuth)
    setUserIdentity(userLogued)
  }
  
  const register = async (userAuth: UserAuth) => {
    const userRegister = await registerService(userAuth)
    setUserIdentity(userRegister)
  }

  const logout = async () => {
    await logoutService()
    setUserIdentity(null)
  }

  return (
    <AuthContext.Provider value={{userIdentity, login, register, logout}}>
      {children}
    </AuthContext.Provider>
  )
} 