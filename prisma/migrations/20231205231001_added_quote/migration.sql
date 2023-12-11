/*
  Warnings:

  - Added the required column `quote` to the `Quotes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Quotes" ADD COLUMN     "quote" TEXT NOT NULL;
