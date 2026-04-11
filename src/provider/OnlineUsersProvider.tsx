import { useEffect, useState, type ReactNode } from "react"
import { OnlineUsersContext } from "../context/OnlineUsersContext"
import type { UserId } from "../types/user"
import { getSocket } from "../services/websocket/socketService"
import { useAuthContext } from "../hooks/useAuthContext"

export const OnlineUsersProvider = ({children}: {children: ReactNode}) => {
  const {userIdentity} = useAuthContext()
  const [onlineUsers, setOnlineUsers] = useState<UserId[]>([])

  const addUser = (userId: UserId) => {
    setOnlineUsers(prev => [...prev, userId])
  }

  const removeUser = (userId: UserId) => {
    setOnlineUsers(prev => prev.filter(id => (id.toString() !== userId.toString())))
  }

  useEffect(() => {
    const socket = getSocket()

    const getInitialUsers = (users: UserId[]) => {
      setOnlineUsers(users)
      console.log(users)
    }

    socket?.on('presence:initial', getInitialUsers)

    // Solicitar usuario en linea una vez conectado al websocket
    if(socket?.connected) {
      socket.emit('presence:get_initial')
    } else {
      socket?.once('connect', () => socket.emit('presence:get_initial'))
    }

    // Escuchar si se conecta o desconecta un usuario
    socket?.on('user:online', addUser)
    socket?.on('user:offline', removeUser)

    return () => {
      socket?.off('presence:initial', getInitialUsers)
      socket?.off('user:online', addUser)
      socket?.off('user:offline', removeUser)
    }
  }, [userIdentity])

  

  const isOnline = (userId: UserId) => {
    return onlineUsers.includes(userId)
  }

  return (
    <OnlineUsersContext.Provider value={{onlineUsers, isOnline}}>
      {children}
    </OnlineUsersContext.Provider>
  )
}
