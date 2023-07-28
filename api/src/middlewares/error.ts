import { Request, Response, NextFunction } from 'express'

import { InternalServerError } from '../errors'

export const errorMiddleware = (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  throw new InternalServerError(error.message, 'Try again later...')
}
