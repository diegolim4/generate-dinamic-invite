-- CreateTable
CREATE TABLE "Invited" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "paid" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Invited_id_key" ON "Invited"("id");
