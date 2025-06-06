import React from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

type BookletData = {
  imageSrc: string;
  title: string;
  href: string;
  alt: string;
};

const MoreInformation: React.FC = () => {
  const t = useTranslations("moreInformation");
  const locale = useLocale();

  // Get appropriate booklet file based on locale
  const getBookletHref = () => {
    switch (locale) {
      case "zh":
        return "/downloads/marketing_booklet_zh.pdf";
      case "zh-TW":
        return "/downloads/marketing_booklet_zh_tw.pdf";
      default:
        return "/downloads/marketing_booklet_en.pdf";
    }
  };

  const booklets: BookletData[] = [
    {
      imageSrc: "/images/booklet.jpg",
      title: t("booklets.booklet"),
      href: getBookletHref(),
      alt: "Landseed Booklet - Unlock Your Backyard Potential",
    },
    {
      imageSrc: "/images/technical-booklet.svg",
      title: t("booklets.technicalBooklet"),
      href: "/downloads/landseed-technical-booklet.pdf",
      alt: "Landseed Technical Booklet with specifications and details",
    },
  ];

  return (
    <div className="w-full py-20">
      <div className="mx-auto">
        {/* Heading section */}
        <div className="absolute mb-1 w-[709px] h-[162px] bg-orange-moreinfo opacity-60 z-0"></div>
        <div className="relative mb-10 w-[709px] h-[162px] z-10">
          <h3 className="font-heading text-base tablet:text-lg desktop:text-xl text-secondary-light mb-3 pl-10 pt-10">
            {t("subtitle")}
          </h3>
          <h2 className="font-heading text-2xl tablet:text-3xl desktop:text-4xl text-primary pl-10">
            {t("title")}
          </h2>
        </div>

        {/* Booklets container */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24 max-w-5xl mx-auto">
          {booklets.map((booklet, index) => (
            <div key={index} className="flex flex-col items-center">
              <Link
                href={booklet.href}
                className="block hover:opacity-95 transition-opacity focus:outline-none"
              >
                <div className="w-64 md:w-78 h-80 md:h-96 mb-4">
                  <img
                    src={booklet.imageSrc}
                    alt={booklet.alt}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <p className="text-center text-lg text-gray-700 font-medium mt-4">
                  {booklet.title}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoreInformation;
