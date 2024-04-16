/*
  Warnings:

  - You are about to alter the column `image` on the `my_favorite_subject` table. The data in that column could be lost. The data in that column will be cast from `VarChar(2000)` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `my_favorite_subject` MODIFY `image` VARCHAR(191) NULL;
