'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button, Container, IconButton, Link as RadixLink } from '@radix-ui/themes';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { Logo } from '@/components/ui/logo';
import { cn } from '@/lib/utils';
import { personalData } from '@/lib/portfolio-data';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm transition-all duration-300",
      isScrolled && "shadow-[0_18px_40px_-32px_rgba(23,20,12,0.6)]"
    )}>
      <Container size="4" className="px-4 md:px-6">
        <div className="flex h-24 md:h-28 items-center gap-3">
          <Logo className="shrink-0 md:hidden" size="xs" />
          <Logo className="shrink-0 hidden md:inline-flex" size="sm" />
          <nav className="ml-auto hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <RadixLink
              key={link.href}
              asChild
              size="2"
              weight="medium"
              color="gray"
              underline="hover"
              className="text-xs uppercase tracking-[0.18em]"
            >
              <Link href={link.href}>
                {link.label}
              </Link>
            </RadixLink>
          ))}
          <Button asChild size="2" variant="ghost" className="btn-outline-brand btn-roomy">
            <Link href={personalData.resumeUrl} target="_blank" rel="noopener noreferrer">
              Download CV
            </Link>
          </Button>
          </nav>
          <div className="ml-auto md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <IconButton variant="ghost" size="3" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </IconButton>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <div className="p-6">
                <div className="mb-8">
                  <Logo size="xs" />
                </div>
                <nav className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <RadixLink
                      key={link.href}
                      asChild
                      size="2"
                      weight="medium"
                      color="gray"
                      underline="hover"
                      className="text-sm uppercase tracking-[0.18em]"
                    >
                      <Link href={link.href} onClick={closeMobileMenu}>
                        {link.label}
                      </Link>
                    </RadixLink>
                  ))}
                   <Button asChild className="mt-4 btn-outline-brand btn-roomy" variant="ghost" size="2">
                    <Link href={personalData.resumeUrl} onClick={closeMobileMenu} target="_blank" rel="noopener noreferrer">
                      Download CV
                    </Link>
                  </Button>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
          </div>
        </div>
      </Container>
    </header>
  );
}
