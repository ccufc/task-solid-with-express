import type { Request, Response } from 'express'
import type { ICreateUserController } from '@/interfaces/create-user-controller-interface'
import type { ICreateUserUseCase } from '@/interfaces/create-user-use-case-interface'
import type { CreateUserDto } from '@/interfaces/create-user-dto-interface'
import CreateUserMapper from '@/mappers/create-user-mapper'

export class CreateUserController implements ICreateUserController {
  constructor(private readonly createUserUseCase: ICreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const data = request.body as CreateUserDto
    const user = CreateUserMapper.mapTo(data)

    try {
      await this.createUserUseCase.execute(user)
      return response.status(201).send('User created successfully')
    } catch {
      return response.status(500).send('User creation failed')
    }
  }
}
