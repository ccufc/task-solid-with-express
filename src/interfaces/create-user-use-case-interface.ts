import type { User } from '../entities/user'

export interface ICreateUserUseCase {
  execute: (user: User) => Promise<void>
}
