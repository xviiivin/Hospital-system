import * as jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function (req, res, next) {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token) {
      //verify token
      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN);

      //console.log logger
      console.log("====================================");
      console.log("User ID: ", decoded.id);
      console.log("URL: ", req.originalUrl);
      console.log("Method: ", req.method);
      console.log("====================================");

      // const loging = await prisma.loging.create({
      //   data: {
      //     userId: decoded.id,
      //     url: req.originalUrl,
      //     method: req.method,
      //   },
      // });
      
    } else {
      console.log("====================================");
      console.log("URL: ", req.originalUrl);
      console.log("Method: ", req.method);
      console.log("====================================");
    }

    next();
  } catch (error) {
    console.log(error);
  }
}
