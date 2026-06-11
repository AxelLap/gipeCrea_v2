import { SiteConfig } from "@/lib/site-config";
import Image from "next/image";

import { useEffect, useRef, useState } from "react";
import { cn } from "../../../lib/utils";
import { MainTitle } from "../../layout/Titles";

export const LogoTitle = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollLockRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollLockRef.current) return;

      const newValue = window.scrollY > 40;

      setIsScrolled((prev) => {
        if (prev === newValue) return prev;

        scrollLockRef.current = true;

        setTimeout(() => {
          scrollLockRef.current = false;
        }, 2000);

        return newValue;
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
