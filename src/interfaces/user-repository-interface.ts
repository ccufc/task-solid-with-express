import type { User } from '../entities/user'

export interface IUserRepository {
  findAll: () => Promise<User[]>
  create: (user: User) => Promise<void>
}
