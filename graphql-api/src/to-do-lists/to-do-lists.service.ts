import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/data-access/prisma.service';
import { CreateToDoListInput } from './dto/create-to-do-list.input';
import { UpdateToDoListInput } from './dto/update-to-do-list.input';
import { ToDoList } from './entities/to-do-list.entity';

@Injectable()
export class ToDoListsService {

  constructor(private db: PrismaService) { }

  public async create(createToDoListInput: CreateToDoListInput): Promise<ToDoList> {
    return this.db.toDoList.create({ data: createToDoListInput });
  }

  public async findAll(): Promise<ToDoList[]> {
    return this.db.toDoList.findMany();
  }

  public async findOne(id: number): Promise<ToDoList> {
    return this.db.toDoList.findUnique({ where: { id } });
  }

  public async update(id: number, updateToDoListInput: UpdateToDoListInput): Promise<ToDoList> {
    return this.db.toDoList.update({
      where: { id },
      data: updateToDoListInput
    });
  }

  public async remove(id: number): Promise<ToDoList> {
    return this.db.toDoList.delete({ where: { id } });
  }
}
