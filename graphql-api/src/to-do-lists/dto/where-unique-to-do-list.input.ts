import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class WhereUniqueToDoListInput {
  @Field(() => Int, { nullable: true })
  id?: number;
}
