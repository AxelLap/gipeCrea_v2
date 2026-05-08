import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const email = "admin@test.com";
  const plainPassword = "admin123";

  const existingAdmin = await prisma.admin.findFirst({
    where: {
      email,
    },
  });

  if (existingAdmin) {
    console.log("Admin déjà existant");
    return;
  }

  const hashedPassword = await bcrypt.hash(plainPassword, 10);

  await prisma.admin.create({
    data: {
      email,
      password: hashedPassword,
    },
  });

  console.log("Admin créé avec succès");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
