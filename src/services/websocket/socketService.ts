import { io, Socket } from "socket.io-client"

let socket: Socket | null = null;

export const connect = () => {
  if(socket?.connected) return socket

  socket = io('http://localhost:3900', {withCredentials: true})

  return socket
}

export const disconnect = () => {
  socket?.disconnect()
  socket = null
}

export const getSocket = () => {
  if(!socket) throw new Error('Socket not inicialized')
  return socket
}