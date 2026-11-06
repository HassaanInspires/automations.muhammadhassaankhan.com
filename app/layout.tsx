import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'automations.muhammadhassaankhan.com — Personal Facebook Automation',
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
    <html lang="en" className="dark" style={{ colorScheme: 'dark' }}>
      <body className="min-h-[100dvh] bg-[#0a0a0a] font-sans text-[#f5f5f5] antialiased selection:bg-lime/20 selection:text-lime">
        <ThemeProvider>
          <div className="relative flex min-h-[100dvh] flex-col bg-background">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
