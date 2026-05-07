import { SiteConfig } from "@/lib/site-config";
import Image from "next/image";

import { MainTitle } from "../../layout/Titles";
export const LogoTitle = () => {
  return (
    <div className="flex items-center gap-3 h-full w-1/2">
      <Image
        className="h-fit rounded-full border border-foreground "
        width={70}
        height={70}
        alt="Logo"
        src="/elephantprofile.webp"
      />
      <MainTitle
        title={SiteConfig.title}
        description={SiteConfig.description}
      />
    </div>
  );
};
