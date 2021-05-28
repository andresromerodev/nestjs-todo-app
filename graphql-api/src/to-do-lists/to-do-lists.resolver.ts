import { Resolver, Query, Mutation, Args, Int, Parent, ResolveField, Root } from '@nestjs/graphql';
import { ToDoListsService } from './to-do-lists.service';
import { TasksService } from '../tasks/tasks.service';
import { ToDoList } from './entities/to-do-list.entity';
import { CreateToDoListInput } from './dto/create-to-do-list.input';
import { UpdateToDoListInput } from './dto/update-to-do-list.input';
import { Task } from 'src/tasks/entities/task.entity';

@Resolver(() => ToDoList)
export class ToDoListsResolver {

  constructor(
    private readonly toDoListsService: ToDoListsService,
    private readonly tasksService: TasksService
  ) { }

  @Mutation(() => ToDoList)
  createToDoList(@Args('createToDoListInput') createToDoListInput: CreateToDoListInput) {
    return this.toDoListsService.create(createToDoListInput);
  }

  @Query(() => [ToDoList], { name: 'toDoLists' })
  findAll() {
    return this.toDoListsService.findAll();
  }

  @Query(() => ToDoList, { name: 'toDoList' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.toDoListsService.findOne(id);
  }

  @Mutation(() => ToDoList)
  updateToDoList(@Args('updateToDoListInput') updateToDoListInput: UpdateToDoListInput) {
    return this.toDoListsService.update(updateToDoListInput.id, updateToDoListInput);
  }

  @Mutation(() => ToDoList)
  removeToDoList(@Args('id', { type: () => Int }) id: number) {
    return this.toDoListsService.remove(id);
  }

  @ResolveField()
  async tasks(@Root() toDoList: ToDoList) {
    const { id } = toDoList;
    return this.tasksService.findAllByToDoListId(id);
  }
}
