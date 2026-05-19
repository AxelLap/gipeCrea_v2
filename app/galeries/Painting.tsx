import Image from "next/image";

type PaintingProps = {
  imageUrl: string;
};

export const Painting = (props: PaintingProps) => {
  return (
    <Image
      className="h-full object-fill"
      width={250}
      height={250}
      alt="peinture"
      src={props.imageUrl}
    />
  );
};
