import type { Message, MessageVM } from "./message"
import type { User } from "./user"

export type Chat = {
  id: string
  messages: Message[]
  users: User[]
  createdAt: string
}

export type ChatVM = {
  id: string | null
  user: User
  lastMessage: MessageVM | null
}