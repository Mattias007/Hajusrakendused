/*
  Warnings:

  - Added the required column `countInStock` to the `storeitems` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `storeitems` ADD COLUMN `countInStock` INTEGER NOT NULL;
