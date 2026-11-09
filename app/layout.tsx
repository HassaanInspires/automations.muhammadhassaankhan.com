import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter+Tight:ital,wght@0,400..800;1,400..800&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="grain-overlay min-h-[100dvh] bg-background font-sans text-foreground antialiased selection:bg-accent/20 selection:text-accent">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="relative flex min-h-[100dvh] flex-col">
            {/* Top ambient radial spotlight */}
            <div
              className="pointer-events-none fixed inset-x-0 top-0 h-[480px] bg-gradient-to-b from-blue-500/[0.03] dark:from-blue-500/[0.05] to-transparent blur-3xl"
              aria-hidden="true"
            />

            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
