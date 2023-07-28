import { listUsersService } from '../../services/list-users-service'

describe('listUsersService', () => {
  it('should return a array of users', async () => {
    const users = await listUsersService('')

    expect(Array.isArray(users)).toBe(true)
  })
})
