/*
  Warnings:

  - You are about to drop the column `accs` on the `Window` table. All the data in the column will be lost.
  - You are about to drop the column `blueprints_imgs` on the `Window` table. All the data in the column will be lost.
  - You are about to drop the column `desc` on the `Window` table. All the data in the column will be lost.
  - You are about to drop the column `imgs` on the `Window` table. All the data in the column will be lost.
  - You are about to drop the column `specs` on the `Window` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Window` table. All the data in the column will be lost.
  - Added the required column `blueprints` to the `Window` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mainImageId` to the `Window` table without a default value. This is not possible if the table is not empty.
  - Added the required column `material` to the `Window` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "WindowTranslation" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "lang" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "specs" TEXT NOT NULL,
    "accs" TEXT NOT NULL,
    "windowId" TEXT NOT NULL,
    CONSTRAINT "WindowTranslation_windowId_fkey" FOREIGN KEY ("windowId") REFERENCES "Window" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Image" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "url" TEXT NOT NULL,
    "windowId" TEXT NOT NULL,
    CONSTRAINT "Image_windowId_fkey" FOREIGN KEY ("windowId") REFERENCES "Window" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Window" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "material" TEXT NOT NULL,
    "mainImageId" TEXT NOT NULL,
    "blueprints" TEXT NOT NULL,
    CONSTRAINT "Window_mainImageId_fkey" FOREIGN KEY ("mainImageId") REFERENCES "Image" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Window" ("id") SELECT "id" FROM "Window";
DROP TABLE "Window";
ALTER TABLE "new_Window" RENAME TO "Window";
CREATE UNIQUE INDEX "Window_mainImageId_key" ON "Window"("mainImageId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "WindowTranslation_lang_id_key" ON "WindowTranslation"("lang", "id");

-- CreateIndex
CREATE UNIQUE INDEX "Image_url_key" ON "Image"("url");
