/*
  Warnings:

  - You are about to drop the column `amount` on the `Treatment` table. All the data in the column will be lost.
  - You are about to drop the column `paymentId` on the `Treatment` table. All the data in the column will be lost.
  - You are about to drop the `medicine_payment` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[teatmentId]` on the table `Payment` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `doctorId` to the `Treatment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalPrice` to the `Treatment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Treatment" DROP CONSTRAINT "Treatment_paymentId_fkey";

-- DropForeignKey
ALTER TABLE "medicine_payment" DROP CONSTRAINT "medicine_payment_medicineId_fkey";

-- DropForeignKey
ALTER TABLE "medicine_payment" DROP CONSTRAINT "medicine_payment_treatmentId_fkey";

-- DropIndex
DROP INDEX "Treatment_paymentId_key";

-- AlterTable
ALTER TABLE "Payment" ADD COLUMN     "teatmentId" TEXT;

-- AlterTable
ALTER TABLE "Treatment" DROP COLUMN "amount",
DROP COLUMN "paymentId",
ADD COLUMN     "doctorId" TEXT NOT NULL,
ADD COLUMN     "totalPrice" DOUBLE PRECISION NOT NULL;

-- DropTable
DROP TABLE "medicine_payment";

-- CreateTable
CREATE TABLE "medicine_treatment" (
    "id" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "medicineId" TEXT,
    "treatmentId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "medicine_treatment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Payment_teatmentId_key" ON "Payment"("teatmentId");

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_teatmentId_fkey" FOREIGN KEY ("teatmentId") REFERENCES "Treatment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Treatment" ADD CONSTRAINT "Treatment_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medicine_treatment" ADD CONSTRAINT "medicine_treatment_medicineId_fkey" FOREIGN KEY ("medicineId") REFERENCES "Medicine"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medicine_treatment" ADD CONSTRAINT "medicine_treatment_treatmentId_fkey" FOREIGN KEY ("treatmentId") REFERENCES "Treatment"("id") ON DELETE SET NULL ON UPDATE CASCADE;
