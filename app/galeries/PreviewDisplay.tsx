"use server";

import { Text } from "@/components/layout/Texts";
import { Painting } from "./Painting";
import { getPaintingsByCategory } from "./paintings.query";

type PreviewDisplayProps = {
  name: string;
};

export const PreviewDisplay = async (props: PreviewDisplayProps) => {
  const paintings = await getPaintingsByCategory(true, props.name);
  return (
    <div className="w-full flex flex-col gap-4">
      <Text className="text-2xl" text={props.name} />
      <div className="flex gap-4 h-[250px] w-[95%] m-auto items-center justify-center">
        {paintings.map((painting) => (
          <Painting key={painting.id} imageUrl={painting.imageUrl} />
        ))}
      </div>
    </div>
  );
};
