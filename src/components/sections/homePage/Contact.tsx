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
  const { data: session } = useSession();
  return (
    <SplitSection title="CONTACT" image={mainUrl} imagePosition="left">
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
        {t1 && (
          <EditableText session={session ? true : false}>
            <Text text={t1} className="text-xl" />
          </EditableText>
        )}
        <EditableText session={session ? true : false}>
          <Text text={email} className="text-xl" />
        </EditableText>
        {t2 && (
          <EditableText session={session ? true : false}>
            <HighLightText text={t2} />
          </EditableText>
        )}
        {t3 && (
          <EditableText session={session ? true : false}>
            <HighLightText text={t3} />
          </EditableText>
        )}
      </div>
    </SplitSection>
  );
};
