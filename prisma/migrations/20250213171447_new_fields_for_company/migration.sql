/*
  Warnings:

  - You are about to drop the column `name` on the `company` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `company` table. All the data in the column will be lost.
  - Added the required column `address` to the `company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cnpj` to the `company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `companyFantasyName` to the `company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `companyName` to the `company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `company` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "company" DROP COLUMN "name",
DROP COLUMN "password",
ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "cnpj" TEXT NOT NULL,
ADD COLUMN     "companyFantasyName" TEXT NOT NULL,
ADD COLUMN     "companyName" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL,
ADD COLUMN     "state" TEXT NOT NULL;
