import { createContext } from "react";
import type { UserId } from "../types/user";

type OnlineUsersContextType = {
  onlineUsers: UserId[]
  isOnline: (userId: UserId) => boolean
}

export const OnlineUsersContext = createContext<OnlineUsersContextType | undefined>(undefined)