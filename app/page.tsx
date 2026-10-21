import Hero from '@/components/sections/Hero';
import StatsStrip from '@/components/sections/StatsStrip';
import WhatWeDo from '@/components/sections/WhatWeDo';
import AiBand from '@/components/sections/AiBand';
import HowWeHelp from '@/components/sections/HowWeHelp';
import WhoWeAre from '@/components/sections/WhoWeAre';
import Trust from '@/components/sections/Trust';
import { LightSection } from '@/components/ui/Layout';
import { pageMetadata } from '@/lib/seo';

// The H1 carries the full "Intelligent systems, built for scale and security"
// line; the title tag leads with the brand and the services people search for,
// because the long version was cut off at 60 characters in the result.
export const metadata = pageMetadata({
  title: 'Symtera Technologies — AI, Cloud & IT Solutions',
  description:
    'We design and deploy enterprise-ready AI systems tailored to complex business challenges, and the software, cloud, security and infrastructure they run on.',
  path: '/',
  absolute: true,
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <LightSection>
        <WhatWeDo />
        <AiBand />
        <HowWeHelp />
        <WhoWeAre />
        <Trust />
      </LightSection>
    </>
  );
}
