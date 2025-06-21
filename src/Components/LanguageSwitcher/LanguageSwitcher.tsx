"use client";

import { Link, useRoute } from "next-globe-gen";

/**
 * If there is dynamic route segments in some of the application routes (i.e. "/images/[id]"),
 * the params provided by Next.js useParams function have to be passed as a prop to
 * Link components for language switching to work properly.
 */
export default function LanguageSwitcher() {
  const route = useRoute();
  return (
    <nav>
      <ul>
        <li>
          <Link href={route} locale="en">
            Ingles
          </Link>
        </li>
        <li>
          <Link href={route} locale="es">
            Español
          </Link>
        </li>
      </ul>
    </nav>
  );
}