import { Args, Int, Mutation, Query, ResolveField, Resolver, Root } from '@nestjs/graphql';
import { Task } from 'src/tasks/entities/task.entity';
import { TasksService } from '../tasks/tasks.service';
import { CreateToDoListInput } from './dto/create-to-do-list.input';
import { UpdateToDoListInput } from './dto/update-to-do-list.input';
import { ToDoList } from './entities/to-do-list.entity';
import { ToDoListsService } from './to-do-lists.service';

@Resolver(() => ToDoList)
export class ToDoListsResolver {

  constructor(
    private readonly toDoListsService: ToDoListsService,
    private readonly tasksService: TasksService
  ) { }

  @Mutation(() => ToDoList)
  createToDoList(@Args('createToDoListInput') createToDoListInput: CreateToDoListInput): Promise<ToDoList> {
    return this.toDoListsService.create(createToDoListInput);
  }

  @Query(() => [ToDoList], { name: 'toDoLists' })
  findAll(): Promise<ToDoList[]> {
    return this.toDoListsService.findAll();
  }

  @Query(() => ToDoList, { name: 'toDoList' })
  findOne(@Args('id', { type: () => Int }) id: number): Promise<ToDoList> {
    return this.toDoListsService.findOne(id);
  }

  @Mutation(() => ToDoList)
  updateToDoList(@Args('updateToDoListInput') updateToDoListInput: UpdateToDoListInput): Promise<ToDoList> {
    return this.toDoListsService.update(updateToDoListInput.id, updateToDoListInput);
  }

  @Mutation(() => ToDoList)
  removeToDoList(@Args('id', { type: () => Int }) id: number): Promise<ToDoList> {
    return this.toDoListsService.remove(id);
  }

  @ResolveField()
  async tasks(@Root() toDoList: ToDoList): Promise<Task[]> {
    const { id } = toDoList;
    return this.tasksService.findAllByToDoListId(id);
  }
}
