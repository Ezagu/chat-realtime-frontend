import { toChatVM } from "../../adapters/chatAdapter"
import { url } from "../../helpers/Global"
import type { Chat, ChatVM } from "../../types/chat"

export const getChatsServices = async (myId: string) => {
  const req = await fetch(url + 'chats', {
    credentials: 'include'
  })
  const chats = await req.json()
  console.log(chats)
  const mappedChats = chats.map((chat: Chat) => (toChatVM({chat, myId})))
  return mappedChats as ChatVM[]
}