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
        className="lg:w-[40%] w-[90%] m-auto h-auto"
        src={props.favoriteData.image}
        alt="peinture"
        height={100}
        width={100}
      />
      <Text className="md:text-2x text-xll" text={props.favoriteData.text} />
    </BasicSection>
  );
};
