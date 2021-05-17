import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class WhereUniqueTaskInput {
  @Field(() => Int, { nullable: true })
  id?: number;
}
