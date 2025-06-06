import React from "react";
import FeatureCard from "./FeatureCard";
import Image from "next/image";
import { useTranslations } from "next-intl";

// Define icon paths
const iconPaths = {
  housing: "/icons/housing.svg",
  family: "/icons/family.svg",
  rental: "/icons/rental.svg",
  risingCosts: "/icons/risingCosts.png",
  legal: "/icons/legal.png",
  smartGrowth: "/icons/growth.png",
};

export default function BenefitsSection() {
  const t = useTranslations("benefits");

  return (
    <section className="w-full bg-opacity-20 py-8 mobile:py-12 tablet:py-16 overflow-hidden">
      <div className="w-full mx-auto px-4 mobile:px-6 tablet:px-8 max-w-[100%] tablet:max-w-[100%] desktop:max-w-7xl">
        {/* Why Backyard Suites Matter Section */}
        <div className="mb-8 mobile:mb-12 tablet:mb-16 relative">
          <div className="text-center mb-6 mobile:mb-8 tablet:mb-10">
            <p className="text-secondary-light font-heading text-lg mobile:text-xl tablet:text-[24px] font-[400] mb-2">
              {t("whyMatter.subtitle")}
            </p>
            <h2 className="font-heading text-xl mobile:text-2xl tablet:text-3xl desktop:text-[41px] text-primary mb-6 mobile:mb-8 tablet:mb-10 font-[400]">
              {t("whyMatter.title")}
            </h2>
          </div>

          <div className="grid grid-cols-1 tablet:grid-cols-3 gap-6 tablet:gap-8 relative">
            {/* Dots background for Housing Crisis - hidden on mobile */}
            <div className="absolute left-[-38px] bottom-[-38px] z-0 hidden tablet:block">
              <Image
                src="/images/dots.svg"
                width={214}
                height={213}
                alt=""
                aria-hidden="true"
              />
            </div>

            <FeatureCard
              icon={
                <Image
                  src={iconPaths.housing}
                  width={64}
                  height={64}
                  alt="Housing Crisis"
                />
              }
              title={t("whyMatter.features.housingCrisis.title")}
              description={t("whyMatter.features.housingCrisis.description")}
            />

            <FeatureCard
              icon={
                <Image
                  src={iconPaths.family}
                  width={48}
                  height={48}
                  alt="Family Support"
                />
              }
              title={t("whyMatter.features.familySupport.title")}
              description={t("whyMatter.features.familySupport.description")}
            />

            <FeatureCard
              icon={
                <Image
                  src={iconPaths.rental}
                  width={48}
                  height={48}
                  alt="Rental Income"
                />
              }
              title={t("whyMatter.features.rentalIncome.title")}
              description={t("whyMatter.features.rentalIncome.description")}
            />

            <div className="absolute right-[-38px] bottom-[-38px] z-[-1] hidden tablet:block">
              <Image
                src="/images/rectangle.svg"
                width={214}
                height={213}
                alt=""
                aria-hidden="true"
                style={{ height: "auto" }}
              />
            </div>
          </div>
        </div>

        {/* And Why Now Section */}
        <div className="mt-12 mobile:mt-20 tablet:mt-28 relative">
          <div className="text-center mb-6 mobile:mb-8 tablet:mb-10">
            <h2 className="font-heading text-xl mobile:text-2xl tablet:text-3xl desktop:text-[41px] text-primary mb-6 mobile:mb-8 tablet:mb-10 font-[400]">
              {t("whyNow.title")}
            </h2>
          </div>

          <div className="grid grid-cols-1 tablet:grid-cols-3 gap-6 tablet:gap-8 relative">
            {/* Dots background for Rising Costs - hidden on mobile */}
            <div className="absolute left-[-38px] bottom-[-38px] z-0 hidden tablet:block">
              <Image
                src="/images/dots.svg"
                width={214}
                height={213}
                alt=""
                aria-hidden="true"
              />
            </div>

            <FeatureCard
              icon={
                <Image
                  src={iconPaths.risingCosts}
                  width={48}
                  height={48}
                  alt="Rising Costs"
                />
              }
              title={t("whyNow.features.risingCosts.title")}
              description={t("whyNow.features.risingCosts.description")}
            />

            <FeatureCard
              icon={
                <Image
                  src={iconPaths.legal}
                  width={48}
                  height={48}
                  alt="Legal Changes"
                />
              }
              title={t("whyNow.features.legalChanges.title")}
              description={t("whyNow.features.legalChanges.description")}
            />

            <FeatureCard
              icon={
                <Image
                  src={iconPaths.smartGrowth}
                  width={48}
                  height={48}
                  alt="Smart Growth"
                />
              }
              title={t("whyNow.features.smartGrowth.title")}
              description={t("whyNow.features.smartGrowth.description")}
            />
            <div className="absolute right-[-38px] bottom-[-38px] z-[-1] hidden tablet:block">
              <Image
                src="/images/rectangle.svg"
                width={214}
                height={213}
                alt=""
                aria-hidden="true"
                style={{ height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
