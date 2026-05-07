"use client";
import { toast } from "sonner";
import { Button } from "./ui/button";

export const TestButton = () => {
  return (
    <Button
      className="m-auto"
      onClick={() =>
        toast("button is clicked", {
          description: "test fullfilled",
          action: {
            label: "undo",
            onClick: () => console.log("undo"),
          },
        })
      }
    >
      Test me
    </Button>
  );
};
