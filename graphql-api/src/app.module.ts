import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ToDoListsModule } from './to-do-lists/to-do-lists.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
	imports: [
		ToDoListsModule,
		TasksModule,
		GraphQLModule.forRoot({ autoSchemaFile: 'schema.gql', })
	]
})
export class AppModule {}
