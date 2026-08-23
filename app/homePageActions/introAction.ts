"use server";

import { IntroSchema } from "@/lib/models/homePage.model";
import { prisma } from "@/lib/prisma";
import { authAction } from "@/lib/safeAction";
import { z } from "zod";

const introActionUpdateProps = z.object({
  data: IntroSchema,
});

export const introActionUpdate = authAction
  .inputSchema(introActionUpdateProps)
  .action(async ({ parsedInput }) => {
    const updatedIntro = await prisma.intro.update({
      where: {
        id: parsedInput.data.id,
      },
      data: parsedInput.data,
    });

    return {
      message: "Introduction modifiée avec succès",
      lesson: updatedIntro,
    };
  });
