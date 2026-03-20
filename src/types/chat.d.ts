import type { MessageDto } from "./message"
import type { User } from "./user"

export type ChatDto = {
  id: string
  lastMessage: MessageDto
  user: User
}