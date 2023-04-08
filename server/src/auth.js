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
        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN);
        res.json({ user, accessToken });
      } else {
        res.status(401).json({ message: "Wrong password" });
      }
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.log(erro)
    exeptionError(error, res);
  }
});

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
