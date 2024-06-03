/*
  Warnings:

  - Added the required column `updatedAt` to the `markers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `markers` ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;
