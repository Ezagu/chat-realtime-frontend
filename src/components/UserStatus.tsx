export const UserStatus = ({status}: {status: boolean}) => {
  return (
    <div className={`flex items-center gap-1 ${status ? "text-primary": "text-text-secondary"}`}>
      <div className={`size-1.5 rounded-full ${status ? "bg-primary": "bg-text-secondary"}`}></div>
      <p>
        {
          status 
            ? 'online'
            : 'offline'
        }
      </p>
    </div>
  )
}