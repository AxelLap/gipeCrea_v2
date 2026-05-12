import { About as AboutType } from "@prisma/client";

import { Text } from "@/components/layout/Texts";
import { SplitSection } from "../../layout/splitSection";

type AboutProps = {
  aboutData: AboutType;
};

export const AboutSection = ({ aboutData }: AboutProps) => {
  return (
    <SplitSection
      title={aboutData.title}
      imagePosition="right"
      image={aboutData.image}
    >
      <Text text={aboutData.p1} />
      <Text text={aboutData.p2} />
      <Text text={aboutData.p3} />
    </SplitSection>
  );
};
