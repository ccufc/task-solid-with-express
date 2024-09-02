import { CreateUserController } from './create-user-controller'
import { CreateUserUseCase } from '@/use-cases/create-user-use-case'
import { SqliteUserRepository } from '@/repositories/sqlite-user-repository'

const sqliteUserRepository = new SqliteUserRepository()
const createUserUsecase = new CreateUserUseCase(sqliteUserRepository)
const createUserController = new CreateUserController(createUserUsecase)

export default createUserController
