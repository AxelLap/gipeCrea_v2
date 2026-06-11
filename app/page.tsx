import { HomePage } from "@/components/sections/homePage/HomePage";
import { TailwindIndicator } from "@/components/TailwindIndicator";
import getHomPageData from "./homePageData.query";

export default async function Home() {
  const data = await getHomPageData();

  return (
    <main className="flex flex-col flex-1 justify-center  lg:items-start relative">
      <TailwindIndicator />
      {data ? <HomePage data={data} /> : <p>Failed to load content</p>}
    </main>
  );
}
