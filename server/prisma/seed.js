import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import  bcrypt from "bcryptjs";

async function main() {
  for (let i = 0; i < 10; i++) {
    await prisma.medicine.upsert({
      where: {
        name: `medicine${i}`,
      },
      update: {
        name: `medicine${i}`,
        price: i * 100,
      },
      create: {
        name: `medicine${i}`,
        price: i * 100,
      },
    });
  }

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
