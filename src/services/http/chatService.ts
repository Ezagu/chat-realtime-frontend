import { toChatVM } from "../../adapters/chatAdapter"
import { url } from "../../helpers/Global"
import type { Chat, ChatVM } from "../../types/chat"

export const getChatsServices = async (myId: string) => {
  const req = await fetch(url + 'chats', {
    credentials: 'include'
  })
  const chats = await req.json()
  const mappedChats = chats.map((chat: Chat) => (toChatVM({chat, myId})))
  console.log(mappedChats)
  return mappedChats as ChatVM[]
}