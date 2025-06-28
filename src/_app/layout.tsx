import type { Metadata } from "next";
import "../app/globals.css";
import { useLocale } from "next-globe-gen";
import LanguageSwitcher from "@/Components/LanguageSwitcher/LanguageSwitcher";

export const metadata: Metadata = {
  title: "Simón Gómez Arango",
  description:
    "Web portfolio to showcase Simón Gómez Arango's projects, skills, and experience.",
  keywords: [
    "Simón Gómez Arango",
    "Fullstack Developer",
    "Portfolio",
    "Next.js",
    "Tailwind CSS",
  ],
  authors: [{ name: "Simón Gómez Arango", url: "https://sgomeza.com" }],
  creator: "Simón Gómez Arango",
  metadataBase: new URL("http://localhost:3000"),
  openGraph: {
    title: "Simón Gómez Arango",
    description:
      "Explore Simón's developer portfolio, including modern projects, design, and code.",
    url: "https://sgomeza.com",
    siteName: "Simón Gómez Arango Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const local = useLocale();

  return (
    <html lang={local} className="h-full">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="overflow-x-hidden">
        <div className="flex flex-col max-w-7xl mx-auto">
          <header className="fixed top-0 right-0 z-50 p-4 sm:p-6 w-full bg-background/70 backdrop-blur-md h-16 sm:h-20">
            <div className="max-w-7xl mx-auto flex justify-end">
              <LanguageSwitcher />
            </div>
          </header>

          <main className="flex-1 pt-20 sm:pt-24">{children}</main>
        </div>
      </body>
    </html>
  );
}
