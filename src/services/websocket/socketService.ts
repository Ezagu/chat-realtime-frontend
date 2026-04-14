import { io, Socket } from "socket.io-client"
import type { SendMessage } from "../../types/message";

let socket: Socket | null = null;

export const connect = () => {
  if(socket?.connected) return socket
  socket = io(import.meta.env.VITE_API_URL || "http://localhost:3900", {withCredentials: true})
  return socket
}

export const disconnect = () => {
  socket?.disconnect()
  socket = null
}

export const getSocket = () => {
  return socket
}

export const sendMessageService = (message: SendMessage) => {
  socket?.emit('message:send', message)
}