/*
  Warnings:

  - You are about to drop the column `preparation` on the `pedidos` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "itens" ADD COLUMN     "preparation" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "pedidos" DROP COLUMN "preparation";
