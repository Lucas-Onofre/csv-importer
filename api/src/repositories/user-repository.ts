import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

import { CreateUserDTO } from '../models/User'

export const UserRepository = {
  async bulkCreateUser(users: CreateUserDTO[]): Promise<any> {
    const createdUsers = await Promise.all(
      users.map(async (user) => {
        return await prisma.user.create({ data: user })
      })
    )

    return createdUsers
  },

  async listUsers(query: string) {
    const users = await prisma.user.findMany({
      where: {
        OR: [
          {
            name: {
              contains: query,
            },
          },
          {
            city: {
              contains: query,
            },
          },
          {
            country: {
              contains: query,
            },
          },
          {
            favorite_sport: {
              contains: query,
            },
          },
        ],
      },
    })

    return users
  },
}
