import { LogoTitle } from "./LogoTitle";
import { NavBar } from "./NavBar";

export const Header = () => {
  return (
    <header className="w-full pl-7 h-24 flex items-center px-5 py-2 mb-1 shadow-xl">
      <LogoTitle />
      <div className="flex items-center gap-3 h-full w-1/2 ">
        <NavBar />
      </div>
    </header>
  );
};
