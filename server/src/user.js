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

//get all user by role
router.get("/role/:role", async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      where: {
        role: req.params.role.toUpperCase(),
      },
    });
    res.json(users);
  } catch (error) {
    exeptionError(error, res);
  }
});

//update user
router.patch("/role/:id", async (req, res) => {
  try {
    const user = await prisma.user.update({
      where: {
        idCard: req.params.id,
      },
      data: {
        role: req.body.role,
      },
    });
    res.json(user);
  } catch (error) {
    exeptionError(error, res);
  }
});
export default router;
