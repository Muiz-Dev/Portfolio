import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import { Theme } from '@radix-ui/themes';
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: "Muiz Adesope | Product-Focused Full-Stack Developer",
  description: "The personal portfolio of Muiz Adesope (Adesope Muiz), a product-focused full-stack developer from Lagos, Nigeria who builds web apps, dashboards, and marketplaces with React, Next.js, and modern web technologies.",
  keywords: ['Muiz Adesope', 'Adesope Muiz', 'Product-Focused Developer', 'Full-Stack Developer', 'Web Developer', 'React Developer', 'Next.js Developer', 'PHP', 'Nigeria', 'Lagos'],
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
          href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Display&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Favicon and App Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
      </head>
      <body className="font-body antialiased">
        <Theme
          appearance="light"
          accentColor="violet"
          grayColor="slate"
          radius="large"
          scaling="105%"
          panelBackground="translucent"
        >
          <Header />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </Theme>
        <Analytics />
      </body>
    </html>
  );
}
