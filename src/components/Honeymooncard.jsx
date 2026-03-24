import React, { useState } from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import arrow from "../assets/rethink-ways-travel-arrow.svg";

import card1 from "../assets/rethink-ways-bali-honeymoon.webp";
import card2 from "../assets/rethink-ways-valentine's-travel.webp";
import card3 from "../assets/rethink-ways-maldives-honeymoon.webp";
import card4 from "../assets/rethink-ways-best-honeymoon.webp";
import card5 from "../assets/rethink-ways-love-in-every.webp";
import card6 from "../assets/rethink-ways-india's-enchannting.webp";

const sections = [
{
title:"World Honeymoon Exclusive 2026",
tag:"GLOBAL",
tagLink:"https://travel.rethinkways.com/category/honeymoon-global/",
posts:[
{
title:"Bali Honeymoon: Love Woven in Waves Travel...",
image:card2,
link:"https://travel.rethinkways.com/bali-honeymoon/",
bg:"#e7d2ea",
btn:"#4b3346",
focal:"50% 50%"
},
{
title:"Valentine's Travel 2026 – Romantic Getaways | Travel...",
image:card1,
link:"https://travel.rethinkways.com/top-romantic-couples-destinations-2026/",
bg:"#cfe7e1",
btn:"#3f5b54",
focal:"75% 55%"
},
{
title:"Maldives Honeymoon Guide: Dreamy Escapes for Couple...",
image:card3,
link:"https://travel.rethinkways.com/maldives-honeymoon/",
bg:"#efcaa7",
btn:"#6a4532",
focal:"70% 65%"
}
]
},
{
title:"Exclusive India Honeymoon 2026",
tag:"INDIA",
tagLink:"https://travel.rethinkways.com/category/honeymoon-india/",
posts:[
{
title:"Best Honeymoon Destinations in India by 2026 Guide...",
image:card4,
link:"https://travel.rethinkways.com/best-honeymoon-destinations-in-india-2026/",
bg:"#f0c7c9",
btn:"#4b3340"
},
{
title:"Love in Every Glow: India's Candlelight Dining Spots...",
image:card5,
link:"https://travel.rethinkways.com/candlelight-dining",
bg:"#f1e0a6",
btn:"#6b442d"
},
{
title:"India's Enchanting Honeymoon 2026 | Travel...",
image:card6,
link:"https://travel.rethinkways.com/honeymoon-destinations-2026/",
bg:"#cfe3ea",
btn:"#92a8adff"
}
]
}
];

export default function HoneymoonSection({ darkMode }) {

const [bookmarks, setBookmarks] = useState({});
const toggle = (id) => setBookmarks(prev => ({ ...prev, [id]: !prev[id] }));

return (

<div style={{ fontFamily: "Poppins" }} className="w-full max-w-[436px] sm:max-w-[1500px] mx-auto px-4 space-y-[40px]">

  {sections.map((section, sIndex) => (

    <div key={sIndex}>

      {/* HEADER */}
      <div className="flex items-center justify-between mb-[24px]">

        <div className="flex items-center gap-[10px]">
          <span className="w-[3px] h-[24px] md:h-[30px] bg-red-600" />
          {/* ✅ DARK MODE: section title white in dark, black in light */}
          <h2 className={`text-[18px] sm:text-[28px] md:text-[36px] ${darkMode ? "text-white" : "text-black"}`}>
            {section.title}
          </h2>
        </div>

        {/* ✅ DARK MODE: VIEW ALL hover → white bg, black text, black border, black arrow */}
        <button className={`group flex items-center justify-center gap-2 w-[36px] h-[36px] md:w-[148px] md:h-[44px] rounded-full bg-red-600 text-white text-[11px] md:text-[14px] font-semibold border-2 border-red-600 transition-all duration-300 ${
          darkMode
            ? "hover:bg-white hover:text-black hover:border-black"
            : "hover:bg-black hover:border-red-600"
        }`}>
          <span className="hidden md:inline">VIEW ALL</span>
          <img
            src={arrow}
            alt="Arrow"
            className={`w-[14px] h-[14px] md:w-[16px] md:h-[16px] transition-all duration-500 ease-out rotate-[-45deg] group-hover:rotate-0 group-hover:translate-x-[3px] ${
              darkMode ? "group-hover:invert" : ""
            }`}
          />
        </button>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[22px]">

        {section.posts.map((post, i) => {
          const id = `${sIndex}-${i}`;
          return (
            <div key={id} style={{ background: post.bg }} className="rounded-[20px] p-[16px] group">

              {/* IMAGE */}
              <div className="relative">
                <a href={post.link}>
                  <img
                    src={post.image}
                    className="w-full h-[210px] sm:h-[300px] md:h-[375px] rounded-[12px] object-cover"
                    style={{ objectPosition: post.focal || "center" }}
                  />
                </a>

                {/* BOOKMARK */}
                <button
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggle(id); }}
                  className="absolute top-[8px] right-[8px] w-[32px] h-[32px] flex items-center justify-center bg-white rounded-full shadow-md"
                >
                  {bookmarks[id]
                    ? <FaBookmark className="text-red-600 text-[14px]" />
                    : <FaRegBookmark className="text-red-600 text-[14px]" />}
                </button>

                {/* TAG */}
                <a href={section.tagLink}>
                  <span
                    className="absolute top-[0px] md:left-10 text-[11px] px-[8px] py-[3px] font-semibold text-white uppercase"
                    style={{ background: post.btn, opacity: 0.85 }}
                  >
                    HONEYMOON {section.tag}
                  </span>
                </a>
              </div>

              {/* TITLE */}
              <a href={post.link}>
                <h4 className="mt-[18px] text-[16px] sm:text-[20px] md:text-[22px]" style={{ fontFamily: "Yeseva One" }}>
                  {post.title}
                </h4>
              </a>

              {/* DESKTOP BUTTON */}
              <a href={post.link}>
                <div
                  className="hidden md:flex mt-[18px] ml-auto relative items-center h-[44px] w-[44px] rounded-full text-white overflow-hidden transition-all duration-[650ms] group-hover:w-[150px]"
                  style={{ background: post.btn }}
                >
                  <span className="flex items-center justify-center w-[44px] h-[44px]">
                    <img
                      src={arrow}
                      alt="Arrow"
                      className="w-[20px] h-[20px] transition-all duration-500 ease-out rotate-[-45deg] group-hover:rotate-0 group-hover:translate-x-[3px]"
                    />
                  </span>
                  <span className="absolute left-[52px] whitespace-nowrap text-[13px] font-semibold opacity-0 -translate-x-[10px] transition-all duration-[650ms] delay-[40ms] group-hover:opacity-100 group-hover:translate-x-0">
                    READ MORE
                  </span>
                </div>
              </a>

            </div>
          );
        })}

      </div>

    </div>

  ))}

</div>

);
}
