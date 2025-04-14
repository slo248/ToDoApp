import { Injectable, NotFoundException } from '@nestjs/common';
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
    const list = Array.from(this.tasks.values());
    const paginatedList = list.slice(offset, offset + limit);
    return paginatedList;
  }

  findOne(id: number) {
    const task = this.tasks.get(id);
    if (!task) {
      throw new NotFoundException();
    }
    return task;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    const task = this.findOne(id);
    const updatedTask = { ...task, ...updateTaskDto };
    this.tasks.set(id, updatedTask);
    return updatedTask;
  }

  remove(id: number) {
    const task = this.findOne(id);
    this.tasks.delete(id);
    return task;
  }
}
