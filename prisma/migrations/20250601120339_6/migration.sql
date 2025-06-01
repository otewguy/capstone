/*
  Warnings:

  - You are about to drop the column `review` on the `Doline` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Doline" DROP COLUMN "review",
ADD COLUMN     "feedback" TEXT;
