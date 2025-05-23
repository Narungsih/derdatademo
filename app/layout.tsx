import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { PrimeReactProvider } from 'primereact/api';
import './globals.css';
import Script from 'next/script';
import Dashboard from './components/Dashboard';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'DER Data Demo',
  description: 'DER Data Demo',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        src="https://kit.fontawesome.com/b2ddf96956.js"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}>
        <PrimeReactProvider>
          <Dashboard>{children}</Dashboard>
        </PrimeReactProvider>
      </body>
    </html>
  );
}
