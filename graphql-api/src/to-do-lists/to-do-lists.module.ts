import { Module } from '@nestjs/common';
import { ToDoListsService } from './to-do-lists.service';
import { ToDoListsResolver } from './to-do-lists.resolver';
import { TasksService } from 'src/tasks/tasks.service';
import { TasksModule } from 'src/tasks/tasks.module';
import { PrismaService } from 'src/data-access/prisma.service';

@Module({
  imports: [TasksModule],
  providers: [PrismaService, ToDoListsResolver, ToDoListsService, TasksService]
})
export class ToDoListsModule { }
