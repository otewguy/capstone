-- DropForeignKey
ALTER TABLE "Site" DROP CONSTRAINT "Site_officerId_fkey";

-- AlterTable
ALTER TABLE "Site" ALTER COLUMN "officerId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Site" ADD CONSTRAINT "Site_officerId_fkey" FOREIGN KEY ("officerId") REFERENCES "Officer"("id") ON DELETE SET NULL ON UPDATE CASCADE;
