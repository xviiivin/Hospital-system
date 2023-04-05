import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import bcrypt from "bcryptjs";
// import medicine from "./medicine.js";

const medicine = [
  {
    name: "Ampelacine",
    price: 12.99,
  },
  {
    name: "Cardiomax",
    price: 9.49,
  },
  {
    name: "Dermacton",
    price: 7.99,
  },
  {
    name: "Enerzest",
    price: 15.99,
  },
  {
    name: "Flexalite",
    price: 11.49,
  },
  {
    name: "Gastroflux",
    price: 8.99,
  },
  {
    name: "Hepatovit",
    price: 14.49,
  },
  {
    name: "Immunovax",
    price: 10.99,
  },
  {
    name: "Neurolynx",
    price: 18.99,
  },
];

async function main() {
  medicine.map(async (item) => {
    await prisma.medicine.upsert({
      where: {
        name: item.name,
      },
      update: {
        name: item.name,
        price: item.price,
      },
      create: {
        name: item.name,
        price: item.price,
      },
    });
  });

  await prisma.user.upsert({
    where: {
      phone: "0892452669",
    },
    update: {
      phone: "0892452669",
      password: bcrypt.hashSync("3114", 10),
      idCard: "1234567890123",
      name: "pateint",
    },
    create: {
      phone: "0892452669",
      password: bcrypt.hashSync("3114", 10),
      idCard: "1234567890123",
      name: "pateint",
    },
  });

  await prisma.user.upsert({
    where: {
      phone: "0892452669",
    },
    update: {
      phone: "0892452369",
      password: bcrypt.hashSync("3114", 10),
      idCard: "1234567890124",
      name: "admin",
    },
    create: {
      phone: "0892452369",
      password: bcrypt.hashSync("3114", 10),
      idCard: "1234567890124",
      name: "admin",
    },
  });

  await prisma.user.upsert({
    where: {
      phone: "0892332669",
    },
    update: {
      phone: "0892332669",
      password: bcrypt.hashSync("3114", 10),
      idCard: "1234567890333",
      name: "doctor",
      role: "DOCTOR",
    },
    create: {
      phone: "0892332669",
      password: bcrypt.hashSync("3114", 10),
      idCard: "1234567890333",
      name: "doctor",
      role: "DOCTOR",
    },
  });

  await prisma.hospital.upsert({
    where: {
      name: "โรงพยาบาลเชียงใหม่",
    },
    update: {
      name: "โรงพยาบาลเชียงใหม่",
    },
    create: {
      name: "โรงพยาบาลเชียงใหม่",
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
