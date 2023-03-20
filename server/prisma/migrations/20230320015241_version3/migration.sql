-- DropForeignKey
ALTER TABLE "user_info" DROP CONSTRAINT "user_info_userId_fkey";

-- AddForeignKey
ALTER TABLE "user_info" ADD CONSTRAINT "user_info_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
