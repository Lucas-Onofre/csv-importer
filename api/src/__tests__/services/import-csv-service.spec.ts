import fs from 'fs'
import path from 'path'

import { importCSVService } from '../../services/import-csv-service'

const txtErrorPath = path.resolve(__dirname, '..', '__mocks__', 'error.txt')
const txtError = fs.readFileSync(txtErrorPath, 'utf8') as unknown

describe('importCSVService', () => {
  it('should return an error when the file extension is invalid', async () => {
    await expect(
      importCSVService(txtError as Express.Multer.File)
    ).rejects.toThrowError()
  })
})
