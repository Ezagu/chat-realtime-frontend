export const AuthSection = () => {
  return (
    <form className="w-2/3 m-auto flex flex-col gap-2">
      <div className="bg-primary-dark text-center text-lg py-2 rounded-2xl">
        <p>
          Usuario ya registrado
        </p>
      </div>
      <label htmlFor="username" className="font-bold text-text-secondary">
        Username
      </label>
      <input type="text" name="username" id="username"
        className="text-xl px-2 py-4 border-2 border-border rounded-2xl"
      />

      <label htmlFor="password" className="font-bold text-text-secondary">
        Password
      </label>
      <input type="password" name="password" id="password"
        className="text-xl px-2 py-4 border-2 border-border rounded-2xl"
      />

      <button className="bg-primary-dark py-2 text-lg font-semibold rounded-2xl cursor-pointer hover:bg-primary-deeper mt-4">Log In</button>
      
      <button className="bg-text-primary text-primary-dark py-2 text-lg font-semibold rounded-2xl cursor-pointer hover:bg-text-secondary">Sign Up</button>
    </form>
  )
}