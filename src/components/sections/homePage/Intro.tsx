"use client";
import { EditableText } from "@/components/admin/EditableText";
import { SplitSection } from "@/components/layout/splitSection";
import { HighLightText, Text } from "@/components/layout/Texts";
import { Intro as IntroType } from "@prisma/client";
import { useSession } from "next-auth/react";

type IntroProps = {
  introData: IntroType;
};

export const IntroSection = ({ introData }: IntroProps) => {
  const { data: session } = useSession();

  return (
    <SplitSection
      title={introData.title}
      imagePosition="left"
      image={introData.url}
    >
      <EditableText session={session ? true : false}>
        <Text text={introData.p1} />
      </EditableText>
      <EditableText session={session ? true : false}>
        <Text text={introData.p2} />
      </EditableText>
      <EditableText session={session ? true : false}>
        <Text text={introData.p3} />
      </EditableText>

      {introData.span && (
        <EditableText session={session ? true : false}>
          <HighLightText className="text-2xl" text={introData.span} />
        </EditableText>
      )}
    </SplitSection>
  );
};
