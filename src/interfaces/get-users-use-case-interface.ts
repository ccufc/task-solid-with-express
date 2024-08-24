import { type User } from '@/entities/user'

export interface IGetUsersUseCase {
  execute: () => Promise<User[]>
}
