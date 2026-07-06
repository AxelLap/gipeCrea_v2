import { SiteConfig } from "@/lib/site-config";
import Image from "next/image";

import { useEffect, useState } from "react";
import { cn } from "../../../lib/utils";
import { MainTitle } from "../../layout/Titles";

export const LogoTitle = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll(); // initialise l'état

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="mr-auto flex h-full w-fit items-center gap-3">
      <div
        className={cn(
          isScrolled ? "lg:h-[50px] lg:w-[50px]" : "lg:h-[70px] lg:w-[70px]",
          "relative h-[50px] w-[50px] overflow-hidden rounded-full transition-all ease-in-out ",
        )}
      >
        <Image fill alt="Logo" src="/elephantprofile.webp" />
      </div>

      <MainTitle
        title={SiteConfig.title}
        description={SiteConfig.description}
      />
    </div>
  );
};
