import { Module } from '@nestjs/common';
import { ToDoListsService } from './to-do-lists.service';
import { ToDoListsResolver } from './to-do-lists.resolver';

@Module({
  providers: [ToDoListsResolver, ToDoListsService]
})
export class ToDoListsModule {}
