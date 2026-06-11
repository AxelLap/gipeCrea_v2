import { Text } from "@/components/layout/Texts";
import Link from "next/link";
import { DropDownMenu } from "../../features/DropDownMenu";
import { FBIcon, InstagramIcon } from "../../features/Icons";

export const NavBar = () => {
  return (
    <nav className="ml-auto mr-7 w-fit sm:block hidden">
      <ul className="flex gap-10">
        <li>
          <Link href="/">
            <Text text="Acceuil" />
          </Link>
        </li>
        <li>
          <DropDownMenu />
        </li>
        <li>
          <Link href="/">
            <FBIcon />
          </Link>
        </li>
        <li>
          <Link href="/">
            <InstagramIcon />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
