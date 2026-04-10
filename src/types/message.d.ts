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