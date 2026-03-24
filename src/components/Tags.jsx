import React from "react";
import {
  FaLeaf, FaPassport, FaUtensils, FaBed, FaShip, FaBookOpen, FaStar, FaHeart,
  FaUsers, FaUserFriends, FaUser, FaFlag, FaGlobe, FaCalendarAlt, FaFileAlt,
  FaUmbrellaBeach, FaLightbulb, FaMountain, FaHiking, FaCampground, FaWater,
  FaTree, FaGem, FaMagic, FaSun, FaLandmark, FaTheaterMasks, FaCity, FaPaw
} from "react-icons/fa";

const tags = [
  { icon: <FaLeaf />, text: "Season Stories", link: "https://travel.rethinkways.com/category/seasons-stories/", bg: "#ffe5e9", color: "#8f1f35" },
  { icon: <FaPassport />, text: "VISA-Free", link: "https://travel.rethinkways.com/category/visa-free/", bg: "#FFF0DA", color: "#8F4F0A" },
  { icon: <FaUtensils />, text: "Culinary", link: "https://travel.rethinkways.com/category/culinary/", bg: "#fff4e5", color: "#87541b" },
  { icon: <FaBed />, text: "Unique Stays", link: "https://travel.rethinkways.com/category/unique-stays/", bg: "#dcfaec", color: "#145c43" },
  { icon: <FaShip />, text: "Cruises", link: "https://travel.rethinkways.com/category/cruise/", bg: "#d8fbf2", color: "#0f6656" },
  { icon: <FaBookOpen />, text: "Travel Stories", link: "https://travel.rethinkways.com/travel-web-stories/", bg: "#dbf2ff", color: "#155a82" },
  { icon: <FaStar />, text: "Attractions", link: "https://travel.rethinkways.com/category/attractions/", bg: "#e2e7ff", color: "#2e3a86" },
  { icon: <FaHeart />, text: "Honeymoon – India", link: "https://travel.rethinkways.com/category/honeymoon-india/", bg: "#eae3ff", color: "#563392" },
  { icon: <FaHeart />, text: "Romantic Escapes", link: "https://travel.rethinkways.com/category/romantic-escapes/", bg: "#ffe6f2", color: "#8e2a59" },
  { icon: <FaUsers />, text: "Family Getaways", link: "https://travel.rethinkways.com/category/family-getaways/", bg: "#ffe9eb", color: "#933430" },
  { icon: <FaUserFriends />, text: "Friends Trip", link: "https://travel.rethinkways.com/category/friends/", bg: "#fff4d9", color: "#5a4500" },
  { icon: <FaUser />, text: "Solo Travel", link: "https://travel.rethinkways.com/category/solo-travel/", bg: "#ffebd5", color: "#8f4c22" },
  { icon: <FaFlag />, text: "India 2026", link: "https://travel.rethinkways.com/category/india-2026/", bg: "#e3ffef", color: "#1f6e4c" },
  { icon: <FaGlobe />, text: "International Monthly Getaways", link: "https://travel.rethinkways.com/category/international-months/", bg: "#fff4d9", color: "#5a4500" },
  { icon: <FaCalendarAlt />, text: "India Monthly Getaways", link: "https://travel.rethinkways.com/category/india-months/", bg: "#d4f5e1", color: "#1f6b44" },
  { icon: <FaGlobe />, text: "Honeymoon – Global", link: "https://travel.rethinkways.com/category/honeymoon-global/", bg: "#dcf7ff", color: "#1f5f75" },
  { icon: <FaFileAlt />, text: "VISA Process", link: "https://travel.rethinkways.com/category/visa-process/", bg: "#ffe8ef", color: "#8f3e57" },
  { icon: <FaUmbrellaBeach />, text: "Islands", link: "https://travel.rethinkways.com/category/islands/", bg: "#e2f0ff", color: "#1e4c88" },
  { icon: <FaLightbulb />, text: "Travel Tips & Essential", link: "https://travel.rethinkways.com/category/travel-tips/", bg: "#fff1e0", color: "#935a1c" },
  { icon: <FaMountain />, text: "Adventure", link: "https://travel.rethinkways.com/category/adventure/", bg: "#f1e4ff", color: "#4a2592" },
  { icon: <FaMountain />, text: "Hill Station", link: "https://travel.rethinkways.com/category/hill-stations/", bg: "#e0fff2", color: "#206a5a" },
  { icon: <FaHiking />, text: "Trekking", link: "https://travel.rethinkways.com/category/trekking/", bg: "#edffde", color: "#3e6e1f" },
  { icon: <FaCampground />, text: "Camping", link: "https://travel.rethinkways.com/category/camping/", bg: "#fff2dc", color: "#8f5a1d" },
  { icon: <FaWater />, text: "Beaches", link: "https://travel.rethinkways.com/category/beaches/", bg: "#ffe6c7", color: "#8a3f13" },
  { icon: <FaCalendarAlt />, text: "Weekend", link: "https://travel.rethinkways.com/category/weekend-getaways/", bg: "#d7eaff", color: "#1e4178" },
  { icon: <FaTree />, text: "Themeparks", link: "https://travel.rethinkways.com/category/theme-parks/", bg: "#ebf3dc", color: "#556a19" },
  { icon: <FaGem />, text: "Hidden Gems", link: "https://travel.rethinkways.com/category/hidden-gems/", bg: "#f7e2ff", color: "#71267c" },
  { icon: <FaMagic />, text: "Fantasy", link: "https://travel.rethinkways.com/category/fantasy/", bg: "#ffe8de", color: "#8f4a1f" },
  { icon: <FaSun />, text: "Deserts", link: "https://travel.rethinkways.com/category/desert/", bg: "#fff4e3", color: "#866a22" },
  { icon: <FaLeaf />, text: "Nature", link: "https://travel.rethinkways.com/category/nature/", bg: "#e4f9f0", color: "#1e6a58" },
  { icon: <FaTree />, text: "Parks", link: "https://travel.rethinkways.com/category/parks/", bg: "#eae6f9", color: "#47408a" },
  { icon: <FaLandmark />, text: "Wonders", link: "https://travel.rethinkways.com/category/world-wonders/", bg: "#e5e7ff", color: "#343c96" },
  { icon: <FaTheaterMasks />, text: "Festivals", link: "https://travel.rethinkways.com/category/festivals/", bg: "#f4e2f7", color: "#71367c" },
  { icon: <FaCity />, text: "City Escapes", link: "https://travel.rethinkways.com/category/city/", bg: "#e9fff4", color: "#1f6e55" },
  { icon: <FaWater />, text: "Waterfalls", link: "https://travel.rethinkways.com/category/waterfalls/", bg: "#ffe7eb", color: "#8A2f44" },
  { icon: <FaPaw />, text: "Wildlife", link: "https://travel.rethinkways.com/category/wildlife/", bg: "#dbfff6", color: "#146b5e" },
];

// ✅ DARK MODE: tag bg/color are kept as-is (colorful pills look good on dark too)
// No changes needed to individual tag styles — they use inline style colors which are readable on dark bg
export default function Tags({ darkMode }) {
  return (
    <div className="w-full max-w-[1500px] mx-auto px-4 mt-8 flex flex-wrap justify-center sm:justify-start gap-[8px] sm:gap-[12px] md:gap-[14px] font-[Poppins,Helvetica,Arial,sans-serif]">

      {tags.map(({ icon, text, bg, color, link }, i) => (
        <a key={i} href={link}>
          {/* ✅ DARK MODE: in dark, use a slightly darkened bg overlay via opacity wrapper */}
          <div
            style={{ background: bg, color }}
            className={`flex items-center gap-[6px] sm:gap-[8px] px-[10px] py-[6px] sm:px-[12px] rounded-[10px] text-[13px] sm:text-[16px] lg:text-[20px] font-medium cursor-pointer transition-opacity duration-300 ${
              darkMode ? "opacity-85 hover:opacity-100" : "hover:opacity-90"
            }`}
          >
            <span className="text-[14px] sm:text-[18px]">{icon}</span>
            {text}
          </div>
        </a>
      ))}

    </div>
  );
}
