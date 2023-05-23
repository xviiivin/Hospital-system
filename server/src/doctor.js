import express from "express";
import { PrismaClient } from "@prisma/client";
import { Prisma } from "@prisma/client";
const prisma = new PrismaClient();
const router = express.Router();
import exeptionError from "./Error.js";
import bcrypt from "bcryptjs";
import auth from "./middleware/auth.js";

// get all doctors
router.get("/", async(req, res) => {
    try {
        const doctors = await prisma.user.findMany({
            where: {
                role: "DOCTOR",
            },
        });
        doctors.password = undefined;
        res.json(doctors);
    } catch (error) {
        exeptionError(error, res);
    }
});

// get doctor by id
router.get("/:id", async(req, res) => {
    try {
        console.log(req.params.id);
        const doctor = await prisma.user.findUnique({
            where: {
                id: req.params.id,
            },
            include: {
                userInfo: true,
            },
        });
        // doctor.password = undefined;
        // delete doctor.password;
        res.json(doctor);
    } catch (error) {
        console.log(error);
        exeptionError(error, res);

    }
});

//update doctor
router.patch("/:id", auth.adminAuthorize, async(req, res) => {
    try {
        if (req.body.password)
            req.body.password = await bcrypt.hash(req.body.password);
        const doctor = await prisma.user.update({
            where: {
                id: req.params.id,
            },
            data: req.body,
        });
        doctor.password = undefined;
        res.json(doctor);
    } catch (error) {
        exeptionError(error, res);
    }
});

//delete doctor
router.delete("/:id", auth.adminAuthorize, async(req, res) => {
    try {
        const doctor = await prisma.user.delete({
            where: {
                id: req.params.id,
            },
        });
        doctor.password = undefined;
        res.json(doctor);
    } catch (error) {
        exeptionError(error, res);
    }
});

export default router;