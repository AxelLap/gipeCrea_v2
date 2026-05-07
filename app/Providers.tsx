"use client";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { PropsWithChildren } from "react";

import { Toaster } from "sonner";

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
        <Toaster />
      </ThemeProvider>
    </>
  );
};
