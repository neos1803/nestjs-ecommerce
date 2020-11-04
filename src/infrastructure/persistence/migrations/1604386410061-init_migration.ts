import {MigrationInterface, QueryRunner} from "typeorm";

export class initMigration1604386410061 implements MigrationInterface {
    name = 'initMigration1604386410061'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `admin` (`id` int NOT NULL AUTO_INCREMENT, `firstName` varchar(255) NOT NULL, `lastName` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `phoneNumber` varchar(255) NOT NULL, `username` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `type` varchar(255) NOT NULL DEFAULT 'admin', `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `firstName` varchar(255) NOT NULL, `lastName` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `phoneNumber` varchar(255) NOT NULL, `username` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `type` varchar(255) NOT NULL DEFAULT 'user', `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `address` (`id` int NOT NULL AUTO_INCREMENT, `addressName` varchar(255) NOT NULL, `city` varchar(255) NOT NULL, `zipcode` varchar(255) NOT NULL, `address` varchar(255) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `userId` int NULL, `adminId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `auth` (`id` int NOT NULL AUTO_INCREMENT, `username` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `variation` (`id` int NOT NULL AUTO_INCREMENT, `color` varchar(255) NOT NULL, `size` varchar(255) NOT NULL, `material` varchar(255) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `productId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `product` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `price` int NOT NULL, `weight` int NOT NULL, `description` varchar(255) NOT NULL, `tags` varchar(255) NOT NULL, `stock` int NOT NULL, `imageId` varchar(255) NOT NULL, `imageName` varchar(255) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `category` (`id` int NOT NULL AUTO_INCREMENT, `categoryName` varchar(255) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `productId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `discount` (`id` int NOT NULL AUTO_INCREMENT, `discountName` varchar(255) NOT NULL, `expired` datetime NOT NULL, `total` decimal NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `address` ADD CONSTRAINT `FK_d25f1ea79e282cc8a42bd616aa3` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE");
        await queryRunner.query("ALTER TABLE `address` ADD CONSTRAINT `FK_159b4e03052aea3e083f31a81cb` FOREIGN KEY (`adminId`) REFERENCES `admin`(`id`) ON DELETE CASCADE ON UPDATE CASCADE");
        await queryRunner.query("ALTER TABLE `variation` ADD CONSTRAINT `FK_cb31818a892ab13bb1076c6f3bc` FOREIGN KEY (`productId`) REFERENCES `product`(`id`) ON DELETE CASCADE ON UPDATE CASCADE");
        await queryRunner.query("ALTER TABLE `category` ADD CONSTRAINT `FK_5f4035564515762e47d19334f23` FOREIGN KEY (`productId`) REFERENCES `product`(`id`) ON DELETE CASCADE ON UPDATE CASCADE");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `category` DROP FOREIGN KEY `FK_5f4035564515762e47d19334f23`");
        await queryRunner.query("ALTER TABLE `variation` DROP FOREIGN KEY `FK_cb31818a892ab13bb1076c6f3bc`");
        await queryRunner.query("ALTER TABLE `address` DROP FOREIGN KEY `FK_159b4e03052aea3e083f31a81cb`");
        await queryRunner.query("ALTER TABLE `address` DROP FOREIGN KEY `FK_d25f1ea79e282cc8a42bd616aa3`");
        await queryRunner.query("DROP TABLE `discount`");
        await queryRunner.query("DROP TABLE `category`");
        await queryRunner.query("DROP TABLE `product`");
        await queryRunner.query("DROP TABLE `variation`");
        await queryRunner.query("DROP TABLE `auth`");
        await queryRunner.query("DROP TABLE `address`");
        await queryRunner.query("DROP TABLE `user`");
        await queryRunner.query("DROP TABLE `admin`");
    }

}
