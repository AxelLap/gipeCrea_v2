import { Edit2Icon } from "lucide-react";
import { useState } from "react";
import { HighLightText, Text } from "../layout/Texts";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

type EditableTextProps = {
  section: "intro" | "contact" | "favorite" | "about";
  text: string;
  highlight?: boolean;
};

export const EditableText = ({
  text: initialText,
  highlight,
}: EditableTextProps) => {
  const [text, setText] = useState(initialText);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div
      className="hover:bg-black group w-full h-fit flex items-center justify-center relative cursor-pointer"
      onClick={() => setIsEditing(true)}
    >
      {isEditing ? (
        <Textarea
          autoFocus
          value={text}
          onChange={(e) => setText(e.target.value)}
          onBlur={() => setIsEditing(false)}
          className="text-center p-1 m-auto xl:text-md md:text-sm text-xs w-[100%] h-[100%] border-none"
        />
      ) : highlight ? (
        <HighLightText text={text} />
      ) : (
        <Text text={text} />
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
