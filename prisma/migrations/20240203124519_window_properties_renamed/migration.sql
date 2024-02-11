/*
  Warnings:

  - You are about to drop the column `description` on the `Window` table. All the data in the column will be lost.
  - Added the required column `desc` to the `Window` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Window" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "imgs" TEXT NOT NULL,
    "specs" TEXT NOT NULL,
    "accs" TEXT NOT NULL,
    "blueprints_imgs" TEXT NOT NULL
);
INSERT INTO "new_Window" ("accs", "blueprints_imgs", "id", "imgs", "specs", "title") SELECT "accs", "blueprints_imgs", "id", "imgs", "specs", "title" FROM "Window";
DROP TABLE "Window";
ALTER TABLE "new_Window" RENAME TO "Window";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
