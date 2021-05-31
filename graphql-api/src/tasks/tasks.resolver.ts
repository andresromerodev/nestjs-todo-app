import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TasksService } from './tasks.service';
import { Task } from './entities/task.entity';
import { CreateTaskInput } from './dto/create-task.input';
import { UpdateTaskInput } from './dto/update-task.input';

@Resolver(() => Task)
export class TasksResolver {
    constructor(private readonly tasksService: TasksService) {}

    @Mutation(() => Task)
    createTask(@Args('createTaskInput') createTaskInput: CreateTaskInput): Promise<Task> {
        return this.tasksService.create(createTaskInput);
    }

    @Query(() => [Task], { name: 'tasks' })
    findAll(): Promise<Task[]> {
        return this.tasksService.findAll();
    }

    @Query(() => [Task], { name: 'tasksByToDoListId' })
    findAllByToDoListId(@Args('id', { type: () => Int }) id: number): Promise<Task[]> {
        return this.tasksService.findAllByToDoListId(id);
    }

    @Query(() => Task, { name: 'task' })
    findOne(@Args('id', { type: () => Int }) id: number): Promise<Task> {
        return this.tasksService.findOneById(id);
    }

    @Mutation(() => Task)
    updateTask(@Args('updateTaskInput') updateTaskInput: UpdateTaskInput): Promise<Task> {
        return this.tasksService.update(updateTaskInput.id, updateTaskInput);
    }

    @Mutation(() => Task)
    removeTask(@Args('id', { type: () => Int }) id: number): Promise<Task> {
        return this.tasksService.remove(id);
    }
}
