import type { CreateUserDto } from '@/interfaces/create-user-dto-interface'
import type { CreatedUserDto } from '@/interfaces/created-user-dto-interface'
import { User } from '@/entities/user'

export default class CreateUserMapper {
  public static mapTo(data: CreateUserDto): User {
    return new User({
      id: data.id,
      name: data.name,
      email: data.email,
      age: data.age,
    })
  }

  public static mapFrom(user: User): CreatedUserDto {
    return {}
  }
}
