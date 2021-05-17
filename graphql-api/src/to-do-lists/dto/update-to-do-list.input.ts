import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { UpdateTaskInput } from '../../tasks/dto/update-task.input';

@InputType()
export class UpdateToDoListInput {
  @Field(() => Int)
  id: number;

  @Field()
  name?: string;

  @Field(() => [UpdateTaskInput], { nullable: true })
  tasks?: [UpdateTaskInput]
}
