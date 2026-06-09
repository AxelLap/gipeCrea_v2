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
        "sticky top-0 z-50 flex w-full items-center justify-between backdrop-blur-sm transition-all duration-500 ease-in-out",
        isScrolled
          ? "h-16 px-2 py-1 bg-background/85 shadow-lg lg:px-4"
          : "h-16 px-2 py-2 bg-background shadow-xl lg:h-24 lg:px-7",
      )}
    >
      <LogoTitle />

      {session?.user && (
        <Card
          className={cn(
            "m-auto h-[90%] flex-row items-center gap-4 rounded bg-foreground p-4 text-black transition-all duration-500 lg:flex",
          )}
        >
          <p className="text-center text-sm">
            Session Admin : {session.user.email}
          </p>

          <ConfirmActionDialog
            buttonText="Logout"
            triggerButtonVariant="default"
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
