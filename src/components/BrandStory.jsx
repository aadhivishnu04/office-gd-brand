import { useState } from "react";
import brandImage from "../assets/rethink-ways-brand-story.webp";

import arrow from "../assets/rethink-ways-travel-arrow.svg";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";

const ExpandBtn = ({ href }) => (
  <a
    href={href}
    onClick={(e) => e.stopPropagation()}
    className="inline-flex items-center gap-3 h-[44px] px-5 rounded-full bg-[#D02525] border-2 border-[#D02525] text-white text-[14px] font-semibold transition-colors duration-300 group-hover:bg-black group-hover:border-[#D02525]"
    style={{ fontFamily: "Poppins, sans-serif" }}
  >
    <img
      src={arrow}
      alt=""
      aria-hidden="true"
      className="w-[18px] h-[18px] rotate-[-45deg] brightness-0 invert transition-transform duration-300 group-hover:rotate-0"
    />
    READ MORE
  </a>
);

// Mobile pill button
const MobilePill = ({ href }) => (
  <a
    href={href}
    className="inline-flex items-center gap-3 h-[44px] px-5 rounded-full bg-[#D02525] border-2 border-[#D02525] text-white text-[14px] font-semibold"
    style={{ fontFamily: "Poppins, sans-serif" }}
  >
    <img src={arrow} alt="" className="w-[18px] h-[18px] rotate-[-45deg] brightness-0 invert" />
    READ MORE
  </a>
);

export default function BrandStory({ darkMode }) {
  const [bookmark, setBookmark] = useState(false);

  const link    = "https://travel.rethinkways.com/tourist-360-maldives-honeymoon-specialist/";
  const tagLink = "https://travel.rethinkways.com/category/brand-story/";

  const headline = "The Tourist 360: A Luxury Maldives Honeymoon Specialist in South India";
  const sub      = "Discover how Tourist 360 crafts dream honeymoons in the Maldives for couples across South India.";

  return (
    <section className="w-full md:max-w-[1532px] mx-auto px-0 md:px-4">

      {/* Header */}
      <div className="flex items-center justify-between mb-6 md:mb-10 px-4 md:px-0">
        <div className="flex items-center gap-3">
          <div className="w-[3px] h-[26px] md:h-[36px] bg-red-600" />
          <h2 className={`text-[20px] md:text-[36px] font-medium font-[Poppins] ${darkMode ? "text-white" : "text-black"}`}>
            Brand Story
          </h2>
        </div>

        <button className={`group flex items-center justify-center gap-2 w-[36px] h-[36px] md:w-[148px] md:h-[44px] rounded-full bg-red-600 text-white text-[13px] md:text-[14px] font-semibold border-2 border-red-600 transition-all duration-300 ${
          darkMode ? "hover:bg-white hover:text-black hover:border-black" : "hover:bg-black hover:border-red-600"
        }`}>
          <span className="hidden md:inline">VIEW ALL</span>
          <img
            src={arrow}
            alt=""
            aria-hidden="true"
            className={`w-[14px] h-[14px] md:w-[16px] md:h-[16px] transition-all duration-300 ease-out rotate-[-45deg] group-hover:rotate-0 group-hover:translate-x-[3px] brightness-0 invert ${darkMode ? "group-hover:[filter:none]" : ""}`}
          />
        </button>
      </div>

      {/* ══════════════ MOBILE ══════════════ */}
      <div className="block md:hidden">
        <div className="relative w-full overflow-hidden rounded-md">
          <img
            src={brandImage}
            alt="Tourist 360 luxury Maldives honeymoon specialist brand story banner"
            className="w-full h-[350px] object-cover object-top"
          />
          <a href={tagLink}>
            <span className="absolute top-0 left-[11px] bg-red-600 text-white text-[10px] px-2 py-1 uppercase font-semibold tracking-wider z-20">
              BRAND STORY
            </span>
          </a>
          <div
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setBookmark(!bookmark); }}
            role="button"
            aria-label={bookmark ? "Remove bookmark" : "Add bookmark"}
            className="absolute top-[10px] right-[10px] bg-white w-[30px] h-[30px] rounded-full flex items-center justify-center shadow cursor-pointer z-20"
          >
            {bookmark ? <FaBookmark className="text-red-600 text-[12px]" /> : <FaRegBookmark className="text-red-600 text-[12px]" />}
          </div>
        </div>

        <div className={`px-4 pt-5 pb-6 ${darkMode ? "bg-[#0a0a0a]" : "bg-white"}`}>
          <h1 className={`text-[28px] leading-[1.35] font-['Yeseva_One'] text-center mb-2 ${darkMode ? "text-white" : "text-[#1a1a1a]"}`}>
            {headline}
          </h1>
          <p className={`text-[14px] text-center mb-4 ${darkMode ? "text-gray-400" : "text-[#5B5F62]"}`} style={{ fontFamily: "Poppins, sans-serif" }}>
            {sub}
          </p>
          <div className="flex justify-center mt-3">
            <MobilePill href={link} />
          </div>
        </div>
      </div>

      {/* ══════════════ DESKTOP ══════════════ */}
      <div className="hidden md:block relative group">
        <a href={link} className="block">
          <div className="relative w-full h-[560px] lg:h-[750px] rounded-[16px] shadow-lg overflow-hidden">

            {/* image */}
            <img
              src={brandImage}
              alt="Tourist 360 luxury Maldives honeymoon specialist brand story banner"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* light gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-black/0 rounded-[16px]" />

            {/* tag — top-left */}
            <a href={tagLink} onClick={(e) => e.stopPropagation()}>
              <span className="absolute top-0 left-10 bg-red-600 text-white text-[14px] font-semibold uppercase px-2 py-[3px] z-20 tracking-wider">
                BRAND STORY
              </span>
            </a>

            {/* bookmark — top-right */}
            <div
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); setBookmark(!bookmark); }}
              role="button"
              aria-label={bookmark ? "Remove bookmark" : "Add bookmark"}
              className="absolute top-6 right-6 bg-white w-[40px] h-[40px] rounded-full flex items-center justify-center shadow-md cursor-pointer z-20"
            >
              {bookmark ? <FaBookmark className="text-red-600 text-[14px]" /> : <FaRegBookmark className="text-red-600 text-[14px]" />}
            </div>

            {/* text overlay — left aligned, vertically centered */}
            <div className="absolute left-10 top-1/2 -translate-y-1/2 max-w-[820px] text-white z-30">
              <h1 className="text-[42px] lg:text-[58px] leading-[1.2] font-['Yeseva_One'] pointer-events-none">
                {headline}
              </h1>
              {/* button sits directly below the title */}
              <div className="mt-6" style={{ pointerEvents: "auto" }}>
                <ExpandBtn href={link} />
              </div>
            </div>

          </div>
        </a>
      </div>

    </section>
  );
}
