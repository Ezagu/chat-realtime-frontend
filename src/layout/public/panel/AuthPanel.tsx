import type { ReactNode } from "react"
import { useAuthForm } from "../../../hooks/useAuthForm"

const ErrorAlert = ({children}: {children: ReactNode}) => {
  return (
    <div className="bg-red-800 text-center text-lg py-2 rounded-2xl">
      <p>
        {children}
      </p>
    </div>
  )
}

export const AuthPanel = () => {
  const {error, loading, handleChange, handleLogin, handleRegister} = useAuthForm()

  return (
    <form className="w-2/3 m-auto flex flex-col gap-2">

      {
        error &&
        <ErrorAlert>
          {error}
        </ErrorAlert>
      }

      <label htmlFor="username" className="font-bold text-text-secondary">
        Username
      </label>
      <input 
        type="text" 
        name="username" 
        id="username"
        onChange={handleChange}
        className="text-xl px-2 py-4 border-2 border-border rounded-2xl"
      />

      <label htmlFor="password" className="font-bold text-text-secondary">
        Password
      </label>
      <input 
        type="password" 
        name="password" 
        id="password"
        onChange={handleChange}
        className="text-xl px-2 py-4 border-2 border-border rounded-2xl"
      />

      <button 
        type="button" 
        className={`bg-primary-dark py-2 text-lg font-semibold rounded-2xl hover:bg-primary-deeper mt-4 ${loading ? 'bg-primary-deeper' : 'cursor-pointer'}`}
        onClick={handleLogin}
        disabled={loading}
      >
        Log In
      </button>
      
      <button 
        type="button" 
        className={`bg-text-primary text-primary-dark py-2 text-lg font-semibold rounded-2xl  hover:bg-text-secondary ${loading ? 'bg-text-secondary' : 'cursor-pointer'}`}
        onClick={handleRegister}
        disabled={loading}
      >
        Sign Up
      </button>
    </form>
  )
}