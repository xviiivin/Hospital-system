import express from "express";
import { PrismaClient } from "@prisma/client";
import { Prisma } from "@prisma/client";
const prisma = new PrismaClient();
const router = express.Router();
import exeptionError from "./Error.js";
import auth from "./middleware/auth.js";

// get detail treatments by treatment id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const treatment = await prisma.treatment.findUnique({
      where: {
        id: id,
      },
      include: {
        user: {
          select: {
            name: true,
          },
        },
        doctor: {
          select: {
            name: true,
          },
        },
        medicine: {
          select: {
            amount: true,
            medicine: {
              select: {
                name: true,
                price: true,
              },
            },
          },
        },
      },
    });
    const result = [];

    const medicine = treatment.medicine.map((medicine) => {
      return {
        name: medicine.medicine.name,
        price: medicine.medicine.price,
        amount: medicine.amount,
      };
    });

    result.push({
      id: treatment.id,
      description: treatment.description,
      doctor: treatment.doctor.name,
      user: treatment.user.name,
      totalPrice: treatment.totalPrice,
      medicine: medicine,
      user: {
        name: treatment.user.name,
      },
      doctor: {
        name: treatment.doctor.name,
      },
      createdAt: treatment.createdAt,
    });

    res.json(result);
  } catch (error) {
    console.log(error);
    exeptionError(error, res);
  }
});

//get treatment by hospital id
router.get("/all/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const treatment = await prisma.treatment.findMany({
      where: {
        doctor: {
          hospitalId: id,
        },
      },
      include: {
        user: {
          select: {
            name: true,
          },
        },
        doctor: {
          select: {
            name: true,
          },
        },
      },
    });
    const result = [];
    treatment.map((treatment) => {
      result.push({
        id: treatment.id,
        description: treatment.description,
        doctor: treatment.doctor.name,
        user: treatment.user.name,
        totalPrice: treatment.totalPrice,
        createdAt: treatment.createdAt,
      });
    });
    res.json(result);
  } catch (error) {
    console.log(error);
    exeptionError(error, res);
  }
});

//get hospital where doctor work and user have treatment
router.get("/hospital/:id", async (req, res) => {
  try {
    const hospital = await prisma.treatment.findMany({
      where: {
        userId: req.params.id,
      },
      select: {
        doctor: {
          include: {
            Hospital: true,
          },
        },
      },
    });
    const result = [];
    hospital.map((hospital) => {
      result.push({
        id: hospital.doctor.Hospital.id,
        name: hospital.doctor.Hospital.name,
        hospitalId: hospital.doctor.Hospital.id,
      });
    });
    res.json(result);
  } catch (error) {
    console.log(error);
    exeptionError(error, res);
  }
});

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
