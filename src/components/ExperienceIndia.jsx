import { useState } from "react";
import indiaImage from "../assets/rethink-ways-india.jpg";
import arrow from "../assets/rethink-ways-travel-arrow.svg";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";

export default function ExperienceIndia({ darkMode }) {

  const [bookmark, setBookmark] = useState(false);

  const link = "https://travel.rethinkways.com/30-best-places-to-visit-in-april-in-india/";
  const tagLink = "https://travel.rethinkways.com/category/india-2026/";

  return (
    <section className="w-full flex justify-center mb-6">

       <div className="w-full md:max-w-[1500px] mx-auto mb-6 px-0 md:px-4">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-[20px] md:mb-[30px]">

          <div className="flex items-center gap-3">
            <div className="w-[3px] h-[26px] md:h-[32px] bg-red-600"></div>

            <h2 className={`text-[15px] md:text-[36px] font-normal font-[Poppins] ${darkMode ? "text-white" : "text-black"}`}>
              Experience India by Month 2026
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
              className={`w-[14px] h-[14px] md:w-[16px] md:h-[16px] transition-all duration-500 rotate-[-45deg] group-hover:rotate-0 group-hover:translate-x-[3px] ${
                darkMode ? "group-hover:invert" : ""
              }`}
            />
          </button>
        </div>

        {/* CARD */}
        <div className="group grid md:grid-cols-[65%_35%] overflow-hidden md:rounded-[14px]">

          {/* IMAGE */}
          <div className="relative">

            <a href={link}>
              <img
                src={indiaImage}
                alt="Scenic travel destination in India highlighting the best places to visit in April 2026"
                className="w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-auto md:h-[540px] object-cover"
              />
            </a>

            {/* MOBILE TAG (ON IMAGE) */}
            <a
              href={tagLink}
              className="absolute top-2 left-4 md:hidden text-[10px] px-2 py-[4px] bg-[#244B46]/90 backdrop-blur-sm text-white uppercase font-semibold z-20"
            >
              INDIA 2026
            </a>

            {/* MOBILE BUTTON */}
            <a
              href={link}
              className="absolute bottom-[12px] right-4 md:hidden flex items-center gap-2 px-[12px] py-[5px] rounded-full border border-white/70 text-white text-[11px] bg-[#244B46]"
            >
              READ MORE
              <img
                src={arrow}
                alt=""
                aria-hidden="true"
                className="w-[12px] h-[12px] rotate-[-45deg]"
              />
            </a>

          </div>

          {/* CONTENT */}
          <div className="relative bg-[#c2e5df] px-[18px] md:px-[40px] pt-[20px] pb-[40px] md:pt-[50px] md:pb-[80px] flex flex-col justify-center gap-[8px] md:gap-[14px]">

            {/* DESKTOP TAG */}
            <a href={tagLink}>
              <span className="hidden md:block absolute top-0 left-[18px] md:left-10 text-[10px] md:text-[14px] px-2 md:px-3 py-1 bg-[#244B46] text-white uppercase font-semibold">
                INDIA 2026
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
              className="absolute top-[12px] right-[16px] md:top-4 md:right-4 w-[30px] h-[30px] md:w-[36px] md:h-[36px] bg-white rounded-full flex items-center justify-center shadow cursor-pointer"
            >
              {bookmark ? (
                <FaBookmark className="text-red-600 text-[12px] md:text-[14px]" />
              ) : (
                <FaRegBookmark className="text-red-600 text-[12px] md:text-[14px]" />
              )}
            </div>

            {/* TITLE */}
            <a href={link}>
              <h3 className="font-['Yeseva_One'] text-[15px] md:text-[36px] leading-[22px] md:leading-[44px] text-black md:max-w-[420px]">
                30 Best Places to Visit in April in India 2026 | Travel Rethink Ways
              </h3>
            </a>

            {/* DESCRIPTION */}
            <p className="text-[13px] md:text-[20px] leading-[20px] md:leading-[28px] text-[#2f2f2f] md:max-w-[380px] font-[Poppins]">
              April marks the beginning of summer in India but several destinations still offer...
            </p>

            {/* DESKTOP BUTTON */}
            <a href={link} className="hidden md:block absolute bottom-4 right-4 group">
              <div className="relative flex items-center h-[44px] w-[44px] rounded-full bg-[#244b46] text-white overflow-hidden transition-all duration-500 group-hover:w-[150px]">

                <span className="flex items-center justify-center w-[44px] h-[44px]">
                  <img
                    src={arrow}
                    alt=""
                    aria-hidden="true"
                    className="w-[20px] h-[20px] rotate-[-45deg] group-hover:rotate-0 transition-transform duration-500"
                  />
                </span>

                <span className="absolute left-[52px] whitespace-nowrap text-[14px] font-semibold opacity-0 -translate-x-[10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                  READ MORE
                </span>

              </div>
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}
