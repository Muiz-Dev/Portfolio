import type { CSSProperties } from 'react';
import { Button, Heading, Text } from '@radix-ui/themes';
import Link from 'next/link';
import { ArrowDown, Mail } from 'lucide-react';
import { personalData } from '@/lib/portfolio-data';
import { TypingAnimation } from '../TypingAnimation';
import { AnimatedElement } from '../AnimatedElement';

export function Hero() {
  const nameParts = personalData.name.split(' ');

  return (
    <section id="hero" className="relative flex min-h-[100vh] items-center justify-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-28 left-[18%] h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-0 right-[12%] h-96 w-96 rounded-full bg-secondary/50 blur-[120px]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background via-background/70 to-transparent" />
      </div>
      <div className="container mx-auto px-4 text-center">
        <Heading asChild size="9" align="center">
          <h1 className="hero-title font-headline text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight text-balance">
            {nameParts.map((part, index) => (
              <span
                key={`${part}-${index}`}
                style={{ '--delay': `${120 + index * 140}ms` } as CSSProperties}
              >
                {part}
              </span>
            ))}
          </h1>
        </Heading>

        <AnimatedElement delay={300}>
          <div className="hero-kicker mt-6 md:mt-8 text-xl md:text-2xl lg:text-3xl text-foreground/70">
            <TypingAnimation texts={['Product-Focused Full-Stack Dev', 'Web Apps & Admin Tools', 'Marketplaces & Dashboards']} />
          </div>
        </AnimatedElement>

        <AnimatedElement delay={500}>
          <Text asChild size="4" align="center" color="gray" className="mt-8 md:mt-10 mx-auto max-w-3xl text-balance leading-relaxed">
            <p>
              I build customer-facing web apps and internal tools for startups and SMEs, shipping clean UX and reliable systems from idea to launch.
            </p>
          </Text>
        </AnimatedElement>
        
        <AnimatedElement delay={700}>
          <div className="mt-12 md:mt-14 flex flex-col sm:flex-row items-center justify-center gap-5">
            <Button asChild size="3" className="btn-gradient btn-roomy">
              <Link href="#contact">
                <Mail className="mr-2 h-5 w-5" />
                Get in Touch
              </Link>
            </Button>
            <Button asChild variant="ghost" size="3" className="btn-outline-brand btn-roomy">
              <Link href="#projects">
                View My Work
                <ArrowDown className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </AnimatedElement>
      </div>
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
}
