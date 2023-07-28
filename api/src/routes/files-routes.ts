import { Router } from 'express'
import { importCSVController } from '../controllers/user-controller'

import upload from '../middlewares/upload'

const filesRoutes = Router()

filesRoutes.post('/', upload.single('file'), importCSVController)

export { filesRoutes }
