import { Request, Response } from 'express'

import { importCSVService } from '../services/import-csv-service'
import { listUsersService } from '../services/list-users-service'

export const importCSVController = async (req: Request, res: Response) => {
  try {
    const { file } = req

    const csv = await importCSVService(file as Express.Multer.File)

    res.status(201).json({
      message: 'file imported successfully',
      data: csv,
    })
  } catch (error: any) {
    res.status(error.statusCode).json(error)
  }
}

export const listUsersController = async (req: Request, res: Response) => {
  try {
    const { query } = req.query

    const users = await listUsersService(query as string)

    return res.json(users)
  } catch (error: any) {
    return res.status(error.statusCode).json(error)
  }
}
