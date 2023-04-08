import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import bcrypt from "bcryptjs";
import { faker } from "@faker-js/faker";
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

const hospital = [
  { name: "Bangkok Hospital" },
  { name: "Siriraj Hospital" },
  { name: "Chulalongkorn Hospital" },
  { name: "Bumrungrad International Hospital" },
  { name: "Ramathibodi Hospital" },
  { name: "Vibhavadi Hospital" },
  { name: "Phyathai 2 Hospital" },
  { name: "Samitivej Hospital" },
  { name: "Bangkok Christian Hospital" },
  { name: "Rajavithi Hospital" },
];

const doctor = ["", "", "", "", "", "", "", "", "", "", "", "", "", ""];
const user = ["", "", "", "", "", "", "", "", "", "", "", "", "", ""];

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
      idCard: "1234567890124",
    },
    update: {
      phone: "0892452369",
      password: bcrypt.hashSync("password", 10),
      idCard: "1234567890124",
      name: "admin",
      role: "ADMIN",
    },
    create: {
      phone: "0892452369",
      password: bcrypt.hashSync("password", 10),
      idCard: "1234567890124",
      name: "admin",
      role: "ADMIN",
    },
  });

  doctor.map(async (doctor) => {
    const idCard = faker.datatype.number(10000000000000).toString();
    const phone = faker.phone.number("501######");
    const userData =await prisma.user.upsert({
      where: {
        idCard: idCard,
      },
      update: {
        phone: phone,
        password: bcrypt.hashSync("password", 10),
        idCard: idCard,
        name: "doctor",
        role: "DOCTOR",
      },
      create: {
        phone: phone,
        password: bcrypt.hashSync("password", 10),
        idCard: idCard,
        name: "doctor",
        role: "DOCTOR",
      },
    });
    await prisma.userInfo.upsert({
      where: {
        userId: userData.id,
      },
      update: {
        userId: userData.id,
      },
      create: {
        userId: userData.id,
      },
    });
  });

  hospital.map(async (hospital) => {
    await prisma.hospital.upsert({
      where: {
        name: hospital.name,
      },
      update: {
        name: hospital.name,
      },
      create: {
        name: hospital.name,
      },
    });
  });

  user.map(async (user) => {
    const idCard = faker.datatype.number(10000000000000).toString();
    const phone = faker.phone.number("501######");
    const userData = await prisma.user.upsert({
      where: {
        idCard: idCard,
      },
      update: {
        phone: phone,
        idCard: idCard,
        name: "pateint",
        password: bcrypt.hashSync("password", 10),
      },
      create: {
        phone: phone,
        idCard: idCard,
        name: "pateint",
        password: bcrypt.hashSync("password", 10),
      },
    });
    await prisma.userInfo.upsert({
      where: {
        userId: userData.id,
      },
      update: {
        userId: userData.id,
      },
      create: {
        userId: userData.id,
      },
    });
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
