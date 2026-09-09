import Hero from '@/components/sections/Hero';
import StatsStrip from '@/components/sections/StatsStrip';
import WhatWeDo from '@/components/sections/WhatWeDo';
import AiBand from '@/components/sections/AiBand';
import HowWeHelp from '@/components/sections/HowWeHelp';
import WhoWeAre from '@/components/sections/WhoWeAre';
import Trust from '@/components/sections/Trust';
import { LightSection } from '@/components/ui/Layout';

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
