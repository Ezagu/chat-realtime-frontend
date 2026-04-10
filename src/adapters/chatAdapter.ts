import type { Chat, ChatVM } from "../types/chat";
import { toMessageVM } from "./messageAdapter";

export const toChatVM = ({chat, myId}: {chat: Chat, myId: string}) : ChatVM => {
  const user = chat.users.find(user => user.id.toString() !== myId.toString())
  if(!user) throw new Error('Chat has no user')
  return {
    id: chat.id,
    user,
    lastMessage: toMessageVM({message: chat.messages[0], myId})
  }
}