import { toMessageVM } from "../../adapters/messageAdapter"
import { url } from "../../helpers/Global"
import type { Message } from "../../types/message"

export const getMessages = async ({ chatId, myId }: { chatId: string, myId: string }) => {
  const req = await fetch(url + `chats/${chatId}/messages`, {
    credentials: 'include'
  })
  const messages: Message[] = await req.json()
  const messagesMapped = messages.map(message => (toMessageVM({message, myId})))
  return messagesMapped
} 