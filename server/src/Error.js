import { Prisma } from "@prisma/client";
// PrismaClientKnownRequestError = ประเภทของ error แล้วก้ไปดูว่ามันerror อะไร ขึ้นต้นด้วยตัว p แล้ว+เลข 4 หลัก
function exeptionError(err, res) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === "P2002") {
            return res.status(409).send("data already in use");
        }
    } else {
        return res.status(500).json(err);
    }
}

export default exeptionError;