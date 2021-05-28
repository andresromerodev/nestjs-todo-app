import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksResolver } from './tasks.resolver';
import { PrismaService } from 'src/data-access/prisma.service';

@Module({
  providers: [PrismaService, TasksResolver, TasksService],
  exports: [TasksService]
})
export class TasksModule { }
