import { AboutSection } from "@/components/sections/homePage/About";
import { ContactSection } from "@/components/sections/homePage/Contact";
import { FavoriteSection } from "@/components/sections/homePage/Favorite";
import { IntroSection } from "@/components/sections/homePage/Intro";
import { TailwindIndicator } from "@/components/TailwindIndicator";
import getHomPageData from "./homePageData.query";

export default async function Home() {
  const data = await getHomPageData();
  return (
    <main className="flex flex-col flex-1 justify-center  sm:items-start relative">
      <TailwindIndicator />
      {data ? (
        <>
          {data.intro && <IntroSection introData={data.intro} />}
          {data.favorite && <FavoriteSection favoriteData={data.favorite} />}
          {data.about && <AboutSection aboutData={data.about} />}
          {data.contact && <ContactSection contactData={data.contact} />}
        </>
      ) : (
        <p>Failed loading content</p>
      )}
    </main>
  );
}
