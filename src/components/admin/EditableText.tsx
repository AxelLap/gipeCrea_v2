import { Edit2Icon } from "lucide-react";
import { HighLightText, Text } from "../layout/Texts";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { useState } from "react";

type EditableTextProps = {
  name: string;
  value?: string;
  ariaInvalid: boolean;
  autoComplete: "on" | "off";
  highlight?: boolean;
  onChange: (value: string) => void;
};

export const EditableText = ({
  name,
  value,
  highlight,
  onChange,
}: EditableTextProps) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div
      className="hover:bg-black group w-full h-fit flex items-center justify-center relative cursor-pointer"
      onClick={() => setIsEditing(true)}
    >
      {isEditing ? (
        <Textarea
          name={name}
          autoFocus
          value={value ?? ""}
          onChange={(e) => onChange(e.target.value)}
          onBlur={() => setIsEditing(false)}
          className="text-center p-1 m-auto xl:text-md md:text-sm text-xs w-[100%] h-[100%] border-none"
        />
      ) : highlight && value ? (
        <HighLightText text={value} />
      ) : (
        value && <Text text={value} />
      )}

      {!isEditing && (
        <Button
          type="button"
          className="bg-foreground rounded-md text-black absolute top-0 left-0 hidden group-hover:block"
          onClick={(e) => {
            e.stopPropagation();
            setIsEditing(true);
          }}
        >
          <Edit2Icon />
        </Button>
      )}
    </div>
  );
};
