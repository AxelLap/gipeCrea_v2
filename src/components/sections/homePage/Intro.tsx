import { SplitSection } from "@/components/layout/splitSection";
import { Text } from "@/components/layout/Text";
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

      <span className="text-secondary text-2xl ml-auto p-4">
        {introData.span}
      </span>
    </SplitSection>
  );
};
