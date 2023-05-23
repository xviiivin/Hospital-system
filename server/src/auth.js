import express from "express";
import { PrismaClient } from "@prisma/client";
import { Prisma } from "@prisma/client";
import jwt from "jsonwebtoken";
import { object, string, number, date } from "yup";
const prisma = new PrismaClient();
const router = express.Router();
import exeptionError from "./Error.js";
import bcrypt from "bcryptjs";


const Register = object({
    name: string().required(),
    phone: string().required(),
    password: string().required(),
    idCard: string().required(),
});

const Login = object({
    idCard: string().required(),
    password: string().required(),
});

router.post("/login", async(req, res, next) => {
    try {
        // validate ข้อมูล Login ตาม line19
        await Login.validate(req.body);
        const user = await prisma.user.findUnique({
            where: {
                idCard: req.body.idCard,
            },
        });

        if (!user) {
            res.status(404).json({ message: "User not found" });
        }

        if (!await bcrypt.compare(req.body.password, user.password)) {
            res.status(401).json({ message: "Wrong password" });
        }

        user.password = undefined;

        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN);

        res.json({ user, accessToken });
    } catch (error) {
        exeptionError(error.message, res);
    }
});

// prisma มันทำ transaction โดยไม่ต้องมีการ rollback เลยมันทำให้เอง
router.post("/register", async(req, res, next) => {
    try {
        // validate ข้อมูล Register ตาม line12
        await Register.validate(req.body);
        const checkidcard = await prisma.user.findUnique({
            where: {
                idCard: req.body.idCard,
            },
        });
        // const checkName = await prisma.user.findUnique({
        //     where: {
        //         idCard: req.body.idCard,
        //         name: req.body.name
        //     }
        // });
        const checkphone = await prisma.user.findUnique({
            where: {
                phone: req.body.phone,
            },
        });
        if (checkidcard) {
            res.status(500).json({ status: "errorid", message: "ID card is already" });
        } else if (checkphone) {
            res.status(500).json({ status: "errorphone", message: "Phone is already" });
        }
        // } else if (checkName) {
        //     res.status(500).json({ status: "errorname", message: "Name and id card is already taken" })
        // }
        const user = await prisma.$transaction([
            prisma.user.create({
                data: {
                    name: req.body.name,
                    phone: req.body.phone,
                    password: await bcrypt.hash(req.body.password, 10),
                    idCard: req.body.idCard,
                    userInfo: { create: {} },
                },
            }),
        ]);
        user.password = undefined;
        res.json(user);
    } catch (error) {
        exeptionError(error.message, res);
    } finally {
        await prisma.$disconnect();
    }
});
export default router;