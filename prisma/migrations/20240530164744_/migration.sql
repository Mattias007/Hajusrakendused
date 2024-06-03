-- DropForeignKey
ALTER TABLE `blogcomments` DROP FOREIGN KEY `blogcomments_blogpost_id_fkey`;

-- AddForeignKey
ALTER TABLE `blogcomments` ADD CONSTRAINT `blogcomments_blogpost_id_fkey` FOREIGN KEY (`blogpost_id`) REFERENCES `blogposts`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
