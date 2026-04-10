import { url } from "../../helpers/Global";
import type { User, UserAuth } from "../../types/user";

export const loginService = async (userAuth: UserAuth) => {
  const req = await fetch(url + 'users/login', {
    method: 'POST',
    body: JSON.stringify(userAuth),
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  })

  const res = await req.json()

  if(!req.ok) {
    throw new Error(res.error ?? 'Internal Server Error')
  }

  return res as User
}

export const registerService = async (userAuth: UserAuth) => {
  const req = await fetch(url + 'users/register', {
    method: 'POST',
    body: JSON.stringify(userAuth),
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  })

  const res = await req.json()

  if(!req.ok) {
    throw new Error(res.error ?? 'Internal Server Error')
  }

  return res as User
}

export const logoutService = async () => {
  const req = await fetch(url + 'users/logout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }, 
    credentials: 'include'
  })

  if(!req.ok) {
    throw new Error('Internal Server Error')
  }
}

export const getMeService = async () => {
  const req = await fetch(url + 'users/me', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  })

  if(!req.ok) throw new Error('There is no active session')

  return await req.json() as User
}