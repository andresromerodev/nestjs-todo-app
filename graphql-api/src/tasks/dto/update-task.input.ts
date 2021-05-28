import { InputType, Field, Int, registerEnumType } from '@nestjs/graphql';
import { State } from '@prisma/client';

@InputType()
export class UpdateTaskInput {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  description?: string;

  @Field(() => Int, { nullable: true })
  orderInToDoList?: number;

  @Field(() => State, { nullable: true })
  state?: State;
}

registerEnumType(State, { name: 'State', });