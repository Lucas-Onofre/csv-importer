export type User = {
    id: number,
    name: string,
    city: string,
    country: string,
    favorite_sport: string
}

export type UserListDTO = Omit<User, 'id'>;