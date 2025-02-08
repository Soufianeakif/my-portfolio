import { ThemeProvider } from '@/context/ThemeProvider';
import './globals.css';
import { Bebas_Neue, Poppins } from 'next/font/google';
import type { Metadata } from 'next';

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
});

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
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
      <body className={`${poppins.variable} ${bebas.variable} font-poppins bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
