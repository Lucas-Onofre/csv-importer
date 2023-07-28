import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import http from 'http'

import { router } from './routes'
import { errorMiddleware } from './middlewares/error'

dotenv.config()

const app: Express = express()

app.use(express.json())
app.use(errorMiddleware)

app.use((req: Request, res: Response, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Header', '*')
  res.header('Access-Control-Allow-Methods', '*')
  next()
})

app.use('/api', router)

app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`)
})

export { app }
