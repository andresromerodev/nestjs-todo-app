import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Task } from '../../tasks/entities/task.entity';

@ObjectType()
export class ToDoList {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field(() => [Task])
  tasks: Task[];

  @Field(() => Date)
  createdAt: Date

  @Field(() => Date)
  updatedAt: Date
}
