import type { Metadata } from 'next';
import './globals.css';
import 'highlight.js/styles/github-dark.css';
import { Nav } from '@/components/Nav';

export const metadata: Metadata = {
  title: 'atharva kokane',
  description: 'personal blog and portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased scroll-smooth">
      <body className="min-h-screen bg-background text-foreground font-sans lowercase">
        <div className="max-w-2xl mx-auto px-6 py-12 md:py-20">
          <Nav />
          <main className="mt-16">{children}</main>
        </div>
      </body>
    </html>
  );
}
