import express from "express";
import { PrismaClient } from "@prisma/client";
import { Prisma } from "@prisma/client";
const prisma = new PrismaClient();
const router = express.Router();
import exeptionError from "./Error.js";

const findUserById = async (id) => {
  const user = await prisma.user.findUnique({
    where: {
      idCard: id,
    },
    include: {
      userInfo: true,
    },
  });
  return user;
};

// get all users
router.get("/", async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    exeptionError(error, res);
  }
});

// get all users by id card
router.get("/:id", async (req, res) => {
  try {
    const user = await findUserById(req.params.id);
    res.json(user);
  } catch (error) {
    exeptionError(error, res);
  }
});

//update user
router.patch("/:id", async (req, res) => {
  try {
    const findUser = await findUserById(req.params.id);
    if (findUser == null) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    const user = await prisma.user.update({
      where: {
        idCard: req.params.id,
      },
      data: req.body,
    });
    res.json(user);
  } catch (error) {
    console.log(error)
    exeptionError(error, res);
  }
});

//update userInfo
router.patch("/:id/info", async (req, res) => {
  try {
    const findUser = await findUserById(req.params.id);
    if (findUser == null) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    const user = await prisma.userInfo.update({
      where: {
        id: findUser.userInfo.id
      },

      data: req.body,
    });

    res.json(user);
  } catch (error) {
    console.log(error)
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
    const findUser = await findUserById(req.params.id);
    if (findUser == null) {
      return res.status(404).json({
        message: "User not found",
      });
    }
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
