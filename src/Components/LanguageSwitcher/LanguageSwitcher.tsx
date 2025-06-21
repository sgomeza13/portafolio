"use client";

import { Link, useRoute } from "next-globe-gen";
import { Button } from "../CustomUI/Button/Button";

/**
 * If there is dynamic route segments in some of the application routes (i.e. "/images/[id]"),
 * the params provided by Next.js useParams function have to be passed as a prop to
 * Link components for language switching to work properly.
 */
export default function LanguageSwitcher() {
  const route = useRoute();
  return (
    <nav>
      <ul className="flex flex-row gap-4">
        <li>
          <Button>
          <Link href={route} locale="en">
            English 🇬🇧
          </Link>
         </Button> 
        </li>
        <li>
          <Button>
          <Link href={route} locale="es">
            Español 🇪🇸
          </Link>
          </Button>
        </li>
      </ul>
    </nav>
  );
}