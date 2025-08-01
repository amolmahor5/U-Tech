import React from "react";
import { FadeInWhenVisible, fadeUp } from "@/custom/FadeInWhenVisible";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { FeaturesList } from "@/components/FeaturesList";
import PageLayout from "@/custom/PageLayout";
import { FeaturesGrid } from "@/components/FeaturesGridCard";
import FaqSection from "@/custom/FaqSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import {
  TypographyH5,
  TypographyMuted,
  Headline,
  TypographyH3,
} from "@/custom/Typography";
import {
  PymentSoftwareLeftFeatures,
  PymentSoftwareRightFeatures,
  pymentSolutions,
  Pymentlogs,
  gamingPayment,
  testimonials,
  PaymentTransformationFeatures,
  PaymentManagementSolutions,
  PaymentTransformationTerminal,
  Pymentlogsonline,
  featTerminalPayment,
  SoftwareTechnologies,
  BillingSoftware,
  ACHPayment,
  FraudManagement,
  faqs,
  LegalManagement,
} from "./Data";

const Payments = () => {
  return (
    <>
      {/* === Hero Section === */}
      <HeroSection
        backgroundImage="/assets/industries/payments/banner.jpg"
        title="PAYMENTS SOFTWARE SOLUTIONS"
        buttonText="HIRE PAYMENTS DEVELOPERS"
        buttonLink="/payments"
        imageFit="cover"
        overlayOpacity={0.2}
      />

      {/* === Intro with Core Features Grid === */}
      <PageLayout className="text-center py-10">
        <Headline
          title="Get Chetu’s Custom Payments Software Development"
          description="U Tech is a proud leader in providing high-quality, custom payment software solutions using our payments industry experience combined with our extensive knowledge for leveraging best-in-class programming tools and technologies to enable fast, secure, and seamless payment transactions.."
        />
        <FeaturesGrid
          leftFeatures={PymentSoftwareLeftFeatures}
          rightFeatures={PymentSoftwareRightFeatures}
          centerImage="/assets/industries/payments/combo.png"
          fadeUp={fadeUp}
          iconSize={38}
        />
      </PageLayout>

      {/* === Custom Payment Gateway Section === */}
      <section className="bg-secondary py-4">
        <PageLayout className="space-y-8 text-center">
          <Headline
            title="Custom Payment Gateway & Processing Solutions"
            description="We configure and integrate custom payment gateways, processors, and other payment software from industry-leading vendors.."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <FeaturesList fadeUp={fadeUp} features={pymentSolutions} grid />
            <FadeInWhenVisible delay={0.5}>
              <img
                loading="lazy"
                src="/assets/industries/payments/processing.png"
                alt="Portfolio"
                className="w-50 mx-auto"
              />
            </FadeInWhenVisible>
          </div>

          {/* Logos by category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left mt-10">
            {Pymentlogs.map((feature, index) => (
              <div key={index}>
                <TypographyH3>{feature?.title}</TypographyH3>
                <TypographyMuted>{feature?.description}</TypographyMuted>
                <div className="flex items-center sm:gap-10 gap-6 mt-6 flex-wrap">
                  {feature.logos.map((logo, idx) => (
                    <img
                      key={idx}
                      loading="lazy"
                      src={`/assets/industries/payments/images/${logo}.png`}
                      className="h-8 cursor-pointer hover:scale-105 transition-transform"
                      alt={logo}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <FadeInWhenVisible>
            <Button variant="hover">Get Payment Processing Solutions</Button>
          </FadeInWhenVisible>
        </PageLayout>
      </section>

      {/* === AI-Based Payment Solutions === */}
      <PageLayout className="text-center py-10">
        <Headline
          title="AI-Powered Payment Software Solutions"
          description="Our AI-driven payment solutions leverage Machine Learning algorithms to enhance efficiency, automate processes, and optimize transaction routes..."
        />

        <FadeInWhenVisible className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <FeaturesList features={gamingPayment.slice(0, 2)} />
          <FeaturesList features={gamingPayment.slice(2, 4)} />
          <FeaturesList features={gamingPayment.slice(4, 6)} />
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <Button variant="hover">GET FINANCE SOFTWARE SUPPORT</Button>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <TestimonialSection testimonials={testimonials} />
        </FadeInWhenVisible>
      </PageLayout>

      {/* === Mobile Payment Solutions Section === */}
      <section className="bg-secondary py-4">
        <PageLayout className="space-y-8 py-12 text-center">
          <Headline
            title="Mobile Payment Processing Solutions"
            description="We build and seamlessly integrate personalized mobile payment processing and security solutions..."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
            <FadeInWhenVisible>
              <img
                loading="lazy"
                src="/assets/industries/legal/automation.png"
                alt="Financial Planning Dashboard"
                className="w-60 mx-auto hidden sm:block"
              />
            </FadeInWhenVisible>
            <div className="text-start space-y-4">
              <TypographyH5>Mobile & Online Payment Processing</TypographyH5>
              <TypographyMuted>
                We provide native, web, and hybrid payment application
                solutions...
              </TypographyMuted>
              <FeaturesList
                features={PaymentTransformationFeatures}
                fadeUp={fadeUp}
              />
            </div>
          </div>
          <FadeInWhenVisible>
            <Button variant="hover">Get Mobile Payment Solutions</Button>
          </FadeInWhenVisible>
        </PageLayout>
      </section>

      {/* === Online Payment Software Section === */}
      <PageLayout className="space-y-8 text-center">
        <Headline
          title="Custom Online Payment Software Solutions"
          description="Our developers create customized online payment systems and security modules..."
        />
        <div className="flex flex-col sm:flex-row justify-baseline gap-8 md:gap-26">
          <FeaturesList
            features={PaymentManagementSolutions.slice(0, 2)}
            fadeUp={fadeUp}
          />
          <FadeInWhenVisible className="md:block hidden">
            <img
              loading="lazy"
              src="/assets/industries/payments/online.png"
              alt="Mobile Analytics App"
              className="w-230"
            />
          </FadeInWhenVisible>
          <FeaturesList
            features={PaymentManagementSolutions.slice(2, 4)}
            fadeUp={fadeUp}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left mt-10">
          {Pymentlogsonline.map((feature, index) => (
            <div key={index}>
              <TypographyH3>{feature?.title}</TypographyH3>
              <TypographyMuted>{feature?.description}</TypographyMuted>
              <div className="flex items-center sm:gap-10 gap-6 mt-6 flex-wrap">
                {feature.logos.map((logo, idx) => (
                  <img
                    key={idx}
                    loading="lazy"
                    src={`/assets/industries/payments/imagesonline/${logo}.png`}
                    className="h-8 cursor-pointer hover:scale-105 transition-transform"
                    alt={logo}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <FadeInWhenVisible>
          <Button variant="hover">Get Online Payment Solutions</Button>
        </FadeInWhenVisible>
      </PageLayout>

      {/* === POS Solutions === */}
      <section className="bg-secondary py-4">
        <PageLayout className="space-y-8 py-12 text-center">
          <Headline
            title="Point of Sale (POS) Software Solutions"
            description="Our development experts create custom point of sale (POS) solutions..."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
            <div className="text-start space-y-4">
              <TypographyH5>Custom Mobile Payment Solutions</TypographyH5>
              <TypographyMuted>
                We engineer secure, simple, and PCI-compliant mobile POS
                solutions...
              </TypographyMuted>
              <FeaturesList features={featTerminalPayment} fadeUp={fadeUp} />
            </div>
            <FadeInWhenVisible>
              <img
                loading="lazy"
                src="/assets/industries/payments/pos.png"
                alt="Payment Planning Dashboard"
                className="w-130 mx-auto hidden sm:block"
              />
            </FadeInWhenVisible>
          </div>
          <FadeInWhenVisible>
            <Button variant="hover">Get Pos Solutions</Button>
          </FadeInWhenVisible>
        </PageLayout>
      </section>

      {/* === POS Terminal Software Section === */}
      <PageLayout className="space-y-8 py-12 text-center">
        <Headline
          title="Online Payment Terminal Solutions"
          description="We provide comprehensive custom POS terminal solutions..."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
          <FadeInWhenVisible className="md:block hidden">
            <img
              loading="lazy"
              src="/assets/industries/payments/terminal.png"
              alt="Terminal Solutions"
              className="w-130 mx-auto hidden sm:block"
            />
          </FadeInWhenVisible>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-start">
            {PaymentTransformationTerminal.map((feature, idx) => (
              <div
                key={idx}
                className={`rounded-md shadow border p-4 ${fadeUp}`}
              >
                {feature.img && (
                  <img
                    src={`/assets/industries/payments/Terminals/${feature.img}.png`}
                    alt={feature.title}
                    className="w-30 h-14 object-contain"
                    loading="lazy"
                  />
                )}
                <TypographyH5 className="text-start">
                  {feature.title}
                </TypographyH5>
                <TypographyMuted className="max-w-md">
                  {feature.description}
                </TypographyMuted>
              </div>
            ))}
          </div>
        </div>
        <FadeInWhenVisible>
          <Button variant="hover">Get Pos Terminal Solutions</Button>
        </FadeInWhenVisible>
      </PageLayout>

      {/* === EMV Chip Software Section === */}
      <section className="bg-secondary py-4">
        <PageLayout className="space-y-8 py-12 text-center">
          <Headline
            title="Custom EMV Software Solutions"
            description="Our developers customize EMV chip software technologies..."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
            <div className="text-start space-y-4">
              <TypographyH5>EMV Chip Software Technologies</TypographyH5>
              <TypographyMuted>
                We provide a comprehensive broad range of custom EMV software...
              </TypographyMuted>
              <FeaturesList features={SoftwareTechnologies} fadeUp={fadeUp} />
            </div>
            <FadeInWhenVisible>
              <img
                loading="lazy"
                src="/assets/industries/payments/customm.png"
                alt="EMV Dashboard"
                className="w-130 mx-auto hidden sm:block"
              />
            </FadeInWhenVisible>
          </div>
          <FadeInWhenVisible>
            <Button variant="hover">Get Emv Solutions</Button>
          </FadeInWhenVisible>
        </PageLayout>
      </section>

      {/* === Billing Software Section === */}
      <PageLayout className="space-y-8 py-12 text-center">
        <Headline
          title="Custom Billing Software Solutions"
          description="We create end-to-end custom automatic billing software platforms..."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
          <FadeInWhenVisible>
            <img
              loading="lazy"
              src="/assets/industries/payments/billing.gif"
              alt="Billing Dashboard"
              className="w-50 mx-auto hidden sm:block"
            />
          </FadeInWhenVisible>
          <div className="text-start space-y-4">
            <TypographyH5>Custom Payments & Billing Software</TypographyH5>
            <TypographyMuted>
              We build custom-tailored payment and billing platforms...
            </TypographyMuted>
            <FeaturesList features={BillingSoftware} fadeUp={fadeUp} />
          </div>
        </div>
        <FadeInWhenVisible>
          <Button variant="hover">Get Billing Solutions</Button>
        </FadeInWhenVisible>
      </PageLayout>

      {/* === ACH & Check 21 Section === */}
      <section className="bg-secondary py-4">
        <PageLayout className="space-y-8 py-12 text-center">
          <Headline
            title="ACH Payment Processing & Check 21 Solutions"
            description="We customize ACH payments and provide check 21 software solutions..."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
            <div className="text-start space-y-4">
              <TypographyH5>ACH Payments & Check 21 Software</TypographyH5>
              <TypographyMuted>
                We seamlessly integrate eCheck processing functionalities...
              </TypographyMuted>
              <FeaturesList features={ACHPayment} fadeUp={fadeUp} />
            </div>
            <FadeInWhenVisible>
              <img
                loading="lazy"
                src="/assets/industries/payments/achprocessing.png"
                alt="ACH Dashboard"
                className="w-50 mx-auto hidden sm:block"
              />
            </FadeInWhenVisible>
          </div>
          <FadeInWhenVisible>
            <Button variant="hover">Get Ach & Check Solutions</Button>
          </FadeInWhenVisible>
        </PageLayout>
      </section>

      {/* === Fraud Management Section === */}
      <PageLayout className="space-y-8 py-12 text-center">
        <Headline
          title="Fraud Management Solutions"
          description="We deliver custom fraud management solutions..."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
          <div className="text-start space-y-4">
            <TypographyH5>Fraud Protection & Prevention</TypographyH5>
            <TypographyMuted>
              We configure intelligent fraud protection and detection
              software...
            </TypographyMuted>
            <FeaturesList features={FraudManagement} fadeUp={fadeUp} />
          </div>
          <FadeInWhenVisible>
            <img
              loading="lazy"
              src="/assets/industries/payments/management.png"
              alt="Fraud Prevention"
              className="w-70 mx-auto hidden sm:block"
            />
          </FadeInWhenVisible>
        </div>
        <FadeInWhenVisible>
          <Button variant="hover">Get Fraud Protection</Button>
        </FadeInWhenVisible>
      </PageLayout>

      {/* === Software Support Section === */}
      <section className="bg-secondary py-4">
        <PageLayout className="text-center space-y-6 py-4">
          <Headline
            title="Payment Software Support Services"
            description="At U Tech, we provide comprehensive payment software support services..."
          />
          <FadeInWhenVisible className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <FeaturesList features={LegalManagement.slice(0, 2)} />
            <FeaturesList features={LegalManagement.slice(2, 4)} />
            <FeaturesList features={LegalManagement.slice(4, 6)} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <Button variant="hover">GET PAYMENT SOFTWARE SUPPORT</Button>
          </FadeInWhenVisible>
        </PageLayout>
      </section>

      {/* === Compliance Highlight Section === */}
      <PageLayout className=" py-3">
        <div className="max-w-5xl mx-auto text-center px-4">
          <TypographyH3 className="text-teal-600 uppercase font-bold">
            We Ensure You a 100% Compliance With PCI & EMV!
          </TypographyH3>
          <TypographyMuted className="mt-4 text-base sm:text-lg text-black">
            U Tech's Payments software development experts ensure your software
            complies with consumer protection standards...
          </TypographyMuted>
        </div>
      </PageLayout>

      {/* === FAQ Section === */}
      <div className="mb-16 mt-2">
        <FaqSection faqs={faqs} title="FAQ's" />
      </div>
    </>
  );
};

export default Payments;
