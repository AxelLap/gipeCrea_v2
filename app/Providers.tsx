"use client";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { SessionProvider } from "next-auth/react";
import { PropsWithChildren } from "react";

import { Toaster } from "sonner";

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <>
      <SessionProvider>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
      </SessionProvider>
    </>
  );
};
