import { Check, CheckCheck } from "lucide-react"

export const MessageChecked = ({ read } : { read: boolean }) => {
  return read
    ? <CheckCheck className="size-4 text-blue-600"/>
    : <Check className="size-4"/>
}