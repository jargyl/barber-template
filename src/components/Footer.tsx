import React from "react";
import { Instagram, Scissors, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-zinc-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <button
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="mb-6 p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors shadow-md"
          >
            <ArrowUp className="h-5 w-5 text-white" />
          </button>

          <div className="flex items-center mb-2 hover:text-pink-400 transition-colors cursor-pointer">
            <Scissors className="h-8 w-8" />
            <span className="ml-2 text-xl font-bold tracking-wide">
              CutCraft
            </span>
          </div>

          <p className="text-zinc-400 text-sm mb-4 text-center max-w-md">
            Home-based barber in Los Angeles. Crafting confidence through
            precision cuts and a modern experience.
          </p>

          <nav className="mb-4">
            <ul className="flex flex-wrap gap-6 justify-center">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-zinc-300 hover:text-white text-sm font-medium transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2 mb-6">
            <a
              href="https://instagram.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition-colors flex items-center gap-1"
            >
              <Instagram className="h-6 w-6" />
              <span className="text-sm font-medium">@yourhandle</span>
            </a>
          </div>

          <div className="w-full h-px bg-zinc-800 mb-4" />

          <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-zinc-500 text-xs text-center">
            <span>© {currentYear} CutCraft. All rights reserved.</span>
            <span className="hidden md:inline">|</span>
            <a
              href="#"
              className="hover:text-white underline underline-offset-2 transition-colors"
            >
              Privacy Policy
            </a>
            <span className="hidden md:inline">|</span>
            <a
              href="#"
              className="hover:text-white underline underline-offset-2 transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
