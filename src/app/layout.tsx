import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Simón Gómez Arango',
  description: 'Web portfolio to showcase Simón Gómez Arango’s projects, skills, and experience.',
  keywords: ['Simón Gómez Arango', 'Fullstack Developer', 'Portfolio', 'Next.js', 'Tailwind CSS'],
  authors: [{ name: 'Simón Gómez Arango', url: 'https://sgomeza.com' }],
  creator: 'Simón Gómez Arango',
  metadataBase: new URL('https://sgomeza.com'),
  openGraph: {
    title: 'Simón Gómez Arango',
    description: 'Explore Simón’s developer portfolio, including modern projects, design, and code.',
    url: 'https://sgomeza.com',
    siteName: 'Simón Gómez Arango Portfolio',
    type: 'website',
  },
  themeColor: '#05090D',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
     <body className="max-w-5xl mx-auto px-4">
        {children}
     </body>
    </html>
  );
}
