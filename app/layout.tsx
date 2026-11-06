import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'AutoPost — AI-Powered Facebook Automation',
  description:
    'Autonomous personal pipeline connecting DeepSeek AI intelligence to the Meta Graph API for scheduled, high-fidelity Facebook Page publishing.',
  keywords: [
    'Facebook Automation',
    'Meta Graph API',
    'DeepSeek AI',
    'Content Automation',
    'AI Publishing',
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
      <body className="min-h-[100dvh] bg-background font-sans text-foreground antialiased selection:bg-accent/20 selection:text-accent">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="relative flex min-h-[100dvh] flex-col">
            {/* Subtle top ambient radial lighting */}
            <div
              className="pointer-events-none fixed inset-x-0 top-0 h-96 bg-gradient-to-b from-indigo-500/[0.04] dark:from-indigo-500/[0.06] to-transparent blur-3xl"
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
