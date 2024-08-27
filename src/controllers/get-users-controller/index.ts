import { GetUsersController } from './get-users-controller'
import { GetUsersUseCase } from '@/use-cases/get-users-use-case'
import { SqliteUserRepository } from '@/repositories/sqlite-user-repository'

const sqliteUserRepository = new SqliteUserRepository()
const getUsersUseCase = new GetUsersUseCase(sqliteUserRepository)
const getUsersController = new GetUsersController(getUsersUseCase)

export default getUsersController
