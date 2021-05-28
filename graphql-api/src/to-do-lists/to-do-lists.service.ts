import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/data-access/prisma.service';
import { CreateToDoListInput } from './dto/create-to-do-list.input';
import { UpdateToDoListInput } from './dto/update-to-do-list.input';

@Injectable()
export class ToDoListsService {

  constructor(private prisma: PrismaService) { }

  create(createToDoListInput: CreateToDoListInput) {
    return this.prisma.toDoList.create({ data: createToDoListInput });
  }

  findAll() {
    return this.prisma.toDoList.findMany();
  }

  findOne(id: number) {
    return this.prisma.toDoList.findUnique({ where: { id } });
  }

  update(id: number, updateToDoListInput: UpdateToDoListInput) {
    return this.prisma.toDoList.update({
      data: updateToDoListInput,
      where: {
        id
      }
    });
  }

  remove(id: number) {
    return this.prisma.toDoList.delete({ where: { id } });
  }
}
