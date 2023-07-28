import { UserRepository } from '../repositories/user-repository'

import { User } from '../models/User'

import { BaseError } from '../errors'

export const listUsersService = async (query: string = ''): Promise<User[]> => {
  try {
    if (!query) {
      return []
    }

    return await UserRepository.listUsers(query)
  } catch (error) {
    throw new BaseError({
      message: 'Ocurred an error while listing users.',
      statusCode: 400,
    })
  }
}
