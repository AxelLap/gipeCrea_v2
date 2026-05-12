import { SplitSection } from "@/components/layout/splitSection";
import { HighLightText, Text } from "@/components/layout/Texts";
import { Intro as IntroType } from "@prisma/client";

type IntroProps = {
  introData: IntroType;
};

export const IntroSection = ({ introData }: IntroProps) => {
  return (
    <SplitSection
      title={introData.title}
      imagePosition="left"
      image={introData.url}
    >
      <Text text={introData.p1} />
      <Text text={introData.p2} />
      <Text text={introData.p3} />

      {introData.span && (
        <HighLightText className="text-2xl" text={introData.span} />
      )}
    </SplitSection>
  );
};
