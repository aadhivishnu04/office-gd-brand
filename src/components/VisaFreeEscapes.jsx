import { useState } from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import img from "../assets/rethinkways-blog-visa-free-destination-cover.jpg";
import arrow from "../assets/rethink-ways-travel-arrow.svg";

export default function VisaFreeEscapes({ darkMode }) {

  const [bookmark, setBookmark] = useState(false);

  const link = "https://travel.rethinkways.com/top-10-visa-free-honeymoon-destinations/";
  const tagLink = "https://travel.rethinkways.com/category/visa-free/";

  const toggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setBookmark(!bookmark);
  };

  return (
    <section className="w-full mb-6">
      <div className="w-full md:max-w-[1500px] mx-auto mb-6 px-0 md:px-4">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-[3px] h-[26px] md:h-[32px] bg-red-700"></div>
            <h2 className={`text-[15px] md:text-[36px] font-normal font-[Poppins] ${darkMode ? "text-white" : "text-black"}`}>
              VISA-Free Escapes
            </h2>
          </div>

          <button className={`group flex items-center justify-center gap-2 w-[36px] h-[36px] md:w-[148px] md:h-[44px] rounded-full bg-red-600 text-white text-[11px] md:text-[14px] font-semibold border-2 border-red-600 transition-all ${
            darkMode
              ? "hover:bg-white hover:text-black hover:border-black"
              : "hover:bg-black"
          }`}>
            <span className="hidden md:inline">VIEW ALL</span>
            <img
              src={arrow}
              alt=""
              aria-hidden="true"
              className={`w-[14px] h-[14px] md:w-[16px] md:h-[16px] rotate-[-45deg] transition-all group-hover:rotate-0 group-hover:translate-x-[3px] ${
                darkMode ? "group-hover:invert" : ""
              }`}
            />
          </button>
        </div>

        {/* CARD */}
        <div className="group grid md:grid-cols-[65%_35%] items-start md:items-stretch overflow-hidden md:rounded-[14px]">

          {/* IMAGE */}
          <div className="relative">
            <a href={link} className="block md:h-full">
              <img
                src={img}
                alt="Exotic visa-free honeymoon destination with scenic tropical landscape for Indian travellers"
                className="w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-auto md:h-full object-cover"
              />
            </a>

            {/* MOBILE TAG */}
            <a href={tagLink} className="absolute top-2 left-4 md:hidden z-10">
              <span className="bg-[#3f4c60] text-white text-[10px] px-3 py-1">
                VISA-FREE
              </span>
            </a>

            {/* MOBILE BOOKMARK */}
            <button
              onClick={toggle}
              aria-label={bookmark ? "Remove bookmark" : "Add bookmark"}
              className="absolute top-4 right-4 md:hidden w-8 h-8 bg-white rounded-full border flex items-center justify-center text-red-500"
            >
              {bookmark ? <FaBookmark /> : <FaRegBookmark />}
            </button>

            {/* MOBILE BUTTON */}
            <a
              href={link}
              className="absolute bottom-[12px] right-4 md:hidden flex items-center gap-2 px-[12px] py-[5px] rounded-full border border-white/70 text-white text-[11px] bg-[#2f3e4f]"
            >
              READ MORE
              <img src={arrow} alt="" aria-hidden="true" className="w-[12px] h-[12px] rotate-[-45deg]" />
            </a>
          </div>

          {/* CONTENT */}
          <div className="relative md:h-full bg-[#CFDCEC] px-[18px] md:px-[40px] pt-[20px] pb-[40px] md:pt-[50px] md:pb-[80px] flex flex-col justify-center gap-[8px] md:gap-[14px]">

            {/* DESKTOP TAG */}
            <a href={tagLink}>
              <span className="hidden md:block absolute top-0 left-[18px] md:left-10 text-[10px] md:text-[14px] px-2 md:px-3 py-1 bg-[#3f4c60] text-white font-semibold">
                VISA-FREE
              </span>
            </a>

            {/* DESKTOP BOOKMARK */}
            <button
              onClick={toggle}
              aria-label={bookmark ? "Remove bookmark" : "Add bookmark"}
              className="hidden md:flex absolute top-4 right-4 w-[36px] h-[36px] bg-white rounded-full border items-center justify-center text-red-500"
            >
              {bookmark ? <FaBookmark /> : <FaRegBookmark />}
            </button>

            {/* TEXT */}
            <a href={link}>
              <h3 className="font-['Yeseva_One'] text-[15px] md:text-[36px] leading-[22px] md:leading-[44px] text-black md:max-w-[420px]">
                Top 10 Exotic VISA Free Honeymoon for Indians 2026 Romantic Travel Guide | Travel Rethink Ways
              </h3>
            </a>

            <p className="text-[13px] md:text-[20px] leading-[20px] md:leading-[28px] text-[#2f2f2f] md:max-w-[380px] font-[Poppins]">
              Planning a honeymoon should be exciting, not stressful. Yet VISA paperwork often becomes the most...
            </p>

            {/* DESKTOP BUTTON */}
            <a href={link} className="hidden md:block absolute bottom-4 right-4 group">
              <div className="relative flex items-center h-[44px] w-[44px] rounded-full bg-[#2f3e4f] text-white overflow-hidden transition-all duration-500 group-hover:w-[150px]">
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
