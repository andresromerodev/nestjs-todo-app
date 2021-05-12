import { Module } from '@nestjs/common';
import { ToDoListsResolver } from './to-do-lists.resolver';
import { ToDoListsService } from './to-do-lists.service';

@Module({
  providers: [ToDoListsResolver, ToDoListsService]
})
export class ToDoListsModule {}
