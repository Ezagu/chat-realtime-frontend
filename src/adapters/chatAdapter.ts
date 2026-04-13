import type { Chat, ChatVM } from "../types/chat";
import { toMessageVM } from "./messageAdapter";

export const toChatVM = ({chat, myId}: {chat: Chat, myId: string}) : ChatVM => {
  const toUser = chat.users.find(user => user.id.toString() !== myId.toString())
  if(!toUser) throw new Error('Chat has no user')
  return {
    id: chat.id,
    user: toUser,
    lastMessage: toMessageVM({message: chat.messages[0], myId})
  }
}