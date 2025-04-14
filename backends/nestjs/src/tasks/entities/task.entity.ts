import { Exclude, Expose } from 'class-transformer';

export class Task {
  @Expose({ name: 'task_id' })
  id: number;
  title: string;
  description?: string;

  @Exclude()
  createdAt: Date;

  @Exclude()
  updatedAt: Date;

  constructor(partial: Partial<Task>) {
    Object.assign(this, partial);
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
