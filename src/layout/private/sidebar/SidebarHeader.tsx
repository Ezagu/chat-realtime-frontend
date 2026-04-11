import { LogOut } from "lucide-react"
import { UserStatus } from "../../../components/UserStatus"
import { useAuthContext } from "../../../hooks/useAuthContext"
import { useSocketConnection } from "../../../hooks/useSocketConnection"

export const SidebarHeader = () => {

  const { userIdentity, logout } = useAuthContext()
  const { connected } = useSocketConnection()

  return (
    <header className="flex w-full items-center border-b border-border px-4 py-2">
      <div className="flex flex-col items-start grow truncate">
        <h1 className="text-2xl font-medium text-start -mb-1">
          {userIdentity?.username}
        </h1>
        <UserStatus status={connected} />
      </div>
      <button className="cursor-pointer hover:text-red-500 transition-colors" onClick={logout}>
        <LogOut />
      </button>
    </header>
  )
}