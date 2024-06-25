-- CreateTable
CREATE TABLE `AskHtml` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `namaPenjawab` VARCHAR(191) NOT NULL,
    `namaPenanya` VARCHAR(191) NOT NULL,
    `waktu` VARCHAR(191) NOT NULL,
    `pesan` VARCHAR(191) NOT NULL,
    `pesanPenjawab` VARCHAR(191) NOT NULL,
    `pesanPenanya` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AskCss` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `namaPenjawab` VARCHAR(191) NOT NULL,
    `namaPenanya` VARCHAR(191) NOT NULL,
    `waktu` VARCHAR(191) NOT NULL,
    `pesan` VARCHAR(191) NOT NULL,
    `pesanPenjawab` VARCHAR(191) NOT NULL,
    `pesanPenanya` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AskJavascript` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `namaPenjawab` VARCHAR(191) NOT NULL,
    `namaPenanya` VARCHAR(191) NOT NULL,
    `waktu` VARCHAR(191) NOT NULL,
    `pesan` VARCHAR(191) NOT NULL,
    `pesanPenjawab` VARCHAR(191) NOT NULL,
    `pesanPenanya` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
