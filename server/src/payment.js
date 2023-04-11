import express from "express";
import { PrismaClient } from "@prisma/client";
import { Prisma } from "@prisma/client";
const prisma = new PrismaClient();
const router = express.Router();
import exeptionError from "./Error.js";

// get detail payments by paymnet id
router.get("/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const payment = await prisma.payment.findUnique({
            where: {
                id: id,
            },
            treatment: true,
            User: {
                select: {
                    name: true,
                    phone: true,
                },
            },
        });
        res.json(payment);
    } catch (error) {
        console.log(error);
        exeptionError(error, res);
    }
});

// payment of each user
router.get("/user/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const paymentByUser = await prisma.payment.findMany({
            where: {
                userId: id,
            },
            include: {
                treatment: true,
                User: {
                    select: {
                        name: true,
                        phone: true,
                    },
                },
            },
        });
        res.json(paymentByUser);
    } catch (error) {
        console.log(error);
        exeptionError(error, res);
    }
});

router.patch("/status/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const payment = await prisma.payment.update({
            where: {
                id: id,
            },
            data: {
                status: status,
            },
        });
        res.json(payment);
    } catch (error) {
        console.log(error);
        exeptionError(error, res);
    }
});

router.post("/", async(req, res) => {
    try {
        const { treatmentId, userId } = req.body;
        await prisma.payment.create({
            data: {
                treatmentId: treatmentId,
                userId: userId,
            },
        });
    } catch (error) {
        console.log(error);
        exeptionError(error, res);
    }
});

export default router;