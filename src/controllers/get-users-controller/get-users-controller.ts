import type { Response, Request } from 'express'
import type { IGetUsersUseCase } from '@/interfaces/get-users-use-case-interface'
import type { IGetUsersController } from '@/interfaces/get-users-controller-interface'

export class GetUsersController implements IGetUsersController {
  constructor(private readonly getUsersUseCase: IGetUsersUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const users = await this.getUsersUseCase.execute()
      return response.status(200).json(users)
    } catch (error) {
      return response.status(500).json({ error: 'failed to retrive users' })
    }
  }
}
