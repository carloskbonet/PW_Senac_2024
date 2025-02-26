-- CreateTable
CREATE TABLE "movie" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "studio" TEXT NOT NULL,
    "releaseDate" TEXT NOT NULL,
    "streaming" TEXT NOT NULL,
    "ageRating" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "rating" REAL NOT NULL DEFAULT 0,
    "imgURL" TEXT,
    "videoURL" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "movie_id_key" ON "movie"("id");

-- CreateIndex
CREATE UNIQUE INDEX "movie_name_key" ON "movie"("name");
