import type { Chat } from "./chat"

export type MessageVM = {
  id: string
  text: string
  time: Date
  isMine: boolean
  read: boolean
}

export type Message = {
  id: string
  createdAt: Date
  content: string
  userId: string
  chatId: string
  read: boolean
}

export type NewMessage = {
  message: Message
  chat: Chat
}

export type SendMessage = {
  text: string
  toUserId: string
}