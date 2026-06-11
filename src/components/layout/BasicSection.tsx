"use client";

import { EditableText } from "../admin/EditableText";
import { Title } from "./Titles";

type BasicSectionProps = {
  title: string;
  children: React.ReactNode;
  isAdminLogged: boolean;
};

export const BasicSection = (props: BasicSectionProps) => {
  return (
    <section className="flex flex-col gap-4 items-center w-[90%] my-8 m-auto ">
      {props.isAdminLogged ? (
        <EditableText highlight text={props.title} />
      ) : (
        <Title title={props.title} />
      )}
      {props.children}
    </section>
  );
};
