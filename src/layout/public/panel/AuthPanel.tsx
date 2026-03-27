import { useAuth } from "../../../hooks/useAuth"

export const AuthPanel = () => {

  const {error, handleChange, signup, login} = useAuth()

  return (
    <form className="w-2/3 m-auto flex flex-col gap-2">

      {
        error &&
        (
          <div className="bg-red-500 text-center text-lg py-2 rounded-2xl hidden">
            <p>
              {error}
            </p>
          </div>
        )
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
        className="bg-primary-dark py-2 text-lg font-semibold rounded-2xl cursor-pointer hover:bg-primary-deeper mt-4"
        onClick={login}
      >
        Log In
      </button>
      
      <button 
        type="button" 
        className="bg-text-primary text-primary-dark py-2 text-lg font-semibold rounded-2xl cursor-pointer hover:bg-text-secondary"
        onClick={signup}
      >
        Sign Up
      </button>
    </form>
  )
}