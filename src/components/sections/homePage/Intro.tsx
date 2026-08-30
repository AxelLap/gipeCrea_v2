"use client";
import { EditableText } from "@/components/admin/EditableText";
import { SplitSection } from "@/components/layout/splitSection";
import { HighLightText, Text } from "@/components/layout/Texts";
import { Intro as IntroType } from "@prisma/client";
import { useSession } from "next-auth/react";
import { IntroForm } from "./IntroForm";

type IntroProps = {
  introData: IntroType;
};

export const IntroSection = ({ introData }: IntroProps) => {
  const session = useSession();

  const isAdminLogged = session?.status === "authenticated" ? true : false;

  return (
    <SplitSection
      title={introData.title}
      imagePosition="left"
      image={introData.url}
      isAdminLogged={isAdminLogged}
    >
      {isAdminLogged ? (
        <IntroForm defaultValues={introData}></IntroForm>
      ) : (
        <>
          <Text text={introData.p1} />
          <Text text={introData.p2} />
          <Text text={introData.p3} />
          {introData.span && (
            <HighLightText className="text-2xl" text={introData.span} />
          )}
        </>
      )}
    </SplitSection>
  );
};
