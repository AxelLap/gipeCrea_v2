"use client";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { EditableText } from "../admin/EditableText";
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
  const session = useSession();

  return (
    <section
      className={cn(
        imagePosition === "right" ? "lg:flex-row-reverse" : "lg:flex-row",
        "flex justify-center w-[90%] mx-auto my-8 flex-col items-center gap-4 h-fit",
      )}
    >
      <Image
        width={400}
        height={600}
        alt="Peinture"
        src={image}
        className="rounded-2xl"
      />

      <div
        className={cn(
          "lg:w-[60%] w-full rounded-3xl h-[500px] flex flex-col gap-2 items-center justify-center bg-accent p-5",
        )}
      >
        <EditableText
          session={session.status === "authenticated" ? true : false}
        >
          <Title title={title} />
        </EditableText>

        {children}
      </div>
    </section>
  );
};
