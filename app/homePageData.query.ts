"use server";

import { prisma } from "@/lib/prisma";

export default async function getHomPageData() {
  const aboutData = await prisma.about.findFirst();
  const introData = await prisma.intro.findFirst();
  const favoriteData = await prisma.favorite.findFirst();
  const contactData = await prisma.contact.findFirst();

  const data = {
    about: aboutData,
    intro: introData,
    favorite: favoriteData,
    contact: contactData,
  };

  return data;
}
