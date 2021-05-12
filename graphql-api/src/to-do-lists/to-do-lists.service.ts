import { Injectable } from '@nestjs/common';
import { PrismaService } from '../data-access/prisma.service';
import { ToDoList, Prisma } from '@prisma/client';

@Injectable()
export class ToDoListsService {
	constructor(private prisma: PrismaService) {}

	async toDoList(
		toDoListWhereUniqueInput: Prisma.ToDoListWhereUniqueInput,
	): Promise<ToDoList | null> {
		return this.prisma.toDoList.findUnique({
			where: toDoListWhereUniqueInput,
		});
	}
}
