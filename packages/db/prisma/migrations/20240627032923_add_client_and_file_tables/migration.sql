-- CreateTable
CREATE TABLE "clients" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "stripeId" TEXT NOT NULL,

    CONSTRAINT "clients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "files" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "clientId" INTEGER NOT NULL,
    "expiry" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "files_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "clients_stripeId_key" ON "clients"("stripeId");

-- CreateIndex
CREATE INDEX "clients_stripeId_idx" ON "clients"("stripeId");

-- CreateIndex
CREATE UNIQUE INDEX "files_key_key" ON "files"("key");

-- CreateIndex
CREATE INDEX "files_clientId_idx" ON "files"("clientId");

-- AddForeignKey
ALTER TABLE "files" ADD CONSTRAINT "files_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
