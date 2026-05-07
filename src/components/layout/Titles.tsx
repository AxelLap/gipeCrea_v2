type TitleProps = {
  title: string;
  description: string;
};

export const MainTitle = (props: TitleProps) => {
  return (
    <div className="h-full flex flex-col gap-1  mt-3 ">
      <h1 className="font-montserrat text-primary text-4xl relative">
        {props.title}
        <span className="absolute -bottom-4 right-7 text-foreground text-sm ">
          {props.description}
        </span>
      </h1>
    </div>
  );
};
