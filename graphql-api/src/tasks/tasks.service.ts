import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/data-access/prisma.service';
import { CreateTaskInput } from './dto/create-task.input';
import { UpdateTaskInput } from './dto/update-task.input';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {

  constructor(private prisma: PrismaService) { }

  public async create(createTaskInput: CreateTaskInput): Promise<Task> {
    return this.prisma.task.create({ data: createTaskInput });
  }

  public async findAll(): Promise<Task[]> {
    return this.prisma.task.findMany();
  }

  public async findAllByToDoListId(toDoListId: number): Promise<Task[]> {
    return this.prisma.task.findMany({ where: { toDoListId } });
  }

  public async findOneById(id: number): Promise<Task> {
    return this.prisma.task.findUnique({ where: { id }, });
  }

  public async update(id: number, updateTaskInput: UpdateTaskInput): Promise<Task> {
    return this.prisma.task.update({
      data: updateTaskInput,
      where: {
        id
      }
    });
  }

  public async remove(id: number): Promise<Task> {
    return this.prisma.task.delete({ where: { id } })
  }

}
