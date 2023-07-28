import fs from 'fs'
import csvParse from 'csv-parser'

import { UserRepository } from '../repositories/user-repository'

import { CreateUserDTO, User } from '../models/User'
import { BadRequestError } from '../errors'

export const importCSVService = async (
  file: Express.Multer.File
): Promise<User[] | undefined> => {
  try {
    if (file.mimetype !== 'text/csv') {
      throw new BadRequestError(
        'Invalid file.',
        'Verify your file and try again.'
      )
    }

    const users = await loadCSVUsers(file)

    if (!users) return

    return await UserRepository.bulkCreateUser(users)
  } catch (error) {
    throw new BadRequestError(
      'Invalid file.',
      'Verify your file and try again.'
    )
  }
}

const loadCSVUsers = async (
  file: Express.Multer.File
): Promise<CreateUserDTO[]> => {
  return new Promise((resolve, reject) => {
    const stream = fs.createReadStream(file.path)

    const parseFile = csvParse()

    stream.pipe(parseFile)

    const users: CreateUserDTO[] = []

    parseFile
      .on('data', async (line) => {
        const { name, city, country, favorite_sport } = line

        users.push({ name, city, country, favorite_sport })
      })
      .on('end', () => {
        resolve(users)
      })
      .on('error', (err) => {
        reject(err)
      })
  })
}
