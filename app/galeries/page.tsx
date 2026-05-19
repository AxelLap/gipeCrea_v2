import { BasicSection } from "@/components/layout/BasicSection";
import { getAllCategories } from "./paintings.query";
import { PreviewDisplay } from "./PreviewDisplay";

export default async function galleryPage() {
  const categories = await getAllCategories();
  return (
    <main className="flex flex-col flex-1 justify-center  sm:items-start">
      <BasicSection title="Galeries">
        {categories.map((category) => (
          <PreviewDisplay key={category.id} name={category.name} />
        ))}
      </BasicSection>
    </main>
  );
}
