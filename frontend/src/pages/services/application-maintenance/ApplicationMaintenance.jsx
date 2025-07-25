import React from "react";
import HeroSection from "@/components/HeroSection";
import {
  Application,
  ApplicationSupport,
  IntelligentSolutions,
  supportItems,
  apiLogs,
  faqs,
} from "./Data";
import PageLayout from "@/custom/PageLayout";
import { FadeInWhenVisible } from "@/custom/FadeInWhenVisible";
import { FeaturesList } from "@/components/FeaturesList";
import { Button } from "@/components/ui/button";
import { IconRenderer } from "@/custom/IconRenderer";
import { Check } from "lucide-react";
import FaqSection from "@/custom/FaqSection";
import {
  Headline,
  TypographyH4,
  TypographyH3,
  TypographyMuted,
} from "@/custom/Typography";

const ApplicationMaintenance = () => {
  return (
    <>
      {/* === HERO SECTION === */}
      <HeroSection
        backgroundImage="/assets/services/application-maintenanc/banner.jpg"
        title="APPLICATION MAINTENANCE AND SUPPORT SERVICES"
        buttonText="HIRE EXPERT DEVELOPERS"
        buttonLink="#"
        imageFit="cover"
        overlayOpacity={0.6}
      />

      {/* === INTRODUCTION SECTION === */}
      <PageLayout className="py-16">
        <FadeInWhenVisible>
          <Headline
            title="U Technology: Your Comprehensive Solutions Provider"
            description="U Technology brings together the most reliable expertise, processes, technologies, and QA testing specialists to deliver high value-added and agile-aligned QA & software testing solutions that you can trust.."
          />
        </FadeInWhenVisible>

        {/* === APPLICATION MAINTENANCE FEATURES SECTION === */}
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 mt-8 items-center gap-12 space-y-12">
          <div className="space-y-8">
            <Headline title="Application Maintenance Services" />
            <FeaturesList features={Application.slice(0, 3)} />
          </div>

          <FadeInWhenVisible>
            <img
              loading="lazy"
              src="/assets/services/application-maintenanc/experts.jpg"
              alt="Mobile App Devices"
              className="h-96 mx-auto"
            />
          </FadeInWhenVisible>

          <FeaturesList features={Application.slice(3, 6)} />
        </div>

        {/* === CTA BUTTON: APP SUPPORT === */}
        <FadeInWhenVisible className="text-center">
          <Button variant="hover">EXPERT APP SUPPORT</Button>
        </FadeInWhenVisible>
      </PageLayout>

      {/* === APPLICATION SUPPORT SERVICES SECTION === */}
      <PageLayout className="py-16 space-y-10 text-center">
        <Headline
          title="Application Support Servicest"
          description="Applications are long-term investments, and U Technology's Application Support Services encompass technical expertise, software maintenance, extended support, and exceptional customer service, all aimed at keeping your applications running optimally."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeaturesList features={ApplicationSupport.slice(0, 3)} />
          <FeaturesList features={ApplicationSupport.slice(3, 6)} />
        </div>

        {/* === CTA BUTTON: SUPPORT === */}
        <FadeInWhenVisible delay={0.4}>
          <Button variant="hover">GET APPLICATION SUPPORT</Button>
        </FadeInWhenVisible>
      </PageLayout>

      {/* === AI-POWERED INTELLIGENT SOLUTIONS SECTION === */}
      <PageLayout className="py-10 text-center space-y-10">
        <Headline
          title="Elevate Your Applications with Intelligent Solution"
          description="Revolutionize your applications with our AI-powered solutions. Experience the future of application support services, where innovation meets intelligence for unparalleled performance and user satisfaction."
        />

        <FadeInWhenVisible className="space-y-8 grid grid-cols-1 md:grid-cols-3 gap-10">
          <FeaturesList features={IntelligentSolutions.slice(0, 2)} />
          <FeaturesList features={IntelligentSolutions.slice(2, 4)} />
          <FeaturesList features={IntelligentSolutions.slice(4, 6)} />
        </FadeInWhenVisible>

        {/* === CTA BUTTON: AI SUPPORT === */}
        <FadeInWhenVisible>
          <Button variant="hover">GET AI APP SUPPORT</Button>
        </FadeInWhenVisible>
      </PageLayout>

      {/* === BLOCK OF HOURS SUPPORT SECTION === */}
      <PageLayout className="py-16">
        <div className="flex justify-between gap-8 md:flex-row flex-col">
          <Headline
            title="Block of Hours Support Services"
            description="U Technology's team comprises over 2,800 industry-experienced developers with comprehensive domain expertise and technical proficiency. Our commitment to excellence is reflected in the delivery of superior support through flexible and cost-effective Block of Hours support services tailored for various applications.."
            className="text-start"
          />

          <Headline
            title="Technical & Non-Technical Support"
            description="U Technology’s Block of Hours program is a cost-effective alternative to our standard flat-rate support offered to new, current, and past customers. We offer technical and non-technical support services for all software applications. Services are sold per 100 Block of Hours with reduced rates contingent on hours purchased.."
            className="text-start"
          />
        </div>

        {/* === IMAGE + SUPPORT LIST === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
          <FadeInWhenVisible>
            <img
              loading="lazy"
              src="/assets/services/application-maintenanc/support.png"
              alt="Support Dashboard"
              className="mx-auto w-135"
            />
          </FadeInWhenVisible>

          <FadeInWhenVisible className="space-y-4">
            <TypographyH3>BOH Support:</TypographyH3>
            <ul className="space-y-3 text-left">
              {supportItems.map((item, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <Check className="text-orange-500 w-5 h-5 mt-1" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </FadeInWhenVisible>
        </div>
      </PageLayout>

      {/* === TECHNOLOGY LOGO SECTION === */}
      <PageLayout className="py-16 text-center space-y-10">
        <Headline
          title="We’ve Got Custom App Developers With On-Demand Experience"
          description="Our programmers, developers, and engineers are highly proficient..."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left mt-16">
          {apiLogs.map((feature, index) => (
            <div key={index}>
              <TypographyH3>{feature?.title}</TypographyH3>
              <TypographyMuted>{feature?.description}</TypographyMuted>

              <div
                key={index}
                className="flex items-center sm:gap-12 gap-8 mt-8 flex-wrap"
              >
                {feature.logos.map((logo, index) => (
                  <img
                    key={index}
                    loading="lazy"
                    src={`/assets/services/application-development/logos/${logo}.png`}
                    className="h-8 cursor-pointer hover:scale-105 transition-transform"
                    alt={logo}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </PageLayout>

      {/* === FAQ SECTION === */}
      <div className="mb-8">
        <FaqSection faqs={faqs} title="FAQ's" />
      </div>
    </>
  );
};

export default ApplicationMaintenance;
