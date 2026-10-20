import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  MapPin,
  Instagram,
  Star,
  ChevronRight,
  Users,
  ArrowRight,
  ArrowLeft,
  BookOpen,
  Globe2,
  ShieldCheck,
  Camera,
  MoveRight,
  Mountain,
  CreditCard,
  Globe,
  Eye,
  Target,
  Mail,
} from "lucide-react";
import { motion, AnimatePresence, useInView } from "motion/react";
import { Reveal } from "./components/Reveal";
import { BookModal } from "./components/BookModal";
import { PricingCard } from "./components/PricingCard";
import { LuxuryCard } from "./components/LuxuryCard";
import { translations, Language } from "./translations";
import { siteText } from "./translations";
import { SafariDetails } from "./components/SafariDetails";
import { itineraries } from "./data/itineraries";
import { translatedItineraries } from "./data/translatedItineraries";
import { bookingFormText } from "./bookingFormTranslations";
import { destinations, Destination } from "./data/destinations";
import { destinationsTranslations } from "./data/destinationsTranslations";

const languages: Language[] = ["en", "zh", "de", "es", "fr", "it"];

const languageNames: Record<Language, string> = {
  en: "English",
  zh: "中文",
  de: "Deutsch",
  es: "Español",
  fr: "Français",
  it: "Italiano",
};

function isLanguage(value: string | null): value is Language {
  return value !== null && languages.includes(value as Language);
}

export default function App() {
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window === "undefined") return "en";
    const savedLanguage = window.localStorage.getItem("black-eagle-language");
    return isLanguage(savedLanguage) ? savedLanguage : "en";
  });
  const t = translations[lang];
  const bt = bookingFormText[lang];
  const ui = siteText[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem("black-eagle-language", lang);
  }, [lang]);

  // Derive translated itineraries based on current language
  const currentItineraries =
    lang === "en"
      ? itineraries
      : itineraries.map((it) => {
          const trans = translatedItineraries[lang]?.[it.id] ?? {};
          return {
            ...it,
            ...trans,
            image: it.image,
            plan: it.plan.map((p, pIdx) => ({
              ...p,
              ...(trans.plan?.[pIdx] ?? {}),
              image: p.image,
              imageAlt: p.imageAlt,
            })),
          };
        });
  
const destinationLabels = {
  en: {
    back: "Back to destinations",
    discover: "Discover Tanzania",
    discoverPrefix: "Discover",
    about: "About this destination",
    highlights: "Destination highlights",
    makeMost: "Make the most of your visit",
    thingsToDo: "Things to do in",
    activitiesIntro: "Explore memorable experiences available in and around this destination. Activities can depend on season, park rules, weather and local availability.",
    planVisit: "Plan a visit",
    include: "Want to include",
    inSafari: "in your safari?",
    exploreOther: "Explore other destinations",
    discoverTitle: "Destinations",
    destinationIntro: "Explore Tanzania’s remarkable wildlife, landscapes and coastlines. Choose a destination to discover experiences that can be included in your safari.",
    view: "View destination",
  },
  de: {
    back: "Zurück zu den Reisezielen",
    discover: "Entdecken Sie Tansania",
    discoverPrefix: "Entdecken Sie",
    about: "Über dieses Reiseziel",
    highlights: "Höhepunkte des Reiseziels",
    makeMost: "Machen Sie das Beste aus Ihrem Besuch",
    thingsToDo: "Aktivitäten in",
    activitiesIntro: "Entdecken Sie unvergessliche Erlebnisse an diesem Reiseziel und in der Umgebung. Aktivitäten hängen von Jahreszeit, Parkregeln, Wetter und Verfügbarkeit ab.",
    planVisit: "Besuch planen",
    include: "Möchten Sie",
    inSafari: "in Ihre Safari aufnehmen?",
    exploreOther: "Weitere Reiseziele entdecken",
    discoverTitle: "Reiseziele",
    destinationIntro: "Entdecken Sie Tansanias Tierwelt, Landschaften und Küsten. Wählen Sie ein Reiseziel für Ihre Safari.",
    view: "Reiseziel ansehen",
  },
  es: {
    back: "Volver a los destinos",
    discover: "Descubre Tanzania",
    discoverPrefix: "Descubre",
    about: "Sobre este destino",
    highlights: "Lo más destacado",
    makeMost: "Aprovecha al máximo tu visita",
    thingsToDo: "Qué hacer en",
    activitiesIntro: "Descubre experiencias inolvidables en este destino y sus alrededores. Las actividades dependen de la temporada, las normas del parque, el clima y la disponibilidad.",
    planVisit: "Planificar una visita",
    include: "¿Quieres incluir",
    inSafari: "en tu safari?",
    exploreOther: "Explorar otros destinos",
    discoverTitle: "Destinos",
    destinationIntro: "Explora la fauna, los paisajes y las costas de Tanzania. Elige un destino para descubrir experiencias para tu safari.",
    view: "Ver destino",
  },
  fr: {
    back: "Retour aux destinations",
    discover: "Découvrez la Tanzanie",
    discoverPrefix: "Découvrez",
    about: "À propos de cette destination",
    highlights: "Points forts de la destination",
    makeMost: "Profitez pleinement de votre visite",
    thingsToDo: "Que faire à",
    activitiesIntro: "Découvrez des expériences mémorables dans cette destination et ses environs. Les activités dépendent de la saison, des règles du parc, de la météo et des disponibilités.",
    planVisit: "Planifier une visite",
    include: "Envie d'inclure",
    inSafari: "dans votre safari ?",
    exploreOther: "Découvrir d'autres destinations",
    discoverTitle: "Destinations",
    destinationIntro: "Découvrez la faune, les paysages et les côtes remarquables de Tanzanie. Choisissez une destination pour votre safari.",
    view: "Voir la destination",
  },
  it: {
    back: "Torna alle destinazioni",
    discover: "Scopri la Tanzania",
    discoverPrefix: "Scopri",
    about: "Informazioni sulla destinazione",
    highlights: "Punti salienti",
    makeMost: "Vivi al meglio la tua visita",
    thingsToDo: "Cosa fare a",
    activitiesIntro: "Scopri esperienze indimenticabili in questa destinazione e nei dintorni. Le attività dipendono dalla stagione, dalle regole del parco, dal meteo e dalla disponibilità.",
    planVisit: "Pianifica una visita",
    include: "Vuoi includere",
    inSafari: "nel tuo safari?",
    exploreOther: "Scopri altre destinazioni",
    discoverTitle: "Destinazioni",
    destinationIntro: "Scopri la straordinaria fauna, i paesaggi e le coste della Tanzania. Scegli una destinazione per il tuo safari.",
    view: "Vedi destinazione",
  },
  zh: {
    back: "返回目的地列表",
    discover: "探索坦桑尼亚",
    discoverPrefix: "探索",
    about: "目的地介绍",
    highlights: "目的地亮点",
    makeMost: "充分体验您的旅程",
    thingsToDo: "在这里可以体验",
    activitiesIntro: "探索目的地及周边的精彩体验。活动安排可能受到季节、公园规定、天气和当地供应情况的影响。",
    planVisit: "计划参观",
    include: "想将",
    inSafari: "加入您的 safari 行程吗？",
    exploreOther: "探索其他目的地",
    discoverTitle: "目的地",
    destinationIntro: "探索坦桑尼亚丰富的野生动物、壮丽景观和海岸线。选择目的地，了解适合加入 safari 的体验。",
    view: "查看目的地",
  },
};

const dl = destinationLabels[lang];

const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [hasPopupShown, setHasPopupShown] = useState(false);
  const [isBookOpen, setIsBookOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [selectedSafariId, setSelectedSafariId] = useState<string | null>(null);
  const [selectedDestination, setSelectedDestination] =
    useState<Destination | null>(null);
  const [bookingTrip, setBookingTrip] = useState<string>("");
  const [bookingStep, setBookingStep] = useState<1 | 2>(1);
  const [bookingDate, setBookingDate] = useState("");
  const [bookingAdults, setBookingAdults] = useState("2");
  const [bookingChildren, setBookingChildren] = useState("0");
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent">(
    "idle",
  );
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const localizedDestinations =
    lang === "en"
      ? destinations
      : destinations.map((destination) => {
          const copy = destinationsTranslations[lang];
          return {
            ...destination,
            desc: copy.summaries[destination.id] ?? destination.desc,
            details: copy.details.replace(
              "{destination}",
              destination.shortName,
            ),
            highlights: copy.highlights,
            activities: destination.activities.map((activity, index) => ({
              ...activity,
              ...copy.activities[index],
            })),
          };
        });

  const activeDestination = selectedDestination
    ? localizedDestinations.find(
        (destination) => destination.id === selectedDestination.id,
      ) ?? selectedDestination
    : null;

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia) {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setPrefersReducedMotion(mediaQuery.matches);
      const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
      mediaQuery.addEventListener("change", listener);
      return () => mediaQuery.removeEventListener("change", listener);
    }
  }, []);

  useEffect(() => {
    const playVideo = async () => {
      if (videoRef.current && !prefersReducedMotion) {
        try {
          videoRef.current.muted = true;
          videoRef.current.defaultMuted = true;
          await videoRef.current.play();
        } catch (error) {
          console.log("Autoplay was prevented:", error);
          // Fallback: try playing again on first user interaction if needed
          const handleFirstTouch = () => {
            videoRef.current?.play().catch(() => {});
            window.removeEventListener("touchstart", handleFirstTouch);
            window.removeEventListener("mousedown", handleFirstTouch);
            window.removeEventListener("scroll", handleFirstTouch);
          };
          window.addEventListener("touchstart", handleFirstTouch);
          window.addEventListener("mousedown", handleFirstTouch);
          window.addEventListener("scroll", handleFirstTouch);
        }
      }
    };
    playVideo();
  }, [prefersReducedMotion]);

  // Ensure video loops smoothly
  const handleVideoEnded = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch((e) => console.log("Loop play failed:", e));
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      if (window.scrollY > 1500 && !hasPopupShown) {
        setShowPopup(true);
        setHasPopupShown(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, [hasPopupShown]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  if (activeDestination) {
    return (
      <div className="min-h-screen bg-[#F4F0E6] text-slate-800">
        <header className="sticky top-0 z-40 border-b border-black/10 bg-[#F4F0E6]/95 backdrop-blur-md">
          <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-4 md:px-6">
            
<button
  onClick={() => {
    setSelectedDestination(null);

    window.setTimeout(() => {
      document.getElementById("destinations")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  }}
  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition-colors hover:text-[#D46F4D]"
>
  <ArrowLeft size={18} />
  {dl.back}
</button>

            <div className="flex items-center gap-3">
              <div className="relative">
                <button
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  aria-label={ui.navigation.chooseLanguage}
                  aria-expanded={isLangMenuOpen}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-3 py-2 text-sm font-semibold uppercase text-slate-700 hover:border-[#D46F4D]"
                >
                  <Globe2 size={16} />
                  {lang}
                </button>
                <AnimatePresence>
                  {isLangMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      className="absolute right-0 top-full z-50 mt-2 min-w-36 overflow-hidden rounded-xl border border-gray-100 bg-white py-2 shadow-xl"
                    >
                      {languages.map((language) => (
                        <button
                          key={language}
                          onClick={() => {
                            setLang(language);
                            setIsLangMenuOpen(false);
                          }}
                          className={`block w-full px-4 py-2 text-left text-sm hover:bg-gray-50 ${
                            lang === language
                              ? "font-bold text-[#D46F4D]"
                              : "text-slate-700"
                          }`}
                        >
                          {languageNames[language]}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <span className="hidden font-playfair text-lg font-semibold text-slate-900 sm:inline">
                Black Eagle <span className="text-[#D46F4D]">Tours &amp; Safaris</span>
              </span>
            </div>
          </div>
        </header>
        <main>
          <section className="relative h-[52vh] min-h-[340px] overflow-hidden md:h-[65vh]">
            <img src={activeDestination.image} alt={activeDestination.name} className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
            <div className="container relative z-10 mx-auto flex h-full items-end px-5 pb-12 md:px-8 md:pb-16">
              <div className="max-w-4xl text-white">
                <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#F0A080]"><MapPin size={15} /> {dl.discover}</span>
                <h1 className="mb-4 font-playfair text-4xl font-semibold leading-tight md:text-6xl">{activeDestination.name}</h1>
                <p className="max-w-2xl text-base leading-relaxed text-white/85 md:text-xl">{activeDestination.desc}</p>
              </div>
            </div>
          </section>
          <section className="container mx-auto grid grid-cols-1 gap-12 px-5 py-14 md:grid-cols-[1.5fr_1fr] md:px-8 md:py-20">
            <article>
              <span className="mb-3 block text-xs font-bold uppercase tracking-[0.22em] text-[#D46F4D]">{dl.about}</span>
              <h2 className="mb-6 font-playfair text-3xl text-slate-900 md:text-4xl">{dl.discoverPrefix} {activeDestination.shortName}</h2>
              <p className="text-base leading-8 text-gray-600 md:text-lg">{activeDestination.details}</p>
              <button onClick={() => { setBookingTrip(activeDestination.shortName); setSelectedDestination(null); window.setTimeout(() => scrollToSection("booking"), 80); }} className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#D46F4D] px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#B95F40]">
                {dl.planVisit} <ArrowRight size={17} />
              </button>
            </article>
            <aside className="h-fit rounded-3xl bg-white p-7 shadow-sm md:p-8">
              <h3 className="mb-6 font-playfair text-2xl text-slate-900">{dl.highlights}</h3>
              <ul className="space-y-4">
                {activeDestination.highlights.map((highlight: string) => (
                  <li key={highlight} className="flex items-start gap-3 text-gray-600"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#D46F4D]" /><span>{highlight}</span></li>
                ))}
              </ul>
            </aside>
          </section>
          <section className="bg-white px-5 py-16 md:px-8 md:py-24">
            <div className="container mx-auto">
              <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
                <span className="mb-3 block text-xs font-bold uppercase tracking-[0.24em] text-[#D46F4D]">{dl.makeMost}</span>
                <h2 className="font-playfair text-3xl text-slate-900 md:text-5xl">{dl.thingsToDo} {activeDestination.shortName}</h2>
                <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600">{dl.activitiesIntro}</p>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {activeDestination.activities.map((activity) => (
                  <article key={activity.title} className="group overflow-hidden rounded-3xl bg-[#F4F0E6] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <div className="relative h-56 overflow-hidden">
                      <img src={activity.image || activeDestination.image} alt={activity.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                    </div>
                    <div className="p-6 md:p-7">
                      <h3 className="mb-3 font-playfair text-xl text-slate-900 md:text-2xl">{activity.title}</h3>
                      <p className="text-sm leading-7 text-gray-600">{activity.description}</p>
                    </div>
                  </article>
                ))}
              </div>
             
            </div>
          </section>

          <section className="border-t border-black/5 bg-white py-10">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-5 md:flex-row md:px-8">
              <p className="text-sm text-gray-500">{dl.include} {activeDestination.shortName} {dl.inSafari}</p>
              <button onClick={() => { setSelectedDestination(null); window.setTimeout(() => scrollToSection("destinations"), 80); }} className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#B95F40] hover:text-slate-900">
                {dl.exploreOther} <ArrowRight size={16} />
              </button>
            </div>
          </section>
        </main>
      </div>
    );
  }

  return (
    <div className="font-sans text-slate-800 bg-[#F4F0E6] min-h-screen selection:bg-[#D46F4D] selection:text-white relative">
      <BookModal
        isOpen={isBookOpen}
        onClose={() => setIsBookOpen(false)}
        labels={ui.bookingModal}
      />

      {/* Loading Screen */}
     

<AnimatePresence>
  {loading && (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] bg-[#232B25] flex flex-col items-center justify-center"
    >
      <div className="text-center px-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center mb-6"
        >
          <img
            src="https://i.ibb.co/C5rs71sC/image0-removebg-preview.png"
            alt="Black Eagle Logo"
            className="w-40 h-40 md:w-56 md:h-56 object-contain"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <h1 className="text-5xl md:text-8xl font-playfair text-white font-bold tracking-tighter mb-2">
          Black Eagle<span className="text-[#D46F4D]">.</span>
        </h1>

        <p className="text-[#D46F4D] text-xs md:text-sm tracking-[0.4em] uppercase font-light mt-4">
          {t.hero.subtitle}
        </p>
      </div>
    </motion.div>
  )}
</AnimatePresence>

      {/* Engagement Pop-Up */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[60] w-[90%] md:w-auto md:max-w-sm"
          >
            <div className="bg-[#232B25]/95 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-[#D46F4D]/30 relative overflow-hidden">
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
              <h4 className="text-2xl font-playfair text-white mb-2">
                {t.booking.enquireNow}
              </h4>
              <p className="text-gray-300 text-sm mb-6 font-light leading-relaxed">
                {t.booking.message}
              </p>
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => scrollToSection("booking")}
                  className="w-full bg-[#D46F4D] text-white py-3.5 text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-[#232B25] transition-all duration-300 shadow-lg"
                >
                  {t.booking.btn}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      
      
      {/* Navigation */}
      <AnimatePresence>
        {!selectedSafariId && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed left-0 top-0 z-50 w-full px-4 py-2 sm:px-6 md:px-8 transition-all duration-300 ${
              scrolled
                ? "bg-white/95 backdrop-blur-md"
                : "bg-transparent"
            }`}
          >
            {/* Main navigation row */}
            <div className="flex min-h-12 items-center justify-between gap-4">
              {/* Brand and logo */}
              <div
                className="flex shrink-0 cursor-pointer items-center gap-2 sm:gap-3"
                onClick={() => {
                  setSelectedSafariId(null);
                  scrollToSection("home");
                }}
              >
                <img
                  src="https://i.ibb.co/C5rs71sC/image0-removebg-preview.png"
                  alt="Black Eagle Tours and Safaris Logo"
                  className="block h-12 w-12 shrink-0 object-contain sm:h-14 sm:w-14 md:h-16 md:w-16"
                  referrerPolicy="no-referrer"
                />

                <span
                  className={`whitespace-nowrap text-lg font-playfair font-bold tracking-tight transition-colors duration-300 sm:text-xl md:text-2xl ${
                    scrolled
                      ? "text-slate-900"
                      : "text-white drop-shadow-lg"
                  }`}
                >
                  Black Eagle<span className="text-[#D46F4D]">.</span>
                </span>
              </div>

              {/* Desktop navigation */}
              <div
                className={`hidden lg:flex items-center space-x-5 xl:space-x-7 text-[11px] xl:text-xs tracking-[0.15em] font-semibold uppercase ${
                  scrolled ? "text-slate-800" : "text-white"
                }`}
              >
                {[
                  { label: ui.navigation.home, id: "home" },
                  { label: ui.navigation.about, id: "about" },
                  { label: ui.navigation.packages, id: "tours" },
                  { label: ui.navigation.destinations, id: "destinations" },
                  { label: ui.navigation.contactUs, id: "booking" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setSelectedSafariId(null);
                      scrollToSection(item.id);
                    }}
                    className="whitespace-nowrap transition-colors hover:text-[#D46F4D]"
                  >
                    {item.label}
                  </button>
                ))}

                {/* Language selector */}
                <div className="relative">
                  <button
                    onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                    className={`flex items-center gap-2 rounded-full border px-3 py-2 transition-all duration-300 ${
                      scrolled
                        ? "border-slate-300 hover:border-[#D46F4D]"
                        : "border-white/40 hover:border-white"
                    }`}
                    aria-label={ui.navigation.chooseLanguage}
                    aria-expanded={isLangMenuOpen}
                  >
                    <img
                      src={`https://flagcdn.com/w20/${
                        lang === "en" ? "gb" : lang === "zh" ? "cn" : lang
                      }.png`}
                      alt=""
                      className="w-4 rounded-sm"
                    />
                    <span>{lang}</span>
                  </button>

                  <AnimatePresence>
                    {isLangMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute right-0 top-full z-[70] mt-3 min-w-[150px] overflow-hidden rounded-xl border border-gray-100 bg-white py-2 shadow-2xl"
                      >
                        {languages.map((l) => (
                          <button
                            key={l}
                            onClick={() => {
                              setLang(l);
                              setIsLangMenuOpen(false);
                            }}
                            className={`flex w-full items-center gap-3 px-4 py-3 text-left text-slate-800 transition-colors hover:bg-gray-50 ${
                              lang === l ? "font-bold text-[#D46F4D]" : ""
                            }`}
                          >
                            <img
                              src={`https://flagcdn.com/w20/${
                                l === "en" ? "gb" : l === "zh" ? "cn" : l
                              }.png`}
                              alt=""
                              className="w-5 rounded-sm"
                            />
                            <span className="text-sm">{languageNames[l]}</span>
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Booking button */}
                <button
                  onClick={() => scrollToSection("booking")}
                  className={`whitespace-nowrap rounded-full px-5 py-3 transition-all duration-300 xl:px-6 ${
                    scrolled
                      ? "bg-[#232B25] text-white hover:bg-[#D46F4D]"
                      : "bg-[#D46F4D] text-white hover:bg-white hover:text-slate-900"
                  }`}
                >
                  {t.nav.inquire}
                </button>
              </div>

              {/* Mobile menu button */}
              <div className="pointer-events-auto lg:hidden">
                <button
                  onClick={toggleMenu}
                  className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors ${
                    scrolled
                      ? "text-slate-900 hover:bg-slate-100"
                      : "text-white hover:bg-white/15"
                  }`}
                  aria-label={
                    isMenuOpen
                      ? ui.navigation.closeMenu
                      : ui.navigation.openMenu
                  }
                  aria-expanded={isMenuOpen}
                >
                  {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
              </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, x: "100%" }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: "100%" }}
                  transition={{ duration: 0.3 }}
                  className="fixed inset-0 z-[60] flex flex-col items-center justify-center overflow-y-auto bg-[#F4F0E6] px-4 pointer-events-auto"
                >
                  <button
                    onClick={toggleMenu}
                    className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full text-slate-900 hover:bg-black/5"
                    aria-label={ui.navigation.closeMenu}
                  >
                    <X size={30} />
                  </button>

                  <img
                    src="https://i.ibb.co/C5rs71sC/image0-removebg-preview.png"
                    alt="Black Eagle Tours and Safaris"
                    className="mb-4 h-28 w-28 object-contain sm:h-28 sm:w-28"
                    referrerPolicy="no-referrer"
                  />

                  <span className="mb-8 font-playfair text-xl font-bold text-slate-900">
                    Black Eagle<span className="text-[#D46F4D]">.</span>
                  </span>

                  {[
                    { label: ui.navigation.home, id: "home" },
                    { label: ui.navigation.about, id: "about" },
                    { label: ui.navigation.packages, id: "tours" },
                    { label: ui.navigation.destinations, id: "destinations" },
                    { label: ui.navigation.contactUs, id: "booking" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setSelectedSafariId(null);
                        scrollToSection(item.id);
                      }}
                      className="mb-5 font-playfair text-3xl text-slate-900 transition-colors hover:text-[#D46F4D] sm:text-4xl"
                    >
                      {item.label}
                    </button>
                  ))}

                  {/* Mobile language selector */}
                  <div className="mt-4 flex flex-wrap justify-center gap-2 px-5">
                    {languages.map((l) => (
                      <button
                        key={l}
                        onClick={() => {
                          setLang(l);
                          setIsMenuOpen(false);
                        }}
                        className={`flex items-center gap-2 rounded-full border px-3 py-2 text-xs uppercase tracking-widest transition-all ${
                          lang === l
                            ? "border-[#D46F4D] bg-[#D46F4D] text-white"
                            : "border-slate-300 text-slate-600 hover:border-[#D46F4D]"
                        }`}
                      >
                        <img
                          src={`https://flagcdn.com/w20/${
                            l === "en" ? "gb" : l === "zh" ? "cn" : l
                          }.png`}
                          alt=""
                          className="w-4 rounded-sm"
                        />
                        <span>{l}</span>
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => scrollToSection("booking")}
                    className="mt-8 rounded-full bg-[#232B25] px-10 py-4 text-base font-semibold text-white shadow-xl transition-colors hover:bg-[#D46F4D]"
                  >
                    {t.nav.inquire}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.nav>
        )}
      </AnimatePresence>


      {selectedSafariId ? (
        <SafariDetails
          safari={currentItineraries.find((i) => i.id === selectedSafariId)}
          t={ui.safariDetails}
          lang={lang}
          onLanguageChange={setLang}
          onBack={() => {
            setTimeout(
              () =>
                window.scrollTo(
                  0,
                  document.getElementById("tours")?.offsetTop || 0,
                ),
              100,
            );
            setSelectedSafariId(null);
          }}
          onBook={() => {
            const saf = currentItineraries.find((i) => i.id === selectedSafariId);
            if (saf) {
              setBookingTrip(saf.title);
            }
            setSelectedSafariId(null);
            setTimeout(() => {
              const element = document.getElementById("booking");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }, 100);
          }}
        />
      ) : (
        <>
          {/* Hero Section */}
          <header
            id="home"
            className="relative h-screen flex items-center justify-center overflow-hidden"
          >
           
{/* Hero Background Video */}
<div className="absolute inset-0 z-0 overflow-hidden">
  <video
    autoPlay
    muted
    loop
    playsInline
    preload="auto"
    className="absolute inset-0 h-full w-full object-cover object-center"
    poster="/images/safari-poster.jpeg"
  >
    <source
      src="/videos/hero.mp4"
      type="video/mp4"
    />
    Your browser does not support HTML video.
  </video>

  {/* Dark overlay: keeps hero text readable */}
  <div className="absolute inset-0 bg-black/35" />
</div>

              
            <div className="relative z-10 container mx-auto px-4 text-center mt-20">
              <Reveal>
                <span className="inline-block py-1.5 px-5 border border-white/20 rounded-full text-white/90 text-[10px] md:text-xs tracking-[0.3em] uppercase mb-8 backdrop-blur-md">
                  {t.hero.subtitle}
                </span>
                <h1 className="text-5xl md:text-8xl lg:text-9xl font-playfair font-medium text-white mb-8 leading-[1.1] tracking-tight">
                  <span className="italic text-shimmer">{t.hero.title}</span>
                </h1>
                <p className="text-gray-200 text-sm md:text-lg font-light max-w-2xl mx-auto mb-12 leading-relaxed tracking-wide px-4">
                  {t.hero.desc}
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <button
                    onClick={() => scrollToSection("tours")}
                    className="group w-full sm:w-auto px-10 py-4 bg-[#D46F4D] text-white rounded-full btn-modern shadow-xl flex items-center justify-center gap-3"
                  >
                    <BookOpen size={16} />{" "}
                    <span className="font-bold tracking-widest uppercase text-xs">
                      {ui.hero.exploreSafaris}
                    </span>
                  </button>
                  <button
                    onClick={() => scrollToSection("booking")}
                    className="group w-full sm:w-auto px-10 py-4 border border-white/30 text-white rounded-full hover:bg-white hover:text-slate-900 transition-all duration-500 font-bold text-xs tracking-widest uppercase backdrop-blur-sm"
                  >
                    {ui.hero.planJourney}
                  </button>
                </div>
              </Reveal>
            </div>
          </header>

          {/* Philosophy Section */}
          <section
            id="philosophy"
            className="py-24 md:py-32 container mx-auto px-4 md:px-12"
          >
            <Reveal>
              <div className="flex flex-col md:flex-row items-center gap-16 md:gap-32">
                <div className="md:w-1/2 relative group">
                  <div className="absolute top-0 left-0 w-full h-full bg-[#D46F4D] rounded-tr-[100px] rounded-bl-[100px] opacity-10 transform translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-700"></div>
                  <div className="rounded-tr-[100px] rounded-bl-[100px] shadow-2xl relative z-10 w-full overflow-hidden h-[450px] md:h-[600px] bg-slate-900">
                    <img
                      src="/images/owner-supplied/usari (21).jpeg"
                      alt="Elephants traversing the Tanzanian savanna"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                <div className="md:w-1/2 text-left">
                  <span className="text-[#D46F4D] text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
                    {t.about.subtitle}
                  </span>
                  <h2 className="text-4xl md:text-6xl font-playfair text-slate-900 mb-8 leading-[1.1]">
                    <span className="italic text-gray-400 font-normal">
                      {t.about.title}
                    </span>
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8 font-light">
                    {t.about.desc}
                  </p>
                  <div
                    className="flex items-center gap-4 group cursor-pointer"
                    onClick={() => scrollToSection("tours")}
                  >
                    <div className="w-12 h-12 rounded-full border border-[#D46F4D] flex items-center justify-center text-[#D46F4D] group-hover:bg-[#D46F4D] group-hover:text-white transition-all">
                      <ArrowRight size={20} />
                    </div>
                    <span className="font-playfair italic text-xl text-slate-800">
                      {t.about.welcome}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </section>

          {/* About Us, Vision, Mission Section */}
          <section id="about" className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 md:px-12">
              <Reveal>
                <div className="max-w-4xl mx-auto text-center mb-20">
                  <span className="text-[#D46F4D] text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
                    {t.aboutUs.title}
                  </span>
                  <h2 className="text-4xl md:text-5xl font-playfair text-slate-900 mb-8">
                    {t.aboutUs.title}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed font-light">
                    {t.aboutUs.content}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500">
                    <div className="w-12 h-12 bg-[#D46F4D]/10 rounded-2xl flex items-center justify-center text-[#D46F4D] mb-6">
                      <Eye size={24} />
                    </div>
                    <h3 className="text-2xl font-playfair text-slate-900 mb-4">
                      {t.aboutUs.visionTitle}
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-light">
                      {t.aboutUs.visionContent}
                    </p>
                  </div>

                  <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500">
                    <div className="w-12 h-12 bg-[#D46F4D]/10 rounded-2xl flex items-center justify-center text-[#D46F4D] mb-6">
                      <Target size={24} />
                    </div>
                    <h3 className="text-2xl font-playfair text-slate-900 mb-4">
                      {t.aboutUs.missionTitle}
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-light">
                      {t.aboutUs.missionContent}
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>



          {/* Pricing Section */}
          <section id="tours" className="py-24 md:py-32 bg-[#F4F0E6]">
            <div className="container mx-auto px-4 md:px-6">
              <Reveal>
                <div className="text-center max-w-3xl mx-auto mb-20">
                  <span className="text-[#D46F4D] text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                    {t.tours.subtitle}
                  </span>
                  <h2 className="text-4xl md:text-6xl font-playfair text-slate-900 mb-6">
                    {t.tours.title}
                  </h2>
                  <p className="text-gray-500 font-light text-lg">
                    {t.tours.desc}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {currentItineraries.map((itinerary) => (
                    <PricingCard
                      key={itinerary.id}
                      image={itinerary.image}
                      days={itinerary.days}
                      title={itinerary.title}
                      location={itinerary.location}
                      price={itinerary.price}
                      onBook={() => setSelectedSafariId(itinerary.id)}
                      startingFromLabel={t.tours.startingFrom}
                      exploreLabel={ui.explore}
                    />
                  ))}
                </div>
              </Reveal>
            </div>
          </section>

          {/* Owner-informed Destination Guide */}
          <section id="destinations" className="py-24 md:py-32 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <Reveal>
                <div className="max-w-3xl mx-auto text-center mb-14">
                  <span className="text-[#D46F4D] text-xs font-bold tracking-[0.25em] uppercase mb-4 block">{dl.discover}</span>
                  <h2 className="text-4xl md:text-6xl font-playfair text-slate-900 mb-5">{dl.discoverTitle}</h2>
                  <p className="text-gray-500 text-lg font-light leading-relaxed">{dl.destinationIntro}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
                  {localizedDestinations.map((destination) => (
                    <article key={destination.name} className="group overflow-hidden rounded-3xl bg-[#F4F0E6] border border-black/5 shadow-sm hover:shadow-xl transition-all duration-500">
                      <div className="h-64 overflow-hidden bg-slate-200">
                        <img src={destination.image} alt={`${destination.name}, Tanzania`} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      </div>
                      <div className="p-7">
                        <h3 className="font-playfair text-2xl text-slate-900 mb-3">{destination.shortName}</h3>
                        <p className="text-gray-600 leading-relaxed font-light">{destination.desc}</p>
                        <button
                          onClick={() => { setSelectedDestination(destination); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                          aria-label={`View ${destination.name} details`}
                          className="mt-6 inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#B95F40] hover:text-slate-900 transition-colors"
                        >
                          {dl.view} <ArrowRight size={16} />
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              </Reveal>
            </div>
          </section>

          {/* Booking Form */}
          <section
            id="booking"
            className="relative py-20 md:py-28 bg-[#232B25]"
          >
            <div className="relative z-10 container mx-auto px-4 md:px-6">
              <Reveal>
                <div className="flex flex-col lg:flex-row gap-16 md:gap-32 items-start">
                  <div className="lg:w-1/2 text-white pt-6 md:pt-10">
                    <span className="inline-block py-1.5 px-4 border border-[#D46F4D] rounded-full text-[#D46F4D] text-xs tracking-[0.2em] uppercase mb-8 backdrop-blur-sm">
                      {t.booking.subtitle}
                    </span>
                    <h2 className="text-4xl md:text-7xl font-playfair font-bold mb-8 leading-tight">
                      <span className="italic text-[#D46F4D]">
                        {t.booking.title}
                      </span>
                    </h2>
                    <a
                      href="https://wa.me/255717513326"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-6 text-2xl md:text-4xl font-playfair font-bold text-white border-t border-white/10 pt-10 hover:text-[#D46F4D] transition-colors"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="32"
                        height="32"
                        fill="currentColor"
                        className="text-[#D46F4D]"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      <span>+255 717 513 326</span>
                    </a>
                  </div>
                  <div className="lg:w-1/2 w-full">
                    <div className="glass-form p-6 md:p-9 rounded-3xl shadow-2xl border border-white/10">
                      <div className="mb-6">
                        <span className="text-[#D46F4D] text-[10px] font-bold uppercase tracking-[0.25em]">
                          {bt.step} {bookingStep} {bt.of} 2
                        </span>
                        <div className="mt-3 h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                          <div
                            className={`h-full rounded-full bg-[#D46F4D] transition-all duration-300 ${
                              bookingStep === 1 ? "w-1/2" : "w-full"
                            }`}
                          />
                        </div>
                        <h3 className="text-3xl font-playfair text-white mt-5 mb-2">
                          {bookingStep === 1 ? bt.planTrip : bt.yourDetails}
                        </h3>
                        <p className="text-sm text-gray-300 leading-relaxed">
                          {bookingStep === 1
                            ? bt.chooseTripAndDate
                            : bt.contactDetails}
                        </p>
                      </div>

                      <form
                        className="space-y-4"
                        onSubmit={async (e) => {
                          e.preventDefault();

                          if (formStatus === "sending" || formStatus === "sent") {
                            return;
                          }

                          if (bookingStep === 1) {
                            if (!bookingTrip || !bookingDate) {
                              alert(bt.requiredTripDate);
                              return;
                            }
                            setBookingStep(2);
                            return;
                          }

                          const formData = new FormData(e.currentTarget);
                          const name = String(formData.get("name") || "").trim();
                          const email = String(formData.get("email") || "").trim();
                          const message = String(formData.get("message") || "").trim();

                          setFormStatus("sending");

                          try {
                            const response = await fetch("/api/send-email", {
                              method: "POST",
                              headers: { "Content-Type": "application/json" },
                              body: JSON.stringify({
                                name,
                                email,
                                date: bookingDate,
                                trip: bookingTrip,
                                message: [
                                  `Travellers: ${bookingAdults} adults, ${bookingChildren} children`,
                                  `Additional details: ${message || "None provided."}`,
                                ].join("\\n"),
                              }),
                            });

                            if (!response.ok) {
                              const contentType = response.headers.get("content-type");
                              if (contentType?.includes("application/json")) {
                                const errorData = await response.json();
                                throw new Error(errorData.error || "Failed to send email");
                              }
                              throw new Error(
                                `Server error (${response.status}). Please try again or contact us on WhatsApp.`,
                              );
                            }

                            setFormStatus("sent");
                          } catch (error) {
                            console.error("Error sending booking request:", error);
                            setFormStatus("idle");
                            alert(
                              error instanceof Error
                                ? error.message
                                : bt.sendError,
                            );
                          }
                        }}
                      >
                        {formStatus === "sent" ? (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="rounded-2xl border border-green-400/30 bg-green-400/10 p-5 text-center"
                          >
                            <p className="font-semibold text-green-300">
                              {bt.thankYou}
                            </p>
                            <p className="mt-2 text-sm text-gray-300">
                              {bt.teamContact}
                            </p>
                            <button
                              type="button"
                              onClick={() => {
                                setBookingStep(1);
                                setBookingTrip("");
                                setBookingDate("");
                                setBookingAdults("2");
                                setBookingChildren("0");
                                setFormStatus("idle");
                              }}
                              className="mt-4 text-sm font-semibold text-[#D46F4D] hover:text-white transition-colors"
                            >
                              {bt.anotherTrip}
                            </button>
                          </motion.div>
                        ) : (
                          <>
                            {bookingStep === 1 ? (
                              <>
                                <label className="block">
                                  <span className="sr-only">{bt.selectTrip}</span>
                                  <select
                                    name="trip"
                                    required
                                    value={bookingTrip}
                                    onChange={(e) => setBookingTrip(e.target.value)}
                                    className="w-full rounded-xl border border-white/10 bg-[#1B211D] px-5 py-4 text-white focus:outline-none focus:border-[#D46F4D] transition-colors"
                                  >
                                    <option value="">{bt.selectTrip}</option>
                                    <optgroup label={bt.popularItineraries}>
                                      {currentItineraries.map((it) => (
                                        <option key={it.id} value={it.title}>
                                          {it.title}
                                        </option>
                                      ))}
                                    </optgroup>
                                    <optgroup label={bt.otherTrips}>
                                      <option value="Wildlife Safari">{t.booking.trips.wildlife}</option>
                                      <option value="Mountain Climbing">{t.booking.trips.mountain}</option>
                                      <option value="Beach Holiday">{t.booking.trips.beach}</option>
                                      <option value="Cultural Tour">{t.booking.trips.cultural}</option>
                                      <option value="Other Adventure">{t.booking.trips.other}</option>
                                    </optgroup>
                                  </select>
                                </label>

                                <div className="grid grid-cols-2 gap-3">
                                  <label className="block">
                                    <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-white/60">{bt.adults}</span>
                                    <select
                                      value={bookingAdults}
                                      onChange={(e) => setBookingAdults(e.target.value)}
                                      className="w-full rounded-xl border border-white/10 bg-[#1B211D] px-4 py-4 text-white focus:outline-none focus:border-[#D46F4D] transition-colors"
                                    >
                                      {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
                                        <option key={n} value={String(n)}>{n} {n === 1 ? bt.adult : bt.adults.toLowerCase()}</option>
                                      ))}
                                    </select>
                                  </label>
                                  <label className="block">
                                    <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-white/60">{bt.children}</span>
                                    <select
                                      value={bookingChildren}
                                      onChange={(e) => setBookingChildren(e.target.value)}
                                      className="w-full rounded-xl border border-white/10 bg-[#1B211D] px-4 py-4 text-white focus:outline-none focus:border-[#D46F4D] transition-colors"
                                    >
                                      {Array.from({ length: 11 }, (_, i) => i).map((n) => (
                                        <option key={n} value={String(n)}>{n} {n === 1 ? bt.child : bt.children.toLowerCase()}</option>
                                      ))}
                                    </select>
                                  </label>
                                </div>
                                <label className="block">
                                  <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-white/60">{bt.arrivalDate}</span>
                                  <input
                                    name="date"
                                    type="date"
                                    value={bookingDate}
                                    onChange={(e) => setBookingDate(e.target.value)}
                                    min={new Date().toISOString().split("T")[0]}
                                    required
                                    className="w-full rounded-xl border border-white/10 bg-[#1B211D] px-5 py-4 text-white focus:outline-none focus:border-[#D46F4D] transition-colors [color-scheme:dark]"
                                  />
                                </label>

                                <button
                                  type="submit"
                                  className="w-full rounded-full bg-[#D46F4D] px-6 py-4 font-bold uppercase tracking-[0.15em] text-white transition-colors hover:bg-white hover:text-[#232B25]"
                                >
                                  {bt.continue} <span aria-hidden="true">→</span>
                                </button>
                              </>
                            ) : (
                              <>
                                <button
                                  type="button"
                                  onClick={() => setBookingStep(1)}
                                  className="text-sm text-gray-300 hover:text-[#D46F4D] transition-colors"
                                >
                                  ← {bt.back}
                                </button>

                                <input
                                  name="name"
                                  type="text"
                                  autoComplete="name"
                                  required
                                  placeholder={bt.fullName}
                                  className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-[#D46F4D] transition-colors"
                                />
                                <input
                                  name="email"
                                  type="email"
                                  autoComplete="email"
                                  required
                                  placeholder={bt.email}
                                  className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-[#D46F4D] transition-colors"
                                />
                                <textarea
                                  name="message"
                                  rows={2}
                                  placeholder={bt.message}
                                  className="w-full resize-y rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-[#D46F4D] transition-colors"
                                />

                                <div className="rounded-xl bg-white/5 px-4 py-3 text-sm leading-6 text-gray-300">
                                  <div><span className="text-[#D46F4D]">{bt.trip}:</span> {bookingTrip}</div>
                                  <div><span className="text-[#D46F4D]">{bt.travellers}:</span> {bookingAdults} {bt.adults.toLowerCase()}, {bookingChildren} {bt.children.toLowerCase()}</div>
                                  <div><span className="text-[#D46F4D]">{bt.arrival}:</span> {bookingDate}</div>
                                </div>

                                <button
                                  type="submit"
                                  disabled={formStatus === "sending"}
                                  className="w-full rounded-full bg-[#D46F4D] px-6 py-4 font-bold uppercase tracking-[0.15em] text-white transition-colors hover:bg-white hover:text-[#232B25] disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                  {formStatus === "sending" ? bt.sending : bt.send}
                                </button>
                              </>
                            )}
                          </>
                        )}
                      </form>
                      <p className="mt-5 text-center text-xs text-gray-400">
                        {bt.preferChat}{" "}
                        <a
                          href="https://wa.me/255717513326"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#D46F4D] hover:text-white underline underline-offset-4"
                        >
                          {bt.whatsapp}
                        </a>
                      </p>
                    </div>
                  </div>

                </div>
              </Reveal>
            </div>
          </section>
        </>
      )}

      {/* Premium Footer */}
      <footer className="relative overflow-hidden border-t border-white/10 bg-[#171D19] text-white/75">
        {/* WhatsApp floating button */}
        <a
          href="https://wa.me/255717513326"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 left-6 z-[60] flex items-center justify-center rounded-full bg-[#25D366] p-4 text-white shadow-2xl transition-transform duration-300 hover:scale-110"
          title={ui.whatsappTitle}
          aria-label={ui.whatsappLabel}
        >
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>

        <div className="container mx-auto grid grid-cols-1 gap-12 px-5 py-16 md:grid-cols-2 md:gap-16 md:px-6 lg:grid-cols-4 lg:py-20">
          <div className="lg:col-span-2">
            <a href="#top" className="mb-6 inline-flex items-center gap-3" aria-label="Black Eagle Tours home">
              <img
                src="https://i.ibb.co/C5rs71sC/image0-removebg-preview.png"
                alt="Black Eagle Tours logo"
                className="h-14 w-14 object-contain"
                referrerPolicy="no-referrer"
              />
              <span className="font-playfair text-2xl font-bold tracking-wide text-white md:text-3xl">
                Black Eagle<span className="text-[#D46F4D]">.</span>
              </span>
            </a>
            <p className="max-w-md text-sm leading-7 text-white/60 md:text-base">
              {t.footer.desc}
            </p>
            <div className="mt-7 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-white/45">
              <CreditCard size={17} className="text-[#D46F4D]" />
              <span>{t.footer.accept}</span>
              <span className="ml-2 rounded-md border border-white/10 px-3 py-2 font-bold tracking-normal text-white/75">VISA</span>
              <span className="rounded-md border border-white/10 px-3 py-2 font-bold tracking-normal text-white/75">Mastercard</span>
            </div>
          </div>

          <div>
            <h4 className="mb-5 font-playfair text-xl text-white">{t.footer.discover}</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <button onClick={() => scrollToSection("about")} className="transition-colors hover:text-[#D46F4D]">
                  {t.footer.story}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("tours")} className="transition-colors hover:text-[#D46F4D]">
                  {t.footer.safaris}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("booking")} className="transition-colors hover:text-[#D46F4D]">
                  {bt.planTrip}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 font-playfair text-xl text-white">{t.footer.connect}</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={17} className="mt-0.5 shrink-0 text-[#D46F4D]" />
                <span>Arusha, Tanzania</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#D46F4D]" aria-hidden="true">☎</span>
                <a href="tel:+255717513326" className="transition-colors hover:text-[#D46F4D]">+255 717 513 326</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={17} className="shrink-0 text-[#D46F4D]" />
                <a href="mailto:info@blackeagletour.com" className="break-all transition-colors hover:text-[#D46F4D]">info@blackeagletour.com</a>
              </li>
            </ul>
            <a
              href="https://www.instagram.com/blackeagle.tour?utm_source=ig_web_button_share_sheet&igsh=ZDNlMzQ0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label={ui.followInstagram}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm transition-all hover:border-[#D46F4D] hover:text-[#D46F4D]"
            >
              <Instagram size={17} />
              {ui.followJourney}
            </a>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-5 py-6 text-center text-xs text-white/40 md:flex-row md:px-6 md:text-left">
            <p>&copy; {new Date().getFullYear()} Black Eagle Tours &amp; Safaris. {t.footer.rights}</p>
            <p className="tracking-wide">{t.footer.tagline}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
