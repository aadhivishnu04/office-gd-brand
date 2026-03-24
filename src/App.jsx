import { useState, lazy, Suspense } from "react";
import Header from "./components/Header";

// Lazy-loaded components — Header is eager (above fold + controls darkMode state)
const Banner          = lazy(() => import("./components/Banner"));
const Tags            = lazy(() => import("./components/Tags"));
const LatestUpdates   = lazy(() => import("./components/LatestUpdates"));
const Honeymooncard   = lazy(() => import("./components/Honeymooncard"));
const BrandStory      = lazy(() => import("./components/BrandStory"));
const ExperienceIndia = lazy(() => import("./components/ExperienceIndia"));
const VisaProcess     = lazy(() => import("./components/VisaProcess"));
const UniqueStay      = lazy(() => import("./components/UniqueStay"));
const AroundWorld     = lazy(() => import("./components/AroundWorld"));
const VisaFreeEscapes = lazy(() => import("./components/VisaFreeEscapes"));
const TravelMood      = lazy(() => import("./components/TravelMood"));
const Footer          = lazy(() => import("./components/Footer"));

// Helper to read initial dark mode
const getInitialDark = () => {
  if (typeof window === "undefined") return false;
  const stored = window.localStorage.getItem("trw-dark-mode");
  if (stored === "1") return true;
  if (stored === "0") return false;
  return document.documentElement.classList.contains("trw-dark-mode");
};

export default function App() {
  const [darkMode, setDarkMode] = useState(getInitialDark);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-[#0a0a0a]" : "bg-white"
      }`}
    >
      {/* HEADER — eager, controls dark mode */}
      <Header onDarkModeChange={setDarkMode} />

      <Suspense fallback={null}>
        {/* 🔥 HERO BANNER (NO PADDING, FULL WIDTH) */}
        <Banner darkMode={darkMode} />

        {/* 📦 MAIN CONTENT (WITH SPACING) */}
        <main className="space-y-10 py-6">
          <Tags            darkMode={darkMode} />
          <LatestUpdates   darkMode={darkMode} />
          <Honeymooncard   darkMode={darkMode} />
          <BrandStory      darkMode={darkMode} />
          <ExperienceIndia darkMode={darkMode} />
          <VisaProcess     darkMode={darkMode} />
          <UniqueStay      darkMode={darkMode} />
          <AroundWorld     darkMode={darkMode} />
          <VisaFreeEscapes darkMode={darkMode} />
          <TravelMood      darkMode={darkMode} />
        </main>

        {/* FOOTER */}
        <Footer />
      </Suspense>
    </div>
  );
}
