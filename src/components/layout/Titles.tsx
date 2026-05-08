type MainTitleProps = {
  title: string;
  description: string;
};

export const MainTitle = (props: MainTitleProps) => {
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

type TitleProps = {
  title: string;
};

export const Title = (props: TitleProps) => {
  return (
    <h2 className="text-secondary h-fit w-fit ml-2 text-2xl">{props.title}</h2>
  );
};
