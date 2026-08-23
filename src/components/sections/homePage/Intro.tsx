"use client";
import { CreaForm, useZodForm } from "@/components/admin/CreaForm";
import { EditableText } from "@/components/admin/EditableText";
import { SplitSection } from "@/components/layout/splitSection";
import { HighLightText, Text } from "@/components/layout/Texts";
import { IntroSchema, IntroSchemaPut } from "@/lib/models/homePage.model";
import { Intro as IntroType } from "@prisma/client";
import { useSession } from "next-auth/react";
import { introActionUpdate } from "../../../../app/homePageActions/introAction";

type IntroProps = {
  introData: IntroType;
};

export const IntroSection = ({ introData }: IntroProps) => {
  const session = useSession();

  const isAdminLogged = session?.status === "authenticated" ? true : false;
  const form = useZodForm({
    schema: IntroSchema,
    defaultValues: introData,
  });
  return (
    <SplitSection
      title={introData.title}
      imagePosition="left"
      image={introData.url}
      isAdminLogged={isAdminLogged}
    >
      {isAdminLogged ? (
        <CreaForm<IntroSchemaPut> form={form}>
          <EditableText text={introData.p1} />
          <EditableText text={introData.p2} />
          <EditableText text={introData.p3} />
          {introData.span && (
            <EditableText highlight={true} text={introData.span} />
          )}
        </CreaForm>
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
