import { InputType, Field } from "@nestjs/graphql";
import { CreateTaskInput } from "../../tasks/dto/create-task.input";

@InputType()
export class CreateToDoListInput {
    @Field()
    email: string;

    @Field()
    name: string;

    @Field()
    description?: string;

    @Field(() => [CreateTaskInput], { nullable: true })
    tasks: [CreateTaskInput];
}
