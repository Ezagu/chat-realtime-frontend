import type { Message, MessageVM } from "../types/message";

export const toMessageVM = ({message, myId}: {message: Message, myId: string}): MessageVM => {
  return {
    id: message.id,
    text: message.content,
    isMine: message.userId.toString() === myId.toString(),
    time: message.createdAt,
    read: message.read
  }
}