import { Injectable } from '@nestjs/common';

export type User = {
  userId: number;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'stacy',
      password: 'kkmUhEb3fTg',
    },
    {
      userId: 2,
      username: 'ashido',
      password: 'SR8pcNHBomQ',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
