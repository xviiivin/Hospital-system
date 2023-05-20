import express from "express";
import { PrismaClient } from "@prisma/client";
import { Prisma } from "@prisma/client";
import jwt from "jsonwebtoken";
import joi from "joi";
const prisma = new PrismaClient();
const router = express.Router();
import exeptionError from "./Error.js";
import bcrypt from "bcryptjs";

const schema = joi.object({
  name: joi.string().required(),
  phone: joi
    .string()
    .regex(/^[0-9]{10}$/)
    .messages({ "string.pattern.base": `Phone number must have 10 digits.` })
    .required(),
});

router.post("/login", async (req, res, next) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        idCard: req.body.idCard,
      },
    });
    console.log(user);
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
    console.log(error);
    exeptionError(error, res);
  }
});

router.post("/register", async (req, res, next) => {
  try {
    const result = schema.validate(req.body);
   
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
      res.status(500).json({ status: "errorid", message: "Account error" });
    } else if (checkphone) {
      res.status(500).json({ status: "errorphone", message: "Phone rror" });
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
