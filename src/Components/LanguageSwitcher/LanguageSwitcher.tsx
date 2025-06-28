"use client";

import { Link, useRoute } from "next-globe-gen";
import { useParams } from "next/navigation";
import { SpainFlag, UKFlag } from "../SVG/Flags";

export default function LanguageSwitcher() {
  const route = useRoute();
  const params = useParams();

  const id = params?.id;
  const dynamicParams = typeof id === "string" ? { id } : undefined;
  
  return (
    <nav>
      <ul className="flex flex-row gap-4 w-full items-center">
        <li>
          <Link href={route} locale="en" params={dynamicParams} className="flex items-center gap-2">
            <UKFlag className="w-5 h-auto flex-shrink-0 align-middle" />
          </Link>
        </li>
        <li>
          <Link href={route} locale="es" params={dynamicParams} className="flex items-center gap-2">
            <SpainFlag className="w-5 h-auto flex-shrink-0 align-middle" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
