import { useState } from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import arrow from "../assets/rethink-ways-travel-arrow.svg";
import img from "../assets/rethinkways-serbia-visa.jpg";

export default function VisaProcess({ darkMode }) {
  const [bookmark, setBookmark] = useState(false);

  const link =
    "https://travel.rethinkways.com/serbia-visa-for-indian-passport-holder-2026/";

  const tagLink = "https://travel.rethinkways.com/category/visa-process/";

  return (
    <section className="w-full md:max-w-[1500px] mx-auto mb-6 px-0 md:px-4">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-[3px] h-[26px] bg-red-600" />

          <h2 className={`text-[15px] md:text-[36px] font-normal font-[Poppins] ${darkMode ? "text-white" : "text-black"}`}>
            VISA Process
          </h2>
        </div>

        <button className={`group flex items-center justify-center gap-2 w-[36px] h-[36px] md:w-[148px] md:h-[44px] rounded-full bg-red-600 text-white text-[11px] md:text-[14px] font-semibold border-2 border-red-600 transition-all duration-300 ${
          darkMode
            ? "hover:bg-white hover:text-black hover:border-black"
            : "hover:bg-black hover:border-red-600"
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

      {/* CARD */}
      <div className="md:rounded-[16px] overflow-hidden group relative">

        {/* IMAGE + MOBILE BUTTON */}
        <div className="relative">
          <a href={link}>
            <img
              src={img}
              alt="Serbia landmarks and cityscape representing the visa guide for Indian passport holders in 2026"
              className="w-full h-[240px] md:h-[540px] object-cover"
            />
          </a>

          {/* MOBILE BUTTON */}
          <a
            href={link}
            className="absolute bottom-3 right-3 md:hidden flex items-center gap-2 px-[14px] py-[6px] rounded-full text-white text-[12px] bg-[#7a5959]"
          >
            READ MORE
            <img
              src={arrow}
              alt=""
              aria-hidden="true"
              className="w-[14px] h-[14px] rotate-[-45deg]"
            />
          </a>
        </div>

        {/* OVERLAY */}
        <div className="hidden md:block absolute inset-0 bg-black/40" />

        {/* TAG */}
        <a href={tagLink}>
          <span className="absolute top-0 left-[12px] md:left-10 text-white text-[11px] bg-[#D02525] px-2 py-1 font-semibold">
            VISA-PROCESS
          </span>
        </a>

        {/* BOOKMARK */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setBookmark(!bookmark);
          }}
          aria-label={bookmark ? "Remove bookmark" : "Add bookmark"}
          className="absolute top-3 right-3 md:top-4 md:right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center text-red-500"
        >
          {bookmark ? <FaBookmark /> : <FaRegBookmark />}
        </button>

        {/* DESKTOP TEXT */}
        <div className="hidden md:block absolute left-10 top-1/2 -translate-y-1/2 text-white max-w-[736px]">
          <a href={link}>
            <h3 className="font-['Yeseva_One'] text-[26px] md:text-[36px] lg:text-[46px] leading-[1.25]">
              Serbia VISA for Indian <br />
              Passport Holders 2026 | Travel Rethink Ways
            </h3>
          </a>
        </div>

        {/* DESKTOP BUTTON */}
        <a href={link} className="hidden md:block absolute bottom-4 right-4 group">
          <div className="relative flex items-center h-[44px] w-[44px] rounded-full bg-red-600 border-2 border-red-600 text-white overflow-hidden transition-all duration-[600ms] group-hover:w-[150px] group-hover:bg-black">
            <span className="flex items-center justify-center w-[44px] h-[44px]">
              <img
                src={arrow}
                alt=""
                aria-hidden="true"
                className="w-[20px] h-[20px] rotate-[-45deg] group-hover:rotate-0"
              />
            </span>

            <span className="absolute left-[52px] whitespace-nowrap text-[14px] font-semibold opacity-0 group-hover:opacity-100">
              READ MORE
            </span>
          </div>
        </a>

        {/* MOBILE TITLE */}
        <div className="md:hidden bg-[#7a5959] text-white py-4 px-4">
          <a href={link}>
            <h3 className="font-['Yeseva_One'] text-[16px] leading-[22px]">
              Serbia VISA for Indian Passport Holders 2026 | Travel Rethink Ways
            </h3>
          </a>
        </div>

      </div>
    </section>
  );
}
