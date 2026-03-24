import beaches from "../assets/rethink-ways-beaches.webp";
import city from "../assets/rethink-ways-city.webp";
import fantasy from "../assets/rethink-ways-fantasy.webp";
import deserts from "../assets/rethink-ways-deserts.webp";
import heritage from "../assets/rethink-ways-heritage.webp";
import hills from "../assets/rethink-ways-hills.webp";
import volcano from "../assets/rethink-ways-volcano.webp";
import wildlife from "../assets/rethink-ways-wildlife.webp";
import camping from "../assets/rethink-ways-camping.webp";
import festivals from "../assets/rethink-ways-festivals.webp";
import hiking from "../assets/rethink-ways-hiking.webp";
import culinary from "../assets/rethink-ways-culinary.webp";
import adventure from "../assets/rethink-ways-adventure.webp";
import friends from "../assets/rethink-ways-friends.webp";
import family from "../assets/rethink-ways-family.webp";
import solo from "../assets/rethink-ways-solo.webp";
import romantic from "../assets/rethink-ways-romantic.webp";
import weekend from "../assets/rethink-ways-weekend.webp";
import cruise from "../assets/rethink-ways-cruise.webp";
import theme from "../assets/rethink-ways-themepark.webp";

import arrow from "../assets/rethink-ways-travel-arrow.svg";

const moods = [
  { title: "Beaches", img: beaches, link: "https://travel.rethinkways.com/category/beaches/" },
  { title: "City Escapes", img: city, link: "https://travel.rethinkways.com/category/city/" },
  { title: "Fantasy", img: fantasy, link: "https://travel.rethinkways.com/category/fantasy/" },
  { title: "Deserts", img: deserts, link: "https://travel.rethinkways.com/category/desert/" },
  { title: "Heritage", img: heritage, link: "https://travel.rethinkways.com/category/heritage/" },
  { title: "Hill Stations", img: hills, link: "https://travel.rethinkways.com/category/hill-stations/" },
  { title: "Volcanoes", img: volcano, link: "https://travel.rethinkways.com/category/volcanoes/" },
  { title: "Wildlife", img: wildlife, link: "https://travel.rethinkways.com/category/wildlife/" },
  { title: "Camping", img: camping, link: "https://travel.rethinkways.com/category/camping/" },
  { title: "Festivals", img: festivals, link: "https://travel.rethinkways.com/category/festivals/" },
  { title: "Hiking", img: hiking, link: "https://travel.rethinkways.com/category/trekking/" },
  { title: "Culinary", img: culinary, link: "https://travel.rethinkways.com/category/culinary/" },
  { title: "Adventure", img: adventure, link: "https://travel.rethinkways.com/category/adventure/" },
  { title: "Friends", img: friends, link: "https://travel.rethinkways.com/category/friends/" },
  { title: "Family", img: family, link: "https://travel.rethinkways.com/category/family-getaways/" },
  { title: "Solo Travel", img: solo, link: "https://travel.rethinkways.com/category/solo-travel/" },
  { title: "Romantic", img: romantic, link: "https://travel.rethinkways.com/category/romantic-escapes/" },
  { title: "Weekend", img: weekend, link: "https://travel.rethinkways.com/category/weekend-getaways/" },
  { title: "Cruises", img: cruise, link: "https://travel.rethinkways.com/category/cruise/" },
  { title: "Theme Parks", img: theme, link: "https://travel.rethinkways.com/category/theme-parks/" },
];

export default function TravelMood({ darkMode }) {
  return (
    <section className="max-w-[1500px] mx-auto px-4">

      {/* HEADER */}
      <div className="flex items-center gap-3 mb-6 md:mb-8">
        <div className="w-[3px] h-[24px] md:h-[26px] bg-red-700" />

        <h2 className={`text-[15px] md:text-[36px] font-normal font-[Poppins] ${darkMode ? "text-white" : "text-black"}`}>
          What's Your Travel Mood?
        </h2>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {moods.map((item, i) => (
          <a
            key={i}
            href={item.link}
            className="relative rounded-[14px] overflow-hidden group cursor-pointer"
          >
            <img
              src={item.img}
              alt={`${item.title} travel destination`}
              className="w-full h-[220px] md:h-[320px] object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            <h3 className="absolute bottom-3 left-3 md:bottom-4 md:left-4 text-white text-[13px] md:text-[19px] font-medium font-[Poppins]">
              {item.title}
            </h3>

            <button className={`absolute bottom-3 right-3 md:bottom-4 md:right-4 flex items-center gap-2 px-3 md:px-4 py-[5px] md:py-[6px] rounded-full font-medium text-[11px] md:text-[14px] bg-white text-black border border-white transition-all duration-300 ${
              darkMode
                ? "group-hover:bg-white group-hover:text-black group-hover:border-black"
                : "group-hover:bg-black group-hover:text-white group-hover:border-red-500"
            }`}>
              View All
              <span className="flex items-center justify-center">
                <img
                  src={arrow}
                  alt=""
                  aria-hidden="true"
                  className={`w-[14px] h-[14px] brightness-0 rotate-[-45deg] transition-all duration-300 group-hover:rotate-0 group-hover:translate-x-[2px] ${
                    darkMode ? "" : "group-hover:invert"
                  }`}
                />
              </span>
            </button>

          </a>
        ))}
      </div>

    </section>
  );
}
