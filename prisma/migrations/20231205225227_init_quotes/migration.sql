-- CreateTable
CREATE TABLE "Quotes" (
    "id" SERIAL NOT NULL,
    "film" TEXT NOT NULL,
    "author" TEXT NOT NULL,

    CONSTRAINT "Quotes_pkey" PRIMARY KEY ("id")
);
