import fs from 'fs'
import path from 'path'
import request from 'supertest'

import { app } from '../..'

const errorTxtPath = path.resolve(__dirname, '..', '__mocks__', 'error.txt')
const txtError = fs.readFileSync(errorTxtPath) as unknown

describe('userController', () => {
  it('should return a list of users', async () => {
    const response = await request(app).get('/api/users').query({
      query: '',
    })
    expect(response.status).toBe(200)
    expect(Array.isArray(response.body)).toBe(true)
  })

  it('should return an error when the file extension is invalid', async () => {
    const response = await request(app)
      .post('/api/files')
      .attach('file', txtError as Express.Multer.File | any)

    expect(response.status).toBe(400)
  })
})
