import express from "express";
import { PrismaClient } from "@prisma/client";
import { Prisma } from "@prisma/client";
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
      if (bcrypt.compare(user.password, req.body.password)) {
        user.password = undefined;
        res.json(user);
      } else {
        res.status(401).send("Wrong password");
      }
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    exeptionError(error, res);
  }
});

router.post("/register", async (req, res) => {
  try {
    const user = await prisma.user.create({
      data: {
        name: req.body.name,
        phone: req.body.phone,
        password: await bcrypt.hash(req.body.password, 10),
        idCard: req.body.idCard,
      },
    });
    user.password = undefined;
    res.json(user);
  } catch (error) {
    exeptionError(error, res);
  }
});

export default router;
