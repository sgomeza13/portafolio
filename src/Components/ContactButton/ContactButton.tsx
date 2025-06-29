"use client";
import { useMediaQuery } from "@/hooks/use-media-query";
import { contacts } from "./Constansts";
import { ContactButtonDialog, ContactButtonDrawer } from "./ContantDialog";

export function ContactButton() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const ContactContent = (
    <div className="mx-auto w-full max-w-sm">
      <div className="flex justify-center gap-4 my-6">
        {contacts.map((contact) => (
          <a
            key={contact.label}
            href={contact.href}
            target={contact.label === "Email" ? undefined : "_blank"}
            rel={contact.label === "Email" ? undefined : "noopener noreferrer"}
            className="group flex flex-col items-center space-y-2 p-2 sm:p-3 rounded-lg bg-glass-light hover:bg-glass-sage hover:scale-105 transition-all duration-300 cursor-pointer min-w-[60px]"
          >
            <div className="text-xl sm:text-2xl group-hover:scale-110 transition-transform duration-300">
              {contact.icon}
            </div>
            <span className="text-[10px] sm:text-xs text-foreground-muted group-hover:text-gray-500 group-hover:scale-105 font-medium transition-all text-center">
              {contact.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );

  if (isDesktop) {
    return (
      <ContactButtonDialog ContactContent={ContactContent} />
    );
  }

  return (
    <ContactButtonDrawer ContactContent={ContactContent} />
  );
}
