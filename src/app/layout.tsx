import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import { Theme } from '@radix-ui/themes';
import { Analytics } from '@vercel/analytics/next';
import { googleSiteVerification, ogImagePath, siteDescription, siteName, siteTitle, siteUrl } from '@/lib/seo';

export const viewport: Viewport = {
  themeColor: '#ffffff',
  colorScheme: 'light',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: '%s | Muiz Adesope',
  },
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: 'Muiz Adesope', url: siteUrl }],
  creator: 'Muiz Adesope',
  publisher: 'Muiz Adesope',
  category: 'technology',
  keywords: [
    'Muiz Adesope',
    'Adesope Muiz',
    'product-focused full-stack developer',
    'Next.js developer',
    'React developer',
    'TypeScript developer',
    'portfolio website',
    'Lagos Nigeria developer',
  ],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: ogImagePath,
        alt: 'Muiz Adesope portfolio preview image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: [ogImagePath],
    creator: '@muiz_sui',
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  ...(googleSiteVerification
    ? {
        verification: {
          google: googleSiteVerification,
        },
      }
    : {}),
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
