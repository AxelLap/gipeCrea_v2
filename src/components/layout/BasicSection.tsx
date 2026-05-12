import { Title } from "./Titles";

type BasicSectionProps = {
  title: string;
  children: React.ReactNode;
};

export const BasicSection = (props: BasicSectionProps) => {
  return (
    <section className="flex flex-col gap-4 items-center w-[90%] my-8 m-auto">
      <Title title={props.title} />
      {props.children}
    </section>
  );
};
