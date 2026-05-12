import { BasicSection } from "@/components/layout/BasicSection";
import { Text } from "@/components/layout/Texts";
import { Favorite } from "@prisma/client";
import Image from "next/image";

type FavoriteSectionProps = {
  favoriteData: Favorite;
};

export const FavoriteSection = (props: FavoriteSectionProps) => {
  return (
    <BasicSection title="Le chouchou du moment">
      <Image
        className="w-[40%] h-auto"
        src={props.favoriteData.image}
        alt="peinture"
        height={100}
        width={100}
      />
      <Text className="text-2xl" text={props.favoriteData.text} />
    </BasicSection>
  );
};
