-- CreateTable
CREATE TABLE "contact_submissions" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "contact_submissions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "contact_submissions_email_idx" ON "contact_submissions"("email");

-- CreateIndex
CREATE INDEX "contact_submissions_name_idx" ON "contact_submissions"("name");
