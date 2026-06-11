"use client";

import { BasicSection } from "@/components/layout/BasicSection";
import { Text } from "@/components/layout/Texts";
import { Favorite } from "@prisma/client";
import { useSession } from "next-auth/react";
import Image from "next/image";

type FavoriteSectionProps = {
  favoriteData: Favorite;
};

export const FavoriteSection = ({ favoriteData }: FavoriteSectionProps) => {
  const session = useSession();

  const isAdminLogged = session?.status === "authenticated" ? true : false;

  return (
    <BasicSection title="Le chouchou du moment" isAdminLogged={isAdminLogged}>
      <Image
        className="lg:w-[40%] w-[90%] m-auto h-auto"
        src={favoriteData.image}
        alt="peinture"
        height={100}
        width={100}
      />

      <Text className="md:text-2x text-xll" text={favoriteData.text} />
    </BasicSection>
  );
};
