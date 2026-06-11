import { cn } from "@/lib/utils";
import { signOut } from "next-auth/react";
import { ConfirmActionDialog } from "../features/ConfirmActionDoalog";
import { Card } from "../ui/card";

export const AdminCard = () => {
  return (
    <Card
      className={cn(
        "fixed top-[92vh] right-3 z-50 w-[111px] hover:w-[195px] transition-all duration-500  h-fit overflow-hidden flex-row flex-nowrap items-center gap-4 rounded-xl bg-foreground p-1 text-black",
      )}
    >
      <p className="text-center text-sm whitespace-nowrap ">Session Admin</p>

      <ConfirmActionDialog
        buttonText="Logout"
        triggerButtonVariant="default"
        dialogMessage="Êtes vous sur de vouloir quitter le mode admin ?"
        actionText="Confirmer"
        onConfirm={signOut}
      />
    </Card>
  );
};
