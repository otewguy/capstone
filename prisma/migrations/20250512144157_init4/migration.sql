-- CreateTable
CREATE TABLE "Do" (
    "id" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "project" TEXT NOT NULL,

    CONSTRAINT "Do_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Doline" (
    "id" TEXT NOT NULL,
    "doId" TEXT NOT NULL,
    "siteId" TEXT NOT NULL,
    "itemId" TEXT NOT NULL,
    "qty" INTEGER NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Doline_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Do_number_key" ON "Do"("number");

-- AddForeignKey
ALTER TABLE "Do" ADD CONSTRAINT "Do_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Doline" ADD CONSTRAINT "Doline_doId_fkey" FOREIGN KEY ("doId") REFERENCES "Do"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Doline" ADD CONSTRAINT "Doline_siteId_fkey" FOREIGN KEY ("siteId") REFERENCES "Site"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Doline" ADD CONSTRAINT "Doline_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
