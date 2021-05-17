/*
  Warnings:

  - You are about to drop the column `name` on the `t_tasks` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `t_to_do_lists` table. All the data in the column will be lost.
  - Made the column `description` on table `t_tasks` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "t_tasks" DROP COLUMN "name",
ALTER COLUMN "to_do_list_id" DROP NOT NULL,
ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "order_in_to_do_list" DROP NOT NULL;

-- AlterTable
ALTER TABLE "t_to_do_lists" DROP COLUMN "description";
