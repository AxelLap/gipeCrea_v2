"use client";
import { useSession } from "next-auth/react";
import { EditableText } from "../admin/EditableText";
import { Title } from "./Titles";

type BasicSectionProps = {
  title: string;
  children: React.ReactNode;
};

export const BasicSection = (props: BasicSectionProps) => {
  const { data: session } = useSession();
  return (
    <section className="flex flex-col gap-4 items-center w-[90%] my-8 m-auto ">
      <EditableText session={session ? true : false}>
        <Title title={props.title} />
      </EditableText>
      {props.children}
    </section>
  );
};
