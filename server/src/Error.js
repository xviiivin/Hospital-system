import { Prisma } from "@prisma/client";

function exeptionError(err, res) {
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    if (err.code === "P2002") {
      return res.status(409).send("data already in use");
    }
  } else {
    console.log(err);
    return res.status(500).json(err);
  }
}

export default exeptionError;
