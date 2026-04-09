import { createContext} from "react";
import type { User, UserAuth } from "../types/user";

type AuthContextType = {
  userIdentity: User | null
  login: (userAuth: UserAuth) => Promise<void>
  register: (userAuth: UserAuth) => Promise<void>
  logout: () => Promise<void>
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)
