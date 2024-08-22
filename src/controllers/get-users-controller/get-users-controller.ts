import type { Response, Request } from 'express'
import type { IGetUsersController } from '../../interfaces/create-user-get-controller-interface'
import type { IUserRepository } from '../../interfaces/user-repository-interface'

export class GetUsersController implements IGetUsersController {
  constructor(private readonly repository: IUserRepository) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const users = await this.repository.findAll()
      return response.status(200).json(users)
    } catch (error) {
      return response.status(500).json({ error: 'failed to retrive users' })
    }
  }
}
