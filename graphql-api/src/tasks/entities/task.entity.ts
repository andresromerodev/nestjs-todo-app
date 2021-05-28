import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';
import { State } from '@prisma/client';

import { ToDoList } from '../../to-do-lists/entities/to-do-list.entity';

@ObjectType()
export class Task {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  description?: string;

  @Field(() => State)
  state: State;

  @Field(() => ToDoList, { nullable: true })
  toDoList?: ToDoList;

  @Field(() => Int, { nullable: true })
  orderInToDoList?: number;

  @Field(() => Date)
  createdAt: Date

  @Field(() => Date)
  updatedAt: Date
}

registerEnumType(State, { name: 'State', });