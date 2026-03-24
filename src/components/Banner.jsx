import React, { useState, useEffect } from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import arrow from "../assets/rethink-ways-travel-arrow.svg";

import slide1 from "../assets/rethink-ways-best-travel-deals-2026.webp";
import slide2 from "../assets/rethink-ways-maldives-honeymoon-banner.webp";
import slide3 from "../assets/rethink-ways-30-best-places-india.webp";
import slide4 from "../assets/rethink-ways-India-travel-deals-2026.webp";
import slide5 from "../assets/rethink-ways-visa-free-thailand.webp";

const slides = [
  { image: slide1, title: "Best Travel Deals 2026: International Vacation Offers| Travel Rethink Ways", tag: "INDIA 2026", link: "https://travel.rethinkways.com/international-travel-deals-2026/" },
  { image: slide2, title: "Maldives Honeymoon Guide: Dreamy Escapes for Every Couple | Travel Rethink Ways", tag: "VISA FREE", link: "https://travel.rethinkways.com/maldives-honeymoon/" },
  { image: slide3, title: "30 Best Places to Visit in April in India 2026 | Travel Rethink Ways", tag: "FAMILY GETAWAYS", link: "https://travel.rethinkways.com/30-best-places-to-visit-in-april-in-india/" },
  { image: slide4, title: "India Travel Deals 2026: Top Domestic Vacation Offers| Travel Rethink Ways", tag: "HILL STATIONS", link: "https://travel.rethinkways.com/india-travel-deals-2026/" },
  { image: slide5, title: "Visa-Free Thailand for Indians 2026: 60+30 Days Stay, TDAC Guide & Latest Extension", tag: "BEACHES", link: "https://travel.rethinkways.com/thailand-visa-free-entry-for-indians-tdac/" },
];

const PROMOS = [
  { headline: "Top Travel Deals for International Trips 2026", sub: "Smart travel deals that save time, money & effort.", cta: "Grab the Deals" },
  { headline: "The Perfect Maldives Honeymoon Awaits for You", sub: "Wake up over the ocean, dine under the stars and unwind together.", cta: "Escape to Maldives" },
  { headline: "Your Perfect April Getaway Starts Across Incredible India", sub: "Handpicked destinations across India for the perfect April escape.", cta: "View All Places" },
  { headline: "India Getaways with Smart Travel Deals", sub: "Get the best value on trips across India without the hassle.", cta: "Start Planning" },
  { headline: "Visa Free Thailand Travel for Indians 2026", sub: "Complete guide to Thailand visa free entry rules and stay details.", cta: "Read Full Guide" },
];

const StaticPill = ({ label, href }) => (
  <a href={href} onClick={(e) => e.stopPropagation()}
    className="group/pill inline-flex items-center gap-3 h-[44px] px-5 rounded-full bg-[#D02525] border-2 border-[#D02525] text-white text-[14px] font-semibold transition-colors duration-300 group-hover:bg-black group-hover:border-[#D02525]"
    style={{ fontFamily: "Poppins, sans-serif" }}>
    <img src={arrow} alt="" className="w-[18px] h-[18px] rotate-[-45deg] brightness-0 invert transition-transform duration-300 group-hover:rotate-0" />
    {label}
  </a>
);

export default function Banner({ darkMode }) {
  const [bookmark, setBookmark] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, []);

  const { title, tag, link } = slides[active];
  const promo = PROMOS[active];
  const headline = promo?.headline ?? title;
  const sub      = promo?.sub ?? null;
  const cta      = promo?.cta ?? "READ MORE";

  const stopProp = (e) => { e.preventDefault(); e.stopPropagation(); };

  return (
    <div className={`w-full sm:max-w-[1548px] mx-auto px-0 sm:px-4 lg:px-6 lg:mt-[4px] transition-colors duration-300 ${darkMode ? "bg-[#0a0a0a]" : "bg-white"}`}>

      {/* MOBILE — div instead of <a> to avoid nested anchor error */}
      <div className="block md:hidden cursor-pointer" onClick={() => window.location.href = link}>
        <div className="relative w-full h-[350px] overflow-hidden">
          {slides.map((s, i) => (
            <img
  key={i}
  src={s.image}
  alt={s.title}
  width="1600"
  height="900"
  loading={i === active ? "eager" : "lazy"}
  fetchpriority={i === active ? "high" : "auto"}
  decoding="async"
  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
    i === active ? "opacity-100 z-10" : "opacity-0 z-0"
  }`}
/>
          ))}
          <span className="absolute top-0 left-0 bg-[#D02525] text-white text-[12px] font-semibold uppercase px-3 py-[4px] z-20 tracking-wider">{tag}</span>
          <button onClick={(e) => { stopProp(e); setBookmark(!bookmark); }}
            className="absolute top-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center text-red-600 shadow-md z-20">
            {bookmark ? <FaBookmark /> : <FaRegBookmark />}
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-[10px] z-20">
            {slides.map((_, i) => (
              <button key={i} onClick={(e) => { stopProp(e); setActive(i); }}
                className={`w-[9px] h-[9px] rounded-full border border-white transition-colors duration-300 ${i === active ? "bg-white" : "bg-transparent"}`} />
            ))}
          </div>
        </div>
        {/* fixed-height caption — darkMode aware, button pinned to bottom */}
        <div
          className="px-4 pt-5 pb-5"
          style={{
            height: "240px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            overflow: "hidden",
            backgroundColor: darkMode ? "#1a1a1a" : "#f2f2f2",
          }}
        >
          <h1
            className="text-[26px] leading-[1.35] font-['Yeseva_One'] text-center w-full mb-2"
            style={{ flexShrink: 0, color: darkMode ? "#ffffff" : "#1a1a1a" }}
          >
            {headline}
          </h1>
          {sub && (
            <p
              className="text-[14px] leading-[1.5] text-center w-full"
              style={{
                fontFamily: "Poppins, sans-serif",
                flexShrink: 0,
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                color: darkMode ? "#aaaaaa" : "#5B5F62",
              }}
            >
              {sub}
            </p>
          )}
          <div className="mt-auto"><StaticPill label={cta} href={link} /></div>
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:block relative group">
        <a href={link} className="block">
          <div className="relative w-full h-[560px] lg:h-[750px] rounded-[16px] shadow-lg" style={{ isolation: "isolate" }}>
            <div className="absolute inset-0 overflow-hidden rounded-[16px]">
              {slides.map((s, i) => (
                <img key={i} src={s.image} alt={s.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${i === active ? "opacity-100 z-10" : "opacity-0 z-0"}`} />
              ))}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/0" />
              <span className="absolute top-0 tracking-wider left-10 bg-red-500 text-white text-[14px] font-semibold uppercase px-2 py-[3px] z-20">{tag}</span>
              <button onClick={(e) => { stopProp(e); setBookmark(!bookmark); }}
                className="absolute top-6 right-6 w-10 h-10 bg-white rounded-full flex items-center justify-center text-red-600 shadow-md z-20">
                {bookmark ? <FaBookmark /> : <FaRegBookmark />}
              </button>
            </div>

            <div className="absolute left-10 top-1/2 -translate-y-1/2 max-w-[820px] text-white z-30 pointer-events-none">
              <h1 className="text-[42px] lg:text-[58px] leading-[1.2] font-['Yeseva_One'] mb-4">{headline}</h1>
              {sub && <p className="text-[30px] lg:text-[24px] text-white/85 leading-[1.5] mb-6" style={{ fontFamily: "Poppins, sans-serif" }}>{sub}</p>}
              <div style={{ pointerEvents: "auto" }}><StaticPill label={cta} href={link} /></div>
            </div>

            <div className="flex flex-col gap-3 absolute right-5 top-1/2 -translate-y-1/2 z-20">
              {slides.map((_, i) => (
                <button key={i} onClick={(e) => { stopProp(e); setActive(i); }}
                  className={`w-[10px] h-[10px] rounded-full border border-white ${i === active ? "bg-white" : "bg-transparent"}`} />
              ))}
            </div>
          </div>
        </a>
      </div>

    </div>
  );
}
