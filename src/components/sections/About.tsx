import Image from 'next/image';
import { AnimatedElement } from '../AnimatedElement';
import { Download } from 'lucide-react';
import { personalData } from '@/lib/portfolio-data';
import Link from 'next/link';
import { Button, Heading, Text } from '@radix-ui/themes';

export function About() {
  return (
    <section id="about" className="bg-secondary">
      <div className="container mx-auto px-4">
        <AnimatedElement>
          <Heading as="h2" size="7" align="center" className="font-headline font-bold">
            About Me
          </Heading>
          <Text asChild size="3" align="center" color="gray" className="mt-4 max-w-xl mx-auto">
            <p>A little bit about my journey and what drives me.</p>
          </Text>
        </AnimatedElement>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
          <AnimatedElement className="md:col-span-2">
            <div className="relative aspect-square w-full max-w-sm mx-auto rounded-[28px] overflow-hidden border border-border/70 shadow-[0_28px_70px_-48px_rgba(24,20,12,0.7)] group">
               <div className="absolute inset-0 bg-primary/15 z-10"></div>
                <Image
                  src="/profile-2.jpg"
                  alt="Muiz Adesope"
                  fill
                  sizes="(max-width: 768px) 90vw, 384px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  data-ai-hint="developer portrait"
                />
            </div>
          </AnimatedElement>
          <AnimatedElement delay={200} className="md:col-span-3">
            <div className="space-y-6 text-lg text-foreground/90 text-balance">
              <p>
                I&apos;m Muiz, a product-focused full-stack developer who helps teams launch and improve web products. I blend design sensibility with engineering to ship experiences that are fast, clear, and maintainable.
              </p>
              <p>
                My core stack is <span className="text-primary font-semibold">React</span>, <span className="text-primary font-semibold">Next.js</span>, <span className="text-primary font-semibold">TypeScript</span>, and <span className="text-primary font-semibold">PostgreSQL</span>, with <span className="text-primary font-semibold">PHP</span> and <span className="text-primary font-semibold">MySQL</span> for custom or legacy backends. I build dashboards, marketplaces, and CMS-driven sites that scale with content and users.
              </p>
              <p>
                I like taking ownership from discovery to deployment, collaborating closely with stakeholders, and iterating based on real user feedback.
              </p>
               <div className="mt-8">
                <Button asChild size="3" className="btn-gradient btn-roomy">
                  <Link href={personalData.resumeUrl} target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-5 w-5" />
                    Download My CV
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
}
