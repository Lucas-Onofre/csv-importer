export type User = {
  id: number
  name: string
  city: string
  country: string
  favorite_sport: string
}

export type CreateUserDTO = Omit<User, 'id'>
