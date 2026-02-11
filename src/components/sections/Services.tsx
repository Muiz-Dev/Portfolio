import { services } from '@/lib/portfolio-data';
import { AnimatedElement } from '../AnimatedElement';
import { Card, Heading, Text, Flex, Box } from '@radix-ui/themes';

export function Services() {
  return (
    <section id="services" className="bg-background">
      <div className="container mx-auto px-4">
        <AnimatedElement>
          <Heading as="h2" size="7" align="center" className="font-headline font-bold">
            What I Do
          </Heading>
          <Text asChild size="3" align="center" color="gray" className="mt-4 max-w-xl mx-auto">
            <p>I help teams design, build, and scale web products that users love.</p>
          </Text>
        </AnimatedElement>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedElement key={index} delay={index * 100}>
              <Card className="h-full group border border-border shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)]" size="3" variant="surface">
                <Flex direction="column" gap="3">
                  <Flex align="center" gap="4">
                    <Box className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border/70 bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                      <service.icon className="h-6 w-6" />
                    </Box>
                    <Heading as="h3" size="4" className="font-headline">
                      {service.title}
                    </Heading>
                  </Flex>
                  <Text size="2" color="gray">{service.description}</Text>
                </Flex>
              </Card>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
}
