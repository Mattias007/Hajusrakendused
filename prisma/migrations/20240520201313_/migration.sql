/*
  Warnings:

  - You are about to alter the column `latitude` on the `markers` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Decimal(65,30)`.
  - You are about to alter the column `longitude` on the `markers` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Decimal(65,30)`.

*/
-- AlterTable
ALTER TABLE `markers` MODIFY `latitude` DECIMAL(65, 30) NOT NULL,
    MODIFY `longitude` DECIMAL(65, 30) NOT NULL;
