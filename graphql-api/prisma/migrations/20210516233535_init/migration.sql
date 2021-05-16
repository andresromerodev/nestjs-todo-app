/*
  Warnings:

  - You are about to drop the `Step` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Task` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ToDoList` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Step" DROP CONSTRAINT "Step_toDoListId_fkey";

-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_stepId_fkey";

-- DropTable
DROP TABLE "Step";

-- DropTable
DROP TABLE "Task";

-- DropTable
DROP TABLE "ToDoList";

-- CreateTable
CREATE TABLE "t_to_do_lists" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_tasks" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "to_do_list_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "state" "State" NOT NULL DEFAULT E'TODO',
    "order_in_to_do_list" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "t_to_do_lists.uuid_unique" ON "t_to_do_lists"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "t_to_do_lists.name_unique" ON "t_to_do_lists"("name");

-- CreateIndex
CREATE UNIQUE INDEX "t_tasks.uuid_unique" ON "t_tasks"("uuid");

-- AddForeignKey
ALTER TABLE "t_tasks" ADD FOREIGN KEY ("to_do_list_id") REFERENCES "t_to_do_lists"("id") ON DELETE CASCADE ON UPDATE CASCADE;
