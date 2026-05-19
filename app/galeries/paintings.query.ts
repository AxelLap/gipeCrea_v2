import { prisma } from "@/lib/prisma";

export async function getAllCategories() {
  const categories = prisma.category.findMany({
    orderBy: {
      position: "asc",
    },
  });
  return categories;
}

export async function getPaintingsByCategory(
  preview: boolean,
  category: string,
) {
  const paintings = await prisma.painting.findMany({
    where: {
      category: category,
      isInPreview: preview ? true : true || false,
    },
  });

  console.log(paintings);

  return paintings;
}
