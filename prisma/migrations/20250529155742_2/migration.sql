/*
  Warnings:

  - You are about to drop the column `roles` on the `Profile` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "roles",
ADD COLUMN     "role" "Role" DEFAULT 'GUEST';
