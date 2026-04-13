import { createContext } from "react";
import type { ChatVM } from "../types/chat";
import type { MessageVM } from "../types/message";

type ChatsContextType = {
  chats: ChatVM[] | undefined
  setLastMessage: ({ chatId, message }: { chatId: string, message: MessageVM }) => void
  addChat: ({ chat }: { chat: ChatVM }) => void
  moveChatToTop: ({ chatId }: { chatId: string }) => void
  readLastMessage: ({ chatId }: { chatId: string }) => void
}

export const ChatsContext = createContext<ChatsContextType | undefined>(undefined)