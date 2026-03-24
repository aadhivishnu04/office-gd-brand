import React, { useState } from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import arrow from "../assets/rethink-ways-travel-arrow.svg";

const posts = [
  {
    title: "The Wild Splendor of India: 15 Breathtaking Forests, Wildlife & Untamed Landscapes",
    alt: "Dense jungle and wildlife landscape showcasing India's untamed natural beauty",
    desc: "India is not just monuments and megacities. The Wild Splendor of India unfolds far beyond its historic forts and bustling cities — into dense jungles, misty highlands, and coastal wetlands teeming with life.",
    image: "https://travel.rethinkways.com/wp-content/uploads/2026/03/rethinkways-Wildlife-750x536.jpg",
    tag: "WILDLIFE",
    tagLink: "https://travel.rethinkways.com/category/wildlife/",
    link: "https://travel.rethinkways.com/wild-splendor-of-india-landscapes/"
  },
  {
    title: "Bali Attraction: 30 Must Visit Places in Bali for an Unforgettable Journey",
    alt: "Iconic Bali temple and lush tropical landscape representing must-visit attractions",
    desc: "Bali is a destination that needs no introduction. But every visit reveals something new, something unexpected.",
    image: "https://travel.rethinkways.com/wp-content/uploads/2026/03/bali-1024x512.jpg",
    tag: "ATTRACTIONS",
    tagLink: "https://travel.rethinkways.com/category/attractions/",
    link: "https://travel.rethinkways.com/top-bali-attractions-ultimate-travel-guide/"
  },
  {
    title: "The Warm Side of Winter: Coastal Escapes to Dream About",
    alt: "Sun-drenched coastline with warm waters and colourful scenery ideal for a winter escape",
    desc: "Winter doesn't have to mean cold. These coastal escapes offer warmth, colour and a slower kind of magic.",
    image: "https://travel.rethinkways.com/wp-content/uploads/2025/10/129-coastal-750x375.jpg",
    tag: "SEASONS STORIES",
    tagLink: "https://travel.rethinkways.com/category/seasons-stories/",
    link: "https://travel.rethinkways.com/top-coastal-destinations-winter-travel/"
  },
  {
    title: "Andaman Attractions: 15 Must Visit Wonders of the Tropical Paradise",
    alt: "Crystal-clear turquoise waters and lush green islands of the Andaman archipelago",
    desc: "Turquoise waters, coral reefs and jungle trails — the Andamans are as wild and beautiful as ever.",
    image: "https://travel.rethinkways.com/wp-content/uploads/2026/02/rethinkwways-Andaman-750x375.jpg",
    tag: "ATTRACTIONS",
    tagLink: "https://travel.rethinkways.com/category/attractions/",
    link: "https://travel.rethinkways.com/andaman-attractions-15-must-visit-wonders-2026/"
  },
  {
    title: "Best Girls Trip Destinations from India: 9 Amazing Picks for Budget, Luxury & Party Travel 2026 Guide",
    alt: "Three girls walking together with arms around each other on a nature trail",
    desc: "Nine standout destinations across India — from sun-soaked beaches to party-ready hill towns — perfect for every kind of girls trip, budget or luxury.",
    image: "https://travel.rethinkways.com/wp-content/uploads/2026/03/rethinkways-girls-trip-destinations-india.jpg",
    tag: "FRIENDS",
    tagLink: "https://travel.rethinkways.com/category/friends/",
    link: "https://travel.rethinkways.com/best-girls-trip-destinations-india/"
  }
];

const TagBadge = ({ tag, tagLink }) => (
  <a
    href={tagLink}
    onClick={(e) => e.stopPropagation()}
    className="absolute top-0 left-4 bg-[#D02525] text-white text-[11px] font-semibold uppercase px-3 py-[5px] tracking-wider z-20"
    style={{ fontFamily: "Poppins, sans-serif" }}
  >
    {tag}
  </a>
);

const BookmarkBtn = ({ id, bookmarks, toggle }) => (
  <button
    onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggle(id); }}
    aria-label={bookmarks[id] ? "Remove bookmark" : "Add bookmark"}
    className="absolute top-3 right-3 w-[34px] h-[34px] flex items-center justify-center rounded-full z-20 shadow-md bg-white/90"
    style={{ backdropFilter: "blur(6px)" }}
  >
    {bookmarks[id]
      ? <FaBookmark className="text-[#D02525] text-[13px]" />
      : <FaRegBookmark className="text-[#D02525] text-[13px]" />}
  </button>
);

const ExpandBtn = ({ href }) => (
  <a
    href={href}
    className="relative flex items-center h-[44px] w-[44px] rounded-full bg-[#D02525] border-2 border-[#D02525] text-white overflow-hidden transition-all duration-[650ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:w-[150px] group-hover:bg-black group-hover:border-[#D02525]"
  >
    <span className="flex items-center justify-center w-[44px] h-[44px] shrink-0">
      <img src={arrow} alt="" aria-hidden="true" className="w-[22px] h-[22px] transition-all duration-500 rotate-[-45deg] group-hover:rotate-0 group-hover:translate-x-[4px]" />
    </span>
    <span className="absolute left-[52px] whitespace-nowrap text-[14px] font-semibold opacity-0 -translate-x-[10px] transition-all duration-[650ms] group-hover:opacity-100 group-hover:translate-x-0" style={{ fontFamily: "Poppins, sans-serif" }}>
      READ MORE
    </span>
  </a>
);

const MobileBtn = ({ href }) => (
  <div className="flex justify-center mt-3">
    <a
      href={href}
      className="relative flex items-center h-[44px] w-fit rounded-full bg-[#D02525] text-white overflow-hidden pr-5"
    >
      <span className="flex items-center justify-center w-[44px] h-[44px] shrink-0">
        <img src={arrow} alt="" aria-hidden="true" className="w-[22px] h-[22px] rotate-[-45deg]" />
      </span>
      <span className="whitespace-nowrap text-[14px] font-semibold" style={{ fontFamily: "Poppins, sans-serif" }}>
        READ MORE
      </span>
    </a>
  </div>
);

export default function LatestUpdates({ darkMode = false }) {
  const [bookmarks, setBookmarks] = useState({});
  const toggle = (id) => setBookmarks(prev => ({ ...prev, [id]: !prev[id] }));

  const titleCol = darkMode ? "text-white"    : "text-[#111]";
  const descCol  = darkMode ? "text-[#aaa]"   : "text-[#555]";
  const divider  = darkMode ? "border-[#333]" : "border-[#e0e0e0]";
  const bg       = darkMode ? "bg-[#111]"     : "bg-white";

  const Header = () => (
    <div className="flex items-center justify-between mb-4 flex-shrink-0">
      <div className="flex items-center gap-3">
        <div className="w-[3px] h-[26px] bg-[#D02525]" />
        <h2
          className={`text-[20px] md:text-[26px] lg:text-[30px] font-medium ${darkMode ? "text-white" : "text-black"}`}
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Latest Updates
        </h2>
      </div>
      <button
        className={`group flex items-center justify-center gap-2 w-[36px] h-[36px] md:w-[148px] md:h-[44px] rounded-full bg-[#D02525] text-white text-[13px] font-semibold border-2 border-[#D02525] transition-all duration-300 ${
          darkMode ? "hover:bg-white hover:text-black hover:border-black" : "hover:bg-black hover:border-[#D02525]"
        }`}
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <span className="hidden md:inline">VIEW ALL</span>
        <img
          src={arrow}
          alt=""
          aria-hidden="true"
          className={`w-[14px] h-[14px] md:w-[16px] md:h-[16px] transition-all duration-300 rotate-[-45deg] group-hover:rotate-0 group-hover:translate-x-[3px] ${darkMode ? "group-hover:invert" : ""}`}
        />
      </button>
    </div>
  );

  return (
    <>
      {/* ══════════════ MOBILE ══════════════ */}
      <div className={`block md:hidden w-full px-4 py-6 ${bg}`}>
        <Header />

        {/* Featured card — posts[0] */}
        <div className={`pb-6 mb-6 border-b ${divider}`}>
          <a href={posts[0].link} className="relative block overflow-hidden rounded-xl mb-3">
            <TagBadge tag={posts[0].tag} tagLink={posts[0].tagLink} />
            <BookmarkBtn id={0} bookmarks={bookmarks} toggle={toggle} />
            <img src={posts[0].image} alt={posts[0].alt} className="w-full h-[220px] object-cover rounded-xl" />
          </a>
          <a href={posts[0].link}>
            <h3 className={`text-[19px] leading-[1.3] mb-2 text-center line-clamp-2 transition-colors ${titleCol}`} style={{ fontFamily: "'Yeseva One', Georgia, serif" }}>{posts[0].title}</h3>
          </a>
          <MobileBtn href={posts[0].link} />
        </div>

        {/* Girls Trip card — posts[4] */}
        <div className={`pb-6 mb-6 border-b ${divider}`}>
          <a href={posts[4].link} className="relative block overflow-hidden rounded-xl mb-3">
            <TagBadge tag={posts[4].tag} tagLink={posts[4].tagLink} />
            <BookmarkBtn id={4} bookmarks={bookmarks} toggle={toggle} />
            <img src={posts[4].image} alt={posts[4].alt} className="w-full h-[220px] object-cover rounded-xl" />
          </a>
          <a href={posts[4].link}>
            <h3 className={`text-[19px] leading-[1.3] mb-2 text-center line-clamp-2 transition-colors ${titleCol}`} style={{ fontFamily: "'Yeseva One', Georgia, serif" }}>{posts[4].title}</h3>
          </a>
          <MobileBtn href={posts[4].link} />
        </div>

        {/* Small cards — posts[1], [2], [3] */}
        <div className="flex flex-col gap-6">
          {[posts[1], posts[2], posts[3]].map((post, i) => (
            <div key={i} className={`pb-6 border-b last:border-b-0 ${divider}`}>
              <a href={post.link} className="relative block overflow-hidden rounded-xl mb-3">
                <TagBadge tag={post.tag} tagLink={post.tagLink} />
                <BookmarkBtn id={i + 1} bookmarks={bookmarks} toggle={toggle} />
                <img src={post.image} alt={post.alt} className="w-full h-[180px] object-cover rounded-xl" />
              </a>
              <a href={post.link}>
                <h4 className={`text-[19px] leading-[1.3] mb-2 text-center line-clamp-2 transition-colors ${titleCol}`} style={{ fontFamily: "'Yeseva One', Georgia, serif" }}>{post.title}</h4>
              </a>
              <MobileBtn href={post.link} />
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════ DESKTOP ══════════════ */}
      <div className={`hidden md:flex md:flex-col w-full h-screen overflow-hidden ${bg}`}>
        <div className="w-full max-w-[1500px] mx-auto px-6 py-5 flex flex-col flex-1 min-h-0">
          <Header />

          <div
            className="grid gap-5"
            style={{
              gridTemplateColumns: "1fr 1fr 1fr",
              gridTemplateRows: "500px 330px",
              flex: 1,
              minHeight: 0,
              paddingBottom: "4px", /* ← prevents bottom radius clipping */
            }}
          >

            {/* ── ROW 1 · COL 1+2 · BIG FEATURED CARD — image + overlay content ── */}
            <div
              className="group relative overflow-hidden rounded-2xl"
              style={{ gridColumn: "1 / 3", gridRow: "1 / 2", minHeight: 0 }}
            >
              {/* full-cover image */}
              <img
                src={posts[0].image}
                alt={posts[0].alt}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* tag + bookmark */}
              <TagBadge tag={posts[0].tag} tagLink={posts[0].tagLink} />
              <BookmarkBtn id={0} bookmarks={bookmarks} toggle={toggle} />
              {/* content pinned to bottom */}
              <div className="absolute bottom-0 left-0 right-0 px-6 pb-5" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.55) 60%, transparent 100%)", paddingTop: "60px" }}>
                <a href={posts[0].link}>
                  <h3 className="text-white text-[22px] lg:text-[30px] leading-[1.3] line-clamp-2" style={{ fontFamily: "'Yeseva One', Georgia, serif" }}>
                    {posts[0].title}
                  </h3>
                </a>
                <div className="flex justify-end mt-2">
                  <ExpandBtn href={posts[0].link} />
                </div>
              </div>
            </div>

            {/* ── ROW 1 · COL 3 · GIRLS TRIP CARD — image + overlay content ── */}
            <div
              className="group relative overflow-hidden rounded-2xl"
              style={{ gridColumn: "3 / 4", gridRow: "1 / 2", minHeight: 0 }}
            >
              {/* full-cover image */}
              <img
                src={posts[4].image}
                alt={posts[4].alt}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* tag + bookmark */}
              <TagBadge tag={posts[4].tag} tagLink={posts[4].tagLink} />
              <BookmarkBtn id={4} bookmarks={bookmarks} toggle={toggle} />
              {/* content pinned to bottom */}
              <div className="absolute bottom-0 left-0 right-0 px-5 pb-5" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.55) 60%, transparent 100%)", paddingTop: "60px" }}>
                <a href={posts[4].link}>
                  <h3 className="text-white text-[15px] lg:text-[19px] leading-[1.35] line-clamp-2" style={{ fontFamily: "'Yeseva One', Georgia, serif" }}>
                    {posts[4].title}
                  </h3>
                </a>
                <div className="flex justify-end mt-2">
                  <ExpandBtn href={posts[4].link} />
                </div>
              </div>
            </div>

            {/* ── ROW 2 · ALL 3 SMALL CARDS ── */}
            <div
              className="flex gap-5"
              style={{ gridColumn: "1 / 4", gridRow: "2 / 3", minHeight: 0 }}
            >
              {[
                { post: posts[1], bmId: 1 },
                { post: posts[2], bmId: 2 },
                { post: posts[3], bmId: 3 },
              ].map(({ post, bmId }) => (
                <div
                  key={bmId}
                  className="group relative flex-1"
                  style={{
                    minHeight: 0,
                    borderRadius: "0.75rem",   /* rounded-xl = 12px */
                    overflow: "hidden",         /* clips image to radius on all 4 corners */
                  }}
                >
                  <img
                    src={post.image}
                    alt={post.alt}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <TagBadge tag={post.tag} tagLink={post.tagLink} />
                  <BookmarkBtn id={bmId} bookmarks={bookmarks} toggle={toggle} />
                  {/* content pinned to bottom */}
                  <div className="absolute bottom-0 left-0 right-0 px-4 pb-4" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.55) 60%, transparent 100%)", paddingTop: "60px" }}>
                    <a href={post.link}>
                      <h4 className="text-white text-[13px] lg:text-[17px] leading-[1.35] line-clamp-2" style={{ fontFamily: "'Yeseva One', Georgia, serif" }}>
                        {post.title}
                      </h4>
                    </a>
                    <div className="flex justify-end mt-2">
                      <ExpandBtn href={post.link} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
