'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { BarChart3, Eye } from 'lucide-react';
import { projects } from '@/lib/portfolio-data';
import { AnimatedElement } from '../AnimatedElement';
import { Badge, Button, Card, Flex, Heading, Text } from '@radix-ui/themes';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

export function Projects() {
  return (
    <section id="projects" className="bg-background">
      <div className="container mx-auto px-4">
        <AnimatedElement>
          <Heading as="h2" size="7" align="center" className="font-headline font-bold">
            Featured Projects
          </Heading>
          <Text asChild size="3" align="center" color="gray" className="mt-4 max-w-xl mx-auto">
            <p>Product builds that highlight my focus on UX, data flows, and reliable delivery.</p>
          </Text>
        </AnimatedElement>
        
        <AnimatedElement delay={200} className="mt-16">
          <Carousel opts={{ loop: true }} className="w-full">
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    {project.metrics ? (
                      <Dialog>
                        <DialogTrigger asChild>
                          <Card
                            role="button"
                            tabIndex={0}
                            className="h-full flex flex-col group overflow-hidden p-0 border border-border shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                            size="3"
                            variant="surface"
                          >
                            <div className="relative w-full aspect-video overflow-hidden">
                              <Image
                                src={project.imageUrl}
                                alt={project.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                data-ai-hint={project.imageHint}
                              />
                            </div>
                            <div className="p-6 flex flex-col gap-4 flex-grow">
                              <Heading as="h3" size="5" className="font-headline">{project.title}</Heading>
                              <Text size="2" color="gray">{project.description}</Text>
                              <Flex wrap="wrap" gap="2" className="mt-auto">
                                {project.stack.map((tech) => (
                                  <Badge key={tech} variant="soft" color="violet" radius="full">
                                    {tech}
                                  </Badge>
                                ))}
                              </Flex>
                            </div>
                            <div className="p-6 pt-0 flex flex-wrap gap-3">
                              <Button asChild variant="ghost" size="2" className="btn-outline-brand btn-roomy">
                                <Link
                                  href={project.liveUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={(event) => event.stopPropagation()}
                                >
                                  <Eye className="mr-2 h-4 w-4" /> Live Demo
                                </Link>
                              </Button>
                              <div className="flex items-center gap-2 text-xs text-foreground/60">
                                <BarChart3 className="h-4 w-4" />
                                Tap card for analytics
                              </div>
                            </div>
                          </Card>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl w-[94vw] max-h-[85vh] overflow-y-auto sm:w-full">
                          <DialogHeader className="text-left">
                            <DialogTitle className="font-headline text-2xl">{project.title}</DialogTitle>
                            <DialogDescription>
                              Analytics snapshot ({project.metrics.period}) · {project.metrics.source}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="grid gap-4 md:grid-cols-2">
                            <div className="rounded-2xl border border-border/70 bg-secondary/70 p-4">
                              <Text size="2" weight="medium">Key Outcomes</Text>
                              <div className="mt-3 space-y-2 text-sm text-foreground/80">
                                {project.metrics.overview.map((item) => (
                                  <div key={item.label} className="flex items-center justify-between gap-4">
                                    <span>{item.label}</span>
                                    <span className="font-semibold text-foreground">{item.value}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div className="rounded-2xl border border-border/70 bg-secondary/70 p-4">
                              <Text size="2" weight="medium">Activity Range</Text>
                              <div className="mt-3 space-y-2 text-sm text-foreground/80">
                                {project.metrics.activityRange.map((item) => (
                                  <div key={item.label} className="flex items-center justify-between gap-4">
                                    <span>{item.label}</span>
                                    <span className="font-semibold text-foreground">{item.value}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div className="rounded-2xl border border-border/70 bg-secondary/70 p-4">
                              <Text size="2" weight="medium">Engagement</Text>
                              <div className="mt-3 space-y-2 text-sm text-foreground/80">
                                {project.metrics.engagement.map((item) => (
                                  <div key={item.label} className="flex items-center justify-between gap-4">
                                    <span>{item.label}</span>
                                    <span className="font-semibold text-foreground">{item.value}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div className="rounded-2xl border border-border/70 bg-secondary/70 p-4">
                              <Text size="2" weight="medium">Top Pages</Text>
                              <div className="mt-3 space-y-2 text-sm text-foreground/80">
                                {project.metrics.topPages.map((item) => (
                                  <div key={item.label} className="flex items-center justify-between gap-4">
                                    <span>{item.label}</span>
                                    <span className="font-semibold text-foreground">{item.value}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="rounded-2xl border border-border/70 bg-secondary/70 p-4">
                            <Text size="2" weight="medium">Top Countries</Text>
                            <div className="mt-3 flex flex-wrap gap-2 text-sm">
                              {project.metrics.topCountries.map((country) => (
                                <span key={country} className="rounded-full border border-border/70 px-3 py-1 text-foreground/80">
                                  {country}
                                </span>
                              ))}
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    ) : (
                      <Card className="h-full flex flex-col group overflow-hidden p-0 border border-border shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)]" size="3" variant="surface">
                        <div className="relative w-full aspect-video overflow-hidden">
                          <Image
                            src={project.imageUrl}
                            alt={project.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            data-ai-hint={project.imageHint}
                          />
                        </div>
                        <div className="p-6 flex flex-col gap-4 flex-grow">
                          <Heading as="h3" size="5" className="font-headline">{project.title}</Heading>
                          <Text size="2" color="gray">{project.description}</Text>
                          <Flex wrap="wrap" gap="2" className="mt-auto">
                            {project.stack.map((tech) => (
                              <Badge key={tech} variant="soft" color="violet" radius="full">
                                {tech}
                              </Badge>
                            ))}
                          </Flex>
                        </div>
                        <div className="p-6 pt-0 flex flex-wrap gap-3">
                          <Button asChild variant="ghost" size="2" className="btn-outline-brand btn-roomy">
                            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <Eye className="mr-2 h-4 w-4" /> Live Demo
                            </Link>
                          </Button>
                        </div>
                      </Card>
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="flex left-2 sm:-left-12 bg-background/50 backdrop-blur-sm hover:bg-background/80" />
            <CarouselNext className="flex right-2 sm:-right-12 bg-background/50 backdrop-blur-sm hover:bg-background/80" />
          </Carousel>
        </AnimatedElement>
      </div>
    </section>
  );
}
