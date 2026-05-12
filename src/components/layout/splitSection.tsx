import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { Title } from "./Titles";

type SplitSectionProps = {
  title: string;
  image: string;
  imagePosition: "left" | "right";
  children: React.ReactNode;
};
export const SplitSection = ({
  title,
  imagePosition,
  image,
  children,
}: SplitSectionProps) => {
  return (
    <section
      className={cn(
        imagePosition === "right" ? "flex-row-reverse gap-4" : "flex-row",
        "flex justify-center w-[90%] mx-auto my-5",
      )}
    >
      <div className={cn("flex items-center w-[40%] ")}>
        <Image
          width={350}
          height={400}
          className={cn(
            imagePosition === "right" ? "" : "rounded-l-3xl",
            "my-auto",
            "object-contain",
            "w-full",
          )}
          alt="Peinture"
          src={image}
        />
      </div>
      <div
        className={cn(
          imagePosition === "right" ? "rounded-l-3xl" : "rounded-r-3xl",
          "w-[60%] flex flex-col gap-2 items-center justify-center bg-accent rounded-r-3xl p-5",
        )}
      >
        <Title title={title} />
        {children}
      </div>
    </section>
  );
};
