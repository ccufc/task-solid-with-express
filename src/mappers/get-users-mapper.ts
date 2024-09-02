import { User } from '@/entities/user'
import type { GetUsersDto } from '@/interfaces/get-users-dto-interface'

export default class GetUsersMapper {
  public static mapTo(users: User[]): GetUsersDto[] {
    return users.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      age: user.age,
    }))
  }

  public static mapFrom(data: GetUsersDto[]): User[] {
    return data.map(
      (dto) =>
        new User({
          id: dto.id,
          name: dto.name,
          email: dto.email,
          age: dto.age,
        }),
    )
  }
}
