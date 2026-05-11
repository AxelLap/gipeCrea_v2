"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

type ConfirmActionDialogProps = {
  buttonText: string;
  triggerButtonVariant:
    | "default"
    | "destructive"
    | "outline"
    | "ghost"
    | "link"
    | "secondary";
  dialogTitle?: string;
  dialogMessage: string;
  actionText: string;
  onConfirm: () => void | Promise<void>;
};

export const ConfirmActionDialog = (props: ConfirmActionDialogProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant={props.triggerButtonVariant}>{props.buttonText}</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-foreground rounded-md text-black">
        <AlertDialogHeader>
          <AlertDialogTitle>{props.dialogTitle}</AlertDialogTitle>

          <AlertDialogDescription>{props.dialogMessage}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-foreground text-black border border-black rounded-sm">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            className="font-bold text-white rounded-sm"
            onClick={async () => {
              await props.onConfirm();
            }}
          >
            {props.actionText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
