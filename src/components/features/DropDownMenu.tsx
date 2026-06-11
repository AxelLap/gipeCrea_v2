"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronUp } from "lucide-react";
import Link from "next/link";
import { Text } from "../layout/Texts";

export const DropDownMenu = () => {
  return (
    <DropdownMenu>
      <div className="flex justify-center items-center gap-2">
        <Link href="/galeries">
          <Text text="galeries" />
        </Link>
        <DropdownMenuTrigger>
          <ChevronUp />
        </DropdownMenuTrigger>
      </div>

      <DropdownMenuContent></DropdownMenuContent>
    </DropdownMenu>
  );
};
