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
    <div className="flex items-center gap-3 h-full w-fit mr-auto">
      <div className="h-[50px] md:h-[70px] w-[50px] md:w-[70px] rounded-full relative overflow-hidden">
        <Image
          className="h-fit transition-all ease-in-out"
          fill
          alt="Logo"
          src="/elephantprofile.webp"
        />
      </div>
      <MainTitle
        title={SiteConfig.title}
        description={SiteConfig.description}
      />
    </div>
  );
};
