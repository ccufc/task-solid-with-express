import { CreateUserController } from './create-user-controller'
import { CreateUserUsecase } from '../../use-case/create-user-use-case'
import { InMemoryUserRepository } from '../../repositories/in-memory-user-repository'

const inMemoryUserRepository = new InMemoryUserRepository()
const createUserUsecase = new CreateUserUsecase(inMemoryUserRepository)
const createUserController = new CreateUserController(createUserUsecase)

export default createUserController
