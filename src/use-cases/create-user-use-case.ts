import type { User } from '@/entities/user'
import type { ICreateUserUseCase } from '@/interfaces/create-user-use-case-interface'
import type { IUserRepository } from '@/interfaces/user-repository-interface'

export class CreateUserUsecase implements ICreateUserUseCase {
  constructor(private readonly repository: IUserRepository) {}

  public async execute(user: User): Promise<void> {
    await this.repository.create(user)
  }
}
