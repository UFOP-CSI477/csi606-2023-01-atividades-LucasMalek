/*
  Warnings:

  - You are about to alter the column `numero` on the `enderecos` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_enderecos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "rua" TEXT NOT NULL,
    "numero" INTEGER NOT NULL,
    "complemento" TEXT,
    "bairro" TEXT NOT NULL,
    "telefone" TEXT,
    "cidade_id" INTEGER,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "enderecos_cidade_id_fkey" FOREIGN KEY ("cidade_id") REFERENCES "cidades" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_enderecos" ("bairro", "cidade_id", "complemento", "created_at", "id", "numero", "rua", "telefone", "updated_at") SELECT "bairro", "cidade_id", "complemento", "created_at", "id", "numero", "rua", "telefone", "updated_at" FROM "enderecos";
DROP TABLE "enderecos";
ALTER TABLE "new_enderecos" RENAME TO "enderecos";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
