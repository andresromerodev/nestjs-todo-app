-- CreateEnum
CREATE TYPE "State" AS ENUM ('TODO', 'DONE');

-- CreateTable
CREATE TABLE "ToDoList" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "order" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Step" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "toDoListId" INTEGER NOT NULL,
    "orderInToDoList" INTEGER NOT NULL,
    "state" "State" NOT NULL DEFAULT E'TODO',

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "state" "State" NOT NULL DEFAULT E'TODO',
    "stepId" INTEGER NOT NULL,
    "orderInStepList" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ToDoList.name_unique" ON "ToDoList"("name");

-- AddForeignKey
ALTER TABLE "Step" ADD FOREIGN KEY ("toDoListId") REFERENCES "ToDoList"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD FOREIGN KEY ("stepId") REFERENCES "Step"("id") ON DELETE CASCADE ON UPDATE CASCADE;
