import { AboutSection } from "@/components/sections/homePage/About";
import { IntroSection } from "@/components/sections/homePage/Intro";
import getHomPageData from "./homePageData.query";

export default async function Home() {
  const data = await getHomPageData();
  return (
    <main className="flex flex-col flex-1 justify-center  sm:items-start">
      {data ? (
        <>
          {data.intro && <IntroSection introData={data.intro} />}
          {data.about && <AboutSection aboutData={data.about} />}
        </>
      ) : (
        <p>Failed loading content</p>
      )}
    </main>
  );
}
