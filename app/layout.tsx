import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'AutoPost — Autonomous Facebook Publishing Engine',
  description:
    'Production automation platform connecting DeepSeek AI intelligence to the Meta Graph API v20.0 for scheduled, high-fidelity Facebook Page publishing with zero external data storage.',
  keywords: [
    'Facebook Automation',
    'Meta Graph API v20.0',
    'DeepSeek AI',
    'Content Automation',
    'Autonomous Publishing',
  ],
  authors: [{ name: 'Muhammad Hassaan Khan' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter+Tight:ital,wght@0,400..800;1,400..800&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="grain-overlay min-h-[100dvh] bg-background font-sans text-foreground antialiased selection:bg-purple-500/20 selection:text-purple-700">
        <div className="relative flex min-h-[100dvh] flex-col">
          {/* Top subtle iridescent ambient mesh glow */}
          <div
            className="pointer-events-none fixed inset-x-0 top-0 h-[520px] bg-gradient-to-b from-purple-500/[0.04] via-blue-500/[0.03] to-transparent blur-3xl -z-10"
            aria-hidden="true"
          />

          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
