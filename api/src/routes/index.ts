import { Router } from 'express'

import { userRoutes } from './user-routes'
import { filesRoutes } from './files-routes'

const router = Router()

router.use('/users', userRoutes)
router.use('/files', filesRoutes)

export { router }
