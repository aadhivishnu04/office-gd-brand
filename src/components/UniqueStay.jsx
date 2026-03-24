import { useState } from "react";
import poolImg from "../assets/rethinkways-blog-boutique-kerala-cover.jpg";
import arrow from "../assets/rethink-ways-travel-arrow.svg";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";

export default function UniqueStay({ darkMode }) {

  const [bookmark, setBookmark] = useState(false);

  const link = "https://travel.rethinkways.com/10-boutique-hotels-in-kerala/";
  const tagLink = "https://travel.rethinkways.com/category/unique-stays/";

  return (

    <section className="w-full md:max-w-[1500px] mx-auto px-0 mb-6 md:px-4">

      {/* Header */}
      <div className="flex items-center justify-between mb-[20px] md:mb-[25px]">

        <div className="flex items-center gap-3">
          <div className="w-[3px] h-[26px] bg-red-700"></div>

          <h2 className={`text-[15px] md:text-[36px] font-normal font-[Poppins] ${darkMode ? "text-white" : "text-black"}`}>
            Unique Stay Stories
          </h2>
        </div>

        <button className={`group flex items-center justify-center gap-2 w-[36px] h-[36px] md:w-[148px] md:h-[44px] rounded-full bg-red-600 text-white text-[11px] md:text-[14px] font-semibold border-2 border-red-600 transition-all duration-300 ${
          darkMode
            ? "hover:bg-white hover:text-black hover:border-black"
            : "hover:bg-black"
        }`}>

          <span className="hidden md:inline">VIEW ALL</span>

          <img
            src={arrow}
            alt=""
            aria-hidden="true"
            className={`w-[14px] h-[14px] md:w-[16px] md:h-[16px] rotate-[-45deg] group-hover:rotate-0 group-hover:translate-x-[3px] transition-all duration-500 ${
              darkMode ? "group-hover:invert" : ""
            }`}
          />

        </button>
      </div>


      {/* OUTER CARD */}
      <div className="relative md:rounded-[12px] overflow-hidden group">

        {/* IMAGE */}
        <div className="relative">

          <a href={link}>
            <img
              src={poolImg}
              alt="Lush pool surrounded by tropical greenery at a boutique hotel in Kerala"
              className="w-full h-[240px] md:h-[540px] object-cover"
            />
          </a>

          {/* MOBILE TAG */}
          <a href={tagLink}>
            <span className="absolute top-0 left-[12px] md:hidden bg-[#5b3dbb] text-white text-[10px] px-[10px] py-[3px] uppercase font-semibold rounded-[3px]">
              UNIQUE STAYS
            </span>
          </a>

          {/* BOOKMARK */}
          <div
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setBookmark(!bookmark);
            }}
            role="button"
            aria-label={bookmark ? "Remove bookmark" : "Add bookmark"}
            className="absolute top-[12px] right-[12px] md:top-4 md:right-4 w-[32px] h-[32px] md:w-[36px] md:h-[36px] bg-white rounded-full flex items-center justify-center shadow cursor-pointer"
          >
            {bookmark ? (
              <FaBookmark className="text-red-600 text-[13px] md:text-[14px]" />
            ) : (
              <FaRegBookmark className="text-red-600 text-[13px] md:text-[14px]" />
            )}
          </div>

          {/* MOBILE BUTTON */}
          <a
            href={link}
            className="absolute bottom-[15px] right-4 md:hidden flex items-center gap-2 px-[14px] py-[6px] rounded-full border border-white/70 text-white text-[12px] bg-[#5b3dbb]"
          >
            READ MORE →
          </a>

        </div>


        {/* CONTENT CARD */}
        <div className="bg-[#F1E4FF] relative px-[16px] py-[16px] md:absolute md:left-[80px] md:top-0 md:w-[520px] md:min-h-[380px] md:p-[32px] md:rounded-b-[12px] overflow-hidden">

          {/* TAG */}
          <a href={tagLink}>
            <span className="hidden md:block absolute top-0 left-[32px] bg-[#5b3dbb] text-white text-[11px] px-[12px] py-[4px] uppercase font-semibold">
              UNIQUE STAYS
            </span>
          </a>

          {/* TITLE */}
          <a href={link}>
            <h3 className="font-['Yeseva_One'] text-[16px] md:text-[40px] leading-[22px] md:leading-[48px] text-black md:mt-[18px]">
              10 Boutique Hotels in Kerala Nature Meets Timeless Charm...
            </h3>
          </a>

          {/* DESCRIPTION */}
          <p className="hidden md:block font-[Poppins] text-[18px] leading-[28px] text-gray-700 mt-[20px] max-w-[420px]">
            Kerala, often called God's Own Country, is more than a destination
            it's an emotion. A place misty hills meet...
          </p>

          {/* DESKTOP BUTTON */}
          <a href={link} className="hidden md:block absolute bottom-4 right-4 group">
            <div className="relative flex items-center h-[44px] w-[44px] rounded-full bg-[#5b3dbb] border-2 text-white overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:w-[150px] group-hover:bg-[5b3dbb]">

              <span className="flex items-center justify-center w-[44px] h-[44px]">
                <img
                  src={arrow}
                  alt=""
                  aria-hidden="true"
                  className="w-[20px] h-[20px] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] rotate-[-45deg] group-hover:rotate-0"
                />
              </span>

              <span className="absolute left-[52px] whitespace-nowrap text-[14px] font-semibold opacity-0 -translate-x-[10px] transition-all duration-[600ms] group-hover:opacity-100 group-hover:translate-x-0">
                READ MORE
              </span>

            </div>
          </a>

        </div>

      </div>

    </section>
  );
}
