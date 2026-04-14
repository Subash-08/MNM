import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Layers, Menu, X } from "lucide-react";

export default function Header({ onRegisterClick }: { onRegisterClick: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="container px-4 md:px-8 mx-auto flex items-center justify-between max-w-[1440px]">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-[#1a1a1a] text-white p-2 rounded-xl">
            <Layers className="w-5 h-5" />
          </div>
          <span className="text-xl font-bold text-[#1a1a1a] tracking-tight">MNM</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-gray-600 hover:text-[#1a1a1a] transition-colors">
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Button onClick={onRegisterClick} className="bg-[#1a1a1a] hover:bg-gray-800 text-white rounded-full px-6 py-5 font-medium transition-colors">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden p-2 text-gray-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 p-4 shadow-xl flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-gray-800 py-2 border-b border-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button onClick={() => { onRegisterClick(); setIsMenuOpen(false); }} className="bg-[#1a1a1a] text-white w-full h-12 rounded-full font-medium mt-2">
            Get Started
          </Button>
        </div>
      )}
    </header>
  );
}
