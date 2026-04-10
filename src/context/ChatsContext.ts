import { createContext } from "react";
import type { ChatVM } from "../types/chat";

type ChatsContextType = {
  chats: ChatVM[] | undefined
}

export const ChatsContext = createContext<ChatsContextType | undefined>(undefined)