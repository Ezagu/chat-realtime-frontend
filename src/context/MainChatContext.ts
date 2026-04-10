import { createContext } from "react";
import type { ChatVM } from "../types/chat";

type MainChatContextType = {
  mainChat: ChatVM | undefined
  setMainChat: React.Dispatch<React.SetStateAction<ChatVM | undefined>>
  clearMainChat: () => void
}

export const MainChatContext = createContext<MainChatContextType | undefined>(undefined)