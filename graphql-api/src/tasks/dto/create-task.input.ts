import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTaskInput {
  @Field({ nullable: true })
  description: string;

  @Field(() => Int, { nullable: true })
  toDoListId: number;

  @Field(() => Int)
  orderInStepList: number;
}
