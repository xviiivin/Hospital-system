import express from "express";
import { PrismaClient } from "@prisma/client";
import { Prisma } from "@prisma/client";
const prisma = new PrismaClient();
const router = express.Router();
import exeptionError from "./Error.js";
import auth from "./middleware/auth.js";

router.post("/", auth.doctorAuthorize, async (req, res) => {
  try {
    const { description, doctorId, userId, totalPrice } = req.body;
    const treatment = await prisma.treatment.create({
      data: {
        description: description,
        doctorId: doctorId,
        userId: userId,
        totalPrice: totalPrice,
      },
    });
    res.json(treatment);
  } catch (error) {
    console.log(error);
    exeptionError(error, res);
  }
});

router.post("/medicine", auth.doctorAuthorize, async (req, res) => {
  try {
    const { amount, medicineId, treatmentId } = req.body;
    const medicine = await prisma.medicineTreatment.create({
      data: {
        amount: amount,
        medicineId: medicineId,
        treatmentId: treatmentId,
      },
    });
    res.json(medicine);
  } catch (error) {
    console.log(error);
    exeptionError(error, res);
  }
});

export default router;
