import type { User } from "../types/user"
import { ChatPanel } from "./private/panel/ChatPanel"
import { AuthPanel } from "./public/panel/AuthPanel"

export const MainPanel = ({ user }: { user: User }) => {
  if(!user) return <AuthPanel />
  return <ChatPanel />
}