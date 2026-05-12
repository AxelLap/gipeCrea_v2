import { cn } from "@/lib/utils";

export const Text = (props: { text: string; className?: string }) => {
  return (
    <p
      className={cn(
        "text-center p-2 m-auto",
        props.className ? props.className : null,
      )}
    >
      {props.text}
    </p>
  );
};

export const HighLightText = (props: { text: string; className?: string }) => {
  return (
    <span
      className={cn(
        "text-secondary text-xl ml-auto p-4 text-center",
        props.className ? props.className : null,
      )}
    >
      {props.text}
    </span>
  );
};
