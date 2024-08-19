import type { Request, Response } from 'express'

export interface ICreateUserController {
  handle: (request: Request, response: Response) => Promise<Response>
}
