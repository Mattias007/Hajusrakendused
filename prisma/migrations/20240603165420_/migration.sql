/*
  Warnings:

  - You are about to drop the column `price` on the `my_favorite_subject` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `my_favorite_subject` DROP COLUMN `price`,
    ADD COLUMN `ip` VARCHAR(191) NULL,
    ADD COLUMN `ipv6` VARCHAR(191) NULL;
