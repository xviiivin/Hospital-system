import express from "express";
import { PrismaClient } from "@prisma/client";
import { Prisma } from "@prisma/client";
const prisma = new PrismaClient();
const router = express.Router();
import exeptionError from "./Error.js";
import bcrypt from "bcryptjs";

router.get("/", async (req, res) => {
  try {
    const hospital = await prisma.hospital.findMany();
    res.json(hospital);
  } catch (error) {
    exeptionError(error, res);
  }
});

//get docter in hospital
router.get("/:id/doctors", async (req, res) => {
  try {
    const doctors = await prisma.hospital.findMany({
      where: {
        id: req.params.id,
      },
      select: {
        doctor: true,
      },
    });
    const doctor = doctors[0].doctor;
    res.json(doctor);
  } catch (error) {
    exeptionError(error, res);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const hospital = await prisma.hospital.findUnique({
      where: {
        id: req.params.id,
      },
    });
    res.json(hospital);
  } catch (error) {
    exeptionError(error, res);
  }
});

export default router;
