"use client";

import { EditableText } from "@/components/admin/EditableText";
import { Text } from "@/components/layout/Texts";
import { About as AboutType } from "@prisma/client";
import { useSession } from "next-auth/react";
import { SplitSection } from "../../layout/splitSection";

type AboutProps = {
  aboutData: AboutType;
};

export const AboutSection = ({ aboutData }: AboutProps) => {
  const session = useSession();

  const isAdminLogged = session?.status === "authenticated" ? true : false;

  return (
    <SplitSection
      title={aboutData.title}
      imagePosition="right"
      image={aboutData.image}
      isAdminLogged={isAdminLogged}
    >
      {isAdminLogged ? (
        <>
          <EditableText text={aboutData.p1} />
          <EditableText text={aboutData.p2} />
          <EditableText text={aboutData.p3} />
        </>
      ) : (
        <>
          <Text text={aboutData.p1} />
          <Text text={aboutData.p2} />
          <Text text={aboutData.p3} />
        </>
      )}
    </SplitSection>
  );
};
