import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/data-access/prisma.service';
import { CreateToDoListInput } from './dto/create-to-do-list.input';
import { UpdateToDoListInput } from './dto/update-to-do-list.input';
import { ToDoList } from './entities/to-do-list.entity';

@Injectable()
export class ToDoListsService {

  constructor(private prisma: PrismaService) { }

  public async create(createToDoListInput: CreateToDoListInput): Promise<ToDoList> {
    return this.prisma.toDoList.create({ data: createToDoListInput });
  }

  public async findAll(): Promise<ToDoList[]> {
    return this.prisma.toDoList.findMany();
  }

  public async findOne(id: number): Promise<ToDoList> {
    return this.prisma.toDoList.findUnique({ where: { id } });
  }

  public async update(id: number, updateToDoListInput: UpdateToDoListInput): Promise<ToDoList> {
    return this.prisma.toDoList.update({
      data: updateToDoListInput,
      where: {
        id
      }
    });
  }

  public async remove(id: number): Promise<ToDoList> {
    return this.prisma.toDoList.delete({ where: { id } });
  }
}
