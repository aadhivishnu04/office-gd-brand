import asia from "../assets/rethink-ways-asia.svg";
import europe from "../assets/rethink-ways-europe.svg";
import africa from "../assets/rethink-ways-africa.svg";
import north from "../assets/rethink-ways-north-america.svg";
import south from "../assets/rethink-ways-south-america.svg";
import oceania from "../assets/rethink-ways-oceania.svg";
import antarctica from "../assets/rethink-ways-antarctica.svg";
import arrow from "../assets/rethink-ways-travel-arrow.svg";

const data = [
  { title: "ASIA", img: asia, alt: "Map illustration of Asia", color: "#66c5cc", link: "https://travel.rethinkways.com/category/asia/" },
  { title: "EUROPE", img: europe, alt: "Map illustration of Europe", color: "#f6cf71", link: "https://travel.rethinkways.com/category/europe/" },
  { title: "AFRICA", img: africa, alt: "Map illustration of Africa", color: "#9eb9f3", link: "https://travel.rethinkways.com/category/africa/" },
  { title: "NORTH AMERICA", img: north, alt: "Map illustration of North America", color: "#87c55f", link: "https://travel.rethinkways.com/category/north-america/" },
  { title: "SOUTH AMERICA", img: south, alt: "Map illustration of South America", color: "#fe88b1", link: "https://travel.rethinkways.com/category/south-america/" },
  { title: "OCEANIA", img: oceania, alt: "Map illustration of Oceania", color: "#f89c74", link: "https://travel.rethinkways.com/category/oceania/" },
  { title: "ANTARCTICA", img: antarctica, alt: "Map illustration of Antarctica", color: "#dcb0f2", link: "https://travel.rethinkways.com/category/antarctica/" },
];

const Card = ({ item, imgClass }) => (
  <a
    href={item.link}
    style={{ background: item.color }}
    className="relative w-full rounded-[16px] flex items-center justify-center group h-[220px] md:h-[340px]"
  >
    <img
      src={item.img}
      alt={item.alt}
      className={`object-contain scale-200 ${imgClass}`}
    />

    <button className="absolute bottom-[15px] right-[15px] md:bottom-[20px] md:right-[20px] flex items-center gap-2 px-[16px] md:px-[18px] h-[46px] text-[12px] md:text-[13px] font-semibold text-white rounded-full border border-white bg-black/30 backdrop-blur-md transition-all duration-300 group-hover:bg-black group-hover:border-red-500">
      {item.title}
      <span className="flex items-center justify-center">
        <img
          src={arrow}
          alt=""
          aria-hidden="true"
          className="w-[14px] h-[14px] brightness-0 invert rotate-[-45deg] transition-all duration-300 group-hover:rotate-0 group-hover:translate-x-[2px]"
        />
      </span>
    </button>
  </a>
);

export default function AroundWorld({ darkMode }) {
  return (
    <section className="w-full mb-6">
      <div className="max-w-[1500px] mx-auto px-4">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <div className="w-[3px] h-[26px] md:h-[36px] bg-red-600" />

            <h2 className={`text-[15px] md:text-[36px] font-normal font-[Poppins] ${darkMode ? "text-white" : "text-black"}`}>
              Around the World
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
              className={`w-[14px] h-[14px] md:w-[16px] md:h-[16px] rotate-[-45deg] transition-all duration-300 group-hover:rotate-0 group-hover:translate-x-[3px] ${
                darkMode ? "group-hover:invert" : ""
              }`}
            />
          </button>
        </div>

        {/* FIRST ROW */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] md:gap-[25px]">
          {data.slice(0, 3).map((item, i) => (
            <Card key={i} item={item} imgClass="w-[180px] md:w-[190px]" />
          ))}
        </div>

        {/* SECOND ROW */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-[20px] md:gap-[25px] mt-[20px] md:mt-[25px]">
          {data.slice(3).map((item, i) => (
            <Card
              key={i}
              item={item}
              imgClass="w-[120px] md:w-[110px] md:scale-[2.3]"
            />
          ))}
        </div>

      </div>
    </section>
  );
}
