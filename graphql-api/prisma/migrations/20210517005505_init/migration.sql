/*
  Warnings:

  - You are about to drop the column `uuid` on the `t_tasks` table. All the data in the column will be lost.
  - You are about to drop the column `uuid` on the `t_to_do_lists` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "t_tasks.uuid_unique";

-- DropIndex
DROP INDEX "t_to_do_lists.uuid_unique";

-- AlterTable
ALTER TABLE "t_tasks" DROP COLUMN "uuid";

-- AlterTable
ALTER TABLE "t_to_do_lists" DROP COLUMN "uuid";
