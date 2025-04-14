import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  private readonly tasks: Map<number, Task> = new Map<number, Task>();

  constructor() {
    Array(50)
      .fill(0)
      .forEach((_, i) => {
        this.tasks.set(
          i,
          new Task({
            id: i,
            title: `Task ${i}`,
            description: `Description ${i}`,
          }),
        );
      });
  }

  create(createTaskDto: CreateTaskDto) {
    const task = new Task({
      id: this.tasks.size,
      ...createTaskDto,
    });
    this.tasks.set(task.id, task);
    return task;
  }

  findAll(limit: number, offset: number) {
    console.log(limit, offset);
    const list = Array.from(this.tasks.values());
    const paginatedList = list.slice(offset, offset + limit);
    return paginatedList;
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
