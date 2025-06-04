-- CreateTable
CREATE TABLE "user_view" (
    "id" UUID NOT NULL,
    "email" TEXT,

    CONSTRAINT "user_view_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_view_email_key" ON "user_view"("email");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user_view"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Officer" ADD CONSTRAINT "Officer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user_view"("id") ON DELETE SET NULL ON UPDATE CASCADE;
