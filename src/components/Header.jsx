import { useEffect, useState } from "react";
import darkLogoSrc from "../assets/images/brand/travel-logo-dark.png";
import gdBrandCreativeLogoSrc from "../assets/images/brand/gdbrandcreative-logo.svg";
import lightLogoSrc from "../assets/images/brand/travel-logo-light.svg";
import headerAdTravel01Src from "../assets/images/ads/header-travel-01.jpg";
import headerAdGdSrc from "../assets/images/ads/header-gd.jpg";
import headerAdTravel02Src from "../assets/images/ads/header-travel-02.jpg";
import {
  headerAdsContent, headerCompanyLinks, headerLinks,
  headerMainMenu, headerMobileCopyrightText,
  headerSocialIconColors, headerTopSocials,
} from "../Data/headerContent";
import WhatsAppIcon from "../components/WhatsAppIcon";

const AD_MAP = { travel01: headerAdTravel01Src, gd: headerAdGdSrc, travel02: headerAdTravel02Src };
const headerAds = headerAdsContent.map((i) => ({ ...i, image: AD_MAP[i.imageKey] || headerAdTravel01Src }));

const getInitialDarkMode = () => {
  if (typeof window === "undefined") return false;
  const s = localStorage.getItem("trw-dark-mode");
  if (s === "1") return true;
  if (s === "0") return false;
  return ["dark","jnews-dark-mode","trw-dark-mode"].some((c) => document.body.classList.contains(c))
    || document.documentElement.classList.contains("trw-dark-mode");
};

const NAV_LINK = "px-4 py-[18px] text-[13px] font-medium uppercase tracking-[0.5px] [font-family:Poppins,Helvetica,Arial,sans-serif] whitespace-nowrap transition-colors";

function Header({ onDarkModeChange }) {
  const [query, setQuery] = useState("");
  const [darkMode, setDarkMode] = useState(getInitialDarkMode);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  const [adIndex, setAdIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const logo = darkMode ? darkLogoSrc : lightLogoSrc;
  const ad = headerAds[adIndex % headerAds.length];
  const navCol = scrolled && !darkMode ? "text-[#222]" : "text-white";

  useEffect(() => {
    ["dark","jnews-dark-mode","trw-dark-mode"].forEach((c) => document.body.classList.toggle(c, darkMode));
    document.documentElement.classList.toggle("trw-dark-mode", darkMode);
    localStorage.setItem("trw-dark-mode", darkMode ? "1" : "0");
    onDarkModeChange?.(darkMode);
  }, [darkMode]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (headerAds.length < 2) return;
    const id = setInterval(() => setAdIndex((p) => (p + 1) % headerAds.length), 3500);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const onSearch = (e) => {
    e.preventDefault();
    window.open(`${headerLinks.searchBase}?s=${encodeURIComponent(query.trim())}`, "_self");
  };

  const DarkToggle = ({ size = "md" }) => (
    <label className="inline-flex cursor-pointer items-center" title={darkMode ? "Dark mode on" : "Dark mode off"}>
      <input type="checkbox" checked={darkMode} onChange={(e) => setDarkMode(e.target.checked)}
        className="sr-only" aria-label={`Dark mode toggle (${darkMode ? "on" : "off"})`} />
      <span className={`relative rounded-full transition-colors duration-300 ${size === "sm" ? "h-6 w-10" : "h-7 w-12"} ${darkMode ? "bg-[#111827]" : "bg-[#d0d0d0]"}`}>
        <span className={`absolute top-[2px] left-[2px] flex items-center justify-center rounded-full bg-white transition-transform duration-300 ${size === "sm" ? `h-5 w-5 ${darkMode ? "translate-x-4" : ""}` : `h-[24px] w-[24px] ${darkMode ? "translate-x-5" : ""}`}`}>
          <i className={`fa-regular text-[11px] ${darkMode ? "fa-sun text-[#f59e0b]" : "fa-moon text-[#888]"}`} />
        </span>
      </span>
    </label>
  );

  const SocialIcon = ({ item, className = "" }) =>
    item.icon === "fa-whatsapp"
      ? <WhatsAppIcon className={className || headerSocialIconColors[item.icon] || "text-[#2a2a2a]"} />
      : <i className={`fa-brands ${item.icon} ${className || headerSocialIconColors[item.icon] || "text-[#2a2a2a]"}`} />;

  return (
    <>
      {/* MOBILE sticky bar */}
      <div className={`sticky top-0 z-50 lg:hidden ${darkMode ? "border-b border-[#2a2a2a] bg-black shadow-[0_1px_8px_rgba(0,0,0,0.35)]" : "border-b border-[#ccc] bg-white shadow-[0_1px_8px_rgba(0,0,0,0.08)]"}`}>
        <div className="relative mx-auto flex h-[76px] max-w-[1350px] items-center justify-between px-4">
          <button type="button" onClick={() => setMobileMenuOpen(true)}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full ${darkMode ? "bg-[#151922] text-white" : "text-black"}`}
            aria-label="Open menu">
            <i className="fa-solid fa-bars text-[26px]" />
          </button>
          <a href={headerLinks.home} target="_self" rel="noopener noreferrer" className="absolute left-1/2 -translate-x-1/2">
            <img src={logo} alt="Travel Rethink Ways Logo" className="h-auto w-[134px]" />
          </a>
          <DarkToggle />
        </div>
      </div>

      {/* MOBILE fullscreen menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[99999] lg:hidden">
          <div className="absolute inset-0 bg-black/30" onClick={() => setMobileMenuOpen(false)} aria-hidden="true" />
          <aside className="relative flex h-full w-full flex-col bg-black text-white">
            <button type="button" onClick={() => setMobileMenuOpen(false)}
              className="absolute top-3 right-3 inline-flex h-8 w-8 items-center justify-center rounded-full text-[28px] leading-none text-white"
              aria-label="Close menu">×</button>

            <div className="px-5 pt-20">
              <form onSubmit={onSearch} className="flex h-[44px] items-center rounded-full border border-[#3a3a3a] bg-black px-4">
                <input value={query} onChange={(e) => setQuery(e.target.value)} type="text" placeholder="Search..."
                  className="h-full w-full border-0 bg-transparent text-[20px] text-white outline-none placeholder:text-[#9a9a9a]" />
                <button type="submit" className="text-white" aria-label="Search">
                  <i className="fa-solid fa-magnifying-glass text-[20px]" />
                </button>
              </form>
            </div>

            <nav className="mt-4 border-y border-[#1f1f1f] px-5 py-2">
              {headerMainMenu.map((item) => (
                <a key={item.label} href={item.href} target="_self" rel="noopener noreferrer"
                  className="block py-[11px] text-[18px] font-[700] uppercase tracking-[0.3px] text-white">{item.label}</a>
              ))}
              <a href={headerLinks.wishlist} target="_self" rel="noopener noreferrer"
                className="block py-[11px] text-[18px] font-[700] uppercase tracking-[0.3px] text-white">Wishlist</a>
              <button type="button" onClick={() => setMobileCompanyOpen((p) => !p)}
                className="flex w-full items-center justify-between py-[11px] text-left text-[18px] font-[700] uppercase tracking-[0.3px]">
                <span className="text-[#e11]">Company</span>
                <i className={`fa-solid fa-angle-${mobileCompanyOpen ? "up" : "down"} text-[24px] text-[#cfcfcf]`} />
              </button>
              {mobileCompanyOpen && (
                <div className="border-t border-[#1f1f1f]">
                  {headerCompanyLinks.map((item, i) => (
                    <a key={`mc-${item.label}`} href={item.href} target="_self" rel="noopener noreferrer"
                      className={`block py-[11px] text-[18px] font-[500] uppercase text-white/80 ${i < headerCompanyLinks.length - 1 ? "border-b border-[#1f1f1f]" : ""}`}>
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </nav>

            <div className="mt-auto px-5 pb-4">
              <div className="mb-3 flex items-center justify-between">
                {headerTopSocials.map((item) => (
                  <a key={`m-${item.icon}`} href={item.href} target="_self" rel="noopener noreferrer" className="text-[24px]">
                    <SocialIcon item={item} />
                  </a>
                ))}
              </div>
              <div className="flex items-center justify-between border-t border-[#1f1f1f] pt-3">
                <p className="text-[15px] text-white/75">{headerMobileCopyrightText}</p>
                <img src={gdBrandCreativeLogoSrc} alt="Brand Creative" className="h-auto w-[120px]" />
              </div>
            </div>
          </aside>
        </div>
      )}

      {/* DESKTOP static */}
      <div className="hidden lg:block">
        <div className="bg-[#212121]">
          <div className="mx-auto flex h-[48px] max-w-[1350px] items-center justify-between px-6">
            <div className="flex items-center gap-[18px]">
              {headerTopSocials.map((item) => (
                <a key={item.icon} href={item.href} target="_self" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-[16px] leading-none text-[#F5F5F5] transition-opacity hover:opacity-60">
                  <SocialIcon item={item} className="h-[16px] w-[16px]" />
                </a>
              ))}
            </div>
            <div className="flex items-center gap-5">
              <form onSubmit={onSearch} className="flex items-center gap-2">
                <input value={query} onChange={(e) => setQuery(e.target.value)} type="text" placeholder="Search..."
                  className="w-[140px] border-0 bg-transparent text-[14px] text-[#F5F5F5] outline-none placeholder:text-[#F5F5F5]/50" />
                <button type="submit" className="text-[#F5F5F5] transition-opacity hover:opacity-60" aria-label="Search">
                  <i className="fa-solid fa-magnifying-glass text-[14px]" />
                </button>
              </form>
              <DarkToggle />
            </div>
          </div>
        </div>

        <div className={`transition-colors duration-300 ${darkMode ? "bg-[#0e0908]" : "bg-white"}`}>
          <div className="mx-auto grid min-h-[80px] max-w-[1350px] grid-cols-[320px_1fr] items-center gap-6 px-6 py-1">
            <a href={headerLinks.home} target="_self" rel="noopener noreferrer">
              <img src={logo} alt="Travel Rethink Ways Logo" className="h-auto w-[250px]" />
            </a>
            <div className="flex items-center gap-3 justify-end">
              <span className={`text-[7px] tracking-[2px] [writing-mode:vertical-rl] [transform:rotate(180deg)] ${darkMode ? "text-white/40" : "text-black/40"}`}>
                SPONSORED AD
              </span>
              <a href={ad.href} target="_self" rel="noopener noreferrer" aria-label={ad.ariaLabel}>
                <img src={ad.image} alt={ad.alt} className="h-[110px] w-[900px] max-w-full rounded-xl object-cover" loading="lazy" decoding="async" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* DESKTOP sticky nav */}
      <div className={`sticky top-0 z-50 hidden lg:block transition-colors duration-300 [font-family:Poppins,sans-serif] ${
        scrolled ? (darkMode ? "bg-[#1a1a1a]" : "bg-white shadow-[0_2px_12px_rgba(0,0,0,0.08)] border-b border-[#e5e5e5]") : "bg-[#212121]"
      }`}>
        <div className="mx-auto max-w-[1350px] px-4">
          <div className="flex h-[54px] items-center">

            <div style={{ width: scrolled ? "148px" : "0px", opacity: scrolled ? 1 : 0, marginRight: scrolled ? "16px" : "0px", flexShrink: 0, overflow: "hidden", transition: "width 300ms ease, opacity 300ms ease, margin 300ms ease" }}>
              <a href={headerLinks.home} target="_self" rel="noopener noreferrer">
                <img src={logo} alt="Travel Rethink Ways Logo" className="h-auto w-[128px] object-contain" />
              </a>
            </div>

            <nav className="flex flex-1 items-center justify-between">
              {headerMainMenu.map((item) => (
                <a key={item.label} href={item.href} target="_self" rel="noopener noreferrer" className={`${NAV_LINK} ${navCol}`}>
                  {item.label}
                </a>
              ))}
              <a href={headerLinks.wishlist} target="_self" rel="noopener noreferrer" className={`flex items-center gap-1.5 ${NAV_LINK} ${navCol}`}>
                <i className="fa-solid fa-heart text-[#f70d28]" /> Wishlist
              </a>
              <div className="group relative">
                <button className={`flex items-center gap-1 ${NAV_LINK} ${navCol}`}>
                  Company <i className="fa-solid fa-angle-down text-[11px]" />
                </button>
                <div className="invisible absolute right-0 z-[60] mt-0 min-w-[200px] shadow-xl opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 bg-white text-black">
                  {headerCompanyLinks.map((item, i) => (
                    <a key={`dc-${item.label}`} href={item.href} target="_self" rel="noopener noreferrer"
                      className={`flex items-center gap-3 px-5 py-[14px] text-[13px] text-black hover:bg-[#f5f5f5] ${i < headerCompanyLinks.length - 1 ? "border-b border-[#eee]" : ""}`}>
                      <i className={`fa-solid ${item.icon} text-[13px]`} /> {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </nav>

            <div style={{ opacity: scrolled ? 1 : 0, width: scrolled ? "auto" : "0px", marginLeft: scrolled ? "16px" : "0px", pointerEvents: scrolled ? "auto" : "none", flexShrink: 0, overflow: "hidden", transition: "width 300ms ease, opacity 300ms ease, margin 300ms ease" }}
              className="flex items-center gap-3">
              <form onSubmit={onSearch} className={`flex h-[34px] items-center gap-2 rounded-full border px-4 ${scrolled && !darkMode ? "border-[#ddd] bg-[#f5f5f5]" : "border-[#444] bg-[#111]"}`}>
                <input value={query} onChange={(e) => setQuery(e.target.value)} type="text" placeholder="Search..."
                  className={`w-[120px] border-0 bg-transparent text-[13px] outline-none ${scrolled && !darkMode ? "text-[#222] placeholder:text-[#999]" : "text-white placeholder:text-white/40"}`} />
                <button type="submit" className={`transition-colors ${scrolled && !darkMode ? "text-[#555] hover:text-[#111]" : "text-white/70 hover:text-white"}`} aria-label="Search">
                  <i className="fa-solid fa-magnifying-glass text-[12px]" />
                </button>
              </form>
              <DarkToggle size="sm" />
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
