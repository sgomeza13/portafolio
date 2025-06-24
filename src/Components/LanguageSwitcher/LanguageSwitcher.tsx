"use client";

import { Link, useRoute } from "next-globe-gen";
import { SpainFlag, UKFlag } from "../SVG/UnitedKingdom";

/**
 * If there is dynamic route segments in some of the application routes (i.e. "/images/[id]"),
 * the params provided by Next.js useParams function have to be passed as a prop to
 * Link components for language switching to work properly.
 */
export default function LanguageSwitcher() {
  const route = useRoute();

  return (
    <nav>
      <ul className="flex flex-row gap-4 w-full items-center">
        
        <li>
          <Link href={route} locale="en" className="flex items-center gap-2">
            <UKFlag className="w-5 h-auto flex-shrink-0 align-middle" />
          </Link>
        </li>

        <li>
          <Link href={route} locale="es" className="flex items-center gap-2">
            <SpainFlag className="w-5 h-auto flex-shrink-0 align-middle" />
          </Link>
        </li>

      </ul>
    </nav>
  );
}


