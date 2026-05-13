import { SiteConfig } from "@/lib/site-config";
import Image from "next/image";

import { useEffect, useState } from "react";
import { MainTitle } from "../../layout/Titles";
export const LogoTitle = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="flex items-center gap-3 h-full w-1/2">
      <Image
        className="h-fit rounded-full border border-foreground transition-all ease-in-out"
        width={isScrolled ? 50 : 70}
        height={isScrolled ? 50 : 70}
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
