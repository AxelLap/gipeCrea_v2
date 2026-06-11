"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { EditableText } from "../admin/EditableText";
import { Title } from "./Titles";

type SplitSectionProps = {
  title: string;
  image: string;
  imagePosition: "left" | "right";
  children: React.ReactNode;
  isAdminLogged: boolean;
};

export const SplitSection = ({
  title,
  imagePosition,
  image,
  children,
  isAdminLogged,
}: SplitSectionProps) => {
  return (
    <section
      className={cn(
        imagePosition === "right" ? "sm:flex-row-reverse" : "sm:flex-row",
        "flex justify-center xl:w-[90%] w-[95%] mx-auto my-8 flex-col items-center gap-4 h-fit overflow-hidden ",
      )}
    >
      <div className="relative xl:h-[500px] h-[400px] xl:w-[400px] w-[350px] shadow-black shadow-xl">
        <Image fill src={image} alt="Peinture" className="object-cover" />
      </div>

      <div
        className={cn(
          "lg:w-[60%] sm:w-[50%] xl:h-[500px] h-[400px] flex flex-col gap-2 items-center justify-between p-5 overflow-scroll",
        )}
      >
        {isAdminLogged ? (
          <EditableText highlight text={title} />
        ) : (
          <Title title={title} />
        )}

        {children}
      </div>
    </section>
  );
};
