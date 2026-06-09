"use client";
import { About as AboutType } from "@prisma/client";

import { EditableText } from "@/components/admin/EditableText";
import { Text } from "@/components/layout/Texts";
import { useSession } from "next-auth/react";
import { SplitSection } from "../../layout/splitSection";

type AboutProps = {
  aboutData: AboutType;
};

export const AboutSection = ({ aboutData }: AboutProps) => {
  const { data: session } = useSession();
  return (
    <SplitSection
      title={aboutData.title}
      imagePosition="right"
      image={aboutData.image}
    >
      <EditableText session={session ? true : false}>
        <Text text={aboutData.p1} />
      </EditableText>
      <EditableText session={session ? true : false}>
        <Text text={aboutData.p2} />
      </EditableText>
      <EditableText session={session ? true : false}>
        <Text text={aboutData.p3} />
      </EditableText>
    </SplitSection>
  );
};
