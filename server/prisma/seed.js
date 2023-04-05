import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import bcrypt from "bcryptjs";
// import medicine from "./medicine.js";

const medicine = [{
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
    medicine.map(async(item) => {
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

    const user = [{
            phone_number: "0812345678",
            id_card: "1234567890123",
            password: "password",
        },
        {
            phone_number: "0865432190",
            id_card: "4567890123456",
            password: "password",
        },
        {
            phone_number: "0898765432",
            id_card: "7890123456789",
            password: "password",
        },
        {
            phone_number: "0845678901",
            id_card: "2345678901234",
            password: "password",
        },
        {
            phone_number: "0812345678",
            id_card: "5678901234567",
            password: "password",
        },
        {
            phone_number: "0861234567",
            id_card: "3456789012345",
            password: "password",
        },
        {
            phone_number: "0834567890",
            id_card: "6789012345678",
            password: "password",
        },
        {
            phone_number: "0889012345",
            id_card: "0123456789012",
            password: "password",
        },
        {
            phone_number: "0823456789",
            id_card: "9012345678901",
            password: "password",
        },
        {
            phone_number: "0845678901",
            id_card: "2345678901234",
            password: "password",
        },
        {
            phone_number: "0812345678",
            id_card: "4567890123456",
            password: "password",
        },
    ];
    user.map(async(user) => {
        await prisma.user.upsert({
            where: {
                phone: user.phone_number,
            },
            update: {
                // bcrypt.hashSync("3114", 10),
                phone: user.phone_number,
                password: user.password,
                idCard: user.id_card,
                name: "pateint",
            },
            create: {
                phone: user.phone_number,
                password: user.password,
                idCard: user.id_card,
                name: "pateint",
            },
        });
    });

    const doctor = [{
            phone_number: "0845678901",
            id_card: "3456789012345",
            password: "password",
        },
        {
            phone_number: "0861234567",
            id_card: "6789012345678",
            password: "password",
        },
        {
            phone_number: "0834567890",
            id_card: "9012345678901",
            password: "password",
        },
        {
            phone_number: "0823456789",
            id_card: "0123456789012",
            password: "password",
        },
        {
            phone_number: "0889012345",
            id_card: "2345678901234",
            password: "password",
        },
        {
            phone_number: "0812345678",
            id_card: "4567890123456",
            password: "password",
        },
        {
            phone_number: "0845678901",
            id_card: "5678901234567",
            password: "password",
        },
        {
            phone_number: "0861234567",
            ç: "7890123456789",
            password: "password",
        },
        {
            phone_number: "0834567890",
            id_card: "2345678901234",
            password: "password",
        },
        {
            phone_number: "0823456789",
            id_card: "5678901234567",
            password: "password",
        },
    ];

    await prisma.user.upsert({
        where: {
            phone: "0892452669",
        },
        update: {
            phone: "0892452369",
            password: bcrypt.hashSync("password", 10),
            idCard: "1234567890124",
            name: "admin",
            role: "ADMIN"
        },
        create: {
            phone: "0892452369",
            password: bcrypt.hashSync("password", 10),
            idCard: "1234567890124",
            name: "admin",
            role: "ADMIN"
        },
    });
    doctor.map(async(doctor) => {
        await prisma.user.upsert({
            where: {
                phone: doctor.phone_number,
            },
            update: {
                phone: doctor.phone_number,
                password: bcrypt.hashSync(doctor.password, 10),
                idCard: doctor.id_card,
                name: "doctor",
                role: "DOCTOR",
            },
            create: {
                phone: doctor.phone_number,
                password: bcrypt.hashSync(doctor.password, 10),
                idCard: doctor.id_card,
                name: "doctor",
                role: "DOCTOR",
            },
        });

    })


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

    hospital.map(async(hospital) => {
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
}

main()
    .then(async() => {
        await prisma.$disconnect();
    })
    .catch(async(e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });