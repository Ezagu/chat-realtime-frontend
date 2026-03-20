import { LogOut } from "lucide-react"
import { UserStatus } from "../../components/UserStatus"

export const HeaderAside = () => {
  return (
    <header className="flex w-full items-center border-b border-border px-4 py-2">
      <div className="flex flex-col items-start grow truncate">
        <h1 className="text-2xl font-medium text-start -mb-1">
          Ezagu
        </h1>
        <UserStatus status={true} />
      </div>
      <button className="cursor-pointer hover:text-red-500 transition-colors">
        <LogOut />
      </button>
    </header>
  )
}