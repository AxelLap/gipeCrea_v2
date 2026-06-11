"use client";

import { EditableText } from "@/components/admin/EditableText";
import { SplitSection } from "@/components/layout/splitSection";
import { HighLightText, Text } from "@/components/layout/Texts";
import { Contact } from "@prisma/client";
import { useSession } from "next-auth/react";
import Image from "next/image";

type ContactSectionProps = {
  contactData: Contact;
};

export const ContactSection = ({
  contactData: { mainUrl, si1Url, si2Url, si3Url, t1, t2, t3, email },
}: ContactSectionProps) => {
  const session = useSession();

  const isAdminLogged = session?.status === "authenticated" ? true : false;

  return (
    <SplitSection
      title="CONTACT"
      image={mainUrl}
      imagePosition="left"
      isAdminLogged={isAdminLogged}
    >
      <div className="flex gap-2 justify-center items-center m-auto">
        {si1Url && (
          <div className="relative w-32 h-32">
            <Image src={si1Url} alt="peinture" fill className="object-cover" />
          </div>
        )}

        {si2Url && (
          <div className="relative w-32 h-32">
            <Image src={si2Url} alt="peinture" fill className="object-cover" />
          </div>
        )}

        {si3Url && (
          <div className="relative w-32 h-32">
            <Image src={si3Url} alt="peinture" fill className="object-cover" />
          </div>
        )}
      </div>

      <div className="flex flex-col gap-4">
        {isAdminLogged ? (
          <>
            {t1 && <EditableText text={t1} />}

            <EditableText text={email} />

            {t2 && <EditableText highlight text={t2} />}

            {t3 && <EditableText highlight text={t3} />}
          </>
        ) : (
          <>
            {t1 && <Text text={t1} className="text-xl" />}

            <Text text={email} className="text-xl" />

            {t2 && <HighLightText text={t2} />}

            {t3 && <HighLightText text={t3} />}
          </>
        )}
      </div>
    </SplitSection>
  );
};
