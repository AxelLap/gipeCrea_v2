import type { Metadata } from "next";

import { Header } from "@/components/sections/header/Header";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "./Providers";

export const metadata: Metadata = {
  title: "Gipé Créa",
  description: "Art et peinture",
};
export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"], // adapte selon tes besoins
  variable: "--font-montserrat", // optionnel mais recommandé
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} h-full antialiased `}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col w-full font-montserrat">
        <Header />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
