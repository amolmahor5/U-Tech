import { Headline } from "@/custom/Typography";
import PageLayout from "@/custom/PageLayout";
import { FeaturesList } from "@/components/FeaturesList";
import { Button } from '@/components/ui/button';
import FaqSection from "@/custom/FaqSection";
import HeroSection from "@/components/HeroSection";
import TechnologyStatCard from "@/components/TechnologyStatCard";
import { FadeInWhenVisible, fadeUp } from "@/custom/FadeInWhenVisible";
import {
  aiEmbeddedSolutions,
  bspSolutions,
  embeddedDevSolutions,
  embeddedSoftwareFaqs,
  frontendTech,
  hmiSolutions,
  industrySolutions,
  robustSolutions
} from "./Data";

const EmbeddedSoftware = () => {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <HeroSection
        backgroundImage='/assets/solutions/embedded-software/banner.jpg'
        title="CUSTOM EMBEDDED SOFTWARE DEVELOPMENT"
        buttonText="GET EMBEDDED SOFTWARE DEVELOPERS"
        buttonLink="#"
        imageFit="cover"
        overlayOpacity={0.2}
      />

      {/* ===== ROBUST SOFTWARE & HARDWARE SOLUTIONS ===== */}
      <PageLayout className="py-12 space-y-10 text-center">
        <Headline
          title="U Technology Provides Top Embedded Software Solutions"
          description="Our embedded software engineers offer turn-key embedded system
            solutions, creating, testing, debugging, and validating solutions
            for various platforms and architectures, utilizing their expertise
            in computer science."
        />
        <div className="mt-16 flex flex-col lg:flex-row items-center justify-center gap-10">
          {/* Left-side image */}
          <FadeInWhenVisible delay={0.2}>
            <img
              loading="lazy"
              src="/assets/solutions/embedded-software/solution.png"
              alt="Tax Preparation"
              className="sm:w-96 w-68"
            />
          </FadeInWhenVisible>

          {/* Right-side feature list */}
          <FeaturesList features={robustSolutions} fadeUp={fadeUp} />
        </div>

        {/* Call to action button */}
        <FadeInWhenVisible>
          <Button variant="hover">
            Get Embedded Software Developers
          </Button>
        </FadeInWhenVisible>
      </PageLayout>

      {/* ===== HMI (Human-Machine Interface) SOLUTIONS ===== */}
      <PageLayout className="py-12 space-y-10 text-center">
        <Headline
          title="Human-Machine Interface (HMI) Development"
          description="We design and integrate cutting-edge custom HMI solutions that
            enable full visibility and control over your embedded systems in
            real-time."
        />
        <div className="mt-16 flex flex-col lg:flex-row items-center justify-center gap-10">
          {/* Left-side feature list */}
          <FeaturesList features={hmiSolutions} fadeUp={fadeUp} />

          {/* Right-side image */}
          <FadeInWhenVisible delay={0.2}>
            <img
              loading="lazy"
              src="/assets/solutions/embedded-software/development.png"
              alt="Tax Preparation"
              className="w-68 sm:w-96"
            />
          </FadeInWhenVisible>
        </div>

        {/* CTA button */}
        <FadeInWhenVisible>
          <Button variant="hover">
            Get Embedded Hmi Solutions
          </Button>
        </FadeInWhenVisible>
      </PageLayout>

      {/* ===== AI-POWERED EMBEDDED SOFTWARE SOLUTIONS ===== */}
      <section className="text-center bg-secondary py-12">
        <PageLayout className="text-center">
          <Headline
            title="AI-Powered Embedded Software Solutions"
            description="We design our AI-powered Embedded solutions to empower your
              business by enhancing efficiency, reliability, and functionality
              through advanced AI integration."
          />
          {/* Two-column grid for AI solution features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
            <FeaturesList features={aiEmbeddedSolutions.slice(0, 2)} />
            <FeaturesList features={aiEmbeddedSolutions.slice(2, 4)} />
          </div>
        </PageLayout>
      </section>

      {/* ===== BOARD SUPPORT PACKAGE (BSP) DEVELOPMENT ===== */}
      <PageLayout className="py-12 space-y-10 text-center">
        <Headline
          title="Board Support Package (BSP) Development"
          description=" We help you customize and optimize your current Linux-based system
            by completing a custom Linux development board support package
            (BSP)."
        />
        <div className="mt-16 flex flex-col lg:flex-row items-center justify-center gap-10">
          {/* Left-side image */}
          <FadeInWhenVisible delay={0.2}>
            <img
              loading="lazy"
              src="/assets/solutions/embedded-software/package.png"
              alt="Tax Preparation"
              className="w-96"
            />
          </FadeInWhenVisible>

          {/* Right-side feature list */}
          <FeaturesList features={bspSolutions} fadeUp={fadeUp} />
        </div>

        {/* CTA button */}
        <FadeInWhenVisible>
          <Button variant="hover">
            Get Embedded Bsp Solutions
          </Button>
        </FadeInWhenVisible>
      </PageLayout>

      {/* ===== EMBEDDED DEVELOPMENT SOLUTIONS SECTION ===== */}
      <section className="bg-secondary py-12 text-center">
        <PageLayout className="space-y-12">
          <Headline
            title="Embedded Development Solutions"
            description="We engineer custom embedded solutions that breathe life into your
              hardware, transforming it into intelligent systems for the
              Internet of Things, industrial automation, and beyond."
          />
          {/* Grid layout for two columns of feature lists */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <FeaturesList features={embeddedDevSolutions.slice(0, 3)} />
            <FeaturesList features={embeddedDevSolutions.slice(3, 6)} />
          </div>

          {/* CTA button */}
          <FadeInWhenVisible>
            <Button variant="hover">
              Get Embedded Solutions
            </Button>
          </FadeInWhenVisible>
        </PageLayout>
      </section>

      {/* ===== INDUSTRY SOLUTIONS ===== */}
      <PageLayout className="py-12 space-y-10 text-center">
        <Headline
          title="Hire Experienced and Dedicated Embedded Software Developers"
          description="We revamp your existing custom embedded hardware or off-the-shelf
            solution, providing end-to-end design from concept to production."
        />
        <div className="mt-16 flex flex-col lg:flex-row items-center justify-center gap-10">
          {/* Left-side features */}
          <FeaturesList features={industrySolutions} fadeUp={fadeUp} />

          {/* Right-side image */}
          <FadeInWhenVisible delay={0.2}>
            <img
              loading="lazy"
              src="/assets/solutions/embedded-software/services.png"
              alt="Tax Preparation"
              className="w-68 sm:w-96"
            />
          </FadeInWhenVisible>
        </div>

        {/* CTA button */}
        <FadeInWhenVisible>
          <Button variant="hover">
            Get Embedded Hmi Solutions
          </Button>
        </FadeInWhenVisible>
      </PageLayout>

      {/* ===== EMBEDDED SOFTWARE DEVELOPER TOOLS ===== */}
      <section className="py-16 bg-secondary">
        <PageLayout>
          <Headline
            title="Embedded Software Developer Tools"
            description="Our expert embedded software engineers have many years of combined
            experience with popular embedded software developer tools."
          />

          {/* Grid of tech cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-10">
            {frontendTech.map((tech, index) => (
              <TechnologyStatCard key={index} tech={tech} />
            ))}
          </div>

        </PageLayout>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <div className="my-16">
        <FaqSection
          faqs={embeddedSoftwareFaqs}
          title="FAQ's"
        />
      </div>
    </>
  );
};

export default EmbeddedSoftware;
