import { useState } from "react";
import logo from "../../src/assets/logo.jpeg";
import { Menu, X, Music, Guitar, Piano, Mic, Drum, Music2, Music3, BookOpen, ShoppingBag } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const instruments = [
    { name: "Guitar", href: "/guitar", Icon: Guitar },
    { name: "Piano", href: "/piano", Icon: Piano },
    { name: "Vocals", href: "/vocals", Icon: Mic },
    { name: "Drums", href: "/drums", Icon: Drum },
    { name: "Violin", href: "/violin", Icon: Music2 },
    { name: "Flute", href: "/flute", Icon: Music3 },
    { name: "Chenda Melam", href: "/chenda-melam", Icon: Drum },
  ];

  const singing = [
    { name: "Carnatic", href: "/vocals#carnatic" },
    { name: "Hindustani", href: "/vocals#hindustani" },
    { name: "Western", href: "/vocals#western" },
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
      <div className="container mx-auto flex h-28 items-center justify-between px-4">
        <a href="/" className="flex items-center gap-3">
          <img src={logo} alt="SareGaPaDhaSa Music Academy Logo" className="h-36 w-36 object-contain" />
          <span className="text-2xl font-bold text-white">SareGaPaDhaSa Music Academy</span>
        </a>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-gray-300 hover:bg-zinc-900 hover:text-white data-[state=open]:bg-zinc-900 data-[state=open]:text-white">
                  Instruments
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[420px] gap-3 p-4 md:w-[520px] md:grid-cols-2 bg-zinc-950 border border-zinc-800">
                    {instruments.map((item) => (
                      <li key={item.name}>
                        <NavigationMenuLink asChild>
                          <a
                            href={item.href}
                            className="flex items-center gap-3 select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-zinc-900 hover:text-white text-gray-300"
                          >
                            {item.Icon && <item.Icon className="h-4 w-4 text-blue-400" />}
                            <div className="text-sm font-medium leading-none">{item.name}</div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-gray-300 hover:bg-zinc-900 hover:text-white data-[state=open]:bg-zinc-900 data-[state=open]:text-white">
                  Singing
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[240px] gap-3 p-4 bg-zinc-950 border border-zinc-800">
                    {singing.map((item) => (
                      <li key={item.name}>
                        <NavigationMenuLink asChild>
                          <a
                            href={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-zinc-900 hover:text-white text-gray-300"
                          >
                            <div className="text-sm font-medium leading-none">{item.name}</div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-gray-300 hover:bg-zinc-900 hover:text-white data-[state=open]:bg-zinc-900 data-[state=open]:text-white">
                  Grade Exams
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-3 p-4 bg-zinc-950 border border-zinc-800">
                    {exams.map((item) => (
                      <li key={item.name}>
                        <NavigationMenuLink asChild>
                          <a
                            href={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-zinc-900 hover:text-white text-gray-300"
                          >
                            <div className="text-sm font-medium leading-none">{item.name}</div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <DropdownMenu>
                <DropdownMenuTrigger className="inline-flex h-10 items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-gray-300 hover:bg-zinc-900 hover:text-white">
                  Resources
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" sideOffset={8} className="w-56 bg-zinc-950 border border-zinc-800">
                  {resources.map((item) => (
                    <DropdownMenuItem key={item.name} asChild className="text-gray-300 hover:bg-zinc-900 hover:text-white focus:bg-zinc-900 focus:text-white">
                      <a href={item.href} className="w-full">
                        {item.name}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <NavigationMenuItem>
                <a href="/blog" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-zinc-900 hover:text-white">
                  <BookOpen className="h-4 w-4 mr-2" /> Blog
                </a>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <a href="/store" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-zinc-900 hover:text-white">
                  <ShoppingBag className="h-4 w-4 mr-2" /> Store
                </a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white" size="lg">
            <a href="/book-demo">Book a FREE Demo</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-800 bg-black">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <div className="space-y-2">
              <p className="font-semibold text-sm text-gray-500">Instruments</p>
              {instruments.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-sm text-gray-300 hover:text-blue-400 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-sm text-gray-500">Grade Exams</p>
              {exams.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-sm text-gray-300 hover:text-blue-400 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-sm text-gray-500">Resources</p>
              {resources.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-sm text-gray-300 hover:text-blue-400 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white w-full" size="lg">
              <a href="/book-demo">Book a FREE Demo</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
    <div className="bg-gradient-to-r from-blue-900/20 via-blue-800/20 to-blue-900/20 border-b border-zinc-800">
      
    </div>
    </>
  );
};

export default Navigation;