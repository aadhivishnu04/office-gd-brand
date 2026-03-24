import { useState } from "react";
import gdBrandCreativeLogoSrc from "../assets/images/brand/gdbrandcreative-logo.svg";
import travelLogoDarkSrc from "../assets/images/brand/travel-logo-dark.png";
import {
  curatedTravelPicks,
  exploreByExperience,
  footerBottomSocialLinks,
  footerDescriptionText,
  footerDesktopBrandText,
  footerDesktopFromText,
  footerDesktopYearText,
  footerGetInTouchItems,
  footerMobileCopyrightText,
  indiaLeft,
  indiaRight,
  legalLinks,
  monthlyGetawaysLeft,
  monthlyGetawaysRight,
  socialLinks,
  travelRethinkWaysLinks,
  visaLeft,
  visaRight
} from "../Data/footerData";
import WhatsAppIcon from "../components/WhatsAppIcon";

const footerBottomIconColors = {
  "fa-whatsapp": "text-[#25D366]",
  "fa-instagram": "text-[#E1306C]",
  "fa-facebook-f": "text-[#1877F2]",
  "fa-x-twitter": "text-white",
  "fa-youtube": "text-[#FF0000]",
  "fa-threads": "text-white",
  "fa-pinterest-p": "text-[#E60023]",
  "fa-linkedin-in": "text-[#0A66C2]"
};

function FooterList({ items, className = "text-sm" }) {
  return (
    <ul className={`space-y-2 ${className}`}>
      {items.map((item) => (
        <li key={item.label}>
          <a href={item.href} target="_self" rel="noopener noreferrer" className="text-white/95 hover:text-[#cccccc]">
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

function FooterHeading({ children }) {
  return <h4 className="mb-4 text-[18px] font-bold text-white">{children}</h4>;
}

function Footer() {
  const [openSection, setOpenSection] = useState(null);

  const mobileSections = [
    { key: "monthly", title: "International Monthly Getaways", items: [...monthlyGetawaysLeft, ...monthlyGetawaysRight] },
    { key: "india", title: "Experience India 2026", items: [...indiaLeft, ...indiaRight] },
    { key: "visa", title: "VISA Process", items: [...visaLeft, ...visaRight] },
    { key: "curated", title: "Curated Travel Picks", items: curatedTravelPicks },
    { key: "explore", title: "Explore By Experience", items: exploreByExperience },
    { key: "trw", title: "Travel Rethink Ways", items: travelRethinkWaysLinks },
    { key: "legal", title: "Legal", items: legalLinks },
    {
      key: "touch",
      title: "Get In Touch",
      items: footerGetInTouchItems.map((item) => ({ label: item.mobileLabel || item.label, href: item.href }))
    },
    { key: "social", title: "Social", items: socialLinks }
  ];

  const toggleSection = (key) => {
    setOpenSection((prev) => (prev === key ? null : key));
  };

  return (
    <footer className="trw-footer mt-12 bg-black text-white [font-family:Poppins,sans-serif]">
      <div className="mx-auto max-w-[1320px] px-4 py-8 text-[18px] md:hidden">
        <div className="mb-5 flex justify-center">
          <img
            src={travelLogoDarkSrc}
            alt="Travel Rethink Ways"
            className="h-auto w-[180px]"
          />
        </div>

        <p className="mb-6 text-center text-[18px] leading-[1.55] text-white">{footerDescriptionText}</p>

        <div className="border-t border-[#1a1a1a]">
          {mobileSections.map((section) => {
            const isOpen = openSection === section.key;
            return (
              <div key={section.key} className="border-b border-[#1a1a1a]">
                <button
                  type="button"
                  onClick={() => toggleSection(section.key)}
                  className="flex w-full items-center justify-between py-4 text-left"
                >
                  <span className="text-[18px] font-[700] leading-none">{section.title}</span>
                  <span className="text-[18px] font-[700] leading-none">{isOpen ? "-" : "+"}</span>
                </button>

                {isOpen && (
                  <ul className="pb-4">
                    {section.items.map((item) => (
                      <li key={`${section.key}-${item.label}`} className="py-1.5">
                        <a
                          href={item.href}
                          target="_self"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-[18px] text-white"
                        >
                          {section.key === "social" && item.icon ? (
                            item.icon === "fa-whatsapp" ? (
                              <WhatsAppIcon className="text-[20px]" />
                            ) : (
                              <i className={`fa-brands ${item.icon} text-[20px]`} />
                            )
                          ) : null}
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-5 border-t border-[#1a1a1a] pt-4 text-center">
          <div className="mb-3 flex items-center justify-center gap-2 text-[11px] text-white">
            <span>{footerMobileCopyrightText}</span>
            <a href="https://gdbrandcreative.com/" target="_self" rel="noopener noreferrer">
              <img
                src={gdBrandCreativeLogoSrc}
                alt="GD Brand Creative"
                className="h-7 w-auto"
              />
            </a>
          </div>

          <div className="flex items-center justify-center gap-4">
            {footerBottomSocialLinks.map((item) => (
              <a key={`mobile-bottom-${item.label}`} href={item.href} target="_self" rel="noopener noreferrer" aria-label={item.label}>
                {item.icon === "fa-whatsapp" ? (
                  <WhatsAppIcon className="text-[20px] text-[#25D366]" />
                ) : (
                  <i className={`fa-brands ${item.icon} text-[20px] ${footerBottomIconColors[item.icon] || "text-white"}`} />
                )}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto hidden max-w-[1320px] px-4 py-14 md:block">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div className="flex justify-center md:justify-start">
            <img
              src={travelLogoDarkSrc}
              alt="Travel Rethink Ways"
              className="h-auto w-[220px] md:w-[300px]"
            />
          </div>
          <p className="max-w-[620px] text-base leading-relaxed text-white/95">{footerDescriptionText}</p>
        </div>

        <div className="my-10 h-px bg-[#292929]" />

        <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-12 xl:grid-cols-4 xl:gap-x-16">
          <section className="xl:col-span-2">
            <FooterHeading>International Monthly Getaways</FooterHeading>
            <div className="grid grid-cols-1 gap-x-16 gap-y-2 sm:grid-cols-2">
              <FooterList items={monthlyGetawaysLeft} />
              <FooterList items={monthlyGetawaysRight} />
            </div>
          </section>

          <section className="xl:col-span-2">
            <FooterHeading>Experience India 2026</FooterHeading>
            <div className="grid grid-cols-1 gap-x-16 gap-y-2 sm:grid-cols-2">
              <FooterList items={indiaLeft} />
              <FooterList items={indiaRight} />
            </div>
          </section>
        </div>

        <div className="my-10 h-px bg-[#292929]" />

        <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-12 xl:grid-cols-4 xl:gap-x-16">
          <section className="xl:col-span-2">
            <FooterHeading>VISA Process</FooterHeading>
            <div className="grid grid-cols-1 gap-x-16 gap-y-2 sm:grid-cols-2">
              <FooterList items={visaLeft} />
              <FooterList items={visaRight} />
            </div>
          </section>

          <section>
            <FooterHeading>Curated Travel Picks</FooterHeading>
            <FooterList items={curatedTravelPicks} className="text-[16px]" />
          </section>

          <section>
            <h4 className="mb-4 text-[18px] font-bold text-white">Explore By Experience</h4>
            <FooterList items={exploreByExperience} />
          </section>
        </div>

        <div className="my-10 h-px bg-[#292929]" />

        <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-12 xl:grid-cols-4 xl:gap-x-16">
          <section>
            <FooterHeading>Travel Rethink Ways</FooterHeading>
            <FooterList items={travelRethinkWaysLinks} />
          </section>

          <section>
            <FooterHeading>Legal</FooterHeading>
            <FooterList items={legalLinks} />
          </section>

          <section>
            <FooterHeading>Get In Touch</FooterHeading>
            <ul className="space-y-3 text-sm text-white/95">
              {footerGetInTouchItems.map((item) => (
                <li key={`desktop-touch-${item.key}`}>
                  <a href={item.href} className="hover:text-[#cccccc]">
                    <i className={`fa-solid ${item.icon} mr-2`} />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <FooterHeading>Social</FooterHeading>
            <ul className="space-y-2 text-sm">
              {socialLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_self"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-white/95 hover:text-[#cccccc]"
                  >
                    {item.icon === "fa-whatsapp" ? (
                      <WhatsAppIcon className="mr-2 h-[14px] w-[14px] shrink-0" />
                    ) : (
                      <i className={`fa-brands ${item.icon} mr-2 w-[14px] shrink-0 text-center`} />
                    )}
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="my-10 h-px bg-[#292929]" />

        <div className="grid grid-cols-1 items-center gap-5 py-2 text-center md:grid-cols-3 md:text-left">
          <div className="text-[14px] font-normal text-white [font-family:Poppins,sans-serif]">{footerDesktopYearText}</div>

          <div className="flex items-center justify-center gap-2 text-[14px] font-normal text-white [font-family:Poppins,sans-serif] md:text-center">
            <span>{footerDesktopBrandText}</span>
            <span>{footerDesktopFromText}</span>
            <a href="https://gdbrandcreative.com/" target="_self" rel="noopener noreferrer">
              <img
                src={gdBrandCreativeLogoSrc}
                alt="GD Brand Creative"
                className="h-8 w-auto"
              />
            </a>
          </div>

          <div className="flex items-center justify-center gap-5 md:justify-end">
            {footerBottomSocialLinks.map((item) => (
              <a key={`desktop-bottom-${item.label}`} href={item.href} target="_self" rel="noopener noreferrer" aria-label={item.label}>
                {item.icon === "fa-whatsapp" ? (
                  <WhatsAppIcon className="text-[16px] text-[#25D366]" />
                ) : (
                  <i className={`fa-brands ${item.icon} text-[16px] ${footerBottomIconColors[item.icon] || "text-white"}`} />
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
