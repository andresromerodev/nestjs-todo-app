import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
	imports: [GraphQLModule.forRoot({
		autoSchemaFile: `${process.cwd()}src/schema.gql`,
	})]
})
export class AppModule {}
