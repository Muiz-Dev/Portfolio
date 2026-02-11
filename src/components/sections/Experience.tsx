import { Briefcase } from 'lucide-react';
import { experiences } from '@/lib/portfolio-data';
import { AnimatedElement } from '../AnimatedElement';
import { cn } from '@/lib/utils';
import { Card, Flex, Heading, Text } from '@radix-ui/themes';

export function Experience() {
  return (
    <section id="experience" className="bg-secondary">
      <div className="container mx-auto px-4">
        <AnimatedElement>
          <Heading as="h2" size="7" align="center" className="font-headline font-bold">
            Professional Journey
          </Heading>
          <Text asChild size="3" align="center" color="gray" className="mt-4 max-w-xl mx-auto">
            <p>A timeline of my work experience and growth as a developer.</p>
          </Text>
        </AnimatedElement>

        <div className="mt-16 relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-foreground/15 hidden md:block" />
          {experiences.map((exp, index) => (
            <AnimatedElement key={index} className="mb-12">
              <div className={cn(
                "flex flex-col md:flex-row items-center md:justify-between w-full",
                index % 2 !== 0 && "md:flex-row-reverse"
              )}>
                <div className="md:w-5/12 order-1 md:order-none">
                  <Card className="border border-border shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)]" size="3" variant="surface">
                    <Flex direction="column" gap="2" className={cn("text-left", index % 2 !== 0 && "md:text-right")}>
                      <Text size="2" color="violet" weight="bold">{exp.period}</Text>
                      <Heading as="h3" size="4">{exp.role}</Heading>
                      <Text size="3" color="gray">{exp.company}</Text>
                      <Text size="2" color="gray">{exp.description}</Text>
                    </Flex>
                  </Card>
                </div>
                
                <div className="z-10 order-0 md:order-none my-4 md:my-0">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center ring-8 ring-card/70 shadow-[0_10px_30px_-18px_rgba(80,32,12,0.6)]">
                    <Briefcase className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>

                <div className="w-5/12 order-2 md:order-none hidden md:block" />
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
}
