import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import mockedUsers from '../data-access/mockedUsers.json'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function getMockedUser(username: string) {
  return mockedUsers.find((user) => user.username === username)
}
