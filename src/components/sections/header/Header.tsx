"use client";

import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";
import { LogoTitle } from "./LogoTitle";
import { NavBar } from "./NavBar";

export const Header = () => {
  const session = useSession();

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
    <header
      className={cn(
        "sticky top-0 z-50 flex w-full items-center justify-between backdrop-blur-sm transition-all duration-500 ease-in-out",
        isScrolled
          ? "h-16 px-2 py-1 bg-background/85 shadow-lg lg:px-4"
          : "h-16 px-2 py-2 bg-background shadow-xl lg:h-24 lg:px-7",
      )}
    >
      <LogoTitle />

      <div
        className={cn(
          "flex items-center gap-3 transition-all duration-500",
          isScrolled ? "scale-95" : "scale-100",
        )}
      >
        <NavBar />
      </div>
    </header>
  );
};
