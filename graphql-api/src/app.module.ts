import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RModule } from './s/r/r.module';
import { ToDoListsModule } from './to-do-lists/to-do-lists.module';

@Module({
	imports: [RModule, ToDoListsModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
