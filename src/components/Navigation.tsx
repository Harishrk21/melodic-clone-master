import { useState } from "react";
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
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="/" className="flex items-center gap-2">
          <Music className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-foreground">SareGaPaDhaSa Music Academy</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Instruments</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[420px] gap-3 p-4 md:w-[520px] md:grid-cols-2 bg-background">
                    {instruments.map((item) => (
                      <li key={item.name}>
                        <NavigationMenuLink asChild>
                          <a
                            href={item.href}
                            className="flex items-center gap-3 select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            {item.Icon && <item.Icon className="h-4 w-4 text-primary" />}
                            <div className="text-sm font-medium leading-none">{item.name}</div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Singing</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[240px] gap-3 p-4 bg-background">
                    {singing.map((item) => (
                      <li key={item.name}>
                        <NavigationMenuLink asChild>
                          <a
                            href={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
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
                <NavigationMenuTrigger>Grade Exams</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-3 p-4 bg-background">
                    {exams.map((item) => (
                      <li key={item.name}>
                        <NavigationMenuLink asChild>
                          <a
                            href={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
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
                <DropdownMenuTrigger className="inline-flex h-10 items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground">
                  Resources
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" sideOffset={8} className="w-56">
                  {resources.map((item) => (
                    <DropdownMenuItem key={item.name} asChild>
                      <a href={item.href} className="w-full">
                        {item.name}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <NavigationMenuItem>
                <a href="/blog" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                  <BookOpen className="h-4 w-4 mr-2" /> Blog
                </a>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <a href="/store" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                  <ShoppingBag className="h-4 w-4 mr-2" /> Store
                </a>
              </NavigationMenuItem>

              {/** Pricing removed as requested **/}
            </NavigationMenuList>
          </NavigationMenu>

          <Button variant="destructive" size="lg">
            Student - Login
          </Button>
          <Button asChild variant="hero" size="lg">
            <a href="/book-demo">Book a FREE Demo</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <div className="space-y-2">
              <p className="font-semibold text-sm text-muted-foreground">Instruments</p>
              {instruments.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-sm hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-sm text-muted-foreground">Grade Exams</p>
              {exams.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-sm hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-sm text-muted-foreground">Resources</p>
              {resources.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-sm hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <Button asChild variant="hero" size="lg" className="w-full">
              <a href="/book-demo">Book a FREE Demo</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
