import express from "express";
import { PrismaClient } from "@prisma/client";
import { Prisma } from "@prisma/client";
const prisma = new PrismaClient();
const router = express.Router();
import exeptionError from "./Error.js";

// get all users
router.get("/", async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    exeptionError(error, res);
  }
});

// get all users by id
router.get("/:id", async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        idCard: req.params.id,
      },
    });
    res.json(user);
  } catch (error) {
    exeptionError(error, res);
  }
});

// router.get("/", async (req, res) => {
//   try {
//     const user = await prisma.user.findUnique
//     console;
//   } catch (error) {
//     console.log(error);
//   }
// });

export default router;
