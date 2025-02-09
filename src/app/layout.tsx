import { ThemeProvider } from '@/context/ThemeProvider';
import './globals.css';
import { Poppins } from 'next/font/google';
import type { Metadata } from 'next';
import { Analytics } from "@/components/analytics";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  preload: true,
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: "AKIF Soufiane's Portfolio",
  description: "Welcome to AKIF Soufiane's portfolio - Full Stack Developer",
  icons: {
    icon: '/images/logo.webp',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${poppins.variable} font-poppins bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors`}>
        <ThemeProvider>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
