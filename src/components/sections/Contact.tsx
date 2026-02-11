import { Mail, Phone, MapPin } from 'lucide-react';
import { personalData } from '@/lib/portfolio-data';
import { AnimatedElement } from '../AnimatedElement';
import { ContactForm } from './ContactForm';
import { Heading, Text } from '@radix-ui/themes';

export function Contact() {
  return (
    <section id="contact" className="bg-secondary">
      <div className="container mx-auto px-4">
        <AnimatedElement>
          <Heading as="h2" size="7" align="center" className="font-headline font-bold">
            Get In Touch
          </Heading>
          <Text asChild size="3" align="center" color="gray" className="mt-4 max-w-xl mx-auto">
            <p>Have a project in mind? Tell me about your product, users, and timeline.</p>
          </Text>
        </AnimatedElement>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          <AnimatedElement delay={200}>
            <div className="space-y-8">
              <Heading as="h3" size="5" className="font-headline font-bold">
                Contact Information
              </Heading>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border/70 bg-primary/10 text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <Text asChild weight="medium">
                    <h4>Email</h4>
                  </Text>
                  <Text asChild size="2" color="gray">
                    <a href={`mailto:${personalData.email}`} className="hover:text-primary transition-colors">
                      {personalData.email}
                    </a>
                  </Text>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border/70 bg-primary/10 text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <Text asChild weight="medium">
                    <h4>Phone</h4>
                  </Text>
                  <Text asChild size="2" color="gray">
                    <p>{personalData.phone}</p>
                  </Text>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border/70 bg-primary/10 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <Text asChild weight="medium">
                    <h4>Location</h4>
                  </Text>
                  <Text asChild size="2" color="gray">
                    <p>{personalData.location}</p>
                  </Text>
                </div>
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement delay={400}>
             <div className="space-y-8">
              <Heading as="h3" size="5" className="font-headline font-bold">
                Send Me a Message
              </Heading>
              <ContactForm />
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
}
