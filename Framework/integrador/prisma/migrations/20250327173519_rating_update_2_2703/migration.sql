-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_rating" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "value" INTEGER NOT NULL,
    "comment" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "userId" INTEGER NOT NULL,
    "movieId" INTEGER NOT NULL,
    CONSTRAINT "rating_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "rating_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "movie" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_rating" ("comment", "created_at", "id", "movieId", "updated_at", "userId", "value") SELECT "comment", "created_at", "id", "movieId", "updated_at", "userId", "value" FROM "rating";
DROP TABLE "rating";
ALTER TABLE "new_rating" RENAME TO "rating";
CREATE UNIQUE INDEX "rating_id_key" ON "rating"("id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
