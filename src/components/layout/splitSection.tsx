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
        imagePosition === "right" ? "flex-row-reverse gap-4" : "lg:flex-row",
        "flex justify-center lg:w-[80%] w-full mx-auto my-8 flex-col items-center lg-gap-0 gap-4 ",
      )}
    >
      <div className={cn("flex justify-center items-center lg:w-[40%] w-full")}>
        <Image
          width={350}
          height={400}
          className={cn(
            imagePosition === "right" ? "" : "lg:rounded-l-3xl rounded-xl",
            "my-auto object-contain",
          )}
          alt="Peinture"
          src={image}
        />
      </div>
      <div
        className={cn(
          imagePosition === "right"
            ? " lg:rounded-3xl shadow-[-6px_6px_18px_rgba(0,0,0,0.20)]"
            : " lg:rounded-r-3xl shadow-[6px_6px_18px_rgba(0,0,0,0.20)]",
          "lg:w-[60%] w-full flex flex-col gap-2 items-center justify-center bg-accent p-5",
        )}
      >
        <Title title={title} />
        {children}
      </div>
    </section>
  );
};
