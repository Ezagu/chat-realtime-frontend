import { UserStatus } from "../../components/UserStatus"

export const HeaderChatSection = ({username, status}: {username: string, status: boolean}) => {
  return (
    <header className="flex flex-col px-4 py-2 bg-panel rounded-tr-2xl ">
      <div className="flex flex-col items-start grow truncate">
        <h1 className="text-2xl font-medium text-start -mb-1">
          {username}
        </h1>
        <UserStatus status={status}/>
      </div>
    </header>
  )
}