import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const toDoListData: Prisma.ToDoListCreateInput[] = [
    {
        name: "Shopping List",
        description: "A supermarket shopping list",
        tasks: {
            create: [
                {
                    description: "Buy milk",
                    orderInToDoList: 1,
                },
                {
                    description: "Buy cheese",
                    orderInToDoList: 2,
                },
                {
                    description: "Buy bread",
                    orderInToDoList: 3,
                },
                {
                    description: "Buy  coffee",
                    orderInToDoList: 4,
                },
                {
                    description: "Buy chicken",
                    orderInToDoList: 5,
                },
            ],
        },
    },
    {
        name: "Learning List",
        description: "A coding learning list",
        tasks: {
            create: [
                {
                    description: "Learn NestJS",
                    orderInToDoList: 1,
                },
                {
                    description: "Learn Prisma",
                    orderInToDoList: 2,
                },
                {
                    description: "Learn GraphQl",
                    orderInToDoList: 3,
                },
            ],
        },
    },
];

async function main() {
    console.log(`Start seeding ...`);
    for (const list of toDoListData) {
        const createdList = await prisma.toDoList.create({
            data: list,
        });
        console.log(`Created TODO List with id: ${createdList.id}`);
    }
    console.log(`Seeding finished.`);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
