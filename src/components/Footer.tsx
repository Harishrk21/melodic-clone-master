import { Music, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Music className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">SareGaPaDhaSa Music Academy</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Empowering musicians with professional music education — primarily offline at our centers, and online live 1‑to‑1.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/how-it-works" className="hover:text-primary transition-colors">How It Works</a></li>
              <li><a href="/faqs" className="hover:text-primary transition-colors">FAQs</a></li>
              <li><a href="/tutor" className="hover:text-primary transition-colors">Become a Tutor</a></li>
              <li><a href="/contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Popular Courses</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/guitar" className="hover:text-primary transition-colors">Guitar Classes</a></li>
              <li><a href="/piano" className="hover:text-primary transition-colors">Piano Lessons</a></li>
              <li><a href="/vocals" className="hover:text-primary transition-colors">Vocal Training</a></li>
              <li><a href="/drums" className="hover:text-primary transition-colors">Drum Lessons</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+91 97898 97600</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@saregapadhasa.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>120+ Cities Worldwide</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} SareGaPaDhaSa Music Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
