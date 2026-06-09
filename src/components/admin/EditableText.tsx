import { Edit2Icon } from "lucide-react";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";

type EditableTextProps = {
  children: React.ReactNode;
  session: boolean;
};

export const EditableText = ({ children, session }: EditableTextProps) => {
  return (
    <div
      className={cn(
        session ? "hover:bg-black" : null,
        "group w-full h-fit p-1 flex items-center justify-center relative",
      )}
    >
      {children}
      {session && (
        <Button className="bg-foreground rounded-md text-black absolute top-0 left-0 hidden group-hover:block">
          <Edit2Icon />
        </Button>
      )}
    </div>
  );
};
