export type MessageVM = {
  id: string
  text: string
  time: string
  isMine: boolean
  read: boolean
}

export type Message = {
  id: string
  createdAt: string
  content: string
  userId: string
  chatId: string
  read: boolean
}