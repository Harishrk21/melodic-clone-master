import { Mail, Phone, MapPin, Youtube, Instagram, Facebook } from "lucide-react";
import logo from "../assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="relative bg-black border-t border-amber-500/30 py-12 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-black to-yellow-900/10"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#d4af3712_1px,transparent_1px),linear-gradient(to_bottom,#d4af3712_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      
      {/* Glowing Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-600/15 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <img src={logo} alt="SareGaPaDhaSa Logo" className="h-24 w-24 object-contain" />
              <span className="text-lg font-bold bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
                SareGaPaDhaSa Music Academy
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering musicians with professional music education — primarily offline at our centers, and online live 1‑to‑1.
            </p>
            
            {/* Social Media Links */}
            <div className="flex items-center gap-3">
              <a 
                href="https://www.youtube.com/@SaReGaPaDhaSa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative p-2.5 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-lg border border-amber-500/30 hover:border-amber-400 transition-all duration-300 hover:scale-110"
              >
                <Youtube className="h-5 w-5 text-amber-400 group-hover:text-amber-300 transition-colors" />
                <div className="absolute inset-0 bg-amber-400/0 group-hover:bg-amber-400/10 rounded-lg transition-colors"></div>
              </a>
              
              <a 
                href="https://www.instagram.com/SaReGaPaDhaSa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative p-2.5 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-lg border border-amber-500/30 hover:border-amber-400 transition-all duration-300 hover:scale-110"
              >
                <Instagram className="h-5 w-5 text-amber-400 group-hover:text-amber-300 transition-colors" />
                <div className="absolute inset-0 bg-amber-400/0 group-hover:bg-amber-400/10 rounded-lg transition-colors"></div>
              </a>
              
              <a 
                href="https://www.facebook.com/SaReGaPaDhaSa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative p-2.5 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-lg border border-amber-500/30 hover:border-amber-400 transition-all duration-300 hover:scale-110"
              >
                <Facebook className="h-5 w-5 text-amber-400 group-hover:text-amber-300 transition-colors" />
                <div className="absolute inset-0 bg-amber-400/0 group-hover:bg-amber-400/10 rounded-lg transition-colors"></div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/how-it-works" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                  How It Works
                </a>
              </li>
              <li>
                <a href="/faqs" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                  FAQs
                </a>
              </li>
              <li>
                <a href="/tutor" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                  Become a Tutor
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-lg">Popular Courses</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/keyboard" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                  Keyboard
                </a>
              </li>
              <li>
                <a href="/guitar" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                  Guitar Classes
                </a>
              </li>
              <li>
                <a href="/piano" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                  Piano Lessons
                </a>
              </li>
              <li>
                <a href="/vocals" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                  Vocal Training
                </a>
              </li>
              <li>
                <a href="/drums" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                  Drum Lessons
                </a>
              </li>
              <li>
                <a href="/chenda-melam" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                  Chenda Melam
                </a>
              </li>
               
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-lg">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 group">
                <div className="p-1.5 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded border border-amber-500/40">
                  <Phone className="h-4 w-4 text-amber-400" />
                </div>
                <span className="text-gray-400 group-hover:text-amber-300 transition-colors">
                  +91 93616 23134
                  <br/>
                  +91 72998 17996
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="p-1.5 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded border border-amber-500/40">
                  <Mail className="h-4 w-4 text-amber-400" />
                </div>
                <span className="text-gray-400 group-hover:text-amber-300 transition-colors">
                  admission@saregapadhasa.com
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="p-1.5 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded border border-amber-500/40">
                  <MapPin className="h-4 w-4 text-amber-400" />
                </div>
                <span className="text-gray-400 group-hover:text-amber-300 transition-colors">
                  No.20, Ground floor, 1st Main Rd, Srinivasa Nagar, Kolathur, Chennai, Tamil Nadu 600099
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-amber-500/30 text-center">
          <p className="text-sm text-amber-300/80">
            &copy; {new Date().getFullYear()} SareGaPaDhaSa Music Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;