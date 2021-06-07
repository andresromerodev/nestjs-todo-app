import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/data-access/prisma.service';
import { CreateTaskInput } from './dto/create-task.input';
import { UpdateTaskInput } from './dto/update-task.input';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {

  constructor(private db: PrismaService) { }

  public async create(createTaskInput: CreateTaskInput): Promise<Task> {
    return this.db.task.create({ data: createTaskInput });
  }

  public async findAll(): Promise<Task[]> {
    return this.db.task.findMany();
  }

  public async findAllByToDoListId(toDoListId: number): Promise<Task[]> {
    return this.db.task.findMany({ where: { toDoListId } });
  }

  public async findOneById(id: number): Promise<Task> {
    return this.db.task.findUnique({ where: { id }, });
  }

  public async update(id: number, updateTaskInput: UpdateTaskInput): Promise<Task> {
    return this.db.task.update({
      where: { id },
      data: updateTaskInput
    });
  }

  public async remove(id: number): Promise<Task> {
    return this.db.task.delete({ where: { id } })
  }

}
