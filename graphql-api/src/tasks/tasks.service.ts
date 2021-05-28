import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/data-access/prisma.service';
import { CreateTaskInput } from './dto/create-task.input';
import { UpdateTaskInput } from './dto/update-task.input';

@Injectable()
export class TasksService {

  constructor(private prisma: PrismaService) { }

  public async create(createTaskInput: CreateTaskInput) {
    return this.prisma.task.create({ data: createTaskInput });
  }

  public async findAll() {
    return this.prisma.task.findMany();
  }

  public async findOneById(id: number) {
    return this.prisma.task.findUnique({ where: { id }, });
  }

  public async update(id: number, updateTaskInput: UpdateTaskInput) {
    return this.prisma.task.update({
      data: updateTaskInput,
      where: {
        id
      }
    });
  }

  public async remove(id: number) {
    return this.prisma.task.delete({ where: { id } })
  }
}
