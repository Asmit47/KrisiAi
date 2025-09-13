import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { LanguageProvider } from '@/context/language-context';
import ModernNavbar from '@/components/common/modern-navbar';

export const metadata: Metadata = {
  title: 'Krisi AI',
  description: 'AI-powered crop disease diagnosis for farmers',
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
          href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <LanguageProvider>
          <ModernNavbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}
