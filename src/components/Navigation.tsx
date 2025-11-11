import { useState } from "react";
import logo from "../../src/assets/logo.jpeg";
import { Menu, X, Music, Guitar, Piano, Mic, Drum, Music2, Music3, BookOpen, ShoppingBag, KeyboardMusic, Info, ChevronDown, ChevronUp } from "lucide-react";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileInstrumentsOpen, setMobileInstrumentsOpen] = useState(false);
  const [mobileExamsOpen, setMobileExamsOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

  const instruments = [
    { name: "Guitar", href: "/guitar", Icon: Guitar },
    { name: "Piano", href: "/piano", Icon: Piano },
    { name: "Vocals", href: "/vocals", Icon: Mic },
    { name: "Drums", href: "/drums", Icon: Drum },
    { name: "Violin", href: "/violin", Icon: Music2 },
    { name: "Flute", href: "/flute", Icon: Music3 },
    { name: "Keyboard", href: "/keyboard", Icon: KeyboardMusic },
    { name: "Chenda Melam", href: "/chenda-melam", Icon: Drum },
  ];

  const exams = [
    { name: "Trinity", href: "/trinity" },
    { name: "ABRSM", href: "/abrsm" },
    { name: "Rockschool (RSL)", href: "/rockschool" },
  ];

  const resources = [
    { name: "How It Works", href: "/how-it-works" },
    { name: "FAQs", href: "/faqs" },
    { name: "Contact", href: "/contact" },
    { name: "Become a Tutor", href: "/tutor" },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-black">
        <div className="w-full px-4">
          {/* Header with Logo and Menu Button */}
          <div className="flex h-20 sm:h-24 lg:h-28 items-center justify-between max-w-[1920px] mx-auto">
            {/* Logo Section */}
            <a href="/" className="flex items-center gap-2 sm:gap-3 flex-shrink-0 min-w-0">
              <img
                src={logo}
                alt="SareGaPaDhaSa Music Academy Logo"
                className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 xl:h-28 xl:w-28 object-contain flex-shrink-0"
              />
              <div className="flex flex-col leading-tight min-w-0">
                <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl font-bold text-white whitespace-nowrap truncate">
                  SareGaPaDhaSa Music Academy
                </span>
                <span className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm font-semibold text-cyan-400 truncate"
                  style={{
                    textShadow: "0 0 8px rgba(34,211,238,0.8), 0 0 16px rgba(34,211,238,0.5)",
                  }}>
                  Powered by CBS Groups
                </span>
              </div>
            </a>

            {/* Desktop Navigation - Hidden on mobile/tablet */}
            <div className="hidden xl:flex items-center gap-1.5 2xl:gap-2 flex-nowrap justify-end flex-shrink-0">
              {/* Instruments Dropdown */}
              <div className="relative group">
                <div className="pb-2">
                  <button className="inline-flex h-10 items-center justify-center rounded-md bg-transparent px-3 py-2 text-sm font-medium text-gray-300 hover:bg-zinc-900 hover:text-white transition-colors whitespace-nowrap">
                    Instruments
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                </div>
                <div className="absolute left-0 top-full hidden group-hover:block w-[420px] xl:w-[520px] z-50 pt-2">
                  <div className="bg-zinc-950 border border-zinc-800 rounded-md shadow-xl">
                    <div className="grid grid-cols-2 gap-3 p-4">
                      {instruments.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="flex items-center gap-3 rounded-md p-3 text-gray-300 hover:bg-zinc-900 hover:text-white transition-colors"
                        >
                          <item.Icon className="h-4 w-4 text-blue-400 flex-shrink-0" />
                          <span className="text-sm font-medium">{item.name}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Grade Exams Dropdown */}
              <div className="relative group">
                <div className="pb-2">
                  <button className="inline-flex h-10 items-center justify-center rounded-md bg-transparent px-3 py-2 text-sm font-medium text-gray-300 hover:bg-zinc-900 hover:text-white transition-colors whitespace-nowrap">
                    Grade Exams
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                </div>
                <div className="absolute left-0 top-full hidden group-hover:block w-[300px] z-50 pt-2">
                  <div className="bg-zinc-950 border border-zinc-800 rounded-md shadow-xl">
                    <div className="p-4 space-y-2">
                      {exams.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block rounded-md p-3 text-gray-300 hover:bg-zinc-900 hover:text-white transition-colors"
                        >
                          <span className="text-sm font-medium">{item.name}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Resources Dropdown */}
              <div className="relative group">
                <div className="pb-2">
                  <button className="inline-flex h-10 items-center justify-center rounded-md bg-transparent px-3 py-2 text-sm font-medium text-gray-300 hover:bg-zinc-900 hover:text-white transition-colors whitespace-nowrap">
                    Resources
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                </div>
                <div className="absolute left-0 top-full hidden group-hover:block w-[240px] z-50 pt-2">
                  <div className="bg-zinc-950 border border-zinc-800 rounded-md shadow-xl">
                    <div className="p-4 space-y-2">
                      {resources.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block rounded-md p-3 text-gray-300 hover:bg-zinc-900 hover:text-white transition-colors"
                        >
                          <span className="text-sm font-medium">{item.name}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <a href="/blog" className="inline-flex h-10 items-center justify-center rounded-md bg-transparent px-3 py-2 text-sm font-medium text-gray-300 hover:bg-zinc-900 hover:text-white transition-colors whitespace-nowrap">
                <BookOpen className="h-4 w-4 mr-1.5" /> Blog
              </a>

              <a href="/store" className="inline-flex h-10 items-center justify-center rounded-md bg-transparent px-3 py-2 text-sm font-medium text-gray-300 hover:bg-zinc-900 hover:text-white transition-colors whitespace-nowrap">
                <ShoppingBag className="h-4 w-4 mr-1.5" /> Store
              </a>

              <a href="/liveband" className="inline-flex h-10 items-center justify-center rounded-md bg-transparent px-3 py-2 text-sm font-medium text-gray-300 hover:bg-zinc-900 hover:text-white transition-colors whitespace-nowrap">
                <Music className="h-4 w-4 mr-1.5" /> Live Band
              </a>

              <a href="/about" className="inline-flex h-10 items-center justify-center rounded-md bg-transparent px-3 py-2 text-sm font-medium text-gray-300 hover:bg-zinc-900 hover:text-white transition-colors whitespace-nowrap">
                <Info className="h-4 w-4 mr-1.5" /> About Us
              </a>

              <a href="/book-demo" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-md text-sm font-medium transition-colors whitespace-nowrap flex-shrink-0">
                Book a FREE Demo
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="xl:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-zinc-800 bg-black max-h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="container mx-auto px-4 py-4 space-y-1">
              {/* Instruments Section */}
              <div className="border-b border-zinc-800 pb-2">
                <button
                  onClick={() => setMobileInstrumentsOpen(!mobileInstrumentsOpen)}
                  className="w-full flex items-center justify-between py-3 text-sm font-semibold text-gray-300 hover:text-white transition-colors"
                >
                  Instruments
                  {mobileInstrumentsOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>
                {mobileInstrumentsOpen && (
                  <div className="pl-4 space-y-1 pb-2">
                    {instruments.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center gap-3 py-2.5 text-sm text-gray-400 hover:text-blue-400 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <item.Icon className="h-4 w-4 flex-shrink-0" />
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Grade Exams Section */}
              <div className="border-b border-zinc-800 pb-2">
                <button
                  onClick={() => setMobileExamsOpen(!mobileExamsOpen)}
                  className="w-full flex items-center justify-between py-3 text-sm font-semibold text-gray-300 hover:text-white transition-colors"
                >
                  Grade Exams
                  {mobileExamsOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>
                {mobileExamsOpen && (
                  <div className="pl-4 space-y-1 pb-2">
                    {exams.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block py-2.5 text-sm text-gray-400 hover:text-blue-400 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Resources Section */}
              <div className="border-b border-zinc-800 pb-2">
                <button
                  onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                  className="w-full flex items-center justify-between py-3 text-sm font-semibold text-gray-300 hover:text-white transition-colors"
                >
                  Resources
                  {mobileResourcesOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>
                {mobileResourcesOpen && (
                  <div className="pl-4 space-y-1 pb-2">
                    {resources.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block py-2.5 text-sm text-gray-400 hover:text-blue-400 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Direct Links */}
              <div className="space-y-1 pt-2">
                <a
                  href="/blog"
                  className="flex items-center gap-3 py-3 text-sm text-gray-300 hover:text-blue-400 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <BookOpen className="h-4 w-4" /> Blog
                </a>
                <a
                  href="/store"
                  className="flex items-center gap-3 py-3 text-sm text-gray-300 hover:text-blue-400 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <ShoppingBag className="h-4 w-4" /> Store
                </a>
                <a
                  href="/liveband"
                  className="flex items-center gap-3 py-3 text-sm text-gray-300 hover:text-blue-400 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Music className="h-4 w-4" /> Live Band
                </a>
                <a
                  href="/about"
                  className="flex items-center gap-3 py-3 text-sm text-gray-300 hover:text-blue-400 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Info className="h-4 w-4" /> About Us
                </a>
              </div>

              {/* CTA Button */}
              <div className="pt-4 pb-2">
                <a
                  href="/book-demo"
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center px-6 py-3 rounded-md text-sm font-medium transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book a FREE Demo
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
      <div className="bg-gradient-to-r from-blue-900/20 via-blue-800/20 to-blue-900/20 border-b border-zinc-800 h-1">
      </div>
    </>
  );
};

export default Navigation;