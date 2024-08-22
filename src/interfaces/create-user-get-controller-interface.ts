import type { Request, Response } from 'express'

export interface IGetUsersController {
  handle: (request: Request, response: Response) => Promise<Response>
}
