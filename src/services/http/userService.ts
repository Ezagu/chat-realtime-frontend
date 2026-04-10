import { url } from "../../helpers/Global"
import type { User } from "../../types/user"

export const searchUserService = async (search: string) => {
  const req = await fetch(url + `users?search=${search}`, {
    method: 'GET',
    credentials: 'include'
  })

  const res = await req.json()

  if(!req.ok) throw new Error('Internal Server Error')

  return res as User[]
} 