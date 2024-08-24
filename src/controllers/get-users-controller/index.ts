import { GetUsersController } from './get-users-controller'
import { GetUsersUseCase } from '@/use-cases/get-users-use-case'
import { InMemoryUserRepository } from '@/repositories/in-memory-user-repository'

const inMemoryUserRepository = new InMemoryUserRepository()
const getUsersUseCase = new GetUsersUseCase(inMemoryUserRepository)
const getUsersController = new GetUsersController(getUsersUseCase)

export default getUsersController
