import Image from 'next/image';
import { skills } from '@/lib/portfolio-data';
import { AnimatedElement } from '../AnimatedElement';
import { Card, Flex, Heading, Text } from '@radix-ui/themes';

export function Skills() {
  return (
    <section id="skills" className="bg-background">
      <div className="container mx-auto px-4">
        <AnimatedElement>
          <Heading as="h2" size="7" align="center" className="font-headline font-bold">
            My Tech Arsenal
          </Heading>
          <Text asChild size="3" align="center" color="gray" className="mt-4 max-w-xl mx-auto">
            <p>The tools and technologies I use to build modern web experiences.</p>
          </Text>
        </AnimatedElement>
        
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <AnimatedElement key={skill.name} delay={index * 50}>
              <Card className="group h-full border border-border shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)]" size="2" variant="surface">
                <Flex direction="column" align="center" justify="center" gap="3" className="text-center">
                  <div className="relative h-16 w-16">
                    <Image
                      src={skill.icon}
                      alt={`${skill.name} icon`}
                      width={64}
                      height={64}
                      className="transition-all duration-300"
                    />
                  </div>
                  <Text size="2" weight="medium">{skill.name}</Text>
                </Flex>
              </Card>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
}
