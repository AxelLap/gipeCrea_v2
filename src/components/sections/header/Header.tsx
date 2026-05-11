"use client";
import { ConfirmActionDialog } from "@/components/features/ConfirmActionDoalog";
import { Card } from "@/components/ui/card";
import { signOut, useSession } from "next-auth/react";
import { LogoTitle } from "./LogoTitle";
import { NavBar } from "./NavBar";

export const Header = () => {
  const { data: session } = useSession();

  return (
    <header className="w-full pl-7 h-24 flex items-center px-5 py-2 mb-1 shadow-xl">
      <LogoTitle />
      {session?.user && (
        <>
          <Card className="flex flex-row p-5 h-[90%] bg-foreground rounded text-black">
            <p className="w-fit h-fit m-auto text-center">
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
        </>
      )}
      <div className="flex items-center gap-3 h-full w-1/2 ">
        <NavBar />
      </div>
    </header>
  );
};
