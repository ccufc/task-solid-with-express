import type { User } from '../entities/user'
import { type IGetUsersUseCase } from '../interfaces/get-users-use-case-interface'
import type { IUserRepository } from '../interfaces/user-repository-interface'

export class GetUsersUseCase implements IGetUsersUseCase {
  constructor(private readonly repository: IUserRepository) {}

  public async execute(): Promise<User[]> {
    return await this.repository.findAll()
  }
}
