import { Injectable } from '@nestjs/common';
import { CreateToDoListInput } from './dto/create-to-do-list.input';
import { UpdateToDoListInput } from './dto/update-to-do-list.input';

@Injectable()
export class ToDoListsService {
  create(createToDoListInput: CreateToDoListInput) {
    return 'This action adds a new toDoList';
  }

  findAll() {
    return `This action returns all toDoLists`;
  }

  findOne(id: number) {
    return `This action returns a #${id} toDoList`;
  }

  update(id: number, updateToDoListInput: UpdateToDoListInput) {
    return `This action updates a #${id} toDoList`;
  }

  remove(id: number) {
    return `This action removes a #${id} toDoList`;
  }
}
