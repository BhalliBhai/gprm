import { HeroSection } from '@/components/sections/home/HeroSection';
import { HowItWorksSection } from '@/components/sections/home/HowItWorksSection';
import { FeaturesSection } from '@/components/sections/home/FeaturesSection';
import { AiBioSection } from '@/components/sections/home/AiBioSection';
import { FinalCtaSection } from '@/components/sections/home/FinalCtaSection';
// import { OpenSourceSection } from '@/components/sections/home/OpenSourceSection';

export default function Home() {

  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      {/* How It Works */}
      <HowItWorksSection />
      {/* Features Section */}
      <FeaturesSection />
      {/* AI-Powered Bio Generator - Spotlight Section */}
      <AiBioSection />
      {/* Open Source Community Section */}
      {/* <OpenSourceSection /> */}
      {/* Final CTA */}
      <FinalCtaSection />
    </>
  );
}
