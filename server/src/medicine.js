import express from "express";
import { PrismaClient } from "@prisma/client";
import { Prisma } from "@prisma/client";
const prisma = new PrismaClient();
const router = express.Router();

function exeptionError(err, res) {
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    if (err.code === "P2002") {
      return res.status(409).send("data already in use");
    }
  } else {
    return res.status(500).send("Something broke!");
  }
}

//get all medicine
router.get("/", async (req, res) => {
  try {
    const medicine = await prisma.medicine.findMany();
    res.json(medicine);
  } catch (error) {
    exeptionError(error);
  }
});

// create medicine
router.post("/", async (req, res) => {
  try {
    const medicine = await prisma.medicine.create({
      data: {
        name: req.body.name,
        price: req.body.price,
      },
    });
    res.json(medicine);
  } catch (error) {
    exeptionError(error, res);
  }
});

// update medicine
router.patch("/:id", async (req, res) => {
  try {
    console.log(req.body);
    if (req.body) {
      return res.status(400).send("Bad Request");
    }
    const medicine = await prisma.medicine.update({
      where: {
        id: req.params.id,
      },
      data: req.body,
    });
    res.json(medicine);
  } catch (error) {
    exeptionError(error, res);
  }
});

// delete medicine
router.delete("/:id", async (req, res) => {
  try {
    const medicine = await prisma.medicine.delete({
      where: {
        id: req.params.id,
      },
    });
    res.json(medicine);
  } catch (error) {
    exeptionError(error, res);
  }
});

export default router;