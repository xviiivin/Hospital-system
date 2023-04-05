import express from "express";
import { PrismaClient } from "@prisma/client";
import { Prisma } from "@prisma/client";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
const router = express.Router();
import exeptionError from "./Error.js";
import bcrypt from "bcryptjs";

router.post("/login", async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        idCard: req.body.idCard,
      },
    });
    if (user) {
      if (await bcrypt.compare(req.body.password, user.password)) {
        user.password = undefined;
        // เพิ่ม
        // const accessToken = jwt.sign({ sub: user.id }, "mySecretKey");
        res.json(user);
      } else {
        res.status(401).json({ message: "Wrong password" });
      }
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    exeptionError(error, res);
  }
});

// เพิ่ม
const verify = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, "mySecretKey", (err, user) => {
      if (err) {
        res.status(403).json("Token is not valid!");
      }
      req.user = user;
      next();
    });
  } else {
    res.status(404).json("You are not authenticated!");
  }
  console.log(verify);
};

// จบ
router.post("/register", async (req, res) => {
  try {
    const checkidcard = await prisma.user.findFirst({
      where: {
        OR: [{ idCard: req.body.idCard }],
      },
    });

    const checkphone = await prisma.user.findFirst({
      where: {
        OR: [{ phone: req.body.phone }],
      },
    });

    if (checkidcard) {
      res.status(500).json({ status: "errorid", message: "accounterror" });
    } else if (checkphone) {
      res.status(500).json({ status: "errorphone", message: "phoneerror" });
    } else {
      const user = await prisma.user.create({
        data: {
          name: req.body.name,
          phone: req.body.phone,
          password: await bcrypt.hash(req.body.password, 10),
          idCard: req.body.idCard,
        },
      });
      await prisma.userInfo.create({
        data: {
          userId: user.id,
        },
      });
      user.password = undefined;
      res.json(user);
    }
  } catch (error) {
    exeptionError(error, res);
  }
});
export default router;
