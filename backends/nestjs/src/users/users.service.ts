import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private readonly users: User[] = [];

  constructor() {
    this.users.push(
      ...Array(10)
        .fill(0)
        .map(
          (_, i) =>
            new User({
              id: `${i}`,
              name: `user${i}`,
              password: `password${i}`,
            }),
        ),
    );
  }

  async findOneByUsername(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.name === username);
  }
}
