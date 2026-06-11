"use client";
import { AdminCard } from "@/components/admin/AdminCard";
import { About, Contact, Favorite, Intro } from "@prisma/client";
import { useSession } from "next-auth/react";
import { AboutSection } from "./About";
import { ContactSection } from "./Contact";
import { FavoriteSection } from "./Favorite";
import { IntroSection } from "./Intro";

type homePageProps = {
  data: {
    intro: Intro | null;
    about: About | null;
    favorite: Favorite | null;
    contact: Contact | null;
  };
};

export const HomePage = ({ data }: homePageProps) => {
  const session = useSession();
  return (
    <div className="relative">
      {data.intro && <IntroSection introData={data.intro} />}
      {data.favorite && <FavoriteSection favoriteData={data.favorite} />}
      {data.about && <AboutSection aboutData={data.about} />}
      {data.contact && <ContactSection contactData={data.contact} />}
      {session?.status === "authenticated" && <AdminCard />}
    </div>
  );
};
