import type { Metadata } from 'next';
import Link from 'next/link';
import { AlertTriangle, Home } from 'lucide-react';
import { Button, Heading, Text } from '@radix-ui/themes';

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] text-center px-4">
      <AlertTriangle className="w-24 h-24 text-primary mb-6 animate-pulse" />
      <Heading as="h1" size="8" className="font-headline font-bold mb-4">404</Heading>
      <Heading as="h2" size="5" className="mb-4 text-balance">Oops! Page Not Found.</Heading>
      <Text asChild size="3" align="center" color="gray" className="max-w-md mb-8 text-balance">
        <p>
          It seems you've stumbled upon a page that doesn't exist. Maybe a typo, or perhaps it's off on an adventure of its own.
        </p>
      </Text>
      <Button asChild size="3" className="btn-gradient">
        <Link href="/">
          <Home className="mr-2 h-5 w-5" />
          Return to Homepage
        </Link>
      </Button>
    </div>
  );
}
