import { Exclude, Expose } from 'class-transformer';

export class User {
  @Expose({ name: 'user_id' })
  id: string;

  @Expose({ name: 'user_name' })
  name: string;

  @Exclude()
  password: string;

  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }
}
