import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Services } from '@/components/sections/Services';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Contact } from '@/components/sections/Contact';
import { getPortfolioJsonLd } from '@/lib/seo';

export default function Home() {
  const structuredData = getPortfolioJsonLd();
  const structuredDataJson = JSON.stringify(structuredData).replace(/</g, '\\u003c');

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredDataJson }}
      />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
