import { createContext } from "react";
import type { ChatVM } from "../types/chat";
import type { MessageVM } from "../types/message";

type MainChatContextType = {
  mainChat: ChatVM | undefined
  clearMainChat: () => void
  messages: MessageVM[]
  loadMainChat: ({ chat } : { chat: ChatVM }) => void
}

export const MainChatContext = createContext<MainChatContextType | undefined>(undefined)