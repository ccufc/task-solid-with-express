import type { IUserRepository } from '@/interfaces/user-repository-interface'
import { User } from '@/entities/user'
import prisma from '@/database/prisma'

export class SqliteUserRepository implements IUserRepository {
  public async create(user: User): Promise<void> {
    await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        age: user.age,
      },
    })
  }

  public async findAll(): Promise<User[]> {
    const users = await prisma.user.findMany()
    return users.map(
      (user) =>
        new User({
          id: user.id,
          name: user.name,
          email: user.email,
          age: user.age,
        }),
    )
  }
}
