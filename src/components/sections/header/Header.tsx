"use client";

import { ConfirmActionDialog } from "@/components/features/ConfirmActionDoalog";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { LogoTitle } from "./LogoTitle";
import { NavBar } from "./NavBar";

export const Header = () => {
  const { data: session } = useSession();

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
    <header
      className={cn(
        "sticky top-0 z-50 w-full flex items-center justify-between transition-all duration-500 ease-in-out backdrop-blur-md",
        isScrolled
          ? "h-16 px-4 py-1 shadow-lg bg-background/85"
          : "h-24 px-7 py-2 shadow-xl bg-background",
      )}
    >
      <LogoTitle />

      {session?.user && (
        <Card
          className={cn(
            "flex flex-row items-center gap-4 bg-foreground text-black rounded transition-all duration-500",
            isScrolled ? "p-3 scale-95" : "p-5 h-[90%]",
          )}
        >
          <p className="text-center text-sm">
            Session Admin : {session.user.email}
          </p>

          <ConfirmActionDialog
            buttonText="Logout"
            triggerButtonVariant="destructive"
            dialogMessage="Êtes vous sur de vouloir quitter le mode admin ?"
            actionText="Confirmer"
            onConfirm={signOut}
          />
        </Card>
      )}

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
