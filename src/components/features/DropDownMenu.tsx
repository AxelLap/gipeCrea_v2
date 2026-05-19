"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronUp } from "lucide-react";
import Link from "next/link";

export const DropDownMenu = () => {
  return (
    <DropdownMenu>
      <div className="flex justify-center items-center gap-2">
        <Link href="/galeries">Galeries</Link>
        <DropdownMenuTrigger>
          <ChevronUp />
        </DropdownMenuTrigger>
      </div>

      <DropdownMenuContent></DropdownMenuContent>
    </DropdownMenu>
  );
};
