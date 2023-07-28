import { Router } from 'express'
import { listUsersController } from '../controllers/user-controller'

const userRoutes = Router()

userRoutes.get('/', listUsersController)

export { userRoutes }
